

# Visual & Image Overhaul — Based on 12 B2B Sites Analyzed

## Core Finding

After scanning Ramp, Bench, Gusto, Pilot, Stripe, Mercury, Brex, Rippling, BILL, Xero, FreshBooks, and Wave — none use generic stock photography. They all use one of three visual strategies:

1. **Product UI mockups** (Ramp, Gusto, FreshBooks, BILL, Wave) — screenshots of their actual dashboard/interface
2. **Real people + product overlays** (Bench, Pilot, Rippling) — real team member with floating UI elements
3. **Custom illustration or abstract art** (Stripe, Xero, Mercury) — artistic, brand-specific visuals

Namaca currently uses AI-generated stock photos behind dark overlays on every page. This is the single biggest tell that it's a template site.

## What Changes

### 1. Replace hero background images with CSS-built "product mockup" visuals

Since Namaca doesn't have a real product to screenshot, we build stylized dashboard/UI mockup components in React+CSS that represent each service's output. These replace the stock photos entirely.

- **Home hero**: Keep cinematic bg photo (it works for the home page like Mercury does) but add a floating dashboard card element on the right side showing sample metrics (like Ramp's hero)
- **Bookkeeping**: Light bg split hero (like Gusto payroll) — text left, a CSS-built "Xero dashboard" mockup card on the right showing sample transactions/reconciliation
- **Payroll**: Centered hero on cream bg (like Ramp bill-pay) — text centered, below it a CSS mockup showing a payroll summary card
- **Taxes**: Keep cinematic dark hero (gravitas) but overlay a floating "Tax Filing Progress" card UI element
- **CFO**: Keep cinematic dark hero, add a floating "Financial Overview" dashboard card
- **AP/AR**: Light bg split, with CSS invoice/payment flow mockup cards
- **Consulting**: Editorial hero (large text, no image — like Stripe's approach)

### 2. Build reusable `DashboardMockup` component

A new component that renders a stylized card resembling a SaaS dashboard. Content varies per service:
- Bookkeeping: transaction list + reconciliation status
- Payroll: payroll summary with employee count + next run date
- Taxes: filing progress bar + deadline
- CFO: revenue chart + KPI cards
- AP: bill queue with approval status
- AR: invoice aging summary

Built with Tailwind — rounded cards, subtle shadows, small text, accent-colored status indicators. Positioned with CSS transforms (slight rotation, floating effect) like Ramp/Bench.

### 3. Add `IconBenefitStrip` component (like Gusto payroll)

Horizontal row of 4-5 icons with short labels on a colored background strip, placed right after the hero on select pages. Visible in the Gusto payroll screenshot.

### 4. Add `InlineTestimonial` component (like Bench/Pilot)

A single pull-quote placed between feature sections. Large quote marks, customer name, company name. Not a full testimonial carousel — just one impactful quote.

### 5. Vary hero styles per service page

Using the existing `Hero.tsx` component, add a `"centered"` variant (light bg, centered text, visual below — like Ramp bill-pay). Assign:
- Bookkeeping, AP, AR: `split` variant on light bg
- Payroll: `centered` variant on cream bg
- Taxes, CFO: `cinematic` (dark) with floating UI card
- Consulting: `cinematic` editorial (no image, just large text)

### 6. Fix section background alternation

Enforce strict alternation: white -> cream -> white -> navy -> white. No two adjacent sections should share the same background color.

---

## Files to Create
- `src/components/sections/DashboardMockup.tsx` — CSS-built product UI cards per service
- `src/components/sections/IconBenefitStrip.tsx` — horizontal icon + label strip
- `src/components/sections/InlineTestimonial.tsx` — mid-page pull-quote

## Files to Modify
- `src/components/sections/Hero.tsx` — add `centered` variant, support dashboard mockup as child
- `src/pages/ServicePage.tsx` — integrate new components, vary hero types, fix bg alternation
- `src/pages/Index.tsx` — add floating dashboard mockup to home hero

## Technical Details
- Dashboard mockup cards use pure Tailwind CSS (rounded-2xl, shadow-xl, bg-white, small text)
- Positioned with `transform: rotate(-3deg)` and `translateY` for floating effect
- Each service gets a unique mockup showing relevant data (transactions, payroll, invoices)
- No new images needed — everything is CSS/React components
- Icon benefit strip uses lucide-react icons already installed

