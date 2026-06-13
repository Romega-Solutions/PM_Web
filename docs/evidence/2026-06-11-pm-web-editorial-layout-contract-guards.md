# PM_Web editorial layout contract guards

Date: 2026-06-11

## Scope

PM_Web source guard update for the PinayMate landing experience.

## What changed

- Updated the product design contract to require the current editorial layout direction in Download, Features, Membership, and FAQ.
- Replaced stale Download contract markers that still expected old store/readiness copy with client-facing waitlist, email option, privacy, and store-link language.
- Added forbidden markers for stale public copy such as "Coming soon for iOS", "Coming soon for Android", "Email fallback", "online signup is unavailable", "being finalized", and "form unavailable".
- Added section-level markers that protect against drifting back to broad card grids and nested-card style layouts.
- Cleaned the Features row numbering implementation to use the map index directly instead of `features.indexOf(feature)`.

## Files touched

- `src/components/sections/Features.tsx`
- `scripts/check-product-design-contract.mjs`

## Verification status

Not run in this pass.

This is source-level evidence only. It does not prove browser rendering, mobile responsiveness, production URL behavior, Vercel deployment state, or full release readiness.
