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
    title: "Preference-led discovery",
    signal: "Goals before photos",
    visual: ["w-5/6", "w-2/3", "w-3/4"],
    copy: "The discovery flow prioritizes relationship goals, lifestyle, culture, and profile context instead of making photos carry the whole decision.",
    proof: "Designed for clearer fit before members message.",
  },
  {
    icon: UserCheck,
    title: "Profile review cues",
    signal: "Review before reach",
    visual: ["w-2/3", "w-4/5", "w-1/2"],
    copy: "Verification labels are framed as review cues, not guarantees. Badges should appear only after the relevant email, profile, or ID/photo review step is approved.",
    proof: "Clear safety language without overpromising.",
  },
  {
    icon: MessageCircleHeart,
    title: "Conversation prompts",
    signal: "Context before chat",
    visual: ["w-3/4", "w-1/2", "w-5/6"],
    copy: "Messaging previews focus on respectful openers and shared values so first contact can feel more intentional when chat opens.",
    proof: "Messaging stays inside the app account flow.",
  },
];

const safetyItems = [
  "Age-gated 18+ positioning",
  "Profile and photo review path",
  "Report and moderation path planned",
  "Privacy-aware onboarding copy",
];

const safetyExpectations = [
  {
    title: "Respectful reach",
    copy: "Member discovery should favor clear intent and profile context before chat access.",
  },
  {
    title: "Review language",
    copy: "Safety labels stay framed as review status, not identity guarantees or background checks.",
  },
  {
    title: "Private waitlist",
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
          <div className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#f0b6df]/18 bg-[#2e1e5a]/55 px-4 py-2 text-sm font-dm-sans-bold text-[#f3c7de] shadow-sm">
            <HeartHandshake className="h-4 w-4" aria-hidden="true" />
            Built for trust, not hype
          </div>

          <h2 className="font-lora text-4xl font-bold leading-tight text-white sm:text-5xl">
            Clear now. App-only later.
            <span className="sr-only">
              A dating experience that explains what you can do now and what
              happens inside the app.
            </span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#d7c7ed]">
            No fake launch promises.
            <span className="sr-only">
              Clear now. Careful later.
              PinayMate should feel premium because it is clear, careful, and
              honest. The public experience separates product direction from
              waitlist interest.
            </span>
          </p>
          <div className="mx-auto mt-6 grid max-w-xl gap-2 sm:grid-cols-3">
            {featureIntroSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/38 px-3 py-2 text-xs font-dm-sans-bold uppercase tracking-[0.12em] text-[#f3c7de]"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group flex min-h-full flex-col rounded-lg border border-[#f0b6df]/14 bg-[#1a0d27]/78 p-5 shadow-xl shadow-black/15 transition duration-200 hover:border-[#f0b6df]/32 hover:bg-[#21132f]/92 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ef3e78] text-white shadow-lg shadow-[#ef3e78]/15">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/55 px-3 py-1 text-xs font-dm-sans-bold uppercase tracking-[0.16em] text-[#f3c7de]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <div className="mt-6 flex flex-1 flex-col">
                  <h3 className="font-lora text-2xl font-bold leading-tight text-white">
                    {feature.title}
                  </h3>
                  <div
                    className="mt-5 rounded-lg border border-[#f0b6df]/12 bg-[#120a1b]/64 p-4"
                    aria-hidden="true"
                  >
                    <div className="grid grid-cols-[2.75rem_1fr] gap-3">
                      <div className="h-24 rounded-lg bg-gradient-to-br from-[#ef3e78]/88 to-[#8d69f6]/80" />
                      <div className="space-y-2 self-center">
                        {feature.visual.map((bar, barIndex) => (
                          <span
                            key={`${feature.title}-${barIndex}`}
                            className={`block h-2 rounded-lg bg-[#f0b6df]/28 ${bar}`}
                          />
                        ))}
                        <div className="grid grid-cols-3 gap-2 pt-2">
                          <span className="h-7 rounded-lg bg-[#ef3e78]/24" />
                          <span className="h-7 rounded-lg bg-[#8d69f6]/24" />
                          <span className="h-7 rounded-lg bg-[#5c83e9]/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 rounded-lg border border-[#f0b6df]/12 bg-[#2e1e5a]/38 px-4 py-3 text-sm font-dm-sans-bold uppercase tracking-[0.12em] text-[#f6d0f1]">
                    {feature.signal}
                    <span className="sr-only">. {feature.copy}</span>
                  </p>
                  <p className="mt-5 inline-flex items-start gap-2 border-t border-[#f0b6df]/12 pt-4 text-sm font-dm-sans-semibold leading-6 text-[#f0b6df]">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{feature.proof}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-lg border border-[#f0b6df]/14 bg-gradient-to-br from-[#21132f]/92 via-[#170f22] to-[#120a1b] p-6 text-white shadow-xl shadow-[#2e1e5a]/18 sm:p-8 lg:p-10">
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
              <p className="mt-4 inline-flex min-h-9 items-center rounded-lg border border-[#f0b6df]/14 bg-[#120a1b]/38 px-3 py-2 text-xs font-dm-sans-bold uppercase tracking-[0.12em] text-[#f3c7de]">
                Review paths
                <span className="sr-only">
                  Moderation, review, and privacy belong in the product story.
                  The public story should help people understand moderation,
                  review, and privacy expectations before they join the
                  waitlist.
                </span>
              </p>
              <p className="mt-4 grid gap-2 text-xs font-dm-sans-bold uppercase tracking-[0.12em] text-[#f6d0f1] sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <span className="rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/55 px-3 py-2 text-center">
                  Review paths
                </span>
                <span className="rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/55 px-3 py-2 text-center">
                  Not guarantees
                </span>
                <span className="rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/55 px-3 py-2 text-center">
                  No background checks
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
                Ask a safety question
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-[#f0b6df]/14 bg-[#120a1b]/62 p-4 sm:col-span-2">
                <div className="grid gap-3 sm:grid-cols-3">
                  {safetyDashboard.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-[#f0b6df]/12 bg-[#2e1e5a]/42 p-3"
                    >
                      <div
                        className={`h-2 rounded-lg ${item.tone}`}
                        aria-hidden="true"
                      />
                      <p className="mt-3 text-sm font-dm-sans-bold text-white">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs font-dm-sans-bold uppercase tracking-[0.12em] text-[#f6d0f1]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {safetyItems.map((item) => (
                <div
                  key={item}
                  className="flex min-h-14 items-center gap-3 rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/55 px-4 py-3 text-sm font-dm-sans-semibold text-[#f8f5ff] shadow-sm shadow-black/10"
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-[#22a574]"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {safetyExpectations.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/50 p-4"
              >
                <p className="font-dm-sans-bold text-white">{item.title}</p>
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
