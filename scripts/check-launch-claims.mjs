import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const root = process.cwd();
const args = process.argv.slice(2);
const shouldWriteReport =
  args.includes("--write-report") || process.env.PINAYMATE_WRITE_REPORT === "1";
const reportArg = args.find((arg) => !arg.startsWith("--"));
const launchStateMatrixPath = process.env.PINAYMATE_LAUNCH_MATRIX_PATH
  ? path.resolve(process.env.PINAYMATE_LAUNCH_MATRIX_PATH)
  : path.join(root, "docs", "PINAYMATE_LAUNCH_STATE_MATRIX.md");
const launchStateMatrix = existsSync(launchStateMatrixPath)
  ? readFileSync(launchStateMatrixPath, "utf8")
  : "";
const centralLaunchStateMatrixPath = path.resolve(
  root,
  "..",
  "PM_App",
  "docs",
  "PINAYMATE_LAUNCH_STATE_MATRIX.md",
);
const shouldCheckCentralLaunchStateMatrix =
  !process.env.PINAYMATE_LAUNCH_MATRIX_PATH &&
  existsSync(centralLaunchStateMatrixPath);
const centralLaunchStateMatrix = shouldCheckCentralLaunchStateMatrix
  ? readFileSync(centralLaunchStateMatrixPath, "utf8")
  : "";
const reportPath =
  reportArg ??
  process.env.PINAYMATE_REPORT_PATH ??
  path.join(
    root,
    "docs",
    "evidence",
    "2026-06-11-pm-web-launch-claims-audit.txt",
  );

const scanRoots = ["src"];
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx"]);
const skipDirs = new Set([".git", "coverage", "dist", "node_modules"]);
const failures = [];
const lines = [];

