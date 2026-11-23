import {
  IconAdjustmentsHorizontal,
  IconArrowRight,
  IconMessageCircleHeart,
  IconShieldCheck,
} from "@tabler/icons-react";

const benefits = [
  {
    icon: IconAdjustmentsHorizontal,
    title: "Say what you're looking for",
    copy: "Your profile leads with relationship goals, family plans and lifestyle, so you meet people who want the same thing.",
    image: "/images/intent-smile-800.webp",
    alt: "A couple smiling together by the water",
  },
  {
    icon: IconShieldCheck,
    title: "Know more before you chat",
    copy: "Profiles go through a review step. A review badge appears only after that check is approved.",
    image: "/images/review-together-800.webp",
    alt: "A couple smiling at a phone together on a sofa",
  },
  {
    icon: IconMessageCircleHeart,
    title: "Start conversations easily",
    copy: "Prompts built from shared interests give you a warm first message.",
    image: "/images/conversation-coffee-800.webp",
    alt: "Two people holding hands across a café table",
  },
];

const About = () => {
  return (
    <section id="about" className="pm-light relative">
      <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-6 lg:px-8 lg:py-24 xl:px-16">
        <h2 className="pm-section-title pm-reveal mb-8 max-w-[14em] text-plum">
          What PinayMate gives you
        </h2>

        <div className="grid gap-[18px] lg:grid-cols-[1.25fr_1fr_1fr]">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article key={benefit.title} className="pm-tile">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  width={800}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-5 lg:p-6">
                  <span className="pm-icon-tile mb-3" aria-hidden="true">
                    <Icon size={18} stroke={1.75} />
                  </span>
                  <h3 className="font-lora-medium text-[22px] leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-[#f6e3f2]">
                    {benefit.copy}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <a
            href="#pricing"
            aria-describedby="about-membership-note"
            className="pm-btn pm-btn-quiet self-start"
          >
            Review planned memberships
            <IconArrowRight size={18} aria-hidden="true" />
          </a>
          <p
            id="about-membership-note"
            className="max-w-xl text-sm leading-6 text-mauve"
          >
            Membership links collect interest only. They do not create a
            dating profile, start matching, or open checkout.
          </p>
        </div>
      </div>

      <div className="pm-city">
        <img
          src="/images/manila-night-800.webp"
          srcSet="/images/manila-night-800.webp 800w, /images/manila-night-1600.webp 1600w"
          sizes="100vw"
          width={1600}
          height={900}
          alt="Manila skyline at night"
          loading="lazy"
          decoding="async"
        />
        <div className="mx-auto w-full max-w-[1360px] px-5 py-10 sm:px-6 lg:px-8 lg:py-14 xl:px-16">
          <p className="pm-reveal max-w-[14em] font-lora-medium text-[26px] leading-tight text-balance lg:text-4xl">
            Made for Filipina and foreigner introductions.
          </p>
          <p className="pm-reveal mt-2 max-w-md text-base text-blush">
            Clear about location, culture and expectations from the start.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
