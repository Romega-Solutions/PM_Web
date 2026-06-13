# PM_Web client-facing copy guard hardening

Date: 2026-06-11

## Scope

PM_Web source guard update for public PinayMate copy.

## What changed

- Hardened the client-facing copy guard against developer, deployment, QA, infrastructure, and unfinished-availability wording.
- Added blocked public-copy phrases for status language such as dev branch, deployment status, staging status, QA gate, release gate, debug note, and developer note.
- Added blocked public-copy phrases for implementation jargon such as Edge Function, RPC, database schema, schema migration, API key, environment variable, env var, feature flag, service role, handoff contract, and route blocker.
- Added blocked public-copy phrases for broken or unfinished availability framing such as online signup is unavailable, form unavailable, being finalized, instant signup is not available, coming soon for iOS, coming soon for Android, email fallback, and available as fallback.
- Updated the launch-claims audit to match the current FAQ support boundary instead of stale "app access is not available yet" wording.
- Updated the legal-copy launch audit marker to match current account-feature availability language.

## Files touched

- `scripts/check-client-facing-copy.mjs`
- `scripts/check-launch-claims.mjs`

## Verification status

Not run in this pass.

This is source-level evidence only. It does not prove the PM_Web build, rendered UI, mobile responsiveness, production deployment, DNS, mailbox delivery, app-store availability, checkout readiness, or PM_App runtime behavior.
