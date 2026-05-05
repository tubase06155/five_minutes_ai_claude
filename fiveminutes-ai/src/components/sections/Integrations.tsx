"use client";

import { motion, type Variants } from "framer-motion";

const integrations = [
  { name: "Zalo", cat: "Messaging" },
  { name: "Facebook", cat: "Messaging" },
  { name: "Slack", cat: "Workspace" },
  { name: "Google Drive", cat: "Storage" },
  { name: "Notion", cat: "Docs" },
  { name: "HubSpot", cat: "CRM" },
  { name: "Shopify", cat: "E-commerce" },
  { name: "WordPress", cat: "CMS" },
  { name: "OpenAI", cat: "AI" },
  { name: "WhatsApp", cat: "Messaging" },
  { name: "Telegram", cat: "Messaging" },
  { name: "Webhook", cat: "API" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

export default function Integrations() {
  return (
    <section className="py-24 sm:py-32 bg-[#f7f7f7] border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-[11px] text-[#bbbbbb] uppercase tracking-[0.2em] mb-5">
            Integrations
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight leading-tight max-w-lg">
            Kết nối với mọi nền tảng{" "}
            <span className="font-semibold">bạn đang dùng</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-[#e8e8e8]"
        >
          {integrations.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <div className="bg-[#f7f7f7] hover:bg-white transition-colors duration-200 p-5 flex flex-col gap-1">
                <span className="text-[10px] text-[#bbbbbb] uppercase tracking-[0.15em]">{item.cat}</span>
                <span className="text-sm text-[#444444] font-medium">{item.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-sm text-[#bbbbbb]"
        >
          + REST API & Webhook hỗ trợ mọi hệ thống khác
        </motion.p>
      </div>
    </section>
  );
}
