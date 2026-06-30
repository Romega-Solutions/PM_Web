import {
  ArrowRight,
  CheckCircle2,
  Heart,
  LockKeyhole,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  UserCheck,
  UsersRound,
} from "lucide-react";

const trustSignals = [
  "18+ members only",
  "Email waitlist today",
  "No card collected",
  "No profile created yet",
];

const launchState = [
  "Waitlist only",
  "No profile today",
  "No matching today",
  "No payment today",
];

const conversionReasons = [
  {
    label: "Intent first",
    copy: "Relationship goals and expectations lead the planned profile flow.",
  },
  {
    label: "Careful pacing",
    copy: "Review cues and reporting paths are planned before broad matching.",
  },
  {
    label: "Private start",
    copy: "Join by email first. No public profile, payment, or matching today.",
  },
];

const launchProof = [
  {
    label: "Best for",
    value: "Filipinas and foreigners dating with long-term intent",
  },
  {
    label: "First step",
    value: "Pick iOS or Android waitlist",
  },
  {
    label: "Safety posture",
    value: "Review-status cues before matching is promoted",
  },
];

const previewRows = [
  {
    icon: UserCheck,
    label: "Profile intent",
    value: "Serious relationship",
  },
  {
    icon: ShieldCheck,
    label: "Safety cue",
    value: "Review before matching",
  },
  {
    icon: MessageCircleHeart,
    label: "First message",
    value: "Prompt-based intro",
  },
];

const matchNotes = [
  "Relationship goals",
  "Culture and location context",
  "Review status before reach",
];

