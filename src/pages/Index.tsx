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
  { en: "Cloud-based bookkeeping powered by Xero.", fr: "Nous prenons en charge votre comptabilité, de la saisie des transactions à la production de vos états financiers." },
  { en: "Automated payroll processing with Gusto.", fr: "Un service de paie complet, du calcul des salaires à la production des feuillets fiscaux." },
  { en: "GST/HST filings and corporate tax returns.", fr: "Nous préparons et produisons vos rapports de taxes (TPS/TVH/TVQ) dans les délais." },
  { en: "Strategic financial leadership on demand.", fr: "Leadership financier stratégique à la demande pour les entreprises en croissance." },
  { en: "Automated bill payments and vendor management.", fr: "Gestion complète de vos comptes fournisseurs et paiements automatisés." },
  { en: "Invoice tracking and collections.", fr: "Suivi de vos factures clients et optimisation de vos encaissements." },
  { en: "Expert guidance on strategy and compliance.", fr: "Accompagnement expert en stratégie financière et conformité." },
];

const whyTabs = [
  { icon: Monitor, label: { en: "Clean Desk", fr: "Bureau propre vs encombré" } as T, img: "https://namaca.ca/wp-content/uploads/2024/11/Frame-1000003751-1.png", points: { en: ["All financial documents organized in the cloud", "No more lost receipts or missing invoices", "Real-time access to your financial data", "Automated data entry reduces errors"], fr: ["Tous vos documents financiers organisés dans le nuage", "Plus de reçus perdus ni de factures manquantes", "Accès en temps réel à vos données financières", "La saisie automatisée réduit les erreurs"] } },
  { icon: Cloud, label: { en: "Cloud Access", fr: "Accès complet dans le cloud" } as T, img: "https://namaca.ca/wp-content/uploads/2024/11/Frame-1000003751-2.png", points: { en: ["Access your books from any device", "Bank-level security for all data", "Automatic backups", "Real-time team collaboration"], fr: ["Accédez à vos livres depuis n'importe quel appareil", "Sécurité de niveau bancaire pour toutes vos données", "Sauvegardes automatiques", "Collaboration en temps réel avec votre équipe"] } },
  { icon: BarChart3, label: { en: "Gain Clarity", fr: "Gagner en clarté" } as T, img: "https://namaca.ca/wp-content/uploads/2024/11/Frame-1000003751-3.png", points: { en: ["Custom dashboards tailored to your KPIs", "Monthly reports with actionable insights", "Cash flow visibility at a glance", "Data-driven decision making"], fr: ["Tableaux de bord personnalisés pour vos KPI", "Rapports mensuels avec recommandations concrètes", "Visibilité du flux de trésorerie en un coup d'œil", "Prise de décisions basée sur les données"] } },
  { icon: Rocket, label: { en: "Beyond Books", fr: "Au-delà de la comptabilité" } as T, img: "https://namaca.ca/wp-content/uploads/2024/11/Frame-1000003751-4.png", points: { en: ["Strategic financial advisory", "Fractional CFO services", "Tax planning and optimization", "Industry-specific expertise"], fr: ["Conseil financier stratégique", "Services de directeur financier à temps partiel", "Planification et optimisation fiscale", "Expertise sectorielle approfondie"] } },
];

const whyList: { title: T; desc: T }[] = [
  { title: { en: "100% Online & Tech-Driven", fr: "100% En ligne et technologique" }, desc: { en: "Everything runs in the cloud. No software to install, no paper to manage.", fr: "Tout fonctionne dans le nuage. Aucun logiciel à installer, aucun papier à gérer." } },
  { title: { en: "No More Re-training", fr: "Fini le recyclage" }, desc: { en: "We adapt to your tools and workflows — not the other way around.", fr: "Nous nous adaptons à vos outils et processus — pas l'inverse." } },
  { title: { en: "Gain Clarity", fr: "Gagner en clarté" }, desc: { en: "Real-time dashboards and monthly reports with actionable insights.", fr: "Tableaux de bord en temps réel et rapports mensuels avec des recommandations concrètes." } },
  { title: { en: "Beyond Bookkeeping", fr: "Au-delà de la comptabilité" }, desc: { en: "Strategic insights that drive growth and optimize your operations.", fr: "Perspectives stratégiques qui stimulent la croissance et optimisent vos opérations." } },
  { title: { en: "Expert Solutions", fr: "Solutions expertes" }, desc: { en: "Deep expertise across industries — tech, e-commerce, healthcare, and more.", fr: "Expertise approfondie dans tous les secteurs — techno, commerce en ligne, santé et plus." } },
  { title: { en: "Value Innovation", fr: "Innovation de valeur" }, desc: { en: "Latest fintech tools to deliver more value at lower cost.", fr: "Les derniers outils fintech pour offrir plus de valeur à moindre coût." } },
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
        title={lang === "en" ? "The Future of Accounting for SMEs & Startups" : "Le futur de la Comptabilité pour les PME et les entreprises en démarrage"}
        subtitle={lang === "en" ? "We combine a dedicated team, modern techniques, and the latest technology to deliver cloud-based accounting solutions that help your business thrive." : "Nous combinons une équipe dédiée, des techniques modernes et les dernières technologies pour offrir des solutions comptables infonuagiques qui aident votre entreprise à prospérer."}
        ctaText={lang === "en" ? "Contact Us" : "Contactez-nous"}
      >
        <img
          src="https://namaca.ca/wp-content/uploads/2024/09/Frame-1000003816.png"
          alt={lang === "en" ? "Namaca cloud accounting dashboard" : "Tableau de bord comptable Namaca"}
          className="w-full max-w-lg mx-auto"
        />
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
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-cream rounded-2xl p-8 md:p-10">
              <ul className="space-y-4">
                {whyTabs[activeTab].points[lang].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-orange mt-0.5 shrink-0" size={20} />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              <img src={whyTabs[activeTab].img} alt={t(whyTabs[activeTab].label, lang)} className="w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              {lang === "en" ? "Services Tailored to Your Unique Needs" : "Service adapté à vos besoins uniques"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {lang === "en" ? "Comprehensive financial solutions tailored to your business needs." : "Solutions financières complètes adaptées aux besoins de votre entreprise."}
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
