"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-[#e8e8e8]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#111111] flex items-center justify-center">
            <span className="text-white font-bold text-xs">5m</span>
          </div>
          <span className="text-[#111111] font-medium text-sm tracking-tight">
            Fiveminutes AI
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#666666] hover:text-[#111111] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:anhtunb98@gmail.com"
            className="text-sm text-[#666666] hover:text-[#111111] transition-colors duration-150"
          >
            Contact
          </a>
          <a
            href="#pricing"
            className="text-sm bg-[#111111] text-white px-4 py-2 hover:bg-[#333333] transition-colors"
          >
            Get started
          </a>
        </div>

        <button
          className="md:hidden text-[#666666] hover:text-[#111111] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-px bg-current transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-b border-[#e8e8e8] px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-[#666666] hover:text-[#111111] transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="block text-sm bg-[#111111] text-white px-4 py-2.5 text-center mt-2"
          >
            Get started
          </a>
        </div>
      )}
    </header>
  );
}
