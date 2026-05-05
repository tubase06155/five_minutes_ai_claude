"use client";

import { motion } from "framer-motion";

const logos = [
  "FPT Software", "VNG", "Techcombank", "MoMo", "VinGroup",
  "Tiki", "Shopee VN", "VNPT",
];

export default function Logos() {
  return (
    <section className="py-14 border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] text-[#bbbbbb] uppercase tracking-[0.2em] mb-8"
        >
          Trusted by leading businesses
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-5"
        >
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-[#cccccc] font-medium text-sm tracking-wider cursor-default select-none hover:text-[#999999] transition-colors"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
