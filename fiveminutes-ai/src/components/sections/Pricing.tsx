"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    desc: "Perfect for exploring and experimenting with AI solutions.",
    features: [
      "1 AI Agent",
      "1,000 messages / month",
      "Doc Copilot (5 documents)",
      "Email support",
    ],
    cta: "Get started free",
    variant: "ghost" as const,
    highlight: false,
  },
  {
    name: "Pro",
    price: "$129",
    period: "/ month",
    desc: "For growing businesses that need reliable, stable AI.",
    features: [
      "5 AI Agents",
      "50,000 messages / month",
      "Doc Copilot (unlimited)",
      "CS Copilot with Zalo/FB",
      "Analytics dashboard",
      "Priority 24/7 support",
    ],
    cta: "Start 14-day trial",
    variant: "primary" as const,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Fully tailored solutions for large organizations.",
    features: [
      "Unlimited AI Agents",
      "Unlimited messages",
      "Legacy system integration",
      "99.9% uptime SLA",
      "Dedicated account manager",
      "On-premise deployment",
    ],
    cta: "Talk to sales",
    variant: "ghost" as const,
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 border-t border-[#27272a]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-[#71717a] text-base">
            No hidden fees. Upgrade or cancel anytime.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className={`relative rounded-xl p-6 flex flex-col ${
                plan.highlight
                  ? "bg-[#fafafa] border border-[#fafafa]"
                  : "bg-[#18181b] border border-[#27272a]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#09090b] border border-[#27272a] text-[#a1a1aa] text-xs font-medium px-3 py-1 rounded-full">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-semibold text-base mb-1 ${plan.highlight ? "text-[#09090b]" : "text-[#fafafa]"}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-3xl font-bold ${plan.highlight ? "text-[#09090b]" : "text-[#fafafa]"}`}>{plan.price}</span>
                  {plan.period && (
                    <span className={`text-sm ${plan.highlight ? "text-[#52525b]" : "text-[#71717a]"}`}>{plan.period}</span>
                  )}
                </div>
                <p className={`text-sm ${plan.highlight ? "text-[#52525b]" : "text-[#71717a]"}`}>{plan.desc}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-3 text-sm ${plan.highlight ? "text-[#3f3f46]" : "text-[#a1a1aa]"}`}>
                    <svg className={`w-4 h-4 shrink-0 ${plan.highlight ? "text-[#3f3f46]" : "text-[#52525b]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? "ghost" : plan.variant}
                className={`w-full ${plan.highlight ? "border-[#09090b]/20 text-[#09090b] hover:text-[#09090b] hover:border-[#09090b]/40 bg-transparent" : ""}`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
