# PM_Web waitlist response email match guard

Date: 2026-06-11

## Scope

PM_Web waitlist handoff response integrity for the `waitlist-signup` Edge Function.

## What changed

- Added a response email match check before PM_Web treats a waitlist Edge response as backend success.
- PM_Web now falls back to the email waitlist path if `email_normalized` from the Edge response does not match the submitted normalized email.
- Added required markers to `check-waitlist-backend-handoff.mjs`.
- Added the same response email-match marker to `check-product-design-contract.mjs`.

## Why

This protects the browser handoff from accepting a malformed, stale, proxied, or mismatched response as a successful signup for the current email submission.

## Files touched

- `src/lib/waitlistBackendHandoff.ts`
- `scripts/check-waitlist-backend-handoff.mjs`
- `scripts/check-product-design-contract.mjs`

## Verification status

Not run in this pass.

This is source-level evidence only. It does not prove PM_Web checks pass, the Edge Function returns matched email values in production, Supabase is deployed, or production waitlist capture is ready.
