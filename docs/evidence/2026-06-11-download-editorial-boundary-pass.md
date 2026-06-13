# Download Editorial Boundary Pass

Date: 2026-06-11
Owner: Codex
Scope: PM_Web download/waitlist section.

## What changed

- Reworked the waitlist and access boundary notes from stacked card-like blocks into a compact editorial definition-list layout.
- Kept the same waitlist, account, profile, matching, checkout, payment, store-link, and access boundaries.
- Preserved the email/waitlist conversion path and store-link lock state.

## Why

The download section already carries a lot of trust and launch-boundary information. Presenting the boundary notes as editorial rows reduces visual weight and avoids the repeated card-stack feel while keeping the content clear.

## Verification

Not run in this step. Run:

```powershell
npm run check:product-design-contract
npm run check:launch-claims
```

## Boundary

This is local PM_Web source-layout work only. It does not prove rendered desktop/mobile layout, production deployment, or final product-design signoff.
