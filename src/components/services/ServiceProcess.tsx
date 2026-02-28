import { ServiceCatalogItem } from "@/data/serviceCatalog";
import { t } from "@/i18n/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServiceProcess({ service }: { service: ServiceCatalogItem }) {
  const { lang } = useLanguage();
  return (
    <section className="py-20 md:py-24 bg-background" data-reveal>
      <div className="container mx-auto px-4 max-w-3xl">
        <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
          {lang === "en" ? "How It Works" : "Comment ca fonctionne"}
        </p>
        <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-foreground mb-12">
          {lang === "en" ? "Simple process, consistent execution" : "Processus simple, execution constante"}
        </h2>
        <div className="relative pl-7 border-l-2 border-accent/20 space-y-10">
          {service.process.map((step, i) => (
            <div key={i} data-reveal-child className="relative">
              <div className="absolute -left-[35px] top-1 w-7 h-7 rounded-full bg-accent text-white text-xs font-semibold flex items-center justify-center">
                {step.step}
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{t(step.title, lang)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(step.desc, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
