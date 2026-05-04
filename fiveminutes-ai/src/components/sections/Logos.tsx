"use client";

import { motion } from "framer-motion";

const logos = [
  "FPT Software", "VNG", "Techcombank", "MoMo", "VinGroup",
  "Tiki", "Shopee VN", "VNPT",
];

export default function Logos() {
  return (
    <section className="py-16 border-y border-[#27272a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs text-[#52525b] uppercase tracking-widest mb-10"
        >
          Được tin dùng bởi các doanh nghiệp hàng đầu
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6"
        >
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-[#27272a] font-semibold text-sm tracking-widest uppercase cursor-default select-none"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
