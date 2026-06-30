# PM_Web Release Checklist

Last updated: 2026-06-11

## Decision

PM_Web is not production-launch ready until every local and external gate below has current evidence attached. Local gates are source/runtime checks only; they do not prove production environment, mailbox delivery, or account ownership. Current PM_Web scope is waitlist-only.

## Current evidence posture (operator view)

| Capability | Current evidence class | Last-known blocker |
|-----------|----------------------|-------------------|
| PM_Web marketing/waitlist surface | Source-only complete | Production URL checks and mailbox delivery proof are not yet captured on current HEAD. |
| PM_Web app-store/matching/payment claims | Not allowed | Requires production proof, ownership, and release packet signoff from PM_App and PM_Web. |
| Backend-backed support mailto paths | Source-only implemented | Needs mailbox delivery + ownership + SLA proof. |
| Supabase-backed waitlist handoff | Conditional source-only | Backend proof flags are blocked until migration + smoke + waitlist Edge Function deploy/secrets/rate-limit evidence exists. |
| Mobile launch parity | Runtime proof pending | Native QA is not yet captured. |

### Hardening proof gates inherited from PM_App

These PM_Web lanes depend on PM_App hardening now in source:

| PM_Web-facing capability | Source posture | Proof still required |
| ------------------------ | -------------- | -------------------- |
| Waitlist intake path | Source handoff now defaults to email fallback until proof flags are true | Staging/prod deploy of `waitlist-signup`, origin/honeypot behavior, direct-RPC denial proof, and function-level repeated-request behavior |
| Launch claim safety | Matrix and helper boundaries are source-present | Runtime mailbox + production URL proof for claims that waitlist does not create accounts/matches or payment |
| Cross-project dependency awareness | Snapshot alignment and local matrix checks in PM_Web are source-complete | Operator signoff that `../PM_App/docs/LAUNCH_EVIDENCE_PACKET.md` has runtime checks completed for migration and security lanes |

## Launch-state source of truth

Use `docs/PINAYMATE_LAUNCH_STATE_MATRIX.md` for standalone PM_Web checks. During full workspace release review, compare it against `../PM_App/docs/release/PINAYMATE_LAUNCH_STATE_MATRIX.md` before approving PM_Web copy, CTA, membership, store-link, support, legal, or safety changes.

PM_Web must keep these boundaries until the central launch packet has current proof:

- waitlist-only website behavior
- no dating profile created from PM_Web
- no matching promised today
- no app-store availability claim without final store proof
- no checkout, subscription, card collection, or paid access claim
- no paid ranking, paid verification, paid boost, or paid feature-access claim
- no guaranteed safety, verification, identity, relationship, or moderation outcome
- no support/legal mailbox readiness claim without delivery and owner proof

## Surface and card discipline

PM_Web should not become a wall of boxed tiles. Cards are allowed when they group one clear topic, such as a plan, trust proof, feature summary, or focused waitlist action. They should not be the default wrapper for every paragraph, note, statistic, and CTA.

Preferred alternatives:

- editorial section bands
- split layouts
- trust strips
- comparison rows
- lightweight lists with icons
- whitespace and typography hierarchy
- focused CTA blocks
- modal or accordion disclosure for dense legal/support content

Avoid nested cards. If a section already has a visible surface, inner content should normally use spacing, rows, dividers, icons, or typography instead of another rounded panel. This keeps the landing page conversion-led instead of dashboard-like.

## Manager signoff matrix

