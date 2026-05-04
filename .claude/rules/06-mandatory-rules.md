# Mandatory Rules

Các quy tắc này áp dụng cho mọi thay đổi, không có ngoại lệ.

## 1. Screenshot sau mỗi thay đổi UI lớn

Sau khi hoàn thành mỗi section hoặc thay đổi UI đáng kể:
- Chụp screenshot trang đang chạy
- So sánh trực quan với `resend.com__ref=godly.png`
- Ghi nhận sự khác biệt và điều chỉnh nếu cần

## 2. Mobile-friendly bắt buộc

Mọi component phải hoạt động hoàn hảo trên:
- 375px (iPhone SE) và 390px (iPhone 14)
- Breakpoints: `sm` 640px / `md` 768px / `lg` 1024px / `xl` 1280px

Không chấp nhận layout bị vỡ ở bất kỳ kích thước nào.

## 3. Scroll animation cho mọi section

Mỗi section phải có ít nhất một animation khi scroll vào viewport.

Pattern chuẩn với Framer Motion:

```tsx
import { type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
```

Stagger children với `staggerChildren: 0.1` cho grid/list.

`prefers-reduced-motion` phải được respect trong mọi Framer Motion variant.
