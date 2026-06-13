# PM_Web waitlist single-row response guard

Date: 2026-06-11

## Scope

PM_Web waitlist handoff response integrity for the `waitlist-signup` Edge Function.

## What changed

- PM_Web now treats the Edge response as backend success only when the parsed JSON array contains exactly one row.
- Multi-row, empty-row, non-array, non-JSON, mismatched-email, unexpected-platform, or unexpected-status responses all stay on the email waitlist fallback path.
- Added required markers to `check-waitlist-backend-handoff.mjs`.
- Added the same single-row response marker to `check-product-design-contract.mjs`.

## Why

The public waitlist response should be one generic accepted row for the current submission. Ignoring extra rows would make malformed or over-broad Edge responses look successful.

## Files touched

- `src/lib/waitlistBackendHandoff.ts`
- `scripts/check-waitlist-backend-handoff.mjs`
- `scripts/check-product-design-contract.mjs`

## Verification status

Not run in this pass.

This is source-level evidence only. It does not prove PM_Web checks pass, the Edge Function returns one row in production, Supabase is deployed, or production waitlist capture is ready.
