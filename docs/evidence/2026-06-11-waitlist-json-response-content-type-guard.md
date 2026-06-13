# PM_Web waitlist JSON response content-type guard

Date: 2026-06-11

## Scope

PM_Web waitlist handoff response handling for the `waitlist-signup` Edge Function.

## What changed

- Added a successful-response `Content-Type` check before parsing the waitlist Edge Function response body.
- PM_Web now falls back to the email waitlist path if a successful response does not declare `application/json`.
- Added required markers to `check-waitlist-backend-handoff.mjs`.
- Added the same response-boundary markers to `check-product-design-contract.mjs`.

## Why

This protects users from broken proxy, CDN, deployment, or HTML error-body responses that return a 2xx status but are not valid waitlist JSON. The user-facing fallback remains the email path instead of exposing technical response details.

## Files touched

- `src/lib/waitlistBackendHandoff.ts`
- `scripts/check-waitlist-backend-handoff.mjs`
- `scripts/check-product-design-contract.mjs`

## Verification status

Not run in this pass.

This is source-level evidence only. It does not prove PM_Web checks pass, the Edge Function returns JSON in production, Supabase is deployed, or production waitlist capture is ready.
