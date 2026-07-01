import {
  CheckCircle2,
  HeartHandshake,
  MessageCircleHeart,
  ShieldCheck,
  SlidersHorizontal,
  UserCheck,
} from "lucide-react";
import { launchEmailLinks } from "../../lib/launchEmailLinks";

const features = [
  {
    icon: SlidersHorizontal,
    title: "Discovery",
    fullTitle: "Preference-led discovery",
    signal: "Goals before photos",
    visual: ["w-5/6", "w-2/3", "w-3/4"],
    copy: "The discovery flow prioritizes relationship goals, lifestyle, culture, and profile context instead of making photos carry the whole decision.",
    proofLabel: "Fit",
    proof: "Designed for clearer fit before members message.",
  },
  {
    icon: UserCheck,
    title: "Review",
    fullTitle: "Profile review cues",
    signal: "Review before reach",
    visual: ["w-2/3", "w-4/5", "w-1/2"],
    copy: "Verification labels are framed as review cues, not guarantees. Badges should appear only after the relevant email, profile, or ID/photo review step is approved.",
    proofLabel: "Careful",
    proof: "Clear safety language without overpromising.",
  },
  {
    icon: MessageCircleHeart,
    title: "Prompts",
    fullTitle: "Conversation prompts",
    signal: "Context before chat",
    visual: ["w-3/4", "w-1/2", "w-5/6"],
    copy: "Messaging previews focus on respectful openers and shared values so first contact can feel more intentional when chat opens.",
    proofLabel: "App flow",
    proof: "Messaging stays inside the app account flow.",
  },
];

const safetyItems = [
  {
    label: "18+",
    detail: "Age-gated 18+ positioning",
  },
  {
    label: "Review",
    detail: "Profile and photo review path",
  },
  {
    label: "Report",
    detail: "Report and moderation path planned",
  },
  {
    label: "Privacy",
    detail: "Privacy-aware onboarding copy",
  },
];

const safetyExpectations = [
  {
    title: "Reach",
    fullTitle: "Respectful reach",
    copy: "Member discovery should favor clear intent and profile context before chat access.",
  },
  {
    title: "Language",
    fullTitle: "Review language",
    copy: "Safety labels stay framed as review status, not identity guarantees or background checks.",
  },
  {
    title: "Private",
    fullTitle: "Private waitlist",
    copy: "Waitlist interest does not publish a profile or expose personal dating details.",
  },
];

const safetyDashboard = [
  {
    label: "Report",
    value: "Fast route",
    tone: "bg-[#ef3e78]",
  },
  {
    label: "Review",
    value: "Status cue",
    tone: "bg-[#8d69f6]",
  },
  {
    label: "Privacy",
    value: "App control",
    tone: "bg-[#5c83e9]",
  },
];

const featureIntroSignals = ["Waitlist", "App flow", "No fake launch"];

