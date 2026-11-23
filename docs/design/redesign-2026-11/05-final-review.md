# PM Web redesign, phase 5: final polish and accessibility review

- Date: 2026-11-21
- Build reviewed: `kirk/redesign-polish-a11y` (stacked on PRs #48–#51)
- Compared against: `origin/main` at `acf959b` (the phase 1 audit build)
- Tools: axe-core 4.10 (wcag2a, wcag2aa, wcag21aa, best-practice), Playwright with Microsoft Edge, keyboard walk, forced-colors emulation, text-spacing override, 320px / 720px reflow
- Evidence: `docs/evidence/redesign-2026-11/final-after/`, `pr5-a11y/`, and the `final-compare-*.png` side-by-sides

## Results at a glance

| | Before (main) | After (Banig) |
|---|---|---|
| axe violations, desktop 1440 | 10 (9 contrast, 1 landmark) | 0 |
| axe violations, mobile 390 | 9 (8 contrast, 1 landmark) | 0 |
| Primary button label contrast | 3.73:1 (fails 1.4.3) | 6.59:1 |
| Nav focus ring | black on near-black (invisible) | Luna `#1c4ebe`, 3px, every stop |
| Targets under 44px | Terms button 39×44 | none |
| Page height, mobile | 20,176px (~24 screens) | 9,319px (~11 screens) |
| Page height, desktop | 10,789px | 5,884px |
| CSS bundle | 86 kB (PR 1 baseline) | 50 kB |
| Icon libraries | lucide-react | @tabler/icons-react |

## Phase 1 findings, closed

| # | Finding | Fixed in | How |
|---|---|---|---|
| P1 | White on `#ef3e78` buttons, 3.73:1 | #48–#51 | Rose `#b31460` fill (6.59:1) on every primary button |
| P2 | Mobile menu text bleed-through | #48 | Opaque menu panel, 70% plum scrim |
| P3 | Nested `<aside>` landmark in FAQ | #50 | Support panel is a `<div>` |
| O1 | Invisible desktop nav focus ring | #48 | One focus style from tokens, unlayered so it always wins |
| O2 | Terms button 39×44 | #48 | `min-w-11` on Privacy and Terms |
| R1 | Platform radio cards had no focus ring | #51 | Real buttons with `aria-pressed`, `aria-expanded`, `aria-controls` |
| — | Hard edge on the hero glow | #48 | Hero rebuilt; no clipped gradient |
| — | Repeated membership disclaimer | #50 | Said once, in the pricing disclosure |
| — | "Platinum" vs "VIP" | #50 | "VIP" everywhere (approved) |

## Phase 5 checks (not covered in phase 1)

| Check | WCAG | Result |
|---|---|---|
| Reflow at 320 CSS px | 1.4.10 | Pass. No horizontal scroll (`scrollWidth` 320). |
| 200% zoom (1440 → 720) | 1.4.4 | Pass. No horizontal scroll, nothing clipped. |
| Text spacing override | 1.4.12 | Pass. No clipped text (only intentionally hidden screen-reader text reported). |
| Windows high contrast (forced colors) | 1.4.11 | **Fixed in this PR.** Buttons now have a 1.5px transparent border that the system paints in high-contrast mode. The focus ring stays 3px solid. |
| Keyboard walk | 2.1.1, 2.4.3, 2.4.7 | Pass. 32 stops in reading order, all with a visible 3px ring, no traps. The mobile menu traps focus while open and Escape closes it. |
| Headings | 1.3.1, 2.4.6 | One H1. H2 per section, H3 for cards, steps, tiers and footer groups. |
| Landmarks | 1.3.1 | nav "Main", main, footer. FAQ answers are labelled regions. |
| Language, title, duplicate ids | 3.1.1, 2.4.2, 4.1.1 | `lang="en"`, unique title, no duplicate ids |
| Reduced motion | 2.3.3 | Entrance, scroll reveals and hover motion are off. Every element is visible at rest. |
| Console errors | — | None at either width |

## Polish in this PR

- Removed about 970 lines of unused legacy CSS from `src/App.css` and `src/index.css`: more than 20 unused keyframes and the old cursor, float and shimmer effects, a second `@import "tailwindcss"`, and a duplicate copy of the colour tokens. A pixel comparison of every section before and after the removal differs by under 1% (the new button border only).
- The old reduced-motion rule forced `.rotate-180` to `transform: none`, which froze the FAQ chevron pointing the wrong way for reduced-motion users. It's removed.
- The page root uses `.pm-light`, so every element inherits the paper surface and the Luna focus ring.

## Still to do by a person

- A real screen-reader pass with NVDA (Windows) and VoiceOver (iPhone). The tree above shows the structure a screen reader gets, but listening to it is still worth 15 minutes before launch.
- A check on a real Android phone and iPhone in Safari, for scroll-timeline support and the email step's keyboard behaviour.
- `npm audit` reports 9 moderate findings in eslint and typescript-eslint dev dependencies. They're already on `main` and should get a separate small fix.
