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
            <div className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#f0b6df]/18 bg-[#2e1e5a]/55 px-4 py-2 text-sm font-dm-sans-bold text-[#f3c7de] shadow-xl shadow-black/20 backdrop-blur">
              <Heart className="h-4 w-4 text-[#F4376D]" fill="#F4376D" aria-hidden="true" />
              Private waitlist
            </div>

            <h2 className="max-w-2xl font-lora text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Pick your platform. Keep the first step private.
            </h2>

            <p className="mt-6 inline-flex min-h-10 items-center rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/38 px-3 py-2 text-xs font-dm-sans-bold text-[#d7c7ed]">
              Email. Platform. Nothing more.
              <span className="sr-only">
                Share only your email and platform preference so the team knows
                whether to prioritize your iOS or Android path. It does not
                create a dating profile, start matching, or collect payment.
              </span>
            </p>

            <WaitlistCaptureForm />

            <div className="mt-8 border-t border-white/12 pt-6">
              <p className="text-sm font-dm-sans-bold text-[#f3c7de]">
                Email option
              </p>
              <p className="mt-2 inline-flex min-h-9 items-center rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/38 px-3 py-2 text-xs font-dm-sans-bold text-[#cbbade]">
                Mail app
                <span className="sr-only">
                  . Same waitlist, through your mail app.
                  Choose your platform by email if you prefer using your mail
                  app or want a direct support path.
                </span>
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {waitlistLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.ariaLabel}
                    aria-describedby="waitlist-email-note"
                    className={`group flex min-h-full flex-col justify-between rounded-lg border p-4 transition duration-200 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff] ${
                      link.isPrimary
                        ? "border-[#ef3e78]/55 bg-[#ef3e78] text-white shadow-xl shadow-[#F4376D]/20 hover:bg-[#d7346b] hover:shadow-[#F4376D]/30"
                        : "border-[#f0b6df]/18 bg-[#2e1e5a]/48 text-white hover:border-[#f0b6df]/55 hover:bg-[#3b2255]/70"
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
                    <span className={`mt-3 block text-xs font-dm-sans-bold ${link.isPrimary ? "text-[#ffe8f1]" : "text-[#f3c7de]"}`}>
                      Email path
                      <span className="sr-only">
                        . {link.detail} Use this if you prefer email or want a
                        direct support path.
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <p
              id="waitlist-email-note"
              className="mt-3 inline-flex min-h-9 items-center rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/38 px-3 py-2 text-xs font-dm-sans-bold text-[#f3c7de]"
              aria-live="polite"
            >
              Platform-only email
              <span className="sr-only">
                . Email opens a platform-only waitlist request. No account,
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
                  <p className="font-dm-sans-bold">
                    Waitlist needs only
                    <span className="sr-only">
                      . Send only what the waitlist needs.
                    </span>
                  </p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                    {privacyNotes.map((note) => (
                      <li
                        key={note.label}
                        className="rounded-lg border border-[#f0b6df]/12 bg-[#120a1b]/42 px-3 py-2 text-xs font-dm-sans-bold text-[#f3c7de]"
                      >
                        <span
                          className="mb-2 block h-1.5 w-10 rounded-lg bg-[#ef3e78]"
                          aria-hidden="true"
                        />
                        <span>
                          {note.label}
                          <span className="sr-only">: {note.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/12 pt-6">
              <p className="text-sm font-dm-sans-bold text-[#f3c7de]">
                Next
                <span className="sr-only">. What happens next</span>
              </p>
              <ol className="mt-4 grid grid-cols-3 gap-2">
                {waitlistSteps.map((step, index) => (
                  <li
                    key={step.label}
                    className="min-h-20 rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/34 px-2 py-3 text-center"
                  >
                    <span
                      className="mx-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#f0b6df]/40 bg-[#2e1e5a]/65 text-sm font-dm-sans-bold text-[#f3c7de]"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <span className="mt-2 block text-xs font-dm-sans-bold text-[#eadff7]">
                      {step.label}
                      <span className="sr-only">: {step.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {featureTags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex min-h-10 items-center rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/45 px-3 py-2 text-sm font-dm-sans-semibold text-[#eadff7]"
                >
                  {tag.label}
                  <span className="sr-only">. {tag.detail}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="lg:border-l lg:border-white/12 lg:pl-10">
            <div className="relative overflow-hidden rounded-lg border border-[#f0b6df]/14 bg-[#1a0d27]/72 p-5 shadow-xl shadow-black/12">
              <div
                className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#ef3e78]/14 to-transparent"
                aria-hidden="true"
              />
              <div className="relative grid gap-4 sm:grid-cols-2">
                {platformPreview.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-[#f0b6df]/14 bg-[#120a1b]/68 p-4"
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
                      {item.label}
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

            <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {waitlistSignals.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-lg border border-[#f0b6df]/14 bg-[#1a0d27]/66 p-5 shadow-xl shadow-black/12"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ef3e78] text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-lora text-xl font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 rounded-lg border border-[#f0b6df]/12 bg-[#2e1e5a]/38 px-3 py-2 text-xs font-dm-sans-bold text-[#f6d0f1]">
                          {item.signal}
                          <span className="sr-only">. {item.text}</span>
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 border-t border-[#F4376D]/25 pt-6">
              <dl className="grid gap-5">
                <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-5">
                  <dt className="flex items-center gap-2 text-sm font-dm-sans-bold text-[#f3c7de]">
                    <ShieldCheck
                      className="h-4 w-4 text-[#f7a4c8]"
                      aria-hidden="true"
                    />
                    Waitlist
                  </dt>
                  <dd className="inline-flex min-h-9 items-center rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/38 px-3 py-2 text-xs font-dm-sans-bold text-[#eadff7]">
                    Signal only
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
                    Access
                  </dt>
                  <dd className="inline-flex min-h-9 items-center rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/38 px-3 py-2 text-xs font-dm-sans-bold text-[#eadff7]">
                    When ready
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
              <p className="text-sm font-dm-sans-bold text-[#f3c7de]">
                Store links
                <span className="sr-only">
                  . Join the waitlist first; official store links will be shared there.
                </span>
              </p>
              <p className="mt-2 inline-flex min-h-9 items-center rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/38 px-3 py-2 text-xs font-dm-sans-bold text-[#f3c7de]">
                Waitlist first
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {storeLinkStates.map((store) => (
                  <div
                    key={store.label}
                    role="status"
                    aria-label={`${store.label} updates are shared through the waitlist`}
                    className="min-h-24 rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/40 p-4 text-[#d7c7ed]"
                  >
                    <div className="mb-4 grid grid-cols-3 gap-2" aria-hidden="true">
                      <span className="h-8 rounded-lg bg-[#ef3e78]/24" />
                      <span className="h-8 rounded-lg bg-[#8d69f6]/22" />
                      <span className="h-8 rounded-lg bg-[#5c83e9]/18" />
                    </div>
                    <p className="text-sm font-dm-sans-bold text-white">
                      {store.label} updates
                    </p>
                    <p className="sr-only">{store.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/38 px-3 py-2 text-xs font-dm-sans-bold text-[#f3c7de]">
              <MapPin className="h-4 w-4 text-[#f7a4c8]" aria-hidden="true" />
              Priority markets
              <span className="sr-only">
                Built for Filipina and foreigner introductions across priority markets.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
