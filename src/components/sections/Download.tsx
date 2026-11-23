import { IconChevronDown, IconDeviceMobile } from "@tabler/icons-react";
import { launchEmailLinks } from "../../lib/launchEmailLinks";
import { WaitlistCaptureForm } from "../waitlist/WaitlistCaptureForm";

const privacyNotes = [
  "Send your platform preference and email only.",
  "Keep passwords, ID documents, payment details, precise location, and private profile information out of waitlist messages.",
  "Profile and verification details belong in the app.",
];

const waitlistSteps = [
  "You're on the list.",
  "We email you when your platform opens.",
  "You create your profile in the app.",
];

const waitlistLinks = [
  {
    href: launchEmailLinks.iosWaitlist,
    label: "Join iOS waitlist",
    ariaLabel:
      "Join the PinayMate iOS waitlist by email without creating an app account, dating profile, match request, or payment record",
  },
  {
    href: launchEmailLinks.androidWaitlist,
    label: "Join Android waitlist",
    ariaLabel:
      "Join the PinayMate Android waitlist by email without creating an app account, dating profile, match request, or payment record",
  },
];

const storeLinkStates = [
  { label: "App Store", detail: "Choose iOS when joining the waitlist." },
  { label: "Google Play", detail: "Choose Android when joining the waitlist." },
];

const Download = () => {
  return (
    <section id="download" className="pm-light border-t border-line">
      <div className="mx-auto grid max-w-[1360px] items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[72px] lg:px-8 lg:py-24 xl:px-16">
        <div className="pm-join-mat mx-auto w-full max-w-[480px]">
          <span className="pm-mat" aria-hidden="true" />
          <div className="pm-join-photo">
            <img
              src="/images/evening-string-lights-800.webp"
              srcSet="/images/evening-string-lights-800.webp 800w, /images/evening-string-lights-1200.webp 1200w"
              sizes="(min-width: 1024px) 440px, 88vw"
              width={800}
              height={1200}
              alt="A couple under string lights in the evening"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="min-w-0 max-w-xl">
          <h2 className="pm-section-title pm-reveal text-plum">
            Be first when PinayMate opens on your phone
          </h2>
          <p className="pm-reveal mt-3 text-base text-mauve sm:text-lg">
            Share your email and phone type. That&apos;s all we need.
          </p>

          <WaitlistCaptureForm
            details={
              <details className="pm-disclosure group mt-5">
                <summary className="flex min-h-12 cursor-pointer list-none items-center gap-2 font-dm-sans-semibold text-plum">
                  Prefer email, or want the details?
                  <IconChevronDown
                    size={18}
                    stroke={1.75}
                    className="text-rosas transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </summary>
    
                <div className="grid gap-6 pb-4 text-sm leading-6 text-mauve">
                  <div>
                    <h3 className="font-dm-sans-semibold text-base text-plum">
                      Email option
                    </h3>
                    <p className="mt-1">
                      Choose your platform by email if you prefer using your mail
                      app or want a direct support path.
                    </p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {waitlistLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          aria-label={link.ariaLabel}
                          aria-describedby="waitlist-email-note"
                          className="pm-btn pm-btn-outline w-full focus-visible:outline-3"
                        >
                          <IconDeviceMobile size={18} stroke={1.75} aria-hidden="true" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                    <p
                      id="waitlist-email-note"
                      className="mt-3 text-[13px] leading-5"
                      aria-live="polite"
                    >
                      Opens your email app with a platform-only waitlist message. No
                      app account, dating profile, match request, matching session,
                      checkout, payment record, precise location, or matching data is
                      created from this page. The form above is the primary waitlist
                      path; email stays available as another direct option.
                    </p>
                  </div>
    
                  <div>
                    <h3 className="font-dm-sans-semibold text-base text-plum">
                      Send only what the waitlist needs
                    </h3>
                    <ul className="mt-2 grid gap-1.5 border-l-2 border-[#f0b6df] pl-4">
                      {privacyNotes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </div>
    
                  <dl className="grid gap-3">
                    <div className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
                      <dt className="font-dm-sans-semibold text-plum">Waitlist</dt>
                      <dd>
                        It is a waitlist signal, not a live membership, app account,
                        dating profile, match request, matching session, checkout
                        step, or payment record.
                      </dd>
                    </div>
                    <div className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
                      <dt className="font-dm-sans-semibold text-plum">Access</dt>
                      <dd>
                        Store links, social channels, and community invitations
                        will appear when each channel is available for members.
                      </dd>
                    </div>
                    <div className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
                      <dt className="font-dm-sans-semibold text-plum">Store links</dt>
                      <dd>
                        Join the waitlist first; official store links will be shared there.
                        <ul className="mt-2 grid gap-1 sm:grid-cols-2">
                          {storeLinkStates.map((store) => (
                            <li key={store.label}>
                              <span
                                role="status"
                                aria-label={`${store.label} updates are shared through the waitlist`}
                              >
                                <span className="font-dm-sans-semibold text-plum">
                                  {store.label} updates.
                                </span>{" "}
                                {store.detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </details>
            }
          />

          <h3 className="sr-only">What happens next</h3>
          <ol className="mt-6 grid list-decimal gap-1.5 pl-5 text-[15px] text-mauve marker:font-dm-sans-semibold marker:text-rosas">
            {waitlistSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  );
};

export default Download;
