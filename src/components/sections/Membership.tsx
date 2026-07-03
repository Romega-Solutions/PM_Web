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
    { label: "Email", tone: "bg-[#ef3e78]/20 text-[#ffe8f1]" },
    { label: "Waitlist", tone: "bg-[#8d69f6]/18 text-[#f6d0f1]" },
    { label: "No pay", tone: "bg-[#5c83e9]/16 text-[#e3dcf9]" },
  ],
  [
    { label: "Intent", tone: "bg-[#ef3e78]/20 text-[#ffe8f1]" },
    { label: "Gold", tone: "bg-[#8d69f6]/18 text-[#f6d0f1]" },
    { label: "Interest", tone: "bg-[#5c83e9]/16 text-[#e3dcf9]" },
  ],
  [
    { label: "Priority", tone: "bg-[#ef3e78]/20 text-[#ffe8f1]" },
    { label: "VIP", tone: "bg-[#8d69f6]/18 text-[#f6d0f1]" },
    { label: "Interest", tone: "bg-[#5c83e9]/16 text-[#e3dcf9]" },
  ],
];

const tierMap = [
  {
    label: "Waitlist",
    caption: "Email only",
    icon: Heart,
    tone: "from-[#ef3e78] to-[#8d69f6]",
    tags: ["Email", "Free", "Access"],
  },
  {
    label: "Gold",
    caption: "Intent path",
    icon: Star,
    tone: "from-[#ef3e78] to-[#5c83e9]",
    tags: ["Intent", "Curated", "Interest"],
  },
  {
    label: "VIP",
    caption: "Priority cue",
    icon: Crown,
    tone: "from-[#8d69f6] to-[#5c83e9]",
    tags: ["Priority", "Support", "Interest"],
  },
];

