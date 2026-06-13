import {
  Heart,
  Mail,
  MapPin,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { launchEmailLinks } from "../../lib/launchEmailLinks";
import { WaitlistCaptureForm } from "../waitlist/WaitlistCaptureForm";

const waitlistSignals = [
  {
    icon: ShieldCheck,
    title: "Review before broad reach",
    text: "The access path emphasizes verification cues, report paths, and safer conversation boundaries before broad matching.",
  },
  {
    icon: Sparkles,
    title: "Intent over attention",
    text: "The experience highlights relationship goals, lifestyle fit, and profile context instead of encouraging low-intent swiping.",
  },
  {
    icon: UsersRound,
    title: "Built for cross-cultural clarity",
    text: "PinayMate is designed around expectations, location context, and communication comfort before a conversation starts.",
  },
];

const featureTags = [
  "Interest only",
  "Access updates",
  "No payment today",
  "Platform preference",
];

const privacyNotes = [
  "Send your platform preference and email only.",
  "Keep passwords, ID documents, payment details, precise location, and private profile information out of waitlist messages.",
  "Profile and verification details belong in the app.",
];

const waitlistSteps = [
  "Choose iOS or Android and send only email plus platform preference.",
  "PinayMate uses that signal to plan access and support coverage.",
  "You receive access updates. You can decide later whether to create a profile and start matching in the app.",
];

const waitlistLinks = [
  {
    href: launchEmailLinks.iosWaitlist,
    label: "Join iOS waitlist",
    ariaLabel:
      "Join the PinayMate iOS waitlist by email without creating an app account, dating profile, match request, or payment record",
    isPrimary: true,
    detail: "Best if you use iPhone or iPad.",
  },
  {
    href: launchEmailLinks.androidWaitlist,
    label: "Join Android waitlist",
    ariaLabel:
      "Join the PinayMate Android waitlist by email without creating an app account, dating profile, match request, or payment record",
    isPrimary: false,
    detail: "Best if you use an Android phone.",
  },
];

const storeLinkStates = [
  {
    label: "App Store",
    detail: "Choose iOS when joining the waitlist.",
  },
  {
    label: "Google Play",
    detail: "Choose Android when joining the waitlist.",
  },
];

const Download = () => {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-[#160d20] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ef3e78]/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <div className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 bg-white/8 px-4 py-2 text-sm font-dm-sans-bold text-[#f3c7de] shadow-2xl shadow-black/20 backdrop-blur">
              <Heart className="h-4 w-4 text-[#F4376D]" fill="#F4376D" aria-hidden="true" />
              Private waitlist
            </div>

            <h2 className="max-w-2xl font-lora text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Pick your platform. Keep the first step private.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#d7c7ed]">
              Share only your email and platform preference so the team knows
              whether to prioritize your iOS or Android path. It does not create
              a dating profile, start matching, or collect payment.
            </p>

            <WaitlistCaptureForm />

            <div className="mt-8 border-t border-white/12 pt-6">
              <p className="text-sm font-dm-sans-bold uppercase text-[#f3c7de]">
                Email option
              </p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-[#cbbade]">
                Choose your platform by email if you prefer using your mail app
                or want a direct support path.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {waitlistLinks.map((link) => (
                  <div
                    key={link.label}
                    className="border-l border-white/14 pl-4"
                  >
                    <a
                      href={link.href}
                      aria-label={link.ariaLabel}
                      aria-describedby="waitlist-email-note"
                      className={`inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-lg px-5 py-3 text-center font-dm-sans-bold transition duration-200 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff] ${
                        link.isPrimary
                          ? "bg-white text-[#21132f] shadow-2xl shadow-[#F4376D]/20 hover:bg-[#fff4fa] hover:shadow-[#F4376D]/30"
                          : "border border-white/20 bg-white/8 text-white backdrop-blur hover:border-[#f0b6df] hover:bg-white/12"
                      }`}
                    >
                      <Smartphone className="h-5 w-5" aria-hidden="true" />
                      {link.label}
                    </a>
                    <p className="mt-2 text-sm leading-6 text-[#cbbade]">
                      {link.detail} Use this if you prefer email or want a
                      direct support path.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p
              id="waitlist-email-note"
              className="mt-3 max-w-xl text-sm leading-6 text-[#cbbade]"
              aria-live="polite"
            >
              Opens your email app with a platform-only waitlist message. No
              app account, dating profile, match request, matching session,
              checkout, payment record, precise location, or matching data is
              created from this page. The form above is the primary waitlist
              path; email stays available as another direct option.
            </p>

            <div className="mt-6 border-l-2 border-[#f0b6df] bg-[#fff7fb]/95 py-1 pl-4 pr-2 text-[#21132f]">
              <div className="flex items-start gap-3 py-3">
                <ShieldCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#b31460]"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-dm-sans-bold">
                    Send only what the waitlist needs
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm leading-6 text-[#4b5563]">
                    {privacyNotes.map((note) => (
                      <li key={note} className="flex gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ef3e78]"
                          aria-hidden="true"
                        />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/12 pt-6">
              <p className="text-sm font-dm-sans-bold uppercase text-[#f3c7de]">
                What happens next
              </p>
              <ol className="mt-4 grid gap-3">
                {waitlistSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#f0b6df]/40 bg-[#fff7fb] text-sm font-dm-sans-bold text-[#b31460]"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <span className="pt-0.5 text-sm leading-6 text-[#eadff7]">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {featureTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex min-h-10 items-center rounded-lg border border-white/12 bg-white/8 px-3 py-2 text-sm font-dm-sans-semibold text-[#eadff7]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:border-l lg:border-white/12 lg:pl-10">
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
              {waitlistSignals.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="border-b border-white/10 pb-6 last:border-b-0 sm:border-b-0 sm:pb-0 lg:border-b lg:pb-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ef3e78] text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-lora text-xl font-bold text-white">{item.title}</h3>
                        <p className="mt-3 text-base leading-7 text-[#d7c7ed]">{item.text}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 border-t border-[#F4376D]/25 pt-6">
              <dl className="grid gap-5">
                <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-5">
                  <dt className="flex items-center gap-2 text-sm font-dm-sans-bold uppercase tracking-[0.14em] text-[#f3c7de]">
                    <ShieldCheck
                      className="h-4 w-4 text-[#f7a4c8]"
                      aria-hidden="true"
                    />
                    Waitlist
                  </dt>
                  <dd className="text-sm leading-6 text-[#eadff7]">
                    It is a waitlist signal, not a live membership, app account,
                    dating profile, match request, matching session, checkout
                    step, or payment record.
                  </dd>
                </div>

                <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-5">
                  <dt className="flex items-center gap-2 text-sm font-dm-sans-bold uppercase tracking-[0.14em] text-[#f3c7de]">
                    <Mail
                      className="h-4 w-4 text-[#f7a4c8]"
                      aria-hidden="true"
                    />
                    Access
                  </dt>
                  <dd className="text-sm leading-6 text-[#eadff7]">
                    Store links, social channels, and community invitations
                    will appear when each channel is available for members.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-dm-sans-bold uppercase tracking-[0.14em] text-[#f3c7de]">
                Store links
              </p>
              <p className="mt-2 text-sm leading-6 text-[#cbbade]">
                Join the waitlist first; official store links will be shared there.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {storeLinkStates.map((store) => (
                  <div
                    key={store.label}
                    className="border-l border-white/14 pl-4 opacity-90"
                  >
                    <div
                      role="status"
                      aria-label={`${store.label} updates are shared through the waitlist`}
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-dm-sans-bold text-[#d7c7ed]"
                    >
                      {store.label} updates
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#cbbade]">
                      {store.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-[#cbbade]">
              <MapPin className="h-4 w-4 text-[#f7a4c8]" aria-hidden="true" />
              Built for Filipina and foreigner introductions across priority markets.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
