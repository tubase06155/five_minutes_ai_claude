"use client";

import { AnimatedList, AnimatedItem } from "@/components/ui/AnimatedSection";
import AnimatedSection from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: "🤖",
    title: "Custom AI Agent",
    desc: "Thiết kế AI Agent theo đặc thù doanh nghiệp — hỗ trợ khách hàng 24/7, tự động hóa vận hành nội bộ, quản lý tri thức tổ chức.",
  },
  {
    icon: "🔗",
    title: "AI Integration",
    desc: "Tích hợp AI vào hệ thống hiện có mà không cần xây lại từ đầu. Tự động hóa quy trình, tiết kiệm thời gian và chi phí vận hành.",
  },
  {
    icon: "📄",
    title: "Doc Copilot",
    desc: "Biến tài liệu nội bộ thành trợ lý tri thức tương tác. Nhân viên hỏi — AI trả lời chính xác từ nguồn tài liệu của bạn.",
  },
  {
    icon: "💬",
    title: "CS Copilot",
    desc: "AI hỗ trợ chăm sóc khách hàng tự động, giảm tải cho đội ngũ, tăng tốc độ phản hồi và chất lượng trải nghiệm.",
  },
  {
    icon: "🇻🇳",
    title: "Hiểu tiếng Việt",
    desc: "Được tối ưu riêng cho tiếng Việt và thị trường Việt Nam — hiểu ngữ cảnh, văn hóa và đặc thù kinh doanh địa phương.",
  },
  {
    icon: "⚡",
    title: "Triển khai nhanh",
    desc: "Từ yêu cầu đến production trong 5 ngày. Không cần team AI nội bộ. Không cần đầu tư hạ tầng lớn.",
  },
];

export default function Features() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs text-violet-500 uppercase tracking-widest mb-4 font-medium">
            Dịch vụ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight mb-4">
            Mọi thứ bạn cần để
            <br />
            <span className="bg-gradient-to-r from-white to-[#71717a] bg-clip-text text-transparent">
              đưa AI vào thực tế
            </span>
          </h2>
          <p className="text-[#71717a] max-w-xl mx-auto text-base leading-relaxed">
            Chúng tôi không bán demo. Chúng tôi xây dựng AI agent chạy thật trong môi trường thật của doanh nghiệp bạn.
          </p>
        </AnimatedSection>

        <AnimatedList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <AnimatedItem key={f.title}>
              <div className="group bg-[#18181b] border border-[#27272a] rounded-xl p-6 hover:border-[#3f3f46] transition-colors duration-300 h-full">
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="text-[#fafafa] font-semibold text-base mb-2">
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
