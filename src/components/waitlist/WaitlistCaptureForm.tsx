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
  bars: string[];
}> = [
  {
    value: "ios",
    label: "iOS",
    emailLabel: "iOS",
    helper: "Best if you use iPhone or iPad.",
    bars: ["w-4/5", "w-2/3", "w-1/2"],
  },
  {
    value: "android",
    label: "Android",
    emailLabel: "Android",
    helper: "Best if you use an Android phone.",
    bars: ["w-3/4", "w-5/6", "w-1/2"],
  },
];

const formPromise = [
  {
    label: "Access",
    detail: "Launch access updates",
  },
  {
    label: "Safety",
    detail: "Safety tips before you join",
  },
  {
    label: "Timing",
    detail: "Platform-specific timing",
  },
];

const privacyPromise = [
  {
    label: "Email",
    detail: "Email only",
  },
  {
    label: "No pass",
    detail: "No password",
  },
  {
    label: "No payment",
    detail: "No payment details",
  },
];

const waitlistBoundaries = [
  {
    label: "Waitlist",
    detail: "Waitlist only",
  },
  {
    label: "No acct",
    detail: "No account created here",
  },
  {
    label: "No profile",
    detail: "No profile answers",
  },
];

const waitlistExclusions = [
  {
    label: "No photos",
    detail: "No photos",
  },
  {
    label: "No ID",
    detail: "No ID",
  },
  {
    label: "No pay",
    detail: "No payment",
  },
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
    ? "Submitting..."
    : message || "Email + platform only.";

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
      className="mt-8 overflow-hidden border-y border-[#f0b6df]/16 bg-[#1a0d27]/54 backdrop-blur"
      aria-describedby="waitlist-form-boundary waitlist-form-status"
    >
      <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ef3e78] text-white shadow-lg shadow-[#ef3e78]/25">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-dm-sans-bold text-[#f3c7de]">
              Waitlist
              <span className="sr-only">. Private waitlist</span>
            </p>
            <p className="mt-1 font-dm-sans-bold text-white">
              Access signal
              <span className="sr-only">
                . Platform access signal. Get notified when your platform
                opens.
              </span>
            </p>
            <p
              id="waitlist-form-boundary"
              className="mt-3 grid grid-cols-3 border-y border-[#f0b6df]/12 py-2 text-xs font-dm-sans-bold text-[#f6d0f1]"
            >
              <span className="border-l border-[#f0b6df]/12 px-2 py-1 text-center first:border-l-0">
                Email
              </span>
              <span className="border-l border-[#f0b6df]/12 px-2 py-1 text-center first:border-l-0">
                Platform
              </span>
              <span className="border-l border-[#f0b6df]/12 px-2 py-1 text-center first:border-l-0">
                Updates
              </span>
              <span className="sr-only">
                Share your email, choose your phone, and receive only the
                launch updates that matter before the app opens.
              </span>
            </p>
            <div
              className="mt-4 grid grid-cols-3 border-y border-[#f0b6df]/12 py-3"
              aria-label="What the waitlist includes"
            >
              {formPromise.map((item) => (
                <span
                  key={item.label}
                  className="min-h-14 border-l border-[#f0b6df]/12 px-2 text-center text-xs font-dm-sans-bold text-[#f3c7de] first:border-l-0"
                >
                  <CheckCircle2
                    className="mx-auto h-4 w-4 text-[#49d49a]"
                    aria-hidden="true"
                  />
                  <span className="mt-2 block">{item.label}</span>
                  <span className="sr-only">: {item.detail}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-y border-[#f0b6df]/14 bg-gradient-to-br from-[#2e1e5a]/42 via-[#ef3e78]/10 to-transparent py-4 lg:border-l lg:border-y-0 lg:px-4">
          <div className="inline-flex min-h-11 items-center gap-2 self-start border-l-2 border-[#f0b6df]/22 px-4 py-1 text-sm font-dm-sans-bold text-[#ffe8f1]">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            <span>
              1 minute
              <span className="sr-only">. Less than 1 minute</span>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2" aria-hidden="true">
            <span className="h-12 rounded-lg bg-[#ef3e78]/24" />
            <span className="h-12 rounded-lg bg-[#8d69f6]/24" />
            <span className="h-12 rounded-lg bg-[#5c83e9]/20" />
          </div>
          <div className="grid grid-cols-3 border-y border-[#f0b6df]/12 py-3 lg:grid-cols-1 lg:border-y-0 lg:py-0">
            {waitlistBoundaries.map((item) => (
              <div
                key={item.label}
                className="border-l border-[#f0b6df]/12 px-2 py-1 text-center text-xs font-dm-sans-bold text-[#eadff7] first:border-l-0 lg:border-l-0 lg:border-t lg:first:border-t-0"
              >
                <ShieldCheck
                  className="mx-auto h-4 w-4 shrink-0 text-[#f0b6df]"
                  aria-hidden="true"
                />
                <span className="mt-2 block">
                  {item.label}
                  <span className="sr-only">: {item.detail}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-3 border-y border-[#f0b6df]/12 bg-[#120a1b]/58 px-5 py-3 sm:px-6"
        aria-label="Sensitive details not needed for the waitlist"
      >
        {privacyPromise.map((item) => (
          <span
            key={item.label}
            className="min-h-12 border-l border-[#f0b6df]/12 px-2 py-1 text-center text-[0.68rem] font-dm-sans-bold text-[#f3c7de] first:border-l-0"
          >
            <ShieldCheck
              className="mx-auto h-3.5 w-3.5 text-[#f0b6df]"
              aria-hidden="true"
            />
            <span className="mt-1.5 block">{item.label}</span>
            <span className="sr-only">. {item.detail}</span>
          </span>
        ))}
      </div>

      <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[1fr_0.72fr]">
        <label className="grid gap-2">
          <span className="text-sm font-dm-sans-bold text-[#f3c7de]">
            Email <span aria-hidden="true">*</span>
            <span className="sr-only"> for launch updates</span>
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
            className="min-h-12 rounded-lg border border-[#f0b6df]/16 bg-[#120a1b]/80 px-4 py-3 text-base text-white outline-none transition placeholder:text-[#9c89b3] hover:border-[#f0b6df]/34 focus:border-[#f0b6df] focus:ring-2 focus:ring-[#f0b6df]/25"
          />
          <span
            id="waitlist-email-helper"
            className="text-xs font-dm-sans-bold text-[#cbbade]"
          >
            Inbox
            <span className="sr-only">
              . Launch updates inbox. Use the inbox where you want launch
              access and safety updates.
            </span>
          </span>
        </label>

        <fieldset className="grid gap-2">
          <legend className="text-sm font-dm-sans-bold text-[#f3c7de]">
            Phone
            <span className="sr-only">. Platform</span>
          </legend>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
            {platformOptions.map((option) => {
              const isSelected = option.value === platform;

              return (
                <label
                  key={option.value}
                  className={`flex min-h-16 cursor-pointer items-start gap-2 border-l-2 px-3 py-3 text-left text-sm transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-[#91b1ff] sm:gap-3 ${
                    isSelected
                      ? "border-[#f0b6df] bg-[#ef3e78]/14 text-white"
                      : "border-[#f0b6df]/14 bg-[#120a1b]/48 text-[#eadff7] hover:border-[#f0b6df]/50 hover:bg-[#2e1e5a]/42"
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
                    <span className="mt-2 grid gap-1" aria-hidden="true">
                      {option.bars.map((bar, index) => (
                        <span
                          key={`${option.value}-${index}`}
                          className={`block h-1.5 rounded-lg bg-[#f0b6df]/24 ${bar}`}
                        />
                      ))}
                    </span>
                    <span className="sr-only">
                      {isSelected ? "Selected" : "Available"}. {option.helper}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
          <p className="sr-only">
            Selected: {selectedPlatform.emailLabel}
            . You can update your platform preference when app access opens.
          </p>
        </fieldset>
      </div>

      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
        <div className="grid grid-cols-3 border-y border-[#f0b6df]/12 py-3">
          {waitlistExclusions.map((item) => (
            <span
              key={item.label}
              className="min-h-12 border-l border-[#f0b6df]/12 px-2 py-1 text-center text-[0.68rem] font-dm-sans-bold text-[#f3c7de] first:border-l-0"
            >
              <CheckCircle2
                className="mx-auto h-3.5 w-3.5 text-[#49d49a]"
                aria-hidden="true"
              />
              <span className="mt-1.5 block">{item.label}</span>
              <span className="sr-only">. {item.detail}</span>
            </span>
          ))}
        </div>
        <p className="sr-only">
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
          className="inline-flex min-h-12 flex-1 touch-manipulation items-center justify-center gap-2 rounded-lg bg-[#ef3e78] px-5 py-3 font-dm-sans-bold text-white shadow-xl shadow-[#F4376D]/25 transition hover:bg-[#d7346b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff] active:bg-[#b31460] disabled:cursor-wait disabled:opacity-70 sm:flex-none"
        >
          {isSubmitting ? (
            <LoaderCircle
              className="h-5 w-5 animate-spin motion-reduce:animate-none"
              aria-hidden="true"
            />
          ) : (
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          )}
          {isSubmitting ? (
            "Joining..."
          ) : (
            <>
              Join waitlist
              <span className="sr-only">. Join the waitlist</span>
            </>
          )}
        </button>

        {shouldShowEmailFallback ? (
          <a
            href={emailHref}
            aria-label={`Continue ${selectedPlatform.emailLabel} waitlist request by email`}
            className="inline-flex min-h-12 flex-1 touch-manipulation items-center justify-center gap-2 rounded-lg border border-[#f0b6df]/22 bg-[#2e1e5a]/32 px-5 py-3 font-dm-sans-bold text-white transition hover:border-[#f0b6df] hover:bg-[#3b2255]/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff] active:bg-[#2e1e5a] sm:flex-none"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            Email
            <span className="sr-only">. Continue by email</span>
          </a>
        ) : null}
      </div>

      {shouldShowEmailFallback ? (
        <p className="px-5 pb-3 text-sm font-dm-sans-bold text-[#f6d0f1] sm:px-6">
          Same platform preference
          <span className="sr-only">
            Email keeps the waitlist open with the same platform preference.
          </span>
        </p>
      ) : null}

      <div
        id="waitlist-form-status"
        className={`mx-5 mb-5 border-y sm:mx-6 sm:mb-6 ${
          !isSubmitting && !result
            ? "inline-flex items-center gap-2 px-3 py-2 text-xs font-dm-sans-bold"
            : "flex items-start gap-2 p-3 text-sm leading-6"
        } ${
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
        <span>
          {!isSubmitting && !result ? (
            <>
              Ready
              <span className="sr-only">. {statusMessage}</span>
            </>
          ) : (
            statusMessage
          )}
        </span>
        {!isSubmitting && !result ? (
          <span className="sr-only">
            Private waitlist capture only asks for your email and platform
            preference. Do not send passwords, payment details, ID documents,
            precise location, or private profile information in this form.
          </span>
        ) : null}
      </div>
    </form>
  );
}
