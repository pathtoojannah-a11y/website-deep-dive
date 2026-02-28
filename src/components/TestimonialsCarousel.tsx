import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsCarousel() {
  const { lang } = useLanguage();
  const data = translations.testimonials;
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? data.items.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === data.items.length - 1 ? 0 : i + 1));
  const item = data.items[idx];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14 font-display">
          {t(data.title, lang)}
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <Quote className="text-orange mx-auto mb-6" size={40} />
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
            "{t(item.text, lang)}"
          </p>
          <div className="font-bold text-foreground text-lg">{item.name}</div>
          <div className="text-sm text-muted-foreground">{t(item.role, lang)}</div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {data.items.map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === idx ? "bg-orange" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
