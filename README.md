# Project Feed The Nation — Drecan Commodities Limited

A modern, responsive React + TypeScript landing page for the **Project Feed The Nation** campaign.

## Tech Stack

- **React 18** + **TypeScript**
- **Tailwind CSS** — custom brand tokens (forest green, gold, cream)
- **React Router v6** — multi-page routing (Landing + FAQ)
- **Vite** — fast dev server and build
- **Lucide React** — icons

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

The app runs at **http://localhost:5173** by default.

## Project Structure

```
src/
├── assets/
│   └── logo.png             # Drecan brand logo
├── components/
│   ├── Navbar.tsx           # Sticky navigation bar
│   ├── UrgencyBanner.tsx    # Scrolling urgency ticker
│   ├── Hero.tsx             # Main hero section
│   ├── About.tsx            # Campaign overview + stats
│   ├── Packages.tsx         # Package cards + comparison table
│   ├── Payment.tsx          # Full payment & instalment plans
│   ├── HowItWorks.tsx       # 4-step process section
│   ├── Collection.tsx       # Hub & collection info
│   ├── Wholesale.tsx        # Wholesale programme
│   ├── Accordion.tsx        # Reusable FAQ accordion
│   ├── Contact.tsx          # Contact section + final CTA
│   └── Footer.tsx           # Site footer
├── data/
│   ├── packages.ts          # Package content arrays
│   └── faq.ts               # FAQ questions & answers
├── pages/
│   ├── Home.tsx             # Landing page (all sections)
│   └── FAQPage.tsx          # Dedicated FAQ page
├── types/
│   └── index.ts             # TypeScript interfaces
├── App.tsx                  # Router setup
├── main.tsx                 # Entry point
└── index.css                # Tailwind + custom styles
```

## Pages

| Route | Description |
|-------|-------------|
| `/`   | Full campaign landing page |
| `/faq`| Accordion FAQ page |

## Campaign Details

- **Target**: 450,000 Nigerian families
- **Coverage**: All 36 states + FCT
- **Collection**: Late November – 20th December 2026
- **Lock-in deadline**: October 2026 or when packages sell out

## Contact

- Phone: +234 706 968 9844
- Email: drecanagriculture@gmail.com
- Address: Suite C6, Rosette Plaza, Apo Resettlement, FCT, Nigeria
- Website: www.drecan.com
