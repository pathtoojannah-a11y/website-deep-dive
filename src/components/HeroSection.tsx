import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { Cloud, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { lang } = useLanguage();
  const hero = translations.hero;

  return (
    <section id="hero" className="bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange/10 text-orange-dark px-4 py-1.5 rounded-full text-sm font-medium">
              <Cloud size={16} />
              {t(hero.badge, lang)}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-display">
              {t(hero.title, lang)}
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {t(hero.subtitle, lang)}
            </p>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-orange hover:bg-orange-dark text-accent-foreground rounded-full px-8 py-6 text-base font-medium group"
              size="lg"
            >
              {t(hero.cta, lang)}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-background rounded-2xl p-6 shadow-lg">
                  <div className="text-sm text-muted-foreground mb-1">{lang === "en" ? "Revenue" : "Revenus"}</div>
                  <div className="text-3xl font-bold text-foreground">$2.4M</div>
                  <div className="text-sm font-medium" style={{ color: "hsl(142, 71%, 45%)" }}>↑ 24%</div>
                </div>
                <div className="bg-navy rounded-2xl p-6 text-primary-foreground shadow-lg">
                  <div className="text-sm opacity-80 mb-1">{lang === "en" ? "Expenses" : "Dépenses"}</div>
                  <div className="text-3xl font-bold">$890K</div>
                  <div className="text-sm text-orange-light font-medium">↓ 12%</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-orange rounded-2xl p-6 text-accent-foreground shadow-lg">
                  <div className="text-sm opacity-90 mb-1">{lang === "en" ? "Profit Margin" : "Marge bénéficiaire"}</div>
                  <div className="text-3xl font-bold">63%</div>
                  <div className="text-sm opacity-90">↑ 8%</div>
                </div>
                <div className="bg-background rounded-2xl p-6 shadow-lg border border-border">
                  <div className="text-sm text-muted-foreground mb-1">{lang === "en" ? "Cash Flow" : "Flux de trésorerie"}</div>
                  <div className="text-3xl font-bold text-foreground">$1.2M</div>
                  <div className="text-sm font-medium" style={{ color: "hsl(142, 71%, 45%)" }}>{lang === "en" ? "Healthy" : "Sain"}</div>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-navy/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full text-background" fill="currentColor">
          <path d="M0,40 C360,80 720,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
