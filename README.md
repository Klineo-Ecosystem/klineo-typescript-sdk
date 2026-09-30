# KlineO TypeScript SDK

TypeScript and JavaScript ESM client for the KlineO Liquidity Operating System v2 API. The generated client includes every operation in the v2 OpenAPI contract and exports named request, result, and domain types. It has no runtime dependencies or dependencies on the KlineO application workspace.

SDK version: `2.1.0`. API contract version: `2.0.0`.

Source is available for review. All rights are reserved; public availability is not an open-source license or a grant of usage rights. Obtain permission from Klineo-Ecosystem before using the software. See [LICENSE.txt](LICENSE.txt).

## Build and install

Use Node.js 22.18 or newer and npm. Builds produce JavaScript, TypeScript declarations, and source maps in `dist/`. The npm package is named `@klineo/liquidity-os-sdk`; the repository does not imply that this version has been published to the npm registry.

After obtaining usage permission:

```sh
git clone --branch v2.1.0 https://github.com/Klineo-Ecosystem/klineo-typescript-sdk.git
cd klineo-typescript-sdk
npm ci
npm run check
npm pack
# In your own application, install the resulting local package:
npm install /absolute/path/to/klineo-typescript-sdk/klineo-liquidity-os-sdk-2.1.0.tgz
```

`npm ci` runs the build automatically. `npm pack` checks the package and produces a distributable `.tgz`; the built library, generated sources, readme, changelog, and license are included. CommonJS applications can load the ESM package with `await import('@klineo/liquidity-os-sdk')`.

## First request

Obtain your organization's API base URL, organization ID, and a scoped API key or OAuth access token from the issuer administrator. The base URL must include `/api/liquidity-studio/v2`, without a query string, fragment, or URL credentials. Choose the approved environment explicitly; the SDK has no default production endpoint.

```ts
import { LiquidityOsClient } from '@klineo/liquidity-os-sdk';

const client = new LiquidityOsClient({
  baseUrl: process.env.KLINEO_API_BASE_URL!,
  organizationId: process.env.KLINEO_ORGANIZATION_ID!,
  accessToken: process.env.KLINEO_ACCESS_TOKEN!,
});

const page = await client.listScores({
  query: { limit: 50 },
  signal: AbortSignal.timeout(30_000),
});
for (const score of page.data) console.log(score.id, score.payload);

if (page.meta.hasMore && page.meta.nextCursor) {
  const next = await client.listScores({ query: { cursor: page.meta.nextCursor, limit: 50 } });
  console.log(next.data);
}
```

Pagination cursors are opaque: forward `meta.nextCursor` unchanged and continue only while `meta.hasMore` is true. The runnable [list-scores example](examples/list-scores.mjs) reads the same three environment variables and prints every page:

```sh
node examples/list-scores.mjs
```

## Authentication and authority

`accessToken` accepts an API key or OAuth bearer token. Organization binding is sent as `x-klineo-organization-id`; a token cannot choose another organization by changing that value. Store credentials in a server-side secret manager, not source code or a browser bundle.

OAuth client-credentials exchange:

```ts
const auth = new LiquidityOsClient({
  baseUrl: process.env.KLINEO_API_BASE_URL!,
  organizationId: process.env.KLINEO_ORGANIZATION_ID!,
});
const token = await auth.oauthClientCredentials(
  process.env.KLINEO_CLIENT_ID!,
  process.env.KLINEO_CLIENT_SECRET!,
  ['scores:read'],
);
const scoped = new LiquidityOsClient({
  baseUrl: process.env.KLINEO_API_BASE_URL!,
  organizationId: process.env.KLINEO_ORGANIZATION_ID!,
  accessToken: token.access_token,
});
```

Token refresh is caller-owned. Requested scopes must be included in the credential grant. Not every generated operation accepts a service credential: issuer approvals, credential administration, partner consent, and other authority changes require an authorized interactive session. Consult each operation's security requirement in the [v2 API reference](https://docs.klineo.io/api-reference/overview/). Public passport and shared-study reads can use a client without credentials, subject to disclosure and link validity.

For an approved browser session integration, set `credentials: 'include'` to send the browser's existing session cookie to an API deployment that permits the application's origin and credentials. Omit this option to retain the browser's default same-origin behavior. `fetch` can also be injected for the application's CSRF handling. Browser support requires the standard `fetch`, `Headers`, `URL`, and `AbortSignal` APIs. The SDK does not establish interactive sessions or bypass step-up authentication.

```ts
const partnerSession = new LiquidityOsClient({
  baseUrl: 'https://app.your-partner.example/api/liquidity-studio/v2',
  organizationId: 'your-active-organization',
  credentials: 'include',
});
```

