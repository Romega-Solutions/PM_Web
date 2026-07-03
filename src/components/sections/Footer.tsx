import React, { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle,
  Heart,
  LockKeyhole,
  Mail,
  MapPin,
  Shield,
  Sparkles,
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

  const footerSignals = [
    { label: "Intent", icon: Sparkles },
    { label: "Review", icon: Shield },
    { label: "Privacy", icon: LockKeyhole },
  ];
  const pathModules = [
    {
      label: "Waitlist",
      tone: "bg-[#ef3e78]/68",
    },
    {
      label: "Review",
      tone: "bg-[#8d69f6]/52",
    },
    {
      label: "Access",
      tone: "bg-[#5c83e9]/44",
    },
  ];
  const channelSignals = [
    {
      label: "Store",
      tone: "bg-[#ef3e78]/44",
    },
    {
      label: "Social",
      tone: "bg-[#8d69f6]/38",
    },
    {
      label: "Community",
      tone: "bg-[#5c83e9]/34",
    },
  ];
  const footerRouteNodes = [
    {
      label: "Join",
      tone: "from-[#ef3e78] to-[#8d69f6]",
      icon: Sparkles,
    },
    {
      label: "Review",
      tone: "from-[#8d69f6] to-[#5c83e9]",
      icon: Shield,
    },
    {
      label: "Access",
      tone: "from-[#ef3e78] to-[#5c83e9]",
      icon: Mail,
    },
  ];
  const footerDeviceTiles = [
    { label: "Intent", icon: Sparkles, tone: "bg-[#ef3e78]/22 text-[#ffe8f1]" },
    { label: "Review", icon: Shield, tone: "bg-[#8d69f6]/20 text-[#f6d0f1]" },
    { label: "Privacy", icon: LockKeyhole, tone: "bg-[#5c83e9]/18 text-[#e3dcf9]" },
    { label: "Access", icon: Mail, tone: "bg-[#f0b6df]/12 text-[#f6d0f1]" },
  ];
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
      <footer className="pm-footer-root relative overflow-hidden bg-[#120a1b] text-white">
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
                  <span className="sr-only">
                    Filipino-first dating platform
                  </span>
                </div>
              </div>

              <p className="sr-only">
                Intent. Safety. Respect.
                <span className="sr-only">
                  Intent + safety.
                  PinayMate helps people approach Filipino dating with clearer
                  intent, safer introductions, and more respectful first steps.
                </span>
              </p>

              <div className="pm-feature-signal-strip max-w-none" aria-hidden="true">
                {footerSignals.map((signal) => {
                  const Icon = signal.icon;

                  return (
                    <span key={signal.label}>
                      <Icon className="h-5 w-5" />
                    </span>
                  );
                })}
              </div>
              <div className="sr-only">
                {footerSignals.map((signal) => (
                  <span key={signal.label}>{signal.label}</span>
                ))}
              </div>

              <div className="grid max-w-sm grid-cols-2 border-y border-[#f0b6df]/12 py-2" aria-hidden="true">
                <div className="flex min-h-9 items-center justify-center gap-1.5 border-l border-[#f0b6df]/12 px-3 py-1 first:border-l-0">
                  <CheckCircle className="h-3.5 w-3.5 text-[#49d49a]" aria-hidden="true" />
                  <span className="pm-mini-state-chips">
                    <span>Intent</span>
                    <span>Fit</span>
                  </span>
                </div>
                <div className="flex min-h-9 items-center justify-center gap-1.5 border-l border-[#f0b6df]/12 px-3 py-1 first:border-l-0">
                  <Shield className="h-3.5 w-3.5 text-[#91b1ff]" aria-hidden="true" />
                  <span className="pm-mini-state-chips">
                    <span>Review</span>
                    <span>Privacy</span>
                  </span>
                </div>
              </div>

              <div className="pm-lift-panel overflow-hidden border-y border-[#f0b6df]/14 bg-[#1a0d27]/42">
                <div className="pm-safety-radar min-h-72" aria-hidden="true">
                  <span className="pm-safety-radar-core">
                    <Sparkles className="h-8 w-8" />
                  </span>
                  <span className="pm-safety-radar-node pm-safety-radar-node-a">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="pm-safety-radar-node pm-safety-radar-node-b">
                    <Shield className="h-5 w-5" />
                  </span>
                  <span className="pm-safety-radar-node pm-safety-radar-node-c">
                    <LockKeyhole className="h-5 w-5" />
                  </span>
                  <span className="pm-safety-radar-node pm-safety-radar-node-d">
                    <CheckCircle className="h-5 w-5" />
                  </span>
                </div>
                <div className="sr-only">
                  <span>Launch path.</span>
                  {pathModules.map((module) => (
                    <span key={module.label}>{module.label}. Fit. Cue. Safe.</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="sr-only">
                Explore
              </h3>
              <p className="sr-only">
                Explore
                <span>. Navigate</span>
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-1 xl:grid-cols-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    aria-label={`Go to ${link.name}`}
                    className="inline-grid min-h-12 grid-cols-[auto_1fr_auto] items-center gap-3 border-l-2 border-[#f0b6df]/12 px-3 text-sm font-dm-sans-semibold text-[#d7c7ed] transition-colors hover:border-[#f0b6df]/36 hover:bg-[#2e1e5a]/24 hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#2e1e5a]/55 text-[#f3c7de]" aria-hidden="true">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                    <span className="pm-footer-link-copy" aria-hidden="true">
                      <span>{link.name}</span>
                      <span>{"detail" in link ? link.detail : "Open"}</span>
                    </span>
                    <span className="sr-only">{link.name}</span>
                    {"detail" in link ? (
                      <span className="sr-only">. {link.detail}</span>
                    ) : null}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>

              <div className="mt-5 border-y border-[#f0b6df]/12 py-3">
                <div className="grid gap-2">
                  {quickLinks.slice(0, 3).map((link, index) => (
                    <span key={link.name} className="grid grid-cols-[auto_1fr] items-center gap-3">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                          index === 0
                            ? "bg-[#ef3e78]/22 text-[#f7a4c8]"
                            : index === 1
                              ? "bg-[#8d69f6]/22 text-[#d9c8ff]"
                              : "bg-[#5c83e9]/20 text-[#c8d8ff]"
                        }`}
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                      <span className="pm-mini-state-chips">
                        <span>{link.name}</span>
                        <span>{index === 0 ? "Trust" : index === 1 ? "Safety" : "Plans"}</span>
                        <span className="sr-only">{link.name}</span>
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="sr-only">
                Contact
              </h3>
              <p className="sr-only">
                Email
                <span>. Contact</span>
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                {contactLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.ariaLabel}
                      className="border-y border-[#f0b6df]/12 px-3 py-3 text-sm text-[#d7c7ed] transition-colors hover:border-[#f0b6df]/28 hover:bg-[#2e1e5a]/24 hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2e1e5a]/70 text-[#f3c7de]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="pm-mini-state-chips mt-3" aria-hidden="true">
                        <span>{link.label}</span>
                        <span>{link.label === "Support" ? "Launch" : "Privacy"}</span>
                        <span>Email</span>
                      </span>
                      <span className="sr-only">
                        {link.label}
                      </span>
                      <span className="sr-only">{link.value}</span>
                    </a>
                  );
                })}
                <div className="border-y border-[#f0b6df]/12 px-3 py-3 text-sm text-[#d7c7ed] sm:col-span-2 md:col-span-1 xl:col-span-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">
                      Launch markets
                      <span>. Markets</span>
                    </span>
                  </div>
                  <div className="pm-footer-market-route mt-3" aria-hidden="true">
                    <span className="pm-footer-market-node">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span className="pm-footer-market-line">
                      <span />
                      <span />
                      <span />
                    </span>
                    <span className="pm-footer-market-node pm-footer-market-node-intent">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span className="pm-footer-market-line">
                      <span />
                      <span />
                      <span />
                    </span>
                    <span className="pm-footer-market-node pm-footer-market-node-safe">
                      <Shield className="h-4 w-4" />
                    </span>
                  </div>
                  <span className="sr-only">
                    Philippines, US, and launch-market members
                  </span>
                </div>
              </div>

              <div className="mt-5 border-y border-[#f0b6df]/12 py-3 text-xs font-dm-sans-bold text-[#f6d0f1]">
                <div className="pm-footer-channel-route" aria-hidden="true">
                  {channelSignals.map((channel, index) => (
                    <span key={channel.label} className="pm-footer-channel-node">
                      {index === 0 ? (
                        <Sparkles className="h-5 w-5 text-[#f7a4c8]" />
                      ) : index === 1 ? (
                        <LockKeyhole className="h-5 w-5 text-[#d9c8ff]" />
                      ) : (
                        <Shield className="h-5 w-5 text-[#c8d8ff]" />
                      )}
                      {index < channelSignals.length - 1 ? (
                        <span className={`pm-footer-channel-pulse ${channel.tone}`} />
                      ) : null}
                    </span>
                  ))}
                </div>
                <div className="sr-only">
                  {channelSignals.map((channel) => (
                    <span key={channel.label}>{channel.label}. Later.</span>
                  ))}
                </div>
                <div className="pm-footer-channel-meter mt-3" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="sr-only">
                  Store. Social. Community.
                  Store, social, and community links will appear when those public
                  channels are available for members.
                </span>
              </div>
            </div>
          </div>

          <div className="border-b border-[#f0b6df]/12 py-6">
            <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div className="pm-lift-panel relative overflow-hidden border-y border-[#f0b6df]/14 bg-[#1a0d27]/42 py-5">
                <div
                  className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#ef3e78]/14 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative grid gap-4 px-4 sm:grid-cols-[0.72fr_1fr] sm:items-center">
                  <div className="mx-auto w-full max-w-48 border border-[#f0b6df]/16 bg-[#08050d] p-2 shadow-lg shadow-black/20" aria-hidden="true">
                    <div className="overflow-hidden rounded-lg border border-[#f0b6df]/12 bg-[#120a1b] p-3">
                      <div className="pm-footer-device-scene">
                        <span className="pm-footer-device-person" />
                        <span className="pm-footer-device-badge">
                          <Shield className="h-3.5 w-3.5" />
                        </span>
                        <span className="pm-footer-device-route">
                          <span />
                          <span />
                          <span />
                        </span>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-2 text-center text-[0.62rem] font-dm-sans-bold" aria-hidden="true">
                        {footerDeviceTiles.map((tile) => (
                          <span key={tile.label} className={`grid min-h-10 place-items-center rounded-lg px-2 py-2 ${tile.tone}`}>
                            <tile.icon className="h-4 w-4" />
                          </span>
                        ))}
                      </div>
                      <span className="sr-only">
                        {footerDeviceTiles.map((tile) => tile.label).join(". ")}
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    {footerRouteNodes.map((node) => {
                      const Icon = node.icon;

                      return (
                        <span
                          key={node.label}
                          className="pm-footer-route-card grid grid-cols-[auto_1fr] items-center gap-3 border-l border-[#f0b6df]/12 bg-[#120a1b]/48 px-3 py-2"
                        >
                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${node.tone} text-white`}
                            aria-hidden="true"
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="pm-footer-route-meter" aria-hidden="true">
                            <span />
                            <span />
                            <span />
                          </span>
                          <span className="sr-only">
                            {node.label}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </div>
                <p className="sr-only">
                  Launch path visual: join the waitlist, follow review cues, and
                  receive app access updates when available.
                </p>
              </div>

              <div className="pm-footer-channel-band">
                {channelSignals.map((channel, index) => (
                  <span
                    key={channel.label}
                    className="pm-footer-channel-band-node"
                  >
                    <span className={`pm-footer-channel-band-icon ${channel.tone}`} aria-hidden="true">
                      {index === 0 ? (
                        <Sparkles className="h-4 w-4" />
                      ) : index === 1 ? (
                        <LockKeyhole className="h-4 w-4" />
                      ) : (
                        <Shield className="h-4 w-4" />
                      )}
                    </span>
                    <span className="pm-footer-signal-meter" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </span>
                    <span className="sr-only">Planned</span>
                    <span className="sr-only">Store. Social. Later.</span>
                    <span className="sr-only">
                      {channel.label}
                    </span>
                  </span>
                ))}
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
                className="grid h-11 w-11 place-items-center rounded-lg border border-[#f0b6df]/12 bg-[#120a1b]/58 text-[#d7c7ed] transition-colors hover:bg-[#2e1e5a]/42 hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
              >
                <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Privacy</span>
              </button>
              <span className="text-[#5f536d]">•</span>
              <button
                type="button"
                onClick={() => openLegalModal("terms")}
                aria-label="Open PinayMate terms notice"
                className="grid h-11 w-11 place-items-center rounded-lg border border-[#f0b6df]/12 bg-[#120a1b]/58 text-[#d7c7ed] transition-colors hover:bg-[#2e1e5a]/42 hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
              >
                <Shield className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Terms</span>
              </button>
            </div>

            <p className="sr-only">
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