| Gate | Owner | Backup | Required evidence | Date | Decision |
| ---- | ----- | ------ | ----------------- | ---- | -------- |
| Local release gate | Engineering owner | Release owner | `npm run check:release-local` output after current UI changes | 2026-07-01 | Pass locally: `docs/evidence/2026-07-01-pm-web-local-quality.txt` |
| Production URL | Release owner | Engineering owner | Desktop and mobile production URL screenshots or browser evidence | 2026-07-01 | Pass URL smoke: `docs/evidence/2026-07-01-pm-web-production-url-probe.txt`, `docs/evidence/2026-07-01-pm-web-root-redirect-probe.txt`, and production screenshots |
| Product design QA | Product/design owner | Release owner | PM_Web design gates from `../PM_App/docs/testing/PRODUCT_DESIGN_QA_STANDARD.md` completed with desktop/mobile screenshots | 2026-07-01 | Evidence captured; product/design owner review still required |
| Surface/card discipline | Product/design owner | Release owner | PM_Web review confirms editorial sections, trust strips, rows, and CTA blocks are used before nested cards or repeated equal-weight panels | 2026-07-01 | Source contract and screenshots pass locally; owner signoff still required |
| Launch-state matrix alignment | Product owner | Release owner | PM_Web copy and CTAs match `docs/PINAYMATE_LAUNCH_STATE_MATRIX.md`; full workspace release review also compares `../PM_App/docs/release/PINAYMATE_LAUNCH_STATE_MATRIX.md` | 2026-07-01 | Pass locally with central matrix detection: `docs/evidence/2026-07-01-pm-web-launch-claims-audit.txt` |
| Mailbox delivery | Support/legal owner | Release owner | Waitlist, support, and legal test emails received by monitored inboxes |  | Blocked: receipt, owner, backup, and SLA proof not captured |
| Mailto source audit | Engineering owner | Release owner | `npm run check:local-links:report` shows waitlist, support, and legal helper boundaries before mailbox proof is accepted | 2026-07-01 | Pass locally: `docs/evidence/2026-07-01-pm-web-local-cta-audit.txt` |
| Plan-interest source audit | Product/engineering owner | Release owner | Membership plan-interest email body proves no app account, dating profile, match request, matching session, checkout step, or payment record is created | 2026-07-01 | Pass locally through CTA/link and launch-claims reports |
| Commerce de-scope audit | Product/engineering owner | Release owner | Planned pricing remains plan-interest only; no checkout, subscription, card collection, paid ranking, paid verification, paid boost, or paid feature-access claim is published | 2026-07-01 | Pass locally through launch-claims report |
| Waitlist-only copy | Product owner | Release owner | Copy audit proving no live checkout, app-store, active-matching, or guaranteed-safety claims | 2026-07-01 | Pass locally through launch-claims report |
| Backend waitlist handoff | Product/engineering owner | Release owner | PM_Web waitlist form falls back to email until `waitlist_signups`, `submit_waitlist_signup`, `waitlist-signup` Edge Function deploy, direct RPC denial, edge rate-limit proof, and production evidence are approved | 2026-07-01 | Pass source contract only; backend runtime proof still governed by PM_App release packet |
| Waitlist backend env gates | Product/engineering owner | Release owner | `VITE_PINAYMATE_WAITLIST_BACKEND_ENABLED`, `VITE_PINAYMATE_WAITLIST_BACKEND_PROOF_ACCEPTED`, and `VITE_PINAYMATE_WAITLIST_ABUSE_CONTROL_APPROVED` stay disabled until backend proof is approved | 2026-07-01 | Pass source contract only: `docs/evidence/2026-07-01-pm-web-waitlist-handoff.txt` |
| Waitlist Edge header contract | Product/engineering owner | Release owner | `npm run check:waitlist-handoff` passes; PM_Web waitlist handoff uses the public `apikey` header only with `Content-Type: application/json`, keeps service-role credentials server-side, and does not add browser `Authorization` or Bearer anon-token headers | 2026-07-01 | Pass locally: `docs/evidence/2026-07-01-pm-web-waitlist-handoff.txt` |
| Waitlist Edge Function proof | Product/engineering owner | Release owner | `waitlist-signup` is deployed with approved origins, rate-limit salt, service-role secret kept server-side, direct RPC execution denied, and repeated-request behavior proven |  | Blocked: live Edge Function proof belongs in PM_App/Supabase evidence |
| Support email boundary | Product/support owner | Release owner | FAQ/support copy proves email does not create an app account, dating profile, match request, or payment record | 2026-07-01 | Pass locally through CTA/link and launch-claims reports |
| PM_App dependency closure | Engineering owner | Product owner | PM_App central launch packet shows blockers closed or explicitly deferred |  | Blocked/pending owner review: PM_Web remains waitlist-only until central packet is accepted as current |

## Local gates

Run from `PM_Web`:

```bash
npm run check:waitlist-handoff
npm run check:local-quality
```

This includes:

- lint
- TypeScript
- production build
- dependency audit
- CTA routing audit
- launch-claim audit
- product design source contract
- shared launch-state matrix alignment

Normal PM_Web checks are read-only by default and do not write evidence files. When the release owner intentionally wants local evidence output, run:

```bash
npm run check:release-local:report
```

To compare against the central PM_App matrix instead of the PM_Web-local snapshot, run the launch-claims script with `PINAYMATE_LAUNCH_MATRIX_PATH` pointed at the central matrix.

