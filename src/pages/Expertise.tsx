import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import { Shield, Heart, Stethoscope, Building2, CheckCircle, BarChart3, Users, FileCheck } from "lucide-react";

type T = Record<Lang, string>;

const verticals: { icon: any; title: T; desc: T }[] = [
  { icon: Stethoscope, title: { en: "Healthcare", fr: "Santé" }, desc: { en: "Specialized accounting for clinics, practices, and healthcare startups.", fr: "Comptabilité spécialisée pour cliniques, cabinets et startups en santé." } },
  { icon: Building2, title: { en: "Technology", fr: "Technologie" }, desc: { en: "Financial management for SaaS companies, tech startups, and digital agencies.", fr: "Gestion financière pour entreprises SaaS, startups tech et agences numériques." } },
  { icon: Shield, title: { en: "E-Commerce", fr: "Commerce en ligne" }, desc: { en: "Multi-channel revenue tracking, inventory accounting, and sales tax compliance.", fr: "Suivi des revenus multi-canaux, comptabilité des stocks et conformité fiscale." } },
  { icon: Heart, title: { en: "Professional Services", fr: "Services professionnels" }, desc: { en: "Project-based accounting, time tracking integration, and profitability analysis.", fr: "Comptabilité par projet, intégration du suivi du temps et analyse de rentabilité." } },
];

const capabilities: { icon: any; title: T; desc: T }[] = [
  { icon: BarChart3, title: { en: "Financial Analysis", fr: "Analyse financière" }, desc: { en: "Deep financial modeling and performance analysis to guide strategic decisions.", fr: "Modélisation financière approfondie et analyse de performance pour guider les décisions stratégiques." } },
  { icon: Users, title: { en: "Team Integration", fr: "Intégration d'équipe" }, desc: { en: "We embed with your team, working as a seamless extension of your operations.", fr: "Nous nous intégrons à votre équipe comme une extension de vos opérations." } },
  { icon: FileCheck, title: { en: "Compliance & Reporting", fr: "Conformité et rapports" }, desc: { en: "Stay ahead of regulatory requirements with proactive compliance monitoring.", fr: "Gardez une longueur d'avance sur les exigences réglementaires." } },
  { icon: CheckCircle, title: { en: "Process Optimization", fr: "Optimisation des processus" }, desc: { en: "We identify inefficiencies and implement solutions that save time and money.", fr: "Nous identifions les inefficacités et mettons en œuvre des solutions qui économisent temps et argent." } },
];

export default function Expertise() {
  const { lang } = useLanguage();

  return (
    <Layout>
      <Hero
        badge={lang === "en" ? "Industry Expertise" : "Expertise sectorielle"}
        title={lang === "en" ? "Deep Expertise Across Industries" : "Expertise approfondie dans tous les secteurs"}
        subtitle={lang === "en" ? "We bring specialized financial knowledge to your industry, combining sector-specific insights with modern cloud technology." : "Nous apportons une connaissance financière spécialisée à votre secteur, combinant des perspectives sectorielles avec la technologie infonuagique."}
        ctaText={lang === "en" ? "Book a Consultation" : "Réserver une consultation"}
        ctaLink="/expertise#contact"
      >
        <div className="grid grid-cols-2 gap-4">
          {verticals.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="bg-background rounded-2xl p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <Icon className="text-orange mb-3" size={28} />
                <h3 className="font-bold text-foreground text-sm mb-1">{t(v.title, lang)}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{t(v.desc, lang)}</p>
              </div>
            );
          })}
        </div>
      </Hero>

      {/* Capabilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 font-display">
            {lang === "en" ? "Our Capabilities" : "Nos capacités"}
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-14 max-w-2xl mx-auto">
            {lang === "en" ? "We go beyond basic accounting to deliver strategic value." : "Nous allons au-delà de la comptabilité de base pour offrir une valeur stratégique."}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="bg-cream rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-orange" size={26} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{t(c.title, lang)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(c.desc, lang)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry verticals */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14 font-display">
            {lang === "en" ? "Industries We Serve" : "Secteurs que nous desservons"}
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {verticals.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="flex gap-4 bg-background rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                    <Icon className="text-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{t(v.title, lang)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(v.desc, lang)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <ContactSection />
      <CTASection />
    </Layout>
  );
}
