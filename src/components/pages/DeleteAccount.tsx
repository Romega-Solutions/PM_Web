import React, { useEffect } from "react";
import { IconArrowLeft, IconMail } from "@tabler/icons-react";
import Footer from "../sections/Footer";
import { SUPPORT_EMAIL, launchEmailLinks } from "../../lib/launchEmailLinks";

const PAGE_TITLE = "Delete your PinayMate account | PinayMate";
const PAGE_DESCRIPTION =
  "How to ask Romega Solutions to delete your PinayMate account and the personal data linked to it, in the app or by email.";

const inAppSteps = [
  "Open the PinayMate app and sign in.",
  "Tap the You tab at the bottom, then choose Privacy.",
  "Under Data & Account, tap Request Account Deletion and confirm.",
  "The app then shows a \"Deletion request received\" message. Support reviews the request and may contact you.",
];

const emailSteps = [
  `Email ${SUPPORT_EMAIL} from the email address registered to your account.`,
  "Say that you want your account and data deleted. The button below fills this in for you.",
  "Support may reply to that address to confirm the request is yours.",
];

// DRAFT: the wording and time periods below are proposals for Duane to
// approve before this page goes live.
const deletedData = [
  "Your profile details, photos, and preferences",
  "Your city and account settings",
  "Your likes, matches, and chats in the app",
];

const keptData = [
  "Reports, blocks, and moderation records that involve other members, kept for safety and fraud prevention",
  "The result of an age or identity check (passed or not, and the date), never a copy of your ID",
  "Records we must keep to meet legal obligations",
];

const retentionDraft = [
  {
    label: "Active systems",
    value: "Your data is removed after support approves the request.",
  },
  {
    label: "Backups",
    value: "Copies in backups are removed on a schedule that is still being confirmed.",
  },
  {
    label: "Safety, fraud, and legal records",
    value: "Kept only where the law requires it or for safety and fraud prevention.",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-luna";

const StepList: React.FC<{ steps: string[] }> = ({ steps }) => (
  <ol className="mt-4 space-y-3">
    {steps.map((step, index) => (
      <li key={step} className="flex gap-3 text-mauve">
        <span
          aria-hidden="true"
          className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-petal font-lora-semibold text-sm text-rosas"
        >
          {index + 1}
        </span>
        <span className="leading-6">{step}</span>
      </li>
    ))}
  </ol>
);

const DeleteAccount: React.FC = () => {
  useEffect(() => {
    document.title = PAGE_TITLE;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", PAGE_DESCRIPTION);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `${window.location.origin}/delete-account`);
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
            Delete your PinayMate account
          </h1>
          <p className="mt-3 max-w-2xl leading-7 text-mauve">
            PinayMate is the Filipino dating app from Romega Solutions. Ask us
            to delete your account and the personal data linked to it in either
            way below. Support reviews each request, so deletion is not instant.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <section
              aria-labelledby="in-app-heading"
              className="rounded-[18px] border border-line bg-white p-5 sm:p-6"
            >
              <h2 id="in-app-heading" className="font-lora-semibold text-xl text-plum">
                In the app
              </h2>
              <StepList steps={inAppSteps} />
            </section>

            <section
              aria-labelledby="email-heading"
              className="rounded-[18px] border border-line bg-white p-5 sm:p-6"
            >
              <h2 id="email-heading" className="font-lora-semibold text-xl text-plum">
                Without the app
              </h2>
              <StepList steps={emailSteps} />
              <a
                href={launchEmailLinks.accountDeletion}
                className={`pm-btn pm-btn-primary mt-6 min-h-12 ${focusRing}`}
              >
                <IconMail size={18} stroke={1.75} aria-hidden="true" />
                Email deletion request
              </a>
              <p className="mt-4 text-sm leading-6 text-mauve">
                Do not send passwords, payment details, ID documents, or private
                message screenshots by email.
              </p>
            </section>
          </div>

          <section aria-labelledby="next-heading" className="mt-12">
            <h2 id="next-heading" className="font-lora-semibold text-xl text-plum">
              What happens next
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-mauve">
              Support checks that the request comes from the account owner and
              may contact you before closing it. Some records may be kept for the reasons below.
            </p>
          </section>

          <section aria-labelledby="data-heading" className="mt-12">
            <h2 id="data-heading" className="font-lora-semibold text-xl text-plum">
              What is deleted and what may be kept
            </h2>

            <div className="mt-5 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-dm-sans-bold text-plum">Deleted</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-6 text-mauve marker:text-rosas">
                  {deletedData.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-dm-sans-bold text-plum">May be kept</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-6 text-mauve marker:text-rosas">
                  {keptData.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="mt-8 font-dm-sans-bold text-plum">How long</h3>
            <dl className="mt-3 divide-y divide-line border-y border-line">
              {retentionDraft.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 py-3 sm:grid-cols-[14rem_1fr] sm:gap-6"
                >
                  <dt className="font-dm-sans-semibold text-rosas">{row.label}</dt>
                  <dd className="leading-6 text-mauve">{row.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DeleteAccount;
