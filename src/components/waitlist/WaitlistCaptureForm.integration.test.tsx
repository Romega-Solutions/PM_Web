import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { httpsUrl } from "../../test/urls";
import { WaitlistCaptureForm } from "./WaitlistCaptureForm";

// The form against the REAL handoff code. Only the network and the
// environment are faked, so this proves the pieces fit together.

const SUPABASE_URL = httpsUrl("abcd1234.supabase.co");
const ANON_KEY = "public-anon-key-for-tests";

let fetchMock: ReturnType<typeof vi.fn>;

beforeEach(() => {
  for (const name of [
    "VITE_PINAYMATE_WAITLIST_BACKEND_ENABLED",
    "VITE_PINAYMATE_WAITLIST_BACKEND_PROOF_ACCEPTED",
    "VITE_PINAYMATE_WAITLIST_ABUSE_CONTROL_APPROVED",
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

async function joinAs(email: string) {
  const user = userEvent.setup();
  render(<WaitlistCaptureForm />);
  await user.type(screen.getByLabelText(/email for launch updates/i), email);
  await user.click(screen.getByRole("button", { name: "Join the waitlist" }));
}

describe("WaitlistCaptureForm with the real handoff", () => {
  it("with the backend switched off (the default), sends nothing and offers email", async () => {
    await joinAs("ana@example.com");

    expect(await screen.findByRole("alert")).toHaveTextContent(/use the email option/i);
    expect(screen.getByRole("link", { name: /continue ios waitlist request by email/i })).toBeVisible();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("with one safety flag still off, still sends nothing", async () => {
    vi.stubEnv("VITE_PINAYMATE_WAITLIST_BACKEND_ENABLED", "true");
    vi.stubEnv("VITE_PINAYMATE_WAITLIST_BACKEND_PROOF_ACCEPTED", "true");
    // the abuse-control approval is missing
    vi.stubEnv("VITE_SUPABASE_URL", SUPABASE_URL);
    vi.stubEnv("VITE_SUPABASE_ANON_KEY", ANON_KEY);

    await joinAs("ana@example.com");

    expect(await screen.findByRole("alert")).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("with everything approved, signs the person up and confirms it", async () => {
    vi.stubEnv("VITE_PINAYMATE_WAITLIST_BACKEND_ENABLED", "true");
    vi.stubEnv("VITE_PINAYMATE_WAITLIST_BACKEND_PROOF_ACCEPTED", "true");
    vi.stubEnv("VITE_PINAYMATE_WAITLIST_ABUSE_CONTROL_APPROVED", "true");
    vi.stubEnv("VITE_SUPABASE_URL", SUPABASE_URL);
    vi.stubEnv("VITE_SUPABASE_ANON_KEY", ANON_KEY);
    fetchMock.mockResolvedValue(
      new Response(
        JSON.stringify([{ email_normalized: "ana@example.com", platform: "ios", status: "accepted" }]),
        { status: 200, headers: { "content-type": "application/json" } },
      ),
    );

    await joinAs("Ana@Example.com");

    expect(await screen.findByRole("status")).toHaveTextContent("You're on the iOS waitlist.");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe(`${SUPABASE_URL}/functions/v1/waitlist-signup`);
    expect(init.headers).toMatchObject({ apikey: ANON_KEY });
    expect(JSON.parse(init.body as string)).toMatchObject({
      email: "ana@example.com",
      platform: "ios",
      source: "pm_web",
    });
  });

  it("with everything approved but the server down, falls back to email", async () => {
    vi.stubEnv("VITE_PINAYMATE_WAITLIST_BACKEND_ENABLED", "true");
    vi.stubEnv("VITE_PINAYMATE_WAITLIST_BACKEND_PROOF_ACCEPTED", "true");
    vi.stubEnv("VITE_PINAYMATE_WAITLIST_ABUSE_CONTROL_APPROVED", "true");
    vi.stubEnv("VITE_SUPABASE_URL", SUPABASE_URL);
    vi.stubEnv("VITE_SUPABASE_ANON_KEY", ANON_KEY);
    fetchMock.mockRejectedValue(new TypeError("Failed to fetch"));

    await joinAs("ana@example.com");

    expect(await screen.findByRole("alert")).toHaveTextContent(/use the email option/i);
    expect(screen.getByRole("link", { name: /by email/i })).toBeVisible();
  });
});
