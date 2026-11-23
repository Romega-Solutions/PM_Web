# PM Web redesign, phase 1: design critique and WCAG 2.1 AA audit

- Date: 2026-11-21
- Build audited: `origin/main` at `acf959b` (run locally with `npm run dev`)
- Viewports: mobile 390x844, desktop 1440x900 (full-page screenshots, reduced motion)
- Tools: axe-core 4.10 (wcag2a, wcag2aa, wcag21aa, best-practice), keyboard tab walk, computed-style checks, manual review
- Evidence: `docs/evidence/redesign-2026-11/before/` (full pages, first screen, mobile menu, privacy modal, focus state, `before-report.json`)

Scope note: PM_Web is a one-page site (Hero, About, Features, Membership, FAQ, Download/waitlist, Footer, plus the privacy/terms modal). It has no separate legal, support or account-deletion routes, so those "pages" are not in this repo. The legal modal and footer links keep their wording either way.

## Design critique

### First impression
The site looks safe and careful, but it does not yet look like a dating brand. Dark purple, glowing pink buttons, pill chips and bordered cards on every block read as a crypto or SaaS starter kit. The first thing the eye lands on is the row of four "No ... today" chips above the headline, so a new visitor reads what PinayMate does not do before what it is.

### What works
- The headline is strong and specific. Lora at display size has warmth.
- The brand tokens in `src/index.css` (Amihan pink, Dalisay violet, Luna blue, soft neutrals) are a good base. The redesign can use them as they are.
- Fonts are already self-hosted (Lora, DM Sans, Hello Paris), so the redesign needs no new font origin and no CSP change.
- Accessibility groundwork is good: a skip link, labelled controls, `aria-expanded` on the menu, dialog semantics on the modal and menu, live regions on the waitlist form, `motion-reduce` handling.

### Usability
| Finding | Severity | Recommendation |
|---|---|---|
| Mobile page is 20,176px tall (about 24 screens). Desktop is 10,789px. Most of the height is repeated framing (cards inside cards, chips, notes) rather than content. | High | Cut chrome, not copy: remove nested card frames, turn chip rows into plain inline lists, tighten section padding on mobile. |
| Mobile menu backdrop is only `bg-black/45` and the panel is `/98` over a blur, so the hero headline shows through behind the menu items (see `before-mobile-390-menu.png`). Menu labels and the page text compete. | High | Make the panel fully opaque and the scrim at least 70%. |
| Waitlist section (desktop) puts the form in a narrow left column under a tall heading, while the right column is empty for its first ~900px. The email field sits in a box much taller than the input. | High | Give the form a full-width panel; move the three "Review before broad reach..." points beside or below it. |
| The hero has two competing CTAs of almost equal weight plus a third header CTA, all labelled the same way. | Medium | Keep one solid primary ("Join the waitlist"), make "See safety approach" a quieter text-style link-button. |
| Each membership card repeats the same 6-line plan-interest disclaimer, and the disclaimer itself states the same thing twice. | Medium (copy) | Not changed in this ticket (product copy). Raised for Duane: show the disclaimer once under the three cards. |
| Heading in the membership grid says "Platinum Interest" while the button and price say "VIP". | Low (copy) | Raised for Duane; not changed here. |

### Visual hierarchy
- The hero radial glow is clipped by a fixed `h-64` box, which draws a hard horizontal edge across the hero at about 255px (`Hero.tsx`, the first `absolute inset-x-0 top-0 h-64` layer).
- Every section uses the same recipe: centred pill badge, big centred Lora heading, grey paragraph, three bordered cards. With no change in rhythm, nothing stands out and the page feels long.
- Decorative numbering (01 / 02 / 03) on feature cards and membership tiers suggests a sequence that is not there.
- 23 all-caps labels (eyebrows, chips, form tags) add noise and are harder to read.
- 44 different hard-coded hex colours are used in Tailwind arbitrary classes alongside the tokens, so the same pink appears as `#ef3e78`, `#F4376D` and `#f7a4c8`.

