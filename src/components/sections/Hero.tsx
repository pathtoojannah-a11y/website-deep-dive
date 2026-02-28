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
  variant?: "cinematic" | "split" | "centered" | "editorial";
  heroImage?: string;
  /** Element rendered on the right side of split hero or below centered hero */
  visualElement?: ReactNode;
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
  heroImage,
  visualElement,
}: HeroProps) {

  /* ─── Centered variant (like Ramp bill-pay) ─── */
  if (variant === "centered") {
    return (
      <section className="bg-cream relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-16 relative z-10" data-reveal>
          <div className="max-w-2xl mx-auto text-center">
            {eyebrow && (
              <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-6">{eyebrow}</p>
            )}
            <h1 data-reveal-child className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.08] mb-6 text-balance">
              {title}
            </h1>
            <p data-reveal-child className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">{subtitle}</p>
            {ctaText && (
              <div data-reveal-child className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-accent hover:bg-orange-dark text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-accent/20 group" size="lg">
                  <Link to={ctaLink}>
                    {ctaText}
                    <ArrowRight size={18} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                {ghostCtaText && ghostCtaLink && (
                  <Button asChild variant="outline" className="rounded-full px-8 py-6 text-base font-medium border-foreground/20 hover:bg-foreground/5 transition-all" size="lg">
                    <Link to={ghostCtaLink}>{ghostCtaText}</Link>
                  </Button>
                )}
              </div>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
          {visualElement && (
            <div className="mt-12 flex justify-center" data-reveal-child>
              {visualElement}
            </div>
          )}
        </div>
      </section>
    );
  }

  /* ─── Editorial variant (like Stripe — large text, no image) ─── */
  if (variant === "editorial") {
    return (
      <section className="bg-navy min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10" data-reveal>
          <div className="max-w-4xl">
            {eyebrow && (
              <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-6">{eyebrow}</p>
            )}
            <h1 data-reveal-child className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground leading-[1.02] mb-8 text-balance">
              {title}
            </h1>
            <p data-reveal-child className="text-xl md:text-2xl text-primary-foreground/50 max-w-xl leading-relaxed mb-10">{subtitle}</p>
            {ctaText && (
              <div data-reveal-child>
                <Button asChild className="bg-accent hover:bg-orange-dark text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-accent/25 group" size="lg">
                  <Link to={ctaLink}>
                    {ctaText}
                    <ArrowRight size={18} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            )}
            {children && <div className="mt-10">{children}</div>}
          </div>
        </div>
      </section>
    );
  }

  /* ─── Cinematic variant ─── */
  if (variant === "cinematic") {
    return (
      <section className="relative bg-navy min-h-[85vh] flex items-end overflow-hidden">
        {heroImage && (
          <>
            <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
          </>
        )}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 pb-16 pt-32 relative z-10" data-reveal>
          <div className={`${visualElement ? "grid lg:grid-cols-[1fr_auto] gap-12 items-end" : ""}`}>
            <div className="max-w-3xl">
              {eyebrow && (
                <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-6">{eyebrow}</p>
              )}
              <h1 data-reveal-child className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.05] mb-6 text-balance">
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
                  <Button asChild variant="outline" className="rounded-full px-8 py-6 text-base font-medium border border-white/40 text-primary-foreground hover:bg-primary-foreground/10 hover:-translate-y-0.5 transition-all" size="lg">
                    <Link to={ghostCtaLink}>{ghostCtaText}</Link>
                  </Button>
                )}
              </div>
            </div>
            {visualElement && (
              <div className="hidden lg:block" data-reveal-child>
                {visualElement}
              </div>
            )}
          </div>
          {children && <div className="mt-10">{children}</div>}
        </div>
      </section>
    );
  }

  /* ─── Split variant (default) ─── */
  return (
    <section className="bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center" data-reveal>
          <div className="space-y-6">
            {eyebrow && (
              <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent">{eyebrow}</p>
            )}
            <h1 data-reveal-child className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.08] text-balance">
              {title}
            </h1>
            <p data-reveal-child className="text-lg text-muted-foreground max-w-lg leading-relaxed">{subtitle}</p>
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
            {visualElement ? visualElement : children ? children : heroImage ? (
              <img src={heroImage} alt="" className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl" />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
