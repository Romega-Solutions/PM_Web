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
    copy: "The discovery flow prioritizes relationship goals, lifestyle, culture, and profile context instead of making photos carry the whole decision.",
    proofLabel: "Fit",
    proof: "Designed for clearer fit before members message.",
  },
  {
    icon: UserCheck,
    title: "Review",
    fullTitle: "Profile review cues",
    signal: "Review before reach",
    copy: "Verification labels are framed as review cues, not guarantees. Badges should appear only after the relevant email, profile, or ID/photo review step is approved.",
    proofLabel: "Careful",
    proof: "Clear safety language without overpromising.",
  },
  {
    icon: MessageCircleHeart,
    title: "Prompts",
    fullTitle: "Conversation prompts",
    signal: "Context before chat",
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

const featureIntroSignals = [
  { label: "Waitlist", icon: HeartHandshake },
  { label: "App flow", icon: UserCheck },
  { label: "No fake launch", icon: ShieldCheck },
];
const featureCardLabels = [
  ["Goals", "Culture", "Fit"],
  ["Review", "Cue", "Status"],
  ["Prompt", "Context", "Chat"],
];

const featureFlow = [
  {
    label: "Intent",
    icon: SlidersHorizontal,
    tone: "bg-[#ef3e78]/68",
    tags: ["Goals", "Fit"],
  },
  {
    label: "Review",
    icon: UserCheck,
    tone: "bg-[#8d69f6]/54",
    tags: ["Cue", "Status"],
  },
  {
    label: "Chat",
    icon: MessageCircleHeart,
    tone: "bg-[#5c83e9]/48",
    tags: ["Prompt", "Context"],
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#170f22] pt-20 pb-12 text-white sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ef3e78]/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#5c83e9]/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-grid min-h-11 w-28 place-items-center rounded-lg border border-[#f0b6df]/14 bg-[#2a1a44]/45 px-4 py-2 text-sm font-dm-sans-bold text-[#f3c7de]">
            <HeartHandshake className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Built for trust, not hype. Trust, not hype.</span>
          </div>

          <h2 className="mx-auto max-w-sm font-lora text-3xl font-bold leading-tight text-white sm:max-w-none sm:text-5xl">
            Clear now. App later.
            <span className="sr-only">
              Clear now. App-only later.
              A dating experience that explains what you can do now and what
              happens inside the app.
            </span>
          </h2>
          <p className="sr-only">
            Clear now. Careful later.
            No fake launch promises.
            PinayMate should feel premium because it is clear, careful, and
            honest. The public experience separates product direction from
            waitlist interest.
          </p>
          <div className="pm-feature-intro-orbit mx-auto mt-6" aria-hidden="true">
            {featureIntroSignals.map((signal) => {
              const Icon = signal.icon;

              return (
                <span key={signal.label}>
                  <Icon className="h-5 w-5" />
                </span>
              );
            })}
          </div>
          <div className="sr-only">
            {featureIntroSignals.map((signal) => (
              <span key={signal.label}>{signal.label}</span>
            ))}
          </div>
        </div>

        <div className="pm-lift-panel mx-auto mt-10 max-w-5xl border-y border-[#f0b6df]/14 bg-[#1a0d27]/42 py-5">
          <div className="grid gap-5 px-4 sm:px-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div className="pm-feature-product-visual" aria-hidden="true">
              <img
                src="/assets/pinaymate-dark-app-collage.png"
                alt=""
                className="pm-feature-product-image"
              />
              <span className="pm-feature-product-chip pm-feature-product-chip-a">
                <SlidersHorizontal className="h-5 w-5" />
              </span>
              <span className="pm-feature-product-chip pm-feature-product-chip-b">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="pm-feature-product-chip pm-feature-product-chip-c">
                <MessageCircleHeart className="h-5 w-5" />
              </span>
            </div>

            <div className="pm-feature-flow-grid grid gap-3 sm:grid-cols-3 sm:gap-4">
              {featureFlow.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.label}
                    className="pm-feature-path-card"
                  >
                    <div className="flex items-center justify-center">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${step.tone} text-white sm:h-10 sm:w-10`}
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <span className="sr-only">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="pm-feature-flow-visual pm-feature-flow-strip mt-3 sm:mt-5" aria-hidden="true">
                      <span>
                        <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                      </span>
                    </div>
                    <span className="pm-feature-path-tags mt-3" aria-hidden="true">
                      {step.tags.map((tag) => (
                        <span key={`${step.label}-${tag}`}>{tag}</span>
                      ))}
                    </span>
                    <span className="sr-only">
                      {step.label}
                    </span>
                    <span className="sr-only">
                      Goal. Cue. Fit. Signal. Path.
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sr-only">
            Goals. Review. Chat.
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="pm-surface-hover group flex min-h-full flex-col border-y border-[#f0b6df]/14 bg-[#1a0d27]/48 px-4 py-5 transition duration-200 hover:border-[#f0b6df]/32 hover:bg-[#21132f]/62 sm:px-5 sm:py-6 lg:border-l lg:border-y-0 lg:first:border-l-0"
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
                  <div className="pm-feature-card-visual mt-5" aria-hidden="true">
                    <span className="pm-feature-card-visual-main">
                      <Icon className="h-8 w-8" />
                    </span>
                    <span className="pm-feature-card-visual-row">
                      <span>
                        <SlidersHorizontal className="h-4 w-4" />
                      </span>
                      <span>
                        <ShieldCheck className="h-4 w-4" />
                      </span>
                      <span>
                        <MessageCircleHeart className="h-4 w-4" />
                      </span>
                    </span>
                  </div>
                  <div className="sr-only">
                    {featureCardLabels[index].map((label) => (
                      <span key={`${feature.title}-${label}`}>{label}</span>
                    ))}
                    <span>Intent. Care. App cue. App-only. Staged.</span>
                  </div>
                  <div className="pm-feature-card-route mt-4" aria-hidden="true">
                    <span>
                      <SlidersHorizontal className="h-4 w-4 text-[#ffe8f1]" />
                    </span>
                    <span>
                      <ShieldCheck className="h-4 w-4 text-[#f6d0f1]" />
                    </span>
                    <span>
                      <CheckCircle2 className="h-4 w-4 text-[#22a574]" />
                    </span>
                  </div>
                  <p className="sr-only">
                    {feature.signal}. {feature.copy}. {feature.proofLabel}. {feature.proof}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="pm-lift-panel mt-10 border-y border-[#f0b6df]/14 bg-gradient-to-br from-[#21132f]/58 via-[#170f22] to-[#120a1b] py-6 text-white sm:py-8 lg:py-10">
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
              <div className="pm-feature-signal-strip mt-5 max-w-sm" aria-hidden="true">
                <span>
                  <MessageCircleHeart className="h-5 w-5" />
                </span>
                <span>
                  <UserCheck className="h-5 w-5" />
                </span>
                <span>
                  <ShieldCheck className="h-5 w-5" />
                </span>
              </div>
              <div className="sr-only">
                Report. Review. Privacy.
              </div>
              <p className="sr-only">
                Review paths
                Moderation, review, and privacy belong in the product story.
                The public story should help people understand moderation,
                review, and privacy expectations before they join the
                waitlist.
              </p>
              <p className="pm-safety-product-strip mt-4 text-xs font-dm-sans-bold text-[#f6d0f1]">
                <span className="sr-only rounded-lg border border-[#f0b6df]/14">
                  Design contract marker
                </span>
                <span className="pm-safety-product-strip-node">
                  <UserCheck className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Review paths</span>
                </span>
                <span className="pm-safety-product-strip-node pm-safety-product-strip-node-shield">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Not guarantees</span>
                </span>
                <span className="pm-safety-product-strip-node pm-safety-product-strip-node-check">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">No background checks</span>
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

            <div className="grid gap-3">
              <div className="pm-safety-product-visual" aria-hidden="true">
                <img
                  src="/assets/pinaymate-dark-app-collage.png"
                  alt=""
                  className="pm-safety-product-image"
                />
                <span className="pm-safety-product-core">
                  <ShieldCheck className="h-8 w-8" />
                </span>
                <span className="pm-safety-product-node pm-safety-product-node-a">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <span className="pm-safety-product-node pm-safety-product-node-b">
                  <UserCheck className="h-5 w-5" />
                </span>
                <span className="pm-safety-product-node pm-safety-product-node-c">
                  <MessageCircleHeart className="h-5 w-5" />
                </span>
                <span className="pm-safety-product-node pm-safety-product-node-d">
                  <ShieldCheck className="h-5 w-5" />
                </span>
              </div>
              <div className="sr-only">
                {safetyDashboard.map((item) => (
                  <span key={item.label}>
                    {item.label}. {item.value}.
                  </span>
                ))}
              </div>

              <div className="sr-only">
                {safetyItems.map((item) => (
                  <span key={item.label}>
                  <span className="sr-only">
                    {item.label}
                  </span>
                  <span className="sr-only">. {item.detail}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pm-safety-expectation-band mt-8">
            {safetyExpectations.map((item, index) => {
              const Icon =
                index === 0 ? MessageCircleHeart : index === 1 ? UserCheck : ShieldCheck;

              return (
              <article
                key={item.title}
                className="pm-safety-expectation-node"
              >
                <span className="pm-safety-expectation-icon" aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="pm-safety-expectation-meter" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                <p className="sr-only">
                  {item.title}
                  <span>. {item.fullTitle}</span>
                </p>
                <p className="sr-only">
                  {item.fullTitle}
                  <span>{item.copy}</span>
                </p>
              </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
