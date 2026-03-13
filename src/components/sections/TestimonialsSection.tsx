import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";
import { ChevronLeft, ChevronRight } from "lucide-react";

type T = Record<Lang, string>;
interface Testimonial { text: T; name: string; role: T; avatar?: string }

const defaultTestimonials: Testimonial[] = [
  {
    text: { en: "Namaca has been an absolute game-changer for our business. Their cloud-based approach means we always have real-time access to our financial data, and their team is incredibly responsive and knowledgeable.", fr: "Namaca a été un véritable changement pour notre entreprise. Leur approche infonuagique nous donne un accès en temps réel à nos données financières, et leur équipe est incroyablement réactive et compétente." },
    name: "Greg Pritchard",
    role: { en: "Business Owner", fr: "Propriétaire d'entreprise" },
    avatar: "https://namaca.ca/wp-content/uploads/2024/09/image-1.png",
  },
  {
    text: { en: "Switching to Namaca was the best decision we made. They streamlined our payroll, automated our invoicing, and gave us dashboards we actually use every week. Our back office runs itself now.", fr: "Passer à Namaca a été la meilleure décision que nous ayons prise. Ils ont simplifié notre paie, automatisé notre facturation, et nous ont donné des tableaux de bord que nous utilisons chaque semaine." },
    name: "Sophie Tremblay",
    role: { en: "COO, Tech Startup", fr: "COO, Startup technologique" },
  },
  {
    text: { en: "We needed a firm that understood ecommerce. Namaca nailed it — from multi-currency reconciliation to tax compliance across provinces. They saved us thousands in the first quarter alone.", fr: "Nous avions besoin d'un cabinet qui comprend le ecommerce. Namaca l'a fait — de la réconciliation multi-devises à la conformité fiscale interprovinciale. Ils nous ont fait économiser des milliers dès le premier trimestre." },
    name: "Marcus Chen",
    role: { en: "Founder, E-Commerce Brand", fr: "Fondateur, Marque E-Commerce" },
  },
  {
    text: { en: "Their fractional CFO service gave us the financial strategy we were missing. We went from guessing to knowing exactly where every dollar goes. Highly recommend for any growing SME.", fr: "Leur service de CFO fractionnel nous a donné la stratégie financière qui nous manquait. Nous sommes passés de suppositions à savoir exactement où va chaque dollar. Fortement recommandé pour toute PME en croissance." },
    name: "Isabelle Fontaine",
    role: { en: "CEO, Professional Services Firm", fr: "PDG, Cabinet de services professionnels" },
  },
];

export default function TestimonialsSection({ items }: { items?: Testimonial[] }) {
  const { lang } = useLanguage();
  const testimonials = items || defaultTestimonials;
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, testimonials.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, testimonials.length, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const item = testimonials[current];

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-cream relative overflow-hidden" data-reveal>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative quote mark */}
          <div className="font-display text-[12rem] md:text-[16rem] text-foreground/[0.04] leading-none absolute -top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none" aria-hidden="true">
            &ldquo;
          </div>

          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-8">
            {lang === "en" ? "Client Stories" : "Témoignages"}
          </p>

          <div className={`transition-all duration-300 ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
            <blockquote data-reveal-child className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.3] mb-10 italic">
              &ldquo;{t(item.text, lang)}&rdquo;
            </blockquote>

            <div data-reveal-child className="flex items-center justify-center gap-4">
              {item.avatar && (
                <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full object-cover border-2 border-accent/20" />
              )}
              <div className="text-left">
                <div className="font-sans font-semibold text-foreground">{item.name}</div>
                <div className="text-sm text-muted-foreground">{t(item.role, lang)}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          {testimonials.length > 1 && (
            <div data-reveal-child className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-all hover:-translate-x-0.5"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-accent" : "w-2 bg-foreground/15 hover:bg-foreground/25"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-all hover:translate-x-0.5"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
