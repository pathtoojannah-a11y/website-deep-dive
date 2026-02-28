

# Bold Premium Redesign — Namaca.ca

## Creative Direction

**Concept: "The Quiet Authority"** — A site that whispers luxury and screams competence. Dark cinematic heroes, generous whitespace, serif/sans-serif pairing, editorial layouts that feel like a premium financial publication. No card grids. No template patterns. Every page has its own rhythm.

**Typography upgrade:** DM Serif Display (headings) + Inter (body) — serif signals authority and premium.

**Color refinement:** Add `--gold: 42 78% 52%` as trust/secondary accent alongside orange. Dark sections use deep navy with subtle radial glows.

---

## Implementation Plan (20+ files, ground-up rewrite of all pages and sections)

### 1. Design System Overhaul
**Files:** `tailwind.config.ts`, `src/index.css`

- Font: Import `DM Serif Display` for headings (replace Plus Jakarta Sans)
- Add `--gold` CSS variable, add `font-serif` to tailwind config
- Add scroll-reveal keyframes (`reveal-up`, `reveal-fade`) with staggered delays
- Add `overflow-x: hidden` to body/html
- Fluid type scale using clamp() for hero, h2, h3, body
- Add subtle radial glow utility classes for dark sections

### 2. Scroll Reveal Hook
**New file:** `src/hooks/useScrollReveal.ts`

- IntersectionObserver-based hook
- Adds `.revealed` class on intersection (threshold 0.12)
- Stagger children support via data attributes
- `prefers-reduced-motion` respected

### 3. Logo Integration
**New file:** `src/assets/logo.svg` (copy uploaded SVG)

- Use in Navbar and Footer replacing the "N" square placeholder

### 4. Navbar — Refined
**File:** `src/components/Navbar.tsx`

- Use real SVG logo
- Add scroll-triggered backdrop blur + subtle bottom border on scroll
- Services dropdown: scale+fade animation instead of instant appear
- CTA button: "Book a Call" / "Planifier un appel" (more conversion-focused than "Contact Us")
- Tighter, more refined spacing

### 5. Layout Shell
**File:** `src/components/Layout.tsx`

- Add `overflow-x-hidden` wrapper div
- Integrate scroll reveal initialization

### 6. Home Page — Complete Reimagination
**File:** `src/pages/Index.tsx` (full rewrite)

**Flow (10 distinct sections, no two alike):**

1. **Cinematic Hero** — Full-bleed dark navy background, large DM Serif headline left-aligned ("Your finances, handled. So you can focus on growth."), ghost subtitle, dual CTA (primary orange + ghost outline), trust strip below ("Trusted by 200+ Canadian businesses"). Right side: generated AI image of modern accounting office/dashboard.

2. **Partner Logo Strip** — Grayscale logos, subtle, tight. "Powered by best-in-class tools"

3. **Service Showcase** — NOT a card grid. Horizontal list layout: each service is a full-width row with index number (01-07), title, one-line outcome description, and arrow. Hover: left border accent + bg tint. Links to service pages.

4. **Split Media: "Why Namaca"** — Two-column: left is large serif pull-quote about outcomes, right is AI-generated image of professional in modern office. Below: 3 trust pillars (icon + stat + label) inline.

5. **Dark Impact Stats** — Full-bleed navy section with large serif numbers (98%, 15+, 200+, 99%) in gold/orange, small labels below. Radial glow decorative element.

6. **Editorial Spread: "Our Approach"** — 4 blocks, each styled differently via nth-child (dark card, bordered card, gradient tint card, clean card). Content: Clean Desk, Cloud Access, Gain Clarity, Beyond Books — rewritten as outcome statements.

7. **Pull-Quote Testimonial** — Single large serif italic quote on cream background, oversized decorative quote mark (opacity 0.08), author with avatar, role, company. No carousel — one powerful quote.

8. **FAQ** — Refined accordion with smooth height animation, cream background

9. **CTA Strip** — Full-bleed orange gradient, white text, single CTA button ("Book a Free Consultation"), confident copy

10. **Footer** — Dark navy, 4-column grid, SVG logo, gold column headings, social icons

### 7. Expertise Page — Editorial Authority
**File:** `src/pages/Expertise.tsx` (full rewrite)

