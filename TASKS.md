## [001] Setup Next.js project with Tailwind CSS and shadcn/ui
**Label:** frontend
**Dependencies:** None

### Description
Initialize the Deco Decoster landing page project with Next.js 14 (App Router), Tailwind CSS, and shadcn/ui component library. Configure the project structure, install dependencies, and set up the basic styling foundation with the rustic & organic color palette.

### Acceptance Criteria
- [ ] Next.js 14 project created with App Router
- [ ] TypeScript configured
- [ ] Tailwind CSS installed and configured
- [ ] shadcn/ui initialized with rustic theme colors
- [ ] Custom color palette configured in globals.css (terracotta, sage green, warm grays, navy blue)
- [ ] Font setup: Playfair Display for headings, Open Sans for body text
- [ ] Basic layout component with responsive navbar placeholder
- [ ] Project builds successfully with `npm run build`

---

## [002] Create Navbar component
**Label:** frontend
**Dependencies:** 001

### Description
Create a responsive navigation bar component with logo, navigation links, mobile hamburger menu, and CTA button. The navbar should be sticky/fixed at the top with smooth transitions.

### Acceptance Criteria
- [ ] Navbar component with logo (text-based "Deco Decoster" for now)
- [ ] Desktop navigation links: Home, Services, Gallery, Testimonials, Contact
- [ ] Mobile hamburger menu with slide-in/slide-out animation
- [ ] CTA button "Get Free Quote" visible on desktop
- [ ] Sticky/fixed positioning on scroll
- [ ] Smooth scroll to sections when clicking nav links
- [ ] Active state highlighting for current section
- [ ] Responsive breakpoints: mobile (320px+), tablet (641px+), desktop (1025px+)

---

## [003] Create Hero section with before/after slider
**Label:** frontend
**Dependencies:** 001

### Description
Build the hero section featuring a before/after image slider component, headline, subheadline, dual CTA buttons, and trust badges. This is the primary conversion point above the fold.

### Acceptance Criteria
- [ ] Before/after slider component with draggable handle
- [ ] Smooth slider transition with percentage indicator
- [ ] Hero headline: "Transform Your Space with Professional Painting"
- [ ] Subheadline with residential & commercial mention
- [ ] Primary CTA button: "Get Your Free Quote"
- [ ] Secondary CTA: "Call Now" with phone number
- [ ] Trust badges section (Licensed, Insured, Years in Business)
- [ ] Subtle paint texture background overlay
- [ ] Mobile-responsive layout with stacked CTAs
- [ ] Placeholder images for before/after (use placeholder service)

---

## [004] Create Services section with card grid
**Label:** frontend
**Dependencies:** 002

### Description
Create a services overview section with a responsive card grid displaying interior painting, exterior painting, and specialty services. Each card should have an icon, title, description, and learn more link.

### Acceptance Criteria
- [ ] Service card component with icon, title, description, link
- [ ] Three main service cards: Interior, Exterior, Specialty
- [ ] Specialty services sub-list (cabinets, decks, staining, trim)
- [ ] Responsive grid: 3 columns desktop, 2 tablet, 1 mobile
- [ ] Hover effects on cards (shadow, slight lift)
- [ ] Paint-themed icons (use Heroicons or Feather Icons)
- [ ] "View All Services" button
- [ ] Section heading and intro text
- [ ] Smooth transitions on hover

---

## [005] Create Before/After Gallery section
**Label:** frontend
**Dependencies:** 003

### Description
Build a gallery section showcasing project transformations with before/after sliders. Include filtering by service type, project cards with metadata, and modal/lightbox for full view.

### Acceptance Criteria
- [ ] Gallery grid with 6-9 project cards
- [ ] Filter buttons: All, Interior, Exterior, Specialty
- [ ] Each card shows thumbnail, title, service type tag, location
- [ ] Clicking card opens modal with full before/after slider
- [ ] Modal with close button and keyboard escape support
- [ ] "See All Projects" button
- [ ] Responsive grid layout
- [ ] Lazy loading for images
- [ ] Placeholder project data with realistic examples

---

## [006] Create Why Choose Us section
**Label:** frontend
**Dependencies:** 002

