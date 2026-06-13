# PM_Web waitlist JSON body serialization contract

Date: 2026-06-11

## Scope

PM_Web waitlist handoff source contract alignment with the waitlist Edge Function JSON request boundary.

## What changed

- Added `body: JSON.stringify({` as a required marker in `check-waitlist-backend-handoff.mjs`.
- Added the same JSON body serialization marker to `check-product-design-contract.mjs`.
- This protects the PM_Web waitlist handoff from drifting into form, query-string, or plain string payloads while the Edge Function expects a JSON request body.

## Files touched

- `scripts/check-waitlist-backend-handoff.mjs`
- `scripts/check-product-design-contract.mjs`

## Verification status

Not run in this pass.

This is source-level evidence only. It does not prove PM_Web checks pass, the Edge Function accepts the request, Supabase is deployed, or production waitlist capture is ready.
