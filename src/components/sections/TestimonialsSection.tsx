import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

type T = Record<Lang, string>;
interface Testimonial { text: T; name: string; role: T; avatar?: string }

const defaultTestimonials: Testimonial[] = [
  {
    text: { en: "Namaca has been an absolute game-changer for our business. Their cloud-based approach means we always have real-time access to our financial data, and their team is incredibly responsive and knowledgeable. Highly recommended!", fr: "Namaca a été un véritable changement pour notre entreprise. Leur approche infonuagique nous donne un accès en temps réel à nos données financières, et leur équipe est incroyablement réactive et compétente. Hautement recommandé!" },
    name: "Greg Pritchard",
    role: { en: "Business Owner", fr: "Propriétaire d'entreprise" },
    avatar: "https://namaca.ca/wp-content/uploads/2024/09/image-1.png",
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14 font-display">
          {lang === "en" ? "What Our Clients Say" : "Ce que disent nos clients"}
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 text-center">
            <div className="flex gap-1 justify-center mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={18} className="fill-orange text-orange" />
              ))}
            </div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">"{t(item.text, lang)}"</p>
            <div className="flex items-center justify-center gap-4">
              {item.avatar && (
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
              )}
              <div className="text-left">
                <div className="font-bold text-foreground">{item.name}</div>
                <div className="text-sm text-muted-foreground">{t(item.role, lang)}</div>
              </div>
            </div>
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
      </div>
    </section>
  );
}
