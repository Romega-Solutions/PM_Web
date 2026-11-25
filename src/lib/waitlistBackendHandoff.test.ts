import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { httpsUrl } from "../test/urls";
import {
  getWaitlistBackendReadiness,
  submitWaitlistInterest,
} from "./waitlistBackendHandoff";

const FLAGS = {
  enabled: "VITE_PINAYMATE_WAITLIST_BACKEND_ENABLED",
  proof: "VITE_PINAYMATE_WAITLIST_BACKEND_PROOF_ACCEPTED",
  abuse: "VITE_PINAYMATE_WAITLIST_ABUSE_CONTROL_APPROVED",
} as const;
const SUPABASE_URL = httpsUrl("abcd1234.supabase.co");
const ANON_KEY = "public-anon-key-for-tests";
const ENDPOINT = `${SUPABASE_URL}/functions/v1/waitlist-signup`;

/** Turns every safety flag on and sets the public Supabase config. */
function stubBackendReady() {
  vi.stubEnv(FLAGS.enabled, "true");
  vi.stubEnv(FLAGS.proof, "true");
  vi.stubEnv(FLAGS.abuse, "true");
  vi.stubEnv("VITE_SUPABASE_URL", SUPABASE_URL);
  vi.stubEnv("VITE_SUPABASE_ANON_KEY", ANON_KEY);
}

function jsonResponse(body: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "content-type": "application/json" },
    ...init,
  });
}

const acceptedRow = (overrides: Record<string, unknown> = {}) => ({
  email_normalized: "ana@example.com",
  platform: "ios",
  status: "accepted",
  ...overrides,
});

let fetchMock: ReturnType<typeof vi.fn>;

