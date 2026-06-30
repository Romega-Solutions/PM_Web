import { type FormEvent, useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  LoaderCircle,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { buildWaitlistEmailHref } from "../../lib/launchEmailLinks";
import {
  submitWaitlistInterest,
  type WaitlistBackendResult,
  type WaitlistPlatform,
} from "../../lib/waitlistBackendHandoff";

type LaunchPlatform = "ios" | "android";

const platformOptions: Array<{
  value: LaunchPlatform;
  label: string;
  emailLabel: "iOS" | "Android";
  helper: string;
}> = [
  {
    value: "ios",
    label: "iOS",
    emailLabel: "iOS",
    helper: "Best if you use iPhone or iPad.",
  },
  {
    value: "android",
    label: "Android",
    emailLabel: "Android",
    helper: "Best if you use an Android phone.",
  },
];

const formPromise = [
  "Launch access updates",
  "Safety tips before you join",
  "Platform-specific timing",
];

const privacyPromise = [
  "Email only",
  "No password",
  "No payment details",
];

const waitlistBoundaries = [
  "Waitlist only",
  "No account created here",
  "No profile answers",
];

function getUserMessage(
  result: WaitlistBackendResult | null,
  platformLabel: "iOS" | "Android",
) {
  if (!result) {
    return "";
  }

  if (result.ok) {
    return `You're on the ${platformLabel} waitlist. We will send launch access and safety updates only.`;
  }

  if (result.mode === "email_fallback") {
    return "Use the email option to join with your platform preference. We will keep the request email-only.";
  }

  return `${result.userMessage} Check the email address and try again, or use the email path if it appears.`;
}

export function WaitlistCaptureForm() {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<LaunchPlatform>("ios");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<WaitlistBackendResult | null>(null);
  const [website, setWebsite] = useState("");

  const selectedPlatform = useMemo(
    () => platformOptions.find((option) => option.value === platform) ?? platformOptions[0],
    [platform],
  );
  const emailHref = buildWaitlistEmailHref(selectedPlatform.emailLabel, email);
  const message = getUserMessage(result, selectedPlatform.emailLabel);
  const shouldShowEmailFallback = result?.ok === false && result.mode === "email_fallback";
  const statusMessage = isSubmitting
    ? "Submitting your waitlist request."
    : message ||
      "Private waitlist capture only asks for your email and platform preference. Do not send passwords, payment details, ID documents, precise location, or private profile information in this form.";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const nextResult = await submitWaitlistInterest({
      email,
      platform: platform as WaitlistPlatform,
      source: "pm_web",
      website,
    });

    setResult(nextResult);
    setIsSubmitting(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 overflow-hidden rounded-[2rem] border border-white/15 bg-[#1a0d27]/82 shadow-2xl shadow-black/25 backdrop-blur"
      aria-describedby="waitlist-form-boundary waitlist-form-status"
    >
      <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ef3e78] text-white shadow-lg shadow-[#ef3e78]/25">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-dm-sans-bold uppercase text-[#f3c7de]">
              Private waitlist
            </p>
            <p className="mt-1 font-dm-sans-bold text-white">
              Get notified when your platform opens
            </p>
            <p
              id="waitlist-form-boundary"
              className="mt-1 max-w-2xl text-sm leading-6 text-[#d7c7ed]"
            >
              Share your email, choose your phone, and receive only the launch
              updates that matter before the app opens.
            </p>
            <div
              className="mt-4 flex flex-wrap gap-2"
              aria-label="What the waitlist includes"
            >
              {formPromise.map((item) => (
                <span
                  key={item}
                  className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#f0b6df]/14 bg-[#2e1e5a]/45 px-3 py-1.5 text-xs font-dm-sans-bold uppercase tracking-[0.14em] text-[#f3c7de]"
                >
                  <CheckCircle2
                    className="h-4 w-4 text-[#49d49a]"
                    aria-hidden="true"
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-[1.5rem] bg-gradient-to-br from-[#2e1e5a]/70 via-[#ef3e78]/12 to-transparent p-4">
          <div className="inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-[#f0b6df]/25 bg-[#2e1e5a]/55 px-4 py-2 text-sm font-dm-sans-bold text-[#ffe8f1]">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            <span>Less than 1 minute</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {waitlistBoundaries.map((item) => (
              <div
                key={item}
                className="flex min-h-10 items-center gap-2 text-sm leading-5 text-[#eadff7]"
              >
                <ShieldCheck
                  className="h-4 w-4 shrink-0 text-[#f0b6df]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="flex flex-wrap gap-2 border-y border-white/10 bg-[#120a1b]/45 px-5 py-3 sm:px-6"
        aria-label="Sensitive details not needed for the waitlist"
      >
        {privacyPromise.map((item) => (
          <span
            key={item}
            className="inline-flex min-h-9 items-center rounded-full border border-white/10 bg-[#120a1b]/65 px-3 py-1.5 text-xs font-dm-sans-bold uppercase tracking-[0.14em] text-[#f3c7de]"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[1fr_0.72fr]">
        <label className="grid gap-2">
          <span className="text-sm font-dm-sans-bold text-[#f3c7de]">
            Email for launch updates <span aria-hidden="true">*</span>
          </span>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (result) {
                setResult(null);
              }
            }}
            placeholder="you@example.com"
            autoComplete="email"
            aria-describedby="waitlist-email-helper waitlist-form-status"
            required
            className="min-h-12 rounded-2xl border border-white/14 bg-[#120a1b]/80 px-4 py-3 text-base text-white outline-none transition placeholder:text-[#9c89b3] hover:border-white/25 focus:border-[#f0b6df] focus:ring-2 focus:ring-[#f0b6df]/25"
          />
          <span
            id="waitlist-email-helper"
            className="text-xs leading-5 text-[#cbbade]"
          >
            Use the inbox where you want launch access and safety updates.
          </span>
        </label>

        <fieldset className="grid gap-2">
          <legend className="text-sm font-dm-sans-bold text-[#f3c7de]">
            Platform
          </legend>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {platformOptions.map((option) => {
              const isSelected = option.value === platform;

              return (
                <label
                  key={option.value}
                  className={`flex min-h-16 cursor-pointer items-start gap-3 rounded-2xl border px-3 py-3 text-left text-sm transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-[#91b1ff] ${
                    isSelected
                      ? "border-[#f0b6df] bg-[#ef3e78]/18 text-white shadow-lg shadow-[#ef3e78]/15"
                      : "border-white/12 bg-[#120a1b]/80 text-[#eadff7] hover:border-[#f0b6df]/50 hover:bg-[#2e1e5a]/65"
                  }`}
                >
                  <input
                    type="radio"
                    name="waitlist-platform"
                    value={option.value}
                    checked={isSelected}
                    onChange={() => {
                      setPlatform(option.value);
                      if (result) {
                        setResult(null);
                      }
                    }}
                    className="sr-only"
                  />
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                      isSelected
                        ? "border-[#f0b6df] bg-[#ef3e78]"
                        : "border-[#f0b6df]/55"
                    }`}
                    aria-hidden="true"
                  >
                    {isSelected ? (
                      <span className="h-2 w-2 rounded-full bg-[#ffe8f1]" />
                    ) : null}
                  </span>
                  <span>
                    <span className="font-dm-sans-bold">{option.label}</span>
                    <span
                      className={`mt-1 block text-xs leading-4 ${
                        isSelected ? "text-[#f6d0f1]" : "text-[#cbbade]"
                      }`}
                    >
                      {option.helper}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
          <p className="text-xs leading-5 text-[#cbbade]">
            Selected: {selectedPlatform.emailLabel}. You can update your
            platform preference when app access opens.
          </p>
        </fieldset>
      </div>

      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
        <p className="text-sm leading-6 text-[#d7c7ed]">
          We will not ask for photos, ID, payment, exact location, or dating
          profile answers from this website waitlist.
        </p>
      </div>

      <label className="sr-only" htmlFor="waitlist-website">
        Leave this field blank
      </label>
      <input
        id="waitlist-website"
        type="text"
        name="website"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:px-6">
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="inline-flex min-h-12 flex-1 touch-manipulation items-center justify-center gap-2 rounded-2xl bg-[#ef3e78] px-5 py-3 font-dm-sans-bold text-white shadow-2xl shadow-[#F4376D]/25 transition hover:bg-[#d7346b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff] active:bg-[#b31460] disabled:cursor-wait disabled:opacity-70 sm:flex-none"
        >
          {isSubmitting ? (
            <LoaderCircle
              className="h-5 w-5 animate-spin motion-reduce:animate-none"
              aria-hidden="true"
            />
          ) : (
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          )}
          {isSubmitting ? "Joining..." : "Join the waitlist"}
        </button>

        {shouldShowEmailFallback ? (
          <a
            href={emailHref}
            aria-label={`Continue ${selectedPlatform.emailLabel} waitlist request by email`}
            className="inline-flex min-h-12 flex-1 touch-manipulation items-center justify-center gap-2 rounded-2xl border border-[#f0b6df]/22 bg-[#2e1e5a]/55 px-5 py-3 font-dm-sans-bold text-white transition hover:border-[#f0b6df] hover:bg-[#3b2255]/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff] active:bg-[#2e1e5a] sm:flex-none"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            Continue by email
          </a>
        ) : null}
      </div>

      {shouldShowEmailFallback ? (
        <p className="px-5 pb-3 text-sm leading-6 text-[#d7c7ed] sm:px-6">
          Email keeps the waitlist open with the same platform preference.
        </p>
      ) : null}

      <div
        id="waitlist-form-status"
        className={`mx-5 mb-5 flex items-start gap-2 rounded-2xl border p-3 text-sm leading-6 sm:mx-6 sm:mb-6 ${
          result?.ok
            ? "border-[#49d49a]/30 bg-[#22a574]/12 text-[#d9ffe6]"
            : result
              ? "border-[#f7a4c8]/35 bg-[#ef3e78]/12 text-[#ffe8f1]"
              : "border-[#f0b6df]/14 bg-[#2e1e5a]/45 text-[#eadff7]"
        }`}
        role={result?.ok === false ? "alert" : "status"}
        aria-live={result?.ok === false ? "assertive" : "polite"}
      >
        {isSubmitting ? (
          <LoaderCircle
            className="mt-0.5 h-4 w-4 shrink-0 animate-spin text-[#f7a4c8] motion-reduce:animate-none"
            aria-hidden="true"
          />
        ) : result?.ok === false ? (
          <AlertCircle
            className="mt-0.5 h-4 w-4 shrink-0 text-[#f7a4c8]"
            aria-hidden="true"
          />
        ) : result?.ok ? (
          <CheckCircle2
            className="mt-0.5 h-4 w-4 shrink-0 text-[#49d49a]"
            aria-hidden="true"
          />
        ) : (
          <ShieldCheck
            className="mt-0.5 h-4 w-4 shrink-0 text-[#49d49a]"
            aria-hidden="true"
          />
        )}
        <span>{statusMessage}</span>
      </div>
    </form>
  );
}
