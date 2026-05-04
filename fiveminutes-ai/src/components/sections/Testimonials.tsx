"use client";

import { AnimatedList, AnimatedItem } from "@/components/ui/AnimatedSection";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote:
      "Doc Copilot giúp đội ngũ 200 người của chúng tôi tìm thông tin trong giây thay vì mất 30 phút tìm trong tài liệu. ROI rõ ràng ngay tháng đầu.",
    name: "Nguyễn Minh Tuấn",
    role: "CTO, Công ty Fintech",
    avatar: "N",
  },
  {
    quote:
      "CS Copilot xử lý 80% yêu cầu khách hàng tự động. Team CSKH của chúng tôi giờ tập trung vào những vấn đề thực sự cần con người.",
    name: "Trần Thị Hoa",
    role: "Head of Customer Success, E-commerce",
    avatar: "T",
  },
  {
    quote:
      "Triển khai trong 1 tuần, không cần team AI nội bộ. MediaX hỗ trợ từ A đến Z — từ thiết kế đến integration vào hệ thống legacy của chúng tôi.",
    name: "Lê Văn Nam",
    role: "CEO, Chuỗi bán lẻ",
    avatar: "L",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-[#0d0d10]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight mb-4">
            Doanh nghiệp nói gì về chúng tôi
          </h2>
          <p className="text-[#71717a] text-base">
            Kết quả thực tế từ các khách hàng đang dùng Fiveminutes AI.
          </p>
        </AnimatedSection>

        <AnimatedList className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <AnimatedItem key={t.name}>
              <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[#a1a1aa] text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-violet-800 flex items-center justify-center text-white text-sm font-bold shrink-0">
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
