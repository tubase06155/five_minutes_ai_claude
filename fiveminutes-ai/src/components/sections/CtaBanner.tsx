"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CtaBanner() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-600/12 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fafafa] tracking-tight mb-6">
            Sẵn sàng đưa AI
            <br />
            vào doanh nghiệp của bạn?
          </h2>
          <p className="text-[#71717a] text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Đặt lịch tư vấn miễn phí với chuyên gia MediaX. Chúng tôi sẽ phân tích
            use case cụ thể và đề xuất giải pháp phù hợp trong 30 phút.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" variant="primary">
              Đặt lịch tư vấn miễn phí →
            </Button>
            <Button size="lg" variant="ghost">
              Xem demo trực tiếp
            </Button>
          </div>
          <p className="mt-6 text-xs text-[#52525b]">
            Không cần thẻ tín dụng · Phản hồi trong 24h · hello@mediax.com.vn
          </p>
        </motion.div>
      </div>
    </section>
  );
}
