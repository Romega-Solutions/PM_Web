# PM_Web download access copy cleanup

Date: 2026-06-11
Owner: Codex
Status: Source updated, not run

## What changed

- Replaced app-store "Coming soon" wording with platform-choice waitlist copy.
- Replaced "Email fallback if needed" with "Email option".
- Replaced "email stays available as fallback" with "email stays available as another direct option."
- Extended the launch-claims source guard so those old launch/fallback phrases are blocked from returning.

## Why this matters

The download section should present clear member actions instead of exposing launch-state or fallback language. This keeps the page client-facing and avoids making the product feel unfinished.

## Verification

- Not run this turn.
- Recommended check when requested: `npm run check:launch-claims` from `PM_Web`.
