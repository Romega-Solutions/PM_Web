# Public Copy Internal Readiness Cleanup

Date: 2026-06-11
Owner: Codex
Scope: PM_Web legal modal, download/waitlist section, feature copy, and launch-claims guard.

## What changed

- Removed `being finalized` wording from legal account-rights and termination copy.
- Replaced waitlist email fallback `unavailable` wording with a direct support/mail-app path.
- Renamed `Store availability` to `Store links` while keeping the honest published-link boundary.
- Changed feature proof copy from app-access readiness language to app-account-flow language.
- Updated the PM_Web launch-claims guard to require support-routed account request wording and the revised store-link marker.

## Why

The public site should not expose internal release-status language. Visitors should see a clear path: join the waitlist, use email if preferred, contact support for account requests, and wait for app-store links when published.

## Verification

Not run in this step. Run:

```powershell
npm run check:launch-claims
```

## Boundary

This is local PM_Web source-copy and source-guard work only. It does not prove production deployment, app-store availability, support mailbox delivery, or legal approval.
