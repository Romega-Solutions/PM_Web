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
    copy: "The discovery flow prioritizes relationship goals, lifestyle, culture, and profile context instead of making photos carry the whole decision.",
    proof: "Designed for clearer fit before members message.",
  },
  {
    icon: UserCheck,
    title: "Profile review cues",
    copy: "Verification labels are framed as review cues, not guarantees. Badges should appear only after the relevant email, profile, or ID/photo review step is approved.",
    proof: "Clear safety language without overpromising.",
  },
  {
    icon: MessageCircleHeart,
    title: "Conversation prompts",
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
          <div className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/12 bg-white/[0.07] px-4 py-2 text-sm font-dm-sans-bold text-[#f3c7de] shadow-sm">
            <HeartHandshake className="h-4 w-4" aria-hidden="true" />
            Built for trust, not hype
          </div>

          <h2 className="font-lora text-4xl font-bold leading-tight text-white sm:text-5xl">
            A dating experience that explains what you can do now and what
            happens inside the app.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#d7c7ed]">
            PinayMate should feel premium because it is clear, careful, and
            honest. The public experience separates product direction from
            waitlist interest.
          </p>
        </div>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/12">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="grid gap-5 py-7 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6 lg:grid-cols-[auto_0.7fr_1fr]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ef3e78] text-white shadow-lg shadow-[#ef3e78]/15">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <p className="text-xs font-dm-sans-bold uppercase tracking-[0.16em] text-[#f3c7de]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-lora text-2xl font-bold leading-tight text-white">
                    {feature.title}
                  </h3>
                </div>

                <div>
                  <p className="text-base leading-7 text-[#d7c7ed]">
                    {feature.copy}
                  </p>
                  <p className="mt-4 inline-flex items-start gap-2 text-sm font-dm-sans-semibold leading-6 text-[#f0b6df]">
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

        <div className="mt-10 rounded-lg bg-[#170f22] p-6 text-white shadow-2xl shadow-[#2e1e5a]/18 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ef3e78]">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-lora text-3xl font-bold sm:text-4xl">
                Trust and safety is part of the product, not a footer note.
              </h3>
              <p className="mt-4 text-base leading-7 text-[#e3dcf9]">
                The public story should help people understand moderation,
                review, and privacy expectations before they join the waitlist.
              </p>
              <p className="mt-4 rounded-lg border border-white/10 bg-white/8 p-4 text-sm leading-6 text-[#f6d0f1]">
                These are safety controls and review paths, not guarantees,
                background checks, or promises that every member is safe.
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
              {safetyItems.map((item) => (
                <div
                  key={item}
                  className="flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-white/8 px-4 py-3 text-sm font-dm-sans-semibold text-[#f8f5ff] shadow-sm shadow-black/10"
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
                className="rounded-lg border border-white/10 bg-white/[0.07] p-4"
              >
                <p className="font-dm-sans-bold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#d7c7ed]">
                  {item.copy}
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
