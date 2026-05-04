# Implementation Rules

## Code Quality

- **No comments** trừ khi WHY không rõ ràng với người đọc sau
- **No placeholder TODOs** trong code được commit
- **No heavy third-party UI libraries** nếu không có lý do rõ ràng
- Keep bundle lean

## Responsive

- Mobile-first: design cho 375px, scale lên đến 1440px
- Dùng Tailwind breakpoint prefix: `sm:`, `md:`, `lg:`, `xl:`

## Images

- Luôn dùng `next/image` với `alt` text đầy đủ

## Animations

- Subtle only: `opacity` + `translateY` khi scroll vào viewport
- Không dùng spinning logos, bounce, hay hiệu ứng gây mất tập trung
- Luôn khai báo kiểu với `Variants` từ framer-motion để tránh TypeScript error:

```tsx
import { type Variants } from "framer-motion";
const fadeUp: Variants = { ... };
```

## Accessibility

- Color contrast tối thiểu WCAG AA (4.5:1 với body text)
- Tất cả interactive elements navigate được bằng bàn phím
- Focus rings rõ ràng: `focus-visible:ring-2 ring-violet-500`
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, heading hierarchy đúng thứ tự
