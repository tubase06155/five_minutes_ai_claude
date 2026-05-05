"use client";

import { motion, type Variants } from "framer-motion";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.12 },
  }),
};

function AIVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 480 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-sm lg:max-w-none"
      >
        {/* Head silhouette */}
        <ellipse cx="240" cy="200" rx="120" ry="145" fill="#f0f0f0" />
        <ellipse cx="240" cy="380" rx="180" ry="80" fill="#f0f0f0" />

        {/* Face gradient */}
        <defs>
          <radialGradient id="faceGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#e8e8e8" />
            <stop offset="100%" stopColor="#d0d0d0" />
          </radialGradient>
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0052FF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0052FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glow behind head */}
        <ellipse cx="240" cy="240" rx="200" ry="220" fill="url(#glowGrad)" />

        {/* Head shape refined */}
        <path
          d="M145 230 C140 160 175 95 240 88 C305 95 340 160 335 230 C335 300 310 360 280 390 L240 410 L200 390 C170 360 145 300 145 230Z"
          fill="url(#faceGrad)"
        />

        {/* Neck */}
        <rect x="215" y="390" width="50" height="60" rx="8" fill="#d8d8d8" />

        {/* Shoulders */}
        <path d="M60 510 C60 450 140 430 200 415 L240 410 L280 415 C340 430 420 450 420 510" stroke="#d0d0d0" strokeWidth="1" fill="#e8e8e8" />

        {/* Subtle face features */}
        <ellipse cx="210" cy="220" rx="10" ry="6" fill="#c0c0c0" opacity="0.5" />
        <ellipse cx="270" cy="220" rx="10" ry="6" fill="#c0c0c0" opacity="0.5" />
        <path d="M220 270 Q240 285 260 270" stroke="#c0c0c0" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />

        {/* Scanning lines / AI indicator */}
        <line x1="100" y1="180" x2="155" y2="215" stroke="#0052FF" strokeWidth="0.5" opacity="0.3" />
        <line x1="100" y1="230" x2="143" y2="230" stroke="#0052FF" strokeWidth="0.5" opacity="0.3" />
        <line x1="100" y1="280" x2="148" y2="255" stroke="#0052FF" strokeWidth="0.5" opacity="0.3" />

        <line x1="380" y1="180" x2="325" y2="215" stroke="#0052FF" strokeWidth="0.5" opacity="0.3" />
        <line x1="380" y1="230" x2="337" y2="230" stroke="#0052FF" strokeWidth="0.5" opacity="0.3" />
        <line x1="380" y1="280" x2="332" y2="255" stroke="#0052FF" strokeWidth="0.5" opacity="0.3" />

        {/* Dots at scan line ends */}
        <circle cx="100" cy="180" r="2.5" fill="#0052FF" opacity="0.4" />
        <circle cx="100" cy="230" r="2.5" fill="#0052FF" opacity="0.4" />
        <circle cx="100" cy="280" r="2.5" fill="#0052FF" opacity="0.4" />
        <circle cx="380" cy="180" r="2.5" fill="#0052FF" opacity="0.4" />
        <circle cx="380" cy="230" r="2.5" fill="#0052FF" opacity="0.4" />
        <circle cx="380" cy="280" r="2.5" fill="#0052FF" opacity="0.4" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-14">
      <div className="max-w-6xl mx-auto px-6 w-full py-24 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 items-center w-full">

          {/* Left: Text */}
          <div className="lg:pr-16">
            <motion.p
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-xs text-[#999999] uppercase tracking-[0.2em] mb-8"
            >
              Fiveminutes AI — by MediaX
            </motion.p>

            <motion.h1
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#111111] tracking-tight leading-[1.1] mb-8"
            >
              Trí tuệ nhân tạo
              <br />
              <span className="font-semibold">tiên phong</span>
              <br />
              cho Việt Nam
            </motion.h1>

            <motion.p
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-base text-[#777777] leading-relaxed max-w-sm mb-10"
            >
              AI Agent, Doc Copilot, CS Copilot — triển khai trong 5 ngày.
              Không cần đội ngũ AI nội bộ.
            </motion.p>

            <motion.div
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#pricing"
                className="inline-flex items-center justify-center bg-[#111111] text-white text-sm px-7 py-3.5 hover:bg-[#333333] transition-colors"
              >
                Bắt đầu miễn phí →
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center border border-[#e8e8e8] text-[#555555] text-sm px-7 py-3.5 hover:border-[#cccccc] hover:text-[#111111] transition-colors"
              >
                Xem demo
              </a>
            </motion.div>

            <motion.p
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 text-xs text-[#bbbbbb]"
            >
              50+ doanh nghiệp Việt Nam đang sử dụng
            </motion.p>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative h-[420px] lg:h-[580px]"
          >
            <AIVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
