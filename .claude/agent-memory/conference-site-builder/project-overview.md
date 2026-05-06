---
name: Project Overview
description: Framework version, source HTML origin, component architecture decisions for the Mozambique Economic Forum site
type: project
---

The Mozambique Economic Forum site is built on Next.js 16.2.4 (App Router) with TypeScript and TailwindCSS v4.

**Why:** The starting point is a repurposed EsportsTravel Summit HTML file (`/esportstravelsummit.html`) — content will be replaced later; the first phase was purely decomposing the monolithic HTML into Next.js components while preserving all styles and behavior exactly.

**How to apply:** When updating content or adding new sections, follow the existing component-per-section pattern. All styling is now done with Tailwind utilities directly in className props. Do not add new hand-written CSS classes to globals.css — use Tailwind utilities or arbitrary values (e.g. `text-[0.65rem]`, `max-[920px]:grid-cols-1`) instead.

## Source file
`/home/arlindo-boa/Desktop/mozambique_economic_forum/esportstravelsummit.html`

## Sections decomposed
Nav → HeroSlider → Sponsors → About → GrowthBanner → Audience → FAQ → HostBar → Testimonials → Footer

## Styling approach (as of 2026-05-02)
Fully migrated to TailwindCSS v4 (Option C migration). All hand-written CSS class rules removed from globals.css. Every component uses Tailwind utilities exclusively in className. Brand tokens registered via `@theme inline` in globals.css.

## Components directory
`/home/arlindo-boa/Desktop/mozambique_economic_forum/src/components/`

## Page composition
`/home/arlindo-boa/Desktop/mozambique_economic_forum/src/app/page.tsx` — server component that imports and renders all 10 section components in order, no `'use client'` on the page itself.
