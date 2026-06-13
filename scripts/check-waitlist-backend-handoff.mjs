import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const handoffPath = "src/lib/waitlistBackendHandoff.ts";
const absoluteHandoffPath = join(rootDir, handoffPath);
const handoffDocPath = "docs/WAITLIST_BACKEND_HANDOFF.md";
const releaseChecklistPath = "RELEASE_CHECKLIST.md";

const requiredMarkers = [
  "VITE_PINAYMATE_WAITLIST_BACKEND_ENABLED",
  "VITE_PINAYMATE_WAITLIST_BACKEND_PROOF_ACCEPTED",
  "VITE_PINAYMATE_WAITLIST_ABUSE_CONTROL_APPROVED",
  "VITE_SUPABASE_URL",
  "VITE_SUPABASE_ANON_KEY",
  'const WAITLIST_EDGE_FUNCTION_PATH = "/functions/v1/waitlist-signup"',
  'const WAITLIST_BACKEND_CONTRACT = "submit_waitlist_signup"',
  "feature_flag_disabled",
  "proof_not_accepted",
  "abuse_control_not_approved",
  "missing_supabase_config",
  "email_fallback",
  "apikey: anonKey",
  '"Content-Type": "application/json"',
  '"x-client-info": "pm-web-waitlist"',
  "body: JSON.stringify({",
  'source: "pm_web"',
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
  "backendContract: WAITLIST_BACKEND_CONTRACT",
  "website: \"\"",
  "turnstileToken",
];

const forbiddenMarkers = [
  "Authorization",
  "Bearer",
  "SUPABASE_SERVICE_ROLE_KEY",
  "service_role",
  "/rest/v1/rpc/submit_waitlist_signup",
  'source?: "pm_web" | "pm_app"',
  "source: input.source",
];

const requiredDocMarkers = [
  [
    handoffDocPath,
    [
      "Browser header contract",
      "apikey: VITE_SUPABASE_ANON_KEY",
      "Content-Type: application/json",
      "x-client-info: pm-web-waitlist",
      "must not send a browser `Authorization` header",
      "must never expose `SUPABASE_SERVICE_ROLE_KEY`",
      "npm run check:waitlist-handoff",
    ],
  ],
  [
    releaseChecklistPath,
    [
      "Waitlist Edge header contract",
      "npm run check:waitlist-handoff",
      "public `apikey` header only",
      "`Content-Type: application/json`",
      "does not add browser `Authorization` or Bearer anon-token headers",
    ],
  ],
];

const failures = [];

if (!existsSync(absoluteHandoffPath)) {
  failures.push(`${handoffPath} is missing`);
} else {
  const source = readFileSync(absoluteHandoffPath, "utf8");

  for (const marker of requiredMarkers) {
    if (!source.includes(marker)) {
      failures.push(`${handoffPath} missing waitlist handoff marker: ${marker}`);
    }
  }

  for (const marker of forbiddenMarkers) {
    if (source.includes(marker)) {
      failures.push(`${handoffPath} contains forbidden waitlist handoff marker: ${marker}`);
    }
  }
}

for (const [relativePath, markers] of requiredDocMarkers) {
  const absolutePath = join(rootDir, relativePath);

  if (!existsSync(absolutePath)) {
    failures.push(`${relativePath} is missing`);
    continue;
  }

  const source = readFileSync(absolutePath, "utf8");

  for (const marker of markers) {
    if (!source.includes(marker)) {
      failures.push(`${relativePath} missing waitlist handoff marker: ${marker}`);
    }
  }
}

if (failures.length > 0) {
  console.error("FAIL PM_Web waitlist backend handoff contract");
  for (const failure of failures) {
    console.error(`  - ${failure}`);
  }
  process.exit(1);
}

console.log("PASS PM_Web waitlist backend handoff contract");
console.log(
  "Checked backend flag gates, Edge Function path, public apikey header, client marker, contract token, honeypot reset, forbidden browser secret/auth headers, and operator doc markers.",
);
