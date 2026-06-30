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
  "Review-status cues",
  "Relationship goals upfront",
  "Culture-aware discovery",
  "Mobile-first conversation direction",
];

const credibilityStats = [
  {
    value: "18+",
    label: "Positioned for adult members only",
  },
  {
    value: "0",
    label: "Payment details requested on this page",
  },
  {
    value: "3",
    label: "Clear steps before early access",
  },
];

const trustFlow = [
  "Join by platform preference",
  "Get access and safety updates",
  "Create a profile inside the app when access is available",
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
              PinayMate is shaped for people who want more than a busy dating
              feed. The product path keeps the first step clear: safer
              discovery, stronger intent, and conversations that can turn into
              something real when access is available.
            </p>

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
              className="mt-3 text-sm leading-6 text-[#cbbade]"
            >
              Membership links collect interest only. They do not create a
              dating profile, start matching, or open checkout.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
              {memberSignals.map((signal) => (
                <div
                  key={signal}
                  className="border-l border-white/14 pl-3 text-sm font-dm-sans-semibold text-[#eadff7]"
                >
                  <CheckCircle2
                    className="mb-2 h-4 w-4 text-[#22a574]"
                    aria-hidden="true"
                  />
                  {signal}
                </div>
              ))}
            </div>

            <dl className="mt-8 grid gap-4 border-y border-white/12 py-5 sm:grid-cols-3">
              {credibilityStats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="font-lora text-3xl font-bold text-white">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-[#cbbade]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 border-t border-white/12 pt-6">
              <p className="text-sm font-dm-sans-bold uppercase text-[#f3c7de]">
                The access path
              </p>
              <ol className="mt-4 grid gap-4 sm:grid-cols-3">
                {trustFlow.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm leading-6 text-[#eadff7]"
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2e1e5a] text-sm font-dm-sans-bold text-white"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-white/12 lg:pl-10">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <article
                  key={point.title}
                  className="border-b border-white/10 pb-6 last:border-b-0 sm:border-b-0 sm:pb-0 lg:border-b lg:pb-6"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#2e1e5a] text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-lora text-xl font-bold text-white">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-[#d7c7ed]">
                        {point.copy}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="border border-[#f0b6df]/14 bg-[#2e1e5a]/50 p-6 text-white shadow-xl shadow-black/20 sm:col-span-3 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#170f22]/70">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-dm-sans-bold uppercase text-[#f0b6df]">
                    Product promise
                  </p>
                  <p className="text-xl font-lora font-bold">
                    Less noise, more qualified intent.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-base leading-7 text-[#e3dcf9]">
                Every step is planned to help serious members understand fit,
                safety posture, and value before they choose to start a
                conversation in the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
