---
name: Component Map
description: All section components with their type (server/client), file path, and key implementation notes
type: project
---

| Component | Type | File | Notes |
|---|---|---|---|
| `Navbar` | Server | `src/components/Navbar.tsx` | Sticky topbar, logo + nav links |
| `HeroSlider` | Client | `src/components/HeroSlider.tsx` | 4 slides, 5200ms auto-play, useState + useEffect |
| `Sponsors` | Server | `src/components/Sponsors.tsx` | Logo grid, 8 sponsors |
| `About` | Server | `src/components/About.tsx` | Text + co-location badge |
| `GrowthBanner` | Server | `src/components/GrowthBanner.tsx` | Dark stat callout strip |
| `Audience` | Server | `src/components/Audience.tsx` | Donut SVG (as JSX) + 4-photo grid |
| `FAQ` | Client | `src/components/FAQ.tsx` | Drawer toggle + accordion; data extracted to array |
| `HostBar` | Server | `src/components/HostBar.tsx` | Single mailto CTA link |
| `Testimonials` | Client | `src/components/Testimonials.tsx` | 5 quotes, 6000ms auto-cycle, useState + useEffect |
| `Footer` | Server | `src/components/Footer.tsx` | 3-column grid + bottom bar + footer-ns-bar strip |

## FAQ implementation note
The original HTML used `onclick="toggleItem(this)"` passing the button DOM node. In React this is replaced with an index-based approach: `openIndex: number | null` state, toggled by item index on click. Accordion behavior (only one open at a time, click to close) matches the original JS exactly.

## HeroSlider implementation note
The original JS used a shared `cur` variable mutated by both `goSlide()` and `setInterval()`. In React, `setCurrent` with a functional updater `(prev) => (prev + 1) % TOTAL_SLIDES` ensures the auto-play always reads current state correctly.
