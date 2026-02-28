import Hero from "@/components/sections/Hero";
import { ServiceCatalogItem } from "@/data/serviceCatalog";
import { t } from "@/i18n/translations";
import { useLanguage } from "@/contexts/LanguageContext";
import DashboardMockup from "@/components/sections/DashboardMockup";

export default function ServiceHero({ service }: { service: ServiceCatalogItem }) {
  const { lang } = useLanguage();
  const snapshot = service.snapshot;

  const mockup = (
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
  );

  // Family A (Operations): Split layout — light bg, mockup on right
  if (service.templateFamily === "A") {
    return (
      <Hero
        variant="split"
        layoutTone="light"
        eyebrow={t(service.heroEyebrow, lang)}
        title={t(service.heroTitle, lang)}
        subtitle={t(service.heroSubtitle, lang)}
        ctaText={lang === "en" ? "Get started" : "Commencer"}
        ctaLink="/expertise#contact"
        mediaSlot={mockup}
      />
    );
  }

  // Family B (Compliance/Taxes): Centered layout — dark bg, mockup below
  if (service.templateFamily === "B") {
    return (
      <Hero
        variant="centered"
        layoutTone="dark"
        eyebrow={t(service.heroEyebrow, lang)}
        title={t(service.heroTitle, lang)}
        subtitle={t(service.heroSubtitle, lang)}
        ctaText={lang === "en" ? "Get started" : "Commencer"}
        ctaLink="/expertise#contact"
        mediaSlot={mockup}
      />
    );
  }

  // Family C (Strategy: CFO, Consulting): Cinematic gradient mesh — mockup overlay
  return (
    <Hero
      variant="cinematic"
      eyebrow={t(service.heroEyebrow, lang)}
      title={t(service.heroTitle, lang)}
      subtitle={t(service.heroSubtitle, lang)}
      ctaText={lang === "en" ? "Get started" : "Commencer"}
      ctaLink="/expertise#contact"
      mediaSlot={mockup}
    />
  );
}
