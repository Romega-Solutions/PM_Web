# Waitlist Fallback Client-Facing Copy

Date: 2026-06-11
Owner: Codex
Scope: PM_Web waitlist fallback messaging.

## What changed

- Replaced internal readiness-style fallback copy with customer-facing email-path copy.
- Removed public phrases such as `instant waitlist signup`, `online signup is unavailable`, and `being finalized` from the waitlist fallback flow.
- Updated the launch-claims source audit to require client-facing fallback wording.
- Added a forbidden launch-claim pattern for internal readiness language in public waitlist fallback copy.

## Why

The public website should give users a clear next action instead of exposing implementation or release-readiness language. If backend waitlist capture is gated or fails, the page now points users to the email waitlist path with the same platform preference.

## Verification

Not run in this step. Run:

```powershell
npm run check:launch-claims
```

## Boundary

This is a PM_Web source-copy and source-guard change only. It does not prove the rendered production domain has been redeployed or that mailbox delivery works.
