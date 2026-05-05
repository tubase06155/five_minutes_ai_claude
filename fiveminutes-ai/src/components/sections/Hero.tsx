"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-700/6 rounded-full blur-[140px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#a1a1aa 1px, transparent 1px), linear-gradient(90deg, #a1a1aa 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <Badge>
            <span className="w-1.5 h-1.5 rounded-full bg-[#52525b]" />
            Pioneering AI for Vietnam
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#fafafa] tracking-tight leading-[1.05] mb-6"
        >
          Production AI,
          <br />
          <span className="bg-gradient-to-r from-[#fafafa] via-[#d4d4d8] to-[#71717a] bg-clip-text text-transparent">
            live in 5 minutes
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-base sm:text-lg text-[#52525b] max-w-xl mx-auto leading-relaxed mb-10"
        >
          From AI Agents to Doc Copilot — we build AI solutions that understand
          Vietnamese language and business. No lengthy demos, no complex integration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <Button size="lg" variant="primary">
            Get started free →
          </Button>
          <Button size="lg" variant="ghost">
            View demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-2">
            {["#3f3f46","#52525b","#3f3f46","#27272a","#52525b"].map((bg, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#09090b] flex items-center justify-center text-[#71717a] text-xs font-semibold"
                style={{ backgroundColor: bg }}
              >
                {["A","B","C","D","E"][i]}
              </div>
            ))}
          </div>
          <p className="text-sm text-[#3f3f46]">
            <span className="text-[#a1a1aa] font-medium">50+</span> Vietnamese businesses trust us
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#09090b] z-10 pointer-events-none rounded-b-xl" />
          <div className="bg-[#18181b] border border-[#27272a] rounded-xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.4)] max-w-2xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#27272a]">
              <div className="w-3 h-3 rounded-full bg-[#3f3f46]" />
              <div className="w-3 h-3 rounded-full bg-[#3f3f46]" />
              <div className="w-3 h-3 rounded-full bg-[#3f3f46]" />
              <span className="ml-2 text-xs text-[#52525b] font-mono">agent.ts</span>
            </div>
            <div className="p-6 font-mono text-sm text-left space-y-1">
              <p className="text-[#52525b]">{`// Deploy your AI agent in 3 steps`}</p>
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
