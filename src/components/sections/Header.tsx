import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Heart, Menu, X } from "lucide-react";

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
    { href: "#home", label: "Home" },
    { href: "#about", label: "Trust" },
    { href: "#features", label: "Safety" },
    { href: "#pricing", label: "Membership" },
    { href: "#faq", label: "FAQ" },
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
          {/* Logo - Always Visible with Hover Border */}
          <a
            href="#home"
            aria-label="Go to PinayMate home"
            className="flex min-h-12 cursor-pointer items-center space-x-3 rounded-lg border border-[#f0b6df]/10 bg-[#1a0d27]/35 px-3 py-2 transition-all duration-200 hover:border-[#F4376D]/65 hover:bg-[#2e1e5a]/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9]"
          >
            <div className="relative">
              {/* Main Logo Container */}
              <div className="w-12 h-12 relative">
                <img
                  src="/main-logo-no-bg.svg"
                  alt="PinayMate Logo"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Main Brand Name - Always visible, changes color based on section */}
            <span
              className="text-2xl font-hello-paris-bold text-white transition-all duration-300"
            >
              PinayMate
            </span>
          </a>

          {/* Right side - Navigation */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group nav-item relative min-h-11 rounded-lg border border-[#f0b6df]/10 bg-[#1a0d27]/35 px-4 py-2 transition-all duration-200 hover:border-[#F4376D]/65 hover:bg-[#2e1e5a]/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9]"
                >
                  <div className="flex items-center">
                    <span className="font-dm-sans-medium text-base text-white transition-all duration-300 group-hover:text-[#F4376D]">
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="#download"
              aria-label="Go to PinayMate waitlist options"
              className="hidden min-h-11 items-center justify-center gap-2 rounded-lg bg-[#ef3e78] px-4 py-2 text-sm font-dm-sans-bold text-white shadow-lg shadow-[#ef3e78]/25 transition-all duration-200 hover:bg-[#d7346b] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9] sm:inline-flex"
            >
              Join waitlist
              <Heart className="h-4 w-4" aria-hidden="true" />
            </a>

            {/* Enhanced Mobile menu button */}
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

        {/* Enhanced Mobile Navigation Menu */}
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
              <p className="px-4 pb-2 text-xs font-dm-sans-bold text-[#cbbade]">
                Navigate
                <span className="sr-only">. Menu</span>
              </p>
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    href={item.href}
                    className="group flex min-h-12 items-center space-x-3 rounded-lg border border-[#f0b6df]/12 bg-[#1a0d27]/45 px-4 py-3 text-white transition-all duration-200 hover:border-[#F4376D]/65 hover:bg-[#2e1e5a]/55 hover:text-[#f7a4c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9]"
                    style={{ animationDelay: `${index * 40}ms` }}
                    onClick={closeMenu}
                  >
                    <span className="font-dm-sans-medium text-base transition-all duration-200">
                      {item.label}
                    </span>
                    <span className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg bg-[#2e1e5a]/55 text-[#f7a4c8]" aria-hidden="true">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                ))}
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
              <p className="mt-3 grid grid-cols-3 gap-2 px-1 text-xs font-dm-sans-bold text-[#f3c7de]">
                <span className="rounded-lg border border-[#f0b6df]/12 bg-[#2e1e5a]/38 px-2 py-2 text-center">
                  Email
                </span>
                <span className="rounded-lg border border-[#f0b6df]/12 bg-[#2e1e5a]/38 px-2 py-2 text-center">
                  No profile
                </span>
                <span className="rounded-lg border border-[#f0b6df]/12 bg-[#2e1e5a]/38 px-2 py-2 text-center">
                  No payment
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