beforeEach(() => {
  // Start every test with all flags and config unset, whatever the real env holds.
  for (const name of [
    ...Object.values(FLAGS),
    "VITE_SUPABASE_URL",
    "VITE_SUPABASE_ANON_KEY",
  ]) {
    vi.stubEnv(name, "");
  }
  fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("getWaitlistBackendReadiness: the three safety flags", () => {
  it("stays off when nothing is configured", () => {
    expect(getWaitlistBackendReadiness()).toMatchObject({
      enabled: false,
      reason: "feature_flag_disabled",
    });
  });

  it("blocks on the first missing flag, in order: enabled, proof, abuse control", () => {
    vi.stubEnv("VITE_SUPABASE_URL", SUPABASE_URL);
    vi.stubEnv("VITE_SUPABASE_ANON_KEY", ANON_KEY);

    vi.stubEnv(FLAGS.proof, "true");
    vi.stubEnv(FLAGS.abuse, "true");
    expect(getWaitlistBackendReadiness().reason).toBe("feature_flag_disabled");

    vi.stubEnv(FLAGS.enabled, "true");
    vi.stubEnv(FLAGS.proof, "false");
    expect(getWaitlistBackendReadiness().reason).toBe("proof_not_accepted");

    vi.stubEnv(FLAGS.proof, "true");
    vi.stubEnv(FLAGS.abuse, "false");
    expect(getWaitlistBackendReadiness().reason).toBe("abuse_control_not_approved");
  });

  it.each(["TRUE", "True", "1", "yes", " true", "true "])(
    "only the exact string \"true\" turns a flag on (not %j)",
    (value) => {
      stubBackendReady();
      vi.stubEnv(FLAGS.enabled, value);
      expect(getWaitlistBackendReadiness()).toMatchObject({
        enabled: false,
        reason: "feature_flag_disabled",
      });
    },
  );

  it("stays off when the Supabase URL or the public key is missing", () => {
    stubBackendReady();
    vi.stubEnv("VITE_SUPABASE_URL", "");
    expect(getWaitlistBackendReadiness()).toMatchObject({
      enabled: false,
      reason: "missing_supabase_config",
    });

    stubBackendReady();
    vi.stubEnv("VITE_SUPABASE_ANON_KEY", "   ");
    expect(getWaitlistBackendReadiness()).toMatchObject({
      enabled: false,
      reason: "missing_supabase_config",
    });
  });

  it("is ready only when all three flags and the config are present", () => {
    stubBackendReady();
    expect(getWaitlistBackendReadiness()).toEqual({
      enabled: true,
      reason: "ready",
      endpoint: ENDPOINT,
    });
  });

  it("builds the endpoint from a URL with spaces and trailing slashes", () => {
    stubBackendReady();
    vi.stubEnv("VITE_SUPABASE_URL", `  ${SUPABASE_URL}///  `);
    expect(getWaitlistBackendReadiness()).toMatchObject({ enabled: true, endpoint: ENDPOINT });
  });
});

describe("submitWaitlistInterest: requests that must never reach the backend", () => {
  beforeEach(stubBackendReady);

  it.each(["", "   ", "not-an-email", "a@b", "two words@example.com", "@example.com"])(
    "rejects the invalid email %j without calling the backend",
    async (email) => {
      const result = await submitWaitlistInterest({ email, platform: "ios" });
      expect(result).toMatchObject({ ok: false, mode: "not_sent", reason: "invalid_email" });
      expect(fetchMock).not.toHaveBeenCalled();
    },
  );

  it("rejects an email longer than 254 characters", async () => {
    const email = `${"a".repeat(250)}@example.com`;
    const result = await submitWaitlistInterest({ email, platform: "ios" });
    expect(result).toMatchObject({ ok: false, reason: "invalid_email" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("treats a filled honeypot field as a bot and sends nothing", async () => {
    const result = await submitWaitlistInterest({
      email: "ana@example.com",
      platform: "ios",
      website: "bot-filled-this-in",
    });
    expect(result).toMatchObject({ ok: false, mode: "not_sent", reason: "spam_check_failed" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("ignores a honeypot that only holds spaces", async () => {
    fetchMock.mockResolvedValue(jsonResponse([acceptedRow()]));
    const result = await submitWaitlistInterest({
      email: "ana@example.com",
      platform: "ios",
      website: "   ",
    });
    expect(result.ok).toBe(true);
  });

  it.each([
    ["feature_flag_disabled", () => vi.stubEnv(FLAGS.enabled, "")],
    ["proof_not_accepted", () => vi.stubEnv(FLAGS.proof, "false")],
    ["abuse_control_not_approved", () => vi.stubEnv(FLAGS.abuse, "")],
    ["missing_supabase_config", () => vi.stubEnv("VITE_SUPABASE_ANON_KEY", "")],
  ])("falls back to email, without a request, when %s", async (reason, breakIt) => {
    breakIt();
    const result = await submitWaitlistInterest({ email: "ana@example.com", platform: "ios" });
    expect(result).toMatchObject({ ok: false, mode: "email_fallback", reason });
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

describe("submitWaitlistInterest: the request that is sent", () => {
  beforeEach(stubBackendReady);

  it("posts to the waitlist signup endpoint with only the public key", async () => {
    fetchMock.mockResolvedValue(jsonResponse([acceptedRow()]));

    await submitWaitlistInterest({ email: "ana@example.com", platform: "ios" });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe(ENDPOINT);
    expect(init.method).toBe("POST");
    // The exact header set is part of the contract: apikey only, no Authorization.
    expect(init.headers).toEqual({
      apikey: ANON_KEY,
      "Content-Type": "application/json",
      "x-client-info": "pm-web-waitlist",
    });
  });

  it("never sends a service-role key, even if one is present in the environment", async () => {
    vi.stubEnv("VITE_SUPABASE_SERVICE_ROLE_KEY", "SECRET-SERVICE-ROLE-VALUE");
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "SECRET-SERVICE-ROLE-VALUE");
    fetchMock.mockResolvedValue(jsonResponse([acceptedRow()]));

    await submitWaitlistInterest({ email: "ana@example.com", platform: "ios" });

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    const everything = JSON.stringify({ url, init });
    expect(everything).not.toContain("SECRET-SERVICE-ROLE-VALUE");
    expect(everything.toLowerCase()).not.toContain("authorization");
  });

  it("sends a normalised email, the contract marker and an empty honeypot", async () => {
    fetchMock.mockResolvedValue(jsonResponse([acceptedRow()]));

    await submitWaitlistInterest({ email: "  Ana@Example.COM ", platform: "android" });

    const body = JSON.parse((fetchMock.mock.calls[0][1] as RequestInit).body as string);
    expect(body).toEqual({
      email: "ana@example.com",
      platform: "android",
      source: "pm_web",
      website: "",
      turnstileToken: "",
      backendContract: "submit_waitlist_signup",
    });
  });

  it("turns an unexpected platform into \"unknown\"", async () => {
    fetchMock.mockResolvedValue(jsonResponse([acceptedRow({ platform: "unknown" })]));

    await submitWaitlistInterest({
      email: "ana@example.com",
      platform: "windows-phone" as never,
    });

    const body = JSON.parse((fetchMock.mock.calls[0][1] as RequestInit).body as string);
    expect(body.platform).toBe("unknown");
  });

  it("trims the Turnstile token and caps it at 2048 characters", async () => {
    fetchMock.mockResolvedValue(jsonResponse([acceptedRow()]));

    await submitWaitlistInterest({
      email: "ana@example.com",
      platform: "ios",
      turnstileToken: ` ${"t".repeat(3000)} `,
    });

    const body = JSON.parse((fetchMock.mock.calls[0][1] as RequestInit).body as string);
    expect(body.turnstileToken).toBe("t".repeat(2048));
  });
});

describe("submitWaitlistInterest: what comes back", () => {
  beforeEach(stubBackendReady);

  it("reports success only when the backend confirms this exact signup", async () => {
    fetchMock.mockResolvedValue(jsonResponse([acceptedRow({ platform: "android" })]));

    const result = await submitWaitlistInterest({
      email: "ANA@example.com",
      platform: "android",
    });

    expect(result).toEqual({
      ok: true,
      mode: "backend",
      emailNormalized: "ana@example.com",
      platform: "android",
      status: "accepted",
    });
  });

  it("falls back to email when the server answers with an error status", async () => {
    fetchMock.mockResolvedValue(new Response("nope", { status: 500 }));
    const result = await submitWaitlistInterest({ email: "ana@example.com", platform: "ios" });
    expect(result).toMatchObject({ ok: false, mode: "email_fallback", reason: "request_failed" });
  });

  it("falls back to email when the answer is not JSON", async () => {
    fetchMock.mockResolvedValue(
      new Response("<html></html>", { status: 200, headers: { "content-type": "text/html" } }),
    );
    const result = await submitWaitlistInterest({ email: "ana@example.com", platform: "ios" });
    expect(result).toMatchObject({ ok: false, mode: "email_fallback", reason: "request_failed" });
  });

  it.each([
    ["an empty list", []],
    ["two rows", [acceptedRow(), acceptedRow()]],
    ["an object instead of a list", acceptedRow()],
    ["a different email", [acceptedRow({ email_normalized: "someone.else@example.com" })]],
    ["a status that is not accepted", [acceptedRow({ status: "pending" })]],
    ["an unknown platform", [acceptedRow({ platform: "blackberry" })]],
    ["a missing email", [{ platform: "ios", status: "accepted" }]],
  ])("does not claim success for %s", async (_label, payload) => {
    fetchMock.mockResolvedValue(jsonResponse(payload));
    const result = await submitWaitlistInterest({ email: "ana@example.com", platform: "ios" });
    expect(result).toMatchObject({ ok: false, mode: "email_fallback", reason: "request_failed" });
  });

  it("falls back to email instead of throwing when the network fails", async () => {
    fetchMock.mockRejectedValue(new TypeError("Failed to fetch"));
    const result = await submitWaitlistInterest({ email: "ana@example.com", platform: "ios" });
    expect(result).toMatchObject({ ok: false, mode: "email_fallback", reason: "request_failed" });
  });
});
