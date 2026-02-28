import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, serviceLinks, Lang } from "@/i18n/translations";
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import PartnersBar from "@/components/sections/PartnersBar";
import ServiceShowcase from "@/components/sections/ServiceShowcase";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import DashboardMockup from "@/components/sections/DashboardMockup";
import heroHome from "@/assets/hero-home.jpg";
import beforeAfterSplit from "@/assets/before-after-split.png";
import { CheckCircle, Cloud, BarChart3, Rocket, Monitor, Users, Shield, Zap } from "lucide-react";

type T = Record<Lang, string>;

/* Editorial "Our Approach" blocks — each styled uniquely */
const approach: { title: T; desc: T }[] = [
  { title: { en: "Clean Desk Policy", fr: "Bureau propre" }, desc: { en: "All financial documents organized in the cloud. No more lost receipts or missing invoices. Your books stay pristine.", fr: "Tous vos documents financiers organisés dans le nuage. Plus de reçus perdus ni de factures manquantes." } },
  { title: { en: "Cloud-First Access", fr: "Accès infonuagique" }, desc: { en: "Access your financials from anywhere, any device. Bank-level security. Real-time team collaboration.", fr: "Accédez à vos finances de partout, depuis n'importe quel appareil. Sécurité bancaire. Collaboration en temps réel." } },
  { title: { en: "Gain Clarity", fr: "Gagner en clarté" }, desc: { en: "Custom dashboards for your KPIs. Monthly reports with actionable insights. Cash flow visibility at a glance.", fr: "Tableaux de bord personnalisés pour vos KPI. Rapports mensuels avec recommandations concrètes." } },
  { title: { en: "Beyond Bookkeeping", fr: "Au-delà de la comptabilité" }, desc: { en: "Strategic financial advisory, fractional CFO services, tax planning, and industry-specific expertise.", fr: "Conseil financier stratégique, services de directeur financier, planification fiscale et expertise sectorielle." } },
];

const homeFAQ: { q: T; a: T }[] = [
  { q: { en: "What industries do you serve?", fr: "Quels secteurs desservez-vous?" }, a: { en: "We specialize in tech startups, e-commerce, professional services, and contractors across Canada.", fr: "Nous nous spécialisons dans les startups technologiques, le commerce en ligne, les services professionnels et les entrepreneurs au Canada." } },
  { q: { en: "How is Namaca different from traditional accounting firms?", fr: "En quoi Namaca diffère-t-il des cabinets comptables traditionnels?" }, a: { en: "We're 100% cloud-based, leveraging modern tools like Xero, Dext, and Gusto to deliver faster, more accurate, and more accessible accounting.", fr: "Nous sommes 100% infonuagiques, utilisant des outils modernes comme Xero, Dext et Gusto pour offrir une comptabilité plus rapide et plus précise." } },
  { q: { en: "Do you work with businesses outside Montréal?", fr: "Travaillez-vous avec des entreprises hors de Montréal?" }, a: { en: "Absolutely! Being fully cloud-based, we work with clients across Canada and internationally.", fr: "Absolument! Étant entièrement infonuagiques, nous travaillons avec des clients partout au Canada et à l'international." } },
  { q: { en: "How do I get started?", fr: "Comment commencer?" }, a: { en: "Simply book a free consultation call. We'll discuss your needs and create a customized plan.", fr: "Réservez simplement un appel de consultation gratuit. Nous discuterons de vos besoins et créerons un plan personnalisé." } },
];