- **Cinematic hero** with AI-generated image (dark overlay, healthcare/finance setting)
- **Industry verticals** as alternating split-media sections (image left/text right, then flipped) — NOT a card grid
- **Capabilities** as a numbered editorial list with large faded index numbers
- Dark stats section mid-page
- Testimonial pull-quote
- Contact section + CTA

### 8. Service Pages — Each Unique
**File:** `src/pages/ServicePage.tsx` (full rewrite)
**File:** `src/data/services.ts` (enhanced with accent colors, outcome copy, pain points)

Each service page gets:
- **Unique accent color** (Bookkeeping=blue, Payroll=green, Taxes=red, CFO=gold, AP=purple, AR=teal, Consulting=navy)
- **Pain point opener** before benefits ("Are you drowning in receipts?")
- **Outcome-driven hero headline** (not the service name — the RESULT)

Layout variation per service (rotating through patterns):
- Bookkeeping: Editorial spread benefits + bento grid process
- Payroll: Split-media benefits + timeline process
- Taxes: Trust pillars benefits + numbered list process
- CFO: Cinematic split + editorial spread
- AP: Horizontal showcase + timeline
- AR: Bento grid + split-media
- Consulting: Full editorial + pull-quote heavy

Each page: Hero → Pain Points → Solution (editorial) → Process → Stats/Proof → Testimonial → FAQ → CTA

### 9. Resources Page — Magazine Feel
**File:** `src/pages/Resources.tsx` (rewrite)

- Featured article (first post) gets large hero card treatment (full-width, image bg, overlay text)
- Category filter tabs
- Remaining posts in varied grid (not uniform 3-col): first row 2-col wide, then 3-col, alternating
- Cards with hover lift + shadow + category badge

### 10. Section Components — All Rebuilt
**Files to rewrite:**
- `src/components/sections/Hero.tsx` — Support cinematic (dark full-bleed) and split-media variants
- `src/components/sections/CTASection.tsx` — Orange gradient full-bleed strip
- `src/components/sections/StatsSection.tsx` — Dark impact with serif numbers in gold, radial glow
- `src/components/sections/TestimonialsSection.tsx` — Large pull-quote style, no carousel
- `src/components/sections/PartnersBar.tsx` — Grayscale + hover color, tighter layout
- `src/components/sections/FAQSection.tsx` — Smooth animated accordion, cream bg
- `src/components/sections/ContactSection.tsx` — Bottom-border inputs, floating labels feel, pill submit button, "We respond within 24h" microcopy

### 11. New Shared Components
- `src/components/sections/ServiceShowcase.tsx` — Horizontal numbered list for home page
- `src/components/sections/EditorialSpread.tsx` — Reusable nth-child-styled block grid
- `src/components/sections/PainPoints.tsx` — "Are you struggling with..." section for service pages

### 12. Copy Rewrite
All copy updated across `translations.ts`, `services.ts`, `resources.ts`, and inline page content:
- Hero headlines: outcome-driven, max 10-12 words
- Service descriptions: business impact, not feature lists
- CTA copy: "Book a Call" / "Planifier un appel" (specific, low-friction)
- Eyebrow labels above every section heading

### 13. AI Image Generation
Generate 4-6 images using the AI image tool:
- Home hero: Modern accounting office with warm lighting, dashboard screens visible
- Expertise hero: Professional in executive setting reviewing financial reports
- Service hero variants: 2-3 contextual images (payroll team scene, tax documents on desk, CFO boardroom)
- These get stored as base64 or referenced inline

### 14. Footer — Premium Dark
**File:** `src/components/Footer.tsx` (rewrite)
- SVG logo, gold column headings, 4-column layout
- Thin 1px divider above copyright
- Social icons in circular containers

---

## Files Changed Summary
- **Modified (13):** `tailwind.config.ts`, `index.css`, `translations.ts`, `services.ts`, `resources.ts`, `Navbar.tsx`, `Footer.tsx`, `Layout.tsx`, `Index.tsx`, `Expertise.tsx`, `Resources.tsx`, `ServicePage.tsx`, all 7 section components
- **New (4):** `useScrollReveal.ts`, `ServiceShowcase.tsx`, `EditorialSpread.tsx`, `PainPoints.tsx`, `logo.svg`
- **Total: ~17-20 files**

