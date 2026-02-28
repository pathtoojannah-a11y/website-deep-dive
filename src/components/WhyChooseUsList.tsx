import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";

export default function WhyChooseUsList() {
  const { lang } = useLanguage();
  const data = translations.whyList;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14 font-display">
          {t(data.title, lang)}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.items.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="text-5xl font-bold text-orange/20 font-display leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{t(item.title, lang)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(item.desc, lang)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