export default function Index() {
  const { lang } = useLanguage();

  return (
    <Layout>
      {/* 1. Cinematic Hero with floating dashboard mockup */}
      <Hero
        variant="cinematic"
        eyebrow={lang === "en" ? "100% Cloud-Based Accounting" : "Comptabilité 100% infonuagique"}
        title={lang === "en" ? "Your finances, handled. So you can focus on growth." : "Vos finances, prises en charge. Pour que vous puissiez grandir."}
        subtitle={lang === "en" ? "We combine a dedicated team, modern techniques, and the latest technology to deliver accounting solutions that help Canadian businesses thrive." : "Nous combinons une équipe dédiée, des techniques modernes et les dernières technologies pour offrir des solutions comptables qui aident les entreprises canadiennes à prospérer."}
        ctaText={lang === "en" ? "Book a Free Consultation" : "Réserver une consultation gratuite"}
        ghostCtaText={lang === "en" ? "Explore Services" : "Découvrir nos services"}
        ghostCtaLink="/#services"
        heroImage={heroHome}
        visualElement={<DashboardMockup service="home" className="shadow-2xl shadow-black/20" />}
      >
        {/* Trust strip */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-primary-foreground/50 text-sm font-sans font-medium tracking-wide">
          <span>{lang === "en" ? "200+ businesses served" : "200+ entreprises desservies"}</span>
          <span className="text-primary-foreground/20">·</span>
          <span>{lang === "en" ? "CPA-level expertise" : "Expertise de niveau CPA"}</span>
          <span className="text-primary-foreground/20">·</span>
          <span>{lang === "en" ? "15+ years experience" : "15+ ans d'expérience"}</span>
        </div>
      </Hero>

      {/* 2. Partner Logo Strip */}
      <PartnersBar />

      {/* 3. Service Showcase */}
      <div id="services">
        <ServiceShowcase />
      </div>

      {/* 4. Split Media: Why Namaca */}
      <section className="py-20 md:py-28 bg-cream" data-reveal>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-reveal-child>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-6">{lang === "en" ? "Why Namaca" : "Pourquoi Namaca"}</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-[1.15] mb-6">
                {lang === "en" ? "We don't just do your books. We give you clarity, confidence, and control." : "Nous ne faisons pas que vos livres. Nous vous donnons clarté, confiance et contrôle."}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {lang === "en" ? "Most accounting firms hand you numbers. We hand you insights. Our cloud-first approach means real-time access, automated workflows, and strategic guidance that actually moves the needle." : "La plupart des cabinets vous donnent des chiffres. Nous vous donnons des perspectives. Notre approche infonuagique signifie un accès en temps réel, des flux de travail automatisés et des conseils stratégiques qui font vraiment la différence."}
              </p>
            </div>
            <div className="hidden lg:block" data-reveal-child>
              <div className="relative" style={{ perspective: "1200px" }}>
                <img
                  src={beforeAfterSplit}
                  alt="Before and after: messy manual accounting vs clean cloud dashboard"
                  className="w-full rounded-2xl shadow-2xl"
                  style={{ transform: "rotateY(-8deg)", transformOrigin: "center center" }}
                />
              </div>
            </div>
          </div>
          {/* Trust pillars */}
          <div className="grid sm:grid-cols-3 gap-8 mt-16" data-reveal-child>
            {[
              { icon: Monitor, stat: "100%", label: { en: "Cloud-Based Operations", fr: "Opérations infonuagiques" } },
              { icon: BarChart3, stat: "24h", label: { en: "Response Time", fr: "Temps de réponse" } },
              { icon: Cloud, stat: "Real-time", label: { en: "Financial Visibility", fr: "Visibilité financière" } },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-accent" size={22} />
                  </div>
                  <div className="font-display text-2xl text-foreground mb-1">{p.stat}</div>
                  <div className="text-sm text-muted-foreground">{t(p.label, lang)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Dark Impact Stats */}
      <StatsSection />

      {/* 6. Editorial Spread: Our Approach */}
      <section className="py-20 md:py-28 bg-background" data-reveal>
        <div className="container mx-auto px-4 max-w-5xl">
          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">{lang === "en" ? "Our Approach" : "Notre approche"}</p>
          <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-foreground mb-14 max-w-lg">{lang === "en" ? "How we transform your back office" : "Comment nous transformons votre comptabilité"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {approach.map((block, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 md:p-10 transition-transform hover:-translate-y-1 duration-300 ${
                  i === 0 ? "bg-card border-l-4 border-l-blue-500 shadow-md" :
                  i === 1 ? "bg-card border-l-4 border-l-accent shadow-md" :
                  i === 2 ? "bg-card shadow-lg border border-border/40" :
                  "bg-gradient-to-br from-accent/5 to-gold/5 border border-accent/10"
                }`}
                data-reveal-child
              >
                <span className="absolute top-4 right-6 font-display text-7xl leading-none pointer-events-none select-none text-foreground/[0.04]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-2xl mb-3 text-foreground">{t(block.title, lang)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(block.desc, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Pull-Quote Testimonial */}
      <TestimonialsSection />

      {/* 8. FAQ */}
      <FAQSection items={homeFAQ} />

      {/* 9. CTA Strip */}
      <CTASection />
    </Layout>
  );
}
