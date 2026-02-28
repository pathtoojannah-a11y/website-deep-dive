

# Fix Pass — Research-Informed Service Page Differentiation + Visual Polish

## Research Findings

From analyzing 20+ top B2B and professional services websites, here are the key patterns that differentiate service pages:

**1. Each service page should feel like its own mini-landing page** — not a template with swapped text. The best sites (HITT, Toll Brothers, Painter Bros) use completely different section ordering, visual treatments, and content density per service.

**2. Lead with pain/outcome, not the service name** — "Drowning in receipts?" converts better than "Bookkeeping Services". Already doing this partially.

**3. Social proof AT the decision point** — stats, testimonials, and client logos placed mid-page near CTAs, not isolated in their own section. Best sites weave proof INTO the content.

**4. Process transparency builds trust** — step-by-step breakdowns with clear deliverables. Vertical timelines with scroll animation work best (WyattWorks, Millhouse).

**5. Cross-link related services** — "Clients who use Bookkeeping also benefit from our Fractional CFO services." This increases page views and mirrors how clients think.

**6. Vary content density** — some services need deep explanation (CFO, Consulting), others need quick clarity (Payroll, AP). Page length should match complexity.

**7. Avoid identical section ordering** — the #1 giveaway of template sites. Reorder: some pages lead with process, others with stats, others with comparison tables.

---

## Implementation Plan

### 1. Lighten Hero Overlays
**File:** `Hero.tsx`
- Change image `opacity-30` to `opacity-45`
- Lighten gradient from `via-navy/60` to `via-navy/40`

### 2. Fix Navbar Subtitle Visibility
**File:** `Navbar.tsx`
- Already has "Cloud-Based Accounting" subtitle — increase size from `text-[9px]` to `text-[10px]`, make it more visible on both transparent and scrolled states

### 3. Regenerate 4 Images
- E-commerce: online storefront, shipping boxes, product shelves (NOT RFID/inventory accounting)
- Professional Services: woman in modern office setting (user liked this)
- Payroll: team/employees, paychecks, HR-related
- Fractional CFO: clean, professional executive setting

### 4. Fix Service Page Stats Section
**File:** `ServicePage.tsx`
- Change from `bg-navy text-gold` to `bg-cream` with `text-navy` values and `text-accent` labels
- Better centered, cleaner look

### 5. Remove Duplicate Before/After Image
**File:** `ServicePage.tsx`
- Remove the bookkeeping "From chaos to clarity" section (lines 318-334) — same image already on home page

### 6. Fix Big Gaps (Payroll Split-Media)
**File:** `ServicePage.tsx`
- The `h-48` colored placeholder divs in payroll layout (idx===1, line 217) create dead space. Replace with actual content — use the service accent icon grid or remove the empty box entirely.

### 7. Convert Bookkeeping Process to Vertical
**File:** `ServicePage.tsx`
- Change horizontal timeline (idx===0) to vertical like other services for consistency and better scroll animation

### 8. Make Service Pages More Distinct (Section Reordering)
**File:** `ServicePage.tsx`
- **Bookkeeping** (idx 0): Hero → Pain → Benefits → Process → Cross-link (Payroll) → Testimonial → FAQ → Contact → CTA
- **Payroll** (idx 1): Hero → Stats → Pain → Benefits → Process → Cross-link (Bookkeeping) → Testimonial → FAQ → CTA
- **Taxes** (idx 2): Hero → Pain → Benefits → Stats → Process → FAQ → Contact → CTA
- **Fractional CFO** (idx 3): Hero → Comparison → Pain → Benefits → Process → Stats → Testimonial → CTA
- **AP** (idx 4): Hero → Pain → Flow Diagram Process → Benefits → Stats → Cross-link (AR) → FAQ → CTA
- **AR** (idx 5): Hero → Pain → Benefits → Stats → Process → Cross-link (AP) → FAQ → CTA
- **Consulting** (idx 6): Hero → Pain → Editorial Benefits → Process → Stats → Testimonial → Contact → CTA

Add a "Related Services" cross-link component between sections for each service.

### 9. Translate All Resources to French
**File:** `src/data/resources.ts`
- All 18 posts currently have identical EN text in the FR fields. Translate all titles and excerpts to proper French.

### 10. Fix Resources Category Filter for FR
**File:** `Resources.tsx`
- Category buttons are hardcoded English ("All", "Accounting", etc.)
- When in FR mode, categories should show French equivalents
- Filter logic should match against the current language's category value

### 11. Fix Resources Layout Jump
**File:** `Resources.tsx`
- When switching from "All" to a category, the featured article disappears causing content jump. Use consistent grid layout regardless of filter state.

---

## Files Changed
- `Hero.tsx` — lighter overlays
- `Navbar.tsx` — subtitle visibility
- `ServicePage.tsx` — stats redesign, remove duplicate image, fix gaps, vertical process, section reordering, cross-links
- `Expertise.tsx` — new industry images
- `resources.ts` — full FR translations
- `Resources.tsx` — fix category filter + layout
- 4 new AI-generated images