const requiredMarkers = [
  {
    label: "hero has persistent waitlist-only launch state",
    pattern:
      /Waitlist only[\s\S]{0,180}No profile today[\s\S]{0,180}No matching today[\s\S]{0,180}No payment today/i,
  },
  {
    label: "website does not create profiles, matching, checkout, or payment",
    pattern:
      /does not create a dating profile, start matching, open checkout, or collect payment/i,
  },
  {
    label: "membership interest is not checkout",
    pattern: /this is not checkout/i,
  },
  {
    label: "hero states no payment on this page",
    pattern: /no payment on this page/i,
  },
  {
    label: "hero states waitlist does not create a profile",
    pattern: /no profile created/i,
  },
  {
    label: "membership states no card or charge",
    pattern: /no card or charge/i,
  },
  {
    label: "membership states no matching starts today",
    pattern: /no matching starts today/i,
  },
  {
    label: "store links are visibly locked until release sign-off",
    pattern:
      /Store availability[\s\S]{0,160}App Store link locked[\s\S]{0,220}Google Play link locked/i,
  },
  {
    label: "membership separates planned pricing from checkout",
    pattern: /Planned pricing, not checkout/i,
  },
  {
    label: "trust and safety has direct support path",
    pattern: /Ask a safety question/i,
  },
  {
    label: "legal safety disclaimer",
    pattern: /do not guarantee member identity, behavior, relationship outcomes, or personal safety/i,
  },
  {
    label: "feature section avoids safety guarantees and background-check claims",
    pattern:
      /safety controls and review paths[\s\S]{0,120}not guarantees[\s\S]{0,120}background checks/i,
  },
  {
    label: "app-store access is not guaranteed before launch",
    pattern:
      /do not guarantee immediate app access, paid membership availability, app-store availability, or live dating functionality/i,
  },
  {
    label: "waitlist email is platform-only and does not create profile data",
    pattern:
      /platform-only waitlist message[\s\S]{0,260}No\s+app\s+account,[\s\S]{0,120}dating\s+profile,[\s\S]{0,120}match\s+request,[\s\S]{0,120}matching\s+session,[\s\S]{0,120}checkout,[\s\S]{0,120}payment\s+record,[\s\S]{0,120}precise\s+location,[\s\S]{0,120}matching\s+data\s+is\s+created/i,
  },
  {
    label: "waitlist helper does not create account profile match checkout or payment records",
    pattern:
      /WAITLIST_EMAIL_LAUNCH_BOUNDARY[\s\S]{0,260}does\s+not\s+create\s+an\s+app\s+account,[\s\S]{0,120}dating\s+profile,[\s\S]{0,120}match\s+request,[\s\S]{0,120}matching\s+session,[\s\S]{0,120}checkout,[\s\S]{0,120}payment\s+record/i,
  },
  {
    label: "backend waitlist handoff is gated and falls back to email",
    pattern:
      /VITE_PINAYMATE_WAITLIST_BACKEND_ENABLED[\s\S]{0,600}VITE_PINAYMATE_WAITLIST_BACKEND_PROOF_ACCEPTED[\s\S]{0,600}VITE_PINAYMATE_WAITLIST_ABUSE_CONTROL_APPROVED[\s\S]{0,1400}email_fallback/i,
  },
  {
    label: "waitlist helper uses launch and data boundaries",
    pattern:
      /function\s+buildWaitlistEmailHref[\s\S]{0,320}WAITLIST_EMAIL_LAUNCH_BOUNDARY[\s\S]{0,160}WAITLIST_EMAIL_DATA_BOUNDARY/i,
  },
  {
    label: "waitlist helper warns against sensitive data",
    pattern:
      /WAITLIST_EMAIL_DATA_BOUNDARY[\s\S]{0,220}should\s+not\s+include\s+passwords,[\s\S]{0,120}payment\s+details,[\s\S]{0,120}ID\s+documents,[\s\S]{0,120}precise\s+location,[\s\S]{0,120}private\s+profile\s+information/i,
  },
  {
    label: "final waitlist CTA does not create profile, matching, or payment",
    pattern:
      /Joining does not start matching today,[\s\S]{0,120}create a public profile,[\s\S]{0,80}require payment/i,
  },
  {
    label: "final waitlist note is not membership, match request, or checkout",
    pattern:
      /interest signal for launch planning,[\s\S]{0,140}not a live\s+membership,\s+match request,\s+or checkout step/i,
  },
  {
    label: "legal privacy copy separates website waitlist data from app account data",
    pattern:
      /website waitlist and support flows collect only[\s\S]{0,180}Profile information, photos, matches, messages, reports, blocks, and verification status apply only when app account features are available/i,
  },
  {
    label: "membership interest email is not checkout and does not create a profile",
    pattern:
      /plan-interest email only[\s\S]{0,180}does not create an app[\s\S]{0,120}account,[\s\S]{0,120}dating profile,[\s\S]{0,120}match request,[\s\S]{0,120}matching session,[\s\S]{0,120}checkout step,[\s\S]{0,120}payment record/i,
  },
  {
    label: "membership interest helper does not create account profile match checkout or payment records",
    pattern:
      /PLAN_INTEREST_EMAIL_WARNING[\s\S]{0,260}plan-interest email is not checkout[\s\S]{0,140}does not create an app account,[\s\S]{0,120}dating profile,[\s\S]{0,120}match request,[\s\S]{0,120}matching session,[\s\S]{0,120}checkout step,[\s\S]{0,120}payment record/i,
  },
  {
    label: "membership interest email avoids private/payment data",
    pattern:
      /plan-interest email only[\s\S]{0,220}Do not include payment details,[\s\S]{0,120}ID documents,[\s\S]{0,120}location,[\s\S]{0,120}private profile information/i,
  },
  {
    label: "about membership links are interest-only",
    pattern:
      /Membership links collect launch interest only[\s\S]{0,180}do not create[\s\S]{0,80}dating profile[\s\S]{0,160}start matching[\s\S]{0,160}open checkout/i,
  },
  {
    label: "FAQ support email avoids sensitive data collection",
    pattern:
      /Do not send passwords,[\s\S]{0,120}payment details,[\s\S]{0,120}ID documents,[\s\S]{0,120}private message screenshots by\s+email/i,
  },
  {
    label: "legal email avoids sensitive data collection",
    pattern:
      /LEGAL_EMAIL_SENSITIVE_DATA_WARNING[\s\S]{0,220}should\s+not\s+send\s+passwords,[\s\S]{0,120}payment\s+details,[\s\S]{0,120}ID\s+documents,[\s\S]{0,160}private\s+message\s+screenshots/i,
  },
  {
    label: "FAQ support email does not create account profile matching or payment records",
    pattern:
      /Emailing\s+support\s+does\s+not\s+create\s+an\s+app\s+account,[\s\S]{0,120}dating\s+profile,[\s\S]{0,120}match\s+request,[\s\S]{0,120}payment\s+record/i,
  },
  {
    label: "support mailto body does not create account profile matching or payment records",
    pattern:
      /SUPPORT_EMAIL_LAUNCH_BOUNDARY[\s\S]{0,220}does\s+not\s+create\s+an\s+app\s+account,[\s\S]{0,120}dating\s+profile,[\s\S]{0,120}match\s+request,[\s\S]{0,120}payment\s+record/i,
  },
  {
    label: "support helper uses launch and sensitive-data boundaries",
    pattern:
      /function\s+buildSupportEmailHref[\s\S]{0,320}SUPPORT_EMAIL_LAUNCH_BOUNDARY[\s\S]{0,160}SUPPORT_EMAIL_SENSITIVE_DATA_WARNING/i,
  },
  {
    label: "FAQ gates account settings and deletion during launch preparation",
    pattern:
      /Account changes,[\s\S]{0,80}profile settings,[\s\S]{0,120}deletion requests[\s\S]{0,180}through support during launch preparation/i,
  },
  {
    label: "legal separates launch-stage website use from app account use",
    pattern:
      /We use launch-stage website information[\s\S]{0,180}When app features are live for your account or test group/i,
  },
];

