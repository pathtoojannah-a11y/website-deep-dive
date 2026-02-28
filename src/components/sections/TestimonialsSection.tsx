import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

type T = Record<Lang, string>;
interface Testimonial { text: T; name: string; role: T }

const defaultTestimonials: Testimonial[] = [
  {
    text: { en: "Namaca transformed our accounting process. We went from spreadsheets to a fully automated cloud system in weeks. The clarity we have now is incredible.", fr: "Namaca a transformé notre processus comptable. Nous sommes passés de feuilles de calcul à un système infonuagique entièrement automatisé en quelques semaines." },
    name: "Sophie L.",
    role: { en: "CEO, TechStart Inc.", fr: "PDG, TechStart Inc." },
  },
  {
    text: { en: "Their fractional CFO service was exactly what we needed. Expert financial guidance without the overhead of a full-time hire.", fr: "Leur service de directeur financier à temps partiel était exactement ce dont nous avions besoin. Un accompagnement financier expert sans les frais d'un employé à temps plein." },
    name: "Marc D.",
    role: { en: "Founder, E-Shop Montréal", fr: "Fondateur, E-Shop Montréal" },
  },
  {
    text: { en: "The team at Namaca is responsive, knowledgeable, and genuinely cares about our success. Best accounting partner we've ever had.", fr: "L'équipe de Namaca est réactive, compétente et se soucie véritablement de notre succès. Le meilleur partenaire comptable que nous ayons eu." },
    name: "Aïcha B.",
    role: { en: "Operations Director, BuildRight Co.", fr: "Directrice des opérations, BuildRight Co." },
  },
];

export default function TestimonialsSection({ items }: { items?: Testimonial[] }) {
  const { lang } = useLanguage();
  const testimonials = items || defaultTestimonials;
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const item = testimonials[idx];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="text-orange mx-auto mb-6" size={40} />
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">"{t(item.text, lang)}"</p>
          <div className="font-bold text-foreground text-lg">{item.name}</div>
          <div className="text-sm text-muted-foreground">{t(item.role, lang)}</div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"><ChevronLeft size={20} /></button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === idx ? "bg-orange" : "bg-border"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
