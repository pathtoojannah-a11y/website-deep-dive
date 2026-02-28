import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { serviceGroups, ServiceCategory, serviceCategoryLabels } from "@/data/serviceCatalog";
import { t, Lang } from "@/i18n/translations";
import { ArrowRight, Check } from "lucide-react";
import DashboardMockup from "@/components/sections/DashboardMockup";

const categoryAccents: Record<ServiceCategory, string> = {
  operations: "bg-blue-500/10 text-blue-600 border-blue-200",
  compliance: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  strategy: "bg-purple-500/10 text-purple-600 border-purple-200",
};

const categoryTabActive: Record<ServiceCategory, string> = {
  operations: "bg-blue-600 text-white shadow-lg shadow-blue-600/25",
  compliance: "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25",
  strategy: "bg-purple-600 text-white shadow-lg shadow-purple-600/25",
};

type MiniCard = { text: Record<Lang, string>; accent?: string };

const miniCardData: Record<string, MiniCard[]> = {
  payroll: [
    { text: { en: "Payroll processed", fr: "Paie traitee" }, accent: "text-emerald-500" },
    { text: { en: "12 employees paid", fr: "12 employes payes" }, accent: "text-blue-500" },
    { text: { en: "Next run: Mar 1", fr: "Prochaine: 1 mars" }, accent: "text-amber-500" },
  ],
  "accounts-payable": [
    { text: { en: "Invoice approved", fr: "Facture approuvee" }, accent: "text-emerald-500" },
    { text: { en: "$4,200 scheduled", fr: "4 200 $ programme" }, accent: "text-blue-500" },
    { text: { en: "95% automated", fr: "95 % automatise" }, accent: "text-purple-500" },
  ],
  "accounts-receivable": [
    { text: { en: "Payment received", fr: "Paiement recu" }, accent: "text-emerald-500" },
    { text: { en: "DSO: 28 days", fr: "DDC : 28 jours" }, accent: "text-blue-500" },
    { text: { en: "$12K collected", fr: "12 K$ collectes" }, accent: "text-amber-500" },
  ],
  taxes: [
    { text: { en: "GST filed on time", fr: "TPS deposee a temps" }, accent: "text-emerald-500" },
    { text: { en: "100% compliance", fr: "100 % conformite" }, accent: "text-blue-500" },
    { text: { en: "Next deadline: Apr 30", fr: "Prochaine : 30 avr" }, accent: "text-amber-500" },
  ],
  "fractional-cfo": [
    { text: { en: "Board deck ready", fr: "Rapport CA pret" }, accent: "text-emerald-500" },
    { text: { en: "Runway: 18 months", fr: "Tresorerie : 18 mois" }, accent: "text-blue-500" },
    { text: { en: "KPIs on track", fr: "KPIs en bonne voie" }, accent: "text-purple-500" },
  ],
  "consulting-advisory": [
    { text: { en: "Strategy aligned", fr: "Strategie alignee" }, accent: "text-emerald-500" },
    { text: { en: "Phase 2 active", fr: "Phase 2 active" }, accent: "text-blue-500" },
    { text: { en: "Review: Mar 15", fr: "Revue : 15 mars" }, accent: "text-amber-500" },
  ],
};

