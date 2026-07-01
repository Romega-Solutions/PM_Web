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
    displayName: "Free",
    id: "filipina-waitlist",
    label: "No-card waitlist",
    shortDecision: "Launch timing first.",
    decision: "Best first step if you want launch timing before sharing profile details.",
    price: "Free waitlist",
    priceDetail: "no payment step",
    plannedPrice: null,
    note: "Join launch updates by email. No account, profile, card, or billing flow starts here.",
    icon: Heart,
    tone: "from-[#ef3e78] to-[#8d69f6]",
    subject: "PinayMate waitlist - Filipina access",
    cta: "Join free waitlist",
    ctaLabel: "Join free",
    features: [
      { label: "Updates", detail: "Launch update emails" },
      { label: "Setup", detail: "Profile setup guidance" },
      { label: "Review", detail: "Verification review path" },
      { label: "Community", detail: "Community access updates when ready" },
    ],
  },
  {
    name: "Gold Interest",
    displayName: "Gold",
    id: "gold-interest",
    label: "Most relevant for serious search",
    shortDecision: "Curated discovery focus.",
    decision: "Best fit if curated discovery, clearer preferences, and support expectations matter most.",
    price: "Gold interest",
    priceDetail: "interest only",
    plannedPrice: "$29.99 / month planned",
    note: "Register interest only. Final checkout terms, cancellation policy, and billing provider must be visible before any payment.",
    icon: Star,
    tone: "from-[#ef3e78] to-[#5c83e9]",
    subject: "PinayMate waitlist - Gold interest",
    cta: "Register Gold interest",
    ctaLabel: "Gold interest",
    features: [
      { label: "Messaging", detail: "Messaging direction when launched" },
      { label: "Filters", detail: "Advanced preference filters" },
      { label: "Profile", detail: "Profile presentation options" },
      { label: "Support", detail: "Support response model direction" },
    ],
  },
  {
    name: "Platinum Interest",
    displayName: "VIP",
    id: "platinum-interest",
    label: "VIP feature direction",
    shortDecision: "Priority support signal.",
    decision: "Best fit if you want priority support expectations and profile-quality review considered for early access.",
    price: "VIP interest",
    priceDetail: "interest only",
    plannedPrice: "$34.99 / month planned",
    note: "Register VIP interest only. VIP features open only when membership access and checkout are available.",
    icon: Crown,
    tone: "from-[#8d69f6] to-[#5c83e9]",
    subject: "PinayMate waitlist - Platinum interest",
    cta: "Register VIP interest",
    ctaLabel: "VIP interest",
    features: [
      { label: "Gold+", detail: "Gold feature direction plus" },
      { label: "Quality", detail: "Profile quality review interest" },
      { label: "Badges", detail: "Badge policy direction after review" },
      { label: "Translate", detail: "Translation feature interest" },
    ],
  },
];

const launchBoundaries = [
  {
    label: "No card",
    detail: "No card or charge",
  },
  {
    label: "No profile",
    detail: "No app account or dating profile created",
  },
  {
    label: "No match",
    detail: "No match request or matching session starts today",
  },
  {
    label: "App only",
    detail: "Matching starts in the app",
  },
];

const decisionPrompts = [
  {
    label: "Start free",
    detail: "Start free if you only want launch timing and access updates.",
  },
  {
    label: "Choose Gold",
    detail: "Choose Gold interest if curated discovery is your main launch concern.",
  },
  {
    label: "Choose Platinum",
    detail:
      "Choose Platinum interest if support expectations and profile quality matter most.",
  },
];

const tierVisuals = [
  [
    { height: "h-10", opacity: "opacity-45" },
    { height: "h-16", opacity: "opacity-90" },
    { height: "h-8", opacity: "opacity-45" },
  ],
  [
    { height: "h-14", opacity: "opacity-45" },
    { height: "h-24", opacity: "opacity-90" },
    { height: "h-12", opacity: "opacity-45" },
  ],
  [
    { height: "h-20", opacity: "opacity-45" },
    { height: "h-28", opacity: "opacity-90" },
    { height: "h-16", opacity: "opacity-45" },
  ],
];

