import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { WaitlistBackendResult } from "../../lib/waitlistBackendHandoff";
import { WaitlistCaptureForm } from "./WaitlistCaptureForm";

// The form is tested on its own: the backend call is replaced with a mock
// that each test controls. WaitlistCaptureForm.integration.test.tsx runs the
// form against the real handoff code.
vi.mock("../../lib/waitlistBackendHandoff", () => ({
  submitWaitlistInterest: vi.fn(),
}));

import { submitWaitlistInterest } from "../../lib/waitlistBackendHandoff";

const submit = vi.mocked(submitWaitlistInterest);

const accepted: WaitlistBackendResult = {
  ok: true,
  mode: "backend",
  emailNormalized: "ana@example.com",
  platform: "ios",
  status: "accepted",
};
const emailFallback: WaitlistBackendResult = {
  ok: false,
  mode: "email_fallback",
  reason: "feature_flag_disabled",
  userMessage: "Use the email path to join the waitlist and choose your platform.",
};
const notSent: WaitlistBackendResult = {
  ok: false,
  mode: "not_sent",
  reason: "invalid_email",
  userMessage: "Enter a valid email address before joining the waitlist.",
};

const emailField = () => screen.getByLabelText(/email for launch updates/i);
const joinButton = () => screen.getByRole("button", { name: /join the waitlist|joining/i });

async function fillAndSubmit(user: ReturnType<typeof userEvent.setup>, email = "ana@example.com") {
  await user.type(emailField(), email);
  await user.click(joinButton());
}

beforeEach(() => {
  submit.mockReset();
});

describe("WaitlistCaptureForm: first view", () => {
  it("asks only for an email and a platform, with iOS selected", () => {
    render(<WaitlistCaptureForm />);

    expect(emailField()).toHaveAttribute("type", "email");
    expect(emailField()).toBeRequired();
    expect(screen.getByRole("radio", { name: /^ios/i })).toBeChecked();
    expect(screen.getByRole("radio", { name: /^android/i })).not.toBeChecked();
    expect(screen.getByRole("button", { name: "Join the waitlist" })).toBeEnabled();
  });

  it("shows the privacy notice in a polite status region, and no email option yet", () => {
    render(<WaitlistCaptureForm />);

    expect(screen.getByRole("status")).toHaveTextContent(/do not send passwords, payment details/i);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /by email/i })).not.toBeInTheDocument();
  });

  it("does not call the backend when the email is empty", async () => {
    const user = userEvent.setup();
    render(<WaitlistCaptureForm />);

    await user.click(joinButton());

    expect(submit).not.toHaveBeenCalled();
  });
});

describe("WaitlistCaptureForm: what it sends", () => {
  it("sends the email, the default iOS platform and an empty honeypot", async () => {
    submit.mockResolvedValue(accepted);
    const user = userEvent.setup();
    render(<WaitlistCaptureForm />);

    await fillAndSubmit(user);

    expect(submit).toHaveBeenCalledTimes(1);
    expect(submit).toHaveBeenCalledWith({
      email: "ana@example.com",
      platform: "ios",
      source: "pm_web",
      website: "",
    });
  });

  it("sends the platform that was chosen", async () => {
    submit.mockResolvedValue(accepted);
    const user = userEvent.setup();
    render(<WaitlistCaptureForm />);

    await user.click(screen.getByRole("radio", { name: /^android/i }));
    await fillAndSubmit(user);

    expect(submit).toHaveBeenCalledWith(expect.objectContaining({ platform: "android" }));
  });

  it("passes on whatever a bot typed into the hidden honeypot field", async () => {
    submit.mockResolvedValue(notSent);
    const user = userEvent.setup();
    const { container } = render(<WaitlistCaptureForm />);

    const honeypot = container.querySelector<HTMLInputElement>("#waitlist-website");
    expect(honeypot).not.toBeNull();
    // Hidden from people: out of the tab order and from assistive technology.
    expect(honeypot).toHaveAttribute("tabindex", "-1");
    expect(honeypot).toHaveAttribute("aria-hidden", "true");

    await user.type(honeypot!, "bot-filled-this-in");
    await fillAndSubmit(user);

    expect(submit).toHaveBeenCalledWith(expect.objectContaining({ website: "bot-filled-this-in" }));
  });
});

