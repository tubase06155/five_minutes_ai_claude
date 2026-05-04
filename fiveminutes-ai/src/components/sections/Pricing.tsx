"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const plans = [
  {
    name: "Starter",
    price: "Miễn phí",
    period: "",
    desc: "Phù hợp để khám phá và thử nghiệm giải pháp AI.",
    features: [
      "1 AI Agent",
      "1.000 tin nhắn/tháng",
      "Doc Copilot (5 tài liệu)",
      "Hỗ trợ qua email",
    ],
    cta: "Bắt đầu miễn phí",
    variant: "ghost" as const,
    highlight: false,
  },
  {
    name: "Pro",
    price: "2.990.000đ",
    period: "/tháng",
    desc: "Dành cho doanh nghiệp đang tăng trưởng, cần AI ổn định.",
    features: [
      "5 AI Agent",
      "50.000 tin nhắn/tháng",
      "Doc Copilot (không giới hạn)",
      "CS Copilot tích hợp Zalo/FB",
      "Analytics dashboard",
      "Hỗ trợ ưu tiên 24/7",
    ],
    cta: "Dùng thử 14 ngày",
    variant: "primary" as const,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    period: "",
    desc: "Giải pháp tùy chỉnh hoàn toàn cho doanh nghiệp lớn.",
    features: [
      "Không giới hạn AI Agent",
      "Không giới hạn tin nhắn",
      "Tích hợp hệ thống legacy",
      "SLA 99.9% uptime",
      "Dedicated account manager",
      "On-premise deployment",
    ],
    cta: "Liên hệ tư vấn",
    variant: "ghost" as const,
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight mb-4">
            Bảng giá đơn giản, rõ ràng
          </h2>
          <p className="text-[#71717a] text-base">
            Không phí ẩn. Nâng cấp hoặc hủy bất cứ lúc nào.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className={`relative rounded-xl p-6 flex flex-col ${
                plan.highlight
                  ? "bg-[#18181b] border border-violet-500/50 shadow-[0_0_40px_rgba(124,58,237,0.15)]"
                  : "bg-[#18181b] border border-[#27272a]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-violet-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Phổ biến nhất
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-[#fafafa] font-semibold text-base mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-[#fafafa]">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-[#71717a]">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-[#71717a]">{plan.desc}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#a1a1aa]">
                    <svg className="w-4 h-4 text-violet-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Button variant={plan.variant} className="w-full">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
