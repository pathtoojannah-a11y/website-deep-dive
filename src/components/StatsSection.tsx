import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Cpu, Calendar, ThumbsUp, Users } from "lucide-react";

const icons = [Cpu, Calendar, ThumbsUp, Users];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-orange font-display">
      {count}{suffix}
    </div>
  );
}

export default function StatsSection() {
  const { lang } = useLanguage();
  const data = translations.stats;

  return (
    <section id="expertise" className="py-20 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 font-display">
          {t(data.title, lang)}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="text-center space-y-3">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto">
                  <Icon size={26} className="text-orange" />
                </div>
                <AnimatedCounter target={item.value} suffix={item.suffix} />
                <div className="text-sm text-primary-foreground/70">{t(item.label, lang)}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
