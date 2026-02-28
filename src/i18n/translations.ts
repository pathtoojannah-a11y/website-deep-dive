export type Language = "en" | "fr";

export const translations = {
  nav: {
    home: { en: "Home", fr: "Accueil" },
    expertise: { en: "Expertise", fr: "Expertise" },
    services: { en: "Services", fr: "Services" },
    contact: { en: "Contact Us", fr: "Contactez-nous" },
    scheduleCall: { en: "Schedule a Call", fr: "Planifier un appel" },
  },
  hero: {
    title: {
      en: "The Future of Accounting for SMEs & Startups",
      fr: "L'avenir de la comptabilité pour PME et startups",
    },
    subtitle: {
      en: "We combine a dedicated team, modern techniques, and the latest technology to deliver cloud-based accounting solutions that help your business thrive.",
      fr: "Nous combinons une équipe dédiée, des techniques modernes et les dernières technologies pour offrir des solutions comptables infonuagiques qui propulsent votre entreprise.",
    },
    cta: { en: "Schedule a Call", fr: "Planifier un appel" },
    badge: { en: "100% Cloud-Based", fr: "100% Infonuagique" },
  },
  whyTabs: {
    title: { en: "Why Choose Namaca?", fr: "Pourquoi choisir Namaca?" },
    tabs: [
      {
        label: { en: "Clean Desk", fr: "Bureau en ordre" },
        title: {
          en: "Clean Desk vs. Cluttered Desk",
          fr: "Bureau en ordre vs. Bureau encombré",
        },
        points: {
          en: [
            "All your financial documents organized in the cloud",
            "No more lost receipts or missing invoices",
            "Real-time access to your financial data anytime, anywhere",
            "Automated data entry reduces human error",
          ],
          fr: [
            "Tous vos documents financiers organisés dans le nuage",
            "Plus de reçus perdus ni de factures manquantes",
            "Accès en temps réel à vos données financières, partout",
            "La saisie automatisée réduit les erreurs humaines",
          ],
        },
      },
      {
        label: { en: "Cloud Access", fr: "Accès infonuagique" },
        title: {
          en: "Full Cloud Access",
          fr: "Accès infonuagique complet",
        },
        points: {
          en: [
            "Access your books from any device, anywhere in the world",
            "Bank-level security for all your financial data",
            "Automatic backups — never lose data again",
            "Collaborate with your team in real-time",
          ],
          fr: [
            "Accédez à vos livres depuis n'importe quel appareil, partout",
            "Sécurité de niveau bancaire pour vos données financières",
            "Sauvegardes automatiques — ne perdez plus jamais vos données",
            "Collaborez avec votre équipe en temps réel",
          ],
        },
      },
      {
        label: { en: "Gain Clarity", fr: "Clarté financière" },
        title: {
          en: "Gain Financial Clarity",
          fr: "Gagnez en clarté financière",
        },
        points: {
          en: [
            "Custom dashboards tailored to your business KPIs",
            "Monthly reports delivered with actionable insights",
            "Understand your cash flow at a glance",
            "Make data-driven decisions with confidence",
          ],
          fr: [
            "Tableaux de bord personnalisés selon vos KPIs",
            "Rapports mensuels livrés avec des recommandations concrètes",
            "Comprenez votre flux de trésorerie d'un coup d'œil",
            "Prenez des décisions éclairées en toute confiance",
          ],
        },
      },
      {
        label: { en: "Beyond Bookkeeping", fr: "Au-delà de la tenue de livres" },
        title: {
          en: "Beyond Traditional Bookkeeping",
          fr: "Au-delà de la tenue de livres traditionnelle",
        },
        points: {
          en: [
            "Strategic financial advisory for growth-stage businesses",
            "Fractional CFO services at a fraction of the cost",
            "Tax planning and optimization strategies",
            "Industry-specific expertise for tech, e-commerce, and more",
          ],
          fr: [
            "Conseil financier stratégique pour entreprises en croissance",
            "Services de directeur financier à temps partiel",
            "Planification et optimisation fiscale",
            "Expertise sectorielle en tech, commerce en ligne et plus",
          ],
        },
      },
    ],
  },
  services: {
    title: { en: "Our Services", fr: "Nos services" },
    subtitle: {
      en: "Comprehensive financial solutions tailored to your business needs",
      fr: "Des solutions financières complètes adaptées à vos besoins",
    },
    learnMore: { en: "Learn More", fr: "En savoir plus" },
    items: [
      {
        title: { en: "Bookkeeping", fr: "Tenue de livres" },
        desc: {
          en: "Cloud-based bookkeeping powered by Xero. Accurate, timely, and always accessible.",
          fr: "Tenue de livres infonuagique propulsée par Xero. Précise, ponctuelle et toujours accessible.",
        },
        icon: "BookOpen",
      },
      {
        title: { en: "Payroll", fr: "Paie" },
        desc: {
          en: "Automated payroll processing with Gusto. Ensure your team gets paid on time, every time.",
          fr: "Traitement automatisé de la paie avec Gusto. Votre équipe est payée à temps, chaque fois.",
        },
        icon: "Users",
      },
      {
        title: { en: "Tax Reporting", fr: "Déclarations fiscales" },
        desc: {
          en: "GST/HST/PST filings, T4s, and corporate tax returns handled with precision.",
          fr: "Déclarations TPS/TVH/TVQ, T4 et impôts corporatifs traités avec précision.",
        },
        icon: "FileText",
      },
      {
        title: { en: "Fractional CFO", fr: "Directeur financier à temps partiel" },
        desc: {
          en: "Strategic financial leadership without the full-time cost. Budget planning, forecasting, and growth advisory.",
          fr: "Leadership financier stratégique sans le coût à temps plein. Planification budgétaire, prévisions et conseil en croissance.",
        },
        icon: "TrendingUp",
      },
      {
        title: { en: "Accounts Payable", fr: "Comptes fournisseurs" },
        desc: {
          en: "Automated bill payments and vendor management to streamline your cash outflows.",
          fr: "Paiements de factures automatisés et gestion des fournisseurs pour simplifier vos sorties de fonds.",
        },
        icon: "CreditCard",
      },
      {
        title: { en: "Accounts Receivable", fr: "Comptes clients" },
        desc: {
          en: "Invoice tracking and collections to keep your cash flowing and clients accountable.",
          fr: "Suivi des factures et recouvrements pour maintenir votre trésorerie et responsabiliser vos clients.",
        },
        icon: "Receipt",
      },
      {
        title: { en: "Advisory", fr: "Services-conseils" },
        desc: {
          en: "Expert guidance on financial strategy, compliance, and business optimization.",
          fr: "Accompagnement expert en stratégie financière, conformité et optimisation d'entreprise.",
        },
        icon: "Lightbulb",
      },
    ],
  },
  whyList: {
    title: { en: "Why Us", fr: "Pourquoi nous" },
    items: [
      {
        title: { en: "100% Online", fr: "100% En ligne" },
        desc: {
          en: "Everything runs in the cloud. No software to install, no office visits needed.",
          fr: "Tout fonctionne dans le nuage. Aucun logiciel à installer, aucune visite au bureau nécessaire.",
        },
      },
      {
        title: { en: "No Re-training", fr: "Sans recyclage" },
        desc: {
          en: "We adapt to your tools and workflows. Your team keeps working the way they know.",
          fr: "Nous nous adaptons à vos outils et processus. Votre équipe continue à travailler comme elle le connaît.",
        },
      },
      {
        title: { en: "Gain Clarity", fr: "Clarté financière" },
        desc: {
          en: "Real-time dashboards and reports give you a clear picture of your financial health.",
          fr: "Des tableaux de bord et rapports en temps réel pour une image claire de votre santé financière.",
        },
      },
      {
        title: { en: "Beyond Bookkeeping", fr: "Au-delà de la comptabilité" },
        desc: {
          en: "We go beyond data entry to offer strategic insights that drive growth.",
          fr: "Nous allons au-delà de la saisie pour offrir des perspectives stratégiques qui favorisent la croissance.",
        },
      },
      {
        title: { en: "Expert Solutions", fr: "Solutions expertes" },
        desc: {
          en: "Our team brings deep expertise across industries and accounting standards.",
          fr: "Notre équipe apporte une expertise approfondie dans tous les secteurs et normes comptables.",
        },
      },
      {
        title: { en: "Value Innovation", fr: "Innovation de valeur" },
        desc: {
          en: "We leverage the latest fintech to deliver more value at lower cost.",
          fr: "Nous tirons parti des dernières innovations fintech pour offrir plus de valeur à moindre coût.",
        },
      },
    ],
  },
  stats: {
    title: { en: "By the Numbers", fr: "En chiffres" },
    items: [
      { value: 98, suffix: "%", label: { en: "System-Level Expertise", fr: "Expertise système" } },
      { value: 15, suffix: "+", label: { en: "Years of Experience", fr: "Années d'expérience" } },
      { value: 99, suffix: "%", label: { en: "Client Satisfaction", fr: "Satisfaction client" } },
      { value: 200, suffix: "+", label: { en: "Clients Served", fr: "Clients desservis" } },
    ],
  },
  testimonials: {
    title: { en: "What Our Clients Say", fr: "Ce que disent nos clients" },
    items: [
      {
        text: {
          en: "Namaca transformed our accounting process. We went from spreadsheets to a fully automated cloud system in weeks. The clarity we have now is incredible.",
          fr: "Namaca a transformé notre processus comptable. Nous sommes passés de feuilles de calcul à un système infonuagique entièrement automatisé en quelques semaines.",
        },
        name: "Sophie L.",
        role: { en: "CEO, TechStart Inc.", fr: "PDG, TechStart Inc." },
      },
      {
        text: {
          en: "Their fractional CFO service was exactly what we needed. Expert financial guidance without the overhead of a full-time hire. Highly recommended.",
          fr: "Leur service de directeur financier à temps partiel était exactement ce dont nous avions besoin. Un accompagnement financier expert sans les frais d'un employé à temps plein.",
        },
        name: "Marc D.",
        role: { en: "Founder, E-Shop Montréal", fr: "Fondateur, E-Shop Montréal" },
      },
      {
        text: {
          en: "The team at Namaca is responsive, knowledgeable, and genuinely cares about our success. Best accounting partner we've ever had.",
          fr: "L'équipe de Namaca est réactive, compétente et se soucie véritablement de notre succès. Le meilleur partenaire comptable que nous ayons eu.",
        },
        name: "Aïcha B.",
        role: { en: "Operations Director, BuildRight Co.", fr: "Directrice des opérations, BuildRight Co." },
      },
    ],
  },
  partners: {
    title: { en: "Our Technology Partners", fr: "Nos partenaires technologiques" },
  },
  contact: {
    title: { en: "Book a Free Consultation", fr: "Réservez une consultation gratuite" },
    subtitle: {
      en: "Let's discuss how we can streamline your accounting and unlock growth.",
      fr: "Discutons de comment nous pouvons simplifier votre comptabilité et favoriser votre croissance.",
    },
    firstName: { en: "First Name", fr: "Prénom" },
    lastName: { en: "Last Name", fr: "Nom" },
    email: { en: "Email", fr: "Courriel" },
    phone: { en: "Phone", fr: "Téléphone" },
    message: { en: "Message", fr: "Message" },
    submit: { en: "Send Message", fr: "Envoyer le message" },
    success: { en: "Thank you! We'll be in touch soon.", fr: "Merci! Nous vous contacterons bientôt." },
  },
  footer: {
    tagline: {
      en: "Modern cloud accounting for businesses that want to grow.",
      fr: "Comptabilité infonuagique moderne pour les entreprises qui veulent croître.",
    },
    quickLinks: { en: "Quick Links", fr: "Liens rapides" },
    contactInfo: { en: "Contact Info", fr: "Coordonnées" },
    address: "1200 Avenue McGill College, Suite 1100, Montréal, QC H3B 4G7",
    phone: "+1 (514) 555-0123",
    email: "info@namaca.ca",
    rights: { en: "All rights reserved.", fr: "Tous droits réservés." },
  },
} as const;

export function t(obj: Record<Language, string>, lang: Language): string {
  return obj[lang];
}
