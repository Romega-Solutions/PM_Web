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
      "PinayMate is in launch preparation. The website is collecting waitlist, plan-interest, and support emails while the mobile app, policies, verification path, and launch QA are finalized.",
    icon: HeartHandshake,
  },
  {
    question: "Can I pay or create a dating profile today?",
    status: "No payment today",
    answer:
      "No. This website opens email waitlist and plan-interest flows only. It does not create an app account, dating profile, match request, matching session, checkout, or payment record.",
    icon: MailCheck,
  },
  {
    question: "How is privacy handled?",
    status: "Launch-gated",
    answer:
      "The website should be treated as a waitlist and support surface only. Do not send passwords, payment details, ID documents, exact location, or private profile information by email. Profile visibility, account settings, deletion controls, and safety actions apply only when those app screens are live for your account or test group.",
    icon: ShieldCheck,
  },
  {
    question: "What does verification mean?",
    status: "Manual review",
    answer:
      "Verification is designed as a protected review workflow, not an email attachment process. Uploading documents should not auto-approve a member; approval requires the protected backend path and review state to pass.",
    icon: LockKeyhole,
  },
  {
    question: "When will app links be available?",
    status: "After sign-off",
    answer:
      "App links should be published after native QA, production data-policy checks, verification endpoint validation, support workflows, and launch messaging are signed off.",
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
            FAQ and launch clarity
          </p>
          <h2 className="mt-4 font-lora text-4xl font-bold leading-tight text-[#21132f] sm:text-5xl">
            Straight answers before anyone joins.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#5f6572]">
            The current product position is honest: waitlist first, safety and
            backend verification before public launch claims.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openFaq === index;
            const Icon = faq.icon;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-lg border bg-white/90 shadow-lg shadow-[#2e1e5a]/5 ring-1 ring-[#ecebf0] transition duration-200 ${
                  isOpen ? "border-[#F4376D]/25" : "border-white/80"
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex min-h-16 w-full cursor-pointer items-center justify-between gap-3 px-5 py-4 text-left transition duration-200 hover:bg-[#fff7fb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f6fe4] sm:gap-4 sm:px-6"
                >
                  <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white transition duration-200 ${
                        isOpen
                          ? "bg-gradient-to-br from-[#F4376D] to-[#8d69f6]"
                          : "bg-[#2e1e5a]"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="font-dm-sans-bold text-base text-[#21132f] sm:text-lg">
                        {faq.question}
                      </span>
                      <span className="mt-2 inline-flex rounded-lg border border-[#F4376D]/20 bg-[#fff4fa] px-3 py-1 text-xs font-dm-sans-bold uppercase text-[#b31460]">
                        {faq.status}
                      </span>
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
                    <p className="border-t border-[#ecebf0] px-5 py-5 text-base leading-7 text-[#5f6572] sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg border border-[#F4376D]/20 bg-[#21132f] p-6 text-center text-white shadow-2xl shadow-[#21132f]/20">
          <h3 className="font-lora text-2xl font-bold">
            Need a direct answer?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#d7c7ed]">
            Use support for waitlist, verification, launch timing, or
            partnership questions. Support can explain current readiness and
            next steps, but it cannot create accounts, profiles, matches,
            checkout sessions, or payment records from this website. Account
            changes, profile settings, and deletion requests are handled through
            app features when available or through support during launch
            preparation. Do not send passwords, payment details, ID documents,
            precise location, private profile information, or private message
            screenshots by email. Do not send passwords, payment details, ID
            documents, or private message screenshots by email.
            {" Emailing support does not create an app account, dating profile, match request, or payment record. Account changes, profile settings, and deletion requests go through support during launch preparation."}
          </p>
          <a
            href={launchEmailLinks.supportQuestion}
            aria-label="Email PinayMate support without sending sensitive account data"
            className="mt-5 inline-flex min-h-12 cursor-pointer items-center justify-center rounded-lg bg-white px-6 py-3 font-dm-sans-bold text-[#21132f] shadow-lg shadow-black/15 transition duration-200 hover:bg-[#fff4fa] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
          >
            Contact support
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
