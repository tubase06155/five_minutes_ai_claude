"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CtaBanner() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden border-t border-[#27272a]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-700/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fafafa] tracking-tight mb-6">
            Ready to bring AI
            <br />
            into your business?
          </h2>
          <p className="text-[#52525b] text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Book a free consultation with a MediaX expert. We&apos;ll analyze your specific
            use case and propose a tailored solution in 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" variant="primary">
              Book a free consultation →
            </Button>
            <Button size="lg" variant="ghost">
              Watch a live demo
            </Button>
          </div>
          <p className="mt-6 text-xs text-[#3f3f46]">
            No credit card required · Response within 24h · hello@mediax.com.vn
          </p>
        </motion.div>
      </div>
    </section>
  );
}