When this repo is checked out inside the full Romega workspace and `../PM_App/docs/release/PINAYMATE_LAUNCH_STATE_MATRIX.md` exists, `npm run check:launch-claims` also performs a non-mutating central-matrix drift check. This does not write PM_App evidence and does not make PM_App a hard dependency for standalone PM_Web checkouts.

## Production gates

- PM_Web copy and CTAs match `docs/PINAYMATE_LAUNCH_STATE_MATRIX.md`; full workspace release review also compares `../PM_App/docs/release/PINAYMATE_LAUNCH_STATE_MATRIX.md`.
- Final production URL loads successfully on desktop and mobile.
- Product design QA passes the PM_Web gates in `../PM_App/docs/testing/PRODUCT_DESIGN_QA_STANDARD.md`.
- PM_Web surface/card discipline is reviewed so the page does not regress into card spam or nested-card-heavy sections.
- Waitlist, support, and legal mailboxes receive test messages.
- Waitlist mailbox delivery is proven separately from app notification/email-provider delivery.
- Waitlist, plan-interest, support, and legal email bodies do not request payment details, ID documents, precise location, passwords, or private message screenshots.
- Waitlist email bodies clearly state that joining by email does not create an app account, dating profile, match request, matching session, checkout, or payment record.
- Membership plan-interest email bodies clearly state that registering interest does not create an app account, dating profile, match request, matching session, checkout step, or payment record.
- Support email copy clearly states that emailing support does not create an app account, dating profile, match request, or payment record.
- Waitlist, support, and legal email boundaries come from `src/lib/launchEmailLinks.ts` shared helper constants, not duplicated ad hoc encoded strings.
- Waitlist form uses `src/lib/waitlistBackendHandoff.ts`, calls `/functions/v1/waitlist-signup` only when all backend proof flags and Supabase env vars are present, and otherwise shows email fallback.
- Membership plan-interest boundaries come from `PLAN_INTEREST_EMAIL_WARNING` and `buildPlanInterestEmailHref`, not checkout or billing provider state.
- `npm run check:local-links:report` output confirms the helper-boundary section before any mailbox proof is accepted.
- Waitlist, plan-interest, support, and legal email links use explicit percent encoding so subjects and bodies do not degrade in common mail clients.
- CTA copy stays waitlist-first until PM_App app-store, checkout, matching, and safety flows are production-ready.
- No app-store, checkout, active-user, active-matching, or guaranteed-safety claims are published without proof.
- Screenshots or browser evidence are attached for desktop and mobile production smoke checks.

## Email and notification boundary

PM_Web mailto links can prove only that a user can send a waitlist/support/legal email to the approved mailbox. They do not prove:

- PM_App push notification delivery
- transactional email delivery from an app backend
- marketing email automation
- support SLA compliance
- legal/privacy response ownership

Before public launch, record separate evidence for:

- `support@pinaymate.com` receiving waitlist and support emails
- `legal@pinaymate.com` receiving legal/privacy emails
- PM_Web `npm run check:local-links:report` output confirming helper-generated waitlist, support, and legal body boundaries
- plan-interest and support mailto bodies warning users not to send sensitive data
- PM_App notification settings remaining launch-stage until a provider is wired
- owner and backup access for each mailbox
- response SLA accepted by support/legal owners

## Cross-project launch dependency

PM_Web should not be promoted as a public launch surface until PM_App release blockers are closed or explicitly framed as waitlist-only limitations:

- PM_App secret hygiene gate passes.
- PM_App dependency audit is resolved or explicitly risk-accepted.
- Supabase migrations are applied and smoke-tested.
- OCR Edge Function deployment and secret behavior are proven.
- Native QA is completed on emulator or physical devices.
- Account/store/domain/support ownership is documented.

## Evidence target

Attach current PM_Web evidence in the central launch packet only after intentional evidence capture, production URL checks, CI runs, screenshots, and mailbox proof are available. Do not treat read-only local checks as proof files unless the `:report` script was run and the generated output was reviewed.

## Matrix drift review

Use this before approving any PM_Web copy or CTA release:

- Run normal PM_Web checks from this repo for standalone validation.
- If the full workspace is available, confirm `npm run check:launch-claims` reports the central PM_App matrix check.
- If the central matrix moved ahead of the PM_Web-local snapshot, update `docs/PINAYMATE_LAUNCH_STATE_MATRIX.md` before publishing copy.
- If PM_Web intentionally uses a different matrix during release review, run `PINAYMATE_LAUNCH_MATRIX_PATH=<matrix path> node scripts/check-launch-claims.mjs`.
