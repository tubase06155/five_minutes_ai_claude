"use client";

import { motion, type Variants } from "framer-motion";

const stats = [
  { value: "50+", label: "Doanh nghiệp tin dùng" },
  { value: "5 ngày", label: "Thời gian triển khai TB" },
  { value: "98%", label: "Độ chính xác câu trả lời" },
  { value: "24/7", label: "Hoạt động liên tục" },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function Stats() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] text-[#bbbbbb] uppercase tracking-[0.2em] mb-5">
              Why choose us
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight leading-tight">
              Không phải AI chung chung.{" "}
              <span className="font-semibold">AI cho Việt Nam.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="text-3xl sm:text-4xl font-semibold text-[#111111] mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-[#999999]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