const requiredLaunchStateMatrixMarkers = [
  {
    label: "shared launch-state matrix exists",
    pattern: /Single launch-state source of truth/i,
  },
  {
    label: "matrix defines PM_Web as waitlist/support surface",
    pattern:
      /PM_Web is a launch-interest and support surface, not a live dating-account surface/i,
  },
  {
    label: "matrix blocks PM_Web profile creation claims",
    pattern: /No profile is created from PM_Web/i,
  },
  {
    label: "matrix blocks live matching claims",
    pattern: /Matching is not promised today/i,
  },
  {
    label: "matrix blocks live payment claims",
    pattern: /Payments are planned interest only/i,
  },
  {
    label: "matrix blocks paid ranking verification and feature access claims",
    pattern:
      /No checkout, subscription, card collection, paid ranking, paid verification, or paid feature access starts today/i,
  },
  {
    label: "matrix requires proof before stronger launch claims",
    pattern: /Required proof before stronger claim/i,
  },
];

const forbiddenLiveClaims = [
  {
    label: "live app-store availability claim",
    pattern:
      /\b(?:available|get|download)\s+(?:now|today)?\s*(?:on|from)\s+(?:the\s+)?(?:app store|google play)\b/i,
  },
  {
    label: "official app-store badge copy before availability proof",
    pattern: /\bdownload\s+on\s+the\s+app\s+store\b/i,
  },
  {
    label: "official google-play badge copy before availability proof",
    pattern: /\bget\s+it\s+on\s+google\s+play\b/i,
  },
  {
    label: "live dating-profile creation claim",
    pattern:
      /\bcreate\s+(?:your\s+)?(?:dating\s+)?profile\s+(?:now|today|instantly)\b/i,
  },
  {
    label: "live matching claim",
    pattern: /(?<!does not )\bstart\s+matching\s+(?:now|today|instantly)\b/i,
  },
  {
    label: "live payment or checkout claim",
    pattern:
      /\b(?:buy now|pay now|subscribe now|get premium now|checkout now|upgrade now)\b/i,
  },
  {
    label: "absolute safety or identity guarantee",
    pattern:
      /\b(?:guaranteed|guarantee)\s+(?:safe|safety|identity|real identities|verified profiles|verified users|matches|love)\b/i,
  },
  {
    label: "background-check claim",
    pattern: /\bbackground[-\s]?checked\b/i,
  },
  {
    label: "paid ranking or profile boost claim",
    pattern:
      /\b(?:profile\s+boost|boost\s+your\s+profile|expanded\s+profile\s+visibility|priority\s+profile\s+visibility|paid\s+(?:members?|users?)\s+(?:get|receive|unlock)|paid\s+verification|paid\s+badge)\b/i,
  },
  {
    label: "waitlist creates account/profile claim",
    pattern:
      /\bwaitlist\s+(?:creates|starts|opens)\s+(?:a\s+)?(?:profile|account|matching)\b/i,
  },
  {
    label: "final CTA starts matching claim",
    pattern:
      /\bjoin(?:ing)?\s+(?:the\s+)?waitlist[\s\S]{0,120}\bstarts?\s+matching\b/i,
  },
];

function add(line = "") {
  lines.push(line);
  console.log(line);
}

function walk(dir, files = []) {
  if (!existsSync(dir)) return files;

  for (const entry of readdirSync(dir)) {
    if (skipDirs.has(entry)) continue;

    const fullPath = path.join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      walk(fullPath, files);
      continue;
    }

    if (sourceExtensions.has(path.extname(fullPath))) {
      files.push(fullPath);
    }
  }

  return files;
}

function rel(file) {
  return path.relative(root, file).replaceAll(path.sep, "/");
}

function getLineNumber(text, index) {
  return text.slice(0, index).split(/\r?\n/).length;
}

const files = scanRoots.flatMap((scanRoot) => walk(path.join(root, scanRoot)));
const fullSource = files
  .map((file) => readFileSync(file, "utf8"))
  .join("\n\n");

