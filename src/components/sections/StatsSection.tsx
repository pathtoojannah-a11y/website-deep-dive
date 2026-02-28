import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";
import { Cpu, Calendar, ThumbsUp, Users } from "lucide-react";

type T = Record<Lang, string>;
interface StatItem { value: number; suffix: string; label: T }

const defaultStats: StatItem[] = [
  { value: 98, suffix: "%", label: { en: "System Expertise", fr: "Expertise système" } },
  { value: 15, suffix: "+", label: { en: "Years Experience", fr: "Années d'expérience" } },
  { value: 99, suffix: "%", label: { en: "Client Satisfaction", fr: "Satisfaction client" } },
  { value: 200, suffix: "+", label: { en: "Clients Served", fr: "Clients desservis" } },
];

const icons = [Cpu, Calendar, ThumbsUp, Users];

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

  return <div ref={ref} className="text-4xl md:text-5xl font-bold text-orange font-display">{count}{suffix}</div>;
}

export default function StatsSection({ stats, title }: { stats?: StatItem[]; title?: T }) {
  const { lang } = useLanguage();
  const items = stats || defaultStats;
  const heading = title || { en: "By the Numbers", fr: "En chiffres" };

  return (
    <section className="py-20 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 font-display">{t(heading, lang)}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center space-y-3">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto">
                  <Icon size={26} className="text-orange" />
                </div>
                <Counter target={item.value} suffix={item.suffix} />
                <div className="text-sm text-primary-foreground/70">{t(item.label, lang)}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
