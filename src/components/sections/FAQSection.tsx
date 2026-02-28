import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";
import { ChevronDown } from "lucide-react";

type T = Record<Lang, string>;
interface FAQItem { q: T; a: T }

export default function FAQSection({ items, title }: { items: FAQItem[]; title?: T }) {
  const { lang } = useLanguage();
  const heading = title || { en: "Frequently Asked Questions", fr: "Questions fréquentes" };

  return (
    <section className="py-20 md:py-28 bg-cream" data-reveal>
      <div className="container mx-auto px-4 max-w-3xl">
        <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent text-center mb-4">FAQ</p>
        <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-center text-foreground mb-14">{t(heading, lang)}</h2>
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open, a]);

  return (
    <div className="border border-border/60 rounded-xl overflow-hidden bg-card" data-reveal-child>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-sans text-foreground font-medium hover:bg-muted/30 transition-colors"
      >
        {q}
        <ChevronDown size={18} className={`text-muted-foreground shrink-0 ml-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? height : 0, opacity: open ? 1 : 0 }}
      >
        <div ref={contentRef} className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>
      </div>
    </div>
  );
}
