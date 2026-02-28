import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, serviceLinks, Lang } from "@/i18n/translations";
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PartnersBar from "@/components/sections/PartnersBar";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import { BookOpen, Users, FileText, TrendingUp, CreditCard, Receipt, Lightbulb, CheckCircle, Monitor, Cloud, BarChart3, Rocket } from "lucide-react";

type T = Record<Lang, string>;

const iconMap: Record<string, any> = { BookOpen, Users, FileText, TrendingUp, CreditCard, Receipt, Lightbulb };
const serviceIcons = ["BookOpen", "Users", "FileText", "TrendingUp", "CreditCard", "Receipt", "Lightbulb"];
const serviceDescs: T[] = [
  { en: "Cloud-based bookkeeping powered by Xero.", fr: "Tenue de livres infonuagique propulsée par Xero." },
  { en: "Automated payroll processing with Gusto.", fr: "Traitement automatisé de la paie avec Gusto." },
  { en: "GST/HST filings and corporate tax returns.", fr: "Déclarations TPS/TVH et impôts corporatifs." },
  { en: "Strategic financial leadership on demand.", fr: "Leadership financier stratégique à la demande." },
  { en: "Automated bill payments and vendor management.", fr: "Paiements automatisés et gestion des fournisseurs." },
  { en: "Invoice tracking and collections.", fr: "Suivi des factures et recouvrements." },
  { en: "Expert guidance on strategy and compliance.", fr: "Accompagnement expert en stratégie et conformité." },
];

const whyTabs = [
  { icon: Monitor, label: { en: "Clean Desk", fr: "Bureau en ordre" } as T, points: { en: ["All financial documents organized in the cloud", "No more lost receipts or missing invoices", "Real-time access to your financial data", "Automated data entry reduces errors"], fr: ["Documents financiers organisés dans le nuage", "Plus de reçus perdus", "Accès en temps réel à vos données", "La saisie automatisée réduit les erreurs"] } },
  { icon: Cloud, label: { en: "Cloud Access", fr: "Accès cloud" } as T, points: { en: ["Access your books from any device", "Bank-level security for all data", "Automatic backups", "Real-time team collaboration"], fr: ["Accédez à vos livres depuis n'importe quel appareil", "Sécurité de niveau bancaire", "Sauvegardes automatiques", "Collaboration en temps réel"] } },
  { icon: BarChart3, label: { en: "Gain Clarity", fr: "Clarté" } as T, points: { en: ["Custom dashboards tailored to your KPIs", "Monthly reports with actionable insights", "Cash flow visibility at a glance", "Data-driven decision making"], fr: ["Tableaux de bord personnalisés", "Rapports mensuels avec recommandations", "Visibilité du flux de trésorerie", "Décisions basées sur les données"] } },
  { icon: Rocket, label: { en: "Beyond Books", fr: "Au-delà" } as T, points: { en: ["Strategic financial advisory", "Fractional CFO services", "Tax planning and optimization", "Industry-specific expertise"], fr: ["Conseil financier stratégique", "Services de directeur financier partiel", "Planification fiscale", "Expertise sectorielle"] } },
];

const whyList: { title: T; desc: T }[] = [
  { title: { en: "100% Online", fr: "100% En ligne" }, desc: { en: "Everything runs in the cloud. No software to install.", fr: "Tout fonctionne dans le nuage. Aucun logiciel à installer." } },
  { title: { en: "No Re-training", fr: "Sans recyclage" }, desc: { en: "We adapt to your tools and workflows.", fr: "Nous nous adaptons à vos outils et processus." } },
  { title: { en: "Gain Clarity", fr: "Clarté financière" }, desc: { en: "Real-time dashboards and reports.", fr: "Tableaux de bord et rapports en temps réel." } },
  { title: { en: "Beyond Bookkeeping", fr: "Au-delà de la comptabilité" }, desc: { en: "Strategic insights that drive growth.", fr: "Perspectives stratégiques pour la croissance." } },
  { title: { en: "Expert Solutions", fr: "Solutions expertes" }, desc: { en: "Deep expertise across industries.", fr: "Expertise approfondie dans tous les secteurs." } },
  { title: { en: "Value Innovation", fr: "Innovation de valeur" }, desc: { en: "Latest fintech for more value at lower cost.", fr: "Dernières innovations fintech à moindre coût." } },
];

