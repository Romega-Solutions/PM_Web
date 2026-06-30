import {
  Check,
  Crown,
  Heart,
  Mail,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import {
  PLAN_INTEREST_EMAIL_WARNING,
  buildPlanInterestEmailHref,
} from "../../lib/launchEmailLinks";

const plans = [
  {
    name: "Filipina Waitlist",
    id: "filipina-waitlist",
    label: "No-card waitlist",
    decision: "Best first step if you want launch timing before sharing profile details.",
    price: "Free waitlist",
    priceDetail: "no payment step",
    plannedPrice: null,
    note: "Join launch updates by email. No account, profile, card, or billing flow starts here.",
    icon: Heart,
    tone: "from-[#ef3e78] to-[#8d69f6]",
    subject: "PinayMate waitlist - Filipina access",
    cta: "Join free waitlist",
    features: [
      "Launch update emails",
      "Profile setup guidance",
      "Verification review path",
      "Community access updates when ready",
    ],
  },
  {
    name: "Gold Interest",
    id: "gold-interest",
    label: "Most relevant for serious search",
    decision: "Best fit if curated discovery, clearer preferences, and support expectations matter most.",
    price: "Gold interest",
    priceDetail: "interest only",
    plannedPrice: "$29.99 / month planned",
    note: "Register interest only. Final checkout terms, cancellation policy, and billing provider must be visible before any payment.",
    icon: Star,
    tone: "from-[#ef3e78] to-[#5c83e9]",
    subject: "PinayMate waitlist - Gold interest",
    cta: "Register Gold interest",
    features: [
      "Messaging direction when launched",
      "Advanced preference filters",
      "Profile presentation options",
      "Support response model direction",
    ],
  },
  {
    name: "Platinum Interest",
    id: "platinum-interest",
    label: "VIP feature direction",
    decision: "Best fit if you want priority support expectations and profile-quality review considered for early access.",
    price: "VIP interest",
    priceDetail: "interest only",
    plannedPrice: "$34.99 / month planned",
    note: "Register VIP interest only. VIP features open only when membership access and checkout are available.",
    icon: Crown,
    tone: "from-[#8d69f6] to-[#5c83e9]",
    subject: "PinayMate waitlist - Platinum interest",
    cta: "Register VIP interest",
    features: [
      "Gold feature direction plus",
      "Profile quality review interest",
      "Badge policy direction after review",
      "Translation feature interest",
    ],
  },
];

const launchBoundaries = [
  "No card or charge",
  "No app account or dating profile created",
  "No match request or matching session starts today",
  "Matching starts in the app",
];

const decisionPrompts = [
  "Start free if you only want launch timing and access updates.",
  "Choose Gold interest if curated discovery is your main launch concern.",
  "Choose Platinum interest if support expectations and profile quality matter most.",
];

const Membership = () => {
  return (
    <section id="pricing" className="bg-[#170f22] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#f0b6df]/18 bg-[#2e1e5a]/55 px-4 py-2 text-sm font-dm-sans-bold text-[#f6d0f1]">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Membership direction
          </div>

          <h2 className="font-lora text-4xl font-bold leading-tight text-white sm:text-5xl">
            Clear membership interest, not a live checkout.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#e3dcf9]">
            These tiers explain the intended membership model. The current
            action is email interest only, so pricing expectations stay clear
            without suggesting signup, checkout, billing, or active matching.
          </p>
        </div>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <article
                key={plan.name}
                aria-labelledby={`${plan.id}-title`}
                className="grid gap-6 py-8 lg:grid-cols-[0.8fr_1fr_0.9fr] lg:items-start lg:gap-10"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${plan.tone} text-white shadow-lg shadow-black/15`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-dm-sans-bold uppercase tracking-[0.16em] text-[#f0b6df]">
                        {String(index + 1).padStart(2, "0")} / {plan.label}
                      </p>
                      {plan.id === "gold-interest" && (
                        <span className="rounded-full bg-[#ef3e78] px-3 py-1 text-xs font-dm-sans-bold uppercase text-white shadow-lg shadow-[#ef3e78]/20">
                          Serious-search path
                        </span>
                      )}
                    </div>
                    <h3
                      id={`${plan.id}-title`}
                      className="mt-3 font-lora text-3xl font-bold text-white"
                    >
                      {plan.name}
                    </h3>
                    <p className="mt-3 text-sm font-dm-sans-semibold leading-6 text-[#f8f5ff]">
                      {plan.decision}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-dm-sans-bold text-3xl text-white">
                    {plan.price}
                  </p>
                  <p className="mt-1 text-sm font-dm-sans-bold text-[#f0b6df]">
                    {plan.priceDetail}
                  </p>
                  {plan.plannedPrice ? (
                    <div className="mt-4 border-l border-[#f0b6df]/35 pl-3">
                      <p className="text-xs font-dm-sans-bold uppercase text-[#f0b6df]">
                        Planned pricing, not checkout
                      </p>
                      <p className="mt-1 text-base font-dm-sans-bold text-white">
                        {plan.plannedPrice}
                      </p>
                    </div>
                  ) : null}
                  <p className="mt-4 text-sm leading-6 text-[#c5b1e4]">
                    {plan.note}
                  </p>
                  <p
                    id={`${plan.id}-action-note`}
                    className="mt-3 text-xs leading-5 text-[#e3dcf9]"
                  >
                    Opens a plan-interest email only. It does not create an app
                    account, dating profile, match request, matching session,
                    checkout step, or payment record. This is plan-interest
                    email only. Do not include payment details, ID documents,
                    location, or private profile information.{" "}
                    {PLAN_INTEREST_EMAIL_WARNING}
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <ul className="grid gap-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-[#f8f5ff]"
                      >
                        <CheckCircleIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={buildPlanInterestEmailHref(plan.name, plan.subject)}
                    aria-describedby={`${plan.id}-action-note`}
                    aria-label={`${plan.cta}. Opens email interest form only. This is not checkout and does not create an app account, dating profile, match request, or payment record.`}
                    className={`inline-flex min-h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 text-center font-dm-sans-bold transition duration-200 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9] sm:w-fit ${
                      plan.id === "gold-interest"
                        ? "bg-[#ef3e78] text-white shadow-lg shadow-[#ef3e78]/25 hover:bg-[#db2866] hover:shadow-[#ef3e78]/35"
                        : "border border-[#f0b6df]/22 bg-[#2e1e5a]/55 text-white shadow-lg shadow-black/10 hover:border-[#f0b6df]/70 hover:bg-[#3b2255]/75"
                    }`}
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {plan.cta}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-white">
          <p className="text-sm font-dm-sans-bold uppercase text-[#f0b6df]">
            Not sure which interest path fits?
          </p>
          <ul className="mt-4 grid gap-3 lg:grid-cols-3">
            {decisionPrompts.map((prompt) => (
              <li
                key={prompt}
                className="flex min-h-14 items-start gap-3 border-l border-white/14 pl-4 text-sm leading-6 text-[#f8f5ff]"
              >
                <CheckCircleIcon />
                <span>{prompt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mt-8 grid gap-3 border-y border-white/10 py-5 sm:grid-cols-3"
          aria-label="Current membership boundaries"
        >
          {launchBoundaries.map((boundary) => (
            <div
              key={boundary}
              className="flex min-h-12 items-center justify-center text-center text-sm font-dm-sans-bold text-[#f8f5ff]"
            >
              {boundary}
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-[#f0b6df] bg-[#2e1e5a]/45 py-1 pl-5 pr-3 text-white sm:pl-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#2e1e5a] text-white">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-lora text-2xl font-bold">
                Pricing notice
              </h3>
              <p className="mt-2 text-base leading-7 text-[#d7c7ed]">
                Paid plans should not be treated as purchased, active, or
                guaranteed until final plan details, checkout terms,
                cancellation/refund policy, support coverage, and billing
                provider flow are visible and confirmed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckCircleIcon = () => (
  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22a574] text-white">
    <Check className="h-3.5 w-3.5" aria-hidden="true" />
  </span>
);

export default Membership;