const featureFlow = [
  {
    label: "Intent",
    icon: SlidersHorizontal,
    tone: "bg-[#ef3e78]/68",
    bars: ["w-4/5", "w-2/3"],
  },
  {
    label: "Review",
    icon: UserCheck,
    tone: "bg-[#8d69f6]/54",
    bars: ["w-3/4", "w-5/6"],
  },
  {
    label: "Chat",
    icon: MessageCircleHeart,
    tone: "bg-[#5c83e9]/48",
    bars: ["w-5/6", "w-1/2"],
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#170f22] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ef3e78]/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#5c83e9]/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#f0b6df]/14 bg-[#2a1a44]/45 px-4 py-2 text-sm font-dm-sans-bold text-[#f3c7de]">
            <HeartHandshake className="h-4 w-4" aria-hidden="true" />
            <span className="grid w-28 grid-cols-3 gap-1.5" aria-hidden="true">
              <span className="h-1.5 rounded-lg bg-[#ef3e78]/58" />
              <span className="h-1.5 rounded-lg bg-[#8d69f6]/40" />
              <span className="h-1.5 rounded-lg bg-[#5c83e9]/32" />
            </span>
            <span className="sr-only">Trust, not hype. Built for trust, not hype</span>
          </div>

          <h2 className="font-lora text-4xl font-bold leading-tight text-white sm:text-5xl">
            Clear now. App-only later.
            <span className="sr-only">
              A dating experience that explains what you can do now and what
              happens inside the app.
            </span>
          </h2>
          <p className="mt-5 inline-flex min-h-10 items-center gap-2 border-l-2 border-[#f0b6df]/18 px-3 py-1 text-xs font-dm-sans-bold text-[#d7c7ed]">
            <span className="grid grid-cols-3 gap-1.5" aria-hidden="true">
              <span className="h-1.5 w-8 rounded-lg bg-[#ef3e78]/46" />
              <span className="h-1.5 w-8 rounded-lg bg-[#8d69f6]/34" />
              <span className="h-1.5 w-8 rounded-lg bg-[#5c83e9]/28" />
            </span>
            <span className="sr-only">
              No fake launch promises.
              Clear now. Careful later.
              PinayMate should feel premium because it is clear, careful, and
              honest. The public experience separates product direction from
              waitlist interest.
            </span>
          </p>
          <div className="mx-auto mt-6 grid max-w-xl grid-cols-3 border-y border-[#f0b6df]/12 py-3">
            {featureIntroSignals.map((signal) => (
              <span
                key={signal}
                className="border-l border-[#f0b6df]/12 px-3 py-1 text-xs font-dm-sans-bold text-[#f3c7de] first:border-l-0"
              >
                <span
                  className="mx-auto block h-1.5 w-12 rounded-lg bg-[#f0b6df]/30"
                  aria-hidden="true"
                />
                <span className="sr-only">
                {signal}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-5xl border-y border-[#f0b6df]/14 bg-[#1a0d27]/42 py-5">
          <div className="grid gap-4 px-4 sm:grid-cols-3 sm:px-5">
            {featureFlow.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.label}
                  className="relative min-h-32 border-l-2 border-[#f0b6df]/16 bg-[#120a1b]/45 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${step.tone} text-white`}
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-dm-sans-bold text-[#f3c7de]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2" aria-hidden="true">
                    <span className="h-8 rounded-lg bg-[#ef3e78]/20" />
                    <span className="h-8 rounded-lg bg-[#8d69f6]/18" />
                    <span className="h-8 rounded-lg bg-[#5c83e9]/16" />
                  </div>
                  <div className="mt-4 space-y-2" aria-hidden="true">
                    {step.bars.map((bar, barIndex) => (
                      <span
                        key={`${step.label}-${barIndex}`}
                        className={`block h-1.5 rounded-lg bg-[#f0b6df]/24 ${bar}`}
                      />
                    ))}
                  </div>
                  <span className="sr-only">{step.label}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 px-4 sm:px-5" aria-hidden="true">
            <span className="h-2 rounded-lg bg-[#ef3e78]/72" />
            <span className="h-2 rounded-lg bg-[#8d69f6]/52" />
            <span className="h-2 rounded-lg bg-[#5c83e9]/42" />
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group flex min-h-full flex-col border-y border-[#f0b6df]/14 bg-[#1a0d27]/48 px-4 py-5 transition duration-200 hover:border-[#f0b6df]/32 hover:bg-[#21132f]/62 sm:px-5 sm:py-6 lg:border-l lg:border-y-0 lg:first:border-l-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ef3e78] text-white shadow-lg shadow-[#ef3e78]/15">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="border-l-2 border-[#f0b6df]/18 px-3 py-1 text-xs font-dm-sans-bold text-[#f3c7de]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <div className="mt-6 flex flex-1 flex-col">
                  <h3 className="font-lora text-2xl font-bold leading-tight text-white">
                    {feature.title}
                    <span className="sr-only">. {feature.fullTitle}</span>
                  </h3>
                  <div
                    className="mt-5 border-y border-[#f0b6df]/12 bg-[#120a1b]/38 py-4"
                    aria-hidden="true"
                  >
                    <div className="grid grid-cols-[3.25rem_1fr] gap-3">
                      <div className="relative h-28 overflow-hidden rounded-lg bg-gradient-to-br from-[#ef3e78]/88 to-[#8d69f6]/80 p-2">
                        <div className="h-8 rounded-lg bg-[#ffe8f1]/18" />
                        <div className="mt-2 grid grid-cols-2 gap-1.5">
                          <span className="h-5 rounded-lg bg-[#ffe8f1]/18" />
                          <span className="h-5 rounded-lg bg-[#ffe8f1]/12" />
                        </div>
                        <div className="absolute inset-x-2 bottom-2 h-2 rounded-lg bg-[#ffe8f1]/34" />
                      </div>
                      <div className="self-center">
                        <div className="mb-3 grid grid-cols-3 gap-2">
                          <span className="h-8 rounded-lg bg-[#ef3e78]/22" />
                          <span className="h-8 rounded-lg bg-[#8d69f6]/22" />
                          <span className="h-8 rounded-lg bg-[#5c83e9]/18" />
                        </div>
                        <div className="space-y-2">
                        {feature.visual.map((bar, barIndex) => (
                          <span
                            key={`${feature.title}-${barIndex}`}
                            className={`block h-2 rounded-lg bg-[#f0b6df]/28 ${bar}`}
                          />
                        ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 grid grid-cols-3 gap-2" aria-hidden="true">
                    <span className="h-1.5 rounded-lg bg-[#ef3e78]/55" />
                    <span className="h-1.5 rounded-lg bg-[#8d69f6]/45" />
                    <span className="h-1.5 rounded-lg bg-[#5c83e9]/35" />
                  </p>
                  <p className="sr-only">
                    {feature.signal}
                    <span className="sr-only">. {feature.copy}</span>
                  </p>
                  <p className="mt-5 inline-flex items-start gap-2 border-t border-[#f0b6df]/12 pt-4 text-sm font-dm-sans-semibold leading-6 text-[#f0b6df]">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span
                      className="mt-1 block h-1.5 w-16 rounded-lg bg-[#f0b6df]/30"
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                      {feature.proofLabel}
                      <span className="sr-only">. {feature.proof}</span>
                    </span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 border-y border-[#f0b6df]/14 bg-gradient-to-br from-[#21132f]/58 via-[#170f22] to-[#120a1b] py-6 text-white sm:py-8 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ef3e78]">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-lora text-3xl font-bold sm:text-4xl">
                Safety in the product.
                <span className="sr-only">
                  Trust and safety is part of the product, not a footer note.
                </span>
              </h3>
              <div className="mt-5 grid grid-cols-3 gap-2" aria-hidden="true">
                <span className="h-9 rounded-lg bg-[#ef3e78]/24" />
                <span className="h-9 rounded-lg bg-[#8d69f6]/22" />
                <span className="h-9 rounded-lg bg-[#5c83e9]/18" />
              </div>
              <p className="mt-4 inline-flex min-h-9 items-center border-l-2 border-[#f0b6df]/18 px-3 py-1 text-xs font-dm-sans-bold text-[#f3c7de]">
                <span
                  className="h-1.5 w-20 rounded-lg bg-[#f0b6df]/30"
                  aria-hidden="true"
                />
                <span className="sr-only">
                  Review paths
                </span>
                <span className="sr-only">
                  Moderation, review, and privacy belong in the product story.
                  The public story should help people understand moderation,
                  review, and privacy expectations before they join the
                  waitlist.
                </span>
              </p>
              <p className="mt-4 grid border-y border-[#f0b6df]/12 py-2 text-xs font-dm-sans-bold text-[#f6d0f1] sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0 lg:border-l-0 lg:border-t lg:first:border-t-0 xl:border-l xl:border-t-0 xl:first:border-l-0">
                  <span
                    className="mx-auto block h-1.5 w-12 rounded-lg bg-[#ef3e78]/38"
                    aria-hidden="true"
                  />
                  <span className="sr-only">
                  Review paths
                  </span>
                </span>
                <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0 lg:border-l-0 lg:border-t lg:first:border-t-0 xl:border-l xl:border-t-0 xl:first:border-l-0">
                  <span
                    className="mx-auto block h-1.5 w-12 rounded-lg bg-[#8d69f6]/36"
                    aria-hidden="true"
                  />
                  <span className="sr-only">
                  Not guarantees
                  </span>
                </span>
                <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0 lg:border-l-0 lg:border-t lg:first:border-t-0 xl:border-l xl:border-t-0 xl:first:border-l-0">
                  <span
                    className="mx-auto block h-1.5 w-12 rounded-lg bg-[#5c83e9]/32"
                    aria-hidden="true"
                  />
                  <span className="sr-only">
                  No background checks
                  </span>
                </span>
                <span className="sr-only">
                  These are safety controls and review paths, not guarantees,
                  background checks, or promises that every member is safe.
                </span>
              </p>
              <a
                href={launchEmailLinks.safetyQuestion}
                aria-label="Email PinayMate support about trust and safety"
                className="mt-4 inline-flex min-h-12 cursor-pointer items-center justify-center rounded-lg bg-[#ef3e78] px-5 py-3 text-sm font-dm-sans-bold text-white shadow-lg shadow-[#ef3e78]/20 transition duration-200 hover:bg-[#d7346b] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
              >
                Ask safety
                <span className="sr-only">. Ask a safety question</span>
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="border-y border-[#f0b6df]/12 bg-[#120a1b]/38 py-4 sm:col-span-2">
                <div className="grid gap-3 sm:grid-cols-3">
                  {safetyDashboard.map((item) => (
                    <div
                      key={item.label}
                      className="border-l border-[#f0b6df]/12 px-3 py-1 first:border-l-0"
                    >
                      <div
                        className={`h-2 rounded-lg ${item.tone}`}
                        aria-hidden="true"
                      />
                      <p className="mt-3 text-sm font-dm-sans-bold text-white">
                        <span
                          className="block h-1.5 w-12 rounded-lg bg-[#f0b6df]/28"
                          aria-hidden="true"
                        />
                        <span className="sr-only">
                        {item.label}
                        </span>
                      </p>
                      <p className="mt-1 text-xs font-dm-sans-bold text-[#f6d0f1]">
                        <span
                          className="block h-1.5 w-16 rounded-lg bg-[#f0b6df]/20"
                          aria-hidden="true"
                        />
                        <span className="sr-only">
                        {item.value}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {safetyItems.map((item) => (
                <div
                  key={item.label}
                  className="min-h-14 border-l-2 border-[#f0b6df]/18 bg-[#2e1e5a]/22 px-3 py-3 text-center text-xs font-dm-sans-bold text-[#f8f5ff]"
                >
                  <CheckCircle2
                    className="mx-auto h-5 w-5 shrink-0 text-[#22a574]"
                    aria-hidden="true"
                  />
                  <span
                    className="mx-auto mt-3 block h-1.5 w-10 rounded-lg bg-[#f0b6df]/26"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{item.label}</span>
                  <span className="sr-only">. {item.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid border-y border-[#f0b6df]/12 py-3 lg:grid-cols-3">
            {safetyExpectations.map((item) => (
              <article
                key={item.title}
                className="border-l border-[#f0b6df]/12 px-4 py-2 first:border-l-0"
              >
                <p className="font-dm-sans-bold text-white">
                  <span
                    className="block h-1.5 w-14 rounded-lg bg-[#f0b6df]/28"
                    aria-hidden="true"
                  />
                  <span className="sr-only">
                  {item.title}
                  </span>
                  <span className="sr-only">. {item.fullTitle}</span>
                </p>
                <p className="mt-2 h-1.5 rounded-lg bg-[#ef3e78]/35">
                  <span className="sr-only">{item.copy}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
