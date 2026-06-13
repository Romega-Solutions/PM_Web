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
const reportDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Manila",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());
const reportPath =
  reportArg ??
  process.env.PINAYMATE_REPORT_PATH ??
  path.join(
    root,
    "docs",
    "evidence",
    `${reportDate}-pm-web-local-cta-audit.txt`,
  );

const scanRoots = ["src"];
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".html"]);
const lines = [];
const failures = [];

function add(line = "") {
  lines.push(line);
  console.log(line);
}

function walk(dir) {
  const files = [];

  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      files.push(...walk(fullPath));
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

function extractMatches(pattern, text, mapper) {
  return Array.from(text.matchAll(pattern), mapper);
}

const files = scanRoots.flatMap((scanRoot) => {
  const absolute = path.join(root, scanRoot);
  return existsSync(absolute) ? walk(absolute) : [];
});
const launchEmailHelper = files.find((file) =>
  rel(file).endsWith("src/lib/launchEmailLinks.ts"),
);
const launchEmailHelperText = launchEmailHelper
  ? readFileSync(launchEmailHelper, "utf8")
  : "";
const footerFile = files.find((file) =>
  rel(file).endsWith("src/components/sections/Footer.tsx"),
);
const footerText = footerFile ? readFileSync(footerFile, "utf8") : "";

const hrefs = [];
const mailtos = [];
const externalUrls = [];
const riskyLiveDestinations = [];
const dataCollectionMailtos = [];
const dataCollectionSourceFiles = [];
const sensitiveDataBoundaryFiles = new Set();

for (const file of files) {
  const relativePath = rel(file);
  const text = readFileSync(file, "utf8");

  for (const href of extractMatches(
    /href=\{?["'`]([^"'`{}]+)["'`]\}?/g,
    text,
    (match) => match[1],
  )) {
    hrefs.push({ file: relativePath, href });

    if (href.startsWith("mailto:")) {
      mailtos.push({ file: relativePath, href });
    }

    if (/^https?:\/\//i.test(href)) {
      externalUrls.push({ file: relativePath, href });
    }
  }

  for (const mailto of extractMatches(
    /mailto:[^"'`\s)]+/g,
    text,
    (match) => match[0],
  )) {
    mailtos.push({ file: relativePath, href: mailto });
  }

  for (const url of extractMatches(
    /https?:\/\/[^"'`\s)]+/g,
    text,
    (match) => match[0],
  )) {
    externalUrls.push({ file: relativePath, href: url });
  }

  if (
    /apps\.apple\.com|play\.google\.com|checkout\.stripe\.com|buy\.stripe\.com|paypal\.com/i.test(
      text,
    )
    || /download\s+on\s+the\s+app\s+store|get\s+it\s+on\s+google\s+play/i.test(
      text,
    )
  ) {
    riskyLiveDestinations.push(relativePath);
  }

  if (
    /(?:Preferred name:|Preferred%20name|Location:|Location%3A)/i.test(text) &&
    /mailto:support@pinaymate\.com/i.test(text) &&
    /waitlist|interest|membership/i.test(text)
  ) {
    dataCollectionSourceFiles.push(relativePath);
  }

  if (
    /Do not include payment details,[\s\S]{0,120}ID documents,[\s\S]{0,120}location,[\s\S]{0,120}private profile information/i.test(
      text,
    )
  ) {
    sensitiveDataBoundaryFiles.add(relativePath);
  }

  if (
    /Do not send passwords,[\s\S]{0,120}payment details,[\s\S]{0,120}ID documents,[\s\S]{0,120}private message screenshots/i.test(
      text,
    )
  ) {
    sensitiveDataBoundaryFiles.add(relativePath);
  }
}

const uniqueMailtos = Array.from(
  new Map(
    mailtos.map((entry) => [`${entry.file}:${entry.href}`, entry]),
  ).values(),
);
const uniqueExternalUrls = Array.from(
  new Map(
    externalUrls.map((entry) => [`${entry.file}:${entry.href}`, entry]),
  ).values(),
);

const allowedMailtoPattern =
  /^mailto:(support|legal)@pinaymate\.com(?:[?][^\s]*)?$/i;
for (const entry of uniqueMailtos) {
  if (!allowedMailtoPattern.test(entry.href)) {
    failures.push(`Unexpected mailto target in ${entry.file}: ${entry.href}`);
  }

  const decodedHref = decodeURIComponent(entry.href);
  if (/Preferred name:|Location:/i.test(decodedHref)) {
    dataCollectionMailtos.push(entry);
  }
}

for (const entry of uniqueExternalUrls) {
  failures.push(
    `Unexpected external URL in source CTA surface ${entry.file}: ${entry.href}`,
  );
}

if (riskyLiveDestinations.length > 0) {
  failures.push(
    `Live app-store/checkout/payment URL pattern found in source files: ${riskyLiveDestinations.join(", ")}`,
  );
}

if (dataCollectionMailtos.length > 0) {
  failures.push(
    `Waitlist/membership mailto links must not prefill personal data prompts before mailbox proof: ${dataCollectionMailtos
      .map((entry) => entry.file)
      .join(", ")}`,
  );
}

if (dataCollectionSourceFiles.length > 0) {
  failures.push(
    `Waitlist/membership CTA source must not contain personal-data prompt strings before mailbox proof: ${Array.from(
      new Set(dataCollectionSourceFiles),
    ).join(", ")}`,
  );
}

const requiredEvidence = [
  {
    label: "download section waitlist links",
    pass:
      launchEmailHelperText.includes("iosWaitlist") &&
      launchEmailHelperText.includes("androidWaitlist") &&
      launchEmailHelperText.includes("buildWaitlistEmailHref") &&
      launchEmailHelperText.includes("WAITLIST_EMAIL_LAUNCH_BOUNDARY") &&
      launchEmailHelperText.includes("WAITLIST_EMAIL_DATA_BOUNDARY"),
  },
  {
    label: "membership interest mailto links",
    pass:
      launchEmailHelperText.includes("buildPlanInterestEmailHref") &&
      launchEmailHelperText.includes("PLAN_INTEREST_EMAIL_WARNING"),
  },
  {
    label: "membership interest email is checkout-safe and data-minimized",
    pass:
      launchEmailHelperText.includes("PLAN_INTEREST_EMAIL_WARNING") &&
      launchEmailHelperText.includes("plan-interest email is not checkout") &&
      launchEmailHelperText.includes(
        "Do not include payment details, ID documents, location, or private profile information",
      ),
  },
  {
    label: "membership interest mailto uses explicit percent encoding",
    pass:
      launchEmailHelperText.includes("encodeURIComponent") &&
      launchEmailHelperText.includes(
        "subject=${encodeMailtoField(subject)}&body=${encodeMailtoField(body)}",
      ) &&
      !launchEmailHelperText.includes("new URLSearchParams"),
  },
  {
    label: "support mailto link",
    pass: uniqueMailtos.some((entry) =>
      entry.href.startsWith("mailto:support@pinaymate.com"),
    ),
  },
  {
    label: "legal mailto link",
    pass: uniqueMailtos.some((entry) =>
      entry.href.startsWith("mailto:legal@pinaymate.com"),
    ),
  },
  {
    label: "footer exposes support and legal contact paths",
    pass:
      footerText.includes("SUPPORT_EMAIL") &&
      footerText.includes("LEGAL_EMAIL") &&
      footerText.includes("launchEmailLinks.launchSupport") &&
      footerText.includes("launchEmailLinks.legalQuestion") &&
      footerText.includes("Email PinayMate legal and privacy team"),
  },
  {
    label: "footer support mailto uses launch-support subject",
    pass:
      launchEmailHelperText.includes("launchSupport") &&
      (/subject=PinayMate%20launch%20support/i.test(launchEmailHelperText) ||
        launchEmailHelperText.includes('"PinayMate launch support"')),
  },
  {
    label: "legal modal contact mailtos use clear subjects",
    pass:
      launchEmailHelperText.includes("legalQuestion") &&
      launchEmailHelperText.includes("supportQuestion") &&
      launchEmailHelperText.includes("buildLegalEmailHref") &&
      launchEmailHelperText.includes("buildSupportEmailHref") &&
      (/subject=PinayMate%20legal%20question/i.test(launchEmailHelperText) ||
        launchEmailHelperText.includes('"PinayMate legal question"')) &&
      (/subject=PinayMate%20support%20question/i.test(launchEmailHelperText) ||
        launchEmailHelperText.includes('"PinayMate support question"')),
  },
  {
    label: "legal email body warns against sensitive data",
    pass:
      launchEmailHelperText.includes("LEGAL_EMAIL_SENSITIVE_DATA_WARNING") &&
      launchEmailHelperText.includes("LEGAL_MAILTO_PREFIX") &&
      launchEmailHelperText.includes("buildLegalEmailHref"),
  },
  {
    label: "mailto helpers use literal support and legal prefixes",
    pass:
      launchEmailHelperText.includes("SUPPORT_MAILTO_PREFIX") &&
      launchEmailHelperText.includes("LEGAL_MAILTO_PREFIX") &&
      !launchEmailHelperText.includes("mailto:${LEGAL_EMAIL}"),
  },
  {
    label: "no external app-store or checkout URLs in source CTA surface",
    pass: uniqueExternalUrls.length === 0 && riskyLiveDestinations.length === 0,
  },
  {
    label: "waitlist and membership mailto bodies avoid personal-data prompts",
    pass:
      dataCollectionMailtos.length === 0 &&
      dataCollectionSourceFiles.length === 0,
  },
  {
    label: "membership interest email warns against sensitive data",
    pass: Array.from(sensitiveDataBoundaryFiles).some(
      (file) =>
        file.endsWith("Membership.tsx") ||
        file.endsWith("launchEmailLinks.ts"),
    ),
  },
  {
    label: "FAQ support email warns against sensitive data",
    pass: Array.from(sensitiveDataBoundaryFiles).some(
      (file) =>
        file.endsWith("Faqs.tsx") || file.endsWith("launchEmailLinks.ts"),
    ),
  },
  {
    label: "support email bodies are not account profile match or payment creation",
    pass:
      launchEmailHelperText.includes("SUPPORT_EMAIL_LAUNCH_BOUNDARY") &&
      launchEmailHelperText.includes("buildSupportEmailHref"),
  },
];

for (const item of requiredEvidence) {
  if (!item.pass) {
    failures.push(`Missing required local CTA evidence: ${item.label}`);
  }
}

add("# PM_Web Local CTA and Link Audit");
add("");
add(`Date: ${new Date().toISOString()}`);
add(
  "Scope: local source audit only. This does not prove production DNS, mailbox delivery, or deployed URL behavior.",
);
add(
  `Evidence write mode: ${
    shouldWriteReport
      ? "enabled by --write-report or PINAYMATE_WRITE_REPORT=1"
      : "disabled; this run is read-only unless the caller requested report output"
  }`,
);
add("");
add("## Required evidence");
for (const item of requiredEvidence) {
  add(`- ${item.pass ? "Pass" : "Fail"}: ${item.label}`);
}
add("");
add("## Mailto helper boundaries");
add(
  `- Waitlist helper: ${
    launchEmailHelperText.includes("buildWaitlistEmailHref") ? "Present" : "Missing"
  }`,
);
add(
  `- Waitlist launch boundary: ${
    launchEmailHelperText.includes("WAITLIST_EMAIL_LAUNCH_BOUNDARY")
      ? "Present"
      : "Missing"
  }`,
);
add(
  `- Support helper: ${
    launchEmailHelperText.includes("buildSupportEmailHref") ? "Present" : "Missing"
  }`,
);
add(
  `- Support launch boundary: ${
    launchEmailHelperText.includes("SUPPORT_EMAIL_LAUNCH_BOUNDARY")
      ? "Present"
      : "Missing"
  }`,
);
add(
  `- Legal helper: ${
    launchEmailHelperText.includes("buildLegalEmailHref") ? "Present" : "Missing"
  }`,
);
add(
  `- Legal sensitive-data warning: ${
    launchEmailHelperText.includes("LEGAL_EMAIL_SENSITIVE_DATA_WARNING")
      ? "Present"
      : "Missing"
  }`,
);
add("");
add("## Mailto links");
for (const entry of uniqueMailtos) {
  add(`- ${entry.file}: ${entry.href}`);
}
add("");
add("## External URLs in source CTA surface");
if (uniqueExternalUrls.length === 0) {
  add("- None found.");
} else {
  for (const entry of uniqueExternalUrls) {
    add(`- ${entry.file}: ${entry.href}`);
  }
}
add("");
add("## Data minimization");
if (
  dataCollectionMailtos.length === 0 &&
  dataCollectionSourceFiles.length === 0
) {
  add(
    "- Pass: no Preferred name or Location prompts found in waitlist/membership mailto bodies or CTA source text.",
  );
} else {
  for (const entry of dataCollectionMailtos) {
    add(`- Fail: personal-data prompt found in ${entry.file}: ${entry.href}`);
  }
  for (const file of Array.from(new Set(dataCollectionSourceFiles))) {
    add(`- Fail: personal-data prompt string found in ${file}`);
  }
}
add("");
add("## Sensitive-data warnings");
if (sensitiveDataBoundaryFiles.size === 0) {
  add("- Fail: no sensitive-data email warnings found.");
} else {
  for (const file of Array.from(sensitiveDataBoundaryFiles).sort()) {
    add(`- Found warning in ${file}`);
  }
}
add("");
add("## Result");
if (failures.length === 0) {
  add(
    "Pass: local CTA/link source audit found only waitlist/support/legal mailto flows, no live app-store or checkout destinations, and no prefilled personal-data prompts.",
  );
} else {
  add("Fail: local CTA/link source audit found issues.");
  for (const failure of failures) {
    add(`- ${failure}`);
  }
}
add("");
add("## Not proven");
add("- Production domain or DNS.");
add("- Actual mailbox deliverability for support/legal/waitlist links.");
add("- App-store availability.");
add("- Checkout or payment readiness.");

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
