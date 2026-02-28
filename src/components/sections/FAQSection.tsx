import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";
import { ChevronDown } from "lucide-react";

type T = Record<Lang, string>;

interface FAQItem { q: T; a: T }

export default function FAQSection({ items, title }: { items: FAQItem[]; title?: T }) {
  const { lang } = useLanguage();
  const heading = title || { en: "Frequently Asked Questions", fr: "Questions fréquentes" };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 font-display">{t(heading, lang)}</h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <FAQAccordion key={i} q={t(item.q, lang)} a={t(item.a, lang)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQAccordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left text-foreground font-medium hover:bg-muted/50 transition-colors"
      >
        {q}
        <ChevronDown size={18} className={`text-muted-foreground shrink-0 ml-2 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{a}</div>
      )}
    </div>
  );
}
