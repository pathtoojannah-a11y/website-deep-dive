import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/sections/Hero";
import PartnersBar from "@/components/sections/PartnersBar";
import ServiceShowcase from "@/components/sections/ServiceShowcase";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import MiniCTA from "@/components/sections/MiniCTA";
import InlineTestimonial from "@/components/sections/InlineTestimonial";
import HeroActivityCard from "@/components/sections/HeroActivityCard";
import Tilt3DCard from "@/components/Tilt3DCard";
import WaveDivider from "@/components/WaveDivider";
import beforeAfterSplit from "@/assets/before-after-split.png";
import { Cloud, BarChart3, Monitor, Phone, FolderOpen, TrendingUp, type LucideIcon } from "lucide-react";

type T = Record<Lang, string>;

const approach: { icon: LucideIcon; title: T; desc: T }[] = [
  { icon: FolderOpen, title: { en: "Clean Desk Policy", fr: "Bureau propre" }, desc: { en: "All financial documents organized in the cloud. No more lost receipts or missing invoices. Your books stay pristine.", fr: "Tous vos documents financiers sont organises dans le cloud. Plus de recus perdus ni de factures manquantes." } },
  { icon: Cloud, title: { en: "Cloud-First Access", fr: "Acces infonuagique" }, desc: { en: "Access your financials from anywhere, any device. Bank-level security and real-time collaboration.", fr: "Accedez a vos finances de partout, sur tout appareil. Securite de niveau bancaire et collaboration en temps reel." } },
  { icon: BarChart3, title: { en: "Gain Clarity", fr: "Gagner en clarte" }, desc: { en: "Custom dashboards for KPIs, monthly reporting, and visibility on cash flow.", fr: "Tableaux de bord KPI personnalises, rapports mensuels, et visibilite sur la tresorerie." } },
  { icon: TrendingUp, title: { en: "Beyond Bookkeeping", fr: "Au-dela de la comptabilite" }, desc: { en: "Strategic advisory, fractional CFO support, tax planning, and industry-specific expertise.", fr: "Conseil strategique, support CFO fractionnel, planification fiscale, et expertise sectorielle." } },
];

const homeFAQ: { q: T; a: T }[] = [
  { q: { en: "What industries do you serve?", fr: "Quels secteurs desservez-vous?" }, a: { en: "We support tech startups, ecommerce, professional services, and contractors across Canada.", fr: "Nous accompagnons les startups tech, le ecommerce, les services professionnels, et les entrepreneurs partout au Canada." } },
  { q: { en: "How is Namaca different from traditional firms?", fr: "Qu'est-ce qui differencie Namaca?" }, a: { en: "We are cloud-first and process-driven, using modern tools for faster and more reliable delivery.", fr: "Nous sommes cloud-first et pilotes par processus, avec des outils modernes pour une livraison plus rapide et fiable." } },
  { q: { en: "Do you work outside Montreal?", fr: "Travaillez-vous hors Montreal?" }, a: { en: "Yes. We work remotely with clients across Canada and internationally.", fr: "Oui. Nous travaillons a distance avec des clients au Canada et a l'international." } },
  { q: { en: "How do we get started?", fr: "Comment commencer?" }, a: { en: "Book a consultation call and we will design a tailored accounting operations plan.", fr: "Reservez une consultation et nous construirons un plan adapte a vos operations comptables." } },
];