Partner changes use `updatePartnerConfiguration` with the exact current configuration `ifMatch`. Read `getPartnerConsentOptions` before granting issuer consent and copy both configuration hashes into the grant body. Updating a partner generation requires issuer consent to be reviewed and regranted. Use the actual consent record ID returned by the service when reading or revoking consent. `getPartnerPreparationContext` provides the current consent resource version for packet preparation; issuer inbox import or decline uses the current consent version as `ifMatch`. Preparation creates an issuer inbox packet by default. Set `requestExternalDelivery: true` only after explicitly choosing external delivery and checking the context's `externalDeliveryAvailable`. Imported packets still require the issuer's ordinary approval process.

SDK 2.1.0 adds `getPartnerPreparationReceiptRecovery` and the `PartnerPreparationReceipt` / `PartnerPreparationReceiptRecovery` types. Recovery is a session-authorized read for the original actor: supply the partner ID, issuer organization ID and original preparation `idempotencyKey`. An `ACCEPTED` result includes the verified committed receipt; `UNRESOLVED` does not establish that a fresh preparation is safe. Recovery does not submit or retry a preparation.

## Mutations and exact resource versions

Mutations require a caller-generated `idempotencyKey`; keep the same key and exact body when retrying the same request. Use a new key for a different logical action. Updates with `ifMatch` require the exact current resource version, passed either as a raw value or an already quoted strong ETag. Read the current object and review again after an HTTP 412 conflict. Weak ETags are not valid resource preconditions.

SDK input types make each operation's body, path, query, idempotency, and precondition requirements explicit. TypeScript types do not validate arbitrary JSON at runtime; server validation and authorization remain authoritative. For example, an authorized caller can pause an issuer intent:

```ts
const current = await client.getIntents({ path: { id: 'intent-id' } });
await client.supersedeIntents({
  path: { id: current.data.id },
  body: { status: 'PAUSED', reason: 'Issuer reviewed pause' },
  ifMatch: current.data.resourceVersion,
  idempotencyKey: crypto.randomUUID(),
});
```

This update requires the interactive authority specified by the API contract. A service bearer token alone does not grant it. Atomic token amounts and fixed-point prices remain decimal strings; use `BigInt` or a suitable decimal representation, never floating-point conversion for monetary values.

## Downloads and errors

JSON responses decode to their declared result types. Other formats decode to `Uint8Array`:

```ts
const pdf = await client.downloadPublicLiquidityPassport({
  path: { slug: 'issuer-approved-public-slug', format: 'pdf' },
});
if (!(pdf instanceof Uint8Array)) throw new Error('Expected a PDF response');
// In Node.js: await writeFile('passport.pdf', pdf);
```

Pass `onResponse` to synchronously observe the native `Response` before decoding, including proof signature, artifact hash, content-type, or rate-limit headers. Read its headers without consuming its body; the SDK still needs to decode it. For example:

```ts
const proofClient = new LiquidityOsClient({
  baseUrl: process.env.KLINEO_API_BASE_URL!,
  onResponse: (response) => console.log(response.headers.get('x-klineo-artifact-hash')),
});
```

Header names and availability depend on the operation. Observing metadata alone does not verify a cryptographic signature; validate the corresponding proof bundle and trust anchor.

Non-success HTTP responses throw `LiquidityOsApiError` with `status`, `code`, `message`, `correlationId`, the parsed `body`, `retryAfter` header, and optional `retryable` guidance. OAuth `invalid_client` errors retain their OAuth error code. Invalid or non-JSON error bodies produce a safe HTTP fallback message.

```ts
import { LiquidityOsApiError } from '@klineo/liquidity-os-sdk';

try {
  await client.listScores();
} catch (error) {
  if (error instanceof LiquidityOsApiError) {
    console.error(error.status, error.code, error.correlationId);
    // Apply your application's reviewed retry policy and Retry-After guidance.
  } else {
    throw error;
  }
}
```

Network failures, redirect rejection, and aborts propagate the underlying fetch error. Malformed success JSON propagates `SyntaxError`. The SDK makes one request per call, rejects redirects, and performs no automatic retries. Pass `signal` for cancellation or timeouts. It does not hold issuer Safe keys, sign transactions, accept arbitrary calldata, or bypass simulation, policy, timelock, review, or onchain controls.

## Development and release

```sh
npm ci
npm run check
npm pack --dry-run
```

Tests cover request transport, authentication, pagination, mutations, cancellation, error decoding, and binary downloads without requiring a live API or real credentials. CI runs on Node.js 22 and 24. Tagged `v*` pushes build and upload a checked package artifact; the workflow does not publish to npm automatically.

`src/index.ts` is generated from the app's v2 OpenAPI contract. Change the generator in the source application, regenerate, and export the SDK repository to keep the client and API contract in sync. GitHub issues are suitable for SDK defects; report confidential security findings through Klineo-Ecosystem's private support channel.
