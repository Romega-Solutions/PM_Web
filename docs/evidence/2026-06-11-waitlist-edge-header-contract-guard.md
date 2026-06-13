# PM_Web Waitlist Edge Header Contract Guard

Date: 2026-06-11
Owner: Codex
Scope: PM_Web source guard for the public waitlist Edge Function handoff.

## What changed

- `scripts/check-product-design-contract.mjs` now requires the waitlist handoff to send the public key through the `apikey` header.
- The guard also requires the client marker `x-client-info: pm-web-waitlist`.
- The guard rejects accidental use of `Authorization`, `Bearer ${anonKey}`, `service_role`, or `SUPABASE_SERVICE_ROLE_KEY` in the PM_Web waitlist handoff file.
- `RELEASE_CHECKLIST.md` now has a dedicated `Waitlist Edge header contract` gate.
- `docs/WAITLIST_BACKEND_HANDOFF.md` now documents the browser header contract and the service-role boundary.
- `scripts/check-product-design-contract.mjs` now also requires the checklist and handoff-doc markers for this header contract.
- `scripts/check-waitlist-backend-handoff.mjs` is now a dedicated guard for the PM_Web waitlist backend handoff.
- `package.json` now runs `npm run check:waitlist-handoff` inside `check:release-local` and `check:release-local:report`.
- `docs/WAITLIST_BACKEND_HANDOFF.md` and `RELEASE_CHECKLIST.md` now name `npm run check:waitlist-handoff` before live Supabase enablement/proof commands.
- `scripts/check-waitlist-backend-handoff.mjs` now checks both the implementation file and the operator-facing handoff/checklist docs for the same browser header contract markers.

## Why

The PM_App Supabase function config keeps `waitlist-signup` as a public Edge Function with `verify_jwt = false`. PM_Web should not ship a service-role secret, should not invent a user Authorization header for an anonymous waitlist request, and should keep backend capture gated behind the existing launch/proof flags.

## Verification

Not run in this step. Run `npm run check:waitlist-handoff` from PM_Web to verify the dedicated implementation-and-doc guard, or `npm run check:release-local` to verify the full PM_Web local release gate.

## Boundary

This is source-contract protection only. It does not prove the Edge Function is deployed, the waitlist database migrations are applied, Turnstile is configured, or production waitlist capture is enabled.
