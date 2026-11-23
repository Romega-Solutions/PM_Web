import {
  IconArrowRight,
  IconCircleCheck,
  IconHeartFilled,
  IconMessageCircleHeart,
  IconShieldCheck,
  IconUserHeart,
} from "@tabler/icons-react";

const launchState = [
  "Waitlist only",
  "No profile today",
  "No matching today",
  "No payment today",
];

const previewRows = [
  {
    icon: IconUserHeart,
    label: "Looking for",
    value: "A serious relationship",
  },
  {
    icon: IconShieldCheck,
    label: "Profile",
    value: "Reviewed before matching",
  },
  {
    icon: IconMessageCircleHeart,
    label: "First message",
    value: "Start with a prompt",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="pm-light relative overflow-hidden pt-24 sm:pt-28"
    >
      <div className="relative mx-auto grid max-w-[1360px] items-center gap-12 px-5 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pb-24 xl:px-16">
        <div className="max-w-2xl">
          <p className="pm-kicker pm-enter mb-4 flex items-center gap-2 text-[15px] font-dm-sans-semibold text-rosas">
            <span className="pm-diamond" aria-hidden="true" />
            Filipino-first dating, opening soon
          </p>

          <h1
            className="pm-enter font-lora-medium text-[2.5rem] leading-[1.08] tracking-[-0.022em] text-balance text-plum sm:text-6xl lg:text-[4rem]"
            style={{ animationDelay: "80ms" }}
          >
            Dating with intent, safety, and respect.
          </h1>

          <p
            className="pm-enter mt-5 max-w-xl text-lg leading-[1.55] text-mauve sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            A dating app for Filipinas and foreigners who want a real
            relationship. Join the waitlist and we&apos;ll tell you when it
            opens on your phone.
          </p>

          <div
            className="pm-enter mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#download"
              aria-describedby="hero-cta-note"
              className="pm-btn pm-btn-primary w-full focus-visible:outline-3 sm:w-auto"
            >
              Join the waitlist
              <IconArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#features" className="pm-btn pm-btn-quiet self-start focus-visible:outline-3 sm:self-auto">
              See how it works
            </a>
          </div>

          <ul
            className="pm-enter mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[15px] text-mauve"
            aria-label="What you are joining: current PinayMate access status"
            style={{ animationDelay: "320ms" }}
          >
            {launchState.map((state) => (
              <li key={state} className="flex items-center gap-1.5">
                <IconCircleCheck
                  size={17}
                  stroke={1.75}
                  className="shrink-0 text-ok"
                  aria-hidden="true"
                />
                {state}
              </li>
            ))}
          </ul>

          <p
            id="hero-cta-note"
            className="pm-enter mt-4 max-w-xl text-sm leading-6 text-mauve"
            style={{ animationDelay: "380ms" }}
          >
            Takes about a minute by email, with no profile created and
            no payment on this page. This website does not create a dating
            profile, start matching, open checkout, or collect payment.
          </p>
        </div>

        <div className="pm-hero-stage mx-auto w-full max-w-[520px] lg:ml-auto lg:mr-0">
          <div className="pm-mat" aria-hidden="true" />
          <div className="pm-arch">
            <img
              src="/images/hero-golden-hour-800.webp"
              srcSet="/images/hero-golden-hour-800.webp 800w, /images/hero-golden-hour-1600.webp 1600w"
              sizes="(min-width: 1024px) 420px, 86vw"
              width={800}
              height={1200}
              alt="A couple embracing in a field at golden hour"
              fetchPriority="high"
            />
          </div>
          <span className="pm-heart" aria-hidden="true">
            <IconHeartFilled size={24} />
          </span>

          <div className="pm-preview">
            <p className="text-[13px] font-dm-sans-semibold text-rosas">
              Product preview
            </p>
            <h2 className="mt-0.5 mb-2 font-lora-medium text-xl leading-tight text-plum">
              What your profile will show
            </h2>
            <ul>
              {previewRows.map((row) => {
                const Icon = row.icon;

                return (
                  <li
                    key={row.label}
                    className="flex items-center gap-3 border-t border-line py-2.5"
                  >
                    <span className="pm-icon-tile" aria-hidden="true">
                      <Icon size={18} stroke={1.75} />
                    </span>
                    <span>
                      <span className="block text-[13px] leading-tight text-mauve">
                        {row.label}
                      </span>
                      <span className="block font-dm-sans-semibold text-[15px] leading-snug text-plum">
                        {row.value}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
