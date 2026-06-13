# PM_Web waitlist JSON response shape guard

Date: 2026-06-11

## Scope

PM_Web waitlist handoff response shape handling for the `waitlist-signup` Edge Function.

## What changed

- Parsed the successful Edge Function JSON response as `unknown` before reading it.
- Added an `Array.isArray` check before treating the payload as waitlist response rows.
- Kept the existing email waitlist fallback when the response shape does not include the expected row fields.
- Added required markers to `check-waitlist-backend-handoff.mjs`.
- Added the same response-shape markers to `check-product-design-contract.mjs`.

## Why

This makes PM_Web resilient to malformed 2xx JSON responses, proxy rewrites, or future Edge Function response regressions that return JSON but not the expected array shape.

## Files touched

- `src/lib/waitlistBackendHandoff.ts`
- `scripts/check-waitlist-backend-handoff.mjs`
- `scripts/check-product-design-contract.mjs`

## Verification status

Not run in this pass.

This is source-level evidence only. It does not prove PM_Web checks pass, the Edge Function returns the expected array shape in production, Supabase is deployed, or production waitlist capture is ready.
