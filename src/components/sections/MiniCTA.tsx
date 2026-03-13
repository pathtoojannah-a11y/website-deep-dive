import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type T = Record<Lang, string>;

interface MiniCTAProps {
  heading: T;
  buttonText: T;
  buttonLink?: string;
  variant?: "light" | "dark";
}

export default function MiniCTA({
  heading,
  buttonText,
  buttonLink = "/expertise#contact",
  variant = "light",
}: MiniCTAProps) {
  const { lang } = useLanguage();

  const bg = variant === "dark" ? "bg-navy" : "bg-background";
  const textColor = variant === "dark" ? "text-primary-foreground" : "text-foreground";

  return (
    <section className={`${bg} py-14 md:py-16`} data-reveal>
      <div className="container mx-auto px-4">
        <div
          data-reveal-child
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left"
        >
          <p className={`font-display text-xl md:text-2xl ${textColor}`}>
            {t(heading, lang)}
          </p>
          <Button
            asChild
            className="bg-accent hover:bg-orange-dark text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-accent/25 hover:-translate-y-0.5 transition-all group cta-glow"
            size="lg"
          >
            <Link to={buttonLink}>
              {t(buttonText, lang)}
              <ArrowRight
                size={18}
                className="ml-1.5 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
