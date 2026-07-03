import {
  ArrowRight,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Review",
    copy: "Helpful prompts and safety-first onboarding help members understand what to complete before starting a conversation.",
  },
  {
    icon: Sparkles,
    title: "Intent",
    copy: "Profiles emphasize values, family goals, lifestyle, and relationship intent instead of only swipe-level attraction.",
  },
  {
    icon: MessageCircle,
    title: "Context",
    copy: "Prompt and profile-detail direction helps first messages feel easier, warmer, and more useful when chat is live.",
  },
];

const memberSignals = [
  {
    label: "Review",
    detail: "Review cues",
  },
  {
    label: "Goals",
    detail: "Goals first",
  },
  {
    label: "Culture",
    detail: "Culture fit",
  },
  {
    label: "Mobile",
    detail: "Mobile chat",
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
    label: "Platform",
    detail: "Join by platform preference",
  },
  {
    label: "Updates",
    detail: "Get access and safety updates",
  },
  {
    label: "App",
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
            <div className="mb-5 inline-grid min-h-11 w-28 place-items-center rounded-lg border border-[#f0b6df]/14 bg-[#2a1a44]/45 px-4 py-2 text-sm font-dm-sans-bold text-[#f3c7de]">
              <HeartHandshake className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">
                Trust direction. Filipino dating product direction, built around trust
              </span>
            </div>

            <h2 className="font-lora text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Interest to real connection.
              <span className="sr-only">
                A calmer path from interest to real connection.
              </span>
            </h2>

            <p className="sr-only">
              Intent. Review. Context.
              Clear intent. Safer pacing. Less noise before anyone starts a
              conversation.
              PinayMate is shaped for people who want more than a busy dating
              feed. The product path keeps the first step clear: safer
              discovery, stronger intent, and conversations that can turn into
              something real when access is available.
            </p>
            <div className="pm-about-mini-product mt-7 hidden sm:block" aria-hidden="true">
              <img
                src="/assets/pinaymate-dark-app-collage.png"
                alt=""
                className="pm-about-mini-product-image"
              />
              <span className="pm-about-mini-product-glow" />
            </div>
            <div className="sr-only">
              Intent. Review. Context.
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#features"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#ef3e78] px-6 py-3 font-dm-sans-bold text-white shadow-lg shadow-[#F4376D]/20 transition duration-200 hover:bg-[#d7346b] hover:shadow-[#F4376D]/30 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f6fe4]"
              >
                How it works
                <span className="sr-only">. See how it works</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#pricing"
                aria-describedby="about-membership-note"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-lg border border-[#f0b6df]/22 bg-[#2e1e5a]/55 px-6 py-3 font-dm-sans-bold text-[#eadff7] shadow-sm transition duration-200 hover:border-[#f0b6df]/70 hover:bg-[#3b2255]/75 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
              >
                Memberships
                <span className="sr-only">. Review planned memberships</span>
              </a>
            </div>
            <p
              id="about-membership-note"
              className="sr-only"
            >
              <span className="border-l border-[#f0b6df]/12 px-2 text-center first:border-l-0">
                Interest only
              </span>
              <span className="border-l border-[#f0b6df]/12 px-2 text-center first:border-l-0">
                No matching
              </span>
              <span className="border-l border-[#f0b6df]/12 px-2 text-center first:border-l-0">
                No checkout
              </span>
              <span className="sr-only">
                Membership links collect interest only. They do not create a
                dating profile, start matching, or open checkout.
              </span>
            </p>

            <div className="sr-only">
              {memberSignals.map((signal) => (
                <span key={signal.label}>
                  {signal.label}. {signal.detail}.
                </span>
              ))}
              {credibilityStats.map((stat) => (
                <span key={stat.label}>
                  {stat.value}. {stat.shortLabel}. {stat.label}.
                </span>
              ))}
              <span>The access path.</span>
              {trustFlow.map((step) => (
                <span key={step.label}>
                  {step.label}: {step.detail}
                </span>
              ))}
            </div>
          </div>

          <div className="pm-about-trust-grid grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-white/12 lg:pl-10">
            <div className="pm-lift-panel relative overflow-hidden border-y border-[#f0b6df]/16 bg-[#1a0d27]/46 py-5 sm:col-span-3 lg:col-span-1">
              <div
                className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#ef3e78]/16 to-transparent"
                aria-hidden="true"
              />
              <div className="relative mx-auto max-w-2xl px-4">
                <div className="pm-about-product-visual" aria-hidden="true">
                  <img
                    src="/assets/pinaymate-dark-app-collage.png"
                    alt=""
                    className="pm-about-product-image"
                  />
                  <span className="pm-about-product-glass pm-about-product-glass-top">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <span className="pm-about-product-glass pm-about-product-glass-mid">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <span className="pm-about-product-glass pm-about-product-glass-bottom">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                </div>
                <div className="sr-only">
                  Goal. Fit. Chat. App path. Intent. Review. Ready. Goal. Cue.
                  Fit. Intent. Review. Chat.
                </div>
              </div>
              <p className="sr-only">
                Visual connection flow showing intent, review, profile context,
                and conversation readiness before conversation.
              </p>
            </div>

            {trustPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <article
                  key={point.title}
                  className="pm-surface-hover border-l-2 border-[#f0b6df]/18 bg-[#1a0d27]/28 px-5 py-4 transition duration-200 hover:border-[#f0b6df]/45 hover:bg-[#21132f]/48"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ef3e78] text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="sr-only">
                        {point.title}
                      </h3>
                      <p className="sr-only">
                        Step {index + 1}
                      </p>
                      <div className="pm-about-trust-chip" aria-hidden="true">
                        <span>{point.title}</span>
                        <span>
                          {index === 0
                            ? "Safer pace"
                            : index === 1
                              ? "Goals first"
                              : "Warm intro"}
                        </span>
                      </div>
                      <p className="sr-only">
                        <span className="sr-only">. {point.title}. {point.copy}</span>
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="pm-lift-panel border-y border-[#f0b6df]/18 bg-gradient-to-br from-[#2e1e5a]/42 via-[#21132f]/52 to-[#170f22] py-5 text-white sm:col-span-3 sm:py-6 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#170f22]/70 text-[#f0b6df]">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="sr-only">
                    Product promise
                    <span>. Promise</span>
                  </p>
                  <p className="text-xl font-lora font-bold">
                    Less noise. Better signals.
                    <span className="sr-only">
                      Less noise, more qualified intent.
                    </span>
                  </p>
                </div>
              </div>
              <p className="pm-feature-signal-strip mt-4 max-w-none" aria-hidden="true">
                <span>
                  <Sparkles className="h-5 w-5" />
                </span>
                <span>
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <span>
                  <HeartHandshake className="h-5 w-5" />
                </span>
              </p>
              <p className="sr-only">Intent. Review. Fit.</p>
              <p className="sr-only">
                Better signals before conversation.
                Every step is planned to help serious members understand fit,
                safety posture, and value before they choose to start a
                conversation in the app.
              </p>
              <p className="sr-only">
                Intent before chat
                <span className="sr-only">
                  . Better signals before conversation.
                </span>
              </p>
              <p className="pm-about-mini-chips mt-4" aria-hidden="true">
                <span>Intent</span>
                <span>Review</span>
                <span>Fit</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