describe("WaitlistCaptureForm: while it is sending", () => {
  it("disables the button and shows progress until the answer arrives", async () => {
    let resolveSubmit: (result: WaitlistBackendResult) => void = () => {};
    submit.mockReturnValue(
      new Promise<WaitlistBackendResult>((resolve) => {
        resolveSubmit = resolve;
      }),
    );
    const user = userEvent.setup();
    render(<WaitlistCaptureForm />);

    await fillAndSubmit(user);

    const busyButton = screen.getByRole("button", { name: "Joining..." });
    expect(busyButton).toBeDisabled();
    expect(busyButton).toHaveAttribute("aria-busy", "true");
    expect(screen.getByRole("status")).toHaveTextContent("Submitting your waitlist request.");

    resolveSubmit(accepted);

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Join the waitlist" })).toBeEnabled(),
    );
  });
});

describe("WaitlistCaptureForm: the answer", () => {
  it("confirms success for the chosen platform, as a status and not an alert", async () => {
    submit.mockResolvedValue(accepted);
    const user = userEvent.setup();
    render(<WaitlistCaptureForm />);

    await fillAndSubmit(user);

    expect(await screen.findByRole("status")).toHaveTextContent(
      "You're on the iOS waitlist. We will send launch access and safety updates only.",
    );
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /by email/i })).not.toBeInTheDocument();
  });

  it("names Android in the confirmation when Android was chosen", async () => {
    submit.mockResolvedValue({ ...accepted, platform: "android" });
    const user = userEvent.setup();
    render(<WaitlistCaptureForm />);

    await user.click(screen.getByRole("radio", { name: /^android/i }));
    await fillAndSubmit(user);

    expect(await screen.findByRole("status")).toHaveTextContent("You're on the Android waitlist.");
  });

  it("offers a prefilled email when the signup path is switched off", async () => {
    submit.mockResolvedValue(emailFallback);
    const user = userEvent.setup();
    render(<WaitlistCaptureForm />);

    await user.click(screen.getByRole("radio", { name: /^android/i }));
    await fillAndSubmit(user, "ana@example.com");

    expect(await screen.findByRole("alert")).toHaveTextContent(/use the email option to join/i);

    const link = screen.getByRole("link", {
      name: "Continue Android waitlist request by email",
    });
    const href = link.getAttribute("href") ?? "";
    expect(href.startsWith("mailto:support@pinaymate.com?")).toBe(true);

    const query = new URLSearchParams(href.slice(href.indexOf("?") + 1));
    expect(query.get("subject")).toBe("PinayMate Android waitlist");
    expect(query.get("body")).toContain("I'd like to join the Android waitlist.");
    expect(query.get("body")).toContain("My preferred waitlist email: ana@example.com");
  });

  it("shows the problem, with no email option, when the request was not sent", async () => {
    submit.mockResolvedValue(notSent);
    const user = userEvent.setup();
    render(<WaitlistCaptureForm />);

    await fillAndSubmit(user, "ana@example.com");

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Enter a valid email address before joining the waitlist.",
    );
    expect(screen.queryByRole("link", { name: /by email/i })).not.toBeInTheDocument();
  });
});

describe("WaitlistCaptureForm: after an answer", () => {
  it("clears the answer when the email is edited", async () => {
    submit.mockResolvedValue(emailFallback);
    const user = userEvent.setup();
    render(<WaitlistCaptureForm />);

    await fillAndSubmit(user);
    expect(await screen.findByRole("alert")).toBeInTheDocument();

    await user.type(emailField(), "x");

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /by email/i })).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(/do not send passwords/i);
  });

  it("clears the answer when the platform is changed", async () => {
    submit.mockResolvedValue(accepted);
    const user = userEvent.setup();
    render(<WaitlistCaptureForm />);

    await fillAndSubmit(user);
    expect(await screen.findByRole("status")).toHaveTextContent(/you're on the ios waitlist/i);

    await user.click(screen.getByRole("radio", { name: /^android/i }));

    expect(screen.getByRole("status")).not.toHaveTextContent(/you're on the/i);
  });
});
