"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { value: "50+", label: "Businesses trust us" },
  { value: "5 days", label: "Average deployment time" },
  { value: "98%", label: "Answer accuracy" },
  { value: "24/7", label: "Always on" },
];

export default function Stats() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-[#27272a]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight mb-4">
            Why choose Fiveminutes AI?
          </h2>
          <p className="text-[#71717a] max-w-xl mx-auto text-base leading-relaxed">
            Not generic AI — we build solutions that understand Vietnamese language and culture,
            ready for real enterprise environments.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#fafafa] mb-2">{stat.value}</div>
              <div className="text-sm text-[#71717a]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
