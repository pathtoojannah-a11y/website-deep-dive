import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import heroExpertise from "@/assets/hero-expertise.jpg";
import industryHealthcare from "@/assets/industry-healthcare.jpg";
import industryEcommerce from "@/assets/industry-ecommerce.jpg";
import heroService1 from "@/assets/hero-service-1.jpg";
import heroService2 from "@/assets/hero-service-2.jpg";
import { Stethoscope, Building2, ShoppingCart, Briefcase, ChevronDown, CheckCircle } from "lucide-react";

type T = Record<Lang, string>;

const verticals = [
  { icon: Building2, image: heroService1, title: { en: "Technology & SaaS", fr: "Technologie et SaaS" } as T, desc: { en: "Revenue recognition, burn rate analysis, and investor-ready reporting for tech companies at every stage.", fr: "Reconnaissance des revenus, analyse du taux de consommation et rapports prêts pour les investisseurs pour les entreprises tech." } as T },
  { icon: ShoppingCart, image: industryEcommerce, title: { en: "E-Commerce", fr: "Commerce en ligne" } as T, desc: { en: "Multi-channel revenue tracking, inventory accounting, and sales tax compliance across provinces.", fr: "Suivi des revenus multi-canaux, comptabilité des stocks et conformité fiscale interprovinciale." } as T },
  { icon: Stethoscope, image: industryHealthcare, title: { en: "Healthcare", fr: "Santé" } as T, desc: { en: "Specialized accounting for clinics, private practices, and healthcare startups with regulatory expertise.", fr: "Comptabilité spécialisée pour cliniques, cabinets privés et startups en santé avec expertise réglementaire." } as T },
  { icon: Briefcase, image: heroService2, title: { en: "Professional Services", fr: "Services professionnels" } as T, desc: { en: "Project-based accounting, time tracking integration, and profitability analysis for service firms.", fr: "Comptabilité par projet, intégration du suivi du temps et analyse de rentabilité pour les firmes de services." } as T },
];

const capabilities = [
  { num: "01", title: { en: "Financial Analysis & Modeling", fr: "Analyse et modélisation financière" } as T, desc: { en: "Deep financial modeling and performance analysis to guide strategic decisions with confidence.", fr: "Modélisation financière approfondie et analyse de performance pour guider les décisions stratégiques." } as T, accent: "border-t-accent" },
  { num: "02", title: { en: "Seamless Team Integration", fr: "Intégration d'équipe fluide" } as T, desc: { en: "We embed with your team, working as a seamless extension of your operations — not a separate vendor.", fr: "Nous nous intégrons à votre équipe comme une extension de vos opérations — pas un fournisseur séparé." } as T, accent: "border-t-gold" },
  { num: "03", title: { en: "Compliance & Reporting", fr: "Conformité et rapports" } as T, desc: { en: "Stay ahead of regulatory requirements with proactive compliance monitoring and timely filings.", fr: "Gardez une longueur d'avance sur les exigences réglementaires avec un suivi proactif de la conformité." } as T, accent: "border-t-blue-500" },
  { num: "04", title: { en: "Process Optimization", fr: "Optimisation des processus" } as T, desc: { en: "We identify inefficiencies in your financial workflows and implement solutions that save time and money.", fr: "Nous identifions les inefficacités dans vos processus financiers et mettons en œuvre des solutions économiques." } as T, accent: "border-t-emerald-500" },
];

