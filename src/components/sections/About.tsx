import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Profile review first",
    copy: "Helpful prompts and safety-first onboarding help members understand what to complete before starting a conversation.",
  },
  {
    icon: Sparkles,
    title: "Intent-led matching",
    copy: "Profiles emphasize values, family goals, lifestyle, and relationship intent instead of only swipe-level attraction.",
  },
  {
    icon: MessageCircle,
    title: "Conversations with context",
    copy: "Prompt and profile-detail direction helps first messages feel easier, warmer, and more useful when chat is live.",
  },
];

const memberSignals = [
  "Review cues",
  "Goals first",
  "Culture fit",
  "Mobile chat",
];

const connectionVisual = [
  {
    label: "Intent",
    value: "01",
    tone: "from-[#ef3e78] to-[#8d69f6]",
    bars: ["w-5/6", "w-2/3", "w-1/2"],
  },
  {
    label: "Review",
    value: "02",
    tone: "from-[#8d69f6] to-[#5c83e9]",
    bars: ["w-3/4", "w-5/6", "w-2/5"],
  },
  {
    label: "Context",
    value: "03",
    tone: "from-[#ef3e78] to-[#5c83e9]",
    bars: ["w-2/3", "w-1/2", "w-4/5"],
  },
];

const credibilityStats = [
  {
    value: "18+",
    shortLabel: "Adult only",
    label: "Positioned for adult members only",
  },
  {
    value: "0",
    shortLabel: "No payment",
    label: "Payment details requested on this page",
  },
  {
    value: "3",
    shortLabel: "Clear steps",
    label: "Clear steps before early access",
  },
];

