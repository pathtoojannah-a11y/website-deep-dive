import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { serviceLinks, t, Lang } from "@/i18n/translations";
import { ArrowRight } from "lucide-react";

type T = Record<Lang, string>;

const serviceOutcomes: T[] = [
  { en: "Never reconcile a bank statement again.", fr: "Ne rapprochez plus jamais un relevé bancaire." },
  { en: "Your team gets paid on time, every time.", fr: "Votre équipe est payée à temps, à chaque fois." },
  { en: "Keep more of what you earn.", fr: "Gardez plus de ce que vous gagnez." },
  { en: "Executive financial guidance without the $300K salary.", fr: "Direction financière stratégique sans le salaire à 300 000$." },
  { en: "Vendors paid. Cash flow optimized. Relationships protected.", fr: "Fournisseurs payés. Trésorerie optimisée. Relations protégées." },
  { en: "Stop chasing payments. Start collecting.", fr: "Arrêtez de courir après les paiements. Commencez à encaisser." },
  { en: "Strategic insights that drive real growth.", fr: "Perspectives stratégiques qui stimulent la croissance réelle." },
];

export default function ServiceShowcase() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-background" data-reveal>
      <div className="container mx-auto px-4">
        <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">{lang === "en" ? "Our Services" : "Nos services"}</p>
        <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-foreground mb-14 max-w-lg">{lang === "en" ? "Everything your business needs to thrive financially" : "Tout ce dont votre entreprise a besoin pour prospérer financièrement"}</h2>
        <div className="divide-y divide-border/60">
          {serviceLinks.map((s, i) => (
            <Link
              key={s.slug}
              to={`/${s.slug}`}
              className="group grid grid-cols-[48px_1fr_1.5fr_40px] md:grid-cols-[60px_1fr_2fr_40px] items-center gap-4 md:gap-8 py-5 md:py-6 border-l-[3px] border-l-transparent hover:border-l-accent hover:bg-muted/30 transition-all duration-300 px-4 md:px-6 -mx-4 md:-mx-6"
              data-reveal-child
            >
              <span className="font-display text-lg md:text-xl text-muted-foreground/40 group-hover:text-accent transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg md:text-xl text-foreground">{t(s.label, lang)}</h3>
              <p className="text-sm text-muted-foreground hidden md:block">{t(serviceOutcomes[i], lang)}</p>
              <ArrowRight size={18} className="text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-1 transition-all justify-self-end" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
