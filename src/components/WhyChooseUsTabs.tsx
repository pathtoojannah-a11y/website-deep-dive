import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Monitor, Cloud, BarChart3, Rocket, CheckCircle } from "lucide-react";

const tabIcons = [Monitor, Cloud, BarChart3, Rocket];

export default function WhyChooseUsTabs() {
  const { lang } = useLanguage();
  const [active, setActive] = useState(0);
  const data = translations.whyTabs;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 font-display">
          {t(data.title, lang)}
        </h2>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {data.tabs.map((tab, i) => {
            const Icon = tabIcons[i];
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${
                  active === i
                    ? "bg-orange text-accent-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Icon size={18} />
                {t(tab.label, lang)}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div className="max-w-3xl mx-auto bg-cream rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-foreground mb-6 font-display">
            {t(data.tabs[active].title, lang)}
          </h3>
          <ul className="space-y-4">
            {data.tabs[active].points[lang].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-orange mt-0.5 shrink-0" size={20} />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
