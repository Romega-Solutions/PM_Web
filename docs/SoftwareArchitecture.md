# PM_Web Software Architecture

Last updated: 2026-06-10
Scope: PinayMate public landing site and waitlist experience.

## Purpose

PM_Web is the public launch-stage marketing surface for PinayMate. It explains the product direction, trust model, membership intent, waitlist actions, and mobile-app preview without claiming that matching, checkout, app-store downloads, or production support operations are already live.

This site is a companion to PM_App. PM_Web should convert interest and set expectations; PM_App owns native onboarding, profile setup, discovery, messaging, verification, privacy controls, and safety workflows.

## Runtime Architecture

- Framework: Vite with React 19 and TypeScript.
- Styling: Tailwind CSS v4 plus local CSS in `src/App.css`.
- Icons: `lucide-react`.
- Entry point: `src/main.tsx` mounts `src/App.tsx`.
- Build output: `dist/` from `npm run build`.
- Runtime model: static client-rendered site; no server-side rendering, API server, database, or payment processor is currently part of PM_Web.

## Application Structure

- `src/App.tsx` composes the landing page sections and global modal state.
- `src/components/sections/Header.tsx` handles navigation, waitlist CTA, mobile menu state, and accessibility behavior.
- `src/components/sections/Hero.tsx` presents the launch-stage value proposition and primary CTA.
- `src/components/sections/About.tsx`, `Features.tsx`, and `Membership.tsx` explain trust, product direction, and membership intent.
- `src/components/sections/Faqs.tsx`, `Download.tsx`, and `Footer.tsx` handle common launch questions, waitlist/download intent, support contact, and legal links.
- `src/components/modals/LegalModal.tsx` displays Terms, Privacy, and safety/legal copy in the web experience.
- `public/` stores static assets referenced by the Vite app.

## Data and Integration Boundaries

PM_Web currently avoids collecting or storing sensitive dating profile data directly. Public CTAs should remain waitlist/support/legal actions until the following systems are live and verified:

- PM_App production onboarding and matching flows.
- Supabase migrations, RLS policies, storage policies, RPCs, and smoke tests.
- OCR function deployment, secret configuration, auth enforcement, error handling, and rate-limit checks.
- App-store or approved distribution links.
- Production support/legal mailbox routing.
- Payment or checkout infrastructure, if membership billing is enabled later.

Any future form submission, analytics event, checkout link, or app-store link must be treated as a production integration and added to release evidence before launch.

## Security and Privacy Notes

- PM_Web must not expose Supabase service keys, OCR secrets, private app routes, or privileged operations.
- Legal and trust copy must avoid unsupported guarantees around identity, safety, match quality, compliance, billing, or active users.
- Waitlist/support links should route only to monitored destinations approved for launch.
- Any future analytics should avoid storing sensitive user profile or verification data from the public site.

## Accessibility and UX Requirements

- Navigation and modal controls need keyboard access, visible focus states, and screen-reader labels.
- Mobile menu behavior must support focus management and escape/close recovery.
- Motion should respect reduced-motion preferences.
- CTAs must be honest about launch-stage availability.
- Legal, support, and waitlist paths must remain reachable on desktop and mobile.

## Verification Commands

Run from `PM_Web`:

```bash
npm run lint
npm run build
npm run preview -- --host 127.0.0.1 --port 4173 --strictPort
```

Release proof should also include desktop and mobile browser smoke evidence for:

- hero and primary waitlist CTA
- mobile menu open/close behavior
- legal modal open/close behavior
- footer/support/legal links
- no horizontal overflow on mobile
- final production domain and mailbox routing

## Launch Gates

PM_Web is locally buildable, but public production launch remains gated by evidence in PM_App release documents:

- Supabase target migration proof and safety smoke SQL output.
- OCR function deployment and live endpoint checks.
- Native Android/iOS QA evidence.
- Production domain, DNS, support/legal mailbox, and CTA proof.
- Ownership signoff for EAS/app stores/Supabase/domain/support operations.

Until those gates are closed, PM_Web should stay waitlist-first and must not imply that live matching, live checkout, or app-store distribution is complete.
