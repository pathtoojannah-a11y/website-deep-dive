import { Lang } from "@/i18n/translations";

type T = Record<Lang, string>;
type TArr = Record<Lang, string[]>;

export interface ServicePageData {
  slug: string;
  icon: string;
  title: T;
  heroSubtitle: T;
  description: T;
  benefits: { title: T; desc: T }[];
  process: { step: string; title: T; desc: T }[];
  faq: { q: T; a: T }[];
}

export const services: ServicePageData[] = [
  {
    slug: "bookkeeping",
    icon: "BookOpen",
    title: { en: "Bookkeeping", fr: "Tenue de livres" },
    heroSubtitle: { en: "Cloud-based bookkeeping powered by Xero. Accurate, timely, and always accessible.", fr: "Tenue de livres infonuagique propulsée par Xero. Précise, ponctuelle et toujours accessible." },
    description: { en: "Our bookkeeping service leverages Xero's powerful cloud platform to keep your financial records accurate, organized, and accessible from anywhere. We handle the day-to-day so you can focus on growing your business.", fr: "Notre service de tenue de livres exploite la puissante plateforme infonuagique Xero pour garder vos registres financiers précis, organisés et accessibles de partout." },
    benefits: [
      { title: { en: "Real-Time Access", fr: "Accès en temps réel" }, desc: { en: "View your financial data anytime, anywhere through Xero's cloud platform.", fr: "Consultez vos données financières à tout moment via la plateforme Xero." } },
      { title: { en: "Automated Reconciliation", fr: "Rapprochement automatisé" }, desc: { en: "Bank feeds automatically matched and reconciled daily.", fr: "Flux bancaires automatiquement rapprochés quotidiennement." } },
      { title: { en: "Monthly Reports", fr: "Rapports mensuels" }, desc: { en: "Clear financial statements delivered on time, every month.", fr: "États financiers clairs livrés à temps, chaque mois." } },
      { title: { en: "Error-Free Records", fr: "Dossiers sans erreur" }, desc: { en: "Our expert team ensures accuracy and compliance.", fr: "Notre équipe d'experts garantit précision et conformité." } },
    ],
    process: [
      { step: "01", title: { en: "Onboarding", fr: "Intégration" }, desc: { en: "We assess your current setup and migrate your books to Xero.", fr: "Nous évaluons votre configuration actuelle et migrons vos livres vers Xero." } },
      { step: "02", title: { en: "Daily Processing", fr: "Traitement quotidien" }, desc: { en: "Transactions are categorized and reconciled on a daily basis.", fr: "Les transactions sont catégorisées et rapprochées quotidiennement." } },
      { step: "03", title: { en: "Monthly Review", fr: "Revue mensuelle" }, desc: { en: "We review, reconcile, and deliver your financial reports.", fr: "Nous révisons, rapprochons et livrons vos rapports financiers." } },
    ],
    faq: [
      { q: { en: "Do I need to use Xero?", fr: "Dois-je utiliser Xero?" }, a: { en: "We recommend Xero for its power and ease of use, but we can work with other platforms too.", fr: "Nous recommandons Xero pour sa puissance et sa facilité d'utilisation, mais nous pouvons travailler avec d'autres plateformes." } },
      { q: { en: "How quickly can you start?", fr: "En combien de temps pouvez-vous commencer?" }, a: { en: "Most clients are fully onboarded within 1-2 weeks.", fr: "La plupart des clients sont intégrés en 1 à 2 semaines." } },
    ],
  },
  {
    slug: "payroll",
    icon: "Users",
    title: { en: "Payroll", fr: "Paie" },
    heroSubtitle: { en: "Automated payroll processing with Gusto. Your team gets paid on time, every time.", fr: "Traitement automatisé de la paie avec Gusto. Votre équipe est payée à temps, chaque fois." },
    description: { en: "We handle all aspects of payroll — from calculating wages and deductions to filing tax remittances and issuing T4s. Powered by Gusto for seamless, compliant processing.", fr: "Nous gérons tous les aspects de la paie — du calcul des salaires et déductions au dépôt des remises fiscales et à l'émission des T4." },
    benefits: [
      { title: { en: "Automated Processing", fr: "Traitement automatisé" }, desc: { en: "Set it and forget it — payroll runs like clockwork.", fr: "Configurez et oubliez — la paie fonctionne comme une horloge." } },
      { title: { en: "Tax Compliance", fr: "Conformité fiscale" }, desc: { en: "All deductions, remittances, and filings handled automatically.", fr: "Toutes les déductions, remises et déclarations sont gérées automatiquement." } },
      { title: { en: "Employee Self-Service", fr: "Libre-service employé" }, desc: { en: "Team members can access pay stubs and tax documents online.", fr: "Les membres de l'équipe peuvent accéder à leurs talons de paie en ligne." } },
      { title: { en: "Direct Deposit", fr: "Dépôt direct" }, desc: { en: "Fast, secure payments directly to employee bank accounts.", fr: "Paiements rapides et sécurisés directement dans les comptes bancaires." } },
    ],
    process: [
      { step: "01", title: { en: "Setup", fr: "Configuration" }, desc: { en: "We configure Gusto with your employee information and pay schedule.", fr: "Nous configurons Gusto avec les informations de vos employés." } },
      { step: "02", title: { en: "Processing", fr: "Traitement" }, desc: { en: "Payroll is calculated and processed each pay period.", fr: "La paie est calculée et traitée à chaque période de paie." } },
      { step: "03", title: { en: "Reporting", fr: "Rapports" }, desc: { en: "Detailed payroll reports and year-end tax documents.", fr: "Rapports de paie détaillés et documents fiscaux de fin d'année." } },
    ],
    faq: [
      { q: { en: "Can you handle both hourly and salaried employees?", fr: "Pouvez-vous gérer les employés horaires et salariés?" }, a: { en: "Yes, we handle all employee types including contractors.", fr: "Oui, nous gérons tous les types d'employés, y compris les sous-traitants." } },
      { q: { en: "Do you handle ROEs?", fr: "Gérez-vous les relevés d'emploi?" }, a: { en: "Absolutely. We handle all statutory reporting requirements.", fr: "Absolument. Nous gérons toutes les exigences de déclaration statutaire." } },
    ],
  },
  {
    slug: "taxes",
    icon: "FileText",
    title: { en: "Taxes", fr: "Impôts" },
    heroSubtitle: { en: "GST/HST/PST filings, T4s, and corporate tax returns handled with precision.", fr: "Déclarations TPS/TVH/TVQ, T4 et déclarations d'impôt des sociétés traitées avec précision." },
    description: { en: "Stay compliant and minimize your tax burden with our expert tax reporting services. We handle all federal and provincial filings for Canadian businesses.", fr: "Restez conforme et minimisez votre fardeau fiscal grâce à nos services experts de déclarations fiscales." },
    benefits: [
      { title: { en: "Timely Filings", fr: "Déclarations ponctuelles" }, desc: { en: "Never miss a deadline with our proactive filing schedule.", fr: "Ne manquez jamais une échéance grâce à notre calendrier proactif." } },
      { title: { en: "Tax Optimization", fr: "Optimisation fiscale" }, desc: { en: "We identify every eligible deduction and credit.", fr: "Nous identifions chaque déduction et crédit admissible." } },
      { title: { en: "CRA Compliance", fr: "Conformité ARC" }, desc: { en: "Full compliance with Canada Revenue Agency requirements.", fr: "Pleine conformité avec les exigences de l'ARC." } },
      { title: { en: "Audit Support", fr: "Support en cas de vérification" }, desc: { en: "We've got your back if the CRA comes knocking.", fr: "Nous vous soutenons si l'ARC vous contacte." } },
    ],
    process: [
      { step: "01", title: { en: "Review", fr: "Révision" }, desc: { en: "We review your financials and identify tax obligations.", fr: "Nous révisons vos finances et identifions vos obligations fiscales." } },
      { step: "02", title: { en: "Preparation", fr: "Préparation" }, desc: { en: "Returns are prepared with meticulous attention to detail.", fr: "Les déclarations sont préparées avec une attention méticuleuse." } },
      { step: "03", title: { en: "Filing", fr: "Dépôt" }, desc: { en: "All returns filed electronically for fast processing.", fr: "Toutes les déclarations sont déposées électroniquement." } },
    ],
    faq: [
      { q: { en: "Do you handle both personal and corporate taxes?", fr: "Gérez-vous les impôts personnels et corporatifs?" }, a: { en: "We focus on corporate tax for businesses, but can recommend personal tax partners.", fr: "Nous nous concentrons sur l'impôt des sociétés, mais pouvons recommander des partenaires pour l'impôt personnel." } },
      { q: { en: "Can you help with SR&ED claims?", fr: "Pouvez-vous aider avec les demandes RS&DE?" }, a: { en: "Yes, we can assist with Scientific Research and Experimental Development tax credits.", fr: "Oui, nous pouvons vous aider avec les crédits d'impôt pour la RS&DE." } },
    ],
  },
  {
    slug: "fractional-cfo",
    icon: "TrendingUp",
    title: { en: "Fractional CFO", fr: "Directeur financier à temps partiel" },
    heroSubtitle: { en: "Strategic financial leadership without the full-time cost.", fr: "Leadership financier stratégique sans le coût d'un employé à temps plein." },
    description: { en: "Get the strategic financial guidance your business needs without the overhead of a full-time CFO. Our fractional CFO services provide budget planning, cash flow forecasting, and growth strategy.", fr: "Obtenez l'orientation financière stratégique dont votre entreprise a besoin sans les frais d'un directeur financier à temps plein." },
    benefits: [
      { title: { en: "Financial Strategy", fr: "Stratégie financière" }, desc: { en: "Long-term planning aligned with your business goals.", fr: "Planification à long terme alignée sur vos objectifs d'affaires." } },
      { title: { en: "Cash Flow Management", fr: "Gestion de trésorerie" }, desc: { en: "Proactive cash flow forecasting and optimization.", fr: "Prévision et optimisation proactives de la trésorerie." } },
      { title: { en: "Investor Readiness", fr: "Préparation aux investisseurs" }, desc: { en: "Financial models and decks that impress investors.", fr: "Modèles financiers et présentations qui impressionnent les investisseurs." } },
      { title: { en: "KPI Dashboards", fr: "Tableaux de bord KPI" }, desc: { en: "Custom dashboards to track your most important metrics.", fr: "Tableaux de bord personnalisés pour suivre vos métriques clés." } },
    ],
    process: [
      { step: "01", title: { en: "Assessment", fr: "Évaluation" }, desc: { en: "We deep-dive into your financials and business model.", fr: "Nous plongeons en profondeur dans vos finances et votre modèle d'affaires." } },
      { step: "02", title: { en: "Strategy", fr: "Stratégie" }, desc: { en: "We develop a customized financial roadmap.", fr: "Nous développons une feuille de route financière personnalisée." } },
      { step: "03", title: { en: "Execution", fr: "Exécution" }, desc: { en: "Ongoing advisory with monthly strategy sessions.", fr: "Accompagnement continu avec des sessions stratégiques mensuelles." } },
    ],
    faq: [
      { q: { en: "How much time does a fractional CFO spend with us?", fr: "Combien de temps un directeur financier partiel passe-t-il avec nous?" }, a: { en: "Typically 10-20 hours per month, depending on your needs.", fr: "Habituellement 10 à 20 heures par mois, selon vos besoins." } },
      { q: { en: "Is this suitable for startups?", fr: "Est-ce adapté aux startups?" }, a: { en: "Absolutely — we specialize in growth-stage businesses and startups.", fr: "Absolument — nous nous spécialisons dans les entreprises en croissance et les startups." } },
    ],
  },
  {
    slug: "accounts-payable",
    icon: "CreditCard",
    title: { en: "Accounts Payable", fr: "Comptes fournisseurs" },
    heroSubtitle: { en: "Automated bill payments and vendor management to streamline your cash outflows.", fr: "Paiements automatisés et gestion des fournisseurs pour optimiser vos sorties de fonds." },
    description: { en: "Streamline your bill payments with automated processing through Plooto. We manage vendor relationships, payment scheduling, and cash flow optimization.", fr: "Simplifiez vos paiements de factures avec un traitement automatisé via Plooto." },
    benefits: [
      { title: { en: "Automated Payments", fr: "Paiements automatisés" }, desc: { en: "Bills are processed and paid on schedule, automatically.", fr: "Les factures sont traitées et payées automatiquement selon le calendrier." } },
      { title: { en: "Vendor Management", fr: "Gestion des fournisseurs" }, desc: { en: "Keep vendor relationships strong with timely payments.", fr: "Maintenez de bonnes relations fournisseurs avec des paiements ponctuels." } },
      { title: { en: "Approval Workflows", fr: "Flux d'approbation" }, desc: { en: "Multi-level approval processes for payment control.", fr: "Processus d'approbation multiniveaux pour le contrôle des paiements." } },
      { title: { en: "Cash Flow Optimization", fr: "Optimisation de trésorerie" }, desc: { en: "Strategic payment timing to maximize your cash position.", fr: "Calendrier de paiement stratégique pour maximiser votre trésorerie." } },
    ],
    process: [
      { step: "01", title: { en: "Capture", fr: "Capture" }, desc: { en: "Invoices are captured and digitized via Dext.", fr: "Les factures sont capturées et numérisées via Dext." } },
      { step: "02", title: { en: "Approve", fr: "Approbation" }, desc: { en: "Bills are routed for approval based on your rules.", fr: "Les factures sont acheminées pour approbation selon vos règles." } },
      { step: "03", title: { en: "Pay", fr: "Paiement" }, desc: { en: "Approved bills are paid automatically via Plooto.", fr: "Les factures approuvées sont payées automatiquement via Plooto." } },
    ],
    faq: [
      { q: { en: "Which payment methods do you support?", fr: "Quelles méthodes de paiement supportez-vous?" }, a: { en: "EFT, wire transfers, and checks through Plooto.", fr: "TEF, virements et chèques via Plooto." } },
    ],
  },
  {
    slug: "accounts-receivable",
    icon: "Receipt",
    title: { en: "Accounts Receivable", fr: "Comptes clients" },
    heroSubtitle: { en: "Invoice tracking and collections to keep your cash flowing.", fr: "Suivi des factures et recouvrements pour maintenir votre trésorerie." },
    description: { en: "Stop chasing payments. Our accounts receivable service ensures invoices are sent on time, followed up consistently, and cash is collected efficiently.", fr: "Arrêtez de courir après les paiements. Notre service de comptes clients assure que les factures sont envoyées à temps et que les fonds sont collectés efficacement." },
    benefits: [
      { title: { en: "Timely Invoicing", fr: "Facturation ponctuelle" }, desc: { en: "Invoices sent promptly after service delivery.", fr: "Factures envoyées rapidement après la livraison du service." } },
      { title: { en: "Automated Follow-ups", fr: "Suivis automatisés" }, desc: { en: "Gentle reminders that keep payments on track.", fr: "Rappels courtois qui maintiennent les paiements sur la bonne voie." } },
      { title: { en: "Aging Reports", fr: "Rapports chronologiques" }, desc: { en: "Clear visibility into outstanding receivables.", fr: "Visibilité claire sur les créances en souffrance." } },
      { title: { en: "Cash Flow Improvement", fr: "Amélioration de trésorerie" }, desc: { en: "Reduce DSO and improve your working capital.", fr: "Réduisez le DPO et améliorez votre fonds de roulement." } },
    ],
    process: [
      { step: "01", title: { en: "Invoice", fr: "Facturation" }, desc: { en: "We create and send professional invoices on your behalf.", fr: "Nous créons et envoyons des factures professionnelles en votre nom." } },
      { step: "02", title: { en: "Track", fr: "Suivi" }, desc: { en: "Outstanding invoices are monitored and followed up.", fr: "Les factures en souffrance sont surveillées et suivies." } },
      { step: "03", title: { en: "Collect", fr: "Recouvrement" }, desc: { en: "Payments are collected and reconciled in your books.", fr: "Les paiements sont collectés et rapprochés dans vos livres." } },
    ],
    faq: [
      { q: { en: "Do you handle collections for overdue invoices?", fr: "Gérez-vous le recouvrement des factures en retard?" }, a: { en: "Yes, we handle professional follow-ups and escalation as needed.", fr: "Oui, nous gérons les suivis professionnels et l'escalade au besoin." } },
    ],
  },
  {
    slug: "consulting-advisory",
    icon: "Lightbulb",
    title: { en: "Consulting / Advisory", fr: "Consultation / Conseils" },
    heroSubtitle: { en: "Expert guidance on financial strategy, compliance, and business optimization.", fr: "Accompagnement expert en stratégie financière, conformité et optimisation d'entreprise." },
    description: { en: "Beyond the numbers, we provide strategic advisory services to help your business navigate complex financial decisions, optimize operations, and plan for sustainable growth.", fr: "Au-delà des chiffres, nous offrons des services de conseil stratégique pour aider votre entreprise à naviguer des décisions financières complexes." },
    benefits: [
      { title: { en: "Strategic Planning", fr: "Planification stratégique" }, desc: { en: "Data-driven strategies for long-term growth.", fr: "Stratégies basées sur les données pour une croissance à long terme." } },
      { title: { en: "Process Optimization", fr: "Optimisation des processus" }, desc: { en: "Identify and eliminate financial inefficiencies.", fr: "Identifiez et éliminez les inefficacités financières." } },
      { title: { en: "Risk Management", fr: "Gestion des risques" }, desc: { en: "Proactive identification and mitigation of financial risks.", fr: "Identification et atténuation proactives des risques financiers." } },
      { title: { en: "Growth Advisory", fr: "Conseil en croissance" }, desc: { en: "Navigate fundraising, expansion, and M&A decisions.", fr: "Naviguez les décisions de financement, d'expansion et de F&A." } },
    ],
    process: [
      { step: "01", title: { en: "Discovery", fr: "Découverte" }, desc: { en: "We understand your business, challenges, and goals.", fr: "Nous comprenons votre entreprise, vos défis et vos objectifs." } },
      { step: "02", title: { en: "Analysis", fr: "Analyse" }, desc: { en: "Deep analysis of your financial position and opportunities.", fr: "Analyse approfondie de votre position financière et des opportunités." } },
      { step: "03", title: { en: "Roadmap", fr: "Feuille de route" }, desc: { en: "Actionable recommendations with clear timelines.", fr: "Recommandations concrètes avec des échéanciers clairs." } },
    ],
    faq: [
      { q: { en: "Is advisory a one-time engagement?", fr: "Le conseil est-il un engagement ponctuel?" }, a: { en: "It can be — but most clients prefer ongoing monthly advisory.", fr: "Il peut l'être — mais la plupart des clients préfèrent un accompagnement mensuel continu." } },
    ],
  },
];
