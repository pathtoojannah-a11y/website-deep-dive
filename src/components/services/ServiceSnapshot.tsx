import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServiceCatalogItem } from "@/data/serviceCatalog";
import { t } from "@/i18n/translations";
import DashboardMockup from "@/components/sections/DashboardMockup";
import { Button } from "@/components/ui/button";

export default function ServiceSnapshot({ service }: { service: ServiceCatalogItem }) {
  const { lang } = useLanguage();
  const snapshot = service.snapshot;

  return (
    <section className="py-20 md:py-24 bg-cream" data-reveal>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-reveal-child>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              {t(snapshot.eyebrow, lang)}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.08] mb-5">
              {t(snapshot.headline, lang)}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              {t(snapshot.subtitle, lang)}
            </p>
            <Button asChild className="bg-accent hover:bg-orange-dark text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-accent/20 group" size="lg">
              <Link to={snapshot.ctaHref}>
                {t(snapshot.ctaLabel, lang)}
                <ArrowRight size={18} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div data-reveal-child className="lg:justify-self-end">
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
              rotateDeg={-2}
              shadowDepth="lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
