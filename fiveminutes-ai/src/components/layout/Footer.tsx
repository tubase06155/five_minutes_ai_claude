const footerLinks = {
  Services: [
    { label: "Custom AI Agent", href: "#services" },
    { label: "AI Integration", href: "#services" },
    { label: "Doc Copilot", href: "#products" },
    { label: "CS Copilot", href: "#products" },
  ],
  Company: [
    { label: "About us", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "mailto:anhtunb98@gmail.com" },
  ],
  Legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#27272a] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#fafafa] flex items-center justify-center">
                <span className="text-[#09090b] font-bold text-sm">5m</span>
              </div>
              <span className="text-[#fafafa] font-semibold text-sm tracking-tight">
                Fiveminutes AI
              </span>
            </a>
            <p className="text-sm text-[#71717a] leading-relaxed max-w-xs">
              Pioneering artificial intelligence for Vietnam. A product by Bùi Tú.
            </p>
            <div className="mt-6 space-y-1.5 text-sm text-[#3f3f46]">
              <p>Aichi Prefecture, Japan</p>
              <a href="mailto:anhtunb98@gmail.com" className="block hover:text-[#a1a1aa] transition-colors">
                anhtunb98@gmail.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-[#fafafa] text-sm font-medium mb-4">{group}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#3f3f46]">© 2024 Bùi Tú. All rights reserved.</p>
          <p className="text-xs text-[#3f3f46]">
            Powered by <span className="text-[#71717a]">Fiveminutes AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
