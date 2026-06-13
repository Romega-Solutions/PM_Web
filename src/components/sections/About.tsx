import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Profile review first",
    copy: "Helpful prompts and safety-first onboarding help members understand what to complete before starting a conversation.",
  },
  {
    icon: Sparkles,
    title: "Intent-led matching",
    copy: "Profiles emphasize values, family goals, lifestyle, and relationship intent instead of only swipe-level attraction.",
  },
  {
    icon: MessageCircle,
    title: "Conversations with context",
    copy: "Prompt and profile-detail direction helps first messages feel easier, warmer, and more useful when chat is live.",
  },
];

const memberSignals = [
  "Review-status cues",
  "Relationship goals upfront",
  "Culture-aware discovery",
  "Mobile-first conversation direction",
];

const credibilityStats = [
  {
    value: "18+",
    label: "Positioned for adult members only",
  },
  {
    value: "0",
    label: "Payment details requested on this page",
  },
  {
    value: "3",
    label: "Clear steps before early access",
  },
];

const trustFlow = [
  "Join by platform preference",
  "Get access and safety updates",
  "Create a profile inside the app when access is available",
];

const About = () => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const section = document.getElementById("about");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-[#fff7fb] via-white to-[#f4f8ff] py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ef3e78]/30 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#5c83e9]/25 to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div
          className={`grid items-center gap-12 transition-all duration-700 motion-reduce:transform-none motion-reduce:transition-none lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#F4376D]/20 bg-white/80 px-4 py-2 text-sm font-dm-sans-bold text-[#b31460] shadow-sm">
              <HeartHandshake className="h-4 w-4" aria-hidden="true" />
              Filipino dating product direction, built around trust
            </div>

            <h2 className="font-lora text-4xl font-bold leading-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              A calmer path from interest to real connection.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#4b5563] sm:text-xl">
              PinayMate is shaped for people who want more than a busy dating
              feed. The product path keeps the first step clear: safer
              discovery, stronger intent, and conversations that can turn into
              something real when access is available.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#features"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#ef3e78] px-6 py-3 font-dm-sans-bold text-white shadow-lg shadow-[#F4376D]/20 transition duration-200 hover:bg-[#d7346b] hover:shadow-[#F4376D]/30 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f6fe4]"
              >
                See how it works
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#pricing"
                aria-describedby="about-membership-note"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-lg border border-[#c5b1e4] bg-white px-6 py-3 font-dm-sans-bold text-[#5a3baf] shadow-sm transition duration-200 hover:border-[#8d69f6] hover:bg-[#f8f5ff] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f6fe4]"
              >
                Review planned memberships
              </a>
            </div>
            <p
              id="about-membership-note"
              className="mt-3 text-sm leading-6 text-[#6b5f75]"
            >
              Membership links collect interest only. They do not create a
              dating profile, start matching, or open checkout.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
              {memberSignals.map((signal) => (
                <div
                  key={signal}
                  className="border-l border-[#e7dff1] pl-3 text-sm font-dm-sans-semibold text-[#374151]"
                >
                  <CheckCircle2
                    className="mb-2 h-4 w-4 text-[#22a574]"
                    aria-hidden="true"
                  />
                  {signal}
                </div>
              ))}
            </div>

            <dl className="mt-8 grid gap-4 border-y border-[#ecebf0] py-5 sm:grid-cols-3">
              {credibilityStats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="font-lora text-3xl font-bold text-[#21132f]">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-[#5f6572]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 border-t border-[#e7e6eb] pt-6">
              <p className="text-sm font-dm-sans-bold uppercase text-[#b31460]">
                The access path
              </p>
              <ol className="mt-4 grid gap-4 sm:grid-cols-3">
                {trustFlow.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm leading-6 text-[#374151]"
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2e1e5a] text-sm font-dm-sans-bold text-white"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-[#ecebf0] lg:pl-10">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <article
                  key={point.title}
                  className="border-b border-[#ecebf0] pb-6 last:border-b-0 sm:border-b-0 sm:pb-0 lg:border-b lg:pb-6"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#2e1e5a] text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-lora text-xl font-bold text-[#1a1a1a]">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-[#5f6572]">
                        {point.copy}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="border-t border-[#2e1e5a]/20 bg-[#2e1e5a] p-6 text-white sm:col-span-3 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/12">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-dm-sans-bold uppercase text-[#f0b6df]">
                    Product promise
                  </p>
                  <p className="text-xl font-lora font-bold">
                    Less noise, more qualified intent.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-base leading-7 text-[#e3dcf9]">
                Every step is planned to help serious members understand fit,
                safety posture, and value before they choose to start a
                conversation in the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
