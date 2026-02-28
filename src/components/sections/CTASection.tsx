import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { cta, t } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const { lang } = useLanguage();
  return (
    <section className="py-20 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">{t(cta.title, lang)}</h2>
        <p className="text-primary-foreground/70 text-lg mb-8">{t(cta.subtitle, lang)}</p>
        <Button asChild className="bg-orange hover:bg-orange-dark text-accent-foreground rounded-full px-8 py-6 text-base font-medium group" size="lg">
          <Link to="/expertise#contact">
            {t(cta.button, lang)}
            <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
