import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { cta, t } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const { lang } = useLanguage();
  return (
    <section className="relative overflow-hidden" data-reveal>
      <div className="bg-gradient-to-br from-accent to-orange-light py-20 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <h2 data-reveal-child className="font-display text-3xl md:text-4xl lg:text-5xl text-accent-foreground mb-5">{t(cta.title, lang)}</h2>
          <p data-reveal-child className="text-accent-foreground/80 text-lg mb-10 max-w-xl mx-auto">{t(cta.subtitle, lang)}</p>
          <div data-reveal-child>
            <Button asChild className="bg-primary text-primary-foreground rounded-full px-10 py-6 text-base font-semibold hover:bg-navy-mid transition-all hover:-translate-y-0.5 shadow-xl group" size="lg">
              <Link to="/expertise#contact">
                {t(cta.button, lang)}
                <ArrowRight size={18} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
