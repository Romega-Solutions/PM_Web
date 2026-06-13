# PM_Web source contract command wiring

Date: 2026-06-11

## Scope

PM_Web release command wiring for source contract checks.

## What changed

- Added `check:source-contracts` as the direct source-guard wrapper for PM_Web.
- Added `check:source-contracts:report` as the report-writing source-guard wrapper for PM_Web.
- Updated `check:release-local` to call `check:source-contracts` after dependency audit.
- Updated `check:release-local:report` to call `check:source-contracts:report` after dependency audit.
- Updated the PM_Web product design contract to require both new package scripts.
- Added the PM_Web source-contract command wiring evidence to the central PM_App launch evidence contract and launch packet.

## Files touched

- `package.json`
- `scripts/check-product-design-contract.mjs`
- `../PM_App/scripts/check-launch-evidence-contract.mjs`
- `../PM_App/docs/LAUNCH_EVIDENCE_PACKET.md`

## Why

This mirrors the PM_App source-contract workflow and gives release reviewers a clear command path for PM_Web source checks without needing to remember each individual guard.

## Verification status

Not run in this pass.

This is source-level evidence only. It does not prove the new npm scripts execute successfully, the site builds, browser rendering works, production deployment is current, or launch readiness is complete.