export default function Index() {
  const { lang } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title={lang === "en" ? "Cloud Accounting for Canadian SMEs" : "Comptabilité infonuagique pour PME canadiennes"}
        description={lang === "en" ? "Modern cloud-first accounting, bookkeeping, payroll, tax compliance and fractional CFO services. 200+ clients served." : "Comptabilité infonuagique moderne, tenue de livres, paie, conformité fiscale et services CFO. 200+ clients desservis."}
      />
      <Hero
        variant="cinematic"
        title={lang === "en" ? "Clean books. Clear numbers. Zero stress." : "Livres propres. Chiffres clairs. Zéro stress."}
        subtitle={lang === "en" ? "From bookkeeping to CFO advisory, we keep your books clean, your payroll on time, and your numbers ready — so you never have to worry about it again." : "De la tenue de livres au conseil CFO, nous gardons vos livres propres, votre paie a temps et vos chiffres prets — pour que vous n'ayez plus jamais a vous en soucier."}
        ctaText={lang === "en" ? "Fix your books" : "Reparons vos livres"}
        ghostCtaText={lang === "en" ? "Explore Services" : "Decouvrir nos services"}
        ghostCtaLink="/services"
        mediaSlot={<HeroActivityCard lang={lang} />}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-primary-foreground/50 text-sm font-sans font-medium tracking-wide">
          <span>{lang === "en" ? "200+ businesses served" : "200+ entreprises accompagnees"}</span>
          <span className="text-primary-foreground/20">.</span>
          <span>{lang === "en" ? "CPA-level expertise" : "Expertise niveau CPA"}</span>
          <span className="text-primary-foreground/20">.</span>
          <span>{lang === "en" ? "15+ years experience" : "15+ ans d'experience"}</span>
          <span className="text-primary-foreground/20">.</span>
          <a href="tel:+15148191513" className="inline-flex items-center gap-1.5 text-primary-foreground/50 hover:text-accent transition-colors">
            <Phone size={14} />
            +1 (514) 819-1513
          </a>
        </div>
      </Hero>

      <div className="relative section-wave">
        <WaveDivider position="bottom" fillColor="hsl(220 14% 98%)" />
      </div>
      <PartnersBar />

      <div id="services">
        <ServiceShowcase />
      </div>

      <section id="why-namaca" className="py-24 md:py-32 lg:py-40 bg-background" data-reveal>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-reveal-child>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-6">{lang === "en" ? "Why Namaca" : "Pourquoi Namaca"}</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-[1.15] mb-6">
                {lang === "en" ? "We do more than bookkeeping. We deliver clarity and control." : "Nous faisons plus que la comptabilite. Nous apportons clarte et controle."}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {lang === "en" ? "Most firms hand over numbers. We deliver operating insight. Real-time access, automated workflows, and practical guidance that improves decisions." : "La plupart des cabinets livrent des chiffres. Nous livrons de l'insight operationnel. Acces temps reel, automatisation, et conseils actionnables."}
              </p>
            </div>
            <div className="hidden lg:block" data-reveal-child>
              <div className="relative" style={{ perspective: "1200px" }} data-parallax-y="0.08">
                <img
                  src={beforeAfterSplit}
                  alt="Before and after accounting operations"
                  className="w-full rounded-2xl shadow-2xl"
                  style={{ transform: "rotateY(-8deg)", transformOrigin: "center center" }}
                />
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 mt-16" data-reveal-child>
            {[
              { icon: Monitor, stat: "100%", label: { en: "Cloud-Based Operations", fr: "Operations infonuagiques" } },
              { icon: BarChart3, stat: "24h", label: { en: "Response Time", fr: "Temps de reponse" } },
              { icon: Cloud, stat: "Real-time", label: { en: "Financial Visibility", fr: "Visibilite financiere" } },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="text-center icon-hover cursor-default">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:bg-accent/20 hover:scale-110">
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

      <MiniCTA
        heading={{ en: "See how we can streamline your finances", fr: "Découvrez comment nous pouvons simplifier vos finances" }}
        buttonText={{ en: "Book a Free Consultation", fr: "Réservez une consultation gratuite" }}
      />

      <InlineTestimonial
        quote={lang === "en" ? "Namaca gave us the financial clarity to move faster without increasing risk." : "Namaca nous a donne la clarte financiere pour aller plus vite sans augmenter le risque."}
        author="Alexandre Dupuis"
        role={lang === "en" ? "CEO, Multi-Location Operator" : "CEO, operateur multi-sites"}
      />

      <StatsSection />

      <div className="relative section-wave bg-navy">
        <WaveDivider position="bottom" fillColor="hsl(220 14% 96%)" />
      </div>

      <section id="approach" className="py-24 md:py-32 lg:py-40 bg-cream" data-reveal>
        <div className="container mx-auto px-4 max-w-5xl">
          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">{lang === "en" ? "Our Approach" : "Notre approche"}</p>
          <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-foreground mb-14 max-w-lg">{lang === "en" ? "How we transform your back office" : "Comment nous transformons votre comptabilite"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {approach.map((block, i) => (
              <Tilt3DCard
                key={i}
                className={`rounded-2xl gradient-border ${
                  i === 0 ? "border-l-4 border-l-blue-500" :
                  i === 1 ? "border-l-4 border-l-accent" :
                  i === 2 ? "border border-border/40" :
                  "border border-accent/10"
                }`}
              >
                <div
                  className={`relative rounded-2xl p-8 md:p-10 ${
                    i === 0 ? "bg-card shadow-md" :
                    i === 1 ? "bg-card shadow-md" :
                    i === 2 ? "bg-card shadow-lg" :
                    "bg-gradient-to-br from-accent/5 to-gold/5"
                  }`}
                  data-reveal-child
                >
                  <span className="absolute top-4 right-6 font-display text-7xl leading-none pointer-events-none select-none text-accent/[0.12]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <block.icon className="text-accent" size={20} />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl mb-3 text-foreground">{t(block.title, lang)}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t(block.desc, lang)}</p>
                </div>
              </Tilt3DCard>
            ))}
          </div>
        </div>
      </section>

      <InlineTestimonial
        quote={lang === "en" ? "Their process-driven approach saved us 20+ hours a month. We finally have time to focus on growing the business." : "Leur approche axée sur les processus nous a fait gagner 20+ heures par mois. Nous avons enfin le temps de nous concentrer sur la croissance."}
        author="Sophie Tremblay"
        role={lang === "en" ? "COO, Tech Startup" : "COO, Startup technologique"}
      />

      <MiniCTA
        heading={{ en: "Ready to transform your back office?", fr: "Prêt à transformer votre comptabilité?" }}
        buttonText={{ en: "Let's Talk", fr: "Parlons-en" }}
        variant="dark"
      />

      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="faq">
        <FAQSection items={homeFAQ} />
      </div>
      <ContactSection />
      <CTASection />
    </Layout>
  );
}
