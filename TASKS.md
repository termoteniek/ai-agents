## [001] Project setup and layout shell
**Label:** frontend  
**Dependencies:** None

### Description
Initialize the landing page with **React + Vite**, TypeScript, Tailwind, shadcn/ui, Framer Motion, and the design foundation. Deliver a buildable app with a **layout shell**: Navbar and Footer in place (structure and styling), and a main content area ready for sections. No content sections yet.

### Acceptance Criteria
- [ ] Vite + React + TypeScript project; `npm run build` passes
- [ ] Tailwind CSS and shadcn/ui configured
- [ ] Design tokens: PLAN.md color palette in CSS (terracotta, sage, navy, gold, cream, charcoal); Playfair Display + Open Sans loaded
- [ ] Navbar: logo (text “Deco Decoster”), nav links (Home, Services, Gallery, Testimonials, Contact) with clear spacing, CTA “Get Free Quote”, mobile hamburger + drawer. Sticky; smooth scroll to section anchors (sections not built yet, anchors are fine)
- [ ] Footer: multi-column shell (company, contact, quick links, services, social, copyright). Real structure and PLAN styling; placeholder copy ok
- [ ] Main content area: single scrollable column, ready for sections
- [ ] Responsive breakpoints: mobile 320px+, tablet 641px+, desktop 1025px+
- [ ] Nav and Footer have distinctive treatment (no default gray/white only) and hover states

---

## [002] Hero, Services, Gallery
**Label:** frontend  
**Dependencies:** 001

### Description
Build the **above-the-fold and proof** sections: Hero, Services overview, and Before/After Gallery. Each section must feel outstanding (real imagery, PLAN palette, at least one MagicUI or equivalent effect per section type).

### Acceptance Criteria
- [ ] **Hero:** Headline “Transform Your Space with Professional Painting”, subheadline (residential & commercial), primary CTA “Get Your Free Quote”, secondary “Call Now” + phone, trust badges (Licensed, Insured, Years in Business). Real hero image (Unsplash/Pexels → `public/images/`). At least one MagicUI-style effect (e.g. blur-fade, spotlight). Mobile-friendly
- [ ] **Services:** 3 cards – Interior, Exterior, Specialty (with sub-list: cabinets, decks, staining, trim). Icon, title, short description, “Learn More” / “View All Services”. Responsive grid (3 → 2 → 1). Distinctive card treatment (e.g. card-spotlight, hover). Section uses PLAN palette
- [ ] **Gallery:** Grid of project cards (6–9). Real project images (downloaded); no text-only “Project 1” cards. Filter: All / Interior / Exterior / Specialty. Card click → modal with before/after slider. “See All Projects” CTA. Lazy loading; entrance/hover effects
- [ ] All three sections use PLAN.md colors and typography; no section is default-only; every interactive element has hover state

---

## [003] Trust and conversion sections
**Label:** frontend  
**Dependencies:** 001

### Description
Build **Why Choose Us**, **Testimonials**, **Service Areas**, **License & Insurance**, and **Quote Form**. Each section must have deliberate design (layout, typography, motion, or MagicUI where it fits)—no generic blocks.

### Acceptance Criteria
- [ ] **Why Choose Us:** 6 benefit cards (Quality Materials, Attention to Detail, On-Time Completion, Clean Environment, Competitive Pricing, Satisfaction Guaranteed). Icon + short text each. 2×3 grid desktop, responsive. Distinctive section treatment and hover
- [ ] **Testimonials:** Carousel with 5–7 items (name, project type, stars, quote). Arrows/dots; “Read More Reviews”; trust line (e.g. “4.9/5 from 150+ reviews”). Placeholder data ok
- [ ] **Service Areas:** List of areas and/or styled map; CTA “Do you service my area? Contact us.” Fits PLAN styling
- [ ] **License & Insurance:** License number, insurance, certification badges (placeholders ok). Clear, scannable layout
- [ ] **Quote Form:** Name, email, phone, address, service type, description (optional), budget (optional), contact preference. Validation, submit button, loading/success/error states, privacy consent, honeypot. Styled form (no raw default shadcn only)
- [ ] Every section uses PLAN palette and has at least one distinctive treatment; all buttons/links have hover states

---

## [004] Full page assembly, SEO, accessibility, performance
**Label:** frontend  
**Dependencies:** 002, 003

### Description
Assemble the **full landing page** in order, wire nav scroll to sections, and apply **SEO**, **accessibility**, and **performance** so the page is production-ready. Single review point for “whole page + polish.”

### Acceptance Criteria
- [ ] **Assembly:** Single page with sections in order: Navbar → Hero → Services → Gallery → Why Choose Us → Testimonials → Service Areas → License & Insurance → Quote Form → Footer. Nav links scroll to correct section IDs
- [ ] **SEO:** Meta title and description, Open Graph tags, Schema.org LocalBusiness JSON-LD, favicon. Alt text on all images
- [ ] **Accessibility:** Semantic HTML (header, nav, main, section, footer). Keyboard navigation, focus states, ARIA where needed. Form labels and errors accessible. Skip-to-main optional but recommended
- [ ] **Performance:** Lazy loading for below-fold images; fonts with `font-display: swap`. Build passes; no console errors
- [ ] **Final pass:** All sections have distinctive treatment; no default-only blocks; nav and footer match PLAN; CTAs and links work. Ready for your review and rework