const Membership = () => {
  return (
    <section id="pricing" className="bg-[#170f22] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-grid min-h-11 w-28 place-items-center rounded-lg border border-[#f0b6df]/14 bg-[#2a1a44]/45 px-4 py-2 text-sm font-dm-sans-bold text-[#f6d0f1]">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Membership direction</span>
          </div>

          <h2 className="font-lora text-4xl font-bold leading-tight text-white sm:text-5xl">
            Plan interest. No checkout.
            <span className="sr-only">
              Membership interest without checkout.
              Clear membership interest, not a live checkout.
            </span>
          </h2>
          <p className="sr-only">
            Interest only. No checkout.
            Pricing direction without signup pressure.
            These tiers explain the intended membership model. The current
            action is email interest only, so pricing expectations stay clear
            without suggesting signup, checkout, billing, or active matching.
          </p>
        </div>

        <div
          className="pm-lift-panel pm-membership-console mx-auto mt-10 max-w-5xl border-y border-[#f0b6df]/14 bg-[#1a0d27]/42 py-5"
          aria-label="Membership interest visual map"
        >
          <div className="pm-membership-map-grid grid gap-3 px-3 sm:grid-cols-3 sm:gap-4 sm:px-4">
            {tierMap.map((tier, index) => {
              const Icon = tier.icon;

              return (
                <div
                  key={tier.label}
                  className="pm-surface-hover pm-membership-pass relative overflow-hidden border-l border-[#f0b6df]/12 bg-[#120a1b]/48 p-2.5 first:border-l-0 sm:p-4"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-12 bg-gradient-to-b ${tier.tone} opacity-[0.18] sm:h-16`}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start justify-between gap-2">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${tier.tone} text-white shadow-lg shadow-black/16 sm:h-12 sm:w-12`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 text-right">
                      <span className="block truncate text-sm font-dm-sans-bold text-white sm:text-base">
                        {tier.label}
                      </span>
                      <span className="mt-1 block truncate text-[0.68rem] font-dm-sans-bold text-[#f3c7de] sm:text-xs">
                        {tier.caption}
                      </span>
                      <span className="sr-only">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>
                  </div>
                  <div className={`pm-tier-visual-board pm-tier-map-board pm-membership-pass-art relative mt-3 bg-gradient-to-br ${tier.tone} sm:mt-5`} aria-hidden="true">
                    <span className="pm-tier-visual-orbit pm-tier-visual-orbit-a">
                      <Heart className="h-4 w-4" />
                    </span>
                    <span className="pm-tier-visual-core h-16 w-16 rounded-lg">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="pm-tier-visual-orbit pm-tier-visual-orbit-b">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span className="pm-tier-visual-orbit pm-tier-visual-orbit-c">
                      <Mail className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="pm-membership-pass-tags mt-3" aria-hidden="true">
                    {tier.tags.map((tag) => (
                      <span key={`${tier.label}-${tag}`}>{tag}</span>
                    ))}
                  </div>
                  <p className="sr-only">
                    {tier.label}
                  </p>
                  <div className="sr-only">
                    {tier.tags.map((tag) => (
                      <span key={`${tier.label}-${tag}`}>{tag}</span>
                    ))}
                  </div>
                  <p className="sr-only">
                    {tier.label} interest path. Email-only plan interest, not
                    checkout.
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isFeatured = plan.id === "gold-interest";

            return (
              <article
                key={plan.name}
                aria-labelledby={`${plan.id}-title`}
                className={`pm-surface-hover pm-plan-card flex min-h-full flex-col overflow-hidden border-y transition duration-200 lg:border-l lg:border-y-0 ${
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
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#ef3e78]/35 bg-[#ef3e78]/20 text-white">
                      <Star className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only">
                      Best fit
                      </span>
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
                  <p className="sr-only">
                    {plan.shortDecision}
                  </p>
                  <p className="sr-only">
                    {plan.decision}
                  </p>
                  <div className="pm-plan-quick-strip mt-4" aria-hidden="true">
                    <span>
                      <Mail className="h-3.5 w-3.5" />
                      Email
                    </span>
                    <span>
                      <ShieldCheck className="h-3.5 w-3.5" />
                      No pay
                    </span>
                  </div>
                </div>
                </div>

                <div className="px-5 py-5 sm:px-6">
                  <div className={`pm-tier-visual-board bg-gradient-to-br ${plan.tone}`} aria-hidden="true">
                    <span className="pm-tier-visual-orbit pm-tier-visual-orbit-a">
                      <Heart className="h-5 w-5" />
                    </span>
                    <span className="pm-tier-visual-orbit pm-tier-visual-orbit-b">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <span className="pm-tier-visual-core">
                      <Icon className="h-8 w-8" />
                    </span>
                    <span className="pm-tier-visual-orbit pm-tier-visual-orbit-c">
                      <Sparkles className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="sr-only">
                    {tierVisuals[index].map((tile) => (
                      <span key={`${plan.id}-${tile.label}`}>
                        {tile.label}
                      </span>
                    ))}
                  </div>
                  <div className="sr-only">
                    <p>
                      Access. {plan.price}
                    </p>
                    <p>
                      Today. {plan.priceDetail}
                    </p>
                  </div>
                  <div className="pm-plan-state-route mt-5" aria-hidden="true">
                    <span className="pm-plan-state-node">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="pm-plan-state-line">
                      <span />
                      <span />
                      <span />
                    </span>
                    <span className="pm-plan-state-node pm-plan-state-node-safe">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span className="pm-plan-state-line">
                      <span />
                      <span />
                      <span />
                    </span>
                    <span className="pm-plan-state-node pm-plan-state-node-interest">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span className="sr-only">
                      {tierVisuals[index][0].label}. {plan.plannedPrice ? "Interest" : "Waitlist"}. {tierVisuals[index][1].label}. No checkout.
                    </span>
                  </div>
                  {plan.plannedPrice ? (
                    <div className="mt-3">
                      <p className="sr-only">
                        Planned
                        <span>
                          . Planned pricing, not checkout.
                        </span>
                        {plan.plannedPrice}
                      </p>
                      <div className="pm-plan-price-visual" aria-hidden="true">
                        <span className={`grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br ${plan.tone} text-white`}>
                          <Sparkles className="h-4 w-4" />
                        </span>
                        <span className="pm-plan-mini-chips flex-1">
                          <span>Planned</span>
                          <span>No charge</span>
                        </span>
                      </div>
                    </div>
                  ) : null}
                  <p className="sr-only">
                    Interest only
                    <span> {plan.note}</span>
                  </p>
                  <div className="pm-plan-boundary-route mt-3" aria-hidden="true">
                    <span>
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="pm-plan-boundary-line">
                      <span />
                      <span />
                      <span />
                    </span>
                    <span>
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span className="pm-plan-boundary-line">
                      <span />
                      <span />
                      <span />
                    </span>
                    <span>
                      <Sparkles className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-5 px-5 pb-5 sm:px-6 sm:pb-6">
                  <div className="pm-plan-feature-rail" aria-hidden="true">
                    {plan.features.map((feature, featureIndex) => (
                      <span key={`${plan.id}-${feature.label}`} className="pm-plan-feature-node">
                        <span className={`pm-plan-feature-icon bg-gradient-to-br ${plan.tone}`}>
                          {featureIndex === 0 ? (
                            <Mail className="h-4 w-4" />
                          ) : featureIndex === 1 ? (
                            <Sparkles className="h-4 w-4" />
                          ) : featureIndex === 2 ? (
                            <ShieldCheck className="h-4 w-4" />
                          ) : (
                            <Check className="h-4 w-4" />
                          )}
                        </span>
                        <span className="pm-plan-feature-meter">
                          <span />
                          <span />
                          <span />
                        </span>
                      </span>
                    ))}
                  </div>
                  <ul className="sr-only">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.label}
                        className="min-h-14 border-l border-[#f0b6df]/12 px-2 text-center first:border-l-0"
                      >
                        <span className="mx-auto flex justify-center">
                          <CheckCircleIcon />
                        </span>
                        <span className="mt-2 block text-xs font-dm-sans-bold text-[#f6d0f1]">
                          {feature.label}
                        </span>
                        <span className="sr-only">{feature.detail}</span>
                      </li>
                    ))}
                  </ul>

                  <p
                    id={`${plan.id}-action-note`}
                    className="mt-auto border-t border-[#f0b6df]/12 pt-4"
                  >
                    <span className="sr-only">
                      <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0 lg:border-l-0 lg:border-t lg:first:border-t-0 xl:border-l xl:border-t-0 xl:first:border-l-0">
                        Email only
                      </span>
                      <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0 lg:border-l-0 lg:border-t lg:first:border-t-0 xl:border-l xl:border-t-0 xl:first:border-l-0">
                        Not checkout
                      </span>
                      <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0 lg:border-l-0 lg:border-t lg:first:border-t-0 xl:border-l xl:border-t-0 xl:first:border-l-0">
                        No payment
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

        <div className="sr-only">
          <p className="text-sm font-dm-sans-bold text-[#f0b6df]">Pick a path</p>
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
                  {prompt.label}
                  <span className="sr-only">: {prompt.detail}</span>
                </span>
                <span className="mt-3 grid grid-cols-3 gap-2 text-center text-[0.68rem] font-dm-sans-bold text-[#f6d0f1]">
                  <span className="bg-[#ef3e78]/16 px-2 py-2">Email</span>
                  <span className="bg-[#8d69f6]/16 px-2 py-2">Interest</span>
                  <span className="bg-[#5c83e9]/14 px-2 py-2">No pay</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="sr-only" aria-label="Current membership boundaries">
          {launchBoundaries.map((boundary) => (
            <div
              key={boundary.label}
              className="flex min-h-14 items-center justify-center border-l border-[#f0b6df]/12 px-4 py-2 text-center text-sm font-dm-sans-bold text-[#f8f5ff] first:border-l-0"
            >
              {boundary.label}
              <span className="sr-only">: {boundary.detail}</span>
            </div>
          ))}
        </div>

        <div className="sr-only">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#2e1e5a]/70 text-white">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="sr-only">
                Pricing notice
              </h3>
              <p className="grid max-w-36 grid-cols-3 gap-2" aria-hidden="true">
                <span className="col-span-3 text-sm font-dm-sans-bold text-[#f6d0f1]">
                  Pricing notice
                </span>
              </p>
              <p className="mt-3 grid border-y border-[#f0b6df]/12 py-2 text-xs font-dm-sans-bold text-[#f6d0f1] sm:grid-cols-3">
                <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0">
                  Not purchased
                </span>
                <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0">
                  Not active
                </span>
                <span className="border-l border-[#f0b6df]/12 px-3 py-1 text-center first:border-l-0">
                  Not guaranteed
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
