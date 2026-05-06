---
name: Design Tokens
description: Brand tokens registered in @theme for TailwindCSS v4, plus font and animation setup
type: project
---

## Tailwind v4 @theme tokens (registered in globals.css @theme inline block)
These become Tailwind utility classes automatically — e.g. `bg-blue`, `text-navy`, `bg-blue-dark`.

Colours are matched to the reference HTML source (`mozambique_economic_forum(1).html`):
- `--color-blue: #1565c0` → `bg-blue`, `text-blue`, `border-blue`
- `--color-blue-mid: #1976d2` → `bg-blue-mid`, `text-blue-mid`
- `--color-blue-light: #2196f3` → `bg-blue-light`, `text-blue-light`, `hover:border-b-blue-light`
- `--color-blue-dark: #0d47a1` → `bg-blue-dark`, `hover:bg-blue-dark`, gradient from stops
- `--color-gold: #f9a825` → `bg-gold`, `text-gold`, `border-gold` (Mozambique accent)
- `--color-navy: #0a0f1e` → `bg-navy` (primary dark background)
- `--color-dark: #111111` → `bg-dark`

## Font handling (IMPORTANT — avoids circular reference)
The `--font-montserrat` token is NOT registered inside `@theme inline` (would create
a circular CSS variable reference on :root). Instead, a plain CSS utility is declared
directly in globals.css after the @import:

```css
.font-montserrat { font-family: var(--font-montserrat, 'Montserrat', sans-serif); }
```

Use `font-montserrat` utility class in components. `font-sans` / `font-open-sans` is
handled by the `body` reset rule which references `var(--font-open-sans)`.

## Custom breakpoint
- `--breakpoint-nav: 920px` → `nav:` prefix (e.g. `hidden nav:flex`, `max-[920px]:grid-cols-1`)

## Named animations
- `--animate-t-fade: tFade 0.5s ease` → `animate-t-fade`
- `--animate-drawer-in: drawerIn 0.22s ease` → `animate-drawer-in`

## CSS-only classes (remain in globals.css, not in @theme)
- `.bg1`–`.bg6` — hero slide gradient backgrounds (6 slides total)
- `.slide-bg` — needed for `::before` and `::after` pseudo-element rules

## Fonts
Loaded via `next/font/google` in `/src/app/layout.tsx` with CSS variable strategy:
- **Montserrat** → `--font-montserrat` (weights: 400, 500, 600, 700, 800, 900; normal + italic)
- **Open Sans** → `--font-open-sans` (variable font, all weights)
