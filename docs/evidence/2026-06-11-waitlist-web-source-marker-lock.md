# PM_Web waitlist web source marker lock

Date: 2026-06-11

Scope: PM_Web waitlist backend handoff source contract.

## Change

- Locked the browser waitlist request source marker to `pm_web` inside `src/lib/waitlistBackendHandoff.ts`.
- Narrowed the optional `source` field on `WaitlistBackendInput` to `pm_web` only, so PM_Web callers cannot send the PM_App source marker through the website handoff.
- Added source-contract guards so `source: input.source` and the previous mixed `pm_web` / `pm_app` type fail the PM_Web handoff contract.

## Why this matters

PM_Web and PM_App share the same waitlist backend boundary, but their source attribution should stay explicit. The public website should always identify itself as `pm_web`; it should not rely on a form caller to pass the correct value.

## Verification status

Source updated only. The local contract command was not run in this pass.
