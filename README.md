# Mohammad Muntasir Kabir — Personal Portfolio

A modern, animated personal portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **TypeScript 6**. Features smooth scroll-triggered animations, a typewriter effect, glassmorphism UI, and a fully responsive dark theme.

## ✨ Highlights

- **Typewriter Hero** — Animated cycling text with gradient effect and blinking cursor
- **GSAP Scroll Animations** — Cards, timelines, and sections animate on scroll with stagger, scale, and slide effects
- **Glassmorphism UI** — Frosted glass cards with subtle borders and backdrop blur
- **Animated Timeline** — Experience & Education sections with growing timeline lines and elastic dot pop-ins
- **Skills Marquee** — Infinite horizontal scroll of technologies with edge fades
- **Project Cards** — 4 featured projects with screenshots, hover overlays, tags, and GitHub links
- **Custom Scroll Progress** — Gradient progress bar tracked to scroll position
- **Contact Form** — Animated focus underlines, loading spinner, success/error animations
- **Responsive Design** — Fully responsive with mobile hamburger menu and smooth transitions
- **Dark Theme** — Teal (#20B2A6) and amber (#F5A623) accent colors on deep dark background
- **SEO** — Sitemap, robots.txt, Open Graph & Twitter card metadata
- **Accessibility** — ARIA labels, keyboard navigation, prefers-reduced-motion support

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
|| Framework | Next.js 16, React 19 |
|| Styling | Tailwind CSS 4, CSS Animations |
|| Animation | GSAP 3 (ScrollTrigger) |
|| Icons | Lucide React |
|| Fonts | Geist Sans, Geist Mono, Playfair Display |
|| Language | TypeScript 6 |
|| Node Types | @types/node 26 |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
git clone git@github.com:MohammadMuntasirKabir/nextjs-personal-portfolio.git
cd nextjs-personal-portfolio
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) to see the result.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles + animations
│   ├── layout.tsx       # Root layout + ScrollProgress + metadata
│   ├── page.tsx         # Home page composition
│   ├── loading.tsx      # Loading state
│   ├── not-found.tsx    # 404 page
│   ├── robots.ts        # robots.txt generator
│   └── sitemap.ts       # Sitemap generator
├── components/
│   ├── AnimatedBorderButton.tsx  # Button with animated SVG border
│   ├── ScrollProgress.tsx        # Scroll progress bar (GSAP)
│   └── SkillsMarquee.tsx         # Infinite skills scroller
├── layout/
│   ├── Footer.tsx       # Animated footer with social links
│   └── Navbar.tsx       # Navbar with hamburger + animations
├── lib/
│   └── social-links.tsx  # Social media links + footer links
└── sections/
    ├── Hero.tsx          # Typewriter + particles + skills cards
    ├── About.tsx         # Stats + highlight cards + tilt hover
    ├── Projects.tsx      # Project grid with screenshots + hover overlays
    ├── Experience.tsx    # Animated timeline
    ├── Education.tsx     # Animated timeline
    └── Contact.tsx       # Animated form + contact info
```

## 🎨 Sections

1. **Hero** — Full-screen landing with typewriter headline, floating particles, CTA buttons, social links, and skills/AI tools cards
2. **Skills Marquee** — Auto-scrolling list of all technologies
3. **About** — Bio, philosophy quote, stats counters, and 4 highlight cards with icons
4. **Projects** — 4 featured projects with screenshots, hover overlays, tags, and GitHub links
5. **Experience** — Timeline with work history, role details, and tech tags
6. **Education** — Timeline with degree, coursework highlights
7. **Contact** — Form with animated inputs, availability card, contact info

## 📄 License

This project is private and intended for personal portfolio use.

---

Built by [Mohammad Muntasir Kabir](https://github.com/MohammadMuntasirKabir)
