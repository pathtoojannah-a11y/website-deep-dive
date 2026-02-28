import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import heroExpertise from "@/assets/hero-expertise.jpg";
import heroService1 from "@/assets/hero-service-1.jpg";
import { Stethoscope, Building2, ShoppingCart, Briefcase } from "lucide-react";

type T = Record<Lang, string>;

const verticals = [
  { icon: Building2, title: { en: "Technology & SaaS", fr: "Technologie et SaaS" } as T, desc: { en: "Revenue recognition, burn rate analysis, and investor-ready reporting for tech companies at every stage.", fr: "Reconnaissance des revenus, analyse du taux de consommation et rapports prêts pour les investisseurs pour les entreprises tech." } as T },
  { icon: ShoppingCart, title: { en: "E-Commerce", fr: "Commerce en ligne" } as T, desc: { en: "Multi-channel revenue tracking, inventory accounting, and sales tax compliance across provinces.", fr: "Suivi des revenus multi-canaux, comptabilité des stocks et conformité fiscale interprovinciale." } as T },
  { icon: Stethoscope, title: { en: "Healthcare", fr: "Santé" } as T, desc: { en: "Specialized accounting for clinics, private practices, and healthcare startups with regulatory expertise.", fr: "Comptabilité spécialisée pour cliniques, cabinets privés et startups en santé avec expertise réglementaire." } as T },
  { icon: Briefcase, title: { en: "Professional Services", fr: "Services professionnels" } as T, desc: { en: "Project-based accounting, time tracking integration, and profitability analysis for service firms.", fr: "Comptabilité par projet, intégration du suivi du temps et analyse de rentabilité pour les firmes de services." } as T },
];

const capabilities = [
  { num: "01", title: { en: "Financial Analysis & Modeling", fr: "Analyse et modélisation financière" } as T, desc: { en: "Deep financial modeling and performance analysis to guide strategic decisions with confidence.", fr: "Modélisation financière approfondie et analyse de performance pour guider les décisions stratégiques." } as T },
  { num: "02", title: { en: "Seamless Team Integration", fr: "Intégration d'équipe fluide" } as T, desc: { en: "We embed with your team, working as a seamless extension of your operations — not a separate vendor.", fr: "Nous nous intégrons à votre équipe comme une extension de vos opérations — pas un fournisseur séparé." } as T },
  { num: "03", title: { en: "Compliance & Reporting", fr: "Conformité et rapports" } as T, desc: { en: "Stay ahead of regulatory requirements with proactive compliance monitoring and timely filings.", fr: "Gardez une longueur d'avance sur les exigences réglementaires avec un suivi proactif de la conformité." } as T },
  { num: "04", title: { en: "Process Optimization", fr: "Optimisation des processus" } as T, desc: { en: "We identify inefficiencies in your financial workflows and implement solutions that save time and money.", fr: "Nous identifions les inefficacités dans vos processus financiers et mettons en œuvre des solutions économiques." } as T },
];

export default function Expertise() {
  const { lang } = useLanguage();

  return (
    <Layout>
      {/* Cinematic Hero */}
      <Hero
        variant="cinematic"
        eyebrow={lang === "en" ? "Industry Expertise" : "Expertise sectorielle"}
        title={lang === "en" ? "Deep expertise across the industries that matter." : "Une expertise approfondie dans les secteurs qui comptent."}
        subtitle={lang === "en" ? "We bring specialized financial knowledge to your industry, combining sector-specific insights with modern cloud technology." : "Nous apportons une connaissance financière spécialisée à votre secteur, combinant des perspectives sectorielles avec la technologie infonuagique."}
        ctaText={lang === "en" ? "Book a Consultation" : "Réserver une consultation"}
        ctaLink="/expertise#contact"
        heroImage={heroExpertise}
      />

      {/* Industry Verticals — Alternating split-media */}
      <section className="py-20 md:py-28 bg-background" data-reveal>
        <div className="container mx-auto px-4">
          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">{lang === "en" ? "Industries We Serve" : "Secteurs desservis"}</p>
          <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-foreground mb-16 max-w-lg">{lang === "en" ? "Sector-specific expertise that delivers results" : "Une expertise sectorielle qui livre des résultats"}</h2>
          <div className="space-y-16">
            {verticals.map((v, i) => {
              const Icon = v.icon;
              const isFlipped = i % 2 === 1;
              return (
                <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${isFlipped ? "lg:direction-reverse" : ""}`} data-reveal-child>
                  <div className={isFlipped ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                      <Icon className="text-accent" size={28} />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">{t(v.title, lang)}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{t(v.desc, lang)}</p>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-xl ${isFlipped ? "lg:order-1" : ""}`}>
                    <img src={i % 2 === 0 ? heroService1 : heroExpertise} alt="" className="w-full h-64 lg:h-80 object-cover" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities — Numbered editorial list */}
      <section className="py-20 md:py-28 bg-cream" data-reveal>
        <div className="container mx-auto px-4 max-w-4xl">
          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">{lang === "en" ? "Our Capabilities" : "Nos capacités"}</p>
          <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-foreground mb-14">{lang === "en" ? "We go beyond basic accounting" : "Nous allons au-delà de la comptabilité de base"}</h2>
          <div className="space-y-0 divide-y divide-border/60">
            {capabilities.map((c, i) => (
              <div key={i} className="grid md:grid-cols-[80px_1fr] gap-4 py-8" data-reveal-child>
                <span className="font-display text-4xl text-muted-foreground/20">{c.num}</span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">{t(c.title, lang)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(c.desc, lang)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Testimonial */}
      <TestimonialsSection />

      {/* Contact */}
      <ContactSection />

      {/* CTA */}
      <CTASection />
    </Layout>
  );
}
