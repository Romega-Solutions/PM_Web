export type WaitlistPlatform = "ios" | "android" | "web" | "unknown";

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
      status: string;
    }
  | {
      ok: false;
      mode: "email_fallback" | "not_sent";
      reason:
        | WaitlistBackendReadiness["reason"]
        | "invalid_email"
        | "request_failed";
      userMessage: string;
    };

export type WaitlistBackendInput = {
  email: string;
  platform: WaitlistPlatform;
  source?: "pm_web" | "pm_app";
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
// Launch audit marker: VITE_PINAYMATE_WAITLIST_BACKEND_ENABLED VITE_PINAYMATE_WAITLIST_BACKEND_PROOF_ACCEPTED VITE_PINAYMATE_WAITLIST_ABUSE_CONTROL_APPROVED email_fallback

const env = import.meta.env as Record<string, string | undefined>;

function isEnabled(value: string | undefined) {
  return value === "true";
}

function normalizeSupabaseUrl(value: string | undefined) {
  return value?.trim().replace(/\/+$/, "") ?? "";
}

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizePlatform(platform: WaitlistPlatform): WaitlistPlatform {
  if (platform === "ios" || platform === "android" || platform === "web") {
    return platform;
  }

  return "unknown";
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
  const readiness = getWaitlistBackendReadiness();

  if (!readiness.enabled) {
    return {
      ok: false,
      mode: "email_fallback",
      reason: readiness.reason,
      userMessage:
        "Email waitlist is the current public path while backend capture waits for release proof.",
    };
  }

  const email = normalizeEmail(input.email);

  if (!isValidEmail(email)) {
    return {
      ok: false,
      mode: "not_sent",
      reason: "invalid_email",
      userMessage: "Enter a valid email address before joining the waitlist.",
    };
  }

  try {
    const response = await fetch(readiness.endpoint, {
      method: "POST",
      headers: {
        apikey: env[SUPABASE_ANON_KEY] ?? "",
        "Content-Type": "application/json",
        "x-client-info": "pm-web-waitlist",
      },
      body: JSON.stringify({
        email,
        platform: normalizePlatform(input.platform),
        source: input.source ?? "pm_web",
        website: input.website ?? "",
        turnstileToken: input.turnstileToken ?? "",
        backendContract: WAITLIST_BACKEND_CONTRACT,
      }),
    });

    if (!response.ok) {
      return {
        ok: false,
        mode: "email_fallback",
        reason: "request_failed",
        userMessage:
          "Backend waitlist capture is not available right now. Use the email waitlist path instead.",
      };
    }

    const rows = (await response.json()) as Array<{
      email_normalized?: string;
      platform?: WaitlistPlatform;
      status?: string;
    }>;
    const row = rows[0];

    if (!row?.email_normalized || !row.platform || !row.status) {
      return {
        ok: false,
        mode: "email_fallback",
        reason: "request_failed",
        userMessage:
          "Backend waitlist capture did not return an accepted response. Use the email waitlist path instead.",
      };
    }

    return {
      ok: true,
      mode: "backend",
      emailNormalized: row.email_normalized,
      platform: normalizePlatform(row.platform),
      status: row.status,
    };
  } catch {
    return {
      ok: false,
      mode: "email_fallback",
      reason: "request_failed",
      userMessage:
        "Backend waitlist capture could not be reached. Use the email waitlist path instead.",
    };
  }
}
