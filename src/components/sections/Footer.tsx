import React, { useState } from "react";
import {
  IconCircleCheck,
  IconHeartFilled,
  IconMail,
  IconMapPin,
  IconShieldCheck,
} from "@tabler/icons-react";
import LegalModal from "../modals/LegalModal";
import {
  LEGAL_EMAIL,
  SUPPORT_EMAIL,
  launchEmailLinks,
} from "../../lib/launchEmailLinks";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    type: "privacy" | "terms" | null;
  }>({ isOpen: false, type: null });

  const openLegalModal = (type: "privacy" | "terms") => {
    setLegalModal({ isOpen: true, type });
  };

  const closeLegalModal = () => {
    setLegalModal({ isOpen: false, type: null });
  };

  const quickLinks = [
    { name: "Trust", href: "#about" },
    { name: "Safety", href: "#features" },
    { name: "Membership", href: "#pricing" },
    { name: "Waitlist", href: "#download" },
  ];

  const linkClass =
    "inline-flex min-h-11 items-center gap-2 rounded-lg text-sm text-blush transition-colors duration-200 hover:text-white";

  const contactLinkClass = linkClass.replace("inline-flex", "flex");

  return (
    <>
      <footer className="pm-dark relative">
        <div className="pm-edge" aria-hidden="true" />

        <div className="mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8 xl:px-16">
          <div className="grid gap-10 border-b border-white/10 py-12 md:grid-cols-[1.1fr_0.8fr_1fr] lg:py-16">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src="/main-logo-no-bg.svg"
                  alt="PinayMate"
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain"
                />
                <div>
                  <span className="block font-hello-paris-bold text-2xl text-white">
                    PinayMate
                  </span>
                  <span className="text-sm font-dm-sans-medium text-blush">
                    Filipino-first dating platform
                  </span>
                </div>
              </div>

              <p className="max-w-sm text-[15px] leading-relaxed text-blush">
                PinayMate helps people approach Filipino dating with clearer
                intent, safer introductions, and more respectful first steps.
              </p>

              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-blush">
                <li className="flex items-center gap-1.5">
                  <IconCircleCheck
                    size={17}
                    stroke={1.75}
                    className="text-[#7ee0b4]"
                    aria-hidden="true"
                  />
                  Review cues
                </li>
                <li className="flex items-center gap-1.5">
                  <IconShieldCheck
                    size={17}
                    stroke={1.75}
                    className="text-luna-soft"
                    aria-hidden="true"
                  />
                  Safety first
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-lora-medium text-lg text-white">Navigate</h3>
              <div className="mt-3 grid grid-cols-2 gap-x-4">
                {quickLinks.map((link) => (
                  <a key={link.name} href={link.href} className={linkClass}>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-lora-medium text-lg text-white">Contact</h3>
              <div className="mt-3 space-y-1">
                <a
                  href={launchEmailLinks.launchSupport}
                  aria-label="Email PinayMate launch support"
                  className={contactLinkClass}
                >
                  <IconMail size={18} stroke={1.75} aria-hidden="true" />
                  <span className="font-dm-sans-medium">{SUPPORT_EMAIL}</span>
                </a>
                <a
                  href={launchEmailLinks.legalQuestion}
                  aria-label="Email PinayMate legal and privacy team"
                  className={contactLinkClass}
                >
                  <IconShieldCheck size={18} stroke={1.75} aria-hidden="true" />
                  <span className="font-dm-sans-medium">{LEGAL_EMAIL}</span>
                </a>
                <div className="flex min-h-11 items-center gap-2 text-sm text-blush">
                  <IconMapPin size={18} stroke={1.75} aria-hidden="true" />
                  <span>Philippines, US, and launch-market members</span>
                </div>
              </div>

              <p className="mt-4 border-l-[3px] border-brand pl-3 text-sm leading-6 text-blush">
                Store, social, and community links will appear when those public
                channels are available for members.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 py-6 md:flex-row">
            <p className="text-sm text-blush/80">
              © {currentYear} PinayMate. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <button
                type="button"
                onClick={() => openLegalModal("privacy")}
                aria-label="Open PinayMate privacy notice"
                className="min-h-11 min-w-11 rounded-lg px-2 text-blush transition-colors duration-200 hover:text-white"
              >
                Privacy
              </button>
              <span className="text-blush/50" aria-hidden="true">
                •
              </span>
              <button
                type="button"
                onClick={() => openLegalModal("terms")}
                aria-label="Open PinayMate terms notice"
                className="min-h-11 min-w-11 rounded-lg px-2 text-blush transition-colors duration-200 hover:text-white"
              >
                Terms
              </button>
            </div>

            <p className="flex items-center gap-1.5 text-sm text-blush/80">
              <IconHeartFilled
                size={14}
                className="text-brand"
                aria-hidden="true"
              />
              Built for safer introductions
            </p>
          </div>
        </div>
      </footer>

      {legalModal.type && (
        <LegalModal
          isOpen={legalModal.isOpen}
          onClose={closeLegalModal}
          type={legalModal.type}
        />
      )}
    </>
  );
};

export default Footer;
