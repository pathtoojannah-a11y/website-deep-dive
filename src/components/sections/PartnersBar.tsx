import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";
import { ShieldCheck, Award, BadgeCheck } from "lucide-react";

type T = Record<Lang, string>;

const partners = [
  { name: "Xero", logo: "https://namaca.ca/wp-content/uploads/2024/09/xero-1.png" },
  { name: "Dext", logo: "https://namaca.ca/wp-content/uploads/2024/09/DEXTools-1.png" },
  { name: "Gusto", logo: "https://namaca.ca/wp-content/uploads/2024/09/175069-1.png" },
  { name: "Plooto", logo: "https://namaca.ca/wp-content/uploads/2024/09/Ploto-black-png-logo-1.png" },
];

const trustBadges: { icon: typeof ShieldCheck; label: T }[] = [
  { icon: BadgeCheck, label: { en: "Xero Certified Partner", fr: "Partenaire certifié Xero" } },
  { icon: Award, label: { en: "QuickBooks ProAdvisor", fr: "ProAdvisor QuickBooks" } },
  { icon: ShieldCheck, label: { en: "CPA-Associated Expertise", fr: "Expertise associée CPA" } },
];

export default function PartnersBar() {
  const { lang } = useLanguage();
  const title: T = { en: "Powered by best-in-class tools", fr: "Propulsé par les meilleurs outils" };

  // Double the logos for seamless marquee loop
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="py-10 md:py-12 bg-background border-y border-border/30 overflow-hidden" data-reveal>
      <div className="container mx-auto px-4">
        <p data-reveal-child className="text-center font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 mb-8">{t(title, lang)}</p>
      </div>
      <div className="relative mb-8">
        <div className="flex items-center gap-16 md:gap-24 marquee-track w-max">
          {doubledPartners.map((p, i) => (
            <img
              key={`${p.name}-${i}`}
              src={p.logo}
              alt={p.name}
              className="h-6 md:h-8 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          ))}
        </div>
      </div>
      {/* Trust badges */}
      <div className="container mx-auto px-4">
        <div data-reveal-child className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustBadges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div key={i} className="flex items-center gap-2 text-muted-foreground/60 hover:text-accent transition-colors duration-300">
                <Icon size={16} strokeWidth={2} />
                <span className="text-xs font-semibold uppercase tracking-wider">{t(badge.label, lang)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
