# Outstanding Landing Page – Deco Decoster

## Goal
Build a single, **outstanding** landing page with **React** and **Vite** that feels distinctive and conversion-focused. Every section—nav, hero, cards, forms, footer—must meet a high design bar (see UI Quality in the frontend agent). Fast to review: work is delivered in a small number of tasks so you can iterate quickly.


## Product Context
- **Business:** Deco Decoster – professional painting (residential & commercial)
- **Aesthetic:** Rustic & organic (warm, trustworthy, craftsmanship)
- **Audience:** Homeowners, property managers, real estate
- **Services:** Interior painting, exterior painting, specialty (cabinets, decks, staining, trim)

---

## Page Structure (Single Page, Top to Bottom)

1. **Navbar** – Logo, nav links (Home, Services, Gallery, Testimonials, Contact), CTA “Get Free Quote”, mobile menu. Sticky, smooth scroll to sections.
2. **Hero** – Strong headline, subheadline, primary + secondary CTA, trust badges (Licensed, Insured, Years in Business). Real hero image; at least one MagicUI-style effect (e.g. blur-fade, spotlight).
3. **Services** – 3 cards: Interior, Exterior, Specialty (with sub-services). Icons, short copy, “Learn More” / “View All”. Distinctive card treatment (e.g. card-spotlight, hover).
4. **Before/After Gallery** – Grid of project cards (real images), filter (All / Interior / Exterior / Specialty). Click opens modal with before/after slider. “See All Projects” CTA.
5. **Why Choose Us** – 6 benefit cards (Quality Materials, Attention to Detail, On-Time Completion, Clean Environment, Competitive Pricing, Satisfaction Guaranteed). Icons + short text; distinctive section treatment.
6. **Testimonials** – Carousel with customer name, project type, stars, quote. “Read More Reviews”; trust line (e.g. “4.9/5 from 150+ reviews”).
7. **Service Areas** – Coverage list and/or simple map; CTA “Do you service my area? Contact us.”
8. **License & Insurance** – License number, insurance, certification badges. Short, scannable.
9. **Quote Form** – Name, email, phone, address, service type, description (optional), budget (optional), contact preference. Validation, submit, success/error. Privacy consent.
10. **Footer** – Company info, contact, hours, quick links, services list, social icons, copyright, legal links.

---

## Design Specifications

### Color Palette
- **Primary:** Terracotta `#C25B3B`, Sage Green `#8BA88E`, Warm Gray `#6B6B6B`
- **Accent:** Navy `#2C3E50`, Gold/Amber `#D4A574`
- **Neutrals:** Background `#FDFBF7`, Light `#F5F1ED`, Dark text `#2D2D2D`, Secondary text `#666666`

### Typography
- **Headings:** Playfair Display (serif) – e.g. 48px/36px/24px, bold
- **Body:** Open Sans (sans-serif) – 16px base, line-height 1.6
- Clear hierarchy everywhere; follow scale in Tailwind

### Visual Elements
- **Corners:** Buttons 8px, cards 12px, images 8px
- **Shadows:** Card and hover per plan; avoid flat-only blocks
- **Icons:** Outline style, 24px default, 32px for features; Terracotta or Navy
- **Textures/patterns:** Subtle where it supports the rustic feel (e.g. hero overlay, section backgrounds)

### What to Avoid (Anti-patterns)
- **Plain white/gray only** – Every major section must use the project palette (terracotta, sage, navy, gold, cream), not default shadcn gray/white only.
- **Placeholder-only hero or gallery** – Use real images (Unsplash/Pexels, downloaded to `public/images/`). No text-only gallery cards (“Project 1”, “Project 2” with no image).
- **Navigation links run together** – Nav items must have spacing or separators so labels are readable.
- **No visual interest** – No section without imagery, MagicUI (or equivalent) treatment, or strong typography/color. The page must feel distinctive, not like a default template.
- **Default template look** – No shipping without entrance animations, hover states, and application of this brand (rustic & organic).

---

## Technical Requirements
- **Build:** Vite production build; `npm run build` succeeds
- **Performance:** Lazy-load images below the fold; aim for FCP &lt; 1.5s, LCP &lt; 2.5s where possible
- **SEO:** Meta title, description, Open Graph, Schema.org LocalBusiness (in index.html or via script)
- **Accessibility:** WCAG 2.1 AA – keyboard nav, focus states, ARIA where needed, semantic HTML, alt text
- **Responsive:** Mobile 320px+, tablet 641px+, desktop 1025px+

---

## Form (Quote)
- **Frontend:** All fields, validation, loading/success/error states, privacy checkbox, honeypot

---

## Assets & Content
- **Images:** Hero and gallery use real photos (Unsplash/Pexels → `public/images/`). Logo and certification badges can be placeholders initially.
- **Copy:** Placeholder phone, email, address, hours, license number are fine; mark for replacement.
- **Testimonials:** 5–7 placeholder reviews with name, project type, stars, quote.

---

## Success = Outstanding + Reviewable
- **Outstanding:** Each section has deliberate design (custom styling, motion, MagicUI, imagery). No generic, default-only blocks.
- **Reviewable:** Delivered in a small number of tasks so you can review quickly and rework where needed.

---
