# PM_Web Contact Path Preview

Date: 2026-06-11
Owner: Codex
Scope: PM_Web footer contact-path source update and Romega preview deployment.

## What changed

- The footer contact area now exposes both `support@pinaymate.com` and `legal@pinaymate.com` as first-level email links.
- The legal link uses the existing legal/privacy mailto helper, including the sensitive-data warning body.
- The change avoids adding another large card or nested-card section; it keeps contact access in the footer utility area.
- The PM_Web source guards now require footer-level support/legal contact exposure so the link path does not regress silently.

## Source verification

- `npm run check:product-design-contract`
  - Pass.
  - The contract now requires the footer contact markers, including `SUPPORT_EMAIL`, `LEGAL_EMAIL`, `launchEmailLinks.launchSupport`, and `launchEmailLinks.legalQuestion`.
- `npm run check:local-links`
  - Pass.
  - The CTA/link audit now includes `footer exposes support and legal contact paths`.

## Preview deployment

- Command: `vercel-romega-soln deploy --yes`
- Result: Ready preview deployment from the current worktree after source-guard updates.
- Deployment ID: `dpl_G2H7oUKVp7myzQgLUNTFuH7bgjQS`
- Preview URL: `https://pm-d22bcy84l-romega-solutions.vercel.app`
- Inspector URL: `https://vercel.com/romega-solutions/pm-web/G2H7oUKVp7myzQgLUNTFuH7bgjQS`

## Boundary

This is a Romega preview deployment only. It does not change `https://pinaymate.com`, does not prove support/legal mailbox delivery, and does not prove MX/DNS mail readiness.
