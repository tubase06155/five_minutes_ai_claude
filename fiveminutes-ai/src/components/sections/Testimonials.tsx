"use client";

import { AnimatedList, AnimatedItem } from "@/components/ui/AnimatedSection";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote:
      "Doc Copilot helps our 200-person team find information in seconds instead of spending 30 minutes searching through documents. The ROI was clear in the first month.",
    name: "Nguyen Minh Tuan",
    role: "CTO, Fintech Company",
    avatar: "N",
  },
  {
    quote:
      "CS Copilot handles 80% of customer requests automatically. Our support team can now focus on issues that genuinely need human attention.",
    name: "Tran Thi Hoa",
    role: "Head of Customer Success, E-commerce",
    avatar: "T",
  },
  {
    quote:
      "Deployed in one week, no in-house AI team needed. MediaX supported us from A to Z — from design through integration with our legacy systems.",
    name: "Le Van Nam",
    role: "CEO, Retail Chain",
    avatar: "L",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 border-t border-[#27272a]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight mb-4">
            What businesses say about us
          </h2>
          <p className="text-[#71717a] text-base">
            Real results from customers already using Fiveminutes AI.
          </p>
        </AnimatedSection>

        <AnimatedList className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <AnimatedItem key={t.name}>
              <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#a1a1aa]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#a1a1aa] text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#27272a] flex items-center justify-center text-[#71717a] text-sm font-bold shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[#fafafa] text-sm font-medium">{t.name}</p>
                    <p className="text-[#52525b] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
}
