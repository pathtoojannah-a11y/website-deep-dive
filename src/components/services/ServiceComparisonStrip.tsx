import { serviceCatalog } from "@/data/serviceCatalog";
import { t } from "@/i18n/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServiceComparisonStrip() {
  const { lang } = useLanguage();
  return (
    <section className="py-14 bg-navy text-primary-foreground" data-reveal>
      <div className="container mx-auto px-4">
        <p data-reveal-child className="font-sans text-xs uppercase tracking-[0.15em] text-gold mb-6">
          {lang === "en" ? "Service Comparison" : "Comparaison des services"}
        </p>
        <div className="overflow-x-auto" data-reveal-child>
          <table className="w-full min-w-[860px] text-sm border-separate border-spacing-0">
            <thead>
              <tr className="text-left text-primary-foreground/70">
                <th className="py-3 pr-4 font-semibold">{lang === "en" ? "Service" : "Service"}</th>
                <th className="py-3 px-4 font-semibold">{lang === "en" ? "Best For" : "Ideal pour"}</th>
                <th className="py-3 px-4 font-semibold">{lang === "en" ? "Stage" : "Stade"}</th>
                <th className="py-3 pl-4 font-semibold">{lang === "en" ? "Deliverables" : "Livrables"}</th>
              </tr>
            </thead>
            <tbody>
              {serviceCatalog.map((service) => (
                <tr key={service.slug} className="border-t border-primary-foreground/10">
                  <td className="py-4 pr-4 font-medium text-primary-foreground">{t(service.navLabel, lang)}</td>
                  <td className="py-4 px-4 text-primary-foreground/70">{t(service.comparison.bestFor, lang)}</td>
                  <td className="py-4 px-4 text-primary-foreground/70">{t(service.comparison.stage, lang)}</td>
                  <td className="py-4 pl-4 text-primary-foreground/70">{t(service.comparison.deliverables, lang)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
