import {
  type FormEvent,
  type ReactNode,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  IconAlertCircle,
  IconCircleCheck,
  IconDeviceMobile,
  IconHeart,
  IconLoader2,
  IconMail,
  IconShieldCheck,
} from "@tabler/icons-react";
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

const waitlistBoundaries = [
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

export function WaitlistCaptureForm({ details }: { details?: ReactNode } = {}) {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<LaunchPlatform>("ios");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<WaitlistBackendResult | null>(null);
  const [website, setWebsite] = useState("");
  const [hasChosen, setHasChosen] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

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

  function choosePlatform(value: LaunchPlatform) {
    setPlatform(value);
    setHasChosen(true);
    // The email panel is unhidden on the next render; move focus there.
    window.requestAnimationFrame(() => emailInputRef.current?.focus());
    if (result) {
      setResult(null);
    }
  }

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
      className="mt-7"
      aria-describedby="waitlist-form-boundary waitlist-form-status"
    >
      <p id="waitlist-form-boundary" className="sr-only">
        Private waitlist. Share your email, choose your phone, and receive only
        the launch updates that matter before the app opens.
      </p>

      <div className="grid grid-cols-2 gap-3" role="group" aria-label="Choose your platform">
        {platformOptions.map((option, index) => {
          const isSelected = hasChosen && option.value === platform;
          const looksPrimary = hasChosen ? isSelected : index === 0;

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isSelected}
              aria-expanded={hasChosen}
              aria-controls="waitlist-email-panel"
              onClick={() => choosePlatform(option.value)}
              className={`pm-btn min-h-[52px] w-full px-3 text-[15px] whitespace-nowrap focus-visible:outline-3 sm:px-6 sm:text-base ${
                looksPrimary ? "pm-btn-primary" : "pm-btn-outline"
              }`}
            >
              <IconDeviceMobile size={18} stroke={1.75} aria-hidden="true" />
              {option.label} waitlist
              <span className="sr-only">. {option.helper}</span>
            </button>
          );
        })}
      </div>

      <div
        id="waitlist-email-panel"
        hidden={!hasChosen}
        className="pm-reveal-panel mt-4"
      >
        <p className="text-sm text-mauve" aria-live="polite">
          Selected: {selectedPlatform.emailLabel}. You can update your
          platform preference when app access opens.
        </p>

        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <label className="min-w-0 flex-1">
            <span className="sr-only">Email for launch updates</span>
            <input
              ref={emailInputRef}
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
              placeholder="Your email for launch updates"
              autoComplete="email"
              aria-describedby="waitlist-email-helper waitlist-form-status"
              required
              className="h-[52px] w-full rounded-full border-[1.5px] border-[#c9aec3] bg-white px-5 text-[17px] text-plum transition-colors duration-200 placeholder:text-[#8f7590] hover:border-rosas focus-visible:border-luna"
            />
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="pm-btn pm-btn-primary min-h-[52px] focus-visible:outline-3 disabled:cursor-wait disabled:opacity-70"
          >
            {isSubmitting ? (
              <IconLoader2
                size={20}
                className="animate-spin motion-reduce:animate-none"
                aria-hidden="true"
              />
            ) : (
              <IconHeart size={19} stroke={1.75} aria-hidden="true" />
            )}
            {isSubmitting ? "Joining..." : "Join the waitlist"}
          </button>
        </div>

        <p id="waitlist-email-helper" className="mt-2 text-[13px] leading-5 text-mauve">
          Use the inbox where you want launch access and safety updates.
          Less than 1 minute. {waitlistBoundaries.join(". ")}.
        </p>
        <p
          role="note"
          aria-label="Sensitive details not needed for the waitlist"
          className="mt-1 text-[13px] leading-5 text-mauve"
        >
          We will not ask for photos, ID, payment, exact location, or dating
          profile answers from this website waitlist.
        </p>

        {shouldShowEmailFallback ? (
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={emailHref}
              aria-label={`Continue ${selectedPlatform.emailLabel} waitlist request by email`}
              className="pm-btn pm-btn-outline min-h-[52px]"
            >
              <IconMail size={19} stroke={1.75} aria-hidden="true" />
              Continue by email
            </a>
            <p className="text-sm leading-6 text-mauve">
              Email keeps the waitlist open with the same platform preference.
            </p>
          </div>
        ) : null}

        {details}
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

      <div
        id="waitlist-form-status"
        className={`mt-4 flex items-start gap-2 text-sm leading-6 ${
          result?.ok
            ? "rounded-xl bg-[#e7f6ef] p-3 text-[#0f5a3d]"
            : result
              ? "rounded-xl bg-[#fde8ec] p-3 text-[#8a1631]"
              : isSubmitting
                ? "text-mauve"
                : "sr-only"
        }`}
        role={result?.ok === false ? "alert" : "status"}
        aria-live={result?.ok === false ? "assertive" : "polite"}
      >
        {isSubmitting ? (
          <IconLoader2
            size={17}
            className="mt-0.5 shrink-0 animate-spin text-rosas motion-reduce:animate-none"
            aria-hidden="true"
          />
        ) : result?.ok === false ? (
          <IconAlertCircle size={17} stroke={1.75} className="mt-0.5 shrink-0" aria-hidden="true" />
        ) : result?.ok ? (
          <IconCircleCheck size={17} stroke={1.75} className="mt-0.5 shrink-0" aria-hidden="true" />
        ) : (
          <IconShieldCheck size={17} stroke={1.75} className="mt-0.5 shrink-0 text-ok" aria-hidden="true" />
        )}
        <span>{statusMessage}</span>
      </div>
    </form>
  );
}