export default function Expertise() {
  const { lang } = useLanguage();
  const [expandedCap, setExpandedCap] = useState<number | null>(null);

  return (
    <Layout>
      <Hero
        variant="split"
        layoutTone="light"
        eyebrow={lang === "en" ? "Industry Expertise" : "Expertise sectorielle"}
        title={lang === "en" ? "Deep expertise across the industries that matter." : "Une expertise approfondie dans les secteurs qui comptent."}
        subtitle={lang === "en" ? "We bring specialized financial knowledge to your industry, combining sector-specific insights with modern cloud technology." : "Nous apportons une connaissance financière spécialisée à votre secteur, combinant des perspectives sectorielles avec la technologie infonuagique."}
        ctaText={lang === "en" ? "Let's talk" : "Parlons-en"}
        ctaLink="/expertise#contact"
        mediaSlot={
          <div className="rounded-2xl border border-border/60 bg-card shadow-xl p-6 space-y-4 max-w-sm mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-auto text-[10px] text-muted-foreground font-mono">namaca.ca</span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              {lang === "en" ? "Our Capabilities" : "Nos capacites"}
            </div>
            {[
              { en: "Financial Analysis & Modeling", fr: "Analyse et modelisation financiere" },
              { en: "Seamless Team Integration", fr: "Integration d'equipe fluide" },
              { en: "Compliance & Reporting", fr: "Conformite et rapports" },
              { en: "Process Optimization", fr: "Optimisation des processus" },
              { en: "Cloud-First Operations", fr: "Operations infonuagiques" },
              { en: "Multi-Industry Expertise", fr: "Expertise multi-sectorielle" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-border/30 last:border-0">
                <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                <span className="text-sm text-foreground">{lang === "en" ? item.en : item.fr}</span>
              </div>
            ))}
            <div className="text-xs text-emerald-600 font-medium pt-1">
              {lang === "en" ? "All capabilities active" : "Toutes les capacites actives"}
            </div>
          </div>
        }
      />

      {/* Industry Verticals — Alternating split-media with unique images */}
      <section className="py-20 md:py-28 bg-background" data-reveal>
        <div className="container mx-auto px-4">
          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">{lang === "en" ? "Industries We Serve" : "Secteurs desservis"}</p>
          <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-foreground mb-16 max-w-lg">{lang === "en" ? "Sector-specific expertise that delivers results" : "Une expertise sectorielle qui livre des résultats"}</h2>
          <div className="space-y-16">
            {verticals.map((v, i) => {
              const Icon = v.icon;
              const isFlipped = i % 2 === 1;
              return (
                <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center`} data-reveal-child>
                  <div className={isFlipped ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                      <Icon className="text-accent" size={28} />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">{t(v.title, lang)}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{t(v.desc, lang)}</p>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-xl ${isFlipped ? "lg:order-1" : ""}`}>
                    <img src={v.image} alt={t(v.title, lang)} className="w-full h-64 lg:h-80 object-cover" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities — Creative cards with colored tops + expandable */}
      <section className="py-20 md:py-28 bg-cream" data-reveal>
        <div className="container mx-auto px-4 max-w-5xl">
          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">{lang === "en" ? "Our Capabilities" : "Nos capacités"}</p>
          <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-foreground mb-14">{lang === "en" ? "We go beyond basic accounting" : "Nous allons au-delà de la comptabilité de base"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((c, i) => {
              const isExpanded = expandedCap === i;
              return (
                <button
                  key={i}
                  onClick={() => setExpandedCap(isExpanded ? null : i)}
                  className={`relative text-left bg-card rounded-2xl border-t-4 ${c.accent} shadow-md p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group`}
                  data-reveal-child
                >
                  <span className="absolute top-4 right-6 font-display text-6xl leading-none pointer-events-none select-none text-foreground/[0.04] group-hover:text-foreground/[0.08] transition-colors">
                    {c.num}
                  </span>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">{t(c.title, lang)}</h3>
                    <ChevronDown size={18} className={`text-muted-foreground shrink-0 mt-2 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                    <p className="text-muted-foreground leading-relaxed">{t(c.desc, lang)}</p>
                  </div>
                  {!isExpanded && (
                    <p className="text-muted-foreground/60 text-sm mt-2">{lang === "en" ? "Click to learn more" : "Cliquez pour en savoir plus"}</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
    </Layout>
  );
}
