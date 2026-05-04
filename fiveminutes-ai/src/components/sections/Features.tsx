"use client";

import { AnimatedList, AnimatedItem } from "@/components/ui/AnimatedSection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Bot, Plug, FileText, MessageSquare, Globe, Zap,
} from "lucide-react";

const features = [
  {
    Icon: Bot,
    title: "Custom AI Agent",
    desc: "Thiết kế AI Agent theo đặc thù doanh nghiệp — hỗ trợ khách hàng 24/7, tự động hóa vận hành nội bộ, quản lý tri thức tổ chức.",
  },
  {
    Icon: Plug,
    title: "AI Integration",
    desc: "Tích hợp AI vào hệ thống hiện có mà không cần xây lại từ đầu. Tự động hóa quy trình, tiết kiệm thời gian và chi phí vận hành.",
  },
  {
    Icon: FileText,
    title: "Doc Copilot",
    desc: "Biến tài liệu nội bộ thành trợ lý tri thức tương tác. Nhân viên hỏi — AI trả lời chính xác từ nguồn tài liệu của bạn.",
  },
  {
    Icon: MessageSquare,
    title: "CS Copilot",
    desc: "AI hỗ trợ chăm sóc khách hàng tự động, giảm tải cho đội ngũ, tăng tốc độ phản hồi và chất lượng trải nghiệm.",
  },
  {
    Icon: Globe,
    title: "Hiểu tiếng Việt",
    desc: "Được tối ưu riêng cho tiếng Việt và thị trường Việt Nam — hiểu ngữ cảnh, văn hóa và đặc thù kinh doanh địa phương.",
  },
  {
    Icon: Zap,
    title: "Triển khai nhanh",
    desc: "Từ yêu cầu đến production trong 5 ngày. Không cần team AI nội bộ. Không cần đầu tư hạ tầng lớn.",
  },
];

export default function Features() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs text-[#52525b] uppercase tracking-widest mb-4 font-medium">
            Dịch vụ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight mb-4">
            Mọi thứ bạn cần để
            <br />
            <span className="bg-gradient-to-r from-[#fafafa] to-[#71717a] bg-clip-text text-transparent">
              đưa AI vào thực tế
            </span>
          </h2>
          <p className="text-[#71717a] max-w-xl mx-auto text-base leading-relaxed">
            Chúng tôi không bán demo. Chúng tôi xây dựng AI agent chạy thật trong môi trường thật của doanh nghiệp bạn.
          </p>
        </AnimatedSection>

        <AnimatedList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#27272a] rounded-xl overflow-hidden border border-[#27272a]">
          {features.map((f) => (
            <AnimatedItem key={f.title}>
              <div className="group bg-[#09090b] hover:bg-[#18181b] transition-colors duration-300 p-8 h-full">
                <div className="w-9 h-9 rounded-lg bg-[#18181b] border border-[#27272a] flex items-center justify-center mb-5 group-hover:border-[#3f3f46] transition-colors">
                  <f.Icon className="w-4 h-4 text-[#a1a1aa]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#fafafa] font-semibold text-sm mb-2">
                  {f.title}
                </h3>
                <p className="text-[#71717a] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
}
