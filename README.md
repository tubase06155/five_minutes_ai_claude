# Fiveminutes AI — Website

Marketing/landing website cho **Fiveminutes AI**, thương hiệu AI của **MediaX** — công ty phát triển giải pháp AI cho thị trường Việt Nam.

---

## Tech Stack

| Layer | Công nghệ |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Language | TypeScript |
| Deployment | Vercel |

---

## Cấu trúc thư mục

```
fiveminutes-ai/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, metadata
│   │   └── page.tsx          # Landing page (ghép sections)
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx
│       │   └── Footer.tsx
│       ├── sections/         # Các section của landing page (theo thứ tự)
│       │   ├── Hero.tsx
│       │   ├── Logos.tsx
│       │   ├── Features.tsx
│       │   ├── ProductShowcase.tsx
│       │   ├── Stats.tsx
│       │   ├── Testimonials.tsx
│       │   ├── Pricing.tsx
│       │   └── CtaBanner.tsx
│       └── ui/               # Primitive components tái sử dụng
│           ├── Button.tsx
│           ├── Badge.tsx
│           ├── GradientText.tsx
│           └── AnimatedSection.tsx
├── CLAUDE.md                 # Design system, rules, content guidelines
└── history.txt               # Version history
```

---

## Quick Start

```bash
cd fiveminutes-ai

# Cài dependencies
npm install

# Chạy dev server (localhost:3000)
npm run dev

# Build production
npm run build

# Chạy production build
npm start

# Lint check
npm run lint
```

---

## Design System (tóm tắt)

**Colors**
- Background: `#09090b` (zinc-950)
- Surface/Card: `#18181b` (zinc-900)
- Border: `#27272a` (zinc-800)
- Accent: `#7c3aed` (violet-600)
- Heading: `#fafafa` (zinc-50)
- Body text: `#a1a1aa` (zinc-400)

**Component patterns**
- Card: `bg-zinc-900 border border-zinc-800 rounded-xl p-6`
- Button primary: `bg-violet-600 hover:bg-violet-500 text-white rounded-lg px-5 py-2.5`
- Section padding: `py-24` đến `py-32`
- Container: `max-w-6xl mx-auto px-6`

**Animations**
- Mọi section dùng Framer Motion `whileInView` + `viewport={{ once: true }}`
- Pattern chuẩn: `hidden: { opacity: 0, y: 24 }` → `visible: { opacity: 1, y: 0 }`
- Stagger children: `staggerChildren: 0.1`

---

## Rules bắt buộc

1. **Screenshot** sau mỗi thay đổi UI lớn, so sánh với `resend.com__ref=godly.png`
2. **Mobile-first** — test tối thiểu 375px và 390px
3. **Animation khi scroll** — mọi section phải có `whileInView`
4. **No comments** trừ khi WHY không rõ ràng
5. **No placeholder TODOs** trong code commit

---

## Liên kết

- Repo: https://github.com/tubase06155/five_minutes_ai_claude
- Design ref: `resend.com__ref=godly.png` (dark minimal style)
- Version history: `history.txt`
