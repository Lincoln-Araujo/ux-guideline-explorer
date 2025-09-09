## Next.js + Tailwind Demo — UX Guidelines Explorer

![Next.js](https://img.shields.io/badge/Next.js-13+-000000?logo=nextdotjs&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-38B2AC?logo=tailwindcss&logoColor=white&style=for-the-badge)
![Vitest](https://img.shields.io/badge/Tested_with-Vitest-6E9F18?logo=vitest&logoColor=white&style=for-the-badge)

**Stack:** Next.js (App Router), TypeScript, Tailwind CSS  
**Focus:** Accessibility (WCAG), discoverability (search/filter/sort), reusable components

**What it does**  
A tiny catalog that lists UX guidelines with **search**, **filters**, **sorting**, and **pagination**. Each item has a detail page with **Do/Don’t** and **Good vs Bad** examples. Includes a playful **/scan** page that “analyzes” a URL and returns mock findings mapped to the guidelines.

**Why it matters**  
Demonstrates my ability to build accessible, component-based UIs with modern frameworks (Next.js + Tailwind), structure client-side state for discoverability, and iterate quickly on product UX.

**Features**
- 🔎 Search by title/summary  
- 🏷️ Filter by **Category** (Checkout, Search, Navigation) & **Severity** (High/Medium/Low)  
- 🔤 Sort by severity or title  
- 📄 Pagination (keyboard accessible)  
- 🧭 Detail pages with Do/Don’t & examples  
- 🧪 **/scan** URL “scanner” (mock) that returns relevant guidelines

**Accessibility highlights**
- Skip link, semantic landmarks (`header`, `main`, `nav`)  
- Labeled inputs, visible focus states (`:focus-visible`)  
- `aria-live="polite"` for dynamic results count  
- Keyboard-friendly controls and pagination

**Run locally**
```bash
pnpm install    # or npm/yarn
pnpm dev        # http://localhost:3000
```

**Project structure**
/app
  /api/guidelines/route.ts   # optional JSON API
  /guidelines/page.tsx       # list + search/filter/sort/pagination
  /guidelines/[id]/page.tsx  # detail
  /scan/page.tsx             # mock URL scanner
  /page.tsx                  # landing
/components
  Badge.tsx  Card.tsx  ExampleBlock.tsx  FilterPills.tsx
  Header.tsx  Pagination.tsx  SearchBar.tsx
/data
  guidelines.json
/lib
  filter.ts                  # pure filter/sort/paginate functions
/styles
  globals.css                # a11y helpers + Tailwind base



