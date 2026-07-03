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
  },
  {
    href: launchEmailLinks.androidWaitlist,
    label: "Android waitlist",
    fullLabel: "Join Android waitlist",
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

const platformPreview = [
  {
    label: "iOS",
    status: "Email-only access cue",
    tone: "from-[#ef3e78] to-[#8d69f6]",
    preview: ["iPhone", "Email", "Access"],
  },
  {
    label: "Android",
    status: "Platform waitlist cue",
    tone: "from-[#8d69f6] to-[#5c83e9]",
    preview: ["Android", "Email", "Access"],
  },
];

const platformShellRows = [
  {
    label: "Email",
    status: "Private",
    tone: "bg-[#ef3e78]/18 text-[#ffe8f1]",
  },
  {
    label: "Platform",
    status: "Selected",
    tone: "bg-[#8d69f6]/18 text-[#f6d0f1]",
  },
  {
    label: "Updates",
    status: "Later",
    tone: "bg-[#5c83e9]/16 text-[#e3dcf9]",
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
            <div className="mb-5 inline-grid min-h-11 w-28 place-items-center rounded-lg border border-[#f0b6df]/14 bg-[#2a1a44]/45 px-4 py-2 text-sm font-dm-sans-bold text-[#f3c7de]">
              <Heart className="h-4 w-4 text-[#F4376D]" fill="#F4376D" aria-hidden="true" />
              <span className="sr-only">Private waitlist</span>
            </div>

            <h2 className="max-w-2xl font-lora text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Choose your platform privately.
              <span className="sr-only">
                Pick your platform. Keep the first step private.
              </span>
            </h2>

            <p className="sr-only">
              Email. Platform. Nothing more.
              Share only your email and platform preference so the team knows
              whether to prioritize your iOS or Android path. It does not
              create a dating profile, start matching, or collect payment.
            </p>
            <span className="sr-only border-l-2 border-[#f0b6df]">
              Download section visual boundary marker.
            </span>

            <WaitlistCaptureForm />

            <div className="mt-8 border-t border-white/12 pt-6">
              <p className="sr-only">
                Email option
                <span>
                  . Choose your platform by email if you prefer using your mail
                  app or want a direct support path.
                </span>
              </p>
              <div className="inline-grid min-h-10 w-24 place-items-center rounded-lg border border-[#f0b6df]/12 bg-[#120a1b]/58 px-3 text-xs font-dm-sans-bold text-[#f6d0f1]">
                <Mail className="h-4 w-4 text-[#f7a4c8]" aria-hidden="true" />
                <span className="sr-only">Email backup</span>
              </div>
              <p className="sr-only">
                <Mail className="h-4 w-4 text-[#f7a4c8]" aria-hidden="true" />
                Same waitlist, through your mail app
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
                        {link.label.replace(" waitlist", "")}
                        <span className="sr-only">. {link.fullLabel}</span>
                      </span>
                    </span>
                    <span className="sr-only">
                      <span>{link.detail}</span>
                    </span>
                    <span className="sr-only">
                      <span
                        className={`rounded-lg px-2 py-2 ${
                          link.isPrimary ? "bg-[#ef3e78]/18 text-white" : "bg-[#f0b6df]/12 text-[#f6d0f1]"
                        }`}
                      >
                        Email
                      </span>
                      <span
                        className={`rounded-lg px-2 py-2 ${
                          link.isPrimary ? "bg-[#ef3e78]/14 text-white" : "bg-[#8d69f6]/16 text-[#f6d0f1]"
                        }`}
                      >
                        App
                      </span>
                      <span
                        className={`rounded-lg px-2 py-2 ${
                          link.isPrimary ? "bg-[#ef3e78]/12 text-white" : "bg-[#5c83e9]/14 text-[#f6d0f1]"
                        }`}
                      >
                        Safe
                      </span>
                    </span>
                    <span className="sr-only">
                      {link.detail} Use this if you prefer email or want a
                      direct support path.
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <p id="waitlist-email-note" className="sr-only" aria-live="polite">
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

            <div className="sr-only">
              <div className="flex items-start gap-3 py-3">
                <ShieldCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#f7a4c8]"
                  aria-hidden="true"
                />
                <div>
                  <p className="grid max-w-28 grid-cols-3 gap-2 font-dm-sans-bold" aria-hidden="true">
                    <span className="col-span-3 text-xs text-[#f6d0f1]">
                      Waitlist needs only
                    </span>
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
                        {note.label}
                        <span className="sr-only">
                          <span>: {note.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="sr-only">
              <p className="text-sm font-dm-sans-bold text-[#f3c7de]">What happens next</p>
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
                    <span className="mt-3 block text-xs font-dm-sans-bold text-[#f6d0f1]">
                      {step.label}
                    </span>
                    <span className="sr-only">: {step.detail}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="sr-only">
              {featureTags.map((tag) => (
                <span
                  key={tag.label}
                  className="min-h-10 border-l border-[#f0b6df]/12 px-2 py-1 text-center text-xs font-dm-sans-bold text-[#eadff7] first:border-l-0 sm:text-sm"
                >
                  {tag.label}
                  <span className="sr-only">. {tag.detail}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="lg:border-l lg:border-white/12 lg:pl-10">
            <div className="pm-lift-panel relative overflow-hidden border-y border-[#f0b6df]/14 bg-[#1a0d27]/46 py-5">
              <div
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#ef3e78]/14 to-transparent"
                aria-hidden="true"
              />
              <div className="pm-platform-device-grid relative px-4">
                {platformPreview.map((item) => (
                  <div
                    key={item.label}
                    className="py-3"
                  >
                    <div className="pm-platform-device pm-platform-pass">
                      <div className="pm-platform-device-screen">
                        <div className="flex items-center justify-between gap-3">
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-dm-sans-bold text-white">
                              {item.label}
                            </span>
                            <span className="mt-1 block truncate text-[0.68rem] font-dm-sans-bold text-[#f3c7de]">
                              {item.status}
                            </span>
                          </span>
                          <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${item.tone} text-white`}>
                            <Smartphone className="h-4 w-4" aria-hidden="true" />
                          </span>
                        </div>
                        <div className="pm-platform-device-hero mt-4">
                          <span className="pm-platform-profile-scene">
                            <span className="pm-platform-profile-person" />
                            <span className="pm-platform-profile-badge">
                              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                            <span className="pm-platform-profile-route">
                              <span />
                              <span />
                              <span />
                            </span>
                          </span>
                        </div>
                        <div className="pm-platform-action-row">
                          <span>
                            <Mail className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span>
                            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span>
                            <Sparkles className="h-4 w-4" aria-hidden="true" />
                          </span>
                        </div>
                        <div className="mt-3 grid gap-2">
                          {platformShellRows.map((row, rowIndex) => (
                            <span
                              key={`${item.label}-${row.label}`}
                              className="pm-platform-status-row grid grid-cols-[auto_1fr] items-center gap-2 border-l border-[#f0b6df]/12 bg-[#120a1b]/68 px-3 py-2"
                            >
                              <span className={`grid h-8 w-8 place-items-center rounded-lg ${row.tone}`} aria-hidden="true">
                                {rowIndex === 0 ? (
                                  <Mail className="h-3.5 w-3.5" />
                                ) : rowIndex === 1 ? (
                                  <Smartphone className="h-3.5 w-3.5" />
                                ) : (
                                  <ShieldCheck className="h-3.5 w-3.5" />
                                )}
                              </span>
                              <span className="min-w-0">
                                <span className="pm-platform-row-copy" aria-hidden="true">
                                  <span>{row.label}</span>
                                  <span>{row.status}</span>
                                </span>
                                <span className="pm-platform-row-pips" aria-hidden="true">
                                  <span />
                                  <span />
                                  <span />
                                </span>
                                <span className="sr-only">
                                  {row.status}. {row.label}
                                </span>
                              </span>
                            </span>
                          ))}
                        </div>
                        <p className="sr-only">{item.preview.join(", ")}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-center text-sm font-dm-sans-bold text-[#f6d0f1]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="pm-platform-route-visual relative mx-4 mt-4" aria-hidden="true">
                <span className="pm-platform-route-device">
                  <Smartphone className="h-5 w-5" />
                </span>
                <span className="pm-platform-route-line">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="pm-platform-route-device pm-platform-route-mail">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="pm-platform-route-line">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="pm-platform-route-device pm-platform-route-safe">
                  <ShieldCheck className="h-5 w-5" />
                </span>
              </div>
              <p className="sr-only">Platform. Email. Update.</p>
              <p className="sr-only">
                Visual preview of choosing iOS or Android for platform-specific
                waitlist updates.
              </p>
            </div>

            <div className="pm-download-signal-band mt-4">
              {waitlistSignals.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="pm-download-signal-node"
                  >
                    <div className="pm-download-signal-icon">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="sr-only">
                        <h3>
                          {item.title}
                        </h3>
                        <p>
                          {item.signal}
                          <span>. {item.text}</span>
                        </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="sr-only">
              <dl className="grid border-y border-[#f0b6df]/12 py-3">
                <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-5">
                  <dt className="sr-only">
                    <ShieldCheck
                      className="h-4 w-4 text-[#f7a4c8]"
                      aria-hidden="true"
                    />
                    Waitlist
                  </dt>
                  <dd className="grid min-h-14 grid-cols-[auto_1fr] items-center gap-3 border-l border-[#f0b6df]/12 px-3 py-2 text-xs font-dm-sans-bold text-[#eadff7]">
                    <ShieldCheck className="h-4 w-4 text-[#f7a4c8]" aria-hidden="true" />
                    <span className="pm-mini-state-chips" aria-hidden="true">
                      <span>Signal</span>
                      <span>No profile</span>
                      <span>No pay</span>
                    </span>
                    <span className="sr-only">Signal only</span>
                    <span className="sr-only">
                      . No account, match, checkout, or payment.
                      It is a waitlist signal, not a live membership, app
                      account, dating profile, match request, matching session,
                      checkout step, or payment record.
                    </span>
                  </dd>
                </div>

                <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-5">
                  <dt className="sr-only">
                    <Mail
                      className="h-4 w-4 text-[#f7a4c8]"
                      aria-hidden="true"
                    />
                    Access
                  </dt>
                  <dd className="grid min-h-14 grid-cols-[auto_1fr] items-center gap-3 border-l border-[#f0b6df]/12 px-3 py-2 text-xs font-dm-sans-bold text-[#eadff7]">
                    <Mail className="h-4 w-4 text-[#f7a4c8]" aria-hidden="true" />
                    <span className="pm-mini-state-chips" aria-hidden="true">
                      <span>Email</span>
                      <span>Access</span>
                      <span>Later</span>
                    </span>
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

            <div className="mt-5">
              <p className="sr-only">
                Store links
                <span>
                  . Join the waitlist first; official store links will be shared there.
                </span>
              </p>
              <p className="sr-only">
                Waitlist first
              </p>
              <div className="pm-store-visual-band">
                {storeLinkStates.map((store) => (
                  <div
                    key={store.label}
                    role="status"
                    aria-label={`${store.label} updates are shared through the waitlist`}
                    className="pm-store-visual-node"
                  >
                    <Smartphone className="h-5 w-5 text-[#f7a4c8]" aria-hidden="true" />
                    <p className="sr-only">
                      {store.label}
                    </p>
                    <span className="pm-store-visual-meter" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </span>
                    <p className="sr-only">Store. Link. Later. {store.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 inline-grid min-h-10 w-24 place-items-center rounded-lg border border-[#f0b6df]/12 bg-[#120a1b]/58 px-3 text-xs font-dm-sans-bold text-[#f3c7de]">
              <MapPin className="h-4 w-4 text-[#f7a4c8]" aria-hidden="true" />
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
