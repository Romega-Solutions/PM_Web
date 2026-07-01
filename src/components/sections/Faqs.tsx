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
  },
  {
    question: "Can I pay or create a dating profile today?",
    shortQuestion: "Pay or profile?",
    status: "No payment today",
    shortAnswer: "No checkout or profile here.",
    answer:
      "No. This website lets you join updates or share interest. Your app account, dating profile, matches, checkout, and payments stay inside the app access flow.",
    icon: MailCheck,
  },
  {
    question: "How is privacy handled?",
    shortQuestion: "Privacy?",
    status: "Privacy first",
    shortAnswer: "Keep private data out of email.",
    answer:
      "This website is for waitlist and support contact only. Do not send passwords, payment details, ID documents, exact location, or private profile information by email. Profile visibility, account settings, deletion controls, and safety actions belong inside the app.",
    icon: ShieldCheck,
  },
  {
    question: "What does verification mean?",
    shortQuestion: "Verification?",
    status: "Manual review",
    shortAnswer: "Review is private and staged.",
    answer:
      "Verification is designed as a private review process, not an email attachment process. Uploading documents does not automatically approve a member.",
    icon: LockKeyhole,
  },
  {
    question: "Where do I get app links?",
    shortQuestion: "App links?",
    status: "Waitlist first",
    shortAnswer: "Choose your platform first.",
    answer:
      "Join the waitlist and choose your platform. PinayMate will share the right download and access path through official updates.",
    icon: ShieldCheck,
  },
];

const faqSignals = [
  {
    label: "Waitlist",
    detail: "Waitlist first",
  },
  {
    label: "App data",
    detail: "App handles private data",
  },
  {
    label: "No checkout",
    detail: "No checkout here",
  },
];

const supportSignals = [
  {
    label: "Help",
    bars: ["w-5/6", "w-2/3"],
  },
  {
    label: "Access",
    bars: ["w-3/4", "w-1/2"],
  },
  {
    label: "Limits",
    bars: ["w-4/5", "w-3/5"],
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
          <p className="mx-auto inline-flex min-h-11 items-center border-l-2 border-[#f0b6df]/22 px-4 py-2 text-sm font-dm-sans-bold text-[#f3c7de]">
            FAQ and access clarity
          </p>
          <h2 className="mt-4 font-lora text-4xl font-bold leading-tight text-white sm:text-5xl">
            Straight answers before anyone joins.
          </h2>
          <p className="mt-5 inline-flex min-h-10 items-center border-l-2 border-[#f0b6df]/18 px-3 py-1 text-xs font-dm-sans-bold text-[#d7c7ed]">
            Waitlist first. App for personal details.
            <span className="sr-only">
              Join the waitlist first. Use the app for everything personal.
              The path is simple: join the waitlist first, then use the app for
              profiles, matching, privacy controls, and paid access inside the
              account flow.
            </span>
          </p>
          <div className="mx-auto mt-6 grid max-w-2xl grid-cols-3 border-y border-[#f0b6df]/12 py-3">
            {faqSignals.map((signal) => (
              <span
                key={signal.label}
                className="border-l border-[#f0b6df]/12 px-3 py-1 text-xs font-dm-sans-bold text-[#f3c7de] first:border-l-0"
              >
                <span
                  className="mx-auto block h-1.5 w-12 rounded-lg bg-[#f0b6df]/30"
                  aria-hidden="true"
                />
                <span className="sr-only">
                {signal.label}
                </span>
                <span className="sr-only">. {signal.detail}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="border-y border-[#f0b6df]/14 bg-[#1a0d27]/42 py-5 lg:sticky lg:top-28 lg:py-6">
            <p className="text-sm font-dm-sans-bold text-[#f3c7de]">
              Support
              <span className="sr-only">. Support boundary</span>
            </p>
            <h3 className="mt-3 font-lora text-2xl font-bold text-white">
              Direct answers.
              <span className="sr-only"> Direct support. Need a direct answer?</span>
            </h3>
            <p className="mt-4 grid border-y border-[#f0b6df]/12 py-3">
              {supportSignals.map((signal) => (
                <span
                  key={signal.label}
                  className="border-t border-[#f0b6df]/12 px-1 py-3 first:border-t-0"
                >
                  <span className="flex items-center justify-between gap-3 text-xs font-dm-sans-bold text-[#f6d0f1]">
                    <span
                      className="h-1.5 w-14 rounded-lg bg-[#f0b6df]/26"
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                    {signal.label}
                    </span>
                    <span
                      className="h-1.5 w-10 rounded-lg bg-[#ef3e78]"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="mt-3 block space-y-1.5" aria-hidden="true">
                    {signal.bars.map((bar, index) => (
                      <span
                        key={`${signal.label}-${index}`}
                        className={`block h-1.5 rounded-lg bg-[#f0b6df]/24 ${bar}`}
                      />
                    ))}
                  </span>
                </span>
              ))}
              <span className="sr-only">
                Use support for waitlist, verification, access timing, or
                partnership questions. Support can explain current access and
                next steps, but it cannot create accounts, profiles, matches,
                checkout sessions, or payment records from this website.
              </span>
            </p>
            <p className="mt-4 border-l-2 border-[#F4376D]/55 py-2 pl-4 pr-3 text-sm font-dm-sans-bold text-[#f6d0f1]">
              No private data.
              <span className="sr-only">
                No sensitive data by email.
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

          <div className="divide-y divide-white/10 border-y border-white/12">
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
                    className={`grid min-h-16 w-full cursor-pointer gap-3 border-l-2 px-3 py-4 text-left transition duration-200 hover:text-[#f3c7de] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-4 ${
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
                    <span>
                      <span className="block font-dm-sans-bold text-base text-white sm:text-lg">
                        {faq.shortQuestion}
                        <span className="sr-only">. {faq.question}</span>
                      </span>
                      <span className="sr-only">
                        {faq.status}
                      </span>
                      <span className="mt-3 grid max-w-28 grid-cols-3 gap-1.5" aria-hidden="true">
                        <span className="h-1.5 rounded-lg bg-[#ef3e78]/58" />
                        <span className="h-1.5 rounded-lg bg-[#8d69f6]/42" />
                        <span className="h-1.5 rounded-lg bg-[#5c83e9]/32" />
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
                      <p className="px-3 pb-5 pt-3 text-sm font-dm-sans-bold text-[#d7c7ed] sm:ml-16">
                        {faq.shortAnswer}
                        <span className="sr-only"> {faq.answer}</span>
                      </p>
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
