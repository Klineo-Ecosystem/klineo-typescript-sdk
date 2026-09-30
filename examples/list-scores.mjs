import { LiquidityOsApiError, LiquidityOsClient } from '@klineo/liquidity-os-sdk';

for (const name of ['KLINEO_API_BASE_URL', 'KLINEO_ORGANIZATION_ID', 'KLINEO_ACCESS_TOKEN']) {
  if (!process.env[name]) throw new Error('Set ' + name + ' before running this example');
}
const client = new LiquidityOsClient({
  baseUrl: process.env.KLINEO_API_BASE_URL,
  organizationId: process.env.KLINEO_ORGANIZATION_ID,
  accessToken: process.env.KLINEO_ACCESS_TOKEN,
});

try {
  let cursor;
  do {
    const page = await client.listScores({ query: { limit: 50, cursor }, signal: AbortSignal.timeout(30_000) });
    for (const score of page.data) console.log(JSON.stringify(score));
    if (page.meta.hasMore && !page.meta.nextCursor) throw new Error('API omitted its next cursor');
    cursor = page.meta.hasMore ? page.meta.nextCursor : undefined;
  } while (cursor);
} catch (error) {
  if (error instanceof LiquidityOsApiError) {
    console.error(JSON.stringify({ status: error.status, code: error.code, correlationId: error.correlationId }));
    process.exitCode = 1;
  } else {
    throw error;
  }
}
