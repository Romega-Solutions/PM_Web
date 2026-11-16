import React, { useEffect, useState } from "react";
import {
  IconAlertTriangle,
  IconArrowLeft,
  IconFileText,
  IconMail,
  IconTrash,
} from "@tabler/icons-react";
import Footer from "../sections/Footer";
import LegalModal from "../modals/LegalModal";
import { SUPPORT_EMAIL, launchEmailLinks } from "../../lib/launchEmailLinks";

const PAGE_TITLE = "Help and support | PinayMate";
const PAGE_DESCRIPTION =
  "How to email PinayMate support, report a safety concern, and find the deletion page, privacy notice, and terms.";

// Wording follows PM_App app/(main)/profile-settings/help.tsx so the app and
// the website say the same thing. No response times are promised.
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-luna";

const linkRow = `flex min-h-14 items-center gap-3 rounded-[14px] border border-line bg-white px-4 py-3 text-left text-plum transition-colors hover:border-rosas ${focusRing}`;

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
    <div className="pm-light min-h-screen bg-paper font-dm-sans-regular text-plum">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-4 py-2 sm:px-6">
          <a
            href="/"
            aria-label="PinayMate home"
            className={`flex min-h-11 items-center gap-3 rounded-lg ${focusRing}`}
          >
            <img
              src="/main-logo-no-bg.svg"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-hello-paris-bold text-2xl text-plum">PinayMate</span>
          </a>
          <a
            href="/"
            className={`inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-dm-sans-semibold text-rosas transition-colors hover:text-plum ${focusRing}`}
          >
            <IconArrowLeft size={16} stroke={1.75} aria-hidden="true" />
            Back to home
          </a>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="outline-none">
        <div className="mx-auto max-w-[1100px] px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
          <h1 className="font-lora-semibold text-3xl leading-tight text-plum sm:text-4xl">
            Help and support
          </h1>
          <p className="mt-3 max-w-2xl leading-7 text-mauve">
            PinayMate support is email-first, so your request includes the
            details needed to help with account, verification, privacy, or
            safety concerns.
          </p>

          <section
            aria-labelledby="emergency-heading"
            className="mt-8 rounded-[18px] border border-buri bg-buri/30 p-5"
          >
            <h2
              id="emergency-heading"
              className="flex items-start gap-2 font-dm-sans-bold text-lg text-plum"
            >
              <IconAlertTriangle
                size={22}
                stroke={1.75}
                className="mt-0.5 shrink-0 text-rosas"
                aria-hidden="true"
              />
              If anyone is in danger, contact local emergency services first.
            </h2>
            <p className="mt-2 leading-7 text-mauve">
              Email support is not an emergency service, live chat, or instant
              moderation.
            </p>
          </section>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <section
              aria-labelledby="support-heading"
              className="rounded-[18px] border border-line bg-white p-5 sm:p-6"
            >
              <h2 id="support-heading" className="font-lora-semibold text-xl text-plum">
                Get help
              </h2>
              <p className="mt-3 leading-7 text-mauve">
                Support can help with account access, waitlist questions,
                verification review, and deletion requests. Email{" "}
                <span className="font-dm-sans-semibold text-plum">{SUPPORT_EMAIL}</span>.
              </p>
              <a
                href={launchEmailLinks.supportRequest}
                className={`pm-btn pm-btn-primary mt-5 min-h-12 ${focusRing}`}
              >
                <IconMail size={18} stroke={1.75} aria-hidden="true" />
                Email support
              </a>
            </section>

            <section
              aria-labelledby="safety-heading"
              className="rounded-[18px] border border-line bg-white p-5 sm:p-6"
            >
              <h2 id="safety-heading" className="font-lora-semibold text-xl text-plum">
                Report a safety concern
              </h2>
              <p className="mt-3 leading-7 text-mauve">
                Email support about a safety concern. Tell us the other
                member&rsquo;s name or public profile details and what
                happened.
              </p>
              <a
                href={launchEmailLinks.safetyConcern}
                className={`pm-btn pm-btn-outline mt-5 min-h-12 ${focusRing}`}
              >
                <IconAlertTriangle size={18} stroke={1.75} aria-hidden="true" />
                Report a safety concern
              </a>
            </section>
          </div>

          <section aria-labelledby="include-heading" className="mt-12">
            <h2 id="include-heading" className="font-lora-semibold text-xl text-plum">
              What to include, and what never to send
            </h2>
            <div className="mt-5 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-dm-sans-bold text-plum">Include</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-6 text-mauve marker:text-rosas">
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
                <h3 className="font-dm-sans-bold text-plum">Never send</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-6 text-mauve marker:text-rosas">
                  <li>Passwords</li>
                  <li>Payment details</li>
                  <li>ID documents</li>
                  <li>Private message screenshots</li>
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="more-heading" className="mt-12">
            <h2 id="more-heading" className="font-lora-semibold text-xl text-plum">
              More help
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <a href="/delete-account" className={linkRow}>
                <IconTrash
                  size={20}
                  stroke={1.75}
                  className="shrink-0 text-rosas"
                  aria-hidden="true"
                />
                <span className="font-dm-sans-semibold">Delete your account</span>
              </a>
              <button
                type="button"
                onClick={() => setLegalType("privacy")}
                className={linkRow}
              >
                <IconFileText
                  size={20}
                  stroke={1.75}
                  className="shrink-0 text-rosas"
                  aria-hidden="true"
                />
                <span className="font-dm-sans-semibold">Privacy notice</span>
              </button>
              <button
                type="button"
                onClick={() => setLegalType("terms")}
                className={linkRow}
              >
                <IconFileText
                  size={20}
                  stroke={1.75}
                  className="shrink-0 text-rosas"
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
