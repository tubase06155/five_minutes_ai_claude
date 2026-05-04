"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Dịch vụ", href: "#services" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Về chúng tôi", href: "#about" },
  { label: "Bảng giá", href: "#pricing" },
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
          ? "bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">5m</span>
          </div>
          <span className="text-[#fafafa] font-semibold text-sm tracking-tight">
            Fiveminutes AI
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:hello@mediax.com.vn"
            className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors duration-150"
          >
            Liên hệ
          </a>
          <Button size="sm" variant="ghost">
            Dùng thử miễn phí
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#71717a] hover:text-[#fafafa] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span
              className={`block h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#09090b] border-b border-[#27272a] px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" variant="primary" className="w-full mt-2">
            Dùng thử miễn phí
          </Button>
        </div>
      )}
    </header>
  );
}
