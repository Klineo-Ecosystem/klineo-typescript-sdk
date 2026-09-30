import assert from 'node:assert/strict';
import { test } from 'node:test';
import { LiquidityOsApiError, LiquidityOsClient } from '../dist/index.js';

const baseUrl = 'https://api.example.test/api/liquidity-studio/v2';
const json = (body, status = 200) => Response.json(body, { status });

test('paginated reads bind the organization and preserve the opaque cursor', async () => {
  const result = { data: [], meta: { count: 0, hasMore: false } };
  const client = new LiquidityOsClient({
    baseUrl: baseUrl + '///', organizationId: 'org-a', accessToken: 'secret',
    fetch: async (url, init) => {
      assert.equal(url.pathname, '/api/liquidity-studio/v2/scores');
      assert.equal(url.searchParams.get('cursor'), 'opaque+/=?');
      assert.equal(url.searchParams.get('limit'), '10');
      assert.equal(init.method, 'GET');
      assert.equal(init.headers.get('authorization'), 'Bearer secret');
      assert.equal(init.headers.get('x-klineo-organization-id'), 'org-a');
      assert.equal(init.headers.get('content-type'), null);
      assert.equal(init.redirect, 'error');
      return json(result);
    },
  });
  assert.deepEqual(await client.listScores({ query: { limit: 10, cursor: 'opaque+/=?' } }), result);
});

test('mutations encode one path segment and preserve idempotency, preconditions, and abort signals', async () => {
  const signal = new AbortController().signal;
  const body = { status: 'PAUSED', reason: 'reviewed change' };
  let count = 0;
  const client = new LiquidityOsClient({
    baseUrl,
    fetch: async (url, init) => {
      count++;
      assert.equal(url.pathname, '/api/liquidity-studio/v2/intents/id%2F%3F%23');
      assert.equal(init.method, 'PATCH');
      assert.equal(init.headers.get('if-match'), '"current-version"');
      assert.equal(init.headers.get('idempotency-key'), 'request-1');
      assert.equal(init.headers.get('content-type'), 'application/json');
      assert.equal(init.signal, signal);
      assert.deepEqual(JSON.parse(init.body), body);
      return json({ data: {} });
    },
  });
  for (const ifMatch of ['current-version', '"current-version"']) {
    await client.supersedeIntents({ path: { id: 'id/?#' }, body, idempotencyKey: 'request-1', ifMatch, signal });
  }
  assert.equal(count, 2);
  await assert.rejects(client.getIntents({ path: {} }), /Missing path parameter id/);
  assert.equal(count, 2);
});

test('rate-limit diagnostics retain retry guidance and the original error body', async () => {
  const body = { error: { code: 'RATE_LIMITED', message: 'Budget exhausted', retryable: true, details: { scope: 'scores:read' } } };
  const client = new LiquidityOsClient({ baseUrl, fetch: async () => Response.json(body, { status: 429, headers: { 'retry-after': '30' } }) });
  await assert.rejects(client.listScores(), (error) => {
    assert.ok(error instanceof LiquidityOsApiError);
    assert.equal(error.retryable, true);
    assert.equal(error.retryAfter, '30');
    assert.deepEqual(error.body, body);
    return true;
  });
});

test('OAuth uses escaped client credentials and a form-encoded scope grant', async () => {
  const token = { access_token: 'token', token_type: 'Bearer', expires_in: 3600, scope: 'scores:read' };
  const client = new LiquidityOsClient({
    baseUrl, organizationId: 'org-a', accessToken: 'unused-bearer',
    fetch: async (url, init) => {
      assert.equal(url.pathname, '/api/liquidity-studio/v2/oauth/token');
      assert.equal(init.headers.get('content-type'), 'application/x-www-form-urlencoded');
      assert.equal(init.headers.get('authorization'), 'Basic ' + btoa('client%3A%20%CE%BB:secret%3A%2B'));
      assert.equal(init.body.get('grant_type'), 'client_credentials');
      assert.equal(init.body.get('scope'), 'scores:read intents:read');
      return json(token);
    },
  });
  assert.deepEqual(await client.oauthClientCredentials('client: λ', 'secret:+', ['scores:read', 'intents:read']), token);
});

