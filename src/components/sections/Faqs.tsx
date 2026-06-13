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
    status: "Waitlist only",
    answer:
      "PinayMate is opening in stages. The website lets you join updates, share plan interest, and contact support while mobile access rolls out.",
    icon: HeartHandshake,
  },
  {
    question: "Can I pay or create a dating profile today?",
    status: "No payment today",
    answer:
      "No. This website lets you join updates or share interest. Your app account, dating profile, matches, checkout, and payments stay inside the app access flow.",
    icon: MailCheck,
  },
  {
    question: "How is privacy handled?",
    status: "Privacy first",
    answer:
      "This website is for waitlist and support contact only. Do not send passwords, payment details, ID documents, exact location, or private profile information by email. Profile visibility, account settings, deletion controls, and safety actions belong inside the app.",
    icon: ShieldCheck,
  },
  {
    question: "What does verification mean?",
    status: "Manual review",
    answer:
      "Verification is designed as a private review process, not an email attachment process. Uploading documents does not automatically approve a member.",
    icon: LockKeyhole,
  },
  {
    question: "Where do I get app links?",
    status: "Waitlist first",
    answer:
      "Join the waitlist and choose your platform. PinayMate will share the right download and access path through official updates.",
    icon: ShieldCheck,
  },
];

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-br from-[#f9f3ff] via-white to-[#eef4ff] py-20 sm:py-24"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ef3e78]/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#5c83e9]/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-dm-sans-bold uppercase text-[#b31460]">
            FAQ and access clarity
          </p>
          <h2 className="mt-4 font-lora text-4xl font-bold leading-tight text-[#21132f] sm:text-5xl">
            Straight answers before anyone joins.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#5f6572]">
            The path is simple: join the waitlist first, then use the app for
            profiles, matching, privacy controls, and paid access inside the
            account flow.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="border-y border-[#eadfea] py-6 lg:sticky lg:top-28">
            <p className="text-sm font-dm-sans-bold uppercase text-[#b31460]">
              Support boundary
            </p>
            <h3 className="mt-3 font-lora text-2xl font-bold text-[#21132f]">
              Need a direct answer?
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#5f6572]">
              Use support for waitlist, verification, access timing, or
              partnership questions. Support can explain current access and
              next steps, but it cannot create accounts, profiles, matches,
              checkout sessions, or payment records from this website.
            </p>
            <p className="mt-4 border-l-2 border-[#F4376D]/35 pl-4 text-sm leading-7 text-[#5f6572]">
              Do not send passwords, payment details, ID documents, precise
              location, private profile information, or private message
              screenshots by email.
            </p>
            <a
              href={launchEmailLinks.supportQuestion}
              aria-label="Email PinayMate support without sending sensitive account data"
              className="mt-6 inline-flex min-h-12 cursor-pointer items-center justify-center rounded-lg bg-[#21132f] px-6 py-3 font-dm-sans-bold text-white shadow-lg shadow-[#21132f]/15 transition duration-200 hover:bg-[#3b2255] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f6fe4]"
            >
              Contact support
            </a>
          </aside>

          <div className="divide-y divide-[#eadfea] border-y border-[#eadfea]">
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
                    className="grid min-h-16 w-full cursor-pointer gap-4 py-5 text-left transition duration-200 hover:text-[#b31460] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f6fe4] sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-5"
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition duration-200 ${
                        isOpen
                          ? "bg-gradient-to-br from-[#F4376D] to-[#8d69f6]"
                          : "bg-[#2e1e5a]"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-dm-sans-bold text-base text-[#21132f] sm:text-lg">
                        {faq.question}
                      </span>
                      <span className="mt-2 block text-xs font-dm-sans-bold uppercase tracking-[0.2em] text-[#b31460]">
                        {faq.status}
                      </span>
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4efff] text-[#5a3baf] transition-transform duration-300 ${
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
                      <p className="pb-6 text-base leading-7 text-[#5f6572] sm:ml-16">
                        {faq.answer}
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
