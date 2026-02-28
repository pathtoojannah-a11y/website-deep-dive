import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { nonPrimaryHomeServices, primaryHomeServices, serviceGroups } from "@/data/serviceCatalog";
import { t } from "@/i18n/translations";
import ServiceComparisonStrip from "@/components/services/ServiceComparisonStrip";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight } from "lucide-react";

const quickLinks = [
  { key: "books", slug: "bookkeeping", en: "I need clean books", fr: "J'ai besoin de livres propres" },
  { key: "payroll", slug: "payroll", en: "I need payroll done right", fr: "J'ai besoin d'une paie fiable" },
  { key: "tax", slug: "taxes", en: "I need tax/compliance confidence", fr: "J'ai besoin de confiance fiscale" },
  { key: "cfo", slug: "fractional-cfo", en: "I need strategic CFO guidance", fr: "J'ai besoin d'un CFO strategique" },
];

export default function Services() {
  const { lang } = useLanguage();
  return (
    <Layout>
      <section className="bg-navy py-24 md:py-32 section-dark-depth hero-gradient-mesh" data-reveal>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-4">
            {lang === "en" ? "All Services" : "Tous les services"}
          </p>
          <h1 data-reveal-child className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-5 tracking-tight">
            {lang === "en" ? "What do you need solved?" : "Quel probleme voulez-vous resoudre?"}
          </h1>
          <p data-reveal-child className="text-lg text-primary-foreground/65">
            {lang === "en" ? "Choose the service path that matches your current business priority." : "Choisissez le parcours de service qui correspond a votre priorite actuelle."}
          </p>
        </div>
      </section>

      <section className="py-14 bg-cream" data-reveal>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {quickLinks.map((item) => (
              <Link key={item.key} to={`/${item.slug}`} data-reveal-child className="rounded-full border border-border/60 bg-background px-5 py-3 text-sm font-medium hover:border-accent hover:text-accent transition-colors">
                {lang === "en" ? item.en : item.fr}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background" data-reveal>
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
              {lang === "en" ? "Primary Services" : "Services principaux"}
            </p>
            <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-foreground">
              {lang === "en" ? "Most requested by growth teams" : "Les plus demandes par les equipes en croissance"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {primaryHomeServices.map((service) => (
              <Link key={service.slug} to={`/${service.slug}`} data-reveal-child className="rounded-2xl border border-border/60 bg-card p-7 group hover:-translate-y-1 transition-transform">
                <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-accent transition-colors">{t(service.navLabel, lang)}</h3>
                <p className="text-muted-foreground mb-5">{t(service.outcome, lang)}</p>
                <span className="inline-flex items-center text-sm font-semibold text-accent">
                  {lang === "en" ? "View service" : "Voir le service"}
                  <ArrowRight size={15} className="ml-1.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream" data-reveal>
        <div className="container mx-auto px-4">
          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-8">
            {lang === "en" ? "Complete Catalog" : "Catalogue complet"}
          </p>
          <div className="space-y-10">
            {serviceGroups.map((group) => (
              <div key={group.category}>
                <h3 data-reveal-child className="font-display text-2xl text-foreground mb-5">{t(group.label, lang)}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((service) => (
                    <Link key={service.slug} to={`/${service.slug}`} data-reveal-child className="rounded-xl border border-border/60 bg-card px-5 py-4 hover:shadow-[0_0_0_2px_rgba(245,158,11,0.25)] transition-all">
                      <div className="font-semibold text-foreground">{t(service.navLabel, lang)}</div>
                      <p className="text-sm text-muted-foreground mt-1">{t(service.outcome, lang)}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nonPrimaryHomeServices.map((service) => (
              <Link key={service.slug} to={`/${service.slug}`} data-reveal-child className="rounded-xl border border-border/40 bg-background px-5 py-4 hover:bg-card transition-colors">
                <div className="font-medium text-foreground">{t(service.navLabel, lang)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceComparisonStrip />
      <CTASection />
    </Layout>
  );
}
