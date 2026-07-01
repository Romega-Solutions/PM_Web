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
    title: "Review",
    signal: "Review first",
    text: "The access path emphasizes verification cues, report paths, and safer conversation boundaries before broad matching.",
  },
  {
    icon: Sparkles,
    title: "Intent",
    signal: "Intent led",
    text: "The experience highlights relationship goals, lifestyle fit, and profile context instead of encouraging low-intent swiping.",
  },
  {
    icon: UsersRound,
    title: "Clarity",
    signal: "Clarity built in",
    text: "PinayMate is designed around expectations, location context, and communication comfort before a conversation starts.",
  },
];

const featureTags = [
  {
    label: "Interest",
    detail: "Interest only",
  },
  {
    label: "Updates",
    detail: "Access updates",
  },
  {
    label: "No pay",
    detail: "No payment today",
  },
  {
    label: "Platform",
    detail: "Platform preference",
  },
];

const privacyNotes = [
  {
    label: "Email + platform",
    detail: "Send your platform preference and email only.",
  },
  {
    label: "No docs",
    detail:
      "Keep passwords, ID documents, payment details, precise location, and private profile information out of waitlist messages.",
  },
  {
    label: "App profile",
    detail: "Profile and verification details belong in the app.",
  },
];

const waitlistSteps = [
  {
    label: "Platform",
    detail: "Choose iOS or Android and send only email plus platform preference.",
  },
  {
    label: "Updates",
    detail: "PinayMate uses that signal to plan access and support coverage.",
  },
  {
    label: "App later",
    detail:
      "You receive access updates. You can decide later whether to create a profile and start matching in the app.",
  },
];

