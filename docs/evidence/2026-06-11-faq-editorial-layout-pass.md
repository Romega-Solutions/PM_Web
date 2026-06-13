# PM_Web FAQ editorial layout pass

Date: 2026-06-11
Owner: Codex
Status: Source updated, not run

## What changed

- Converted the FAQ section from repeated boxed accordion cards into a divided editorial layout with a support-boundary sidebar.
- Preserved accordion state, `aria-expanded`, `aria-controls`, region labels, and keyboard-focus styling.
- Replaced readiness-style FAQ wording with direct member actions: join the waitlist, choose a platform, and use official updates for download/access paths.
- Kept safety boundaries that support cannot create accounts, profiles, matches, checkout sessions, or payment records from the website.
- Extended the launch-claims guard to block old FAQ phrases that framed the product as unavailable or pending launch state.

## Why this matters

The FAQ should feel like polished product guidance, not a stack of generic cards or internal launch notes. The new layout keeps the page cleaner while still protecting users from sending sensitive data through email.

## Verification

- Not run this turn.
- Recommended check when requested: `npm run check:launch-claims` from `PM_Web`.
