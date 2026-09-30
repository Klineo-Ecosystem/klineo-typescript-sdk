# Changelog

## 2.1.0

- Add `getPartnerPreparationReceiptRecovery` with typed partner, issuer and original operation-key inputs.
- Export `PartnerPreparationReceipt` and the `ACCEPTED` / `UNRESOLVED` `PartnerPreparationReceiptRecovery` result types for read-only recovery of a committed preparation receipt.
- Continue targeting API contract version `2.0.0`; SDK recovery grants no preparation or execution authority.

## 2.0.0

- Standalone JavaScript ESM package with TypeScript declarations, generated v2 operation methods, and request/response types.
- API-key and OAuth client-credentials authentication with organization binding.
- Cursor pagination, caller-owned idempotency keys, strong resource preconditions, abort signals, and binary downloads.
- Structured API and OAuth errors, HTTP(S) base URL validation, and redirect rejection.
- Build, transport checks, a paginated read example, and release package CI.
