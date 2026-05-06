---
name: Next.js Patterns Confirmed
description: API decisions verified against node_modules/next/dist/docs/ for Next.js 16.2.4 (App Router)
type: project
---

All patterns below were confirmed by reading the local docs before writing code.

## Font loading (next/font/google)
Docs: `/node_modules/next/dist/docs/01-app/03-api-reference/02-components/font.md`

- Montserrat is non-variable → requires explicit `weight` array
- Open Sans is a variable font → no `weight` needed
- Use `variable` option to get a CSS custom property (e.g. `--font-montserrat`)
- Apply `className={`${montserrat.variable} ${openSans.variable}`}` on `<html>` in root layout
- CSS in globals.css then uses `var(--font-montserrat)` etc.

## CSS global styles (globals.css)
Docs: `/node_modules/next/dist/docs/01-app/01-getting-started/11-css.md`

- Keep `@import "tailwindcss"` at top (TailwindCSS v4 uses this import, NOT `@tailwind` directives)
- Import globals.css in layout.tsx — applies to all routes
- `@theme inline { }` block after the import registers brand tokens as Tailwind utilities
- `@theme inline` (not just `@theme`) is the correct syntax for v4 when mapping to CSS variables
- PostCSS config: `@tailwindcss/postcss` plugin in `postcss.config.mjs` (no tailwind.config.js needed)

## Tailwind v4 custom breakpoints
- Define in `@theme inline` as `--breakpoint-nav: 920px`
- Use in components as `nav:` prefix (e.g. `hidden nav:flex`, `max-[920px]:grid-cols-1`)
- The `max-[920px]:` arbitrary breakpoint syntax is an alternative that also works

## Tailwind v4 custom animations
- Define keyframes in CSS: `@keyframes drawerIn { ... }`
- Register in `@theme inline`: `--animate-drawer-in: drawerIn 0.22s ease`
- Use in components as `animate-drawer-in`

## Server vs Client components
Docs: `/node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`

- Default: all components in App Router are Server Components
- Add `'use client'` at top of file for any component needing useState, useEffect, onClick
- Client components can be imported into Server Component pages — boundary is automatic

## Root layout
Docs: `/node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`

- Root layout must export default function with `children: React.ReactNode` prop
- Must include `<html>` and `<body>` tags
- `metadata` export sets page title/description
- No `Readonly<>` wrapper required but harmless if present
