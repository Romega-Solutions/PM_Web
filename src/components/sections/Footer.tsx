import React, { useState } from "react";
import { CheckCircle, Heart, Mail, MapPin, Shield } from "lucide-react";
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

  return (
    <>
      <footer className="relative overflow-hidden bg-[#120a1b] text-white">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="grid gap-10 border-b border-white/10 py-12 md:grid-cols-[1.1fr_0.8fr_1fr] lg:py-14">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11">
                  <img
                    src="/main-logo-no-bg.svg"
                    alt="PinayMate"
                    className="h-full w-full object-contain drop-shadow-lg"
                  />
                </div>
                <div>
                  <span className="block text-2xl font-hello-paris-bold text-white">
                    PinayMate
                  </span>
                  <span className="text-xs font-dm-sans-semibold uppercase text-[#f0b6df]">
                    Filipino-first dating platform
                  </span>
                </div>
              </div>

              <p className="max-w-sm text-sm leading-6 text-[#d7c7ed]">
                PinayMate helps people approach Filipino dating with clearer
                intent, safer introductions, and more respectful first steps.
              </p>

              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 rounded-full border border-[#22a574]/20 bg-[#22a574]/10 px-3 py-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-[#49d49a]" aria-hidden="true" />
                  <span className="text-xs font-dm-sans-semibold text-[#aaf1cf]">
                    Review cues
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-[#5c83e9]/25 bg-[#5c83e9]/10 px-3 py-1.5">
                  <Shield className="h-3.5 w-3.5 text-[#91b1ff]" aria-hidden="true" />
                  <span className="text-xs font-dm-sans-semibold text-[#cddcff]">
                    Safety first
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-dm-sans-bold text-base text-white">Navigate</h3>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="inline-flex min-h-11 items-center rounded-lg px-1 text-sm font-dm-sans-semibold text-[#d7c7ed] transition-colors hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-dm-sans-bold text-base text-white">Contact</h3>
              <div className="mt-4 space-y-3">
                <a
                  href={launchEmailLinks.launchSupport}
                  aria-label="Email PinayMate launch support"
                  className="flex min-h-11 items-center gap-2 rounded-lg text-sm text-[#d7c7ed] transition-colors hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span className="font-dm-sans-semibold">{SUPPORT_EMAIL}</span>
                </a>
                <a
                  href={launchEmailLinks.legalQuestion}
                  aria-label="Email PinayMate legal and privacy team"
                  className="flex min-h-11 items-center gap-2 rounded-lg text-sm text-[#d7c7ed] transition-colors hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
                >
                  <Shield className="h-4 w-4" aria-hidden="true" />
                  <span className="font-dm-sans-semibold">{LEGAL_EMAIL}</span>
                </a>
                <div className="flex items-center gap-2 text-sm text-[#d7c7ed]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span>Philippines, US, and launch-market members</span>
                </div>
              </div>

              <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-[#d7c7ed]">
                Store, social, and community links will appear when those public
                channels are available for members.
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
            <p className="text-sm text-[#9b8fac]">
              © {currentYear} PinayMate. All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-sm">
              <button
                type="button"
                onClick={() => openLegalModal("privacy")}
                aria-label="Open PinayMate privacy notice"
                className="min-h-11 text-[#d7c7ed] transition-colors hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
              >
                Privacy
              </button>
              <span className="text-[#5f536d]">•</span>
              <button
                type="button"
                onClick={() => openLegalModal("terms")}
                aria-label="Open PinayMate terms notice"
                className="min-h-11 text-[#d7c7ed] transition-colors hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
              >
                Terms
              </button>
            </div>

            <p className="flex items-center gap-1 text-xs text-[#9b8fac]">
              <Heart className="h-3 w-3 text-[#F4376D]" fill="#F4376D" aria-hidden="true" />
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
