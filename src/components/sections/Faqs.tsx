import { useState } from "react";
import {
  ChevronDown,
  HeartHandshake,
  LockKeyhole,
  MailCheck,
  ShieldCheck,
} from "lucide-react";
import { launchEmailLinks } from "../../lib/launchEmailLinks";

const faqData = [
  {
    question: "Is PinayMate already live?",
    shortQuestion: "Already live?",
    status: "Waitlist only",
    shortAnswer: "Opening in stages.",
    answer:
      "PinayMate is opening in stages. The website lets you join updates, share plan interest, and contact support while mobile access rolls out.",
    icon: HeartHandshake,
    visualTone: "from-[#ef3e78]/72 to-[#8d69f6]/58",
    chips: ["Waitlist", "Updates"],
  },
  {
    question: "Can I pay or create a dating profile today?",
    shortQuestion: "Pay or profile?",
    status: "No payment today",
    shortAnswer: "No checkout or profile here.",
    answer:
      "No. This website lets you join updates or share interest. Your app account, dating profile, matches, checkout, and payments stay inside the app access flow.",
    icon: MailCheck,
    visualTone: "from-[#8d69f6]/68 to-[#5c83e9]/52",
    chips: ["No pay", "App flow"],
  },
  {
    question: "How is privacy handled?",
    shortQuestion: "Privacy?",
    status: "Privacy first",
    shortAnswer: "Keep private data out of email.",
    answer:
      "This website is for waitlist and support contact only. Do not send passwords, payment details, ID documents, exact location, or private profile information by email. Profile visibility, account settings, deletion controls, and safety actions belong inside the app.",
    icon: ShieldCheck,
    visualTone: "from-[#ef3e78]/62 to-[#5c83e9]/48",
    chips: ["Private", "App data"],
  },
  {
    question: "What does verification mean?",
    shortQuestion: "Verification?",
    status: "Manual review",
    shortAnswer: "Review is private and staged.",
    answer:
      "Verification is designed as a private review process, not an email attachment process. Uploading documents does not automatically approve a member.",
    icon: LockKeyhole,
    visualTone: "from-[#8d69f6]/62 to-[#ef3e78]/50",
    chips: ["Review", "No docs"],
  },
  {
    question: "Where do I get app links?",
    shortQuestion: "App links?",
    status: "Waitlist first",
    shortAnswer: "Choose your platform first.",
    answer:
      "Join the waitlist and choose your platform. PinayMate will share the right download and access path through official updates.",
    icon: ShieldCheck,
    visualTone: "from-[#5c83e9]/62 to-[#8d69f6]/48",
    chips: ["Platform", "Updates"],
  },
];

const faqSignals = [
  {
    label: "Waitlist",
    detail: "Waitlist first",
    icon: HeartHandshake,
  },
  {
    label: "App data",
    detail: "App handles private data",
    icon: ShieldCheck,
  },
  {
    label: "No checkout",
    detail: "No checkout here",
    icon: LockKeyhole,
  },
];

const supportSignals = [
  {
    label: "Help",
  },
  {
    label: "Access",
  },
  {
    label: "Limits",
  },
];

const supportModules = [
  {
    label: "Waitlist",
    tone: "bg-[#ef3e78]/72",
  },
  {
    label: "Privacy",
    tone: "bg-[#8d69f6]/58",
  },
  {
    label: "Access",
    tone: "bg-[#5c83e9]/52",
  },
];

