import { IconChevronDown, IconCircleCheck, IconMail } from "@tabler/icons-react";
import {
  PLAN_INTEREST_EMAIL_WARNING,
  buildPlanInterestEmailHref,
} from "../../lib/launchEmailLinks";

const plans = [
  {
    id: "filipina-waitlist",
    name: "Free",
    emailName: "Filipina Waitlist",
    price: "Free waitlist",
    priceDetail: "For Filipinas, no payment step",
    plannedPrice: null,
    subject: "PinayMate waitlist - Filipina access",
    cta: "Join free waitlist",
    features: ["Launch update emails", "Profile setup guidance", "Profile review"],
  },
  {
    id: "gold-interest",
    name: "Gold",
    emailName: "Gold Interest",
    price: "Gold interest",
    priceDetail: "Register interest only",
    plannedPrice: "$29.99 / month planned",
    subject: "PinayMate waitlist - Gold interest",
    cta: "Register Gold interest",
    features: [
      "Messaging when launched",
      "Advanced preference filters",
      "Profile presentation options",
    ],
  },
  {
    id: "vip-interest",
    name: "VIP",
    emailName: "VIP Interest",
    price: "VIP interest",
    priceDetail: "Register interest only",
    plannedPrice: "$34.99 / month planned",
    subject: "PinayMate waitlist - VIP interest",
    cta: "Register VIP interest",
    features: [
      "Everything in Gold",
      "Profile quality review",
      "Translation (planned)",
    ],
  },
];

const launchBoundaries = [
  "No card or charge",
  "No app account or dating profile created",
  "Matching starts in the app",
];

const Membership = () => {
  return (
    <section id="pricing" className="pm-light border-t border-line">
      <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-6 lg:px-8 lg:py-24 xl:px-16">
        <h2 className="pm-section-title pm-reveal text-plum">
          Plans for when the app opens
        </h2>
        <p className="pm-reveal mt-2 max-w-xl text-base text-mauve sm:text-lg">
          Pick the plan you&apos;re interested in. Nothing is charged today.
        </p>

        <div className="mt-8 grid gap-[18px] lg:grid-cols-3">
          {plans.map((plan) => {
            const isFeatured = plan.id === "gold-interest";

            return (
              <article
                key={plan.id}
                aria-labelledby={`${plan.id}-title`}
                className={`pm-tier ${isFeatured ? "pm-tier-pick" : ""}`}
              >
                {isFeatured && (
                  <span className="pm-tier-flag">Best fit</span>
                )}
                <h3
                  id={`${plan.id}-title`}
                  className="font-lora-medium text-[26px] leading-tight text-plum"
                >
                  {plan.name}
                </h3>
                <p className="text-[15px] text-mauve">
                  {plan.plannedPrice ? (
                    <>
                      <span className="text-[22px] font-dm-sans-semibold text-plum">
                        {plan.plannedPrice.replace(" / month planned", "")}
                      </span>{" "}
                      / month, planned
                    </>
                  ) : (
                    plan.priceDetail
                  )}
                </p>
                <p className="sr-only">
                  {plan.price}. {plan.priceDetail}.
                </p>

                <ul className="mb-2 grid gap-2 text-[15px] text-plum">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <IconCircleCheck
                        size={17}
                        stroke={1.75}
                        className="shrink-0 text-ok"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={buildPlanInterestEmailHref(plan.emailName, plan.subject)}
                  aria-describedby="plan-interest-note"
                  aria-label={`${plan.cta}. Opens email interest form only. This is not checkout and does not create an app account, dating profile, match request, or payment record.`}
                  className={`pm-btn mt-auto w-full ${
                    isFeatured ? "pm-btn-primary" : "pm-btn-outline"
                  }`}
                >
                  <IconMail size={18} stroke={1.75} aria-hidden="true" />
                  {plan.cta}
                </a>
              </article>
            );
          })}
        </div>

        <ul
          className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mauve"
          aria-label="Current membership boundaries"
        >
          <li className="font-dm-sans-semibold text-plum">
            Planned pricing, not checkout.
          </li>
          {launchBoundaries.map((boundary) => (
            <li key={boundary}>{boundary}.</li>
          ))}
        </ul>

        <details className="pm-disclosure group mt-5 max-w-3xl">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 font-dm-sans-semibold text-plum">
            Pricing notice and email details
            <IconChevronDown
              size={18}
              stroke={1.75}
              className="text-rosas transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </summary>
          <p className="pb-2 text-sm leading-6 text-mauve">
            Paid plans should not be treated as purchased, active, or
            guaranteed until final plan details, checkout terms,
            cancellation/refund policy, support coverage, and billing provider
            flow are visible and confirmed. Register interest only: VIP features
            open only when membership access and checkout are available.
          </p>
          <p
            id="plan-interest-note"
            className="pb-3 text-sm leading-6 text-mauve"
          >
            Interest buttons open a plan-interest email only.{" "}
            It does not create an app account, dating profile, match request,
            matching session, checkout step, or payment record.{" "}
            This is plan-interest email only.{" "}
            Do not include payment details, ID documents, location, or{" "}
            private profile information. {PLAN_INTEREST_EMAIL_WARNING}
          </p>
        </details>
      </div>
    </section>
  );
};

export default Membership;
