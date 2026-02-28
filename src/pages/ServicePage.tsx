import { useParams, Navigate, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";
import { services } from "@/data/services";
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import heroHome from "@/assets/hero-home.jpg";
import heroPayroll from "@/assets/hero-payroll.jpg";
import heroTaxes from "@/assets/hero-taxes.jpg";
import heroCfo from "@/assets/hero-cfo.jpg";
import heroAp from "@/assets/hero-ap.jpg";
import heroAr from "@/assets/hero-ar.jpg";
import heroConsulting from "@/assets/hero-consulting.jpg";
import heroService1 from "@/assets/hero-service-1.jpg";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type T = Record<Lang, string>;

const heroImages: Record<string, string> = {
  bookkeeping: heroHome,
  payroll: heroPayroll,
  taxes: heroTaxes,
  "fractional-cfo": heroCfo,
  "accounts-payable": heroAp,
  "accounts-receivable": heroAr,
  "consulting-advisory": heroConsulting,
};

const accentClasses: Record<string, { border: string; bg: string; text: string }> = {
  bookkeeping: { border: "border-blue-500", bg: "bg-blue-500/10", text: "text-blue-500" },
  payroll: { border: "border-emerald-500", bg: "bg-emerald-500/10", text: "text-emerald-500" },
  taxes: { border: "border-red-500", bg: "bg-red-500/10", text: "text-red-500" },
  "fractional-cfo": { border: "border-amber-500", bg: "bg-amber-500/10", text: "text-amber-500" },
  "accounts-payable": { border: "border-violet-500", bg: "bg-violet-500/10", text: "text-violet-500" },
  "accounts-receivable": { border: "border-cyan-500", bg: "bg-cyan-500/10", text: "text-cyan-500" },
  "consulting-advisory": { border: "border-slate-600", bg: "bg-slate-500/10", text: "text-slate-600" },
};

const painPoints: Record<string, { en: string[]; fr: string[] }> = {
  bookkeeping: {
    en: ["Drowning in receipts and bank statements?", "Spending weekends reconciling accounts?", "Worried about errors in your financial records?"],
    fr: ["Noyé dans les reçus et relevés bancaires?", "Passez vos fins de semaine à rapprocher les comptes?", "Inquiet des erreurs dans vos registres financiers?"],
  },
  payroll: {
    en: ["Late payroll causing employee frustration?", "Struggling with tax remittances and compliance?", "Manually calculating deductions every pay period?"],
    fr: ["La paie en retard frustre vos employés?", "Difficulté avec les remises fiscales et la conformité?", "Calcul manuel des déductions à chaque période de paie?"],
  },
  taxes: {
    en: ["Missing filing deadlines and facing penalties?", "Unsure if you're claiming all eligible deductions?", "Worried about a CRA audit?"],
    fr: ["Manquez-vous les échéances de production?", "Incertain de réclamer toutes les déductions admissibles?", "Inquiet d'une vérification de l'ARC?"],
  },
  "fractional-cfo": {
    en: ["Making financial decisions without strategic guidance?", "Need investor-ready financials but can't afford a full-time CFO?", "Struggling to forecast cash flow accurately?"],
    fr: ["Prenez-vous des décisions financières sans orientation stratégique?", "Besoin de finances prêtes pour les investisseurs?", "Difficulté à prévoir la trésorerie?"],
  },
  "accounts-payable": {
    en: ["Vendors frustrated by late payments?", "No visibility into upcoming payment obligations?", "Manual bill payment eating up your team's time?"],
    fr: ["Fournisseurs frustrés par les paiements en retard?", "Aucune visibilité sur les obligations de paiement?", "Le paiement manuel gruge le temps de votre équipe?"],
  },
  "accounts-receivable": {
    en: ["Cash tied up in unpaid invoices?", "Spending hours chasing overdue payments?", "No system to track aging receivables?"],
    fr: ["Trésorerie bloquée dans les factures impayées?", "Passez des heures à poursuivre les paiements?", "Aucun système pour suivre les créances?"],
  },
  "consulting-advisory": {
    en: ["Navigating complex financial decisions alone?", "Need expert guidance on growth strategy?", "Unsure how to optimize your financial operations?"],
    fr: ["Naviguez seul dans des décisions financières complexes?", "Besoin d'accompagnement expert?", "Incertain de comment optimiser vos opérations?"],
  },
};

const heroHeadlines: Record<string, T> = {
  bookkeeping: { en: "Never reconcile a bank statement again.", fr: "Ne rapprochez plus jamais un relevé bancaire." },
  payroll: { en: "Your team gets paid on time. Every time.", fr: "Votre équipe est payée à temps. Chaque fois." },
  taxes: { en: "Keep more of what you earn.", fr: "Gardez plus de ce que vous gagnez." },
  "fractional-cfo": { en: "Executive financial guidance without the $300K salary.", fr: "Direction financière stratégique sans le salaire à 300 000$." },
  "accounts-payable": { en: "Vendors paid. Cash flow optimized.", fr: "Fournisseurs payés. Trésorerie optimisée." },
  "accounts-receivable": { en: "Stop chasing payments. Start collecting.", fr: "Arrêtez de courir après les paiements." },
  "consulting-advisory": { en: "Strategic insights that drive real growth.", fr: "Perspectives stratégiques pour une croissance réelle." },
};

const serviceStats: Record<string, { value: string; label: T }[]> = {
  bookkeeping: [
    { value: "99.8%", label: { en: "Accuracy Rate", fr: "Taux de précision" } },
    { value: "24h", label: { en: "Reconciliation Time", fr: "Temps de rapprochement" } },
    { value: "200+", label: { en: "Clients Served", fr: "Clients desservis" } },
  ],
  payroll: [
    { value: "0", label: { en: "Missed Payrolls", fr: "Paies manquées" } },
    { value: "100%", label: { en: "Compliance Rate", fr: "Taux de conformité" } },
    { value: "2 days", label: { en: "Setup Time", fr: "Temps de configuration" } },
  ],
  taxes: [
    { value: "$0", label: { en: "Penalties Incurred", fr: "Pénalités encourues" } },
    { value: "100%", label: { en: "On-Time Filing", fr: "Déclarations à temps" } },
    { value: "15+", label: { en: "Years of Tax Expertise", fr: "Années d'expertise fiscale" } },
  ],
  "fractional-cfo": [
    { value: "70%", label: { en: "Cost Savings vs Full-Time", fr: "Économies vs temps plein" } },
    { value: "10-20h", label: { en: "Monthly Engagement", fr: "Engagement mensuel" } },
    { value: "98%", label: { en: "Client Retention", fr: "Rétention des clients" } },
  ],
  "accounts-payable": [
    { value: "48h", label: { en: "Average Payment Cycle", fr: "Cycle de paiement moyen" } },
    { value: "95%", label: { en: "Automation Rate", fr: "Taux d'automatisation" } },
    { value: "0", label: { en: "Late Payments", fr: "Paiements en retard" } },
  ],
  "accounts-receivable": [
    { value: "35%", label: { en: "DSO Reduction", fr: "Réduction du DPO" } },
    { value: "99%", label: { en: "Collection Rate", fr: "Taux de recouvrement" } },
    { value: "< 48h", label: { en: "Invoice Turnaround", fr: "Délai de facturation" } },
  ],
  "consulting-advisory": [
    { value: "3x", label: { en: "Average ROI", fr: "ROI moyen" } },
    { value: "100+", label: { en: "Strategies Delivered", fr: "Stratégies livrées" } },
    { value: "98%", label: { en: "Satisfaction Rate", fr: "Taux de satisfaction" } },
  ],
};

/* Cross-link mapping: service slug → related service slug */
const crossLinks: Record<string, string> = {
  bookkeeping: "payroll",
  payroll: "bookkeeping",
  "accounts-payable": "accounts-receivable",
  "accounts-receivable": "accounts-payable",
  "fractional-cfo": "consulting-advisory",
  "consulting-advisory": "fractional-cfo",
};

/* ─── Reusable section components ─── */

function PainSection({ points, lang }: { points: string[]; lang: Lang }) {
  if (!points.length) return null;
  return (
    <section className="py-16 md:py-20 bg-cream" data-reveal>
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
          {lang === "en" ? "Sound Familiar?" : "Ça vous dit quelque chose?"}
        </p>
        <div className="space-y-4" data-reveal-child>
          {points.map((point, i) => (
            <p key={i} className="font-display text-xl md:text-2xl text-foreground/80">{point}</p>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 text-lg" data-reveal-child>
          {lang === "en" ? "You're not alone. Here's how we solve it." : "Vous n'êtes pas seul. Voici comment nous le résolvons."}
        </p>
      </div>
    </section>
  );
}

function StatsInline({ stats, lang }: { stats: { value: string; label: T }[]; lang: Lang }) {
  if (!stats.length) return null;
  return (
    <section className="bg-cream py-14" data-reveal>
      <div className="container mx-auto px-4">
        <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-8 text-center">
          {lang === "en" ? "Proven Results" : "Résultats prouvés"}
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {stats.map((s, i) => (
            <div key={i} className="text-center" data-reveal-child>
              <div className="font-display text-4xl md:text-5xl text-navy mb-2">{s.value}</div>
              <div className="text-xs uppercase tracking-wider text-accent font-sans font-semibold">{t(s.label, lang)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessVertical({ service, accent, lang }: { service: typeof services[0]; accent: typeof accentClasses["bookkeeping"]; lang: Lang }) {
  return (
    <section className="py-20 md:py-28 bg-background" data-reveal>
      <div className="container mx-auto px-4 max-w-3xl">
        <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">{lang === "en" ? "The Process" : "Le processus"}</p>
        <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-foreground mb-14">{lang === "en" ? "How it works" : "Comment ça fonctionne"}</h2>
        <div className="relative pl-8 border-l-2 border-accent/20 space-y-12">
          {service.process.map((p, i) => (
            <div key={i} className="relative" data-reveal-child>
              <div className="absolute -left-[41px] top-1 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold font-sans">{p.step}</div>
              <h3 className="font-display text-xl text-foreground mb-2">{t(p.title, lang)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(p.desc, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CrossLinkSection({ currentSlug, lang }: { currentSlug: string; lang: Lang }) {
  const relatedSlug = crossLinks[currentSlug];
  if (!relatedSlug) return null;
  const related = services.find((s) => s.slug === relatedSlug);
  if (!related) return null;
  return (
    <section className="py-12 bg-muted/30" data-reveal>
      <div className="container mx-auto px-4 max-w-3xl text-center" data-reveal-child>
        <p className="text-sm text-muted-foreground mb-3">
          {lang === "en" ? "Clients who use this service also benefit from" : "Les clients qui utilisent ce service bénéficient aussi de"}
        </p>
        <Button asChild variant="outline" className="rounded-full px-8 py-5 text-base font-semibold hover:-translate-y-0.5 transition-all group">
          <Link to={`/${related.slug}`}>
            {t(related.title, lang)}
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

function BenefitsSection({ service, accent, idx, lang }: { service: typeof services[0]; accent: typeof accentClasses["bookkeeping"]; idx: number; lang: Lang }) {
  return (
    <section className="py-20 md:py-28 bg-background" data-reveal>
      <div className="container mx-auto px-4">
        <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">{lang === "en" ? "The Solution" : "La solution"}</p>
        <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-foreground mb-14 max-w-lg">{lang === "en" ? "What you get with Namaca" : "Ce que vous obtenez avec Namaca"}</h2>

        {/* Layout 0: Editorial numbered cards (Bookkeeping) */}
        {idx === 0 && (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {service.benefits.map((b, i) => (
              <div key={i} className={`relative rounded-2xl p-8 bg-card border-l-4 ${accent.border} shadow-md hover:-translate-y-1 transition-transform duration-300`} data-reveal-child>
                <span className="absolute top-3 right-5 font-display text-6xl text-foreground/[0.04]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-xl text-foreground mb-2">{t(b.title, lang)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(b.desc, lang)}</p>
              </div>
            ))}
          </div>
        )}

        {/* Layout 1: Icon cards (Payroll) — no empty placeholder boxes */}
        {idx === 1 && (
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {service.benefits.map((b, i) => (
              <div key={i} className={`rounded-2xl p-8 bg-card shadow-md border-t-4 ${accent.border} hover:-translate-y-1 transition-transform`} data-reveal-child>
                <div className={`w-12 h-12 rounded-xl ${accent.bg} flex items-center justify-center mb-4`}>
                  <CheckCircle className={accent.text} size={22} />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t(b.title, lang)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(b.desc, lang)}</p>
              </div>
            ))}
          </div>
        )}

        {/* Layout 2: Trust pillars (Taxes) */}
        {idx === 2 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {service.benefits.map((b, i) => (
              <div key={i} className={`text-center rounded-2xl p-8 bg-card shadow-md border-t-4 ${accent.border} hover:-translate-y-1 transition-transform`} data-reveal-child>
                <div className={`w-14 h-14 rounded-full ${accent.bg} flex items-center justify-center mx-auto mb-4`}>
                  <CheckCircle className={accent.text} size={24} />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{t(b.title, lang)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(b.desc, lang)}</p>
              </div>
            ))}
          </div>
        )}

        {/* Layout 3: Comparison + editorial (CFO) */}
        {idx === 3 && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8" data-reveal-child>
              <div className="rounded-2xl bg-muted/50 p-8 text-center border border-border/40">
                <div className="font-display text-3xl text-foreground mb-2">$300K+</div>
                <div className="text-sm text-muted-foreground">{lang === "en" ? "Full-Time CFO Annual Cost" : "Coût annuel d'un DG à temps plein"}</div>
              </div>
              <div className={`rounded-2xl ${accent.bg} p-8 text-center border-2 ${accent.border}`}>
                <div className={`font-display text-3xl ${accent.text} mb-2`}>{lang === "en" ? "A fraction" : "Une fraction"}</div>
                <div className="text-sm text-muted-foreground">{lang === "en" ? "Namaca Fractional CFO" : "DG à temps partiel Namaca"}</div>
              </div>
            </div>
            {service.benefits.map((b, i) => (
              <div key={i} className={`flex gap-6 items-start border-l-4 ${accent.border} pl-8 py-4`} data-reveal-child>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t(b.title, lang)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(b.desc, lang)}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Layout 4: Horizontal showcase (AP) */}
        {idx === 4 && (
          <div className="max-w-4xl mx-auto space-y-0 divide-y divide-border/60">
            {service.benefits.map((b, i) => (
              <div key={i} className="grid md:grid-cols-[60px_1fr] gap-6 py-8 group hover:bg-muted/30 px-4 -mx-4 rounded-xl transition-colors" data-reveal-child>
                <div className={`font-display text-3xl ${accent.text}`}>{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-accent transition-colors">{t(b.title, lang)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(b.desc, lang)}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Layout 5: Bento grid (AR) */}
        {idx === 5 && (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {service.benefits.map((b, i) => (
              <div key={i} className={`rounded-2xl p-8 bg-card shadow-md hover:-translate-y-1 transition-transform duration-300 ${
                i === 0 ? "md:col-span-2 border-l-4 " + accent.border :
                i === 3 ? "md:col-span-2 bg-gradient-to-r from-cyan-500/5 to-accent/5 border border-border/30" :
                "border border-border/30"
              }`} data-reveal-child>
                <CheckCircle className={`${accent.text} mb-3`} size={22} />
                <h3 className="font-display text-xl text-foreground mb-2">{t(b.title, lang)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(b.desc, lang)}</p>
              </div>
            ))}
          </div>
        )}

        {/* Layout 6: Editorial alternating (Consulting) */}
        {idx === 6 && (
          <div className="max-w-4xl mx-auto space-y-16">
            {service.benefits.map((b, i) => (
              <div key={i} className={`grid md:grid-cols-[120px_1fr] gap-8 items-start ${i % 2 === 1 ? "md:ml-20" : ""}`} data-reveal-child>
                <div className={`font-display text-7xl ${accent.text} opacity-20 leading-none`}>{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="font-display text-2xl text-foreground mb-3">{t(b.title, lang)}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{t(b.desc, lang)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/" replace />;

  const accent = accentClasses[service.slug] || { border: "border-accent", bg: "bg-accent/10", text: "text-accent" };
  const points = painPoints[service.slug]?.[lang] || [];
  const heroTitle = heroHeadlines[service.slug] || service.title;
  const heroImg = heroImages[service.slug] || heroService1;
  const stats = serviceStats[service.slug] || [];
  const idx = services.indexOf(service);

  const heroSection = (
    <Hero
      variant="cinematic"
      eyebrow={t(service.title, lang)}
      title={t(heroTitle, lang)}
      subtitle={t(service.heroSubtitle, lang)}
      ctaText={lang === "en" ? "Get Started" : "Commencer"}
      ctaLink="/expertise#contact"
      heroImage={heroImg}
    />
  );

  const painSection = <PainSection points={points} lang={lang} />;
  const statsSection = <StatsInline stats={stats} lang={lang} />;
  const benefitsSection = <BenefitsSection service={service} accent={accent} idx={idx} lang={lang} />;
  const processSection = <ProcessVertical service={service} accent={accent} lang={lang} />;
  const crossLinkSection = <CrossLinkSection currentSlug={service.slug} lang={lang} />;
  const testimonialsSection = <TestimonialsSection />;
  const faqSection = <FAQSection items={service.faq} />;
  const contactSection = <ContactSection />;
  const ctaSection = <CTASection />;

  /* ─── Unique section ordering per service ─── */
  const sectionOrder: Record<number, React.ReactNode[]> = {
    // Bookkeeping: Hero → Pain → Benefits → Process → Cross-link → Testimonial → FAQ → Contact → CTA
    0: [heroSection, painSection, benefitsSection, processSection, crossLinkSection, testimonialsSection, faqSection, contactSection, ctaSection],
    // Payroll: Hero → Stats → Pain → Benefits → Process → Cross-link → Testimonial → FAQ → CTA
    1: [heroSection, statsSection, painSection, benefitsSection, processSection, crossLinkSection, testimonialsSection, faqSection, ctaSection],
    // Taxes: Hero → Pain → Benefits → Stats → Process → FAQ → Contact → CTA
    2: [heroSection, painSection, benefitsSection, statsSection, processSection, faqSection, contactSection, ctaSection],
    // CFO: Hero → Benefits (includes comparison) → Pain → Process → Stats → Testimonial → CTA
    3: [heroSection, benefitsSection, painSection, processSection, statsSection, crossLinkSection, testimonialsSection, ctaSection],
    // AP: Hero → Pain → Process → Benefits → Stats → Cross-link → FAQ → CTA
    4: [heroSection, painSection, processSection, benefitsSection, statsSection, crossLinkSection, faqSection, ctaSection],
    // AR: Hero → Pain → Benefits → Stats → Process → Cross-link → FAQ → CTA
    5: [heroSection, painSection, benefitsSection, statsSection, processSection, crossLinkSection, faqSection, ctaSection],
    // Consulting: Hero → Pain → Benefits → Process → Stats → Testimonial → Contact → CTA
    6: [heroSection, painSection, benefitsSection, processSection, statsSection, crossLinkSection, testimonialsSection, contactSection, ctaSection],
  };

  const sections = sectionOrder[idx] || [heroSection, painSection, benefitsSection, processSection, testimonialsSection, faqSection, contactSection, ctaSection];

  return (
    <Layout>
      {sections.map((section, i) => (
        <div key={i}>{section}</div>
      ))}
    </Layout>
  );
}