### Consistency
| Element | Issue | Recommendation |
|---|---|---|
| Colour | Hex values hard-coded per component instead of tokens | Map everything to the existing `--color-*` tokens |
| Radius | `rounded-lg` on almost everything (48 uses) regardless of role | Radius by role: controls, cards, chips |
| Type | 12px used 41 times, many of them all caps | Smallest text 14px, sentence case |
| Focus | Three different focus colours, one of them invisible (below) | One focus token |

## WCAG 2.1 AA audit

**Summary:** 6 issues. Critical 0, Serious 3, Moderate 2, Minor 1.

### Perceivable
| # | Issue | Criterion | Severity | Recommendation |
|---|---|---|---|---|
| P1 | White text on the primary pink `#ef3e78` is 3.73:1. It fails for every pink button at 14-16px (header "Join waitlist", hero "Join the waitlist", "Ask a safety question", "Register Gold interest", form submit). 8 nodes on mobile, 9 on desktop (axe `color-contrast`). | 1.4.3 Contrast (Minimum) | Serious | Use Amihan-700 `#b31460` for button fills (6.59:1 with white). Keep `#ef3e78` for the logo and decorative strokes only. |
| P2 | Mobile menu: page text bleeds through the menu panel, reducing legibility of the menu labels. | 1.4.3 / 1.4.11 | Serious | Opaque panel and a stronger scrim. |
| P3 | `<aside>` in the FAQ sits inside `<main>`'s section landmark (axe `landmark-complementary-is-top-level`). | 1.3.1 Info and Relationships (best practice) | Moderate | Change to a `<div>` with a heading, or move it out of the section. |

### Operable
| # | Issue | Criterion | Severity | Recommendation |
|---|---|---|---|---|
| O1 | Desktop nav links (Home, Trust, Safety, Membership, FAQ) and the logo link show a 3px **black** focus outline on the near-black header. Computed `outline-color: rgb(0,0,0)`; the `focus-visible:outline-[#81a5e9]` colour does not apply. Keyboard users cannot see where they are. See `before-desktop-1440-focus-nav.png`. | 2.4.7 Focus Visible, 1.4.11 Non-text Contrast | Serious | One global `:focus-visible` style from a token, checked on both light and dark surfaces. |
| O2 | "Open PinayMate terms notice" footer button is 39x44px. | 2.5.5 Target Size (AAA, used as team bar) | Minor | Min 44x44. |
| O3 | Keyboard order is logical, skip link works, menu and modal close on Escape. | 2.1.1, 2.4.3 | Pass | Keep. |

### Understandable
| # | Issue | Criterion | Severity | Recommendation |
|---|---|---|---|---|
| U1 | Waitlist form has visible labels, helper text and an error live region. | 3.3.1, 3.3.2 | Pass | Keep behaviour exactly as is. |

### Robust
| # | Issue | Criterion | Severity | Recommendation |
|---|---|---|---|---|
| R1 | Platform radios are visually hidden (1x1) and drawn as custom cards. They work, but the custom card has no visible focus style of its own. | 4.1.2 / 2.4.7 | Moderate | Show the focus ring on the card when the hidden radio is focused (`:has(:focus-visible)`). |

### Colour contrast check
| Element | Foreground | Background | Ratio | Required | Pass |
|---|---|---|---|---|---|
| Primary button label | #ffffff | #ef3e78 | 3.73 | 4.5 | No |
| Body copy | #d7c7ed | #170f22 | ~11 | 4.5 | Yes |
| Muted copy | #cbbade | #170f22 | ~10 | 4.5 | Yes |
| Nav focus ring | #000000 | #170f22 | ~1.1 | 3.0 | No |

### Not covered
Screen-reader pass with NVDA or VoiceOver, and 200% zoom, were not run in this phase. They are part of phase 5.

## Priority fixes (carried into the redesign)
1. Button contrast (P1) and the focus ring (O1). Both come free with the new tokens.
2. Mobile menu legibility (P2) and page length on mobile.
3. Waitlist section layout and the hard hero edge.
4. Copy items for Duane to decide: repeated membership disclaimer, "Platinum" vs "VIP".