const trustFlow = [
  {
    label: "Choose platform",
    detail: "Join by platform preference",
  },
  {
    label: "Get updates",
    detail: "Get access and safety updates",
  },
  {
    label: "Open in app",
    detail: "Create a profile inside the app when access is available",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-[#120a1b] via-[#1a1026] to-[#21132f] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ef3e78]/30 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#5c83e9]/25 to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#f0b6df]/18 bg-[#2e1e5a]/55 px-4 py-2 text-sm font-dm-sans-bold text-[#f3c7de] shadow-sm">
              <HeartHandshake className="h-4 w-4" aria-hidden="true" />
              Filipino dating product direction, built around trust
            </div>

            <h2 className="font-lora text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              A calmer path from interest to real connection.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#d7c7ed] sm:text-xl">
              Intent. Review. Context.
              <span className="sr-only">
                Clear intent. Safer pacing. Less noise before anyone starts a
                conversation.
                PinayMate is shaped for people who want more than a busy dating
                feed. The product path keeps the first step clear: safer
                discovery, stronger intent, and conversations that can turn into
                something real when access is available.
              </span>
            </p>
            <div
              className="mt-5 grid grid-cols-3 gap-2"
              aria-hidden="true"
            >
              <span className="h-2 rounded-lg bg-[#ef3e78]" />
              <span className="h-2 rounded-lg bg-[#8d69f6]" />
              <span className="h-2 rounded-lg bg-[#5c83e9]" />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#features"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#ef3e78] px-6 py-3 font-dm-sans-bold text-white shadow-lg shadow-[#F4376D]/20 transition duration-200 hover:bg-[#d7346b] hover:shadow-[#F4376D]/30 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f6fe4]"
              >
                See how it works
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#pricing"
                aria-describedby="about-membership-note"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-lg border border-[#f0b6df]/22 bg-[#2e1e5a]/55 px-6 py-3 font-dm-sans-bold text-[#eadff7] shadow-sm transition duration-200 hover:border-[#f0b6df]/70 hover:bg-[#3b2255]/75 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
              >
                Review planned memberships
              </a>
            </div>
            <p
              id="about-membership-note"
              className="mt-3 flex flex-wrap gap-2 text-xs font-dm-sans-bold uppercase tracking-[0.12em] text-[#f3c7de]"
            >
              <span className="rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/36 px-3 py-2">
                Interest only
              </span>
              <span className="rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/36 px-3 py-2">
                No matching
              </span>
              <span className="rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/36 px-3 py-2">
                No checkout
              </span>
              <span className="sr-only">
                Membership links collect interest only. They do not create a
                dating profile, start matching, or open checkout.
              </span>
            </p>

            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {memberSignals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/34 p-3 text-sm font-dm-sans-semibold text-[#eadff7]"
                >
                  <CheckCircle2
                    className="mb-2 h-4 w-4 text-[#22a574]"
                    aria-hidden="true"
                  />
                  {signal}
                </div>
              ))}
            </div>

            <dl className="mt-8 grid gap-3 border-y border-white/12 py-5 sm:grid-cols-3">
              {credibilityStats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-0 rounded-lg bg-[#120a1b]/52 p-4"
                >
                  <dt className="font-lora text-3xl font-bold text-white">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-[#cbbade]">
                    {stat.shortLabel}
                    <span className="sr-only">. {stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 border-t border-white/12 pt-6">
              <p className="text-sm font-dm-sans-bold uppercase text-[#f3c7de]">
                The access path
              </p>
              <ol className="mt-4 grid gap-3 sm:grid-cols-3">
                {trustFlow.map((step, index) => (
                  <li
                    key={step.label}
                    className="flex min-h-20 items-center gap-3 rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/34 p-4 text-sm leading-6 text-[#eadff7]"
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ef3e78] text-sm font-dm-sans-bold text-white"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <span>
                      {step.label}
                      <span className="sr-only">: {step.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-white/12 lg:pl-10">
            <div className="relative overflow-hidden rounded-lg border border-[#f0b6df]/16 bg-[#1a0d27]/76 p-5 shadow-xl shadow-black/12 sm:col-span-3 lg:col-span-1">
              <div
                className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#ef3e78]/14 to-transparent"
                aria-hidden="true"
              />
              <div className="relative grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {connectionVisual.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-[#f0b6df]/14 bg-[#120a1b]/68 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${item.tone} text-sm font-dm-sans-bold text-white`}
                      >
                        {item.value}
                      </span>
                      <span className="text-xs font-dm-sans-bold uppercase tracking-[0.16em] text-[#f6d0f1]">
                        {item.label}
                      </span>
                    </div>
                    <div className="mt-4 space-y-2" aria-hidden="true">
                      {item.bars.map((bar, index) => (
                        <span
                          key={`${item.label}-${index}`}
                          className={`block h-2 rounded-lg bg-[#f0b6df]/28 ${bar}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="relative mt-4 grid grid-cols-3 gap-2"
                aria-hidden="true"
              >
                <span className="h-2 rounded-lg bg-[#ef3e78]" />
                <span className="h-2 rounded-lg bg-[#8d69f6]" />
                <span className="h-2 rounded-lg bg-[#5c83e9]" />
              </div>
              <p className="sr-only">
                Visual connection flow showing intent, review, and context
                before conversation.
              </p>
            </div>

            {trustPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <article
                  key={point.title}
                  className="rounded-lg border border-[#f0b6df]/14 bg-[#1a0d27]/72 p-5 shadow-xl shadow-black/10 transition duration-200 hover:border-[#f0b6df]/32 hover:bg-[#21132f]/86"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ef3e78] text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-lora text-xl font-bold text-white">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-sm font-dm-sans-bold uppercase tracking-[0.14em] text-[#f0b6df]">
                        Step {index + 1}
                        <span className="sr-only">. {point.copy}</span>
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="rounded-lg border border-[#f0b6df]/18 bg-gradient-to-br from-[#2e1e5a]/72 via-[#21132f]/78 to-[#170f22] p-6 text-white shadow-xl shadow-black/16 sm:col-span-3 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#170f22]/70 text-[#f0b6df]">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-dm-sans-bold uppercase text-[#f0b6df]">
                    Product promise
                  </p>
                  <p className="text-xl font-lora font-bold">
                    Less noise. Better signals.
                    <span className="sr-only">
                      Less noise, more qualified intent.
                    </span>
                  </p>
                </div>
              </div>
              <p className="mt-4 grid grid-cols-3 gap-2" aria-hidden="true">
                <span className="h-9 rounded-lg bg-[#ef3e78]/24" />
                <span className="h-9 rounded-lg bg-[#8d69f6]/22" />
                <span className="h-9 rounded-lg bg-[#5c83e9]/18" />
              </p>
              <p className="sr-only">
                Better signals before conversation.
                Every step is planned to help serious members understand fit,
                safety posture, and value before they choose to start a
                conversation in the app.
              </p>
              <p className="mt-4 inline-flex min-h-9 items-center rounded-lg border border-[#f0b6df]/14 bg-[#120a1b]/38 px-3 py-2 text-xs font-dm-sans-bold uppercase tracking-[0.12em] text-[#f3c7de]">
                Intent before chat
                <span className="sr-only">
                  . Better signals before conversation.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
