# Evidence Retention

This folder keeps compact PM_Web evidence only.

## Keep

- `2026-06-11-pm-web-local-cta-audit.txt` - local CTA/link audit output.
- `2026-06-11-pm-web-launch-claims-audit.txt` - local launch-claim audit output.
- `2026-07-01-pm-web-current-evidence-summary.md` - current PM_Web local, browser, production URL, and remaining-blocker summary.
- `2026-07-01-pm-web-local-quality.txt` - current local quality command output.
- `2026-07-01-pm-web-local-cta-audit.txt` - current CTA/link audit output.
- `2026-07-01-pm-web-launch-claims-audit.txt` - current launch-claims audit output with central PM_App matrix detection.
- `2026-07-01-pm-web-browser-smoke.txt` - current desktop/mobile local and production smoke summary.
- `2026-07-01-pm-web-*.png` - current local and production desktop/mobile screenshots.

## Trimmed

One-off source-proof notes were removed. They documented individual implementation passes, but the current review path should use `RELEASE_CHECKLIST.md`, `README.md`, and fresh `:report` command output instead.

Do not store secrets, mailbox contents, user data, payment data, or private screenshots here. Production proof should be redacted and linked from the release checklist or central launch packet.
