import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";

type T = Record<Lang, string>;
interface StatItem { value: number; suffix: string; label: T }

const defaultStats: StatItem[] = [
  { value: 98, suffix: "%", label: { en: "System Expertise", fr: "Expertise système" } },
  { value: 15, suffix: "+", label: { en: "Years Experience", fr: "Années d'expérience" } },
  { value: 200, suffix: "+", label: { en: "Clients Served", fr: "Clients desservis" } },
  { value: 99, suffix: "%", label: { en: "Client Satisfaction", fr: "Satisfaction client" } },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let c = 0;
        const inc = target / 40;
        const interval = setInterval(() => {
          c += inc;
          if (c >= target) { setCount(target); clearInterval(interval); }
          else setCount(Math.floor(c));
        }, 37);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref} className="font-display text-5xl md:text-6xl lg:text-7xl text-gold leading-none">{count}{suffix}</div>;
}

export default function StatsSection({ stats, title }: { stats?: StatItem[]; title?: T }) {
  const { lang } = useLanguage();
  const items = stats || defaultStats;
  const heading = title || { en: "By the Numbers", fr: "En chiffres" };

  return (
    <section className="relative bg-navy text-primary-foreground py-24 md:py-32 lg:py-40 section-dark-depth">
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10" data-reveal>
        <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold text-center mb-4">
          {lang === "en" ? "Proven Results" : "Résultats prouvés"}
        </p>
        <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-center mb-16">{t(heading, lang)}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {items.map((item, i) => (
            <div key={i} className="text-center space-y-3" data-reveal-child>
              <Counter target={item.value} suffix={item.suffix} />
              <div className="text-sm text-primary-foreground/50 uppercase tracking-wider font-sans font-medium">{t(item.label, lang)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
