import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";

type T = Record<Lang, string>;
interface Testimonial { text: T; name: string; role: T; avatar?: string }

const defaultTestimonials: Testimonial[] = [
  {
    text: { en: "Namaca has been an absolute game-changer for our business. Their cloud-based approach means we always have real-time access to our financial data, and their team is incredibly responsive and knowledgeable.", fr: "Namaca a été un véritable changement pour notre entreprise. Leur approche infonuagique nous donne un accès en temps réel à nos données financières, et leur équipe est incroyablement réactive et compétente." },
    name: "Greg Pritchard",
    role: { en: "Business Owner", fr: "Propriétaire d'entreprise" },
    avatar: "https://namaca.ca/wp-content/uploads/2024/09/image-1.png",
  },
];

export default function TestimonialsSection({ items }: { items?: Testimonial[] }) {
  const { lang } = useLanguage();
  const testimonials = items || defaultTestimonials;
  const item = testimonials[0];

  return (
    <section className="py-20 md:py-28 bg-cream relative overflow-hidden" data-reveal>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative quote mark */}
          <div className="font-display text-[12rem] md:text-[16rem] text-foreground/[0.04] leading-none absolute -top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none" aria-hidden="true">
            "
          </div>

          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-8">
            {lang === "en" ? "Client Stories" : "Témoignages"}
          </p>

          <blockquote data-reveal-child className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.3] mb-10 italic">
            "{t(item.text, lang)}"
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
      </div>
    </section>
  );
}