### Description
Create a benefits section highlighting Deco Decoster's key differentiators. Display 6 benefit cards with icons and descriptions in a 2x3 grid layout.

### Acceptance Criteria
- [ ] 6 benefit cards: Quality Materials, Attention to Detail, On-Time Completion, Clean Environment, Competitive Pricing, Satisfaction Guaranteed
- [ ] Icon for each benefit
- [ ] Brief description text for each
- [ ] 2x3 grid layout on desktop, 2x1 on tablet, 1 column mobile
- [ ] Section heading and intro paragraph
- [ ] Subtle background texture or color
- [ ] Hover effects on cards

---

## [007] Create Testimonials section with carousel
**Label:** frontend
**Dependencies:** 002

### Description
Build a testimonials section with a carousel/slider component displaying customer reviews. Include customer names, project types, star ratings, and review text.

### Acceptance Criteria
- [ ] Testimonial carousel with auto-play and manual navigation
- [ ] Each testimonial shows: customer name, project type, location, stars, quote
- [ ] Navigation arrows and dot indicators
- [ ] Responsive: 1 testimonial visible on mobile, 2-3 on desktop
- [ ] Star rating component
- [ ] "Read More Reviews" button
- [ ] Trust badge: "4.9/5 Average Rating from 150+ Reviews"
- [ ] Placeholder testimonial data (5-7 reviews)
- [ ] Smooth carousel transitions

---

## [008] Create Service Areas section with map
**Label:** frontend
**Dependencies:** 002

### Description
Create a service areas section showing coverage areas with an interactive map component and list of cities/neighborhoods served.

### Acceptance Criteria
- [ ] Styled map component (can use static image or embed Google Maps)
- [ ] Coverage area highlighted on map
- [ ] List of primary cities/neighborhoods
- [ ] List of secondary areas with note about additional fees
- [ ] CTA: "Do You Service My Area? Contact us!"
- [ ] Section heading and intro text
- [ ] Responsive layout with map above/based on breakpoint
- [ ] Placeholder map or styled image

---

## [009] Create License & Insurance section
**Label:** frontend
**Dependencies:** 002

### Description
Build a credibility section displaying license number, insurance coverage details, certifications, and professional badges.

