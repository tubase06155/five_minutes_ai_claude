"use client";

import { motion, type Variants } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    desc: "Khám phá và thử nghiệm giải pháp AI.",
    features: [
      "1 AI Agent",
      "1,000 tin nhắn / tháng",
      "Doc Copilot (5 tài liệu)",
      "Hỗ trợ qua email",
    ],
    cta: "Bắt đầu miễn phí",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$129",
    period: "/ tháng",
    desc: "Cho doanh nghiệp đang phát triển cần AI ổn định.",
    features: [
      "5 AI Agents",
      "50,000 tin nhắn / tháng",
      "Doc Copilot (không giới hạn)",
      "CS Copilot với Zalo/Facebook",
      "Analytics dashboard",
      "Hỗ trợ ưu tiên 24/7",
    ],
    cta: "Dùng thử 14 ngày",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    period: "",
    desc: "Giải pháp tùy chỉnh cho tổ chức lớn.",
    features: [
      "Không giới hạn AI Agents",
      "Không giới hạn tin nhắn",
      "Tích hợp hệ thống legacy",
      "SLA uptime 99.9%",
      "Account manager riêng",
      "Triển khai on-premise",
    ],
    cta: "Liên hệ tư vấn",
    highlight: false,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#f7f7f7] border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-[11px] text-[#bbbbbb] uppercase tracking-[0.2em] mb-5">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight">
            Đơn giản, <span className="font-semibold">minh bạch</span>
          </h2>
          <p className="text-[#999999] text-sm mt-3">
            Không phí ẩn. Nâng cấp hoặc hủy bất cứ lúc nào.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e8e8e8]"
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={itemVariants}>
              <div
                className={`flex flex-col h-full p-8 ${
                  plan.highlight ? "bg-[#111111]" : "bg-white"
                }`}
              >
                {plan.highlight && (
                  <span className="text-[10px] text-[#0052FF] uppercase tracking-[0.15em] mb-5">
                    Most popular
                  </span>
                )}

                <div className="mb-8">
                  <h3 className={`font-medium text-sm mb-4 ${plan.highlight ? "text-[#aaaaaa]" : "text-[#999999]"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className={`text-4xl font-semibold tracking-tight ${plan.highlight ? "text-white" : "text-[#111111]"}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-sm ${plan.highlight ? "text-[#666666]" : "text-[#999999]"}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed ${plan.highlight ? "text-[#666666]" : "text-[#888888]"}`}>
                    {plan.desc}
                  </p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-sm ${plan.highlight ? "text-[#888888]" : "text-[#666666]"}`}>
                      <span className={`w-1 h-1 rounded-full shrink-0 ${plan.highlight ? "bg-[#0052FF]" : "bg-[#cccccc]"}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:hello@mediax.com.vn"
                  className={`block text-center text-sm py-3 transition-colors ${
                    plan.highlight
                      ? "bg-[#0052FF] text-white hover:bg-[#0041CC]"
                      : "border border-[#e8e8e8] text-[#111111] hover:border-[#cccccc] hover:bg-[#f7f7f7]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
