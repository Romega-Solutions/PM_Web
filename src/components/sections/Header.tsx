import React, { useState, useEffect, useRef } from "react";
import {
  CircleHelp,
  Crown,
  Heart,
  Home,
  Menu,
  ShieldCheck,
  Sparkles,
  UserCheck,
  X,
} from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => firstMobileLinkRef.current?.focus(), 0);

    const handleMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !mobileMenuRef.current) {
        return;
      }

      const focusableElements = Array.from(
        mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
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

    window.addEventListener("keydown", handleMenuKeyDown);
    return () => {
      window.removeEventListener("keydown", handleMenuKeyDown);
      document.body.style.overflow = previousOverflow;
      menuButton?.focus();
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      href: "#home",
      label: "Home",
      icon: Home,
      iconSurface: "bg-[#ef3e78]/22 text-[#f7a4c8]",
      rail: "bg-[#ef3e78]/58",
    },
    {
      href: "#about",
      label: "Trust",
      icon: UserCheck,
      iconSurface: "bg-[#8d69f6]/22 text-[#d9c8ff]",
      rail: "bg-[#8d69f6]/50",
    },
    {
      href: "#features",
      label: "Safety",
      icon: ShieldCheck,
      iconSurface: "bg-[#5c83e9]/22 text-[#c8d8ff]",
      rail: "bg-[#5c83e9]/48",
    },
    {
      href: "#pricing",
      label: "Membership",
      icon: Crown,
      iconSurface: "bg-[#f0b6df]/18 text-[#ffe8f1]",
      rail: "bg-[#f0b6df]/44",
    },
    {
      href: "#faq",
      label: "FAQ",
      icon: CircleHelp,
      iconSurface: "bg-[#49d49a]/16 text-[#b7f6d7]",
      rail: "bg-[#49d49a]/42",
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? "border-b border-[#f0b6df]/16 bg-dalisay-950/95 shadow-xl shadow-black/18 backdrop-blur-xl"
          : "border-b border-[#f0b6df]/12 bg-dalisay-950/82 backdrop-blur-lg"
      }`}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-amihan-500/5 via-dalisay-500/5 to-luna-500/5 opacity-40 transition-opacity duration-200"
        aria-hidden="true"
      ></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 relative">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "h-14" : "h-16"
          }`}
        >
          <a
            href="#home"
            aria-label="Go to PinayMate home"
            className="group flex min-h-12 cursor-pointer items-center gap-3 border-l-2 border-[#f0b6df]/18 bg-[#1a0d27]/24 px-3 py-2 transition-all duration-200 hover:border-[#F4376D]/65 hover:bg-[#2e1e5a]/38 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9]"
          >
            <div className="relative">
              <div className="relative h-12 w-12">
                <img
                  src="/main-logo-no-bg.svg"
                  alt="PinayMate Logo"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
                <span
                  className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-lg bg-[#ef3e78] text-white shadow-lg shadow-[#ef3e78]/20"
                  aria-hidden="true"
                >
                  <Sparkles className="h-3 w-3" />
                </span>
              </div>
            </div>

            <span className="hidden sm:block">
              <span className="block text-2xl font-hello-paris-bold text-white transition-all duration-300 group-hover:text-[#ffe8f1]">
                PinayMate
              </span>
              <span className="mt-1 grid max-w-24 grid-cols-3 gap-1.5" aria-hidden="true">
                <span className="h-1.5 rounded-lg bg-[#ef3e78]/58" />
                <span className="h-1.5 rounded-lg bg-[#8d69f6]/44" />
                <span className="h-1.5 rounded-lg bg-[#5c83e9]/36" />
              </span>
            </span>
          </a>

          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-label={`Go to ${item.label}`}
                    className="group nav-item relative flex min-h-11 min-w-11 items-center gap-2 overflow-hidden border border-transparent px-2 py-2 transition-all duration-200 hover:border-[#f0b6df]/18 hover:bg-[#2e1e5a]/28 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9] lg:min-w-0 lg:px-3"
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.iconSurface}`}
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="hidden font-dm-sans-medium text-sm text-[#f8f5ff] transition-all duration-300 group-hover:text-[#f7a4c8] lg:inline">
                      {item.label}
                    </span>
                    <span
                      className={`absolute inset-x-2 bottom-0 h-0.5 rounded-lg opacity-45 transition-all duration-200 group-hover:opacity-95 ${item.rail}`}
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>

            <a
              href="#download"
              aria-label="Go to PinayMate waitlist options"
              className="hidden min-h-11 items-center justify-center gap-2 rounded-lg bg-[#ef3e78] px-4 py-2 text-sm font-dm-sans-bold text-white shadow-lg shadow-[#ef3e78]/25 transition-all duration-200 hover:bg-[#d7346b] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9] sm:inline-flex"
            >
              Join waitlist
              <Heart className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={toggleMenu}
              className="group relative min-h-11 min-w-11 rounded-lg border border-[#f0b6df]/14 bg-[#2e1e5a]/55 p-3 text-white backdrop-blur-sm transition-all duration-200 hover:border-[#F4376D]/65 hover:bg-[#3b2255]/70 hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9] md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span
                className={`w-6 h-6 relative z-10 transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-x-0 top-16 z-40 md:hidden">
            <button
              type="button"
              aria-label="Close mobile navigation"
              className="fixed left-0 right-0 top-16 h-[calc(100dvh-4rem)] bg-black/62 backdrop-blur-sm"
              onClick={closeMenu}
            />
            <div
              ref={mobileMenuRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="PinayMate mobile navigation"
              className="relative max-h-[calc(100dvh-4rem)] animate-slideInDown overflow-y-auto border-t border-[#f0b6df]/16 bg-dalisay-950/98 px-4 pt-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] shadow-xl shadow-black/25 backdrop-blur-xl"
            >
              <p className="grid grid-cols-3 gap-2 px-4 pb-3" aria-hidden="true">
                <span className="h-1.5 rounded-lg bg-[#ef3e78]/58" />
                <span className="h-1.5 rounded-lg bg-[#8d69f6]/44" />
                <span className="h-1.5 rounded-lg bg-[#5c83e9]/34" />
              </p>
              <p className="sr-only">
                Navigate
                <span className="sr-only">. Menu</span>
              </p>
              <div className="grid grid-cols-2 gap-2 border-y border-[#f0b6df]/12 py-3">
                {navItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.href}
                      ref={index === 0 ? firstMobileLinkRef : undefined}
                      href={item.href}
                      className={`group flex min-h-14 items-center gap-3 border-l-2 px-3 py-3 text-white transition-all duration-200 hover:bg-[#2e1e5a]/38 hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9] ${
                        index === navItems.length - 1
                          ? "col-span-2 border-[#f0b6df]/18"
                          : "border-[#f0b6df]/12"
                      }`}
                      style={{ animationDelay: `${index * 40}ms` }}
                      onClick={closeMenu}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.iconSurface}`}
                        aria-hidden="true"
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-dm-sans-medium text-sm transition-all duration-200">
                          {item.label}
                        </span>
                        <span className="mt-2 grid grid-cols-3 gap-1.5" aria-hidden="true">
                          <span className={`h-1.5 rounded-lg ${item.rail}`} />
                          <span className="h-1.5 rounded-lg bg-[#8d69f6]/34" />
                          <span className="h-1.5 rounded-lg bg-[#5c83e9]/28" />
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>

              <a
                href="#download"
                onClick={closeMenu}
                aria-label="Go to PinayMate waitlist options"
                className="mt-4 flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#ef3e78] px-5 py-3 text-center font-dm-sans-bold text-white shadow-xl shadow-[#ef3e78]/25 transition duration-200 hover:bg-[#d7346b] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9]"
              >
                Join waitlist
                <span className="sr-only">. Join the waitlist</span>
                <Heart className="h-5 w-5" aria-hidden="true" />
              </a>
              <p className="mt-3 grid grid-cols-3 border-y border-[#f0b6df]/12 py-3">
                <span className="border-l border-[#f0b6df]/12 px-3 first:border-l-0">
                  <span className="block h-1.5 rounded-lg bg-[#ef3e78]/64" aria-hidden="true" />
                  <span className="sr-only">Email</span>
                </span>
                <span className="border-l border-[#f0b6df]/12 px-3 first:border-l-0">
                  <span className="block h-1.5 rounded-lg bg-[#8d69f6]/48" aria-hidden="true" />
                  <span className="sr-only">No profile</span>
                </span>
                <span className="border-l border-[#f0b6df]/12 px-3 first:border-l-0">
                  <span className="block h-1.5 rounded-lg bg-[#5c83e9]/38" aria-hidden="true" />
                  <span className="sr-only">No payment</span>
                </span>
                <span className="sr-only">
                  Waitlist links open email. No profile, checkout, or payment is
                  created from this website.
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
