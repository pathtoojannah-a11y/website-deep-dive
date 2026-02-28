import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";

type T = Record<Lang, string>;

export default function PartnersBar() {
  const { lang } = useLanguage();
  const partners = ["Xero", "Dext", "Gusto", "Plooto"];
  const title: T = { en: "Our Technology Partners", fr: "Nos partenaires technologiques" };

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8 font-medium uppercase tracking-wider">{t(title, lang)}</p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((name) => (
            <div key={name} className="text-2xl md:text-3xl font-bold text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors font-display select-none">{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
