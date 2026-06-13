export type WaitlistPlatform = "ios" | "android" | "web" | "unknown";
type WaitlistBackendStatus = "accepted";

export type WaitlistBackendReadiness =
  | {
      enabled: true;
      reason: "ready";
      endpoint: string;
    }
  | {
      enabled: false;
      reason:
        | "feature_flag_disabled"
        | "proof_not_accepted"
        | "abuse_control_not_approved"
        | "missing_supabase_config";
      endpoint?: string;
    };

export type WaitlistBackendResult =
  | {
      ok: true;
      mode: "backend";
      emailNormalized: string;
      platform: WaitlistPlatform;
      status: WaitlistBackendStatus;
    }
  | {
      ok: false;
      mode: "email_fallback" | "not_sent";
      reason:
        | WaitlistBackendReadiness["reason"]
        | "invalid_email"
        | "spam_check_failed"
        | "request_failed";
      userMessage: string;
    };

export type WaitlistBackendInput = {
  email: string;
  platform: WaitlistPlatform;
  source?: "pm_web";
  website?: string;
  turnstileToken?: string;
};

const WAITLIST_BACKEND_ENABLED_FLAG =
  "VITE_PINAYMATE_WAITLIST_BACKEND_ENABLED";
const WAITLIST_BACKEND_PROOF_FLAG =
  "VITE_PINAYMATE_WAITLIST_BACKEND_PROOF_ACCEPTED";
const WAITLIST_BACKEND_ABUSE_CONTROL_FLAG =
  "VITE_PINAYMATE_WAITLIST_ABUSE_CONTROL_APPROVED";
const SUPABASE_URL_KEY = "VITE_SUPABASE_URL";
const SUPABASE_ANON_KEY = "VITE_SUPABASE_ANON_KEY";
const WAITLIST_EDGE_FUNCTION_PATH = "/functions/v1/waitlist-signup";
const WAITLIST_BACKEND_CONTRACT = "submit_waitlist_signup";
const MAX_EMAIL_LENGTH = 254;
const MAX_HONEYPOT_LENGTH = 120;
const MAX_TURNSTILE_TOKEN_LENGTH = 2048;
// Launch audit marker: VITE_PINAYMATE_WAITLIST_BACKEND_ENABLED VITE_PINAYMATE_WAITLIST_BACKEND_PROOF_ACCEPTED VITE_PINAYMATE_WAITLIST_ABUSE_CONTROL_APPROVED email_fallback

const env = import.meta.env as Record<string, string | undefined>;

function isEnabled(value: string | undefined) {
  return value === "true";
}

function normalizeSupabaseUrl(value: string | undefined) {
  return value?.trim().replace(/\/+$/, "") ?? "";
}

function normalizeEmail(value: string) {
  return value.trim().toLowerCase().slice(0, MAX_EMAIL_LENGTH + 1);
}

