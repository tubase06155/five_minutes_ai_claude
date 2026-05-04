"use client";

import { motion } from "framer-motion";

const products = [
  {
    tag: "Sản phẩm",
    title: "Doc Copilot",
    subtitle: "Tri thức doanh nghiệp trong tầm tay",
    desc: "Upload tài liệu — chính sách, quy trình, báo cáo, hợp đồng. Doc Copilot biến chúng thành trợ lý Q&A tức thì. Nhân viên tìm câu trả lời trong giây, không phải giờ.",
    highlights: ["Hỗ trợ PDF, Word, Excel, PowerPoint", "Q&A chính xác từ nguồn tài liệu", "Cập nhật tự động khi tài liệu thay đổi", "Phân quyền truy cập theo vai trò"],
    visual: (
      <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-5 font-mono text-sm space-y-3">
        <div className="flex items-start gap-3">
          <span className="text-violet-400 text-xs mt-0.5">User</span>
          <p className="text-[#a1a1aa] text-xs leading-relaxed">Quy trình xin nghỉ phép của công ty như thế nào?</p>
        </div>
        <div className="h-px bg-[#27272a]" />
        <div className="flex items-start gap-3">
          <span className="text-green-400 text-xs mt-0.5">AI</span>
          <p className="text-[#a1a1aa] text-xs leading-relaxed">
            Theo Chính sách Nhân sự v2.3 (trang 12):<br /><br />
            1. Nhân viên gửi đơn qua HRM ít nhất 3 ngày trước<br />
            2. Trưởng bộ phận duyệt trong 24h<br />
            3. HR xác nhận qua email<br /><br />
            <span className="text-[#52525b]">Nguồn: hr-policy-2024.pdf</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    tag: "Sản phẩm",
    title: "CS Copilot",
    subtitle: "CSKH thông minh, không ngủ",
    desc: "AI agent xử lý hàng nghìn yêu cầu khách hàng đồng thời. Hiểu tiếng Việt tự nhiên, nhớ lịch sử cuộc hội thoại, chuyển tiếp sang agent người khi cần.",
    highlights: ["Phản hồi trong dưới 2 giây", "Tích hợp Zalo, Facebook, Web chat", "Chuyển tiếp thông minh sang agent người", "Dashboard analytics real-time"],
    visual: (
      <div className="bg-[#09090b] border border-[#27272a] rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-[#27272a] flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-[#71717a]">CS Copilot · Online</span>
        </div>
        <div className="p-4 space-y-3 text-xs">
          <div className="flex justify-end">
            <div className="bg-violet-600 text-white rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
              Tôi muốn hoàn trả đơn hàng #12345
            </div>
          </div>
          <div className="flex">
            <div className="bg-[#27272a] text-[#a1a1aa] rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%]">
              Chào bạn! Tôi đã tìm thấy đơn hàng #12345. Đơn hàng đủ điều kiện hoàn trả trong vòng 7 ngày. Bạn có muốn tôi tạo yêu cầu hoàn trả ngay bây giờ không?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-violet-600 text-white rounded-2xl rounded-tr-sm px-3 py-2">
              Vâng, làm ơn
            </div>
          </div>
          <div className="flex">
            <div className="bg-[#27272a] text-[#a1a1aa] rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%]">
              ✓ Đã tạo yêu cầu hoàn trả. Bạn sẽ nhận tiền trong 3–5 ngày làm việc.
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 space-y-24 sm:space-y-32">
        {products.map((product, i) => (
          <div
            key={product.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              i % 2 === 1 ? "lg:flex lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-xs text-violet-500 uppercase tracking-widest mb-3 font-medium">
                {product.tag}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight mb-2">
                {product.title}
              </h2>
              <p className="text-[#71717a] text-base mb-4">{product.subtitle}</p>
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-8">
                {product.desc}
              </p>
              <ul className="space-y-2">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm text-[#a1a1aa]">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              {product.visual}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