function MiniCardStrip({ slug, lang }: { slug: string; lang: Lang }) {
  const cards = miniCardData[slug];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!cards) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [cards]);

  if (!cards) return null;

  return (
    <div className="mt-auto mb-4 flex justify-center">
      <div className="relative h-10 w-full max-w-[220px] overflow-hidden">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`absolute inset-x-0 flex items-center justify-center gap-2.5 text-sm font-medium transition-all duration-500 ${
              i === activeIndex
                ? "opacity-100 translate-y-0"
                : i === (activeIndex + cards.length - 1) % cards.length
                ? "opacity-0 -translate-y-5"
                : "opacity-0 translate-y-5"
            }`}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-muted/60 border border-border/40 px-3.5 py-1.5">
              <span className={`flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 ${card.accent || "text-emerald-500"}`}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span className="text-foreground/80 whitespace-nowrap">{t(card.text, lang)}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServiceShowcase() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("operations");

  const activeGroup = serviceGroups.find((g) => g.category === activeCategory);
  const services = activeGroup?.items || [];

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background" data-reveal>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
              {lang === "en" ? "Services" : "Services"}
            </p>
            <h2 data-reveal-child className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground max-w-2xl tracking-tight">
              {lang === "en" ? "Start with the service that solves your biggest bottleneck." : "Commencez par le service qui resout votre plus grand goulot d'etranglement."}
            </h2>
          </div>
          <Link to="/services" data-reveal-child className="inline-flex items-center text-sm font-semibold text-accent hover:text-orange-dark transition-colors">
            {lang === "en" ? "See all services" : "Voir tous les services"}
            <ArrowRight size={16} className="ml-1.5" />
          </Link>
        </div>

        {/* Category tab pills */}
        <div data-reveal-child className="flex flex-wrap gap-2 mb-10">
          {serviceGroups.map((group) => (
            <button
              key={group.category}
              onClick={() => setActiveCategory(group.category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === group.category
                  ? categoryTabActive[group.category]
                  : "bg-muted/60 text-muted-foreground hover:bg-muted"
              }`}
            >
              {t(group.label, lang)}
              <span className="ml-1.5 text-xs opacity-60">({group.items.length})</span>
            </button>
          ))}
        </div>

        {/* Bento grid with spotlight hover */}
        <div
          className="spotlight-grid grid md:grid-cols-3 gap-5 transition-all duration-300"
          key={activeCategory}
        >
          {services.map((service, i) => {
            const isPrimary = i === 0;
            const snapshot = service.snapshot;

            return (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className={`spotlight-card group relative rounded-2xl border border-border/60 bg-card overflow-hidden hover:-translate-y-1 transition-all duration-300 ${
                  isPrimary ? "md:col-span-2 md:row-span-2" : ""
                }`}
                data-reveal-child
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {isPrimary ? (
                  /* Large primary card with stretched mockup */
                  <div className="p-8 md:p-10 h-full flex flex-col">
                    <div className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-4 ${categoryAccents[service.category]}`}>
                      {t(serviceCategoryLabels[service.category], lang)}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2 group-hover:text-accent transition-colors tracking-tight">
                      {t(service.navLabel, lang)}
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-md">{t(service.outcome, lang)}</p>
                    <div className="mt-auto">
                      <DashboardMockup
                        variant={snapshot.visualType}
                        title={t(snapshot.panelTitle, lang)}
                        badge={t(snapshot.badgeText, lang)}
                        rows={snapshot.rows.map((row) => ({
                          ...row,
                          label: t(row.label, lang),
                          subLabel: row.subLabel ? t(row.subLabel, lang) : undefined,
                        }))}
                        footerNote={t(snapshot.footerNote, lang)}
                        rotateDeg={0}
                        shadowDepth="sm"
                        className="!max-w-none !rounded-xl !p-4 !shadow-md"
                      />
                    </div>
                    <div className="mt-4 flex items-center text-sm font-semibold text-accent">
                      {lang === "en" ? "Learn more" : "En savoir plus"}
                      <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ) : (
                  /* Secondary card with mini animated cards */
                  <div className="p-6 md:p-7 h-full flex flex-col">
                    <div className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full w-fit mb-3 ${categoryAccents[service.category]}`}>
                      {t(serviceCategoryLabels[service.category], lang)}
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                      {t(service.navLabel, lang)}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{t(service.outcome, lang)}</p>
                    <MiniCardStrip slug={service.slug} lang={lang} />
                    {service.proofMetrics[0] && (
                      <div className="text-xs text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">{service.proofMetrics[0].value}</span>{" "}
                        {t(service.proofMetrics[0].label, lang)}
                      </div>
                    )}
                    <div className="flex items-center text-sm font-semibold text-accent">
                      {lang === "en" ? "Learn more" : "En savoir plus"}
                      <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
