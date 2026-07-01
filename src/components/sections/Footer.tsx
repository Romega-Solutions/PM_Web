import React, { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle,
  Heart,
  Mail,
  MapPin,
  Shield,
} from "lucide-react";
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
    { name: "Plans", detail: "Membership", href: "#pricing" },
    { name: "Waitlist", href: "#download" },
  ];

  const footerSignals = ["Intent", "Review", "Privacy"];
  const contactLinks = [
    {
      href: launchEmailLinks.launchSupport,
      label: "Support",
      value: SUPPORT_EMAIL,
      ariaLabel: "Email PinayMate launch support",
      icon: Mail,
    },
    {
      href: launchEmailLinks.legalQuestion,
      label: "Legal",
      value: LEGAL_EMAIL,
      ariaLabel: "Email PinayMate legal and privacy team",
      icon: Shield,
    },
  ];

  return (
    <>
      <footer className="relative overflow-hidden bg-[#120a1b] text-white">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f0b6df]/18 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="grid gap-6 border-b border-[#f0b6df]/12 py-12 md:grid-cols-[1.2fr_0.65fr_1.15fr] lg:gap-8 lg:py-14">
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
                  <span className="text-xs font-dm-sans-semibold text-[#f0b6df]">
                    Filipino-first dating
                    <span className="sr-only"> platform</span>
                  </span>
                </div>
              </div>

              <p className="inline-flex min-h-9 items-center rounded-lg border border-[#f0b6df]/12 bg-[#2e1e5a]/38 px-3 py-2 text-xs font-dm-sans-bold text-[#f3c7de]">
                Intent + safety
                <span className="sr-only">
                  . Intent. Safety. Respect.
                  PinayMate helps people approach Filipino dating with clearer
                  intent, safer introductions, and more respectful first steps.
                </span>
              </p>

              <div
                className="rounded-lg border border-[#f0b6df]/12 bg-[#1a0d27]/55 p-4"
                aria-hidden="true"
              >
                <div className="grid grid-cols-3 gap-2">
                  {footerSignals.map((signal, index) => (
                    <div key={signal} className="min-h-20 rounded-lg bg-[#2e1e5a]/45 p-3">
                      <span
                        className={`block h-2 rounded-lg ${
                          index === 0
                            ? "bg-[#ef3e78]"
                            : index === 1
                              ? "bg-[#8d69f6]"
                              : "bg-[#5c83e9]"
                        }`}
                      />
                      <span className="mt-3 block h-2 rounded-lg bg-[#f0b6df]/20" />
                      <span className="mt-2 block h-2 w-2/3 rounded-lg bg-[#f0b6df]/14" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid max-w-sm grid-cols-2 border-y border-[#f0b6df]/12 py-2">
                <div className="flex min-h-9 items-center justify-center gap-1.5 border-l border-[#f0b6df]/12 px-3 py-1 first:border-l-0">
                  <CheckCircle className="h-3.5 w-3.5 text-[#49d49a]" aria-hidden="true" />
                  <span className="text-xs font-dm-sans-semibold text-[#aaf1cf]">
                    Review cues
                  </span>
                </div>
                <div className="flex min-h-9 items-center justify-center gap-1.5 border-l border-[#f0b6df]/12 px-3 py-1 first:border-l-0">
                  <Shield className="h-3.5 w-3.5 text-[#91b1ff]" aria-hidden="true" />
                  <span className="text-xs font-dm-sans-semibold text-[#cddcff]">
                    Safety first
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-dm-sans-bold text-base text-white">
                Explore
                <span className="sr-only">. Navigate</span>
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-1 xl:grid-cols-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="inline-flex min-h-11 items-center justify-between gap-2 rounded-lg border border-[#f0b6df]/10 bg-[#1a0d27]/50 px-3 text-sm font-dm-sans-semibold text-[#d7c7ed] transition-colors hover:border-[#f0b6df]/28 hover:bg-[#2e1e5a]/42 hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
                  >
                    {link.name}
                    {"detail" in link ? (
                      <span className="sr-only">. {link.detail}</span>
                    ) : null}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-dm-sans-bold text-base text-white">
                Email
                <span className="sr-only">. Contact</span>
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                {contactLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.ariaLabel}
                      className="rounded-lg border border-[#f0b6df]/10 bg-[#1a0d27]/50 p-3 text-sm text-[#d7c7ed] transition-colors hover:border-[#f0b6df]/28 hover:bg-[#2e1e5a]/42 hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2e1e5a]/70 text-[#f3c7de]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="mt-3 block font-dm-sans-bold text-white">
                        {link.label}
                      </span>
                      <span className="sr-only">{link.value}</span>
                    </a>
                  );
                })}
                <div className="rounded-lg border border-[#f0b6df]/10 bg-[#1a0d27]/50 p-3 text-sm text-[#d7c7ed] sm:col-span-2 md:col-span-1 xl:col-span-2">
                  <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span className="font-dm-sans-bold text-white">
                      Markets
                      <span className="sr-only">. Launch markets</span>
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2" aria-hidden="true">
                    <span className="h-8 rounded-lg bg-[#ef3e78]/24" />
                    <span className="h-8 rounded-lg bg-[#8d69f6]/22" />
                    <span className="h-8 rounded-lg bg-[#5c83e9]/18" />
                  </div>
                  <span className="sr-only">
                    Philippines, US, and launch-market members
                  </span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 border-y border-[#f0b6df]/12 py-2 text-xs font-dm-sans-bold text-[#f6d0f1]">
                <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0">
                  Store
                </span>
                <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0">
                  Social
                </span>
                <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0">
                  Community
                </span>
                <span className="sr-only">
                  Store, social, and community links will appear when those public
                  channels are available for members.
                </span>
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
                className="min-h-11 rounded-lg px-2 text-[#d7c7ed] transition-colors hover:bg-[#2e1e5a]/42 hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
              >
                Privacy
              </button>
              <span className="text-[#5f536d]">•</span>
              <button
                type="button"
                onClick={() => openLegalModal("terms")}
                aria-label="Open PinayMate terms notice"
                className="min-h-11 rounded-lg px-2 text-[#d7c7ed] transition-colors hover:bg-[#2e1e5a]/42 hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
              >
                Terms
              </button>
            </div>

            <p className="flex items-center gap-1 text-xs text-[#9b8fac]">
              <Heart className="h-3 w-3 text-[#F4376D]" fill="#F4376D" aria-hidden="true" />
              Safer intros
              <span className="sr-only">. Built for safer introductions</span>
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
