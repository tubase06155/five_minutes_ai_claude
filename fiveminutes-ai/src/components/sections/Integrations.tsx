"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { AnimatedList, AnimatedItem } from "@/components/ui/AnimatedSection";

const integrations = [
  { name: "Zalo", cat: "Messaging" },
  { name: "Facebook", cat: "Messaging" },
  { name: "Slack", cat: "Workspace" },
  { name: "Google Drive", cat: "Storage" },
  { name: "Notion", cat: "Docs" },
  { name: "HubSpot", cat: "CRM" },
  { name: "Shopify", cat: "E-commerce" },
  { name: "WordPress", cat: "CMS" },
  { name: "OpenAI", cat: "AI" },
  { name: "WhatsApp", cat: "Messaging" },
  { name: "Telegram", cat: "Messaging" },
  { name: "Webhook", cat: "API" },
];

export default function Integrations() {
  return (
    <section className="py-24 sm:py-32 border-t border-[#27272a]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xs text-[#3f3f46] uppercase tracking-widest mb-4">Integrations</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight mb-4">
            Connect with every platform
            <br />
            <span className="bg-gradient-to-r from-[#fafafa] to-[#52525b] bg-clip-text text-transparent">
              you already use
            </span>
          </h2>
          <p className="text-[#71717a] text-base max-w-lg mx-auto">
            Fiveminutes AI integrates seamlessly with your software ecosystem — no rebuilding required.
          </p>
        </AnimatedSection>

        <AnimatedList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-[#27272a] border border-[#27272a] rounded-xl overflow-hidden">
          {integrations.map((item) => (
            <AnimatedItem key={item.name}>
              <div className="bg-[#09090b] hover:bg-[#111113] transition-colors duration-200 p-5 flex flex-col gap-1.5">
                <span className="text-[10px] text-[#52525b] uppercase tracking-widest">{item.cat}</span>
                <span className="text-sm text-[#a1a1aa] font-medium">{item.name}</span>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedList>

        <AnimatedSection delay={0.2} className="mt-8 text-center">
          <p className="text-sm text-[#3f3f46]">
            + REST API & Webhook support for any other system
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
