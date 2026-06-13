import React, { useEffect, useRef } from "react";
import { X, Shield, FileText } from "lucide-react";
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
      icon: Shield,
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
      icon: FileText,
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
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
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
        className="bg-gradient-to-br from-[#1a202c] via-[#283040] to-[#1a202c] rounded-xl max-w-4xl w-full max-h-[min(90dvh,48rem)] overflow-hidden border border-[#8D99B2]/20 shadow-2xl animate-slideInUp"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#F4376D]/10 via-[#A855F7]/10 to-[#3B82F6]/10 border-b border-[#8D99B2]/20 p-6 flex items-center justify-between sticky top-0 backdrop-blur-lg z-10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] rounded-lg flex items-center justify-center shadow-lg">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <h2
              id={`legal-modal-title-${type}`}
              className="text-2xl md:text-3xl font-dm-sans-black text-white"
            >
              {selectedContent.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label={`Close ${selectedContent.title}`}
            className="w-11 h-11 bg-[#283040] hover:bg-[#F4376D] rounded-lg flex items-center justify-center transition-all duration-300 group border border-[#8D99B2]/20 hover:border-[#F4376D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4376D]"
          >
            <X className="w-5 h-5 text-[#C8B5E6] group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(min(90dvh,48rem)-100px)] p-5 space-y-7 sm:p-6 sm:space-y-8">
          <div className="bg-gradient-to-r from-[#F4376D]/5 via-[#A855F7]/5 to-[#3B82F6]/5 border border-[#F4376D]/20 rounded-lg p-6">
            <p className="text-[#C8B5E6] font-dm-sans-regular leading-relaxed">
              <strong className="text-white">Last Updated:</strong> June 11,
              2026
            </p>
            <p
              id={`legal-modal-description-${type}`}
              className="text-[#C8B5E6] font-dm-sans-regular leading-relaxed mt-2"
            >
              Please read this {selectedContent.title.toLowerCase()} carefully.
              The current site is a waitlist and support surface, so terms may
              apply before full mobile app features are publicly available.
            </p>
          </div>

          {selectedContent.sections.map((section, index) => (
            <div
              key={index}
              className="space-y-3 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-[#F4376D] to-[#A855F7] text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-dm-sans-bold text-white">
                  {section.title}
                </h3>
              </div>
              <p className="pl-0 text-[#C8B5E6] font-dm-sans-regular leading-relaxed sm:pl-11">
                {section.content}
              </p>
            </div>
          ))}

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-[#F4376D]/10 via-[#A855F7]/10 to-[#3B82F6]/10 border border-[#F4376D]/30 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-dm-sans-bold text-white mb-4">
              Questions or Concerns?
            </h3>
            <p className="text-[#C8B5E6] font-dm-sans-regular leading-relaxed mb-4">
              If you have any questions about our{" "}
              {selectedContent.title.toLowerCase()}, contact the launch support
              team:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={launchEmailLinks.legalQuestion}
                aria-label="Email PinayMate legal support"
                className="inline-flex min-h-11 items-center space-x-2 rounded-xl text-[#ff8fb8] hover:text-white transition-colors font-dm-sans-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
              >
                <span>legal@pinaymate.com</span>
              </a>
              <span className="text-[#8D99B2] hidden sm:block">•</span>
              <a
                href={launchEmailLinks.supportQuestion}
                aria-label="Email PinayMate support"
                className="inline-flex min-h-11 items-center space-x-2 rounded-xl text-[#cbb2ff] hover:text-white transition-colors font-dm-sans-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]"
              >
                <span>support@pinaymate.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