const homeFAQ: { q: T; a: T }[] = [
  { q: { en: "What industries do you serve?", fr: "Quels secteurs desservez-vous?" }, a: { en: "We specialize in tech startups, e-commerce, professional services, and contractors across Canada.", fr: "Nous nous spécialisons dans les startups technologiques, le commerce en ligne, les services professionnels et les entrepreneurs au Canada." } },
  { q: { en: "How is Namaca different from traditional accounting firms?", fr: "En quoi Namaca diffère-t-il des cabinets comptables traditionnels?" }, a: { en: "We're 100% cloud-based, leveraging modern tools like Xero, Dext, and Gusto to deliver faster, more accurate, and more accessible accounting.", fr: "Nous sommes 100% infonuagiques, utilisant des outils modernes comme Xero, Dext et Gusto pour offrir une comptabilité plus rapide et plus précise." } },
  { q: { en: "Do you work with businesses outside Montréal?", fr: "Travaillez-vous avec des entreprises hors de Montréal?" }, a: { en: "Absolutely! Being fully cloud-based, we work with clients across Canada and internationally.", fr: "Absolument! Étant entièrement infonuagiques, nous travaillons avec des clients partout au Canada et à l'international." } },
  { q: { en: "How do I get started?", fr: "Comment commencer?" }, a: { en: "Simply book a free consultation call. We'll discuss your needs and create a customized plan.", fr: "Réservez simplement un appel de consultation gratuit. Nous discuterons de vos besoins et créerons un plan personnalisé." } },
];

export default function Index() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Layout>
      {/* Hero */}
      <Hero
        badge={lang === "en" ? "100% Cloud-Based" : "100% Infonuagique"}
        title={lang === "en" ? "The Future of Accounting for SMEs & Startups" : "L'avenir de la comptabilité pour PME et startups"}
        subtitle={lang === "en" ? "We combine a dedicated team, modern techniques, and the latest technology to deliver cloud-based accounting solutions that help your business thrive." : "Nous combinons une équipe dédiée, des techniques modernes et les dernières technologies pour des solutions comptables infonuagiques."}
        ctaText={lang === "en" ? "Schedule a Call" : "Planifier un appel"}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="bg-background rounded-2xl p-6 shadow-lg">
              <div className="text-sm text-muted-foreground mb-1">{lang === "en" ? "Revenue" : "Revenus"}</div>
              <div className="text-3xl font-bold text-foreground">$2.4M</div>
              <div className="text-sm font-medium text-orange">↑ 24%</div>
            </div>
            <div className="bg-navy rounded-2xl p-6 text-primary-foreground shadow-lg">
              <div className="text-sm opacity-80 mb-1">{lang === "en" ? "Expenses" : "Dépenses"}</div>
              <div className="text-3xl font-bold">$890K</div>
              <div className="text-sm text-orange-light font-medium">↓ 12%</div>
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="bg-orange rounded-2xl p-6 text-accent-foreground shadow-lg">
              <div className="text-sm opacity-90 mb-1">{lang === "en" ? "Profit Margin" : "Marge"}</div>
              <div className="text-3xl font-bold">63%</div>
              <div className="text-sm opacity-90">↑ 8%</div>
            </div>
            <div className="bg-background rounded-2xl p-6 shadow-lg border border-border">
              <div className="text-sm text-muted-foreground mb-1">{lang === "en" ? "Cash Flow" : "Trésorerie"}</div>
              <div className="text-3xl font-bold text-foreground">$1.2M</div>
              <div className="text-sm font-medium text-orange">{lang === "en" ? "Healthy" : "Sain"}</div>
            </div>
          </div>
        </div>
      </Hero>

      {/* Why Choose Us Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 font-display">
            {lang === "en" ? "Why Choose Namaca?" : "Pourquoi choisir Namaca?"}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {whyTabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button key={i} onClick={() => setActiveTab(i)} className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${activeTab === i ? "bg-orange text-accent-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-cream-dark"}`}>
                  <Icon size={18} />{t(tab.label, lang)}
                </button>
              );
            })}
          </div>
          <div className="max-w-3xl mx-auto bg-cream rounded-2xl p-8 md:p-10">
            <ul className="space-y-4">
              {whyTabs[activeTab].points[lang].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-orange mt-0.5 shrink-0" size={20} />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              {lang === "en" ? "Our Services" : "Nos services"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {lang === "en" ? "Comprehensive financial solutions tailored to your business needs." : "Solutions financières complètes adaptées à vos besoins."}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {serviceLinks.map((s, i) => {
              const Icon = iconMap[serviceIcons[i]];
              return (
                <Link key={s.slug} to={`/${s.slug}`} className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group border border-border/50 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-colors">
                    <Icon className="text-orange" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{t(s.label, lang)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(serviceDescs[i], lang)}</p>
                  <span className="text-sm font-medium text-orange">{lang === "en" ? "Learn More →" : "En savoir plus →"}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Numbered */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14 font-display">
            {lang === "en" ? "Why Us" : "Pourquoi nous"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyList.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-5xl font-bold text-orange/20 font-display leading-none select-none">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{t(item.title, lang)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(item.desc, lang)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <TestimonialsSection />
      <FAQSection items={homeFAQ} />
      <PartnersBar />
      <CTASection />
    </Layout>
  );
}
