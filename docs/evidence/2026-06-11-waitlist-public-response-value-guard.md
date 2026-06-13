# PM_Web waitlist public response value guard

Date: 2026-06-11

## Scope

PM_Web waitlist handoff response-value handling for the `waitlist-signup` Edge Function.

## What changed

- Added `WaitlistBackendStatus = "accepted"` to match the public generic waitlist RPC response contract.
- Added `isWaitlistPlatform` to accept only known waitlist platform values from the Edge response.
- Added `isAcceptedWaitlistStatus` so PM_Web treats only the generic public `accepted` status as backend success.
- Added string validation for `email_normalized` before PM_Web returns a backend success result.
- Added required markers to `check-waitlist-backend-handoff.mjs`.
- Added the same response-value markers to `check-product-design-contract.mjs`.

## Why

The public waitlist RPC is designed to return a generic accepted response so callers cannot infer whether an email was already waitlisted, blocked, or unsubscribed. PM_Web now aligns with that contract and falls back to email if a successful JSON response contains unexpected row values.

## Files touched

- `src/lib/waitlistBackendHandoff.ts`
- `scripts/check-waitlist-backend-handoff.mjs`
- `scripts/check-product-design-contract.mjs`

## Verification status

Not run in this pass.

This is source-level evidence only. It does not prove PM_Web checks pass, the Edge Function returns the expected accepted response in production, Supabase is deployed, or production waitlist capture is ready.
