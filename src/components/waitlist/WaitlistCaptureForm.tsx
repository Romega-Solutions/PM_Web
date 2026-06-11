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
  "Launch timing updates",
  "Platform-specific access news",
  "Safety setup guidance when ready",
];

const privacyPromise = [
  "Email only",
  "No password",
  "No payment details",
];

const managerReadySignals = [
  "Launch-stage only",
  "Safety-first updates",
  "No account created here",
];

function getUserMessage(
  result: WaitlistBackendResult | null,
  platformLabel: "iOS" | "Android",
) {
  if (!result) {
    return "";
  }

  if (result.ok) {
    return `Your launch-interest request was received. You're on the ${platformLabel} launch list. We will send launch, access, and safety updates only. This does not create an app account, dating profile, match, checkout, or payment record.`;
  }

  if (result.mode === "email_fallback") {
    return "Backend capture is still gated by launch proof, so the approved email path is available below. Your waitlist request still stays platform-specific.";
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
    ? "Checking the approved waitlist path for this launch stage."
    : message ||
      "Private launch capture only asks for your email and platform preference. Do not send passwords, payment details, ID documents, precise location, or private profile information in this form.";

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
      className="mt-8 rounded-lg border border-white/15 bg-[#1a0d27]/80 p-4 shadow-2xl shadow-black/25 backdrop-blur sm:p-5"
      aria-describedby="waitlist-form-boundary waitlist-form-status"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ef3e78] text-white shadow-lg shadow-[#ef3e78]/25">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-dm-sans-bold uppercase text-[#f3c7de]">
              Private launch list
            </p>
            <p className="mt-1 font-dm-sans-bold text-white">
              Get notified when your platform opens
            </p>
            <p
              id="waitlist-form-boundary"
              className="mt-1 max-w-2xl text-sm leading-6 text-[#d7c7ed]"
            >
              Enter your email once, choose the phone you actually use, and we
              will route you through the safest approved waitlist path.
            </p>
          </div>
        </div>

        <div className="inline-flex min-h-11 items-center gap-2 self-start rounded-lg border border-[#f0b6df]/25 bg-[#fff7fb]/10 px-3 py-2 text-sm font-dm-sans-bold text-[#ffe8f1]">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
          <span>Less than 1 minute</span>
        </div>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_0.78fr]">
        <section className="rounded-lg border border-white/10 bg-[#120a1b]/55 p-3">
          <p className="text-sm font-dm-sans-bold text-[#f8f5ff]">
            What you will get
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {formPromise.map((item) => (
              <li
                key={item}
                className="flex min-h-11 items-start gap-2 rounded-lg bg-white/[0.06] px-3 py-2 text-sm leading-5 text-[#eadff7]"
              >
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#49d49a]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-[#f0b6df]/20 bg-[#fff7fb]/10 p-3">
          <p className="text-sm font-dm-sans-bold text-[#f8f5ff]">
            Trust boundary
          </p>
          <ul className="mt-3 grid gap-2">
            {managerReadySignals.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-5 text-[#eadff7]"
              >
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#f0b6df]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div
        className="mt-3 flex flex-wrap gap-2"
        aria-label="Sensitive details not needed for the waitlist"
      >
        {privacyPromise.map((item) => (
          <span
            key={item}
            className="inline-flex min-h-9 items-center rounded-lg border border-white/10 bg-[#120a1b]/65 px-3 py-1.5 text-xs font-dm-sans-bold uppercase text-[#f3c7de]"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-[#f0b6df]/15 bg-[#120a1b]/45 px-3 py-2 text-sm leading-6 text-[#d7c7ed]">
        Backend capture is used only after release proof is accepted. Until
        then, the approved email fallback stays available. We will not ask for
        photos, ID, payment, exact location, or dating profile answers from
        this website waitlist.
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

      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.72fr]">
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
            className="min-h-12 rounded-lg border border-white/14 bg-[#120a1b]/80 px-4 py-3 text-base text-white outline-none transition placeholder:text-[#9c89b3] hover:border-white/25 focus:border-[#f0b6df] focus:ring-2 focus:ring-[#f0b6df]/25"
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
                  className={`flex min-h-16 cursor-pointer items-start gap-3 rounded-lg border px-3 py-3 text-left text-sm transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-[#91b1ff] ${
                    isSelected
                      ? "border-[#f0b6df] bg-[#fff7fb] text-[#21132f] shadow-lg shadow-[#ef3e78]/15"
                      : "border-white/12 bg-[#120a1b]/80 text-[#eadff7] hover:border-[#f0b6df]/50 hover:bg-white/[0.08]"
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
                        ? "border-[#21132f] bg-[#21132f]"
                        : "border-[#f0b6df]/55"
                    }`}
                    aria-hidden="true"
                  >
                    {isSelected ? (
                      <span className="h-2 w-2 rounded-full bg-white" />
                    ) : null}
                  </span>
                  <span>
                    <span className="font-dm-sans-bold">{option.label}</span>
                    <span
                      className={`mt-1 block text-xs leading-4 ${
                        isSelected ? "text-[#5f536d]" : "text-[#cbbade]"
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

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="inline-flex min-h-12 flex-1 touch-manipulation items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-dm-sans-bold text-[#21132f] shadow-2xl shadow-[#F4376D]/25 transition hover:bg-[#fff4fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff] active:bg-[#ffe6f3] disabled:cursor-wait disabled:opacity-70 sm:flex-none"
        >
          {isSubmitting ? (
            <LoaderCircle
              className="h-5 w-5 animate-spin motion-reduce:animate-none"
              aria-hidden="true"
            />
          ) : (
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          )}
          {isSubmitting ? "Checking launch path..." : "Join the private launch list"}
        </button>

        {shouldShowEmailFallback ? (
          <a
            href={emailHref}
            aria-label={`Continue ${selectedPlatform.emailLabel} waitlist request by email`}
            className="inline-flex min-h-12 flex-1 touch-manipulation items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/8 px-5 py-3 font-dm-sans-bold text-white transition hover:border-[#f0b6df] hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff] active:bg-white/15 sm:flex-none"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            Continue by email
          </a>
        ) : null}
      </div>

      {shouldShowEmailFallback ? (
        <p className="mt-3 text-sm leading-6 text-[#d7c7ed]">
          Email fallback keeps the launch waitlist usable while backend capture
          remains gated by release proof.
        </p>
      ) : null}

      <div
        id="waitlist-form-status"
        className={`mt-4 flex items-start gap-2 rounded-lg border p-3 text-sm leading-6 ${
          result?.ok
            ? "border-[#49d49a]/30 bg-[#22a574]/12 text-[#d9ffe6]"
            : result
              ? "border-[#f7a4c8]/35 bg-[#ef3e78]/12 text-[#ffe8f1]"
              : "border-white/10 bg-white/[0.05] text-[#eadff7]"
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
