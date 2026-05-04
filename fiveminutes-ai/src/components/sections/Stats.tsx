"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { value: "50+", label: "Doanh nghiệp tin dùng" },
  { value: "5 ngày", label: "Thời gian triển khai trung bình" },
  { value: "98%", label: "Độ chính xác trả lời" },
  { value: "24/7", label: "Hoạt động liên tục" },
];

export default function Stats() {
  return (
    <section id="about" className="py-24 sm:py-32 border-y border-[#27272a] bg-[#0d0d10]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight mb-4">
            Tại sao chọn Fiveminutes AI?
          </h2>
          <p className="text-[#71717a] max-w-xl mx-auto text-base leading-relaxed">
            Không phải AI chung chung — chúng tôi xây dựng giải pháp hiểu văn hóa và
            ngôn ngữ Việt Nam, sẵn sàng cho môi trường doanh nghiệp thực tế.
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
              <div className="text-3xl sm:text-4xl font-bold text-[#fafafa] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#71717a]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
