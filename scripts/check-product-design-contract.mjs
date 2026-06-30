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
      "email only records my interest for PinayMate updates",
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
      "Launch audit marker",
      "apikey: anonKey",
      "\"x-client-info\": \"pm-web-waitlist\"",
      "body: JSON.stringify({",
      "response.headers.get(\"content-type\")",
      "responseContentType.toLowerCase().includes(\"application/json\")",
      "const rowsPayload = (await response.json()) as unknown",
      "Array.isArray(rowsPayload)",
      "rows.length === 1 ? rows[0] : undefined",
      "type WaitlistBackendStatus = \"accepted\"",
      "isWaitlistPlatform",
      "isAcceptedWaitlistStatus",
      "typeof row?.email_normalized !== \"string\"",
      "row.email_normalized !== email",
    ],
    forbiddenMarkers: [
      "Authorization",
      "Bearer ${anonKey}",
      "service_role",
      "SUPABASE_SERVICE_ROLE_KEY",
    ],
  },
  {
    path: "src/components/waitlist/WaitlistCaptureForm.tsx",
    markers: [
      "Join the waitlist",
      "Private waitlist",
      "waitlistBoundaries",
      "No account created here",
      "No profile answers",
      "Less than 1 minute",
      "We will not ask for photos, ID, payment, exact location, or dating",
      "Continue by email",
      "Use the email option to join with your platform preference",
      "submitWaitlistInterest",
      "buildWaitlistEmailHref",
      "buildWaitlistEmailHref(selectedPlatform.emailLabel, email)",
      "source: \"pm_web\"",
      "website",
      "Leave this field blank",
      "Sensitive details not needed for the waitlist",
      "You're on the ${platformLabel} waitlist",
      "We will send launch access and safety updates only",
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
      "Browser header contract",
      "apikey: VITE_SUPABASE_ANON_KEY",
      "Content-Type: application/json",
      "x-client-info: pm-web-waitlist",
      "must not send a browser `Authorization` header",
      "must never expose `SUPABASE_SERVICE_ROLE_KEY`",
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
      "check:source-contracts",
      "check:source-contracts:report",
      "check:release-local:report",
      "check:waitlist-handoff",
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
    path: "scripts/check-client-facing-copy.mjs",
    markers: [
      "rawScanFiles",
      "index.html",
      "src/App.tsx",
      "rawScanDirs",
      "src/components",
      "stringLiteralFiles",
      "src/lib/launchEmailLinks.ts",
      "src/lib/waitlistBackendHandoff.ts",
      "developer or deployment status wording",
      "infrastructure implementation wording",
      "availability framed as broken or unfinished",
      "online signup is unavailable",
      "coming soon for iOS",
      "email fallback",
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
      "Join the waitlist",
      "What you are joining",
      "Product preview",
      "No matching today",
      "focus-visible:outline",
    ],
  },
  {
    path: "src/components/sections/Download.tsx",
    markers: [
      "WaitlistCaptureForm",
      "Pick your platform. Keep the first step private.",
      "Email option",
      "Choose your platform by email",
      "Join iOS waitlist",
      "Join Android waitlist",
      "Choose your platform by email",
      "Send only what the waitlist needs",
      "What happens next",
      "Store links",
      "Store links",
      "matching session,",
      "checkout, payment record, precise location, or matching data",
      "without creating an app account, dating profile, match request, or payment record",
      "Keep passwords, ID documents, payment details, precise location, and private profile information",
      "border-l-2 border-[#f0b6df]",
      "lg:border-l lg:border-white/12 lg:pl-10",
      "focus-visible:outline",
    ],
    forbiddenMarkers: [
      "Coming soon for iOS",
      "Coming soon for Android",
      "Email fallback",
      "Store availability",
      "online signup is unavailable",
      "being finalized",
      "form unavailable",
    ],
  },
  {
    path: "src/components/sections/Features.tsx",
    markers: [
      "Built for trust, not hype",
      "divide-y divide-[#eadfea] border-y",
      "lg:grid-cols-[auto_0.7fr_1fr]",
      "Verification labels are framed as review cues",
      "Safety labels stay framed as review status",
      "not guarantees",
      "Trust and safety is part of the product, not a footer note.",
      "These are safety controls and review paths",
      "Ask a safety question",
    ],
    forbiddenMarkers: [
      "features.map((feature) =>",
      "grid gap-6 md:grid-cols-3",
      "rounded-3xl",
    ],
  },
  {
    path: "src/components/sections/Membership.tsx",
    markers: [
      "Membership direction",
      "Clear membership interest, not a live checkout",
      "Free waitlist",
      "Gold interest",
      "VIP interest",
      "Planned pricing, not checkout",
      "Register interest only",
      "not checkout",
      "checkout step, or payment record",
      "PLAN_INTEREST_EMAIL_WARNING",
      "divide-y divide-white/10 border-y",
      "Not sure which interest path fits?",
      "Current membership boundaries",
      "Pricing notice",
      "Paid plans should not be treated as purchased",
    ],
    forbiddenMarkers: [
      "Subscribe now",
      "Pay now",
      "Upgrade now",
      "Most popular",
      "grid gap-6 lg:grid-cols-3",
      "rounded-3xl",
    ],
  },
  {
    path: "src/components/sections/About.tsx",
    markers: [
      "collect interest only",
      "Create a profile inside the app when access is available",
      "start matching",
      "open checkout",
    ],
  },
  {
    path: "src/components/sections/Faqs.tsx",
    markers: [
      "FAQ and access clarity",
      "Straight answers before anyone joins.",
      "Support boundary",
      "This website is for waitlist and support contact only",
      "Do not send passwords",
      "divide-y divide-[#eadfea] border-y",
      "aria-expanded",
      "aria-controls",
      "role=\"region\"",
      "motion-reduce:transition-none",
    ],
    forbiddenMarkers: [
      "support if app access is not",
      "changes, profile settings",
      "grid gap-6 md:grid-cols-2",
      "rounded-3xl",
      "shadow-2xl",
    ],
  },
  {
    path: "src/components/sections/Footer.tsx",
    markers: [
      "Contact",
      "SUPPORT_EMAIL",
      "LEGAL_EMAIL",
      "launchEmailLinks.launchSupport",
      "launchEmailLinks.legalQuestion",
      "Email PinayMate launch support",
      "Email PinayMate legal and privacy team",
      "Store, social, and community links will appear when those public",
    ],
  },
  {
    path: "src/components/modals/LegalModal.tsx",
    markers: [
      "We use website waitlist and support information",
      "may offer waitlist and support access",
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
      "../PM_App/docs/testing/PRODUCT_DESIGN_QA_STANDARD.md",
      "Surface and card discipline",
      "PM_Web should not become a wall of boxed tiles",
      "Preferred alternatives",
      "Avoid nested cards",
      "Surface/card discipline",
      "card spam",
      "../PM_App/docs/release/PINAYMATE_LAUNCH_STATE_MATRIX.md",
      "Launch-state matrix alignment",
      "Mailto source audit",
      "Mailbox delivery",
      "Plan-interest source audit",
      "Commerce de-scope audit",
      "Backend waitlist handoff",
      "Waitlist Edge Function proof",
      "Waitlist backend env gates",
      "Waitlist Edge header contract",
      "npm run check:waitlist-handoff",
      "public `apikey` header",
      "`Content-Type: application/json`",
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

  for (const marker of requiredFile.forbiddenMarkers ?? []) {
    if (content.includes(marker)) {
      failures.push(`${requiredFile.path} contains forbidden design marker: ${marker}`);
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
  "Checked conversion hierarchy, waitlist boundary, safety copy, membership framing, legal limits, anti-card-spam rules, and design QA release hooks.",
);
console.log(sourceScopeMessage);
