import { ServiceCatalogItem } from "@/data/serviceCatalog";
import { t } from "@/i18n/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServiceProof({ service }: { service: ServiceCatalogItem }) {
  const { lang } = useLanguage();
  return (
    <section className="py-20 md:py-24 bg-cream" data-reveal>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          <div data-reveal-child>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              {lang === "en" ? "Proof" : "Preuves"}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
              {lang === "en" ? "Measured outcomes" : "Resultats mesures"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.proofMetrics.map((metric, i) => (
                <div key={i} className="bg-card rounded-xl p-5 border border-border/60">
                  <div className="font-display text-3xl text-navy mb-1">{metric.value}</div>
                  <div className="text-xs uppercase tracking-wide text-accent font-semibold mb-2">{t(metric.label, lang)}</div>
                  <p className="text-sm text-muted-foreground">{t(metric.detail, lang)}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal-child className="bg-card rounded-2xl p-8 border border-border/60 shadow-sm">
            <p className="font-display text-2xl text-foreground leading-relaxed italic mb-6">"{t(service.testimonial.quote, lang)}"</p>
            <div>
              <div className="font-semibold text-foreground">{service.testimonial.name}</div>
              <div className="text-sm text-muted-foreground">{t(service.testimonial.role, lang)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