test('HTTP failures preserve structured and OAuth errors without retrying', async () => {
  const cases = [
    [json({ error: { code: 'STALE', message: 'Review current version', correlationId: 'trace-1' } }, 412), 'STALE', 'Review current version', 'trace-1'],
    [json({ error: 'invalid_client' }, 401), 'invalid_client', 'HTTP 401', undefined],
    [json(null, 503), 'LIQUIDITY_OS_REQUEST_FAILED', 'HTTP 503', undefined],
    [json({ error: { code: 12, message: {} } }, 400), 'LIQUIDITY_OS_REQUEST_FAILED', 'HTTP 400', undefined],
    [new Response('{broken', { status: 502, headers: { 'content-type': 'application/json' } }), 'LIQUIDITY_OS_REQUEST_FAILED', 'HTTP 502', undefined],
    [new Response('private proxy error', { status: 500 }), 'LIQUIDITY_OS_REQUEST_FAILED', 'HTTP 500', undefined],
  ];
  for (const [response, code, message, correlationId] of cases) {
    let calls = 0;
    const client = new LiquidityOsClient({ baseUrl, fetch: async () => { calls++; return response; } });
    await assert.rejects(client.listScores(), (error) => {
      assert.ok(error instanceof LiquidityOsApiError);
      assert.equal(error.status, response.status);
      assert.equal(error.code, code);
      assert.equal(error.message, message);
      assert.equal(error.correlationId, correlationId);
      return true;
    });
    assert.equal(calls, 1);
  }
});

test('downloads return bytes and JSON remains JSON; malformed success stays visible', async () => {
  const bytes = new Uint8Array([37, 80, 68, 70]);
  const pdf = new LiquidityOsClient({ baseUrl, fetch: async (_url, init) => {
    assert.ok(init.headers.get('accept').includes('application/pdf'));
    return new Response(bytes, { headers: { 'content-type': 'application/pdf' } });
  } });
  assert.deepEqual(await pdf.downloadPublicLiquidityPassport({ path: { slug: 'public-slug', format: 'pdf' } }), bytes);
  const jsonClient = new LiquidityOsClient({ baseUrl, fetch: async () => new Response('{"data":[]}', { headers: { 'content-type': 'Application/JSON' } }) });
  assert.deepEqual(await jsonClient.listScores(), { data: [] });
  const empty = new LiquidityOsClient({ baseUrl, fetch: async () => new Response(null, { status: 204 }) });
  assert.equal(await empty.listScores(), undefined);
  const malformed = new LiquidityOsClient({ baseUrl, fetch: async () => new Response('{', { headers: { 'content-type': 'application/json' } }) });
  await assert.rejects(malformed.listScores(), SyntaxError);
});

test('invalid base URLs are rejected before credentials can be sent', () => {
  for (const invalid of ['/api/v2', 'ftp://example.test', 'https://user:secret@example.test/v2', baseUrl + '?token=secret', baseUrl + '#fragment', baseUrl + '?', baseUrl + '#']) {
    assert.throws(() => new LiquidityOsClient({ baseUrl: invalid }), TypeError);
  }
});

test('response observer exposes proof headers without consuming download bytes', async () => {
  const bytes = new Uint8Array([37, 80, 68, 70]);
  let signature;
  const client = new LiquidityOsClient({
    baseUrl,
    onResponse: (response) => {
      signature = response.headers.get('x-artifact-signature');
      assert.equal(response.status, 200);
      assert.equal(response.bodyUsed, false);
    },
    fetch: async () => new Response(bytes, { headers: { 'content-type': 'application/pdf', 'x-artifact-signature': 'signed-proof' } }),
  });
  assert.deepEqual(await client.downloadPublicLiquidityPassport({ path: { slug: 'public-slug', format: 'pdf' } }), bytes);
  assert.equal(signature, 'signed-proof');
});

test('abort and network errors propagate without retrying', async () => {
  const failure = new DOMException('Cancelled', 'AbortError');
  let calls = 0;
  const client = new LiquidityOsClient({ baseUrl, fetch: async () => { calls++; throw failure; } });
  await assert.rejects(client.listScores(), (error) => error === failure);
  assert.equal(calls, 1);
});
