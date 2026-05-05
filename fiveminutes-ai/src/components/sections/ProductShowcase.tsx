"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function DocCopilotVisual() {
  return (
    <div className="bg-[#111111] border border-[#2a2a2a] rounded-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2a2a2a]">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#333333]" />
          <div className="w-2 h-2 rounded-full bg-[#333333]" />
          <div className="w-2 h-2 rounded-full bg-[#333333]" />
        </div>
        <span className="text-xs text-[#555555] font-mono ml-2">doc-copilot · hr-policy-2024.pdf</span>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex gap-3">
          <div className="w-6 h-6 rounded-full bg-[#222222] flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[10px] text-[#666666]">U</span>
          </div>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded px-3 py-2 text-xs text-[#aaaaaa] leading-relaxed">
            Quy trình xin nghỉ phép của công ty là gì?
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-6 h-6 rounded-full bg-[#0052FF] flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[10px] text-white font-bold">AI</span>
          </div>
          <div className="flex-1">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded px-3 py-3 text-xs text-[#aaaaaa] leading-relaxed space-y-2">
              <p>Theo <span className="text-white">HR Policy v2.3</span> (trang 12):</p>
              <ol className="space-y-1 pl-3 text-[#888888]">
                <li>1. Nộp đơn xin nghỉ qua HRM trước 3 ngày</li>
                <li>2. Trưởng phòng duyệt trong 24h</li>
                <li>3. HR xác nhận qua email</li>
              </ol>
              <div className="flex items-center gap-2 pt-1 border-t border-[#2a2a2a]">
                <span className="text-[10px] text-[#444444]">Nguồn:</span>
                <span className="text-[10px] text-[#0052FF]">hr-policy-2024.pdf · trang 12</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 border border-[#2a2a2a] rounded px-3 py-2">
          <span className="text-xs text-[#444444] flex-1">Hỏi về tài liệu của bạn...</span>
          <div className="w-5 h-5 bg-[#0052FF] rounded-sm flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CSCopilotVisual() {
  return (
    <div className="bg-[#111111] border border-[#2a2a2a] rounded-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#2a2a2a]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
          <span className="text-xs text-[#aaaaaa] font-medium">CS Copilot</span>
        </div>
        <span className="text-[10px] text-[#555555]">1,243 cuộc hội thoại hôm nay</span>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex justify-end">
          <div className="bg-white text-[#111111] rounded-xl rounded-tr-none px-3 py-2 text-xs max-w-[75%] font-medium">
            Tôi muốn trả hàng đơn #12345
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-[#0052FF] flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[10px] text-white font-bold">AI</span>
          </div>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#aaaaaa] rounded-xl rounded-tl-none px-3 py-2.5 text-xs leading-relaxed max-w-[80%]">
            Đơn hàng <span className="text-white">#12345</span> đủ điều kiện trả hàng. Xử lý ngay không?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-white text-[#111111] rounded-xl rounded-tr-none px-3 py-2 text-xs font-medium">
            Vâng, xin hãy xử lý
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-[#0052FF] flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[10px] text-white font-bold">AI</span>
          </div>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#aaaaaa] rounded-xl rounded-tl-none px-3 py-2 text-xs">
            ✓ Đã tạo yêu cầu hoàn trả. Hoàn tiền trong 3–5 ngày làm việc.
          </div>
        </div>
        <div className="flex items-center gap-1.5 pt-2 border-t border-[#2a2a2a]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
          <span className="text-[10px] text-[#555555]">Thời gian phản hồi TB: 1.2s</span>
        </div>
      </div>
    </div>
  );
}

const products = [
  {
    tag: "Product 01",
    title: "Doc Copilot",
    subtitle: "Enterprise knowledge at your fingertips",
    desc: "Tải lên tài liệu — chính sách, quy trình, báo cáo, hợp đồng. Doc Copilot biến chúng thành trợ lý Q&A tức thì. Nhân viên tìm câu trả lời trong giây, không phải giờ.",
    highlights: [
      "Hỗ trợ PDF, Word, Excel, PowerPoint",
      "Q&A chính xác từ nguồn tài liệu",
      "Tự động cập nhật khi tài liệu thay đổi",
      "Phân quyền truy cập theo vai trò",
    ],
    Visual: DocCopilotVisual,
    reverse: false,
  },
  {
    tag: "Product 02",
    title: "CS Copilot",
    subtitle: "Smart customer support that never sleeps",
    desc: "AI Agent xử lý hàng nghìn yêu cầu khách hàng đồng thời. Hiểu ngôn ngữ tự nhiên, nhớ lịch sử hội thoại, escalate sang agent người khi cần thiết.",
    highlights: [
      "Phản hồi trong dưới 2 giây",
      "Tích hợp Zalo, Facebook, Web chat",
      "Escalation thông minh sang agent người",
      "Analytics dashboard thời gian thực",
    ],
    Visual: CSCopilotVisual,
    reverse: true,
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="bg-black py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 space-y-28 sm:space-y-36">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-b border-[#222222] pb-14"
        >
          <p className="text-[11px] text-[#555555] uppercase tracking-[0.2em] mb-5">
            Products
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight max-w-lg">
            Sản phẩm AI sẵn sàng cho{" "}
            <span className="font-semibold">production thực tế</span>
          </h2>
        </motion.div>

        {products.map((product) => (
          <div
            key={product.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${product.reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[11px] text-[#555555] uppercase tracking-[0.2em] mb-5">{product.tag}</p>
              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-2">
                {product.title}
              </h3>
              <p className="text-[#555555] text-sm mb-5">{product.subtitle}</p>
              <p className="text-[#888888] text-sm leading-relaxed mb-8">{product.desc}</p>
              <ul className="space-y-3">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm text-[#666666]">
                    <span className="w-1 h-1 rounded-full bg-[#0052FF] shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: product.reverse ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <product.Visual />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