const pathSteps = [
  {
    label: "Question",
    tone: "bg-[#ef3e78]/70",
  },
  {
    label: "Boundary",
    tone: "bg-[#8d69f6]/64",
  },
  {
    label: "Support",
    tone: "bg-[#5c83e9]/58",
  },
];

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-br from-[#120a1b] via-[#1a1026] to-[#170f22] py-20 text-white sm:py-24"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ef3e78]/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#5c83e9]/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mx-auto inline-grid min-h-11 w-28 place-items-center rounded-lg border border-[#f0b6df]/14 bg-[#2a1a44]/45 px-4 py-2 text-sm font-dm-sans-bold text-[#f3c7de]">
            <MailCheck className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">FAQ and access clarity</span>
          </p>
          <h2 className="mt-4 font-lora text-4xl font-bold leading-tight text-white sm:text-5xl">
            Answers before access.
            <span className="sr-only">Straight answers before anyone joins.</span>
          </h2>
          <p className="sr-only">
            Waitlist first. App for personal details.
            Join the waitlist first. Use the app for everything personal.
            The path is simple: join the waitlist first, then use the app for
            profiles, matching, privacy controls, and paid access inside the
            account flow.
          </p>
          <div className="pm-faq-path-visual mx-auto mt-6 max-w-xl" aria-hidden="true">
            {faqSignals.map((signal) => {
              const SignalIcon = signal.icon;

              return (
              <span
                key={signal.label}
                className="pm-faq-path-node"
              >
                <SignalIcon className="h-5 w-5" />
                <span className="sr-only">
                  {signal.label}. {signal.detail}
                </span>
              </span>
              );
            })}
            <span className="sr-only">
              {faqSignals.map((signal) => `${signal.label}. ${signal.detail}.`).join(" ")}
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <aside className="pm-lift-panel rounded-lg border border-[#f0b6df]/12 bg-[#1a0d27]/42 px-4 py-5 sm:px-5 lg:sticky lg:top-28 lg:py-6">
            <p className="inline-grid min-h-9 w-24 place-items-center rounded-lg border border-[#f0b6df]/12 bg-[#120a1b]/58 px-3 text-sm font-dm-sans-bold text-[#f3c7de]">
              <MailCheck className="h-4 w-4 text-[#f7a4c8]" aria-hidden="true" />
              <span className="sr-only">Support boundary</span>
            </p>
            <p className="sr-only">
              Support
              <span>. Support boundary</span>
            </p>
            <h3 className="sr-only">
              Direct answers.
              <span> Direct support. Need a direct answer?</span>
            </h3>

            <div className="pm-safety-radar mt-5" aria-hidden="true">
              <span className="pm-safety-radar-core">
                <MailCheck className="h-8 w-8" />
              </span>
              <span className="pm-safety-radar-node pm-safety-radar-node-a">
                <HeartHandshake className="h-5 w-5" />
              </span>
              <span className="pm-safety-radar-node pm-safety-radar-node-b">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="pm-safety-radar-node pm-safety-radar-node-c">
                <LockKeyhole className="h-5 w-5" />
              </span>
              <span className="pm-safety-radar-node pm-safety-radar-node-d">
                <MailCheck className="h-5 w-5" />
              </span>
            </div>
            <div className="sr-only">
              <span>Help. Direct answer.</span>
              {supportModules.map((module) => (
                <span key={module.label}>
                  {module.label}. Ask. Check. Reply.
                </span>
              ))}
              {pathSteps.map((step) => (
                <span key={step.label}>
                  {step.label}. Path.
                </span>
              ))}
            </div>

            <div className="pm-feature-signal-strip mt-4 max-w-none" aria-hidden="true">
              <span>
                <HeartHandshake className="h-5 w-5" />
              </span>
              <span>
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span>
                <MailCheck className="h-5 w-5" />
              </span>
            </div>
            <div className="sr-only">
              {pathSteps.map((step) => (
                <span key={step.label}>{step.label}</span>
              ))}
              </div>

            <p className="sr-only">
              {supportSignals.map((signal) => (
                <span
                  key={signal.label}
                >
                  {signal.label}. Ready. Support path.
                </span>
              ))}
              <span className="sr-only">
                Use support for waitlist, verification, access timing, or
                partnership questions. Support can explain current access and
                next steps, but it cannot create accounts, profiles, matches,
                checkout sessions, or payment records from this website.
              </span>
            </p>
            <p className="mt-4 inline-grid min-h-10 w-24 place-items-center rounded-lg border border-[#f0b6df]/12 bg-[#120a1b]/58 px-3 py-2 text-sm font-dm-sans-bold text-[#f6d0f1]">
              <LockKeyhole className="h-4 w-4 text-[#f7a4c8]" aria-hidden="true" />
              <span className="sr-only">Email-safe</span>
              <span className="sr-only">
                No sensitive data by email.
                No private data.
                Do not send passwords, payment details, ID documents, precise
                location, private profile information, or private message
                screenshots by email.
              </span>
            </p>
            <a
              href={launchEmailLinks.supportQuestion}
              aria-label="Email PinayMate support without sending sensitive account data"
              className="mt-6 inline-flex min-h-12 cursor-pointer items-center justify-center rounded-lg bg-[#ef3e78] px-6 py-3 font-dm-sans-bold text-white shadow-lg shadow-[#ef3e78]/20 transition duration-200 hover:bg-[#d7346b] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
            >
              Support
              <span className="sr-only">. Contact support</span>
            </a>
          </aside>

          <div className="divide-y divide-white/10 border-y border-white/12 bg-[#120a1b]/20">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              const Icon = faq.icon;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <article key={faq.question} className="py-1">
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className={`pm-surface-hover grid min-h-16 w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-3 border-l-2 px-3 py-4 text-left transition duration-200 hover:text-[#f3c7de] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff] sm:grid-cols-[auto_1fr_minmax(9rem,0.42fr)_auto] sm:gap-4 ${
                      isOpen
                        ? "border-[#f0b6df] bg-[#2e1e5a]/34"
                        : "border-[#f0b6df]/18 bg-[#120a1b]/18"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white transition duration-200 ${
                        isOpen
                          ? "bg-gradient-to-br from-[#F4376D] to-[#8d69f6]"
                          : "bg-[#2e1e5a]/65"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-dm-sans-bold text-base text-white sm:text-lg">
                        {faq.shortQuestion}
                        <span className="sr-only">. {faq.question}</span>
                      </span>
                      <span className="sr-only">
                        {faq.status}. {faq.shortAnswer}
                      </span>
                      <span className="pm-faq-chip-row mt-3" aria-hidden="true">
                        {faq.chips.map((chip) => (
                          <span key={`${faq.shortQuestion}-${chip}`}>{chip}</span>
                        ))}
                      </span>
                      <span className="sr-only">Clear. Safe. App. Help.</span>
                    </span>
                    <span className="hidden border-l border-[#f0b6df]/12 pl-4 sm:block">
                      <span className={`pm-faq-row-visual bg-gradient-to-r ${faq.visualTone}`} aria-hidden="true">
                        <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#120a1b]/40 text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="pm-faq-preview-copy">
                          <span>{faq.status}</span>
                          <span>{faq.shortAnswer}</span>
                        </span>
                        <span className="pm-faq-route-preview">
                          <span />
                          <span />
                          <span />
                        </span>
                      </span>
                      <span className="sr-only">
                        Answer. {faq.shortAnswer}
                      </span>
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2e1e5a]/65 text-[#f0b6df] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    } motion-reduce:transition-none`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-3 pb-5 pt-3 sm:ml-16">
                        <div className="grid gap-3 sm:grid-cols-[1fr_0.46fr] sm:items-stretch">
                          <p className="border-l-2 border-[#f0b6df]/28 bg-[#120a1b]/34 py-3 pl-4 pr-3 text-sm leading-6 text-[#d7c7ed]">
                            {faq.answer}
                          </p>
                          <div className="pm-faq-answer-visual hidden sm:grid" aria-hidden="true">
                            <span className={`pm-faq-answer-device bg-gradient-to-r ${faq.visualTone}`}>
                              <span className="pm-faq-answer-core">
                                <Icon className="h-6 w-6" />
                              </span>
                              <span className="pm-faq-answer-route">
                                <span />
                                <span />
                                <span />
                              </span>
                              <span className="pm-faq-answer-badge">
                                <ShieldCheck className="h-4 w-4" />
                              </span>
                            </span>
                            <span className="pm-faq-answer-route-large">
                              <span />
                              <span />
                              <span />
                            </span>
                          </div>
                        </div>
                        <p className="sr-only">
                          Clear. Private. Staged. Support.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
