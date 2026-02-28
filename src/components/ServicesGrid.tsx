import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { BookOpen, Users, FileText, TrendingUp, CreditCard, Receipt, Lightbulb } from "lucide-react";

const iconMap: Record<string, any> = {
  BookOpen, Users, FileText, TrendingUp, CreditCard, Receipt, Lightbulb,
};

export default function ServicesGrid() {
  const { lang } = useLanguage();
  const data = translations.services;

  return (
    <section id="services" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
            {t(data.title, lang)}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t(data.subtitle, lang)}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={i}
                className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow group border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-colors">
                  <Icon className="text-orange" size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t(item.title, lang)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(item.desc, lang)}</p>
                <button className="text-sm font-medium text-orange hover:text-orange-dark transition-colors">
                  {t(data.learnMore, lang)} →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
