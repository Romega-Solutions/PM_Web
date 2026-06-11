# PinayMate Launch State Matrix Snapshot

Status: PM_Web-local snapshot for standalone source checks.

This mirrors the PM_Web-facing rules from the PM_App launch-state matrix so PM_Web checks can run without mutating or depending on a sibling PM_App checkout. If the cross-product launch matrix changes, refresh this snapshot or run `scripts/check-launch-claims.mjs` with `PINAYMATE_LAUNCH_MATRIX_PATH` pointed at the current shared matrix.

## Single launch-state source of truth

The full product launch-state source of truth lives in the app release docs. This PM_Web snapshot only exists to keep PM_Web source checks self-contained.

## PM_Web launch-state rules

Waitlist only.

PM_Web is a launch-interest and support surface, not a live dating-account surface.

PM_Web waitlist email remains the public capture path until the Supabase `waitlist_signups` migration, `submit_waitlist_signup` RPC, `waitlist-signup` Edge Function abuse posture, and production evidence are approved.

No profile is created from PM_Web.

Matching is not promised today.

Payments are planned interest only.

No checkout, subscription, card collection, paid ranking, paid verification, or paid feature access starts today.

SMS phone verification is off for launch.

Voice and video calls are off for launch.

Reports are not emergency service.

Notification preferences are backend-backed source controls.

Supabase launch proof requires applied migrations.

Required proof before stronger claim:

- Production PM_Web URL smoke proof.
- Support and legal mailbox delivery proof.
- Applied waitlist migration proof and public abuse/rate-limit decision before backend waitlist capture is enabled.
- Current app launch evidence packet sign-off.
- Supabase backend and safety operations proof.
- Native app QA proof for the claimed feature surface.
- Payment processor ownership, legal/refund/support signoff, checkout QA, webhook proof, and entitlement backend proof before any billing claim.

## Operator proof layer

- **Source-only status (repo)**: waitlist form path, helper guards, copy, and shared scripts exist in source; local static checks are still pending in this evidence packet.
- **Runtime proof (required)**: production URL smoke, mailbox delivery, backend migration and safety SQL, OCR provider checks, and native QA are captured in shared evidence.
- **Manager-ready claim rule**: PM_Web can only state a non-waitlist capability when the corresponding runtime proof is present and current in `../PM_App/docs/LAUNCH_EVIDENCE_PACKET.md`.
