import React, { useEffect, useRef } from "react";
import { IconFileText, IconShieldCheck, IconX } from "@tabler/icons-react";
import { launchEmailLinks } from "../../lib/launchEmailLinks";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms";
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousActiveElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      icon: IconShieldCheck,
      sections: [
        {
          title: "Launch-Stage Notice",
          content:
            "PinayMate may offer waitlist and support access before the full mobile dating service is available in every region. App accounts, messaging, verification, and paid features are available only when they appear in the app for your region or access group.",
        },
        {
          title: "Information We Collect",
          content:
            "The website waitlist and support flows collect only the information you choose to send by email, such as your email address, waitlist interest, and support request. Profile information, photos, matches, messages, reports, blocks, and verification status stay inside the app access flow.",
        },
        {
          title: "How We Use Your Information",
          content:
            "We use website waitlist and support information to respond to requests. When app features are live for your account or access group, we use account information to provide and improve the service, facilitate connections between members, personalize your experience, send updates and notifications, support platform security, and comply with legal obligations.",
        },
        {
          title: "Verification and Safety Data",
          content:
            "If you submit verification materials or safety reports, we use them only for review, fraud prevention, support, moderation, and user-protection workflows. Review workflows can create trust signals, but they do not guarantee that another member is safe, truthful, or compatible.",
        },
        {
          title: "Data Security",
          content:
            "We use account access controls, data-permission rules, and protected network connections to reduce risk around account and profile data. We continue improving privacy, storage, and access safeguards as the product grows.",
        },
        {
          title: "Information Sharing",
          content:
            "We do not sell your personal information to third parties. When app features are available, visible profile information may be shared with other members as part of discovery and messaging. We may also share limited information with service providers who assist operations, when required by law, or with your explicit consent.",
        },
        {
          title: "Your Rights",
          content:
            "You can request access, updates, or deletion of your personal information through support. If in-app account deletion tools are not shown in your account, support can help route the request. Visible profile controls and communication preferences apply only when those app settings are available for your account.",
        },
        {
          title: "Cookies and Tracking",
          content:
            "The launch website may use basic cookies or similar technologies for site functionality, preferences, analytics, or security if they are enabled. You can control cookie settings through your browser preferences.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      icon: IconFileText,
      sections: [
        {
          title: "Launch-Stage Service",
          content:
            "PinayMate is currently preparing for public launch. Website waitlist actions, support messages, and product previews do not guarantee immediate app access, paid membership availability, app-store availability, or live dating functionality.",
        },
        {
          title: "Acceptance of Terms",
          content:
            "By accessing the PinayMate website, joining the waitlist, contacting support, or using available app features, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use PinayMate.",
        },
        {
          title: "Eligibility",
          content:
            "You must be at least 18 years old to use PinayMate. By creating an account, you represent and warrant that you meet this age requirement, have the legal capacity to enter into this agreement, and will comply with all applicable laws and regulations.",
        },
        {
          title: "Account Responsibilities",
          content:
            "Inside the app account flow, you are responsible for maintaining the confidentiality of your account credentials, all activities that occur under your account, providing accurate and truthful information, and promptly updating your profile information. You must not share your account with others or use someone else's account.",
        },
        {
          title: "Prohibited Conduct",
          content:
            "You may not use PinayMate to harass, abuse, or harm other members; post false, misleading, or fraudulent information; impersonate another person or entity; solicit money or personal information for fraudulent purposes; spam or send unsolicited commercial messages; upload inappropriate or offensive content; or engage in any illegal activities.",
        },
        {
          title: "Content Ownership",
          content:
            "You retain ownership of the content you post on PinayMate. By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content for the purpose of operating and promoting our services. We reserve the right to remove any content that violates our guidelines.",
        },
        {
          title: "Premium Membership",
          content:
            "Premium memberships, billing, cancellation, and refund terms will be shown at checkout when paid plans are available. Pricing shown outside a final checkout screen is informational only.",
        },
        {
          title: "No Safety Guarantee",
          content:
            "PinayMate may use verification cues, reports, blocks, and moderation workflows to improve trust and safety. These tools reduce risk but do not guarantee member identity, behavior, relationship outcomes, or personal safety. Use caution and do not send money, passwords, codes, or private documents to someone you just met.",
        },
        {
          title: "Termination",
          content:
            "We reserve the right to suspend or terminate your account at any time for violation of these terms, fraudulent activity, or for any reason we deem necessary to protect our platform and community. You may request account termination or deletion through support if the in-app controls are not shown in your account.",
        },
        {
          title: "Limitation of Liability",
          content:
            "PinayMate is provided 'as is' without warranties of any kind. We are not responsible for the conduct of other members, the accuracy of member profiles, any interactions or relationships that result from using our service, or any damages arising from your use of our platform.",
        },
      ],
    },
  };

  const selectedContent = content[type];
  const IconComponent = selectedContent.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-plum/70 p-4 backdrop-blur-sm animate-fadeIn"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`legal-modal-title-${type}`}
        aria-describedby={`legal-modal-description-${type}`}
        tabIndex={-1}
        className="pm-light w-full max-w-3xl max-h-[min(90dvh,48rem)] overflow-hidden rounded-[22px] shadow-[0_40px_80px_-30px_rgb(52_8_57/0.6)] animate-slideInUp"
      >
        <div className="pm-edge" aria-hidden="true" />
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-paper px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="pm-icon-tile" aria-hidden="true">
              <IconComponent size={19} stroke={1.75} />
            </span>
            <h2
              id={`legal-modal-title-${type}`}
              className="font-lora-medium text-2xl text-plum md:text-[28px]"
            >
              {selectedContent.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${selectedContent.title}`}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border-[1.5px] border-line bg-white text-plum transition-colors duration-200 hover:border-rosas hover:text-rosas"
          >
            <IconX size={20} stroke={1.75} aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[calc(min(90dvh,48rem)-96px)] space-y-7 overflow-y-auto p-5 sm:p-6">
          <div className="rounded-[18px] bg-petal p-5">
            <p className="leading-relaxed text-mauve">
              <strong className="font-dm-sans-semibold text-plum">Last Updated:</strong> June 11,
              2026
            </p>
            <p
              id={`legal-modal-description-${type}`}
              className="mt-2 leading-relaxed text-mauve"
            >
              Please read this {selectedContent.title.toLowerCase()} carefully.
              The current site is a waitlist and support surface, so terms may
              apply before full mobile app features are publicly available.
            </p>
          </div>

          <ol className="space-y-6">
            {selectedContent.sections.map((section, index) => (
              <li key={index} className="space-y-2">
                <div className="flex items-start gap-3">
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-petal font-lora-semibold text-sm text-rosas"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h3 className="pt-0.5 font-lora-semibold text-lg text-plum">
                    {section.title}
                  </h3>
                </div>
                <p className="leading-relaxed text-mauve sm:pl-11">
                  {section.content}
                </p>
              </li>
            ))}
          </ol>

          <div className="rounded-[18px] border border-line bg-white p-5">
            <h3 className="mb-2 font-lora-semibold text-lg text-plum">
              Questions or Concerns?
            </h3>
            <p className="mb-3 leading-relaxed text-mauve">
              If you have any questions about our{" "}
              {selectedContent.title.toLowerCase()}, contact the launch support
              team:
            </p>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
              <a
                href={launchEmailLinks.legalQuestion}
                aria-label="Email PinayMate legal support"
                className="inline-flex min-h-11 items-center font-dm-sans-semibold text-luna underline decoration-brand decoration-2 underline-offset-4 hover:text-rosas"
              >
                legal@pinaymate.com
              </a>
              <a
                href={launchEmailLinks.supportQuestion}
                aria-label="Email PinayMate support"
                className="inline-flex min-h-11 items-center font-dm-sans-semibold text-luna underline decoration-brand decoration-2 underline-offset-4 hover:text-rosas"
              >
                support@pinaymate.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
