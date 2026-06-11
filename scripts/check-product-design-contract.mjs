import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));

const requiredFiles = [
  {
    path: "docs/PINAYMATE_LAUNCH_STATE_MATRIX.md",
    markers: [
      "Single launch-state source of truth",
      "Waitlist only",
      "No profile is created from PM_Web",
      "waitlist_signups",
      "submit_waitlist_signup",
      "waitlist-signup` Edge Function abuse posture",
      "Matching is not promised today",
      "Payments are planned interest only",
      "No checkout, subscription, card collection, paid ranking, paid verification, or paid feature access starts today",
      "SMS phone verification is off for launch",
      "Voice and video calls are off for launch",
      "Reports are not emergency service",
      "Notification preferences are backend-backed source controls",
      "Supabase launch proof requires applied migrations",
    ],
  },
  {
    path: "src/lib/launchEmailLinks.ts",
    markers: [
      "SUPPORT_EMAIL",
      "LEGAL_EMAIL",
      "LEGAL_MAILTO_PREFIX",
      "SUPPORT_EMAIL_SENSITIVE_DATA_WARNING",
      "LEGAL_EMAIL_SENSITIVE_DATA_WARNING",
      "SUPPORT_EMAIL_LAUNCH_BOUNDARY",
      "WAITLIST_EMAIL_LAUNCH_BOUNDARY",
      "WAITLIST_EMAIL_DATA_BOUNDARY",
      "PLAN_INTEREST_EMAIL_WARNING",
      "plan-interest email is not checkout",
      "does not create an app account, dating profile, match request",
      "buildWaitlistEmailHref",
      "buildSupportEmailHref",
      "buildLegalEmailHref",
      "iosWaitlist",
      "androidWaitlist",
      "launchSupport",
      "safetyQuestion",
      "legalQuestion",
      "buildPlanInterestEmailHref",
      "encodeMailtoField",
    ],
  },
  {
    path: "src/lib/waitlistBackendHandoff.ts",
    markers: [
      "VITE_PINAYMATE_WAITLIST_BACKEND_ENABLED",
      "VITE_PINAYMATE_WAITLIST_BACKEND_PROOF_ACCEPTED",
      "VITE_PINAYMATE_WAITLIST_ABUSE_CONTROL_APPROVED",
      "submit_waitlist_signup",
      "waitlist-signup",
      "functions/v1/waitlist-signup",
      "WAITLIST_BACKEND_CONTRACT",
      "email_fallback",
      "feature_flag_disabled",
      "proof_not_accepted",
      "abuse_control_not_approved",
      "missing_supabase_config",
      "Backend waitlist capture is not available right now",
    ],
  },
  {
    path: "src/components/waitlist/WaitlistCaptureForm.tsx",
    markers: [
      "Join the private launch list",
      "Private launch list",
      "Trust boundary",
      "Less than 1 minute",
      "Backend capture is used only after release proof is accepted",
      "Continue by email",
      "Email fallback keeps the launch waitlist usable",
      "submitWaitlistInterest",
      "buildWaitlistEmailHref",
      "buildWaitlistEmailHref(selectedPlatform.emailLabel, email)",
      "source: \"pm_web\"",
      "website",
      "Leave this field blank",
      "Sensitive details not needed for the waitlist",
      "Your launch-interest request was received",
      "This does not create an app account, dating profile, match, checkout, or payment record",
      "Do not send passwords, payment details, ID documents, precise location, or private profile information",
      "aria-busy",
      "motion-reduce:animate-none",
      "role={result?.ok === false ? \"alert\" : \"status\"}",
      "aria-live={result?.ok === false ? \"assertive\" : \"polite\"}",
    ],
  },
  {
    path: "docs/WAITLIST_BACKEND_HANDOFF.md",
    markers: [
      "backend capture is disabled by default",
      "PM_Web shows a waitlist form with email fallback",
      "VITE_PINAYMATE_WAITLIST_BACKEND_ENABLED",
      "VITE_PINAYMATE_WAITLIST_BACKEND_PROOF_ACCEPTED",
      "VITE_PINAYMATE_WAITLIST_ABUSE_CONTROL_APPROVED",
      "submit_waitlist_signup",
      "does not create an app account, dating profile, match request, matching session, checkout, payment record, verified badge, or paid access",
      "waitlist-signup` Edge Function deploy",
      "direct RPC execution is denied",
    ],
  },
  {
    path: "package.json",
    markers: [
      "check:local-links:report",
      "check:launch-claims:report",
      "check:release-local:report",
    ],
  },
  {
    path: "scripts/check-launch-claims.mjs",
    markers: [
      "PINAYMATE_LAUNCH_MATRIX_PATH",
      "centralLaunchStateMatrixPath",
      "Central PM_App matrix",
      "PINAYMATE_WRITE_REPORT",
      "--write-report",
      "PINAYMATE_LAUNCH_STATE_MATRIX.md",
      "Report not written",
    ],
  },
  {
    path: "scripts/check-local-cta-links.mjs",
    markers: [
      "PINAYMATE_WRITE_REPORT",
      "--write-report",
      "Report not written",
      "docs",
      "evidence",
    ],
  },
  {
    path: "src/components/sections/Hero.tsx",
    markers: [
      "Waitlist only",
      "No profile today",
      "No matching today",
      "No payment today",
      "Join the launch waitlist",
      "What you are joining",
      "Product preview",
      "checkout open only after launch readiness is complete",
      "focus-visible:outline",
    ],
  },
  {
    path: "src/components/sections/Download.tsx",
    markers: [
      "WaitlistCaptureForm",
      "Pick your platform. Keep the first step private.",
      "Choose your launch path",
      "Store availability",
      "App Store",
      "Unavailable until iOS release sign-off",
      "Google Play",
      "Unavailable until Android release sign-off",
      "No",
      "app account, dating profile, match request, matching session",
      "payment record, precise location, or matching data",
      "without creating an app account, dating profile, match request, or payment record",
      "Keep passwords, ID documents, payment details, precise location, and private profile information",
      "focus-visible:outline",
    ],
  },
  {
    path: "src/components/sections/Features.tsx",
    markers: [
      "Verification labels are framed as review cues",
      "Safety labels stay framed as review status",
      "not guarantees",
      "Ask a safety question",
    ],
  },
  {
    path: "src/components/sections/Membership.tsx",
    markers: [
      "Clear plans for launch interest, not a live checkout",
      "Planned pricing, not checkout",
      "Register interest only",
      "not checkout",
      "does not create an app account, dating profile, match request",
      "checkout step, or payment record",
      "PLAN_INTEREST_EMAIL_WARNING",
    ],
  },
  {
    path: "src/components/sections/About.tsx",
    markers: [
      "collect launch interest only",
      "Create a profile only when the app opens",
      "start matching",
      "open checkout",
    ],
  },
  {
    path: "src/components/sections/Faqs.tsx",
    markers: [
      "changes, profile settings",
      "profile settings, and deletion requests are handled through",
      "support during launch",
      "does not create an app account",
      "Do not send passwords",
    ],
  },
  {
    path: "src/components/modals/LegalModal.tsx",
    markers: [
      "We use launch-stage website information",
      "When app account features are available",
      "do not guarantee member identity, behavior, relationship outcomes, or personal safety",
      "do not guarantee immediate app access",
      "do not guarantee member identity",
      "Use caution and do not send money, passwords, codes, or private documents",
    ],
  },
  {
    path: "RELEASE_CHECKLIST.md",
    markers: [
      "Product design QA",
      "../PM_App/docs/PRODUCT_DESIGN_QA_STANDARD.md",
      "../PM_App/docs/PINAYMATE_LAUNCH_STATE_MATRIX.md",
      "Launch-state matrix alignment",
      "Mailto source audit",
      "Mailbox delivery",
      "Plan-interest source audit",
      "Commerce de-scope audit",
      "Backend waitlist handoff",
      "Waitlist Edge Function proof",
      "Waitlist backend env gates",
      "npm run check:local-links:report",
      "helper-generated waitlist, support, and legal body boundaries",
      "PLAN_INTEREST_EMAIL_WARNING",
      "buildPlanInterestEmailHref",
      "desktop/mobile screenshots",
    ],
  },
];

