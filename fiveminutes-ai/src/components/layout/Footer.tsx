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
    <footer className="bg-[#f5f5f5] border-t border-[#e8e8e8] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#111111] flex items-center justify-center">
                <span className="text-white font-bold text-xs">5m</span>
              </div>
              <span className="text-[#111111] font-medium text-sm tracking-tight">
                Fiveminutes AI
              </span>
            </a>
            <p className="text-sm text-[#999999] leading-relaxed max-w-xs">
              Trí tuệ nhân tạo tiên phong cho Việt Nam. Bởi Bùi Tú.
            </p>
            <div className="mt-6 space-y-1.5 text-sm text-[#bbbbbb]">
              <p>Aichi Prefecture, Japan</p>
              <a href="mailto:anhtunb98@gmail.com" className="block hover:text-[#777777] transition-colors">
                anhtunb98@gmail.com
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-[#111111] text-xs font-medium uppercase tracking-[0.15em] mb-5">{group}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#999999] hover:text-[#111111] transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#e8e8e8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#bbbbbb]">© 2024 Bùi Tú. All rights reserved.</p>
          <p className="text-xs text-[#bbbbbb]">
            Powered by <span className="text-[#999999]">Fiveminutes AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
