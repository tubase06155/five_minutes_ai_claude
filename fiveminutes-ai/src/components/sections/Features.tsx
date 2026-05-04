"use client";

import { AnimatedList, AnimatedItem } from "@/components/ui/AnimatedSection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Bot, Plug, FileText, MessageSquare, Globe, Zap } from "lucide-react";

const features = [
  {
    Icon: Bot,
    title: "Custom AI Agent",
    desc: "Design AI Agents tailored to your business — 24/7 customer support, internal operations automation, and organizational knowledge management.",
  },
  {
    Icon: Plug,
    title: "AI Integration",
    desc: "Integrate AI into your existing systems without rebuilding from scratch. Automate workflows, save time and reduce operational costs.",
  },
  {
    Icon: FileText,
    title: "Doc Copilot",
    desc: "Turn internal documents into an interactive knowledge assistant. Employees ask — AI answers accurately from your document sources.",
  },
  {
    Icon: MessageSquare,
    title: "CS Copilot",
    desc: "AI-powered customer support that handles volume automatically, reduces team load, and improves response speed and experience quality.",
  },
  {
    Icon: Globe,
    title: "Vietnamese-first",
    desc: "Optimized specifically for Vietnamese language and market — understanding context, culture, and local business nuances.",
  },
  {
    Icon: Zap,
    title: "Fast deployment",
    desc: "From requirements to production in 5 days. No in-house AI team needed. No large infrastructure investment required.",
  },
];

export default function Features() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs text-[#3f3f46] uppercase tracking-widest mb-4 font-medium">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight mb-4">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-[#fafafa] to-[#71717a] bg-clip-text text-transparent">
              ship AI to production
            </span>
          </h2>
          <p className="text-[#71717a] max-w-xl mx-auto text-base leading-relaxed">
            We don&apos;t sell demos. We build AI agents that run in your real production environment.
          </p>
        </AnimatedSection>

        <AnimatedList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#27272a] rounded-xl overflow-hidden border border-[#27272a]">
          {features.map((f) => (
            <AnimatedItem key={f.title}>
              <div className="group bg-[#09090b] hover:bg-[#18181b] transition-colors duration-300 p-8 h-full">
                <div className="w-9 h-9 rounded-lg bg-[#18181b] border border-[#27272a] flex items-center justify-center mb-5 group-hover:border-[#3f3f46] transition-colors">
                  <f.Icon className="w-4 h-4 text-[#a1a1aa]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#fafafa] font-semibold text-sm mb-2">{f.title}</h3>
                <p className="text-[#71717a] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
}
