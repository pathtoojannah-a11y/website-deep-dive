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
  const title: T = { en: "Our Technology Partners", fr: "Nos partenaires technologiques" };

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8 font-medium uppercase tracking-wider">{t(title, lang)}</p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((p) => (
            <img key={p.name} src={p.logo} alt={p.name} className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          ))}
        </div>
      </div>
    </section>
  );
}
