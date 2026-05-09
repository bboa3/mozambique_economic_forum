---
name: Project Overview
description: Framework version, source HTML origin, component architecture decisions for the Mozambique Economic Forum site
type: project
---

The Mozambique Economic Forum site is built on Next.js 16.2.4 (App Router) with TypeScript and TailwindCSS v4.

**Why:** The starting point was a repurposed EsportsTravel Summit HTML file. Content has now been fully replaced with MEF content (Portuguese) across all components.

**How to apply:** When updating content or adding new sections, follow the existing component-per-section pattern. All styling is done with Tailwind utilities directly in className props plus a small number of CSS class rules in globals.css for patterns that require pseudo-selectors or semi-transparent rgba hover states.

## Styling approach
TailwindCSS v4 via `@theme inline` in globals.css. Brand color tokens registered there — use `bg-blue`, `text-gold`, `bg-navy`, `bg-dark`, `text-blue`, etc. No tailwind.config.js file exists. Use arbitrary values (e.g. `text-[0.65rem]`, `max-[900px]:grid-cols-2`) for values not in the token set.

## globals.css custom CSS rules (acceptable exceptions to Tailwind-only approach)
- `.font-montserrat` — font family utility
- `.bg1`–`.bg6` — HeroSlider slide background gradients
- `.slide-bg::before / ::after` — slide watermark and dark overlay pseudo-elements
- `.agenda-card` / `.agenda-card:hover` — dark-section card hover (rgba semi-transparent bg not possible as pure Tailwind utility)
- Scroll margin rules for section IDs

## Registration URL
All registration links point to: `https://www.mozdigital.org/auth/r4c8n1`

## Components directory
`/home/arlindo-boa/Desktop/mozambique_economic_forum/src/components/`

## Page entry point
`/home/arlindo-boa/Desktop/mozambique_economic_forum/src/app/page.tsx`

## Layout entry point (NewsletterPopup is here)
`/home/arlindo-boa/Desktop/mozambique_economic_forum/src/app/layout.tsx`
