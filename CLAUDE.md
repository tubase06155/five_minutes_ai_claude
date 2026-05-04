# Fiveminutes AI — Website

## Project Overview

Marketing/landing website for **Fiveminutes AI** — brand AI của **MediaX**, công ty chuyên phát triển giải pháp AI tiên phong cho thị trường Việt Nam. Website giới thiệu dịch vụ, xây dựng uy tín và chuyển đổi khách truy cập thành khách hàng.

**Design direction:** Dark, minimal, modern — inspired by Resend.com. Clean typography, generous whitespace, subtle glows/gradients, developer-friendly aesthetic.

---

## Company Information

**Công ty:** MediaX (thương hiệu AI: Fiveminutes AI)
**Slogan:** "Trí tuệ nhân tạo tiên phong cho Việt Nam"
**Tầm nhìn:** Trở thành lực lượng dẫn đầu về công nghệ AI tại Việt Nam — tương tự vai trò của OpenAI trên toàn cầu.
**Thị trường:** B2B, tập trung vào doanh nghiệp Việt Nam

**Địa chỉ:** Tầng 5, V1 Tower The Terra An Hưng, La Khê, Hà Đông, Hà Nội
**Email:** hello@mediax.com.vn
**Điện thoại:** 0343 488 603
**Website gốc:** https://mediax.com.vn

### Dịch vụ cốt lõi

1. **Custom AI Agent** — Thiết kế và triển khai AI Agent cho B2B: hỗ trợ khách hàng, vận hành nội bộ, quản lý tri thức.
2. **Custom Software & AI Integration** — Nâng cấp hệ thống hiện có, tích hợp AI để tự động hóa quy trình.
3. **Doc Copilot** — Nền tảng tri thức tài liệu tương tác: Q&A từ tài liệu nội bộ.
4. **CS Copilot** — AI hỗ trợ chăm sóc khách hàng tự động.

### Lĩnh vực nghiên cứu

- Image similarity search
- Anomaly detection models
- Tóm tắt tin tức tiếng Việt bằng AI (Vietnamese NLP)

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist (Vercel) — Geist Sans + Geist Mono
- **Deployment:** Vercel

---

## Mandatory Rules (Quy tắc bắt buộc)

> Các quy tắc này phải được tuân thủ trong mọi thay đổi, không có ngoại lệ.

1. **Screenshot sau mỗi thay đổi lớn** — Sau khi hoàn thành mỗi section hoặc thay đổi UI đáng kể, chụp screenshot trang web đang chạy và so sánh trực quan với ảnh design gốc (`resend.com__ref=godly.png`). Ghi nhận sự khác biệt và điều chỉnh nếu cần.

2. **Mobile-friendly bắt buộc** — Mọi component phải hoạt động hoàn hảo trên 375px (iPhone SE) và 390px (iPhone 14). Test responsive trên các breakpoint: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px). Không chấp nhận layout bị vỡ ở bất kỳ kích thước nào.

3. **Animation khi scroll cho mọi section** — Mỗi section phải có ít nhất một animation khi scroll vào viewport. Dùng Framer Motion `whileInView` + `viewport={{ once: true }}`. Pattern chuẩn:
   ```tsx
   const variants = {
     hidden: { opacity: 0, y: 24 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
   }
   // <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
   ```
   Stagger children với `staggerChildren: 0.1` cho các grid/list.

---

## Design System

### Colors
```
Background:   #09090b  (zinc-950)
Surface:      #18181b  (zinc-900)
Border:       #27272a  (zinc-800)
Muted text:   #71717a  (zinc-500)
Body text:    #a1a1aa  (zinc-400)
Heading:      #fafafa  (zinc-50)
Accent:       #7c3aed  (violet-600) — primary brand color
Accent glow:  rgba(124,58,237,0.15)
```

### Typography
```
Display:  Geist Sans, 700, 48–72px, tight tracking (-0.02em)
Heading:  Geist Sans, 600, 24–36px
Body:     Geist Sans, 400, 15–16px, line-height 1.7
Mono:     Geist Mono — for code snippets only
```

### Spacing
- Section padding: `py-24` to `py-32`
- Container: `max-w-6xl mx-auto px-6`
- Component gap: `gap-8` to `gap-16`

### Component Patterns
- **Cards:** `bg-zinc-900 border border-zinc-800 rounded-xl p-6`
- **Buttons (primary):** `bg-violet-600 hover:bg-violet-500 text-white rounded-lg px-5 py-2.5 font-medium`
- **Buttons (ghost):** `border border-zinc-800 hover:border-zinc-700 text-zinc-300 rounded-lg px-5 py-2.5`
- **Badge:** `bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs rounded-full px-3 py-1`
- **Glow effect:** `shadow-[0_0_80px_rgba(124,58,237,0.15)]` on hero elements
- **Gradient text:** `bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent`

