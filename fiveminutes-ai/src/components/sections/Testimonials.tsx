"use client";

import { motion, type Variants } from "framer-motion";

const testimonials = [
  {
    quote:
      "Doc Copilot giúp đội ngũ 200 người tìm thông tin trong vài giây thay vì mất 30 phút tìm trong tài liệu. ROI rõ ràng ngay trong tháng đầu.",
    name: "Nguyễn Minh Tuấn",
    role: "CTO, Fintech Company",
    avatar: "N",
  },
  {
    quote:
      "CS Copilot xử lý 80% yêu cầu khách hàng tự động. Đội support giờ tập trung vào những vấn đề thực sự cần sự chú ý của con người.",
    name: "Trần Thị Hoa",
    role: "Head of Customer Success, E-commerce",
    avatar: "T",
  },
  {
    quote:
      "Triển khai trong một tuần, không cần đội AI nội bộ. MediaX hỗ trợ từ A đến Z — từ thiết kế đến tích hợp với hệ thống legacy của chúng tôi.",
    name: "Lê Văn Nam",
    role: "CEO, Retail Chain",
    avatar: "L",
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

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-[11px] text-[#bbbbbb] uppercase tracking-[0.2em] mb-5">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight">
            Doanh nghiệp nói gì về{" "}
            <span className="font-semibold">Fiveminutes AI</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e8e8e8]"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={itemVariants}>
              <div className="bg-white p-8 h-full flex flex-col">
                <p className="text-[#444444] text-sm leading-relaxed flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#111111] flex items-center justify-center text-white text-xs font-semibold shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[#111111] text-sm font-medium">{t.name}</p>
                    <p className="text-[#bbbbbb] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
