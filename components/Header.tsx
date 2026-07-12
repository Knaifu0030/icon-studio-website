"use client";

import { useCallback, useEffect, useState } from "react";
import { PiList, PiPhone, PiX } from "react-icons/pi";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  // NB: backdrop-blur must never be active while the menu is open — a
  // backdrop-filter ancestor becomes the containing block for the fixed
  // overlay and collapses it.
  const headerClass = open
    ? "border-b border-hairline bg-obsidian"
    : scrolled
      ? "border-b border-hairline bg-obsidian/90 backdrop-blur-md"
      : "border-b border-transparent bg-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-(--z-header) transition-colors duration-500 ${headerClass}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#main" className="flex shrink-0 items-center py-2" aria-label="A ICON Dance Academy — back to top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt=""
            width={245}
            height={414}
            className="h-16 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.8125rem] font-semibold tracking-[0.14em] text-ivory/85 uppercase transition-colors duration-300 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a href="#enquire" className="btn btn-gold !min-h-0 !px-6 !py-3">
            Enrol Now
          </a>
        </nav>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center text-ivory lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <PiX size={28} /> : <PiList size={28} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-x-0 top-20 bottom-0 z-(--z-mobile-menu) overflow-y-auto bg-obsidian transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="texture flex min-h-full flex-col justify-between px-6 pt-10 pb-28">
          <nav className="flex flex-col" aria-label="Mobile">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="font-display border-b border-hairline py-4 text-3xl text-ivory transition-colors hover:text-gold"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-10 flex flex-col gap-4">
            <a href="#enquire" onClick={close} className="btn btn-gold w-full">
              Enrol Now
            </a>
            <a
              href={`tel:${site.phones[0].tel}`}
              className="btn btn-line w-full"
            >
              <PiPhone size={18} aria-hidden />
              Call {site.phones[0].display}
            </a>
            <p className="text-center text-sm text-stone">
              {site.tagline}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
