import React, { useEffect, useState } from "react";
import { ArrowLeft, FileText, Mail, ShieldAlert, Trash2 } from "lucide-react";
import Footer from "../sections/Footer";
import LegalModal from "../modals/LegalModal";
import { SUPPORT_EMAIL, launchEmailLinks } from "../../lib/launchEmailLinks";

const PAGE_TITLE = "Help and support | PinayMate";
const PAGE_DESCRIPTION =
  "How to email PinayMate support, report a safety concern, and find the deletion page, privacy notice, and terms.";

// Wording follows PM_App app/(main)/profile-settings/help.tsx so the app and
// the website say the same thing. No response times are promised.
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b1ff]";

const linkRow = `flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-[#2e1e5a]/40 px-4 py-3 text-left transition-colors hover:border-[#f7a4c8]/60 ${focusRing}`;

const Support: React.FC = () => {
  const [legalType, setLegalType] = useState<"privacy" | "terms" | null>(null);

  useEffect(() => {
    document.title = PAGE_TITLE;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", PAGE_DESCRIPTION);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `${window.location.origin}/support`);
  }, []);

  return (
    <div className="min-h-screen bg-[#170f22] font-dm-sans-regular text-white">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="border-b border-white/10 bg-[#120a1b]">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-4 py-2 sm:px-6">
          <a
            href="/"
            aria-label="PinayMate home"
            className={`flex min-h-11 items-center gap-3 rounded-lg ${focusRing}`}
          >
            <img
              src="/main-logo-no-bg.svg"
              alt=""
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-hello-paris-bold">PinayMate</span>
          </a>
          <a
            href="/"
            className={`inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-dm-sans-semibold text-[#d7c7ed] transition-colors hover:text-[#f7a4c8] ${focusRing}`}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </a>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="outline-none">
        <div className="mx-auto max-w-[1100px] px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
          <h1 className="font-lora-semibold text-3xl leading-tight sm:text-4xl">
            Help and support
          </h1>
          <p className="mt-3 max-w-2xl leading-7 text-[#d7c7ed]">
            PinayMate support is email-first, so your request includes the
            details needed to help with account, verification, privacy, or
            safety concerns.
          </p>

          <section
            aria-labelledby="emergency-heading"
            className="mt-8 rounded-lg border border-[#f59e0b]/40 bg-[#f59e0b]/10 p-5"
          >
            <h2
              id="emergency-heading"
              className="font-dm-sans-bold text-lg text-[#fcd98a]"
            >
              If anyone is in danger, contact local emergency services first.
            </h2>
            <p className="mt-2 leading-7 text-[#f3e6c8]">
              Email support is not an emergency service, live chat, or instant
              moderation.
            </p>
          </section>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <section
              aria-labelledby="support-heading"
              className="rounded-lg border border-white/10 bg-[#2e1e5a]/40 p-5 sm:p-6"
            >
              <h2
                id="support-heading"
                className="font-lora-semibold text-xl"
              >
                Get help
              </h2>
              <p className="mt-3 leading-7 text-[#e6dcf5]">
                Support can help with account access, waitlist questions,
                verification review, and deletion requests. Email{" "}
                <span className="font-dm-sans-semibold">{SUPPORT_EMAIL}</span>.
              </p>
              <a
                href={launchEmailLinks.supportRequest}
                className={`mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#ef3e78] px-5 py-3 font-dm-sans-bold text-white shadow-lg shadow-[#ef3e78]/25 transition-colors hover:bg-[#d7346b] ${focusRing}`}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email support
              </a>
            </section>

            <section
              aria-labelledby="safety-heading"
              className="rounded-lg border border-white/10 bg-[#2e1e5a]/40 p-5 sm:p-6"
            >
              <h2
                id="safety-heading"
                className="font-lora-semibold text-xl"
              >
                Report a safety concern
              </h2>
              <p className="mt-3 leading-7 text-[#e6dcf5]">
                Email support about a safety concern. Tell us the other
                member&rsquo;s name or public profile details and what
                happened.
              </p>
              <a
                href={launchEmailLinks.safetyConcern}
                className={`mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#f7a4c8]/60 px-5 py-3 font-dm-sans-bold text-white transition-colors hover:bg-white/10 ${focusRing}`}
              >
                <ShieldAlert className="h-4 w-4" aria-hidden="true" />
                Report a safety concern
              </a>
            </section>
          </div>

          <section aria-labelledby="include-heading" className="mt-12">
            <h2 id="include-heading" className="font-lora-semibold text-xl">
              What to include, and what never to send
            </h2>
            <div className="mt-5 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-dm-sans-bold">Include</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-6 text-[#e6dcf5] marker:text-[#f0b6df]">
                  <li>The email address of your account</li>
                  <li>Your device</li>
                  <li>What you need help with, in a few lines</li>
                  <li>
                    For a safety concern: the other member&rsquo;s name or
                    public profile details, and what happened
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-dm-sans-bold">Never send</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-6 text-[#e6dcf5] marker:text-[#f0b6df]">
                  <li>Passwords</li>
                  <li>Payment details</li>
                  <li>ID documents</li>
                  <li>Private message screenshots</li>
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="more-heading" className="mt-12">
            <h2 id="more-heading" className="font-lora-semibold text-xl">
              More help
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <a href="/delete-account" className={linkRow}>
                <Trash2
                  className="h-5 w-5 shrink-0 text-[#f0b6df]"
                  aria-hidden="true"
                />
                <span className="font-dm-sans-semibold">Delete your account</span>
              </a>
              <button
                type="button"
                onClick={() => setLegalType("privacy")}
                className={linkRow}
              >
                <FileText
                  className="h-5 w-5 shrink-0 text-[#f0b6df]"
                  aria-hidden="true"
                />
                <span className="font-dm-sans-semibold">Privacy notice</span>
              </button>
              <button
                type="button"
                onClick={() => setLegalType("terms")}
                className={linkRow}
              >
                <FileText
                  className="h-5 w-5 shrink-0 text-[#f0b6df]"
                  aria-hidden="true"
                />
                <span className="font-dm-sans-semibold">Terms</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {legalType && (
        <LegalModal
          isOpen
          onClose={() => setLegalType(null)}
          type={legalType}
        />
      )}
    </div>
  );
};

export default Support;
