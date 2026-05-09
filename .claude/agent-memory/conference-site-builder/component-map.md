---
name: Component Map
description: All section components with their type (server/client), file path, and key implementation notes
type: project
---

| Component | Type | File | Notes |
|---|---|---|---|
| `Navbar` | Client | `src/components/Navbar.tsx` | Sticky topbar, logo + nav links, scroll-aware bg, mobile drawer |
| `HeroSlider` | Client | `src/components/HeroSlider.tsx` | 4 slides, 5200ms auto-play, useState + useEffect |
| `Sponsors` | Server | `src/components/Sponsors.tsx` | Logo pill row, 10 org/partner names |
| `About` | Server | `src/components/About.tsx` | Body text + 3 VMV cards (Visão/Missão/Valores) with top blue gradient bar |
| `HostLogosBar` | Server | `src/components/HostLogosBar.tsx` | White bg pill row of 10 partner names |
| `GrowthBanner` | Server | `src/components/GrowthBanner.tsx` | Dark navy, grid pattern overlay, radial glow, gold/bold impact quote |
| `StatsRow` | Server | `src/components/StatsRow.tsx` | White bg, 4-stat boxes with top blue gradient bar |
| `Audience` | Server | `src/components/Audience.tsx` | Light gray bg, 4 registration-type cards, links to mozdigital.org |
| `FAQ` | Server | `src/components/FAQ.tsx` | Agenda section (id="agenda"), dark navy, 4-col grid of 8 topic cards. Card hover uses `.agenda-card` CSS class in globals.css (can't do dark-bg hover in pure Tailwind) |
| `MembershipPlans` | Server | `src/components/MembershipPlans.tsx` | Light gray, 5 plan cards (Empreendedor/Conteúdo Local/Multinacional/Investidor/Governo), billing note box |
| `HostBar` | Server | `src/components/HostBar.tsx` | History section (id="historia"), dark navy, vertical timeline, 4 entries |
| `Testimonials` | Server | `src/components/Testimonials.tsx` | Leadership section (id="lideranca"), white bg, 8 leader cards with gradient avatar initials |
| `OrgSponsors` | Server | `src/components/OrgSponsors.tsx` | Light gray, 3-col grid: Organizadores / Patrocinadores / Parceiros |
| `Footer` | Server | `src/components/Footer.tsx` | Dark #0a0d18, 4-col grid (2fr 1fr 1fr 1fr), bottom bar |
| `NewsletterPopup` | Client | `src/components/NewsletterPopup.tsx` | Fixed overlay modal, auto-shows after 3s, closes on X/backdrop/Escape, renders in layout.tsx |

## Page order in src/app/page.tsx
Navbar → HeroSlider → Sponsors → About → HostLogosBar → GrowthBanner → StatsRow → Audience → FAQ → MembershipPlans → HostBar → Testimonials → OrgSponsors → Footer

## NewsletterPopup placement
Rendered in `src/app/layout.tsx` (outside `<main>`) as the last child of `<body>`, after `{children}`.

## FAQ (Agenda) card hover pattern
Dark-section card hover (transparent bg → subtle blue) cannot be done purely in Tailwind utility classes because the semi-transparent rgba values aren't registered as tokens. Solution: `.agenda-card` and `.agenda-card:hover` CSS rules in `globals.css`.

## HeroSlider implementation note
The original JS used a shared `cur` variable mutated by both `goSlide()` and `setInterval()`. In React, `setCurrent` with a functional updater `(prev) => (prev + 1) % TOTAL_SLIDES` ensures the auto-play always reads current state correctly.
