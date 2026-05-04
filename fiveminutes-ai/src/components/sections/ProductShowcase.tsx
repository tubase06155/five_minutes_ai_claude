"use client";

import { motion } from "framer-motion";

function DocCopilotVisual() {
  return (
    <div className="bg-[#0d0d10] border border-[#27272a] rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#27272a] bg-[#18181b]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]" />
        </div>
        <span className="text-xs text-[#52525b] font-mono ml-2">doc-copilot · hr-policy-2024.pdf</span>
      </div>
      {/* Chat */}
      <div className="p-5 space-y-4">
        <div className="flex gap-3">
          <div className="w-6 h-6 rounded-full bg-[#27272a] flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[10px] text-[#71717a]">U</span>
          </div>
          <div className="bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-xs text-[#a1a1aa] leading-relaxed">
            Quy trình xin nghỉ phép của công ty như thế nào?
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-6 h-6 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[10px] text-violet-400">AI</span>
          </div>
          <div className="flex-1">
            <div className="bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-3 text-xs text-[#a1a1aa] leading-relaxed space-y-2">
              <p>Theo <span className="text-[#fafafa]">Chính sách Nhân sự v2.3</span> (trang 12):</p>
              <ol className="space-y-1 pl-3">
                <li>1. Nhân viên gửi đơn qua HRM ≥ 3 ngày trước</li>
                <li>2. Trưởng bộ phận duyệt trong 24h</li>
                <li>3. HR xác nhận qua email</li>
              </ol>
              <div className="flex items-center gap-2 pt-1 border-t border-[#27272a] mt-2">
                <span className="text-[10px] text-[#52525b]">📎 Nguồn:</span>
                <span className="text-[10px] text-violet-400">hr-policy-2024.pdf · trang 12</span>
              </div>
            </div>
          </div>
        </div>
        {/* Input */}
        <div className="flex items-center gap-2 border border-[#27272a] rounded-lg px-3 py-2 mt-2">
          <span className="text-xs text-[#3f3f46] flex-1">Hỏi về tài liệu...</span>
          <div className="w-5 h-5 rounded bg-violet-600/80 flex items-center justify-center">
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
    <div className="bg-[#0d0d10] border border-[#27272a] rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#27272a] bg-[#18181b]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-[#a1a1aa] font-medium">CS Copilot</span>
        </div>
        <span className="text-[10px] text-[#52525b]">1.243 cuộc hội thoại hôm nay</span>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex justify-end">
          <div className="bg-[#fafafa] text-[#09090b] rounded-2xl rounded-tr-sm px-3 py-2 text-xs max-w-[75%] font-medium">
            Tôi muốn hoàn trả đơn hàng #12345
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[10px] text-violet-400">AI</span>
          </div>
          <div className="bg-[#18181b] border border-[#27272a] text-[#a1a1aa] rounded-2xl rounded-tl-sm px-3 py-2.5 text-xs leading-relaxed max-w-[80%]">
            Chào bạn! Đơn hàng <span className="text-[#fafafa]">#12345</span> đủ điều kiện hoàn trả. Bạn muốn xử lý ngay không?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[#fafafa] text-[#09090b] rounded-2xl rounded-tr-sm px-3 py-2 text-xs font-medium">
            Vâng
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[10px] text-violet-400">AI</span>
          </div>
          <div className="bg-[#18181b] border border-[#27272a] text-[#a1a1aa] rounded-2xl rounded-tl-sm px-3 py-2 text-xs">
            ✓ Đã tạo yêu cầu. Hoàn tiền trong 3–5 ngày làm việc.
          </div>
        </div>
        <div className="flex items-center gap-1.5 pt-2 border-t border-[#27272a]">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-[10px] text-[#52525b]">Thời gian phản hồi trung bình: 1.2s</span>
        </div>
      </div>
    </div>
  );
}

const products = [
  {
    tag: "Sản phẩm",
    title: "Doc Copilot",
    subtitle: "Tri thức doanh nghiệp trong tầm tay",
    desc: "Upload tài liệu — chính sách, quy trình, báo cáo, hợp đồng. Doc Copilot biến chúng thành trợ lý Q&A tức thì. Nhân viên tìm câu trả lời trong giây, không phải giờ.",
    highlights: [
      "Hỗ trợ PDF, Word, Excel, PowerPoint",
      "Q&A chính xác từ nguồn tài liệu",
      "Cập nhật tự động khi tài liệu thay đổi",
      "Phân quyền truy cập theo vai trò",
    ],
    Visual: DocCopilotVisual,
    reverse: false,
  },
  {
    tag: "Sản phẩm",
    title: "CS Copilot",
    subtitle: "CSKH thông minh, không ngủ",
    desc: "AI agent xử lý hàng nghìn yêu cầu khách hàng đồng thời. Hiểu tiếng Việt tự nhiên, nhớ lịch sử cuộc hội thoại, chuyển tiếp sang agent người khi cần.",
    highlights: [
      "Phản hồi trong dưới 2 giây",
      "Tích hợp Zalo, Facebook, Web chat",
      "Chuyển tiếp thông minh sang agent người",
      "Dashboard analytics real-time",
    ],
    Visual: CSCopilotVisual,
    reverse: true,
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 sm:py-32 border-t border-[#27272a]">
      <div className="max-w-6xl mx-auto px-6 space-y-24 sm:space-y-32">
        {products.map((product) => (
          <div
            key={product.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${product.reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
          >
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: product.reverse ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-xs text-[#52525b] uppercase tracking-widest mb-3 font-medium">
                {product.tag}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#fafafa] tracking-tight mb-2">
                {product.title}
              </h2>
              <p className="text-[#71717a] text-sm mb-4">{product.subtitle}</p>
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-8">
                {product.desc}
              </p>
              <ul className="space-y-2.5">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm text-[#71717a]">
                    <svg className="w-3.5 h-3.5 text-[#52525b] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: product.reverse ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
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
