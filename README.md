# VERDICT.COM - Phase One UI/UX Implementation

This repository contains the Phase One UI/UX implementation for VERDICT.COM, an AI-powered legal Q&A platform.

## 🚀 Demo Features

### Pages Implemented
- **Homepage** (`/`) - Landing page with navigation to legal vertical
- **Legal Hub** (`/l`) - Browse questions, categories, and trending topics
- **Ask Question** (`/l/ask`) - Multi-step form with AI classification preview
- **Question Display** (`/l/q/[slug]`) - PPR-enabled page with tabs for question, verdict score, and lawyer opinions
- **Lawyer Profile** (`/i/l/[username]`) - Professional profiles with XP, badges, and stats
- **Law Firm Profile** (`/o/l/[slug]`) - Organization pages with attorney listings

### Key Components
- **Verdict Score Display** - Animated score visualization with Framer Motion
- **Lawyer Opinion Cards** - Detailed answers with voting and alignment scores
- **Gamification Elements** - XP progress bars, level displays, and badge showcases
- **Toast Notifications** - Sonner integration for user feedback

## 🛠️ Tech Stack

- **Next.js 15.3.0** with App Router
- **React 19.0.0**
- **TypeScript 5.8.0**
- **Tailwind CSS 4.1.0**
- **shadcn/ui** components
- **Framer Motion** for animations
- **Sonner** for toast notifications
- **Radix UI** primitives

## 📁 Project Structure

```
app/
├── l/                    # Legal vertical pages
│   ├── page.tsx         # Legal hub
│   ├── ask/            # Question form
│   └── q/[slug]/       # Question display (PPR enabled)
├── i/l/[username]/      # Individual lawyer profiles
├── o/l/[slug]/         # Law firm profiles
└── layout.tsx          # Root layout with Toaster

components/
├── ui/                 # shadcn/ui components
├── verdict/           # Verdict-specific components
└── legal/            # Legal vertical components

src/types/            # TypeScript type definitions
```

## 🎨 Design System

### Colors
- **Verdict Score Colors**:
  - Green (#10b981) - Scores 8-10
  - Yellow (#f59e0b) - Scores 5-7
  - Red (#ef4444) - Scores 0-4
- **Professional Gold** (#fbbf24) - Verified badges
- **XP Purple** (#8b5cf6) - Gamification elements

### Key Features
- Responsive design (mobile-first)
- Skeleton loading states
- Error boundaries (planned)
- SEO optimization with structured data
- Accessibility with WCAG 2.1 AA compliance

## 🚦 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/vappsusa/vcom0008.git
cd vcom0008
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## 📝 Notes

- This is a UI/UX demo with placeholder data
- No backend integration (Supabase, Clerk, AI) in Phase One
- All data is mocked for demonstration purposes
- Forms show toast notifications but don't persist data

## 🔗 Related Repositories

- Documentation: [vappsusa/vcom0001](https://github.com/vappsusa/vcom0001)

---

Built for investor demo - showcasing the full UI/UX vision for VERDICT.COM