---

## Site Structure

```
/                   → Landing page (main)
/about              → About Fiveminutes AI / MediaX
/services           → All services overview
/blog               → Blog / articles (optional phase 2)
/contact            → Contact / demo request
```

### Landing Page Sections (in order)

1. **Navbar** — Logo left, nav links center, CTA button right. Sticky, blur backdrop.
2. **Hero** — Headline lớn, subtext, hai CTA (primary + ghost), social proof badges bên dưới.
3. **Logos** — Dải logo đối tác / khách hàng.
4. **Features Overview** — Grid 3 cột icon + mô tả năng lực cốt lõi.
5. **Product Showcase** — Text trái + visual phải (code block / UI mockup), đan xen.
6. **Stats / Why MediaX** — Headline mạnh + số liệu nổi bật hoặc proof points.
7. **Testimonials** — 2–3 card quote từ khách hàng thực.
8. **Pricing** — 3 tier: Starter / Pro / Enterprise.
9. **CTA Banner** — Full-width section tối với headline + nút CTA đơn.
10. **Footer** — Logo, cột điều hướng, social links, địa chỉ MediaX, copyright.

---

## Content Guidelines

### Brand Voice
- Tự tin, trực tiếp, không dùng buzzword rỗng
- Đủ kỹ thuật để tôn trọng developer, đủ đơn giản cho decision-maker
- Dùng kết quả cụ thể thay vì lời hứa chung chung

### Key Messages
- "AI tiên phong cho Việt Nam" — bản địa hóa, hiểu thị trường Việt
- Triển khai nhanh, production-ready (không phải demo)
- Từ AI Agent đến tích hợp hệ thống — one-stop shop

### Services Copy
```
Custom AI Agent
→ Thiết kế AI Agent theo đặc thù doanh nghiệp của bạn — hỗ trợ khách hàng 24/7, tự động hóa quy trình nội bộ, quản lý tri thức tổ chức.

Custom Software & AI Integration
→ Tích hợp AI vào hệ thống hiện có mà không cần xây lại từ đầu. Tự động hóa quy trình, tiết kiệm thời gian và chi phí vận hành.

Doc Copilot
→ Biến tài liệu nội bộ thành trợ lý tri thức tương tác. Nhân viên hỏi — AI trả lời chính xác từ nguồn tài liệu của bạn.

CS Copilot
→ AI hỗ trợ chăm sóc khách hàng tự động, giảm tải cho đội ngũ, tăng tốc độ phản hồi và chất lượng trải nghiệm.
```

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Landing page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/           # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── Logos.tsx
│   │   ├── Features.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   └── CtaBanner.tsx
│   └── ui/                 # Reusable primitives
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Card.tsx
│       └── GradientText.tsx
├── lib/
│   └── utils.ts
└── styles/
    └── globals.css
```

---

## Implementation Rules

- **No comments** unless the WHY is non-obvious.
- **No placeholder TODOs** left in committed code.
- **Mobile-first** responsive: design for 375px, scale up to 1440px.
- All images use `next/image` with proper `alt` text.
- Animations: subtle only — `opacity` + `translateY` on scroll enter. No spinning logos or bounce.
- `prefers-reduced-motion` must be respected in all Framer Motion variants.
- No heavy third-party UI libraries without justification.
- Keep bundle lean.

---

## Development Commands

```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Production build
npm run lint       # ESLint check
npm run type-check # tsc --noEmit
```

---

## SEO & Metadata

- `title`: "Fiveminutes AI — Trí tuệ nhân tạo tiên phong cho Việt Nam"
- `description`: "Fiveminutes AI (by MediaX) cung cấp giải pháp AI sản xuất thực tế — AI Agent, tích hợp hệ thống, Doc Copilot — triển khai nhanh cho doanh nghiệp Việt Nam."
- OG image: dark branded card, 1200×630
- `lang="vi"` trên thẻ `<html>`
- Canonical URLs trên tất cả các trang
- `robots.txt` và `sitemap.xml` tự động qua Next.js

---

## Accessibility

- Color contrast: tối thiểu WCAG AA (4.5:1 với body text)
- Tất cả interactive elements phải navigate được bằng bàn phím
- Focus rings hiển thị rõ (`focus-visible:ring-2 ring-violet-500`)
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, hierarchy heading đúng thứ tự
