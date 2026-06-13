# PM_Web waitlist JSON handoff contract

Date: 2026-06-11

## Scope

PM_Web waitlist handoff contract alignment with the waitlist Edge Function JSON request boundary.

## What changed

- Confirmed the PM_Web waitlist handoff source sends `"Content-Type": "application/json"` and a JSON stringified request body to the `waitlist-signup` Edge Function.
- Updated `check-waitlist-backend-handoff.mjs` to require `Content-Type: application/json` in the handoff doc and release checklist.
- Updated `check-product-design-contract.mjs` to require the same JSON header markers in the broader PM_Web release contract.
- Updated the release checklist waitlist Edge header row to call out `Content-Type: application/json`.

## Files touched

- `scripts/check-waitlist-backend-handoff.mjs`
- `scripts/check-product-design-contract.mjs`
- `RELEASE_CHECKLIST.md`

## Verification status

Not run in this pass.

This is source-level evidence only. It does not prove PM_Web checks pass, the Edge Function is deployed, the request works against a live Supabase project, or launch readiness is complete.
