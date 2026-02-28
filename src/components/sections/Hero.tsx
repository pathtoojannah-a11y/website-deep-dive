import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  ghostCtaText?: string;
  ghostCtaLink?: string;
  children?: ReactNode;
  variant?: "cinematic" | "split" | "editorial" | "centered";
  layoutTone?: "light" | "dark";
  mediaSlot?: ReactNode;
  heroImage?: string;
}

export default function Hero({
  eyebrow,
  title,
  subtitle,
  ctaText,
  ctaLink = "/expertise#contact",
  ghostCtaText,
  ghostCtaLink,
  children,
  variant = "split",
  layoutTone = "light",
  mediaSlot,
  heroImage,
}: HeroProps) {
  if (variant === "cinematic") {
    return (
      <section className="relative hero-gradient-mesh min-h-[85vh] flex items-center overflow-hidden">
        {heroImage && (
          <>
            <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,40%,8%)] via-[hsl(222,40%,8%)]/40 to-transparent" />
          </>
        )}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 py-32 relative z-10" data-reveal>
          <div className={mediaSlot ? "grid lg:grid-cols-2 gap-12 items-end" : undefined}>
            <div className={mediaSlot ? "max-w-2xl" : "max-w-3xl"}>
              {eyebrow && (
                <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-6">{eyebrow}</p>
              )}
              <h1 data-reveal-child className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-foreground leading-[1.02] mb-6 text-balance tracking-tight">
                {title}
              </h1>
              <p data-reveal-child className="text-lg md:text-xl text-primary-foreground/60 max-w-xl leading-relaxed mb-8">{subtitle}</p>
              <div data-reveal-child className="flex flex-wrap gap-4">
                {ctaText && (
                  <Button asChild className="bg-accent hover:bg-orange-dark text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-accent/25 hover:-translate-y-0.5 transition-all group" size="lg">
                    <Link to={ctaLink}>
                      {ctaText}
                      <ArrowRight size={18} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                )}
                {ghostCtaText && ghostCtaLink && (
                  <Button asChild variant="outline" className="rounded-full px-8 py-6 text-base font-medium border border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5 transition-all" size="lg">
                    <Link to={ghostCtaLink}>{ghostCtaText}</Link>
                  </Button>
                )}
              </div>
            </div>
            {mediaSlot && (
              <div data-reveal-child className="hidden lg:flex justify-end">
                {mediaSlot}
              </div>
            )}
          </div>
          {children && <div className="mt-10">{children}</div>}
        </div>
      </section>
    );
  }

  if (variant === "centered") {
    const bgClass = layoutTone === "dark" ? "bg-navy text-primary-foreground" : "bg-cream text-foreground";
    const subClass = layoutTone === "dark" ? "text-primary-foreground/65" : "text-muted-foreground";
    return (
      <section className={`relative overflow-hidden ${bgClass}`}>
        <div className="container mx-auto px-4 py-20 md:py-28" data-reveal>
          <div className="max-w-4xl mx-auto text-center">
            {eyebrow && (
              <p data-reveal-child className={`font-sans text-xs font-semibold uppercase tracking-[0.15em] mb-5 ${layoutTone === "dark" ? "text-gold" : "text-accent"}`}>
                {eyebrow}
              </p>
            )}
            <h1 data-reveal-child className="font-display text-4xl md:text-6xl leading-[1.08] mb-6 text-balance">
              {title}
            </h1>
            <p data-reveal-child className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${subClass}`}>{subtitle}</p>
            <div data-reveal-child className="flex justify-center flex-wrap gap-4 mb-10">
              {ctaText && (
                <Button asChild className="bg-accent hover:bg-orange-dark text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-accent/20 group" size="lg">
                  <Link to={ctaLink}>
                    {ctaText}
                    <ArrowRight size={18} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              )}
              {ghostCtaText && ghostCtaLink && (
                <Button asChild variant="outline" className={`rounded-full px-8 py-6 text-base font-medium ${layoutTone === "dark" ? "border-white/40 text-primary-foreground hover:bg-primary-foreground/10" : ""}`} size="lg">
                  <Link to={ghostCtaLink}>{ghostCtaText}</Link>
                </Button>
              )}
            </div>
          </div>
          {(mediaSlot || children || heroImage) && (
            <div data-reveal-child className="max-w-5xl mx-auto">
              {mediaSlot || children || (heroImage ? <img src={heroImage} alt="" className="w-full rounded-2xl shadow-2xl" /> : null)}
            </div>
          )}
        </div>
      </section>
    );
  }

  // Split variant (default)
  const splitMedia = mediaSlot ?? children ?? (heroImage ? <img src={heroImage} alt="" className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl" /> : null);
  return (
    <section className={`relative overflow-hidden ${layoutTone === "dark" ? "bg-navy text-primary-foreground" : "bg-cream"}`}>
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center" data-reveal>
          <div className="space-y-6">
            {eyebrow && (
              <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent">{eyebrow}</p>
            )}
            <h1 data-reveal-child className={`font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] text-balance ${layoutTone === "dark" ? "text-primary-foreground" : "text-foreground"}`}>
              {title}
            </h1>
            <p data-reveal-child className={`text-lg max-w-lg leading-relaxed ${layoutTone === "dark" ? "text-primary-foreground/65" : "text-muted-foreground"}`}>{subtitle}</p>
            {ctaText && (
              <div data-reveal-child>
                <Button asChild className="bg-accent hover:bg-orange-dark text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-accent/20 group" size="lg">
                  <Link to={ctaLink}>
                    {ctaText}
                    <ArrowRight size={18} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            {splitMedia}
          </div>
        </div>
      </div>
    </section>
  );
}
