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
  {
    label: "18+",
    detail: "18+ members only",
  },
  {
    label: "Email",
    detail: "Email waitlist today",
  },
  {
    label: "No card",
    detail: "No card collected",
  },
  {
    label: "No profile",
    detail: "No profile created yet",
  },
];

const launchState = [
  {
    label: "Waitlist",
    detail: "Waitlist only",
  },
  {
    label: "No profile",
    detail: "No profile today",
  },
  {
    label: "No match",
    detail: "No matching today",
  },
  {
    label: "No pay",
    detail: "No payment today",
  },
];

const conversionReasons = [
  {
    label: "Intent first",
    signal: "Intent",
    copy: "Relationship goals and expectations lead the planned profile flow.",
  },
  {
    label: "Careful pacing",
    signal: "Pacing",
    copy: "Review cues and reporting paths are planned before broad matching.",
  },
  {
    label: "Private start",
    signal: "Private",
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

const previewRows = [
  {
    icon: UserCheck,
    label: "Profile intent",
    shortValue: "Intent",
    value: "Serious relationship",
  },
  {
    icon: ShieldCheck,
    label: "Safety cue",
    shortValue: "Review",
    value: "Review before matching",
  },
  {
    icon: MessageCircleHeart,
    label: "First message",
    shortValue: "Prompt",
    value: "Prompt-based intro",
  },
];

const matchNotes = [
  {
    label: "Goals",
    detail: "Relationship goals",
  },
  {
    label: "Context",
    detail: "Culture and location context",
  },
  {
    label: "Review",
    detail: "Review status before reach",
  },
];

const audiencePillars = [
  {
    label: "Filipina",
    detail: "Filipina-first onboarding",
  },
  {
    label: "Foreigner",
    detail: "Foreigner introduction context",
  },
  {
    label: "Respect",
    detail: "Respectful cross-cultural messaging",
  },
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
          <div className="mb-6 inline-flex min-h-11 items-center gap-2 border-l-2 border-[#f0b6df]/22 px-4 py-2 text-sm font-dm-sans-bold text-[#f6d0f1]">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            PinayMate waitlist
            <span className="sr-only">
              . Premium Filipino-first dating waitlist
            </span>
          </div>

          <div
            className="mb-5 grid max-w-xl grid-cols-4 border-y border-[#f0b6df]/12 py-2 text-xs font-dm-sans-bold text-[#fff7fb] sm:py-3"
            aria-label="Current PinayMate access status"
          >
            {launchState.map((state) => (
              <span
                key={state.detail}
                className="min-h-9 border-l border-[#f0b6df]/12 px-2 py-1.5 text-center first:border-l-0 sm:min-h-12"
              >
                <CheckCircle2
                  className="mx-auto h-3.5 w-3.5 text-[#49d49a]"
                  aria-hidden="true"
                />
                <span
                  className="mx-auto mt-2 hidden h-1.5 w-12 rounded-lg bg-[#f0b6df]/26 sm:block"
                  aria-hidden="true"
                />
                <span className="sr-only">
                  {state.label}
                </span>
                <span className="sr-only">. {state.detail}</span>
              </span>
            ))}
          </div>

          <h1 className="font-lora text-4xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            Serious Filipino dating should start with intent, safety, and
            respect.
          </h1>

          <p className="mt-6 inline-flex min-h-10 items-center border-l-2 border-[#f0b6df]/18 px-3 py-1 text-xs font-dm-sans-bold text-[#e3dcf9]">
            Intent before chat. Review before reach.
            <span className="sr-only">
              PinayMate gives Filipinas and foreigners a clearer path to
              relationship context before chat, matching, or paid access.
            </span>
          </p>
          <div className="mt-5 grid max-w-2xl grid-cols-3 gap-2" aria-hidden="true">
            <span className="h-2 rounded-lg bg-[#ef3e78]" />
            <span className="h-2 rounded-lg bg-[#8d69f6]" />
            <span className="h-2 rounded-lg bg-[#5c83e9]" />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#download"
              aria-describedby="hero-cta-note"
              className="inline-flex min-h-14 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#ef3e78] px-7 py-4 text-base font-dm-sans-bold text-white shadow-xl shadow-[#ef3e78]/25 transition duration-200 hover:bg-[#d7346b] hover:shadow-[#ef3e78]/35 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9]"
            >
              Join waitlist
              <span className="sr-only">. Join the waitlist</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#features"
              className="inline-flex min-h-14 cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#f0b6df]/22 bg-[#2e1e5a]/55 px-7 py-4 text-base font-dm-sans-bold text-white transition duration-200 hover:border-[#f0b6df]/45 hover:bg-[#3b2255]/75 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9]"
            >
              Safety
              <span className="sr-only">. See safety approach</span>
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <div
            className="mt-7 grid grid-cols-3 border-y border-[#f0b6df]/12 py-4 sm:py-5"
            aria-label="Why people join the PinayMate waitlist"
          >
            {conversionReasons.map((reason) => (
              <div
                key={reason.label}
                className="border-l border-[#f0b6df]/16 px-3 first:border-l-0 sm:px-5"
              >
                <p className="sr-only">
                  {reason.signal}
                </p>
                <div className="h-2 rounded-lg bg-[#f0b6df]/16 sm:mt-3" aria-hidden="true">
                  <div className="h-full w-2/3 rounded-lg bg-[#ef3e78]/80" />
                </div>
                <p className="sr-only">
                  {reason.label}. {reason.copy}
                </p>
              </div>
            ))}
          </div>
          <div
            id="hero-cta-note"
            className="sr-only mt-4 max-w-2xl grid-cols-3 border-y border-[#f0b6df]/12 py-3 sm:not-sr-only sm:grid"
          >
            {[
              {
                label: "Interest",
                detail: "Waitlist interest only",
              },
              {
                label: "No profile",
                detail: "No profile or matching",
              },
              {
                label: "No checkout",
                detail: "No checkout or payment",
              },
            ].map((item) => (
              <span
                key={item.label}
                className="min-h-10 border-l border-[#f0b6df]/12 px-3 py-1 text-center text-xs font-dm-sans-bold text-[#f6d0f1] first:border-l-0"
              >
                  <span
                    className="mx-auto block h-1.5 w-12 rounded-lg bg-[#f0b6df]/28"
                    aria-hidden="true"
                  />
                  <span className="sr-only">
                    {item.label}
                  </span>
                  <span className="sr-only">. {item.detail}</span>
                </span>
              ))}
            <span className="sr-only">
              Takes less than a minute by email. This page collects waitlist
              interest only; matching, public profiles, review badges, and
              checkout stay inside the app access flow. No payment on this page.
              This website does not create a dating profile, start matching,
              open checkout, or collect payment.
            </span>
          </div>

          <p className="sr-only">
            Joining PinayMate means serious intent, platform updates, review
            cues, adult-only positioning, no payment today, and a respectful
            Filipina and foreigner dating focus.
          </p>

          <div className="mt-7 hidden max-w-2xl border-t border-white/12 pt-5 sm:block">
            <p className="grid max-w-32 grid-cols-3 gap-2" aria-hidden="true">
              <span className="h-1.5 rounded-lg bg-[#ef3e78]/52" />
              <span className="h-1.5 rounded-lg bg-[#8d69f6]/40" />
              <span className="h-1.5 rounded-lg bg-[#5c83e9]/32" />
            </p>
            <p className="sr-only">
              Joining
              <span className="sr-only">. What you are joining</span>
            </p>
            <dl className="mt-3 grid gap-2 sm:grid-cols-3">
              {launchProof.map((item) => (
                <div
                  key={item.label}
                  className="border-l-2 border-[#f0b6df]/22 bg-[#2e1e5a]/24 py-2 pl-3 pr-2"
                >
                  <dt className="text-xs font-dm-sans-bold text-[#cbbade]">
                    <span
                      className="block h-1.5 w-10 rounded-lg bg-[#f0b6df]/26"
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                      {item.label}
                    </span>
                  </dt>
                  <dd className="mt-1 text-sm font-dm-sans-semibold leading-6 text-white sm:min-h-12">
                    <span
                      className="block h-1.5 w-20 rounded-lg bg-[#f0b6df]/22"
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                      {item.shortValue}
                    </span>
                    <span className="sr-only">. {item.value}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="mt-6 hidden grid-cols-4 border-y border-[#f0b6df]/12 py-3 text-sm font-dm-sans-medium text-[#f8f5ff] sm:grid">
            {trustSignals.map((signal) => (
              <li
                key={signal.label}
                className="min-h-14 border-l border-[#f0b6df]/12 px-2 py-1 text-center first:border-l-0"
              >
                <CheckCircle2
                  className="mx-auto h-4 w-4 shrink-0 text-[#22a574]"
                  aria-hidden="true"
                />
                <span
                  className="mx-auto mt-3 block h-1.5 w-10 rounded-lg bg-[#f0b6df]/26"
                  aria-hidden="true"
                />
                <span className="sr-only">
                  {signal.label}
                </span>
                <span className="sr-only">. {signal.detail}</span>
              </li>
            ))}
          </ul>

          <div
            className="mt-4 hidden grid-cols-3 border-y border-[#f0b6df]/12 py-3 sm:grid"
            aria-label="PinayMate audience focus"
          >
            {audiencePillars.map((pillar) => (
              <span
                key={pillar.label}
                className="min-h-10 border-l border-[#f0b6df]/12 px-3 py-1 text-center text-sm font-dm-sans-semibold text-[#eadff7] first:border-l-0"
              >
                <span
                  className="mx-auto block h-1.5 w-12 rounded-lg bg-[#f0b6df]/28"
                  aria-hidden="true"
                />
                <span className="sr-only">
                  {pillar.label}
                </span>
                <span className="sr-only">. {pillar.detail}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
          <div
            className="absolute -inset-4 rounded-lg bg-gradient-to-br from-[#ef3e78]/14 via-[#8d69f6]/10 to-[#5c83e9]/14 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative border-y border-[#f0b6df]/14 bg-[#21132f]/74 py-5 text-white backdrop-blur sm:py-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-dm-sans-bold text-[#f7a4c8]">
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

            <div className="mt-6 overflow-hidden border-y border-[#f0b6df]/14 bg-[#170f22]/54">
              <div className="relative min-h-72 p-5">
                <div
                  className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#ef3e78]/16 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-dm-sans-bold text-[#f0b6df]">
                      Member path
                    </p>
                    <p className="mt-1 font-lora text-xl font-bold text-white">
                      Intent before reach
                    </p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-[#f0b6df]/18 bg-[#120a1b]/52 p-2">
                    <img
                      src="/main-logo-no-bg.svg"
                      alt=""
                      className="h-full w-full object-contain"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="relative mt-6 grid gap-3">
                  <div className="grid min-h-36 grid-cols-[0.72fr_1fr] gap-3">
                    <div className="relative overflow-hidden border-l-2 border-[#f0b6df]/14 bg-[#120a1b]/58 p-3">
                      <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#ef3e78]/24 to-transparent" aria-hidden="true" />
                      <div className="relative mx-auto h-16 w-16 rounded-lg border border-[#f0b6df]/18 bg-gradient-to-br from-[#ef3e78]/86 to-[#8d69f6]/78 p-1.5">
                        <div className="h-full rounded-lg bg-[#ffe8f1]/18" />
                      </div>
                      <div className="relative mt-4 grid grid-cols-3 gap-1.5" aria-hidden="true">
                        <span className="h-7 rounded-lg bg-[#ef3e78]/28" />
                        <span className="h-7 rounded-lg bg-[#8d69f6]/24" />
                        <span className="h-7 rounded-lg bg-[#5c83e9]/20" />
                      </div>
                    </div>
                    <div className="relative overflow-hidden border-l-2 border-[#f0b6df]/14 bg-[#2e1e5a]/28 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-2">
                          <div className="h-2 w-24 rounded-lg bg-[#ef3e78]" />
                          <div className="h-2 w-32 rounded-lg bg-[#f0b6df]/22" />
                          <div className="h-2 w-20 rounded-lg bg-[#f0b6df]/14" />
                        </div>
                        <div className="grid grid-cols-2 gap-1.5" aria-hidden="true">
                          <span className="h-7 w-7 rounded-lg bg-[#ef3e78]/30" />
                          <span className="h-7 w-7 rounded-lg bg-[#8d69f6]/26" />
                          <span className="h-7 w-7 rounded-lg bg-[#5c83e9]/22" />
                          <span className="h-7 w-7 rounded-lg bg-[#f0b6df]/14" />
                        </div>
                      </div>
                      <div className="mt-5 grid grid-cols-3 gap-2" aria-hidden="true">
                        <span className="h-9 rounded-lg bg-[#ef3e78]/24" />
                        <span className="h-9 rounded-lg bg-[#8d69f6]/24" />
                        <span className="h-9 rounded-lg bg-[#5c83e9]/20" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-[1fr_0.82fr] gap-3" aria-hidden="true">
                    <div className="border-l-2 border-[#ef3e78]/34 bg-[#1a0d27]/48 p-3">
                      <span className="block h-2 w-20 rounded-lg bg-[#ef3e78]/78" />
                      <span className="mt-3 block h-2 rounded-lg bg-[#f0b6df]/20" />
                      <span className="mt-2 block h-2 w-3/4 rounded-lg bg-[#f0b6df]/14" />
                    </div>
                    <div className="border-l-2 border-[#8d69f6]/34 bg-[#1a0d27]/48 p-3">
                      <span className="block h-8 rounded-lg bg-[#ef3e78]/84" />
                      <span className="mt-3 block h-2 rounded-lg bg-[#f0b6df]/18" />
                    </div>
                  </div>

                  <p className="sr-only">
                    Member path preview: Philippines-based profile flow with
                    relationship intent, interests, review status, and
                    conversation context.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 border-t border-[#f0b6df]/12 p-5">
                {previewRows.map((row) => {
                  const Icon = row.icon;

                  return (
                    <div
                      key={row.label}
                      className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0"
                    >
                      <div className="mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2e1e5a]/75 text-[#f0b6df]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="mt-3 text-xs font-dm-sans-bold text-[#f6d0f1]">
                        <span
                          className="mx-auto block h-1.5 w-12 rounded-lg bg-[#f0b6df]/28"
                          aria-hidden="true"
                        />
                        <span className="sr-only">
                          {row.shortValue}
                        </span>
                      </p>
                      <p className="sr-only">
                        {row.label}: {row.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 border-y border-[#f0b6df]/12 py-3">
              {matchNotes.map((note) => (
                <div
                  key={note.label}
                  className="min-h-14 border-l border-[#f0b6df]/12 px-2 py-1 text-center text-xs font-dm-sans-bold text-[#eadff7] first:border-l-0"
                >
                  <CheckCircle2
                    className="mx-auto h-4 w-4 text-[#22a574]"
                    aria-hidden="true"
                  />
                  <span
                    className="mx-auto mt-3 block h-1.5 w-10 rounded-lg bg-[#f0b6df]/26"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{note.label}</span>
                  <span className="sr-only">. {note.detail}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 border-l-2 border-[#f0b6df] bg-[#170f22]/65 py-1 pl-4 pr-2">
              <div className="flex items-start gap-3">
                <LockKeyhole
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#f7a4c8]"
                  aria-hidden="true"
                />
                <p className="grid flex-1 grid-cols-3 border-y border-[#f0b6df]/12 py-2 text-xs font-dm-sans-bold text-[#f6d0f1]">
                  <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0">
                    <span
                      className="mx-auto block h-1.5 w-12 rounded-lg bg-[#ef3e78]/38"
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                      Waitlist
                    </span>
                  </span>
                  <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0">
                    <span
                      className="mx-auto block h-1.5 w-12 rounded-lg bg-[#8d69f6]/36"
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                      App flow
                    </span>
                  </span>
                  <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0">
                    <span
                      className="mx-auto block h-1.5 w-12 rounded-lg bg-[#5c83e9]/32"
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                      No checkout
                    </span>
                  </span>
                  <span className="sr-only">
                    This page is for waitlist interest only. Messaging, review
                    badges, and paid plans belong inside the app access flow,
                    not this website.
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-white/10 pt-4 text-[#d7c7ed]">
              <div className="flex items-start gap-3">
                <UsersRound
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#f7a4c8]"
                  aria-hidden="true"
                />
                <p className="grid w-full max-w-44 grid-cols-3 gap-2" aria-hidden="true">
                  <span className="h-1.5 rounded-lg bg-[#ef3e78]/45" />
                  <span className="h-1.5 rounded-lg bg-[#8d69f6]/34" />
                  <span className="h-1.5 rounded-lg bg-[#5c83e9]/28" />
                </p>
                <p className="sr-only">
                  Intent + respect + safety
                  <span className="sr-only">
                    Designed for serious Filipina and foreigner introductions
                    where intent, respect, and safety context matter before
                    reach.
                  </span>
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
