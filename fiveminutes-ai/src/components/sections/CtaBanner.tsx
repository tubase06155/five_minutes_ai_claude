"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CtaBanner() {
  return (
    <section className="bg-[#0052FF] py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Sẵn sàng đưa AI vào
              <br />
              <span className="font-semibold">doanh nghiệp của bạn?</span>
            </h2>
          </div>

          <div>
            <p className="text-blue-200 text-base leading-relaxed mb-8">
              Đặt lịch tư vấn miễn phí với chuyên gia MediaX.
              Chúng tôi sẽ phân tích use case và đề xuất giải pháp phù hợp trong 30 phút.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:anhtunb98@gmail.com"
                className="inline-flex items-center justify-center bg-white text-[#0052FF] text-sm font-semibold px-7 py-3.5 hover:bg-blue-50 transition-colors"
              >
                Đặt lịch tư vấn miễn phí →
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center border border-blue-400 text-white text-sm px-7 py-3.5 hover:border-white transition-colors"
              >
                Xem demo trực tiếp
              </a>
            </div>
            <p className="mt-5 text-xs text-blue-300">
              Không yêu cầu thẻ tín dụng · Phản hồi trong 24h · anhtunb98@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
