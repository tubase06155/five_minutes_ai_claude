"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-violet-800/8 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <Badge>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            Trí tuệ nhân tạo tiên phong cho Việt Nam
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#fafafa] tracking-tight leading-[1.1] mb-6"
        >
          AI sản xuất thực tế
          <br />
          <span className="bg-gradient-to-r from-[#fafafa] via-[#d4d4d8] to-[#71717a] bg-clip-text text-transparent">
            triển khai trong 5 phút
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-base sm:text-lg text-[#71717a] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Từ AI Agent đến Doc Copilot — MediaX xây dựng giải pháp AI hiểu tiếng Việt,
          hiểu doanh nghiệp Việt. Không cần demo lâu, không cần tích hợp phức tạp.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <Button size="lg" variant="primary">
            Bắt đầu miễn phí →
          </Button>
          <Button size="lg" variant="ghost">
            Xem demo
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#09090b] bg-gradient-to-br from-violet-500 to-violet-800 flex items-center justify-center text-white text-xs font-bold"
              >
                {["A", "B", "C", "D", "E"][i - 1]}
              </div>
            ))}
          </div>
          <p className="text-sm text-[#52525b]">
            <span className="text-[#a1a1aa] font-medium">50+</span> doanh nghiệp Việt Nam đang tin dùng
          </p>
        </motion.div>

        {/* Terminal/Code preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b] z-10 pointer-events-none rounded-xl" />
          <div className="bg-[#18181b] border border-[#27272a] rounded-xl overflow-hidden shadow-[0_0_80px_rgba(124,58,237,0.12)] max-w-2xl mx-auto">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#27272a]">
              <div className="w-3 h-3 rounded-full bg-[#3f3f46]" />
              <div className="w-3 h-3 rounded-full bg-[#3f3f46]" />
              <div className="w-3 h-3 rounded-full bg-[#3f3f46]" />
              <span className="ml-2 text-xs text-[#52525b] font-mono">fiveminutes-ai.ts</span>
            </div>
            {/* Code */}
            <div className="p-6 font-mono text-sm text-left space-y-1">
              <p className="text-[#52525b]">{`// Khởi tạo AI Agent trong 3 bước`}</p>
              <p>
                <span className="text-[#a1a1aa]">import </span>
                <span className="text-[#fafafa]">{"{ FiveminutesAI }"}</span>
                <span className="text-[#a1a1aa]"> from </span>
                <span className="text-[#a3e635]">&quot;@mediax/sdk&quot;</span>
              </p>
              <p>&nbsp;</p>
              <p>
                <span className="text-[#a1a1aa]">const agent = </span>
                <span className="text-[#fafafa]">new FiveminutesAI</span>
                <span className="text-[#a1a1aa]">{"({ language: "}</span>
                <span className="text-[#a3e635]">&quot;vi&quot;</span>
                <span className="text-[#a1a1aa]">{" })"}</span>
              </p>
              <p>&nbsp;</p>
              <p>
                <span className="text-[#a1a1aa]">await agent.</span>
                <span className="text-[#fafafa]">deploy</span>
                <span className="text-[#a1a1aa]">{"()"}</span>
                <span className="text-[#52525b]"> {`// ✓ Production ready`}</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
