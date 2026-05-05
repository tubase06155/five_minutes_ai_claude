"use client";

import { motion, type Variants } from "framer-motion";
import { Bot, Plug, FileText, MessageSquare, Globe, Zap } from "lucide-react";

const features = [
  {
    Icon: Bot,
    title: "Custom AI Agent",
    desc: "AI Agent thiết kế theo đặc thù doanh nghiệp — hỗ trợ khách hàng 24/7, tự động hóa quy trình nội bộ.",
  },
  {
    Icon: Plug,
    title: "AI Integration",
    desc: "Tích hợp AI vào hệ thống hiện có. Tự động hóa quy trình, tiết kiệm thời gian và chi phí vận hành.",
  },
  {
    Icon: FileText,
    title: "Doc Copilot",
    desc: "Biến tài liệu nội bộ thành trợ lý tri thức tương tác. Nhân viên hỏi — AI trả lời chính xác.",
  },
  {
    Icon: MessageSquare,
    title: "CS Copilot",
    desc: "AI hỗ trợ chăm sóc khách hàng tự động, giảm tải đội ngũ, tăng tốc độ phản hồi.",
  },
  {
    Icon: Globe,
    title: "Vietnamese-first",
    desc: "Tối ưu cho tiếng Việt và thị trường Việt Nam — hiểu ngữ cảnh, văn hóa và đặc thù kinh doanh địa phương.",
  },
  {
    Icon: Zap,
    title: "Fast deployment",
    desc: "Từ yêu cầu đến production trong 5 ngày. Không cần đội AI nội bộ, không đầu tư hạ tầng lớn.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-[11px] text-[#bbbbbb] uppercase tracking-[0.2em] mb-5">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight leading-tight max-w-lg">
            Tất cả những gì bạn cần để{" "}
            <span className="font-semibold">đưa AI vào production</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e8e8]"
        >
          {features.map((f) => (
            <motion.div key={f.title} variants={itemVariants}>
              <div className="group bg-[#f7f7f7] hover:bg-white transition-colors duration-300 p-8 h-full">
                <f.Icon className="w-5 h-5 text-[#999999] mb-6 group-hover:text-[#0052FF] transition-colors" strokeWidth={1.5} />
                <h3 className="text-[#111111] font-medium text-sm mb-2">{f.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
