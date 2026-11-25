import React, { useState, useEffect, useRef } from "react";
import {
  IconChevronRight,
  IconHeart,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

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
      aria-label="Main"
      className={`pm-light fixed top-0 z-50 w-full border-b transition-[box-shadow,background-color,border-color] duration-300 ${
        isScrolled
          ? "border-line bg-paper/95 shadow-[0_12px_30px_-20px_rgb(52_8_57/0.35)] backdrop-blur-xl"
          : "border-transparent bg-paper/85 backdrop-blur-md"
      }`}
    >
      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 xl:px-16">
        <div
          className={`flex items-center justify-between transition-[height] duration-300 ${
            isScrolled ? "h-16" : "h-[72px]"
          }`}
        >
          <a
            href="#home"
            aria-label="Go to PinayMate home"
            className="flex min-h-12 items-center gap-2 rounded-full pr-2"
          >
            <img
              src="/main-logo-no-bg.svg"
              alt="PinayMate Logo"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="font-hello-paris-bold text-2xl text-plum">
              PinayMate
            </span>
          </a>

          <div className="flex items-center gap-3 lg:gap-5">
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="pm-nav-link font-dm-sans-medium text-base"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="#download"
              aria-label="Go to PinayMate waitlist options"
              className="pm-btn pm-btn-primary hidden min-h-11 px-5 text-[15px] sm:inline-flex"
            >
              Join waitlist
              <IconHeart size={17} stroke={1.75} aria-hidden="true" />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={toggleMenu}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border-[1.5px] border-line bg-white text-plum transition-colors duration-200 hover:border-rosas md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? (
                <IconX size={22} stroke={1.75} aria-hidden="true" />
              ) : (
                <IconMenu2 size={22} stroke={1.75} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-x-0 top-16 z-40 md:hidden">
            <button
              type="button"
              aria-label="Close mobile navigation"
              className="fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-plum/70"
              onClick={closeMenu}
            />
            <div
              ref={mobileMenuRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="PinayMate mobile navigation"
              className="pm-light relative max-h-[calc(100dvh-4rem)] animate-slideInDown overflow-y-auto rounded-b-3xl border-t border-line px-4 pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom))] shadow-2xl"
            >
              <ul className="divide-y divide-line">
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <a
                      ref={index === 0 ? firstMobileLinkRef : undefined}
                      href={item.href}
                      className="flex min-h-14 items-center justify-between rounded-xl px-3 font-dm-sans-medium text-lg text-plum transition-colors duration-200 hover:bg-petal"
                      onClick={closeMenu}
                    >
                      {item.label}
                      <IconChevronRight
                        size={20}
                        stroke={1.75}
                        className="text-rosas"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                onClick={closeMenu}
                aria-label="Go to PinayMate waitlist options"
                className="pm-btn pm-btn-primary mt-4 flex min-h-14 w-full"
              >
                Join the waitlist
                <IconHeart size={20} stroke={1.75} aria-hidden="true" />
              </a>
              <p className="mt-3 px-1 text-sm leading-6 text-mauve">
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
