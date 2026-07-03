import {
  ArrowRight,
  Heart,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

const launchState = [
  { label: "Waitlist", detail: "Waitlist only" },
  { label: "No profile", detail: "No profile today" },
  { label: "No match", detail: "No matching today" },
  { label: "No pay", detail: "No payment today" },
];

const conversionReasons = [
  {
    label: "Intent",
    copy: "Relationship goals and expectations lead the planned profile flow.",
  },
  {
    label: "Review",
    copy: "Review cues and reporting paths are planned before broad matching.",
  },
  {
    label: "Private",
    copy: "Join by email first. No public profile, payment, or matching today.",
  },
];

const launchProof = [
  {
    label: "Best",
    shortValue: "Serious intent",
    value: "Best for Filipinas and foreigners dating with long-term intent",
  },
  {
    label: "First",
    shortValue: "Platform",
    value: "First step: Pick iOS or Android waitlist",
  },
  {
    label: "Safety",
    shortValue: "Review",
    value: "Safety posture: Review-status cues before matching is promoted",
  },
];

const trustSignals = [
  { label: "18+", detail: "18+ members only" },
  { label: "Email", detail: "Email waitlist today" },
  { label: "No card", detail: "No card collected" },
  { label: "No profile", detail: "No profile created yet" },
];

const audiencePillars = [
  { label: "Filipina", detail: "Filipina-first onboarding" },
  { label: "Foreigner", detail: "Foreigner introduction context" },
  { label: "Respect", detail: "Respectful cross-cultural messaging" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#170f22] pt-24 text-white sm:pt-28"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_left,rgba(239,62,120,0.24),transparent_34%),radial-gradient(circle_at_top_right,rgba(92,131,233,0.18),transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#120a1b] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1360px] items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24 xl:px-16">
        <div className="relative min-w-0 max-w-3xl">
          <img
            src="/main-logo-no-bg.svg"
            alt=""
            className="pointer-events-none absolute -left-12 top-16 -z-10 h-80 w-80 object-contain opacity-[0.07] sm:-left-20 sm:top-10 sm:h-[28rem] sm:w-[28rem]"
            aria-hidden="true"
          />
          <div className="mb-6 inline-flex min-h-11 items-center gap-2 border-l-2 border-[#f0b6df]/22 px-4 py-2 text-sm font-dm-sans-bold text-[#f6d0f1]">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            PinayMate waitlist
            <span className="sr-only">
              . Premium Filipino-first dating waitlist
            </span>
          </div>

          <div
            className="pm-hero-status-ribbon mb-5"
            aria-label="Current PinayMate access status"
          >
            {launchState.map((state, index) => (
              <span
                key={state.detail}
                className="pm-hero-status-dot"
              >
                {index === 0 ? (
                  <Heart className="h-4 w-4" aria-hidden="true" />
                ) : index === 1 ? (
                  <UserCheck className="h-4 w-4" aria-hidden="true" />
                ) : index === 2 ? (
                  <MessageCircleHeart className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                )}
                <span className="sr-only">{state.label}</span>
                <span className="sr-only">. {state.detail}</span>
              </span>
            ))}
          </div>

          <h1 className="pm-hero-wordmark max-w-full break-words font-hello-paris-bold leading-[0.98] text-white">
            PinayMate
          </h1>

          <p className="mt-6 max-w-xl text-lg font-dm-sans-medium leading-8 text-[#e3dcf9] sm:text-xl">
            Intent before chat. Review before reach.
            <span className="sr-only">
              Serious Filipino dating should start with intent, safety, and
              respect.
              Serious Filipino dating with intent before chat and review before
              reach.
              PinayMate gives Filipinas and foreigners a clearer path to
              relationship context before chat, matching, or paid access.
            </span>
          </p>

          <div className="mt-8 flex max-w-[calc(100vw-2rem)] flex-col gap-3 sm:max-w-none sm:flex-row">
            <a
              href="#download"
              aria-describedby="hero-cta-note"
              className="inline-flex min-h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#ef3e78] px-7 py-4 text-base font-dm-sans-bold text-white shadow-xl shadow-[#ef3e78]/25 transition duration-200 hover:bg-[#d7346b] hover:shadow-[#ef3e78]/35 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9] sm:w-auto"
            >
              Join waitlist
              <span className="sr-only">. Join the waitlist</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#features"
              className="inline-flex min-h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#f0b6df]/22 bg-[#2e1e5a]/55 px-7 py-4 text-base font-dm-sans-bold text-white transition duration-200 hover:border-[#f0b6df]/45 hover:bg-[#3b2255]/75 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9] sm:w-auto"
            >
              Safety
              <span className="sr-only">. See safety approach</span>
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 max-w-xl">
            <div id="hero-cta-note" className="sr-only">
              {conversionReasons.map((reason) => (
                <span key={reason.label}>
                  {reason.label}: {reason.copy}
                </span>
              ))}
              <span>
                Takes less than a minute by email. This page collects waitlist
                interest only; matching, public profiles, review badges, and
                checkout stay inside the app access flow. No payment on this page.
                This website does not create a dating profile, start matching,
                open checkout, or collect payment.
              </span>
              <span>
                What you are joining. {launchProof.map((item) => item.value).join(". ")}
              </span>
              <span>
                {trustSignals.map((signal) => signal.detail).join(". ")}
              </span>
              <span>
                {audiencePillars.map((pillar) => pillar.detail).join(". ")}
              </span>
            </div>
          </div>

          <p className="sr-only">
            Joining PinayMate means serious intent, platform updates, review
            cues, adult-only positioning, no payment today, and a respectful
            Filipina and foreigner dating focus.
          </p>

        </div>

        <div className="relative mx-auto min-w-0 w-full max-w-[560px] lg:ml-auto">
          <div
            className="absolute -inset-5 rounded-lg bg-[radial-gradient(circle_at_38%_18%,rgba(239,62,120,0.2),transparent_38%),radial-gradient(circle_at_78%_70%,rgba(92,131,233,0.18),transparent_36%)] blur-2xl"
            aria-hidden="true"
          />

          <div className="pm-hero-media relative overflow-hidden border border-[#f0b6df]/14 bg-[#100817]/72 p-3 text-white backdrop-blur">
            <img
              src="/assets/pinaymate-hero-app-preview.png"
              alt=""
              className="pm-hero-media-image"
              aria-hidden="true"
            />
            <div className="pm-hero-media-vignette" aria-hidden="true" />

            <div className="pm-hero-media-chip pm-hero-media-chip-top" aria-hidden="true">
              <Heart className="h-4 w-4" />
              <span>Intent</span>
            </div>
            <div className="pm-hero-media-chip pm-hero-media-chip-bottom" aria-hidden="true">
              <ShieldCheck className="h-4 w-4" />
              <span>Private waitlist</span>
            </div>

            <p className="sr-only">
              Product preview.
              Premium app preview showing a dark PinayMate mobile interface
              with a profile card, intent prompts, review cues, and private
              waitlist status. This page collects waitlist interest only;
              matching, public profiles, review badges, and checkout stay
              inside the app access flow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
