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
import heroService1 from "@/assets/hero-service-1.jpg";
import heroService2 from "@/assets/hero-service-2.jpg";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type T = Record<Lang, string>;

const accentColors: Record<string, string> = {
  bookkeeping: "from-blue-500/10 to-blue-600/5 border-blue-500",
  payroll: "from-emerald-500/10 to-emerald-600/5 border-emerald-500",
  taxes: "from-red-500/10 to-red-600/5 border-red-500",
  "fractional-cfo": "from-amber-500/10 to-amber-600/5 border-amber-500",
  "accounts-payable": "from-violet-500/10 to-violet-600/5 border-violet-500",
  "accounts-receivable": "from-cyan-500/10 to-cyan-600/5 border-cyan-500",
  "consulting-advisory": "from-slate-500/10 to-slate-600/5 border-slate-500",
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
    fr: ["Prenez-vous des décisions financières sans orientation stratégique?", "Besoin de finances prêtes pour les investisseurs sans pouvoir payer un DG à temps plein?", "Difficulté à prévoir la trésorerie?"],
  },
  "accounts-payable": {
    en: ["Vendors frustrated by late payments?", "No visibility into upcoming payment obligations?", "Manual bill payment eating up your team's time?"],
    fr: ["Fournisseurs frustrés par les paiements en retard?", "Aucune visibilité sur les obligations de paiement?", "Le paiement manuel des factures gruge le temps de votre équipe?"],
  },
  "accounts-receivable": {
    en: ["Cash tied up in unpaid invoices?", "Spending hours chasing overdue payments?", "No system to track aging receivables?"],
    fr: ["Trésorerie bloquée dans les factures impayées?", "Passez des heures à poursuivre les paiements en retard?", "Aucun système pour suivre les créances?"],
  },
  "consulting-advisory": {
    en: ["Navigating complex financial decisions alone?", "Need expert guidance on growth strategy?", "Unsure how to optimize your financial operations?"],
    fr: ["Naviguez seul dans des décisions financières complexes?", "Besoin d'accompagnement expert en stratégie de croissance?", "Incertain de comment optimiser vos opérations financières?"],
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

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/" replace />;

  const accent = accentColors[service.slug] || "from-accent/10 to-accent/5 border-accent";
  const points = painPoints[service.slug]?.[lang] || [];
  const heroTitle = heroHeadlines[service.slug] || service.title;
  const heroImg = service.slug === "bookkeeping" || service.slug === "taxes" || service.slug === "accounts-payable" ? heroService1 : heroService2;

  // Alternate layout patterns based on service index
  const idx = services.indexOf(service);
  const useTimeline = idx % 3 === 1;
  const useBento = idx % 3 === 0;

  return (
    <Layout>
      {/* Hero */}
      <Hero
        variant="cinematic"
        eyebrow={t(service.title, lang)}
        title={t(heroTitle, lang)}
        subtitle={t(service.heroSubtitle, lang)}
        ctaText={lang === "en" ? "Get Started" : "Commencer"}
        ctaLink="/expertise#contact"
        heroImage={heroImg}
      />

      {/* Pain Points */}
      {points.length > 0 && (
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
      )}

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-background" data-reveal>
        <div className="container mx-auto px-4">
          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">{lang === "en" ? "The Solution" : "La solution"}</p>
          <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-foreground mb-14 max-w-lg">{lang === "en" ? "What you get with Namaca" : "Ce que vous obtenez avec Namaca"}</h2>
          {useBento ? (
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {service.benefits.map((b, i) => (
                <div key={i} className={`rounded-2xl p-8 bg-gradient-to-br ${accent.split(" ").slice(0, 2).join(" ")} border border-border/30 hover:-translate-y-1 transition-transform`} data-reveal-child>
                  <CheckCircle className="text-accent mb-4" size={24} />
                  <h3 className="font-display text-xl text-foreground mb-2">{t(b.title, lang)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(b.desc, lang)}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6 max-w-3xl">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex gap-5 items-start" data-reveal-child>
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="text-accent" size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-1">{t(b.title, lang)}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t(b.desc, lang)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-cream" data-reveal>
        <div className="container mx-auto px-4 max-w-4xl">
          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">{lang === "en" ? "The Process" : "Le processus"}</p>
          <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-foreground mb-14">{lang === "en" ? "How it works" : "Comment ça fonctionne"}</h2>
          {useTimeline ? (
            <div className="relative pl-8 border-l-2 border-accent/20 space-y-10">
              {service.process.map((p, i) => (
                <div key={i} className="relative" data-reveal-child>
                  <div className="absolute -left-[41px] top-1 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold font-sans">{p.step}</div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t(p.title, lang)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(p.desc, lang)}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {service.process.map((p, i) => (
                <div key={i} className="text-center" data-reveal-child>
                  <div className="font-display text-5xl text-accent/20 mb-4">{p.step}</div>
                  <h3 className="font-display text-xl text-foreground mb-3">{t(p.title, lang)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(p.desc, lang)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection items={service.faq} />
      <ContactSection />
      <CTASection />
    </Layout>
  );
}
