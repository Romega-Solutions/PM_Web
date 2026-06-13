# PM_Web client-copy guard contract coverage

Date: 2026-06-11

## Scope

PM_Web product-design contract coverage for the client-facing copy guard.

## What changed

- Added `scripts/check-client-facing-copy.mjs` to the PM_Web product design contract required files.
- Required the client-copy guard to keep scanning `index.html`, `src/App.tsx`, `src/components`, `src/lib/launchEmailLinks.ts`, and `src/lib/waitlistBackendHandoff.ts`.
- Required the guard to keep blocking developer/deployment status wording, infrastructure implementation wording, and broken or unfinished availability wording.
- Required representative blocked phrases such as online signup is unavailable, coming soon for iOS, and email fallback.

## Files touched

- `scripts/check-product-design-contract.mjs`

## Verification status

Not run in this pass.

This is source-level evidence only. It does not prove the PM_Web contracts pass, the site builds, browser rendering works, production deployment is current, or launch readiness is complete.