const waitlistLinks = [
  {
    href: launchEmailLinks.iosWaitlist,
    label: "iOS waitlist",
    fullLabel: "Join iOS waitlist",
    ariaLabel:
      "Join the PinayMate iOS waitlist by email without creating an app account, dating profile, match request, or payment record",
    isPrimary: true,
    detail: "Best if you use iPhone or iPad.",
    bars: ["w-4/5", "w-2/3", "w-1/2"],
  },
  {
    href: launchEmailLinks.androidWaitlist,
    label: "Android waitlist",
    fullLabel: "Join Android waitlist",
    ariaLabel:
      "Join the PinayMate Android waitlist by email without creating an app account, dating profile, match request, or payment record",
    isPrimary: false,
    detail: "Best if you use an Android phone.",
    bars: ["w-3/4", "w-5/6", "w-1/2"],
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

const platformPreview = [
  {
    label: "iOS",
    tone: "from-[#ef3e78] to-[#8d69f6]",
    bars: ["w-4/5", "w-2/3", "w-1/2"],
  },
  {
    label: "Android",
    tone: "from-[#8d69f6] to-[#5c83e9]",
    bars: ["w-3/4", "w-5/6", "w-1/2"],
  },
];

const Download = () => {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-[#160d20] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f0b6df]/22 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ef3e78]/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <div className="mb-5 inline-flex min-h-11 items-center gap-2 border-l-2 border-[#f0b6df]/22 px-4 py-2 text-sm font-dm-sans-bold text-[#f3c7de]">
              <Heart className="h-4 w-4 text-[#F4376D]" fill="#F4376D" aria-hidden="true" />
              Private waitlist
            </div>

            <h2 className="max-w-2xl font-lora text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Pick your platform. Keep the first step private.
            </h2>

            <p className="mt-6 inline-flex min-h-10 items-center border-l-2 border-[#f0b6df]/18 px-3 py-1 text-xs font-dm-sans-bold text-[#d7c7ed]">
              Email. Platform. Nothing more.
              <span className="sr-only">
                Share only your email and platform preference so the team knows
                whether to prioritize your iOS or Android path. It does not
                create a dating profile, start matching, or collect payment.
              </span>
            </p>

            <WaitlistCaptureForm />

            <div className="mt-8 border-t border-white/12 pt-6">
              <p className="sr-only">
                Email option
                <span>
                  . Choose your platform by email if you prefer using your mail
                  app or want a direct support path.
                </span>
              </p>
              <div className="grid max-w-44 grid-cols-4 gap-2" aria-hidden="true">
                <span className="h-2 rounded-lg bg-[#ef3e78]/70" />
                <span className="h-2 rounded-lg bg-[#8d69f6]/46" />
                <span className="h-2 rounded-lg bg-[#5c83e9]/36" />
                <span className="h-2 rounded-lg bg-[#f0b6df]/24" />
              </div>
              <p className="mt-3 inline-flex min-h-9 items-center gap-2 border-l-2 border-[#f0b6df]/18 px-3 py-1 text-xs font-dm-sans-bold text-[#cbbade]">
                <Mail className="h-4 w-4 text-[#f7a4c8]" aria-hidden="true" />
                <span className="grid w-28 gap-1.5" aria-hidden="true">
                  <span className="h-1.5 rounded-lg bg-[#f0b6df]/30" />
                  <span className="h-1.5 w-2/3 rounded-lg bg-[#f0b6df]/18" />
                </span>
                <span className="sr-only">
                  Mail app. Same waitlist, through your mail app.
                </span>
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {waitlistLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.ariaLabel}
                    aria-describedby="waitlist-email-note"
                    className={`group flex min-h-full flex-col justify-between border-y px-4 py-4 transition duration-200 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff] sm:border-l sm:border-y-0 ${
                      link.isPrimary
                        ? "border-[#ef3e78]/55 bg-[#ef3e78]/88 text-white hover:bg-[#d7346b]"
                        : "border-[#f0b6df]/18 bg-[#2e1e5a]/28 text-white hover:border-[#f0b6df]/55 hover:bg-[#3b2255]/48"
                    }`}
                  >
                    <span className="flex min-h-11 items-center gap-3 font-dm-sans-bold">
                      <Smartphone className="h-5 w-5" aria-hidden="true" />
                      <span>
                        {link.label}
                        <span className="sr-only">. {link.fullLabel}</span>
                      </span>
                    </span>
                    <span className="mt-3 grid gap-1.5" aria-hidden="true">
                      {link.bars.map((bar, index) => (
                        <span
                          key={`${link.label}-${index}`}
                          className={`block h-1.5 rounded-lg ${
                            link.isPrimary ? "bg-[#ffe8f1]/45" : "bg-[#f0b6df]/24"
                          } ${bar}`}
                        />
                      ))}
                    </span>
                    <span className="mt-3 grid grid-cols-3 gap-2" aria-hidden="true">
                      <span
                        className={`h-1.5 rounded-lg ${
                          link.isPrimary ? "bg-[#ffe8f1]/50" : "bg-[#f0b6df]/28"
                        }`}
                      />
                      <span
                        className={`h-1.5 rounded-lg ${
                          link.isPrimary ? "bg-[#ffe8f1]/35" : "bg-[#8d69f6]/28"
                        }`}
                      />
                      <span
                        className={`h-1.5 rounded-lg ${
                          link.isPrimary ? "bg-[#ffe8f1]/25" : "bg-[#5c83e9]/24"
                        }`}
                      />
                    </span>
                    <span className="sr-only">
                      {link.detail} Use this if you prefer email or want a
                      direct support path.
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <p
              id="waitlist-email-note"
              className="mt-3 inline-flex min-h-9 items-center gap-2 border-l-2 border-[#f0b6df]/18 px-3 py-1 text-xs font-dm-sans-bold text-[#f3c7de]"
              aria-live="polite"
            >
              <span className="grid grid-cols-3 gap-1.5" aria-hidden="true">
                <span className="h-1.5 w-8 rounded-lg bg-[#ef3e78]/42" />
                <span className="h-1.5 w-8 rounded-lg bg-[#8d69f6]/34" />
                <span className="h-1.5 w-8 rounded-lg bg-[#5c83e9]/28" />
              </span>
              <span className="sr-only">
                Platform-only email. Email opens a platform-only waitlist request. No account,
                profile, match, checkout, or payment starts here. Opens your email app with a platform-only waitlist message. No
                app account, dating profile, match request, matching session,
                checkout, payment record, precise location, or matching data is
                created from this page. The form above is the primary waitlist
                path; email stays available as another direct option.
              </span>
            </p>

            <div className="mt-6 border-l-2 border-[#f0b6df] bg-[#2e1e5a]/45 py-1 pl-4 pr-2 text-white">
              <div className="flex items-start gap-3 py-3">
                <ShieldCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#f7a4c8]"
                  aria-hidden="true"
                />
                <div>
                  <p className="grid max-w-28 grid-cols-3 gap-2 font-dm-sans-bold" aria-hidden="true">
                    <span className="h-1.5 rounded-lg bg-[#ef3e78]/72" />
                    <span className="h-1.5 rounded-lg bg-[#8d69f6]/42" />
                    <span className="h-1.5 rounded-lg bg-[#5c83e9]/32" />
                  </p>
                  <p className="sr-only">
                    Waitlist needs only
                    <span>
                      . Send only what the waitlist needs.
                    </span>
                  </p>
                  <ul className="mt-3 grid border-y border-[#f0b6df]/12 py-3 sm:grid-cols-3">
                    {privacyNotes.map((note) => (
                      <li
                        key={note.label}
                        className="border-l border-[#f0b6df]/12 px-3 py-1 text-xs font-dm-sans-bold text-[#f3c7de] first:border-l-0"
                      >
                        <span
                          className="mb-2 block h-1.5 w-10 rounded-lg bg-[#ef3e78]"
                          aria-hidden="true"
                        />
                        <span
                          className="block h-1.5 w-16 rounded-lg bg-[#f0b6df]/24"
                          aria-hidden="true"
                        />
                        <span className="sr-only">
                          {note.label}
                          <span>: {note.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/12 pt-6">
              <p className="grid max-w-32 grid-cols-3 gap-2 text-sm font-dm-sans-bold text-[#f3c7de]" aria-hidden="true">
                <span className="h-1.5 rounded-lg bg-[#ef3e78]/64" />
                <span className="h-1.5 rounded-lg bg-[#8d69f6]/38" />
                <span className="h-1.5 rounded-lg bg-[#5c83e9]/30" />
              </p>
              <p className="sr-only">
                Next
                <span>. What happens next</span>
              </p>
              <ol className="mt-4 grid grid-cols-3 border-y border-[#f0b6df]/12 py-3">
                {waitlistSteps.map((step, index) => (
                  <li
                    key={step.label}
                    className="min-h-16 border-l border-[#f0b6df]/12 px-2 py-1 text-center first:border-l-0"
                  >
                    <span
                      className="mx-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#f0b6df]/40 bg-[#2e1e5a]/65 text-sm font-dm-sans-bold text-[#f3c7de]"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <span className="mt-3 grid grid-cols-2 gap-1.5" aria-hidden="true">
                      <span className="h-1.5 rounded-lg bg-[#f0b6df]/30" />
                      <span className="h-1.5 rounded-lg bg-[#8d69f6]/28" />
                    </span>
                    <span className="sr-only">
                      {step.label}
                      <span>: {step.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 grid grid-cols-4 border-y border-[#f0b6df]/12 py-3">
              {featureTags.map((tag) => (
                <span
                  key={tag.label}
                  className="min-h-10 border-l border-[#f0b6df]/12 px-2 py-1 text-center text-xs font-dm-sans-bold text-[#eadff7] first:border-l-0 sm:text-sm"
                >
                  <span
                    className="mx-auto block h-1.5 w-9 rounded-lg bg-[#f0b6df]/28"
                    aria-hidden="true"
                  />
                  <span className="sr-only">
                    {tag.label}
                  </span>
                  <span className="sr-only">. {tag.detail}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="lg:border-l lg:border-white/12 lg:pl-10">
            <div className="relative overflow-hidden border-y border-[#f0b6df]/14 bg-[#1a0d27]/46 py-5">
              <div
                className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#ef3e78]/14 to-transparent"
                aria-hidden="true"
              />
              <div className="relative grid gap-4 sm:grid-cols-2">
                {platformPreview.map((item) => (
                  <div
                    key={item.label}
                    className="border-l border-[#f0b6df]/14 px-4 py-3 first:border-l-0"
                  >
                    <div
                      className={`flex h-36 flex-col justify-between rounded-lg bg-gradient-to-br ${item.tone} p-3 shadow-lg shadow-black/16`}
                      aria-hidden="true"
                    >
                      <div className="flex items-center justify-between">
                        <span className="h-2 w-10 rounded-lg bg-[#ffe8f1]/70" />
                        <span className="h-5 w-5 rounded-lg bg-[#ffe8f1]/24" />
                      </div>
                      <div className="space-y-2">
                        {item.bars.map((bar, index) => (
                          <span
                            key={`${item.label}-${index}`}
                            className={`block h-2 rounded-lg bg-[#ffe8f1]/65 ${bar}`}
                          />
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="h-8 rounded-lg bg-[#ffe8f1]/20" />
                        <span className="h-8 rounded-lg bg-[#ffe8f1]/20" />
                        <span className="h-8 rounded-lg bg-[#ffe8f1]/20" />
                      </div>
                    </div>
                    <p className="mt-3 text-center text-sm font-dm-sans-bold text-[#f6d0f1]">
                      <span
                        className="mx-auto block h-1.5 w-14 rounded-lg bg-[#f0b6df]/28"
                        aria-hidden="true"
                      />
                      <span className="sr-only">{item.label}</span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="relative mt-4 grid grid-cols-3 gap-2" aria-hidden="true">
                <span className="h-2 rounded-lg bg-[#ef3e78]" />
                <span className="h-2 rounded-lg bg-[#8d69f6]" />
                <span className="h-2 rounded-lg bg-[#5c83e9]" />
              </div>
              <p className="sr-only">
                Visual preview of choosing iOS or Android for platform-specific
                waitlist updates.
              </p>
            </div>

            <div className="mt-4 grid border-y border-[#f0b6df]/12 py-3 sm:grid-cols-3 lg:grid-cols-1">
              {waitlistSignals.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="border-t border-[#f0b6df]/12 px-4 py-3 first:border-t-0 sm:border-l sm:border-t-0 sm:first:border-l-0 lg:border-l-0 lg:border-t lg:first:border-t-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ef3e78] text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-lora text-xl font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-xs font-dm-sans-bold text-[#f6d0f1]">
                          <span
                            className="mb-2 block h-1.5 w-16 rounded-lg bg-[#ef3e78]"
                            aria-hidden="true"
                          />
                          <span
                            className="block h-1.5 w-12 rounded-lg bg-[#f0b6df]/26"
                            aria-hidden="true"
                          />
                          <span className="sr-only">{item.signal}</span>
                          <span className="sr-only">. {item.text}</span>
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 border-t border-[#F4376D]/25 pt-6">
              <dl className="grid border-y border-[#f0b6df]/12 py-3">
                <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-5">
                  <dt className="flex items-center gap-2 text-sm font-dm-sans-bold text-[#f3c7de]">
                    <ShieldCheck
                      className="h-4 w-4 text-[#f7a4c8]"
                      aria-hidden="true"
                    />
                    <span
                      className="h-1.5 w-16 rounded-lg bg-[#f0b6df]/28"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Waitlist</span>
                  </dt>
                  <dd className="inline-flex min-h-9 items-center border-l border-[#f0b6df]/12 px-3 py-1 text-xs font-dm-sans-bold text-[#eadff7]">
                    <span
                      className="h-1.5 w-16 rounded-lg bg-[#f0b6df]/28"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Signal only</span>
                    <span className="sr-only">
                      . Signal only. No account, match, checkout, or payment.
                      It is a waitlist signal, not a live membership, app
                      account, dating profile, match request, matching session,
                      checkout step, or payment record.
                    </span>
                  </dd>
                </div>

                <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-5">
                  <dt className="flex items-center gap-2 text-sm font-dm-sans-bold text-[#f3c7de]">
                    <Mail
                      className="h-4 w-4 text-[#f7a4c8]"
                      aria-hidden="true"
                    />
                    <span
                      className="h-1.5 w-16 rounded-lg bg-[#f0b6df]/28"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Access</span>
                  </dt>
                  <dd className="inline-flex min-h-9 items-center border-l border-[#f0b6df]/12 px-3 py-1 text-xs font-dm-sans-bold text-[#eadff7]">
                    <span
                      className="h-1.5 w-16 rounded-lg bg-[#f0b6df]/28"
                      aria-hidden="true"
                    />
                    <span className="sr-only">When ready</span>
                    <span className="sr-only">
                      . Public channels appear when ready.
                      Store links, social channels, and community invitations
                      will appear when each channel is available for members.
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="sr-only">
                Store links
                <span>
                  . Join the waitlist first; official store links will be shared there.
                </span>
              </p>
              <p className="mt-2 inline-flex min-h-9 items-center gap-2 border-l-2 border-[#f0b6df]/18 px-3 py-1 text-xs font-dm-sans-bold text-[#f3c7de]">
                <span className="grid grid-cols-3 gap-1.5" aria-hidden="true">
                  <span className="h-1.5 w-8 rounded-lg bg-[#ef3e78]/52" />
                  <span className="h-1.5 w-8 rounded-lg bg-[#8d69f6]/38" />
                  <span className="h-1.5 w-8 rounded-lg bg-[#5c83e9]/30" />
                </span>
                <span className="sr-only">Waitlist first</span>
              </p>
              <div className="mt-4 grid border-y border-[#f0b6df]/12 py-3 sm:grid-cols-2">
                {storeLinkStates.map((store) => (
                  <div
                    key={store.label}
                    role="status"
                    aria-label={`${store.label} updates are shared through the waitlist`}
                    className="min-h-20 border-t border-[#f0b6df]/12 px-4 py-2 text-[#d7c7ed] first:border-t-0 sm:border-l sm:border-t-0 sm:first:border-l-0"
                  >
                    <div className="mb-4 grid grid-cols-3 gap-2" aria-hidden="true">
                      <span className="h-8 rounded-lg bg-[#ef3e78]/24" />
                      <span className="h-8 rounded-lg bg-[#8d69f6]/22" />
                      <span className="h-8 rounded-lg bg-[#5c83e9]/18" />
                    </div>
                    <p className="text-sm font-dm-sans-bold text-white">
                      {store.label}
                    </p>
                    <p className="sr-only">{store.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 inline-flex min-h-10 items-center gap-2 border-l-2 border-[#f0b6df]/18 px-3 py-1 text-xs font-dm-sans-bold text-[#f3c7de]">
              <MapPin className="h-4 w-4 text-[#f7a4c8]" aria-hidden="true" />
              <span className="grid grid-cols-3 gap-1.5" aria-hidden="true">
                <span className="h-1.5 w-8 rounded-lg bg-[#ef3e78]/46" />
                <span className="h-1.5 w-8 rounded-lg bg-[#8d69f6]/34" />
                <span className="h-1.5 w-8 rounded-lg bg-[#5c83e9]/28" />
              </span>
              <span className="sr-only">
                Priority markets. Built for Filipina and foreigner introductions across priority markets.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
