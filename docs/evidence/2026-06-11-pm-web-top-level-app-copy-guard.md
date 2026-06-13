# PM_Web top-level app copy guard

Date: 2026-06-11

## Scope

PM_Web client-facing copy guard coverage for top-level app source.

## What changed

- Added `src/App.tsx` to the raw scan targets in `scripts/check-client-facing-copy.mjs`.
- Kept the expansion narrow so the guard covers visible top-level app copy without scanning unrelated internals.
- The guard already runs through `check:client-copy`, `check:source-contracts`, and `check:release-local`.

## Files touched

- `scripts/check-client-facing-copy.mjs`

## Verification status

Not run in this pass.

This is source-level evidence only. It does not prove the guard passes, the site builds, browser rendering works, production deployment is current, or launch readiness is complete.
