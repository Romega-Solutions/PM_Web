import React, { useState, useEffect, useRef } from "react";
import { Heart, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnLightSection, setIsOnLightSection] = useState(false);
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
      setIsOnLightSection(false);
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
          ? isOnLightSection
            ? "bg-dalisay-950/95 backdrop-blur-xl border-b border-amihan-500/25 shadow-2xl"
            : "bg-dalisay-950/95 backdrop-blur-xl border-b border-amihan-500/25 shadow-2xl"
          : "bg-dalisay-950/82 backdrop-blur-lg border-b border-luna-300/20"
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r transition-opacity duration-200 ${
          isOnLightSection
            ? "from-pink-500/5 via-purple-500/5 to-blue-500/5 opacity-40"
            : "from-amihan-500/5 via-dalisay-500/5 to-luna-500/5 opacity-40"
        }`}
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
            className={`flex min-h-12 items-center space-x-3 cursor-pointer rounded-lg border px-3 py-2 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9] ${
              isOnLightSection
                ? "border-transparent hover:border-pink-500 hover:bg-pink-50"
                : "border-transparent hover:border-[#F4376D] hover:bg-[#2e1e5a]/45"
            }`}
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
              className={`text-2xl font-hello-paris-bold transition-all duration-300 ${
                isOnLightSection
                  ? "text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text"
                  : "text-white"
              }`}
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
                  className={`group nav-item relative min-h-11 rounded-lg border px-4 py-2 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9] ${
                    isOnLightSection
                      ? "border-transparent hover:border-pink-500 hover:bg-pink-50"
                      : "border-transparent hover:border-[#F4376D] hover:bg-[#2e1e5a]/45"
                  }`}
                >
                  <div className="flex items-center">
                    <span
                      className={`font-dm-sans-medium text-base transition-all duration-300 ${
                        isOnLightSection
                          ? "text-gray-800 group-hover:text-pink-600"
                          : "text-white group-hover:text-[#F4376D]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="#download"
              aria-label="Go to PinayMate waitlist options"
              className={`hidden min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-dm-sans-bold transition-all duration-200 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9] sm:inline-flex ${
                isOnLightSection
                  ? "bg-[#21132f] text-white shadow-lg shadow-[#2e1e5a]/15 hover:bg-[#3b2255]"
                  : "bg-[#ef3e78] text-white shadow-lg shadow-[#ef3e78]/25 hover:bg-[#d7346b]"
              }`}
            >
              Join waitlist
              <Heart className="h-4 w-4" aria-hidden="true" />
            </a>

            {/* Enhanced Mobile menu button */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={toggleMenu}
              className={`group relative min-h-11 min-w-11 rounded-lg border p-3 backdrop-blur-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9] md:hidden ${
                isOnLightSection
                  ? "border-transparent hover:border-pink-500 bg-gray-100/50 text-gray-900 hover:text-pink-500 hover:bg-pink-50"
                  : "border-transparent hover:border-[#F4376D] bg-[#2e1e5a]/55 text-white hover:text-[#f7a4c8] hover:bg-[#3b2255]/70"
              }`}
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
              className="fixed left-0 right-0 top-16 h-[calc(100dvh-4rem)] bg-black/45"
              onClick={closeMenu}
            />
            <div
              ref={mobileMenuRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="PinayMate mobile navigation"
              className={`relative max-h-[calc(100dvh-4rem)] overflow-y-auto border-t px-4 pt-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] shadow-2xl backdrop-blur-xl animate-slideInDown ${
                isOnLightSection
                  ? "border-amihan-500/30 bg-dalisay-950/98"
                  : "border-amihan-500/30 bg-dalisay-950/98"
              }`}
            >
              <p
                className={`px-4 pb-2 text-xs font-dm-sans-bold uppercase ${
                  isOnLightSection ? "text-gray-600" : "text-[#cbbade]"
                }`}
              >
                Menu
              </p>
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    href={item.href}
                    className={`group flex min-h-12 items-center space-x-3 rounded-lg border px-4 py-3 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9] ${
                      isOnLightSection
                        ? "border-transparent text-gray-800 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-600"
                        : "border-transparent text-white hover:border-[#F4376D] hover:bg-[#2e1e5a]/45 hover:text-[#f7a4c8]"
                    }`}
                    style={{ animationDelay: `${index * 40}ms` }}
                    onClick={closeMenu}
                  >
                    <span className="font-dm-sans-medium text-base transition-all duration-200">
                      {item.label}
                    </span>
                    <span
                      className={`ml-auto text-sm ${
                        isOnLightSection ? "text-pink-600" : "text-[#f7a4c8]"
                      }`}
                      aria-hidden="true"
                    >
                      View
                    </span>
                  </a>
                ))}
              </div>

              <a
                href="#download"
                onClick={closeMenu}
                aria-label="Go to PinayMate waitlist options"
                className={`mt-4 flex min-h-14 items-center justify-center gap-2 rounded-lg px-5 py-3 text-center font-dm-sans-bold shadow-xl transition duration-200 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81a5e9] ${
                  isOnLightSection
                    ? "bg-[#21132f] text-white shadow-[#2e1e5a]/15 hover:bg-[#3b2255]"
                    : "bg-[#ef3e78] text-white shadow-[#ef3e78]/25 hover:bg-[#d7346b]"
                }`}
              >
                Join the waitlist
                <Heart className="h-5 w-5" aria-hidden="true" />
              </a>
              <p
                className={`mt-3 px-1 text-sm leading-6 ${
                  isOnLightSection ? "text-gray-600" : "text-[#cbbade]"
                }`}
              >
                Waitlist links open email. No profile, checkout, or payment is
                created from this website.
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