const markerResults = requiredMarkers.map((marker) => ({
  ...marker,
  pass: marker.pattern.test(fullSource),
}));
const launchStateMatrixResults = requiredLaunchStateMatrixMarkers.map(
  (marker) => ({
    ...marker,
    pass: marker.pattern.test(launchStateMatrix),
  }),
);
const centralLaunchStateMatrixResults = requiredLaunchStateMatrixMarkers.map(
  (marker) => ({
    ...marker,
    pass: marker.pattern.test(centralLaunchStateMatrix),
  }),
);

for (const marker of markerResults) {
  if (!marker.pass) {
    failures.push(`Missing required launch disclaimer: ${marker.label}`);
  }
}

if (!launchStateMatrix) {
  failures.push(
    `Missing shared launch-state matrix: ${path.relative(root, launchStateMatrixPath).replaceAll(path.sep, "/")}`,
  );
} else {
  for (const marker of launchStateMatrixResults) {
    if (!marker.pass) {
      failures.push(`Missing shared launch-state matrix marker: ${marker.label}`);
    }
  }
}

if (shouldCheckCentralLaunchStateMatrix) {
  for (const marker of centralLaunchStateMatrixResults) {
    if (!marker.pass) {
      failures.push(
        `Central PM_App launch-state matrix is missing PM_Web marker: ${marker.label}`,
      );
    }
  }
}

const claimFindings = [];
for (const file of files) {
  const text = readFileSync(file, "utf8");

  for (const rule of forbiddenLiveClaims) {
    const match = rule.pattern.exec(text);
    if (match) {
      claimFindings.push({
        file: rel(file),
        line: getLineNumber(text, match.index),
        label: rule.label,
        text: match[0],
      });
    }
  }
}

for (const finding of claimFindings) {
  failures.push(
    `${finding.file}:${finding.line} ${finding.label}: ${finding.text}`,
  );
}

add("# PM_Web Launch Claims Audit");
add("");
add(`Date: ${new Date().toISOString()}`);
add(
  "Scope: local source audit only. This does not prove production DNS, mailbox delivery, app-store availability, checkout readiness, or deployed URL behavior.",
);
add(
  `Evidence write mode: ${
    shouldWriteReport
      ? "enabled by --write-report or PINAYMATE_WRITE_REPORT=1"
      : "disabled; this run is read-only unless the caller requested report output"
  }`,
);
add("");
add("## Required launch-stage disclaimers");
for (const marker of markerResults) {
  add(`- ${marker.pass ? "Pass" : "Fail"}: ${marker.label}`);
}
add("");
add("## Launch-state matrix");
add(`- PM_Web matrix: ${path.relative(root, launchStateMatrixPath).replaceAll(path.sep, "/")}`);
for (const marker of launchStateMatrixResults) {
  add(`- ${marker.pass ? "Pass" : "Fail"}: ${marker.label}`);
}
if (shouldCheckCentralLaunchStateMatrix) {
  add(
    `- Central PM_App matrix found: ${path.relative(root, centralLaunchStateMatrixPath).replaceAll(path.sep, "/")}`,
  );
  for (const marker of centralLaunchStateMatrixResults) {
    add(`- ${marker.pass ? "Pass" : "Fail"} central: ${marker.label}`);
  }
} else {
  add(
    "- Central PM_App matrix not checked in this run. Set PINAYMATE_LAUNCH_MATRIX_PATH to force a specific matrix.",
  );
}
add("");
add("## Forbidden live-claim patterns");
if (claimFindings.length === 0) {
  add("- None found.");
} else {
  for (const finding of claimFindings) {
    add(`- ${finding.file}:${finding.line} ${finding.label}: ${finding.text}`);
  }
}
add("");
add("## Result");
if (failures.length === 0) {
  add(
    "Pass: PM_Web source keeps launch-stage disclaimers and avoids obvious live checkout, app-store, profile creation, matching, safety-guarantee, and waitlist data-overclaim issues.",
  );
} else {
  add("Fail: PM_Web launch claim audit found issues.");
  for (const failure of failures) {
    add(`- ${failure}`);
  }
}
add("");
add("## Not proven");
add("- Production domain or DNS.");
add("- Actual mailbox deliverability.");
add("- App-store availability.");
add("- Checkout or payment readiness.");
add("- Live app matching/profile behavior.");

if (shouldWriteReport) {
  mkdirSync(path.dirname(reportPath), { recursive: true });
  writeFileSync(reportPath, `${lines.join("\n")}\n`);
  console.log(`Report: ${reportPath}`);
} else {
  console.log(
    "Report not written. Pass --write-report or set PINAYMATE_WRITE_REPORT=1 to create an evidence file.",
  );
}

if (failures.length > 0) {
  process.exit(1);
}