const Membership = () => {
  return (
    <section id="pricing" className="bg-[#170f22] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex min-h-11 items-center gap-3 border-l-2 border-[#f0b6df]/22 px-4 py-2 text-sm font-dm-sans-bold text-[#f6d0f1]">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span className="grid w-32 grid-cols-3 gap-2" aria-hidden="true">
              <span className="h-1.5 rounded-lg bg-[#ef3e78]/64" />
              <span className="h-1.5 rounded-lg bg-[#8d69f6]/42" />
              <span className="h-1.5 rounded-lg bg-[#5c83e9]/32" />
            </span>
            <span className="sr-only">Membership direction</span>
          </div>

          <h2 className="font-lora text-4xl font-bold leading-tight text-white sm:text-5xl">
            Clear membership interest, not a live checkout.
          </h2>
          <p className="mt-5 inline-flex min-h-10 items-center gap-2 border-l-2 border-[#f0b6df]/18 px-3 py-1 text-xs font-dm-sans-bold text-[#e3dcf9]">
            <span className="grid grid-cols-3 gap-1.5" aria-hidden="true">
              <span className="h-1.5 w-9 rounded-lg bg-[#ef3e78]/48" />
              <span className="h-1.5 w-9 rounded-lg bg-[#8d69f6]/36" />
              <span className="h-1.5 w-9 rounded-lg bg-[#5c83e9]/28" />
            </span>
            <span className="sr-only">
              Pricing direction without signup pressure.
              These tiers explain the intended membership model. The current
              action is email interest only, so pricing expectations stay clear
              without suggesting signup, checkout, billing, or active matching.
            </span>
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isFeatured = plan.id === "gold-interest";

            return (
              <article
                key={plan.name}
                aria-labelledby={`${plan.id}-title`}
                className={`flex min-h-full flex-col overflow-hidden border-y transition duration-200 lg:border-l lg:border-y-0 ${
                  isFeatured
                    ? "border-[#ef3e78]/55 bg-[#21132f]/72"
                    : "border-[#f0b6df]/14 bg-[#1a0d27]/48 hover:border-[#f0b6df]/32"
                }`}
              >
                <div className="border-b border-[#f0b6df]/12 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${plan.tone} text-white shadow-lg shadow-black/15`}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="text-xs font-dm-sans-bold text-[#f0b6df]">
                      {String(index + 1).padStart(2, "0")}
                      <span className="sr-only">. Tier {String(index + 1).padStart(2, "0")}</span>
                      <span className="sr-only">. {plan.label}</span>
                    </p>
                  </div>
                  {isFeatured && (
                    <span className="border-l-2 border-[#ef3e78] px-3 py-2 text-xs font-dm-sans-bold text-white">
                      <span className="grid w-12 grid-cols-2 gap-1.5" aria-hidden="true">
                        <span className="h-1.5 rounded-lg bg-[#ffe8f1]/72" />
                        <span className="h-1.5 rounded-lg bg-[#ffe8f1]/42" />
                      </span>
                      <span className="sr-only">Best fit</span>
                    </span>
                  )}
                </div>

                <div className="mt-6">
                  <h3
                    id={`${plan.id}-title`}
                    className="font-lora text-4xl font-bold leading-tight text-white"
                  >
                    {plan.displayName}
                    <span className="sr-only">. {plan.name}</span>
                  </h3>
                  <div className="mt-4 grid max-w-40 grid-cols-3 gap-2" aria-hidden="true">
                    <span className={`h-2 rounded-lg bg-gradient-to-r ${plan.tone}`} />
                    <span className={`h-2 rounded-lg bg-gradient-to-r ${plan.tone} opacity-70`} />
                    <span className={`h-2 rounded-lg bg-gradient-to-r ${plan.tone} opacity-45`} />
                  </div>
                  <p className="sr-only">
                    {plan.shortDecision} {plan.decision}
                  </p>
                </div>
                </div>

                <div className="px-5 py-5 sm:px-6">
                  <div className="grid h-32 grid-cols-3 items-end gap-2" aria-hidden="true">
                    {tierVisuals[index].map((bar, barIndex) => (
                      <span
                        key={`${plan.id}-${barIndex}`}
                        className={`${bar.height} ${bar.opacity} rounded-lg bg-gradient-to-t ${plan.tone}`}
                      />
                    ))}
                  </div>
                  <div className="mt-5 grid grid-cols-2 border-y border-[#f0b6df]/12 py-3">
                    <p className="border-l border-[#f0b6df]/12 px-3 py-1 first:border-l-0">
                      <span className="block text-xs font-dm-sans-bold text-[#f0b6df]">
                        <span
                          className="block h-1.5 w-12 rounded-lg bg-[#f0b6df]/28"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Access</span>
                      </span>
                      <span className="mt-1 block font-dm-sans-bold text-white">
                        {plan.price}
                      </span>
                    </p>
                    <p className="border-l border-[#f0b6df]/12 px-3 py-1 first:border-l-0">
                      <span className="block text-xs font-dm-sans-bold text-[#f0b6df]">
                        <span
                          className="block h-1.5 w-12 rounded-lg bg-[#f0b6df]/28"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Today</span>
                      </span>
                      <span className="mt-1 block font-dm-sans-bold text-white">
                        {plan.priceDetail}
                      </span>
                    </p>
                  </div>
                  {plan.plannedPrice ? (
                    <div className="mt-3 border-l-2 border-[#f0b6df]/18 bg-[#120a1b]/28 px-3 py-2">
                      <p className="text-xs font-dm-sans-bold text-[#f0b6df]">
                        <span
                          className="block h-1.5 w-14 rounded-lg bg-[#f0b6df]/28"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Planned</span>
                        <span className="sr-only">
                          . Planned pricing, not checkout
                        </span>
                      </p>
                      <p className="mt-1 text-sm font-dm-sans-bold text-white">
                        {plan.plannedPrice}
                      </p>
                    </div>
                  ) : null}
                  <p className="mt-3 inline-flex min-h-9 items-center gap-2 border-l-2 border-[#f0b6df]/18 px-3 py-1 text-xs font-dm-sans-bold text-[#f6d0f1]">
                    <span className="grid grid-cols-3 gap-1.5" aria-hidden="true">
                      <span className="h-1.5 w-8 rounded-lg bg-[#ef3e78]/48" />
                      <span className="h-1.5 w-8 rounded-lg bg-[#8d69f6]/34" />
                      <span className="h-1.5 w-8 rounded-lg bg-[#5c83e9]/28" />
                    </span>
                    <span className="sr-only">Interest only.</span>
                    <span className="sr-only"> {plan.note}</span>
                  </p>
                </div>

                <div className="flex flex-1 flex-col gap-5 px-5 pb-5 sm:px-6 sm:pb-6">
                  <ul className="grid grid-cols-4 border-y border-[#f0b6df]/12 py-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.label}
                        className="min-h-14 border-l border-[#f0b6df]/12 px-2 text-center first:border-l-0"
                      >
                        <span className="mx-auto flex justify-center">
                          <CheckCircleIcon />
                        </span>
                        <span className="sr-only">
                          {feature.label}
                        </span>
                        <span className="mx-auto mt-3 block h-1.5 w-9 rounded-lg bg-[#f0b6df]/30" aria-hidden="true" />
                        <span className="sr-only">{feature.detail}</span>
                      </li>
                    ))}
                  </ul>

                  <p
                    id={`${plan.id}-action-note`}
                    className="mt-auto border-t border-[#f0b6df]/12 pt-4"
                  >
                    <span className="hidden border-y border-[#f0b6df]/12 py-2 text-xs font-dm-sans-bold text-[#f6d0f1] sm:grid sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                      <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0 lg:border-l-0 lg:border-t lg:first:border-t-0 xl:border-l xl:border-t-0 xl:first:border-l-0">
                        <span className="mx-auto block h-1.5 w-10 rounded-lg bg-[#ef3e78]/38" aria-hidden="true" />
                        <span className="sr-only">Email only</span>
                      </span>
                      <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0 lg:border-l-0 lg:border-t lg:first:border-t-0 xl:border-l xl:border-t-0 xl:first:border-l-0">
                        <span className="mx-auto block h-1.5 w-10 rounded-lg bg-[#8d69f6]/32" aria-hidden="true" />
                        <span className="sr-only">Not checkout</span>
                      </span>
                      <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0 lg:border-l-0 lg:border-t lg:first:border-t-0 xl:border-l xl:border-t-0 xl:first:border-l-0">
                        <span className="mx-auto block h-1.5 w-10 rounded-lg bg-[#5c83e9]/28" aria-hidden="true" />
                        <span className="sr-only">No payment</span>
                      </span>
                    </span>
                    <span className="sr-only">
                      Opens a plan-interest email only. It does not create an app
                      account, dating profile, match request, matching session,
                      checkout step, or payment record. This is plan-interest
                      email only. Do not include payment details, ID documents,
                      location, or private profile information.{" "}
                      {PLAN_INTEREST_EMAIL_WARNING}
                    </span>
                  </p>

                  <a
                    href={buildPlanInterestEmailHref(plan.name, plan.subject)}
                    aria-describedby={`${plan.id}-action-note`}
                    aria-label={`${plan.cta}. Opens email interest form only. This is not checkout and does not create an app account, dating profile, match request, or payment record.`}
                    className={`inline-flex min-h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 text-center font-dm-sans-bold transition duration-200 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9] ${
                      isFeatured
                        ? "bg-[#ef3e78] text-white shadow-lg shadow-[#ef3e78]/25 hover:bg-[#db2866] hover:shadow-[#ef3e78]/35"
                        : "border border-[#f0b6df]/22 bg-[#2e1e5a]/32 text-white hover:border-[#f0b6df]/70 hover:bg-[#3b2255]/55"
                    }`}
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {plan.ctaLabel}
                    <span className="sr-only">. {plan.cta}</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-white">
          <p className="grid max-w-32 grid-cols-3 gap-2 text-sm font-dm-sans-bold text-[#f0b6df]" aria-hidden="true">
            <span className="h-1.5 rounded-lg bg-[#ef3e78]/54" />
            <span className="h-1.5 rounded-lg bg-[#8d69f6]/38" />
            <span className="h-1.5 rounded-lg bg-[#5c83e9]/30" />
          </p>
          <p className="sr-only">
            Pick a path
            <span>
              . Not sure which interest path fits?
            </span>
          </p>
          <ul className="mt-4 grid border-y border-[#f0b6df]/12 py-3 lg:grid-cols-3">
            {decisionPrompts.map((prompt) => (
              <li
                key={prompt.label}
                className="border-t border-[#f0b6df]/12 px-4 py-2 text-sm leading-6 text-[#f8f5ff] first:border-t-0 lg:border-l lg:border-t-0 lg:first:border-l-0"
              >
                <span className="flex items-center gap-3 font-dm-sans-bold">
                  <CheckCircleIcon />
                  <span className="grid w-20 grid-cols-2 gap-1.5" aria-hidden="true">
                    <span className="h-1.5 rounded-lg bg-[#f0b6df]/30" />
                    <span className="h-1.5 rounded-lg bg-[#f0b6df]/18" />
                  </span>
                  <span className="sr-only">{prompt.label}</span>
                  <span className="sr-only">: {prompt.detail}</span>
                </span>
                <span className="mt-3 grid grid-cols-3 gap-2" aria-hidden="true">
                  <span className="h-2 rounded-lg bg-[#ef3e78]/35" />
                  <span className="h-2 rounded-lg bg-[#8d69f6]/28" />
                  <span className="h-2 rounded-lg bg-[#5c83e9]/24" />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mt-8 grid border-y border-[#f0b6df]/12 py-5 sm:grid-cols-4"
          aria-label="Current membership boundaries"
        >
          {launchBoundaries.map((boundary) => (
            <div
              key={boundary.label}
              className="flex min-h-14 items-center justify-center border-l border-[#f0b6df]/12 px-4 py-2 text-center text-sm font-dm-sans-bold text-[#f8f5ff] first:border-l-0"
            >
              <span className="grid w-16 gap-1.5" aria-hidden="true">
                <span className="h-1.5 rounded-lg bg-[#f0b6df]/30" />
                <span className="h-1.5 w-2/3 rounded-lg bg-[#f0b6df]/18" />
              </span>
              <span className="sr-only">{boundary.label}</span>
              <span className="sr-only">: {boundary.detail}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 border-y border-[#f0b6df]/18 bg-gradient-to-br from-[#2e1e5a]/36 via-[#21132f]/44 to-[#170f22] py-5 text-white sm:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#2e1e5a]/70 text-white">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="sr-only">
                Pricing notice
              </h3>
              <p className="grid max-w-36 grid-cols-3 gap-2" aria-hidden="true">
                <span className="h-1.5 rounded-lg bg-[#ef3e78]/58" />
                <span className="h-1.5 rounded-lg bg-[#8d69f6]/40" />
                <span className="h-1.5 rounded-lg bg-[#5c83e9]/32" />
              </p>
              <p className="mt-3 grid border-y border-[#f0b6df]/12 py-2 text-xs font-dm-sans-bold text-[#f6d0f1] sm:grid-cols-3">
                <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0">
                  <span className="mx-auto block h-1.5 w-12 rounded-lg bg-[#ef3e78]/38" aria-hidden="true" />
                  <span className="sr-only">Not purchased</span>
                </span>
                <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0">
                  <span className="mx-auto block h-1.5 w-12 rounded-lg bg-[#8d69f6]/32" aria-hidden="true" />
                  <span className="sr-only">Not active</span>
                </span>
                <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0">
                  <span className="mx-auto block h-1.5 w-12 rounded-lg bg-[#5c83e9]/28" aria-hidden="true" />
                  <span className="sr-only">Not guaranteed</span>
                </span>
                <span className="sr-only">
                  Paid plans should not be treated as purchased, active, or
                  guaranteed until final plan details, checkout terms,
                  cancellation/refund policy, support coverage, and billing
                  provider flow are visible and confirmed.
                </span>
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
