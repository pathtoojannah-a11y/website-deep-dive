

# Update Namaca Site with Real Content from GitHub Repo & Live Site

## What Changes

Replace placeholder/generic content across the entire site with real data extracted from `namaca.ca` and the `bakinrob/NAMAKA-code` GitHub repository.

## Data Sources Gathered
- Live homepage content (French text, real testimonials, partner logos, contact info)
- 18 real blog posts with titles, slugs, excerpts, and dates from `posts_full.json`
- 189 asset URLs from `asset_urls.txt` (images, SVGs, icons)
- Real page structure from `pages.json` (10 pages confirmed)

---

## Implementation Steps

### 1. Update contact info & brand details in `translations.ts`
- Email: `info@namaca.com` (not `info@namaca.ca`)
- Address: `5915 Rue De Jumonville, Montréal, Québec H1M1R2, Canada`
- Phone: `+1 (514) 819-1513`
- Update footer tagline and CTA text to match live site
- Nav CTA: "Contactez-nous" / "Contact us" (not "Book a Call")

### 2. Update Home page (`Index.tsx`) with real French content
- Hero title: "Le future de la Comptabilité pour les PME et les entreprises en démarrage"
- Hero subtitle: real text from live site about Namaca's approach
- "Why Choose Us" tabs: use real French bullet points (Bureau propre vs encombré, Accès complet dans le cloud, Gagner en clarté, Au-delà de la comptabilité)
- "Why Us" numbered list: use real text (100% Online & Tech-Driven, No More Re-training, Gain Clarity, Beyond Bookkeeping, Expert Solutions, Value Innovation)
- Services section title: "Service adapté à vos besoins uniques" with real French descriptions for each service
- Stats section: "Expertise sectorielle" with real labels
- Real testimonial: Greg Pritchard, Jun 25, 2024 — actual review text
- Partners: use real logo image URLs from namaca.ca (Xero, Dext, Gusto, Plooto)

### 3. Update service descriptions in `services.ts` with real French text
- Bookkeeping/Comptabilité: real description from live site
- Payroll/Service de paie: real description
- Taxes/Rapport de taxes: real description about GST/HST/PST
- Fractional CFO: real text
- Accounts Payable/Comptes fournisseurs: real text
- Accounts Receivable/Comptes clients: real text
- Consulting/Services-Conseils: real text
- Update service page titles to match live site (e.g., "Tenue de Livres", "Traitement de la Paie", "Taxes de Ventes", "Comptes Payables", "Comptes Recevables", "Service-Conseil")

### 4. Update Resources page with real 18 blog posts
Replace the current 18 placeholder posts in `resources.ts` with the real posts from `posts_full.json`:
- Real titles (e.g., "5 steps to preparing for a financial audit", "Bitcoins aren't money, at least according to the CRA")
- Real excerpts from the API
- Real slugs matching the WordPress URLs
- Real dates (all from September 2024)
- Note: these are English-only posts on the live site — keep as-is

### 5. Add real images via external URLs
- Partner logos: use `namaca.ca/wp-content/uploads/2024/09/xero-1.png`, `DEXTools-1.png`, `175069-1.png` (Gusto), `svg0-1.png`, `Ploto-black-png-logo-1.png`
- Service icons: use the `hugeicons_calculate-*.svg` URLs from the asset list
- Hero image: use `Frame-1000003816.png` and `1195156_1150-1.png`
- Testimonial avatar: use `image-1.png` (Greg Pritchard)
- "Why Choose Us" tab images: use `Frame-1000003751-1.png` through `Frame-1000003751-4.png` (Nov 2024)
- Service section side image: use `6782-1-1.png` and `6782-1.png`
- Stats section icons: use the `Frame-1000003756-*.svg` files
- Update `PartnersBar.tsx` to render `<img>` tags instead of text
- Update `Hero.tsx` to support image content on the right side
- Update `TestimonialsSection.tsx` to show avatar images

### 6. Update Footer with real data
- Social links: Facebook, Instagram, X (Twitter), Google+
- Real navigation: Accueil, Expertise, Nos services, Ressources
- Real contact block matching live site layout

### 7. Typography update
- Swap font import from `Plus Jakarta Sans` to `Open Sauce Sans` (or closest available — the live site uses this for headings)
- Keep `Inter` for body text

---

## Technical Notes
- Images will be referenced directly from `namaca.ca/wp-content/uploads/` — no local downloads needed
- The site is primarily French on the live version; English translations will be maintained as secondary
- No backend changes required — all updates are to static data files and components
- ~8 files will be modified: `translations.ts`, `Index.tsx`, `services.ts`, `resources.ts`, `PartnersBar.tsx`, `TestimonialsSection.tsx`, `Hero.tsx`, `Footer.tsx`, `index.css`

