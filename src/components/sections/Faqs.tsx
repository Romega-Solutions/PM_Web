import { useState } from "react";
import { IconChevronDown, IconMail } from "@tabler/icons-react";
import { launchEmailLinks } from "../../lib/launchEmailLinks";

const faqData = [
  {
    question: "Is PinayMate live yet?",
    status: "Waitlist only",
    answer:
      "Not yet. PinayMate is opening in stages. Join the waitlist to hear first when it opens on your phone.",
  },
  {
    question: "What do I share when I join?",
    status: "Email only",
    answer:
      "Only your email and whether you use iPhone or Android. This website is for waitlist and support contact only. Do not send passwords, payment details, ID documents, exact location, or private profile information by email.",
  },
  {
    question: "Can I pay or make a profile today?",
    status: "No payment today",
    answer:
      "No. This website lets you join updates or share interest. Your app account, dating profile, matches, checkout, and payments stay inside the app access flow.",
  },
  {
    question: "How does profile review work?",
    status: "In the app",
    answer:
      "You complete a private review step in the app. Verification is a private review process, not an email attachment process, and uploading documents does not automatically approve a member.",
  },
  {
    question: "Where do I get the app?",
    status: "Waitlist first",
    answer:
      "Join the waitlist and choose your platform. PinayMate will share the right download and access path through official updates.",
  },
];

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="pm-light border-t border-line">
      <div className="mx-auto grid max-w-[1360px] gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8 lg:py-24 xl:px-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="pm-section-title pm-reveal text-plum">
            Questions before you join
          </h2>

          <div className="mt-8 rounded-[20px] bg-petal p-6">
            <h3 className="font-lora-medium text-xl text-plum">
              Need a direct answer?
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-mauve">
              Use support for waitlist, verification, access timing, or
              partnership questions. Support can explain current access and
              next steps, but it cannot create accounts, profiles, matches,
              checkout sessions, or payment records from this website.
            </p>
            <p className="mt-3 border-l-[3px] border-brand pl-3 text-sm leading-6 text-mauve">
              Do not send passwords, payment details, ID documents, precise
              location, private profile information, or private message
              screenshots by email.
            </p>
            <a
              href={launchEmailLinks.supportQuestion}
              aria-label="Email PinayMate support without sending sensitive account data"
              className="pm-btn pm-btn-outline mt-5"
            >
              <IconMail size={18} stroke={1.75} aria-hidden="true" />
              Contact support
            </a>
            <a
              href="/support"
              className="mt-3 flex min-h-11 items-center text-sm font-dm-sans-semibold text-rosas underline underline-offset-4 transition-colors hover:text-plum"
            >
              Help, safety reports, and emergency guidance
            </a>
          </div>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faqData.map((faq, index) => {
            const isOpen = openFaq === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <article key={faq.question}>
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex min-h-16 w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                >
                  <span>
                    <span className="block font-lora-medium text-lg leading-snug text-plum sm:text-xl">
                      {faq.question}
                    </span>
                    <span className="mt-1 block text-[13px] font-dm-sans-semibold text-rosas">
                      {faq.status}
                    </span>
                  </span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-[transform,background-color,color] duration-300 motion-reduce:transition-none ${
                      isOpen ? "rotate-180 bg-rosas text-white" : "bg-petal text-rosas"
                    }`}
                    aria-hidden="true"
                  >
                    <IconChevronDown size={18} stroke={1.75} />
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
                    <p className="max-w-2xl pb-6 text-base leading-7 text-mauve">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