const audiencePillars = [
  "Filipina-first onboarding",
  "Foreigner introduction context",
  "Respectful cross-cultural messaging",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#170f22] pt-24 text-white sm:pt-28"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_left,rgba(239,62,120,0.28),transparent_34%),radial-gradient(circle_at_top_right,rgba(92,131,233,0.2),transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#120a1b] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1360px] items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24 xl:px-16">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/14 bg-white/8 px-4 py-2 text-sm font-dm-sans-bold text-[#f6d0f1] shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Premium Filipino-first dating waitlist
          </div>

          <div
            className="mb-5 flex flex-wrap gap-2 text-sm font-dm-sans-bold text-[#fff7fb]"
            aria-label="Current PinayMate access status"
          >
            {launchState.map((state) => (
              <span
                key={state}
                className="inline-flex min-h-9 items-center rounded-lg border border-white/12 bg-white/8 px-3 py-1.5 shadow-sm backdrop-blur"
              >
                {state}
              </span>
            ))}
          </div>

          <h1 className="font-lora text-4xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            Serious Filipino dating should start with intent, safety, and
            respect.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e3dcf9] sm:text-xl">
            PinayMate gives Filipinas and foreigners a clearer path to
            relationship context before chat, matching, or paid access.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#download"
              aria-describedby="hero-cta-note"
              className="inline-flex min-h-14 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#ef3e78] px-7 py-4 text-base font-dm-sans-bold text-white shadow-xl shadow-[#ef3e78]/25 transition duration-200 hover:bg-[#d7346b] hover:shadow-[#ef3e78]/35 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9]"
            >
              Join the waitlist
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#features"
              className="inline-flex min-h-14 cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/18 bg-white/8 px-7 py-4 text-base font-dm-sans-bold text-white transition duration-200 hover:border-white/30 hover:bg-white/14 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9]"
            >
              See safety approach
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <div
            className="mt-7 grid gap-4 border-y border-white/12 py-5 sm:grid-cols-3"
            aria-label="Why people join the PinayMate waitlist"
          >
            {conversionReasons.map((reason) => (
              <div
                key={reason.label}
                className="border-l border-white/14 pl-4"
              >
                <p className="text-sm font-dm-sans-bold text-white">
                  {reason.label}
                </p>
                <p className="mt-1 text-sm leading-6 text-[#d8c7ea]">
                  {reason.copy}
                </p>
              </div>
            ))}
          </div>
          <p
            id="hero-cta-note"
            className="mt-3 max-w-xl text-sm leading-6 text-[#d8c7ea]"
          >
            Takes less than a minute by email. This page collects waitlist
            interest only; matching, public profiles, review badges, and
            checkout stay inside the app access flow. No payment on this page.
            This website does not create a dating profile, start matching, open
            checkout, or collect payment.
          </p>

          <div className="mt-7 max-w-2xl border-t border-white/12 pt-5">
            <p className="text-sm font-dm-sans-bold uppercase text-[#f6d0f1]">
              What you are joining
            </p>
            <dl className="mt-3 grid gap-3 sm:grid-cols-3">
              {launchProof.map((item) => (
                <div
                  key={item.label}
                  className="border-l border-white/14 pl-3"
                >
                  <dt className="text-xs font-dm-sans-bold uppercase text-[#cbbade]">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-dm-sans-semibold leading-6 text-white sm:min-h-12">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="mt-6 grid gap-2 text-sm font-dm-sans-medium text-[#f8f5ff] sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((signal) => (
              <li
                key={signal}
                className="flex min-h-11 items-center gap-2 border-b border-white/10 py-2"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-[#22a574]"
                  aria-hidden="true"
                />
                <span>{signal}</span>
              </li>
            ))}
          </ul>

          <div
            className="mt-4 flex flex-wrap gap-2"
            aria-label="PinayMate audience focus"
          >
            {audiencePillars.map((pillar) => (
              <span
                key={pillar}
                className="inline-flex min-h-10 items-center rounded-lg border border-white/10 bg-white/6 px-3 py-2 text-sm font-dm-sans-semibold text-[#eadff7]"
              >
                {pillar}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
          <div
            className="absolute -inset-4 rounded-xl bg-gradient-to-br from-[#ef3e78]/14 via-[#8d69f6]/10 to-[#5c83e9]/14 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative rounded-xl border border-white/12 bg-[#21132f]/96 p-5 text-white shadow-2xl shadow-black/35 backdrop-blur sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-dm-sans-bold uppercase text-[#b31460]">
                  Product preview
                </p>
                <h2 className="mt-1 font-lora text-2xl font-bold text-white">
                  A calmer match path
                </h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ef3e78] text-white">
                <Heart className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>

            <div className="mt-6 border-y border-white/10 bg-white/[0.06] px-1 py-5">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-[#ef3e78] to-[#8d69f6] text-xl font-dm-sans-bold text-white">
                  PM
                </div>
                <div>
                  <p className="font-dm-sans-bold text-white">
                    Member path preview
                  </p>
                  <p className="text-sm leading-6 text-[#d7c7ed]">
                    Philippines-based profile flow with relationship intent,
                    interests, review status, and conversation context.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {previewRows.map((row) => {
                  const Icon = row.icon;

                  return (
                    <div
                      key={row.label}
                      className="flex items-center gap-3 border-t border-white/10 pt-3 first:border-t-0 first:pt-0"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#f0b6df]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-dm-sans-bold uppercase text-[#cbbade]">
                          {row.label}
                        </p>
                        <p className="font-dm-sans-semibold text-white">
                          {row.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 grid gap-2">
              {matchNotes.map((note) => (
                <div
                  key={note}
                  className="flex min-h-11 items-center gap-3 border-b border-white/10 py-2 text-sm font-dm-sans-semibold text-[#eadff7] last:border-b-0"
                >
                  <CheckCircle2
                    className="h-4 w-4 text-[#22a574]"
                    aria-hidden="true"
                  />
                  {note}
                </div>
              ))}
            </div>

            <div className="mt-5 border-l-2 border-[#f0b6df] bg-white/[0.06] py-1 pl-4 pr-2">
              <div className="flex items-start gap-3">
                <LockKeyhole
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#b31460]"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-[#d7c7ed]">
                  This page is for waitlist interest only. Messaging, review
                  badges, and paid plans belong inside the app access flow,
                  not this website.
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-white/10 pt-4 text-[#d7c7ed]">
              <div className="flex items-start gap-3">
                <UsersRound
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#b31460]"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-[#d7c7ed]">
                  Designed for serious Filipina and foreigner introductions
                  where intent, respect, and safety context matter before reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
