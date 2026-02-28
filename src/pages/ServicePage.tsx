import { useParams, Navigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/translations";
import { services } from "@/data/services";
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { BookOpen, Users, FileText, TrendingUp, CreditCard, Receipt, Lightbulb, CheckCircle } from "lucide-react";

const iconMap: Record<string, any> = { BookOpen, Users, FileText, TrendingUp, CreditCard, Receipt, Lightbulb };

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  const Icon = iconMap[service.icon];

  return (
    <Layout>
      <Hero
        badge={t(service.title, lang)}
        title={t(service.title, lang)}
        subtitle={t(service.heroSubtitle, lang)}
        ctaText={lang === "en" ? "Get Started" : "Commencer"}
        ctaLink="/expertise#contact"
      >
        <div className="bg-background rounded-2xl p-8 shadow-lg border border-border/50">
          <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mb-6">
            <Icon className="text-orange" size={32} />
          </div>
          <p className="text-muted-foreground leading-relaxed">{t(service.description, lang)}</p>
        </div>
      </Hero>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 font-display">
            {lang === "en" ? "Key Benefits" : "Avantages clés"}
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-14 max-w-2xl mx-auto">
            {lang === "en" ? "Here's what you get with our service." : "Voici ce que vous obtenez avec notre service."}
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((b, i) => (
              <div key={i} className="flex gap-4 bg-cream rounded-2xl p-6">
                <CheckCircle className="text-orange shrink-0 mt-0.5" size={22} />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t(b.title, lang)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(b.desc, lang)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14 font-display">
            {lang === "en" ? "How It Works" : "Comment ça fonctionne"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {service.process.map((p, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-orange/20 font-display mb-4">{p.step}</div>
                <h3 className="font-bold text-foreground mb-2 text-lg">{t(p.title, lang)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(p.desc, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection items={service.faq} />
      <ContactSection />
      <CTASection />
    </Layout>
  );
}