const forbiddenPatterns = [
  {
    label: "app-store availability before proof",
    pattern: /\b(?:Download on the App Store|Get it on Google Play)\b/i,
  },
  {
    label: "live checkout CTA before proof",
    pattern: /\b(?:checkout now|pay now|subscribe now|buy now|upgrade now)\b/i,
  },
  {
    label: "absolute safety or identity guarantee",
    pattern:
      /\b(?:guaranteed|guarantee)\s+(?:safe|safety|identity|real identities|verified profiles|verified users|matches|love)\b/i,
  },
  {
    label: "waitlist creates profile/account/matching",
    pattern: /\bwaitlist\s+(?:creates|starts|opens)\s+(?:a\s+)?(?:profile|account|matching)\b/i,
  },
];

const forbiddenScanExclusions = new Set([
  "scripts/check-launch-claims.mjs",
  "RELEASE_CHECKLIST.md",
]);

function readRepoFile(relativePath) {
  const absolutePath = join(rootDir, relativePath);

  if (!existsSync(absolutePath)) {
    return null;
  }

  return readFileSync(absolutePath, "utf8");
}

const failures = [];
const sourceScopeMessage =
  "Scope: source contract only. This does not prove browser rendering, desktop/mobile screenshots, production URL behavior, mailbox delivery, checkout readiness, app-store availability, or live PM_App readiness.";

for (const requiredFile of requiredFiles) {
  if (forbiddenScanExclusions.has(requiredFile.path)) {
    continue;
  }

  const content = readRepoFile(requiredFile.path);

  if (content === null) {
    failures.push(`${requiredFile.path} is missing`);
    continue;
  }

  for (const marker of requiredFile.markers) {
    if (!content.includes(marker)) {
      failures.push(`${requiredFile.path} missing design marker: ${marker}`);
    }
  }
}

for (const requiredFile of requiredFiles) {
  if (forbiddenScanExclusions.has(requiredFile.path)) {
    continue;
  }

  const content = readRepoFile(requiredFile.path);

  if (content === null) {
    continue;
  }

  for (const forbiddenPattern of forbiddenPatterns) {
    if (forbiddenPattern.pattern.test(content)) {
      failures.push(
        `${requiredFile.path} contains forbidden design claim: ${forbiddenPattern.label}`,
      );
    }
  }
}

if (failures.length > 0) {
  console.error("FAIL PM_Web product design contract");
  console.error(sourceScopeMessage);
  for (const failure of failures) {
    console.error(`  - ${failure}`);
  }
  process.exit(1);
}

console.log("PASS PM_Web product design contract");
console.log(
  "Checked conversion hierarchy, waitlist boundary, safety copy, membership framing, legal limits, and design QA release hooks.",
);
console.log(sourceScopeMessage);
