# PinayMate PM_Web waitlist backend handoff

Status: source handoff only - backend capture is disabled by default.
Last updated: 2026-06-11

## Current public behavior

PM_Web shows a waitlist form with email fallback. The form tries backend capture only when every release flag and Supabase env var is present. If any gate is missing, the public path remains email fallback.

The source helper in `src/lib/waitlistBackendHandoff.ts` backs the form in `src/components/waitlist/WaitlistCaptureForm.tsx`. It sends to the Supabase `waitlist-signup` Edge Function only after Supabase proof and public-abuse evidence are approved.

## Required enablement flags

All of these must be set to `true` before the helper sends to Supabase:

- `VITE_PINAYMATE_WAITLIST_BACKEND_ENABLED`
- `VITE_PINAYMATE_WAITLIST_BACKEND_PROOF_ACCEPTED`
- `VITE_PINAYMATE_WAITLIST_ABUSE_CONTROL_APPROVED`

Supabase configuration is also required:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

If any gate is missing, the helper returns an email-fallback result and does not call the RPC. The form then shows a `Continue by email` path.

## Backend RPC target

The helper calls:

```text
/functions/v1/waitlist-signup
```

Required backend source:

- `../PM_App/supabase/migrations/20260611125000_add_waitlist_interest_capture.sql`
- `../PM_App/supabase/migrations/20260611140000_add_waitlist_edge_abuse_control.sql`
- `../PM_App/supabase/functions/waitlist-signup/index.ts`
- `../PM_App/docs/WAITLIST_ABUSE_RATE_LIMIT_DECISION.md`
- `../PM_App/supabase/tests/04_safety_smoke_test.sql`
- `../PM_App/supabase/tests/05_release_preflight_audit.sql`

## Launch boundary

Backend waitlist capture does not create an app account, dating profile, match request, matching session, checkout, payment record, verified badge, or paid access.

Do not treat backend waitlist capture as public-ready until:

- staging and production migrations are applied
- preflight and smoke SQL pass
- direct table access denial is proven
- valid, duplicate, blocked, and malformed RPC behavior is proven
- `waitlist-signup` Edge Function deploy, origin allowlist, rate-limit salt, direct RPC denial, and challenge-provider decision are approved
- PM_Web desktop/mobile QA and production URL proof are captured

## Public abuse-control gap

The source/platform database throttle is not enough by itself for public launch. PM_Web now routes backend capture through the `waitlist-signup` Edge Function, which adds approved-origin checks, honeypot handling, optional Turnstile validation, and database-backed edge-attempt throttling before the private RPC runs. Keep `VITE_PINAYMATE_WAITLIST_ABUSE_CONTROL_APPROVED` disabled until the function is deployed, required secrets are present, direct RPC execution is denied, repeated-request behavior is proven, and production URL evidence is captured.
## Private RPC boundary

`submit_waitlist_signup` remains the database write contract, but public PM_Web traffic must reach it only through the `waitlist-signup` Edge Function. Do not re-enable direct browser calls to `/rest/v1/rpc/submit_waitlist_signup` for public launch.

## Operator gates for PM_Web handoff

Do not treat this as finished without operator proof. The handoff is valid only when release control captures:

- deployment evidence for `waitlist-signup` (staging + production),
- origin allowlist and approved-source checks,
- repeated-request throttle verification,
- direct `submit_waitlist_signup` denial proof for anon/authenticated REST callers,
- proof flags (`VITE_PINAYMATE_WAITLIST_BACKEND_*`) left disabled until all above checks pass.

## Remaining verification commands

- `npx supabase functions deploy waitlist-signup --project-ref <ref> --use-api`
- `npx supabase secrets list --project-ref <ref>` and secret-scope check for no public exposure
- `curl`/`fetch` probes against `/functions/v1/waitlist-signup` for:
  - allowed origin + valid payload,
  - malformed payload,
  - duplicate/blocked/rate-limit path.
- Manual direct REST attempt to `/rest/v1/rpc/submit_waitlist_signup` to confirm denied write path.