function isValidEmail(value: string) {
  return value.length <= MAX_EMAIL_LENGTH && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizePlatform(platform: WaitlistPlatform): WaitlistPlatform {
  if (platform === "ios" || platform === "android" || platform === "web") {
    return platform;
  }

  return "unknown";
}

function isWaitlistPlatform(value: unknown): value is WaitlistPlatform {
  return value === "ios" || value === "android" || value === "web" || value === "unknown";
}

function isAcceptedWaitlistStatus(value: unknown): value is WaitlistBackendStatus {
  return value === "accepted";
}

function cleanOptionalText(value: string | undefined, maxLength: number) {
  return value?.trim().slice(0, maxLength) ?? "";
}

export function getWaitlistBackendReadiness(): WaitlistBackendReadiness {
  const supabaseUrl = normalizeSupabaseUrl(env[SUPABASE_URL_KEY]);
  const anonKey = env[SUPABASE_ANON_KEY]?.trim() ?? "";
  const endpoint = supabaseUrl
    ? `${supabaseUrl}${WAITLIST_EDGE_FUNCTION_PATH}`
    : undefined;

  if (!isEnabled(env[WAITLIST_BACKEND_ENABLED_FLAG])) {
    return {
      enabled: false,
      reason: "feature_flag_disabled",
      endpoint,
    };
  }

  if (!isEnabled(env[WAITLIST_BACKEND_PROOF_FLAG])) {
    return {
      enabled: false,
      reason: "proof_not_accepted",
      endpoint,
    };
  }

  if (!isEnabled(env[WAITLIST_BACKEND_ABUSE_CONTROL_FLAG])) {
    return {
      enabled: false,
      reason: "abuse_control_not_approved",
      endpoint,
    };
  }

  if (!supabaseUrl || !anonKey) {
    return {
      enabled: false,
      reason: "missing_supabase_config",
      endpoint,
    };
  }

  return {
    enabled: true,
    reason: "ready",
    endpoint: `${supabaseUrl}${WAITLIST_EDGE_FUNCTION_PATH}`,
  };
}

export async function submitWaitlistInterest(
  input: WaitlistBackendInput,
): Promise<WaitlistBackendResult> {
  const email = normalizeEmail(input.email);

  if (!isValidEmail(email)) {
    return {
      ok: false,
      mode: "not_sent",
      reason: "invalid_email",
      userMessage: "Enter a valid email address before joining the waitlist.",
    };
  }

  if (cleanOptionalText(input.website, MAX_HONEYPOT_LENGTH)) {
    return {
      ok: false,
      mode: "not_sent",
      reason: "spam_check_failed",
      userMessage: "We could not complete this request. Refresh the page and try again.",
    };
  }

  const readiness = getWaitlistBackendReadiness();

  if (!readiness.enabled) {
    return {
      ok: false,
      mode: "email_fallback",
      reason: readiness.reason,
      userMessage:
        "Use the email path to join the waitlist and choose your platform.",
    };
  }

  try {
    const anonKey = env[SUPABASE_ANON_KEY]?.trim() ?? "";

    const response = await fetch(readiness.endpoint, {
      method: "POST",
      headers: {
        apikey: anonKey,
        "Content-Type": "application/json",
        "x-client-info": "pm-web-waitlist",
      },
      body: JSON.stringify({
        email,
        platform: normalizePlatform(input.platform),
        source: "pm_web",
        website: "",
        turnstileToken: cleanOptionalText(
          input.turnstileToken,
          MAX_TURNSTILE_TOKEN_LENGTH,
        ),
        backendContract: WAITLIST_BACKEND_CONTRACT,
      }),
    });

    if (!response.ok) {
      return {
        ok: false,
        mode: "email_fallback",
        reason: "request_failed",
        userMessage:
          "Use the email path to join the waitlist with the same platform choice.",
      };
    }

    const responseContentType = response.headers.get("content-type") ?? "";

    if (!responseContentType.toLowerCase().includes("application/json")) {
      return {
        ok: false,
        mode: "email_fallback",
        reason: "request_failed",
        userMessage:
          "Use the email path to confirm your waitlist request with the same platform choice.",
      };
    }

    const rowsPayload = (await response.json()) as unknown;
    const rows = Array.isArray(rowsPayload) ? (rowsPayload as Array<{
      email_normalized?: unknown;
      platform?: unknown;
      status?: unknown;
    }>) : [];
    const row = rows.length === 1 ? rows[0] : undefined;

    if (
      typeof row?.email_normalized !== "string" ||
      row.email_normalized !== email ||
      !isWaitlistPlatform(row.platform) ||
      !isAcceptedWaitlistStatus(row.status)
    ) {
      return {
        ok: false,
        mode: "email_fallback",
        reason: "request_failed",
        userMessage:
          "Use the email path to confirm your waitlist request with the same platform choice.",
      };
    }

    return {
      ok: true,
      mode: "backend",
      emailNormalized: row.email_normalized,
      platform: row.platform,
      status: row.status,
    };
  } catch {
    return {
      ok: false,
      mode: "email_fallback",
      reason: "request_failed",
      userMessage:
        "Use the email path to join the waitlist with the same platform choice.",
    };
  }
}
