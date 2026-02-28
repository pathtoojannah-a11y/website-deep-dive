import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  children?: ReactNode;
  bgClass?: string;
  heroImage?: string;
}

export default function Hero({ badge, title, subtitle, ctaText, ctaLink = "/expertise#contact", children, bgClass = "bg-cream", heroImage }: HeroProps) {
  return (
    <section className={`${bgClass} relative overflow-hidden`}>
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {badge && (
              <div className="inline-flex items-center gap-2 bg-orange/10 text-orange-dark px-4 py-1.5 rounded-full text-sm font-semibold">
                {badge}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground leading-[1.1] font-display text-balance">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">{subtitle}</p>
            {ctaText && (
              <Button asChild className="bg-orange hover:bg-orange-dark text-accent-foreground rounded-full px-8 py-6 text-base font-medium group" size="lg">
                <Link to={ctaLink}>
                  {ctaText}
                  <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}
          </div>
          <div className="hidden lg:block">
            {children ? children : heroImage ? (
              <img src={heroImage} alt="" className="w-full max-w-lg mx-auto rounded-2xl" />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
