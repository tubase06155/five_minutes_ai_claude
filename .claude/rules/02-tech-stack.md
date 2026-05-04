# Tech Stack

| Layer | Công nghệ |
|---|---|
| Framework | Next.js 16+ (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Geist Sans + Geist Mono (Vercel) |
| Language | TypeScript |
| Deployment | Vercel |

## Dev Commands

```bash
npm run dev        # localhost:3000
npm run build      # production build
npm run lint       # ESLint
npm run type-check # tsc --noEmit
```

## File Structure

```
fiveminutes-ai/src/
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
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Logos.tsx
│   │   ├── Features.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   └── CtaBanner.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── GradientText.tsx
│       └── AnimatedSection.tsx
```
