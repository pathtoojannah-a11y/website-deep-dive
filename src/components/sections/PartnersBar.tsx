import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";

type T = Record<Lang, string>;

const partners = [
  { name: "Xero", logo: "https://namaca.ca/wp-content/uploads/2024/09/xero-1.png" },
  { name: "Dext", logo: "https://namaca.ca/wp-content/uploads/2024/09/DEXTools-1.png" },
  { name: "Gusto", logo: "https://namaca.ca/wp-content/uploads/2024/09/175069-1.png" },
  { name: "Plooto", logo: "https://namaca.ca/wp-content/uploads/2024/09/Ploto-black-png-logo-1.png" },
];

export default function PartnersBar() {
  const { lang } = useLanguage();
  const title: T = { en: "Powered by best-in-class tools", fr: "Propulsé par les meilleurs outils" };

  return (
    <section className="py-14 bg-background border-y border-border/50" data-reveal>
      <div className="container mx-auto px-4">
        <p data-reveal-child className="text-center font-sans text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-8">{t(title, lang)}</p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((p) => (
            <img key={p.name} src={p.logo} alt={p.name} className="h-7 md:h-9 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" data-reveal-child />
          ))}
        </div>
      </div>
    </section>
  );
}
