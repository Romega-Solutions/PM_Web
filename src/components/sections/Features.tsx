import {
  IconCamera,
  IconFlag,
  IconLock,
  IconMail,
  IconRating18Plus,
} from "@tabler/icons-react";
import { launchEmailLinks } from "../../lib/launchEmailLinks";

const steps = [
  {
    when: "Today",
    title: "Join the waitlist",
    copy: "Email and your phone type. About a minute.",
  },
  {
    when: "When access opens",
    title: "Get the app",
    copy: "We email you when PinayMate opens on iOS or Android.",
  },
  {
    when: "In the app",
    title: "Build your profile",
    copy: "Create a profile inside the app when access is available, then complete the review step.",
  },
  {
    when: "In the app",
    title: "Meet and message",
    copy: "Discover people who share your intent and start with a prompt.",
  },
];

const safetyItems = [
  { icon: IconRating18Plus, label: "18+ members only" },
  { icon: IconCamera, label: "Photo and profile review" },
  { icon: IconFlag, label: "Report and moderation tools" },
  { icon: IconLock, label: "We only ask for your email here" },
];

const Features = () => {
  return (
    <section id="features" className="relative">
      <div className="pm-light">
        <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-6 lg:px-8 lg:py-24 xl:px-16">
          <p className="pm-reveal mb-3 flex items-center gap-2 text-[15px] font-dm-sans-semibold text-rosas">
            <span className="pm-diamond" aria-hidden="true" />
            Built for trust, not hype
          </p>
          <h2 className="pm-section-title pm-reveal mb-8 text-plum">
            From waitlist to first conversation
          </h2>

          <ol className="pm-flow">
            {steps.map((step, index) => (
              <li key={step.title} className="pm-step">
                <span className="pm-step-n" aria-hidden="true">
                  {index + 1}
                </span>
                <span
                  className={`block text-[13px] font-dm-sans-semibold ${
                    index === 0 ? "text-rosas" : "text-mauve"
                  }`}
                >
                  {step.when}
                </span>
                <h3 className="mt-0.5 font-lora-semibold text-[19px] leading-snug text-plum">
                  {step.title}
                </h3>
                <p className="mt-1 text-[15px] leading-relaxed text-mauve">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="pm-dark pm-band">
        <div className="mx-auto grid max-w-[1360px] items-center gap-10 px-5 pt-20 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-[72px] lg:px-8 lg:py-28 xl:px-16">
          <div className="pm-band-photo aspect-[4/3] overflow-hidden rounded-[22px]">
            <img
              src="/images/trust-shoreline-800.webp"
              srcSet="/images/trust-shoreline-800.webp 800w, /images/trust-shoreline-1600.webp 1600w"
              sizes="(min-width: 1024px) 560px, 92vw"
              width={1600}
              height={1067}
              alt="A couple walking hand in hand along the shore"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="pm-section-title pm-reveal mb-6 text-white">
              Safety is built in, not added later
            </h2>
            <ul className="mb-6 grid gap-3">
              {safetyItems.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label} className="flex items-center gap-3 text-base">
                    <span className="pm-band-icon" aria-hidden="true">
                      <Icon size={19} stroke={1.75} />
                    </span>
                    {item.label}
                  </li>
                );
              })}
            </ul>
            <p className="pm-reveal mb-6 max-w-xl border-l-[3px] border-brand pl-3.5 text-sm leading-6 text-[#e9cfe4]">
              These are safety controls and review paths, not guarantees or
              background checks.{" "}
              Verification labels are framed as review cues.{" "}
              Safety labels stay framed as review status.
            </p>
            <a
              href={launchEmailLinks.safetyQuestion}
              aria-label="Email PinayMate support about trust and safety"
              className="pm-btn pm-btn-on-dark"
            >
              <IconMail size={18} stroke={1.75} aria-hidden="true" />
              Ask a safety question
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