### Acceptance Criteria
- [ ] License number prominently displayed
- [ ] Insurance coverage information (General Liability, Workers' Compensation)
- [ ] Paint manufacturer certification badges (Benjamin Moore, Sherwin Williams)
- [ ] Professional association badges
- [ ] "Fully Licensed & Insured" heading
- [ ] Reassuring text about customer protection
- [ ] Badge/image placeholders for certifications
- [ ] Clean, professional layout

---

## [010] Create Quote Form component
**Label:** frontend
**Dependencies:** 002

### Description
Build a comprehensive quote request form with all required fields, client-side validation, success/error states, and email submission integration.

### Acceptance Criteria
- [ ] Form fields: Name, Email, Phone, Address (all required)
- [ ] Service type dropdown (Interior, Exterior, Cabinet, Deck, Multiple, Other)
- [ ] Project description textarea (optional)
- [ ] Budget range dropdown (optional)
- [ ] Contact method radio buttons (Email, Phone, Either)
- [ ] Client-side validation with error messages
- [ ] Submit button with loading state
- [ ] Success message after submission
- [ ] Error handling for failures
- [ ] GDPR/privacy consent checkbox
- [ ] Honeypot field for spam protection
- [ ] Responsive form layout

---

## [011] Create Footer component
**Label:** frontend
**Dependencies:** 002

### Description
Create a multi-column footer with company info, contact details, business hours, quick links, services list, and social media links.

### Acceptance Criteria
- [ ] 4-column layout on desktop, stacked on mobile
- [ ] Column 1: Logo, tagline, brief description
- [ ] Column 2: Contact info (phone, email, address, hours)
- [ ] Column 3: Quick links (Home, Services, Gallery, About, Testimonials, Contact)
- [ ] Column 4: Services list
- [ ] Bottom bar with copyright, Privacy Policy, Terms links
- [ ] Social media icons (Facebook, Instagram, LinkedIn)
- [ ] Responsive stacking on mobile
- [ ] Hover effects on links

---

## [012] Create landing page layout and assemble all sections
**Label:** frontend
**Dependencies:** 002, 003, 004, 005, 006, 007, 008, 009, 010, 011

### Description
Create the main landing page that assembles all sections in the correct order. Add smooth scrolling, section spacing, and ensure responsive layout flows correctly.

### Acceptance Criteria
- [ ] Main page at / route with all sections in order:
  1. Hero
  2. Services
  3. Gallery
  4. Why Choose Us
  5. Testimonials
  6. Service Areas
  7. License & Insurance
  8. Quote Form
  9. Footer
- [ ] Smooth scroll behavior for anchor links
- [ ] Consistent section spacing (padding)
- [ ] Alternating background colors for visual interest
- [ ] Smooth scroll to section from navbar links
- [ ] Page loads quickly with optimized images
- [ ] Mobile navigation works correctly
- [ ] All CTAs lead to correct sections/anchors

---

## [013] Implement SEO metadata and optimization
**Label:** frontend
**Dependencies:** 012

### Description
Add comprehensive SEO metadata including title, description, Open Graph tags, Twitter cards, and Schema.org markup for local business.

### Acceptance Criteria
- [ ] Meta title: "Deco Decoster | Professional House Painting Services"
- [ ] Meta description with keywords
- [ ] Open Graph tags (title, description, image, url)
- [ ] Twitter Card tags
- [ ] Schema.org LocalBusiness JSON-LD markup
- [ ] Canonical URL
- [ ] Sitemap.xml generation
- [ ] Robots.txt configuration
- [ ] Favicon and apple touch icon
- [ ] Image alt text on all images

---

## [014] Implement accessibility features
**Label:** frontend
**Dependencies:** 012

### Description
Ensure the landing page meets WCAG 2.1 AA accessibility standards with proper ARIA labels, keyboard navigation, focus states, and color contrast.

### Acceptance Criteria
- [ ] All interactive elements keyboard accessible
- [ ] ARIA labels on buttons, form inputs, navigation
- [ ] Focus visible states on all interactive elements
- [ ] Color contrast ratios meet WCAG AA standards
- [ ] Alt text on all images
- [ ] Skip to main content link
- [ ] Form field labels properly associated
- [ ] Error messages announced to screen readers
- [ ] Semantic HTML structure (header, nav, main, section, footer)
- [ ] Test with keyboard-only navigation

---

## [015] Optimize performance and image loading
**Label:** frontend
**Dependencies:** 012

### Description
Optimize page performance with lazy loading, image optimization, code splitting, and caching strategies to meet Core Web Vitals targets.

### Acceptance Criteria
- [ ] Images use Next.js Image component with WebP format
- [ ] Lazy loading for images below the fold
- [ ] Before/after slider images optimized
- [ ] Code splitting for route-based chunks
- [ ] Critical CSS inlined
- [ ] Fonts loaded with font-display: swap
- [ ] Lighthouse score > 90 for Performance
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

---

## [016] Set up form backend integration (email-only)
**Label:** backend
**Dependencies:** 010

### Description
Create API endpoint for quote form submission with email service integration (SendGrid, Mailgun, or similar). Implement spam protection and email template.

### Acceptance Criteria
- [ ] API route at /api/quote for POST requests
- [ ] Request validation (Zod or similar)
- [ ] Email service integration configured
- [ ] Email template with all form fields formatted
- [ ] Auto-reply confirmation email to customer
- [ ] Honeypot field validation
- [ ] Rate limiting to prevent abuse
- [ ] Error handling and logging
- [ ] Environment variables for API keys
- [ ] Test email sent successfully

---

## [017] Final review and polish
**Label:** frontend
**Dependencies:** 013, 014, 015, 016

### Description
Conduct final review of the entire landing page, fix any remaining issues, add polish touches, and prepare for deployment.

### Acceptance Criteria
- [ ] All acceptance criteria from previous tasks verified
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Smooth animations and transitions verified
- [ ] Loading states work correctly
- [ ] Error states handled gracefully
- [ ] Content proofreading (no typos, consistent tone)
- [ ] All placeholder content replaced or marked for replacement
- [ ] Final Lighthouse scores: Performance > 90, Accessibility > 90, SEO > 90
- [ ] Build passes without errors or warnings
- [ ] Ready for production deployment

---
