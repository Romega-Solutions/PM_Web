#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { extname, join, relative } from "node:path";

const rootDir = process.cwd();

const forbiddenPhrases = [
  {
    label: "backend implementation wording",
    pattern:
      /\b(?:backend capture|backend proof|backend path|backend process|backend verification|backend migration|protected backend|source-backed|backend-backed|current backend proof)\b/i,
  },
  {
    label: "Supabase implementation wording",
    pattern: /\bSupabase migration\b/i,
  },
  {
    label: "internal QA wording",
    pattern: /\b(?:production QA|release QA|readiness evidence|readiness checks)\b/i,
  },
  {
    label: "proof/readiness wording",
    pattern:
      /\b(?:release proof|launch proof|does not prove|not proven|production readiness|launch readiness)\b/i,
  },
  {
    label: "internal signoff wording",
    pattern:
      /\b(?:release sign-off|support routing sign-off|provider setup|mailbox routing)\b/i,
  },
  {
    label: "explicit internal/technical note",
    pattern:
      /\b(?:internal|technical)\s+(?:note|copy|details|readiness|proof|implementation|status)\b/i,
  },
  {
    label: "developer or deployment status wording",
    pattern:
      /\b(?:dev branch|developer note|deployment status|deployed status|staging status|debug note|debugging note|QA gate|QA status|release gate)\b/i,
  },
  {
    label: "infrastructure implementation wording",
    pattern:
      /\b(?:Edge Function|RPC|database schema|schema migration|API key|environment variable|env var|feature flag|service role|handoff contract|route blocker)\b/i,
  },
  {
    label: "availability framed as broken or unfinished",
    pattern:
      /\b(?:online signup is unavailable|form unavailable|being finalized|instant signup is not available|instant waitlist signup|coming soon for iOS|coming soon for Android|email fallback|available as fallback)\b/i,
  },
  {
    label: "system-state wording in public CTAs",
    pattern: /\b(?:link locked|locked link|button disabled until)\b/i,
  },
];

const rawScanFiles = ["index.html", "src/App.tsx"];
const rawScanDirs = ["src/components"];
const stringLiteralFiles = [
  "src/lib/launchEmailLinks.ts",
  "src/lib/waitlistBackendHandoff.ts",
];

const allowedExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".html"]);

function walk(dir) {
  if (!existsSync(dir)) return [];

  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (allowedExtensions.has(extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

function extractStringLiterals(content) {
  const literals = [];
  const stringPattern = /(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
  let match;

  while ((match = stringPattern.exec(content)) !== null) {
    const value = match[2]
      .replaceAll("\\n", "\n")
      .replaceAll('\\"', '"')
      .replaceAll("\\'", "'")
      .replaceAll("\\`", "`");

    if (/\s/.test(value)) {
      literals.push(value);
    }
  }

  return literals.join("\n");
}

const scanTargets = [];

for (const file of rawScanFiles) {
  const absolutePath = join(rootDir, file);
  if (existsSync(absolutePath)) {
    scanTargets.push({ path: absolutePath, mode: "raw" });
  }
}

for (const dir of rawScanDirs) {
  for (const file of walk(join(rootDir, dir))) {
    scanTargets.push({ path: file, mode: "raw" });
  }
}

for (const file of stringLiteralFiles) {
  const absolutePath = join(rootDir, file);
  if (existsSync(absolutePath)) {
    scanTargets.push({ path: absolutePath, mode: "strings" });
  }
}

const failures = [];

for (const target of scanTargets) {
  const content = readFileSync(target.path, "utf8");
  const searchable =
    target.mode === "strings" ? extractStringLiterals(content) : content;

  for (const forbidden of forbiddenPhrases) {
    if (forbidden.pattern.test(searchable)) {
      failures.push(
        `${relative(rootDir, target.path)} contains client-visible ${forbidden.label}`,
      );
    }
  }
}

if (failures.length > 0) {
  console.error("FAIL client-facing copy guard");
  for (const failure of failures) {
    console.error(`  - ${failure}`);
  }
  process.exit(1);
}

console.log("PASS client-facing copy guard");
console.log(
  `Checked ${scanTargets.length} PM_Web frontend copy surfaces for internal readiness jargon.`,
);
