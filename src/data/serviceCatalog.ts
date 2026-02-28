import { Lang } from "@/i18n/translations";

export type T = Record<Lang, string>;
export type ServiceCategory = "operations" | "compliance" | "strategy";
export type ServiceTemplateFamily = "A" | "B" | "C";
export type SnapshotVisualType =
  | "transactions"
  | "invoiceAging"
  | "payrollSummary"
  | "taxProgress"
  | "kpiOverview"
  | "apQueue"
  | "strategyScorecard";

export interface ServiceSnapshotRow {
  label: T;
  subLabel?: T;
  value?: string;
  trend?: "up" | "down" | "neutral";
  pct?: number;
  tone?: "green" | "amber" | "red" | "blue";
}

export interface ServiceSnapshot {
  eyebrow: T;
  headline: T;
  subtitle: T;
  ctaLabel: T;
  ctaHref: string;
  visualType: SnapshotVisualType;
  panelTitle: T;
  badgeText: T;
  rows: ServiceSnapshotRow[];
  footerNote: T;
}

export interface ServiceCatalogItem {
  slug: string;
  category: ServiceCategory;
  templateFamily: ServiceTemplateFamily;
  title: T;
  navLabel: T;
  outcome: T;
  heroEyebrow: T;
  heroTitle: T;
  heroSubtitle: T;
  painPoints: T[];
  deliverables: { title: T; desc: T }[];
  process: { step: string; title: T; desc: T }[];
  proofMetrics: { value: string; label: T; detail: T }[];
  testimonial: { quote: T; name: string; role: T };
  triggers?: T[];
  strategicCapabilities?: { title: T; desc: T }[];
  engagementModel?: { title: T; desc: T }[];
  complianceTimeline?: { date: T; event: T }[];
  included?: T[];
  excluded?: T[];
  jurisdictionNotes?: T[];
  comparison: { bestFor: T; stage: T; deliverables: T };
  faq: { q: T; a: T }[];
  crossLinks: string[];
  isPrimaryHome: boolean;
  snapshot: ServiceSnapshot;
}

export const serviceCategoryLabels: Record<ServiceCategory, T> = {
  operations: { en: "Operations", fr: "Operations" },
  compliance: { en: "Compliance", fr: "Conformite" },
  strategy: { en: "Strategy", fr: "Strategie" },
};

const baseServiceCatalog: Omit<ServiceCatalogItem, "snapshot">[] = [
  {
    slug: "bookkeeping",
    category: "operations",
    templateFamily: "A",
    title: { en: "Bookkeeping", fr: "Tenue de livres" },
    navLabel: { en: "Bookkeeping", fr: "Tenue de livres" },
    outcome: { en: "Never reconcile a bank statement again.", fr: "Ne rapprochez plus jamais un releve bancaire." },
    heroEyebrow: { en: "Operations Service", fr: "Service operationnel" },
    heroTitle: { en: "Clean books. On-time close.", fr: "Livres propres. Cloture a temps." },
    heroSubtitle: { en: "Accurate monthly bookkeeping with clear financial visibility.", fr: "Tenue de livres mensuelle precise avec visibilite financiere claire." },
    painPoints: [{ en: "Month-end closes slip.", fr: "Les clotures glissent." }, { en: "Data is fragmented.", fr: "Les donnees sont fragmentees." }, { en: "Reports are delayed.", fr: "Les rapports sont en retard." }],
    deliverables: [{ title: { en: "Daily coding", fr: "Codification quotidienne" }, desc: { en: "Consistent transaction categorization.", fr: "Categorisation coherente des transactions." } }, { title: { en: "Monthly reporting", fr: "Rapports mensuels" }, desc: { en: "P&L, balance sheet, and cash flow.", fr: "Resultat, bilan et tresorerie." } }, { title: { en: "Reconciliations", fr: "Rapprochements" }, desc: { en: "Bank and ledger reconciliations.", fr: "Rapprochements bancaires et grand livre." } }, { title: { en: "Close calendar", fr: "Calendrier de cloture" }, desc: { en: "Predictable monthly close rhythm.", fr: "Rythme mensuel de cloture previsible." } }],
    process: [{ step: "01", title: { en: "Onboard", fr: "Integration" }, desc: { en: "Set chart and migration scope.", fr: "Definir plan comptable et migration." } }, { step: "02", title: { en: "Operate", fr: "Operation" }, desc: { en: "Process and reconcile continuously.", fr: "Traiter et rapprocher en continu." } }, { step: "03", title: { en: "Report", fr: "Rapport" }, desc: { en: "Deliver monthly financial package.", fr: "Livrer le dossier financier mensuel." } }],
    proofMetrics: [{ value: "5 days", label: { en: "Average close", fr: "Cloture moyenne" }, detail: { en: "From month-end to final package.", fr: "De fin de mois au dossier final." } }, { value: "99.8%", label: { en: "Coding accuracy", fr: "Precision codification" }, detail: { en: "Control-tested each month.", fr: "Controlee chaque mois." } }],
    testimonial: { quote: { en: "Our numbers are now clear and on time.", fr: "Nos chiffres sont maintenant clairs et ponctuels." }, name: "Sophie Laurent", role: { en: "COO", fr: "COO" } },
    comparison: { bestFor: { en: "Teams needing reliable monthly reporting", fr: "Equipes voulant des rapports fiables" }, stage: { en: "Early to Growth", fr: "Demarrage a croissance" }, deliverables: { en: "Close, recon, reporting", fr: "Cloture, rapprochement, reporting" } },
    faq: [{ q: { en: "Can you migrate from spreadsheets?", fr: "Pouvez-vous migrer depuis des feuilles?" }, a: { en: "Yes, we migrate and clean historical data.", fr: "Oui, nous migrons et nettoyons l'historique." } }],
    crossLinks: ["payroll"],
    isPrimaryHome: true,
  },
  {
    slug: "payroll",
    category: "operations",
    templateFamily: "A",
    title: { en: "Payroll", fr: "Paie" },
    navLabel: { en: "Payroll", fr: "Paie" },
    outcome: { en: "Your team gets paid on time, every time.", fr: "Votre equipe est payee a temps, a chaque fois." },
    heroEyebrow: { en: "Operations Service", fr: "Service operationnel" },
    heroTitle: { en: "Payroll without compliance risk.", fr: "Paie sans risque de conformite." },
    heroSubtitle: { en: "Reliable payroll processing, remittances, and filings.", fr: "Traitement fiable de la paie, remises et declarations." },
    painPoints: [{ en: "Payroll cycles consume operations time.", fr: "La paie consomme du temps operations." }, { en: "Remittance errors risk penalties.", fr: "Les erreurs de remises risquent des penalites." }, { en: "Employee payroll requests pile up.", fr: "Les demandes paie s'accumulent." }],
    deliverables: [{ title: { en: "Payroll runs", fr: "Cycles de paie" }, desc: { en: "On-schedule payroll execution.", fr: "Execution paie selon l'echeancier." } }, { title: { en: "Remittances", fr: "Remises" }, desc: { en: "Statutory filings and remittances.", fr: "Declarations et remises statutaires." } }, { title: { en: "Employee records", fr: "Dossiers employes" }, desc: { en: "Payroll profile maintenance.", fr: "Maintenance des profils paie." } }, { title: { en: "Year-end slips", fr: "Feuillets annuels" }, desc: { en: "Year-end payroll documentation.", fr: "Documentation paie de fin d'annee." } }],
    process: [{ step: "01", title: { en: "Configure", fr: "Configuration" }, desc: { en: "Define payroll rules and approvals.", fr: "Definir regles et approbations." } }, { step: "02", title: { en: "Run", fr: "Execution" }, desc: { en: "Validate and process each cycle.", fr: "Valider et traiter chaque cycle." } }, { step: "03", title: { en: "File", fr: "Declaration" }, desc: { en: "Complete remittances and filings.", fr: "Completer remises et declarations." } }],
    proofMetrics: [{ value: "100%", label: { en: "On-time payroll", fr: "Paie a temps" }, detail: { en: "No missed payroll cycles.", fr: "Aucun cycle manque." } }, { value: "<24h", label: { en: "Support response", fr: "Reponse support" }, detail: { en: "Average issue turnaround.", fr: "Delai moyen de resolution." } }],
    testimonial: { quote: { en: "Payroll became predictable and quiet.", fr: "La paie est devenue previsible et stable." }, name: "David Nguyen", role: { en: "Operations Director", fr: "Directeur operations" } },
    comparison: { bestFor: { en: "Growing teams", fr: "Equipes en croissance" }, stage: { en: "Growth", fr: "Croissance" }, deliverables: { en: "Payroll, remittance, filing", fr: "Paie, remises, declarations" } },
    faq: [{ q: { en: "Do you support contractors?", fr: "Supportez-vous les contractuels?" }, a: { en: "Yes, mixed payroll profiles are supported.", fr: "Oui, les profils mixtes sont supportes." } }],
    crossLinks: ["bookkeeping"],
    isPrimaryHome: true,
  },
  {
    slug: "accounts-payable",
    category: "operations",
    templateFamily: "A",
    title: { en: "Accounts Payable", fr: "Comptes fournisseurs" },
    navLabel: { en: "Accounts Payable", fr: "Comptes fournisseurs" },
    outcome: { en: "Pay vendors on time with tighter cash control.", fr: "Payez les fournisseurs a temps avec meilleur controle de tresorerie." },
    heroEyebrow: { en: "Operations Service", fr: "Service operationnel" },
    heroTitle: { en: "Automate AP and keep control.", fr: "Automatisez AP et gardez le controle." },
    heroSubtitle: { en: "Structured invoice intake, approvals, and payment orchestration.", fr: "Collecte de factures, approbations et orchestration des paiements." },
    painPoints: [{ en: "Invoices are scattered.", fr: "Les factures sont eparpillees." }, { en: "Approvals are delayed.", fr: "Les approbations tardent." }, { en: "Late payments hurt vendors.", fr: "Les retards nuisent aux fournisseurs." }],
    deliverables: [{ title: { en: "Invoice intake", fr: "Collecte de factures" }, desc: { en: "Centralized processing queue.", fr: "File de traitement centralisee." } }, { title: { en: "Approval routing", fr: "Circuit d'approbation" }, desc: { en: "Rules by amount and owner.", fr: "Regles par montant et responsable." } }, { title: { en: "Payment scheduling", fr: "Planification paiements" }, desc: { en: "Cash-aware payment timing.", fr: "Calendrier adapte a la tresorerie." } }, { title: { en: "Vendor reconciliation", fr: "Rapprochement fournisseurs" }, desc: { en: "Clean vendor ledgers.", fr: "Comptes fournisseurs propres." } }],
    process: [{ step: "01", title: { en: "Capture", fr: "Collecte" }, desc: { en: "Capture and normalize invoices.", fr: "Collecter et normaliser les factures." } }, { step: "02", title: { en: "Approve", fr: "Approbation" }, desc: { en: "Route for approvals.", fr: "Acheminer pour approbation." } }, { step: "03", title: { en: "Pay", fr: "Paiement" }, desc: { en: "Execute payments with audit trail.", fr: "Executer les paiements avec piste d'audit." } }],
    proofMetrics: [{ value: "95%", label: { en: "Automated invoice flow", fr: "Flux facture automatise" }, detail: { en: "Processed without manual chase-ups.", fr: "Traite sans relance manuelle." } }, { value: "48h", label: { en: "Approval cycle", fr: "Cycle approbation" }, detail: { en: "Receipt to payment-ready.", fr: "Reception a pret-au-paiement." } }],
    testimonial: { quote: { en: "AP escalations dropped quickly.", fr: "Les escalades AP ont chute rapidement." }, name: "Isabelle Roy", role: { en: "Controller", fr: "Controleuse" } },
    comparison: { bestFor: { en: "Multi-approver teams", fr: "Equipes avec multi-approbateurs" }, stage: { en: "Growth to Mature", fr: "Croissance a mature" }, deliverables: { en: "Invoice ops, approvals, payments", fr: "Factures, approbations, paiements" } },
    faq: [{ q: { en: "Can AP follow our policies?", fr: "AP peut-il suivre nos politiques?" }, a: { en: "Yes, we map your approval matrix.", fr: "Oui, nous integrons votre matrice d'approbation." } }],
    crossLinks: ["accounts-receivable"],
    isPrimaryHome: false,
  },
  {
    slug: "accounts-receivable",
    category: "operations",
    templateFamily: "A",
    title: { en: "Accounts Receivable", fr: "Comptes clients" },
    navLabel: { en: "Accounts Receivable", fr: "Comptes clients" },
    outcome: { en: "Collect faster and improve cash predictability.", fr: "Encaissez plus vite et ameliorez la previsibilite de tresorerie." },
    heroEyebrow: { en: "Operations Service", fr: "Service operationnel" },
    heroTitle: { en: "Turn receivables into cash faster.", fr: "Transformez les creances en cash plus vite." },
    heroSubtitle: { en: "Better invoicing cadence, follow-up workflows, and aging visibility.", fr: "Cadence facture, relances structurees et visibilite de l'anciennete." },
    painPoints: [{ en: "Invoices go out late.", fr: "Les factures sortent tard." }, { en: "Collections are manual.", fr: "Le recouvrement est manuel." }, { en: "Aging is hard to track.", fr: "L'anciennete est difficile a suivre." }],
    deliverables: [{ title: { en: "Invoice operations", fr: "Operations facture" }, desc: { en: "Standardized invoicing process.", fr: "Processus de facturation standardise." } }, { title: { en: "Collection cadence", fr: "Cadence recouvrement" }, desc: { en: "Automated reminder schedule.", fr: "Cadence de relances automatisee." } }, { title: { en: "Aging dashboards", fr: "Tableaux anciennete" }, desc: { en: "Segmented receivables visibility.", fr: "Visibilite des creances par segment." } }, { title: { en: "Dispute log", fr: "Journal litiges" }, desc: { en: "Central issue tracking.", fr: "Suivi centralise des litiges." } }],
    process: [{ step: "01", title: { en: "Issue", fr: "Emission" }, desc: { en: "Send clear invoices quickly.", fr: "Envoyer des factures claires rapidement." } }, { step: "02", title: { en: "Follow up", fr: "Relance" }, desc: { en: "Run reminder cadence.", fr: "Executer une cadence de relance." } }, { step: "03", title: { en: "Collect", fr: "Encaissement" }, desc: { en: "Match payments and update AR daily.", fr: "Rapprocher paiements et mettre a jour AR quotidiennement." } }],
    proofMetrics: [{ value: "35%", label: { en: "DSO reduction", fr: "Reduction DSO" }, detail: { en: "Average first-quarter impact.", fr: "Impact moyen au premier trimestre." } }, { value: "99%", label: { en: "Collection completion", fr: "Taux recouvrement" }, detail: { en: "On standard terms invoices.", fr: "Sur factures aux termes standard." } }],
    testimonial: { quote: { en: "Cash flow became predictable after AR cleanup.", fr: "La tresorerie est devenue previsible apres nettoyage AR." }, name: "Marc Bouchard", role: { en: "Founder", fr: "Fondateur" } },
    comparison: { bestFor: { en: "B2B recurring billing teams", fr: "Equipes B2B facturees de facon recurrente" }, stage: { en: "Early to Growth", fr: "Demarrage a croissance" }, deliverables: { en: "Invoice ops, collections, aging", fr: "Facturation, recouvrement, anciennete" } },
    faq: [{ q: { en: "Will you contact customers?", fr: "Contactez-vous les clients?" }, a: { en: "Yes, based on your approved tone and thresholds.", fr: "Oui, selon votre ton et seuils approuves." } }],
    crossLinks: ["accounts-payable"],
    isPrimaryHome: false,
  },
  {
    slug: "taxes",
    category: "compliance",
    templateFamily: "B",
    title: { en: "Taxes", fr: "Taxes" },
    navLabel: { en: "Taxes", fr: "Taxes" },
    outcome: { en: "Stay compliant and reduce filing risk.", fr: "Restez conforme et reduisez le risque de declaration." },
    heroEyebrow: { en: "Compliance Service", fr: "Service conformite" },
    heroTitle: { en: "Tax compliance with clear control.", fr: "Conformite fiscale avec controle clair." },
    heroSubtitle: { en: "Managed filing calendar, reconciled records, and audit-ready documentation.", fr: "Calendrier fiscal gere, dossiers rapproches et documents prets a audit." },
    painPoints: [{ en: "Deadlines are hard to track.", fr: "Les echeances sont difficiles a suivre." }, { en: "Records are incomplete at filing time.", fr: "Les dossiers sont incomplets au moment du depot." }, { en: "Audit prep is reactive.", fr: "La preparation audit est reactive." }],
    deliverables: [{ title: { en: "Sales tax filings", fr: "Declarations taxes de vente" }, desc: { en: "Recurring GST/HST/PST filings.", fr: "Declarations recurrentes TPS/TVH/TVP." } }, { title: { en: "Corporate tax prep", fr: "Preparation impot corporatif" }, desc: { en: "Year-end package assembly.", fr: "Assemblage dossier de fin d'annee." } }, { title: { en: "Tax calendar", fr: "Calendrier fiscal" }, desc: { en: "Deadline tracking and ownership.", fr: "Suivi des echeances et responsabilites." } }, { title: { en: "Audit docs", fr: "Docs audit" }, desc: { en: "Organized supporting files.", fr: "Fichiers justificatifs organises." } }],
    process: [{ step: "01", title: { en: "Assess", fr: "Evaluation" }, desc: { en: "Map obligations and readiness.", fr: "Cartographier obligations et preparation." } }, { step: "02", title: { en: "Prepare", fr: "Preparation" }, desc: { en: "Reconcile and prepare returns.", fr: "Rapprocher et preparer les declarations." } }, { step: "03", title: { en: "File", fr: "Depot" }, desc: { en: "Submit and monitor compliance.", fr: "Deposer et suivre la conformite." } }],
    proofMetrics: [{ value: "100%", label: { en: "On-time filing", fr: "Depot a temps" }, detail: { en: "Across managed calendars.", fr: "Sur calendriers geres." } }, { value: "0", label: { en: "Late penalties", fr: "Penalites retard" }, detail: { en: "For managed filing cycles.", fr: "Sur cycles geres." } }],
    testimonial: { quote: { en: "Tax season became structured instead of stressful.", fr: "La saison fiscale est devenue structuree plutot que stressante." }, name: "Amelie Gagnon", role: { en: "CEO", fr: "CEO" } },
    complianceTimeline: [{ date: { en: "Monthly", fr: "Mensuel" }, event: { en: "Sales tax reconciliation", fr: "Rapprochement taxes de vente" } }, { date: { en: "Quarterly", fr: "Trimestriel" }, event: { en: "Compliance checkpoint review", fr: "Revue des controles conformite" } }, { date: { en: "Year-end", fr: "Fin d'annee" }, event: { en: "Corporate return preparation", fr: "Preparation declaration corporative" } }],
    included: [{ en: "Filing calendar ownership", fr: "Pilotage calendrier fiscal" }, { en: "Sales and corporate filing support", fr: "Support declarations vente et corporatif" }, { en: "Audit-ready document prep", fr: "Preparation documents prets audit" }],
    excluded: [{ en: "Tax litigation representation", fr: "Representation contentieux fiscal" }, { en: "Advanced cross-border structuring", fr: "Structuration transfrontaliere avancee" }],
    jurisdictionNotes: [{ en: "Filing rules vary by province and activity.", fr: "Les regles varient selon province et activite." }, { en: "We coordinate with your external tax counsel for complex cases.", fr: "Nous coordonnons avec vos conseillers externes pour les cas complexes." }],
    comparison: { bestFor: { en: "Companies with recurring tax obligations", fr: "Entreprises avec obligations fiscales recurrentes" }, stage: { en: "All stages", fr: "Tous stades" }, deliverables: { en: "Filings, controls, compliance calendar", fr: "Declarations, controles, calendrier conformite" } },
    faq: [{ q: { en: "Do you handle monthly and annual cycles?", fr: "Gerez-vous cycles mensuels et annuels?" }, a: { en: "Yes, both recurring and year-end obligations.", fr: "Oui, obligations recurrentes et annuelles." } }],
    crossLinks: ["bookkeeping", "fractional-cfo"],
    isPrimaryHome: true,
  },
  {
    slug: "fractional-cfo",
    category: "strategy",
    templateFamily: "C",
    title: { en: "Fractional CFO", fr: "CFO fractionnel" },
    navLabel: { en: "Fractional CFO", fr: "CFO fractionnel" },
    outcome: { en: "Strategic finance leadership without full-time overhead.", fr: "Leadership finance strategique sans cout plein temps." },
    heroEyebrow: { en: "Strategic Service", fr: "Service strategique" },
    heroTitle: { en: "Executive financial leadership, part-time.", fr: "Leadership financier executif, a temps partiel." },
    heroSubtitle: { en: "Planning, forecasting, and decision support for growth leaders.", fr: "Planification, prevision et support decisionnel pour dirigeants en croissance." },
    painPoints: [{ en: "Leadership decisions lack financial framing.", fr: "Les decisions manquent de cadrage financier." }, { en: "Forecasting is weak for hiring/capital calls.", fr: "Les previsions sont faibles pour embauche/capital." }, { en: "You need CFO-level help without full-time hiring.", fr: "Vous avez besoin d'un niveau CFO sans embauche plein temps." }],
    deliverables: [{ title: { en: "Forecasting", fr: "Prevision" }, desc: { en: "Rolling forecasts and scenarios.", fr: "Previsions glissantes et scenarios." } }, { title: { en: "Board reporting", fr: "Reporting conseil" }, desc: { en: "Executive KPI packs and narratives.", fr: "Dossiers KPI executifs et narration." } }, { title: { en: "Cash strategy", fr: "Strategie tresorerie" }, desc: { en: "Runway and liquidity governance.", fr: "Gouvernance runway et liquidite." } }, { title: { en: "Finance operating model", fr: "Modele operationnel finance" }, desc: { en: "Cadence and ownership design.", fr: "Conception cadence et responsabilites." } }],
    process: [{ step: "01", title: { en: "Diagnose", fr: "Diagnostic" }, desc: { en: "Assess planning maturity and data quality.", fr: "Evaluer maturite planning et qualite donnees." } }, { step: "02", title: { en: "Design", fr: "Conception" }, desc: { en: "Build CFO operating cadence.", fr: "Construire cadence CFO." } }, { step: "03", title: { en: "Lead", fr: "Pilotage" }, desc: { en: "Run monthly strategic finance routines.", fr: "Piloter routines finance strategique mensuelles." } }],
    proofMetrics: [{ value: "3x", label: { en: "Forecast confidence", fr: "Confiance prevision" }, detail: { en: "Variance reduction over planning cycles.", fr: "Reduction des ecarts sur cycles de planification." } }, { value: "70%", label: { en: "Cost vs full-time CFO", fr: "Cout vs CFO temps plein" }, detail: { en: "Comparable oversight, lower fixed cost.", fr: "Supervision comparable, cout fixe plus bas." } }],
    testimonial: { quote: { en: "Finance became strategic, not just historical.", fr: "La finance est devenue strategique, pas seulement historique." }, name: "Nicolas Tremblay", role: { en: "Founder", fr: "Fondateur" } },
    triggers: [{ en: "Fundraising or debt planning", fr: "Preparation levee de fonds ou dette" }, { en: "Rapid headcount growth", fr: "Croissance rapide des effectifs" }, { en: "Board reporting expectations", fr: "Exigences de reporting conseil" }],
    strategicCapabilities: [{ title: { en: "Scenario modeling", fr: "Modelisation scenarios" }, desc: { en: "Plan downside and growth paths.", fr: "Planifier scenarios prudent et croissance." } }, { title: { en: "KPI architecture", fr: "Architecture KPI" }, desc: { en: "Define decision-driving metrics.", fr: "Definir les indicateurs de decision." } }, { title: { en: "Leadership cadence", fr: "Cadence leadership" }, desc: { en: "Monthly decision and review rhythm.", fr: "Rythme mensuel de decision et revue." } }],
    engagementModel: [{ title: { en: "Monthly advisory", fr: "Conseil mensuel" }, desc: { en: "Steady strategic support.", fr: "Support strategique continu." } }, { title: { en: "Quarterly intensives", fr: "Intensifs trimestriels" }, desc: { en: "Focused milestone planning.", fr: "Planification ciblee sur jalons." } }],
    comparison: { bestFor: { en: "Founder-led firms needing finance leadership", fr: "Entreprises dirigees par fondateur ayant besoin de leadership finance" }, stage: { en: "Growth to Scale", fr: "Croissance a expansion" }, deliverables: { en: "Forecasting, KPI strategy, leadership cadence", fr: "Prevision, strategie KPI, cadence leadership" } },
    faq: [{ q: { en: "Can this replace a full-time CFO at our stage?", fr: "Cela peut-il remplacer un CFO a plein temps a notre stade?" }, a: { en: "For many growth phases, yes.", fr: "Pour plusieurs phases de croissance, oui." } }],
    crossLinks: ["consulting-advisory", "taxes"],
    isPrimaryHome: true,
  },
  {
    slug: "consulting-advisory",
    category: "strategy",
    templateFamily: "C",
    title: { en: "Consulting / Advisory", fr: "Conseil / Advisory" },
    navLabel: { en: "Consulting / Advisory", fr: "Conseil / Advisory" },
    outcome: { en: "Make better financial decisions with a strategic advisor.", fr: "Prenez de meilleures decisions financieres avec un conseiller strategique." },
    heroEyebrow: { en: "Strategic Service", fr: "Service strategique" },
    heroTitle: { en: "Advisory aligned to growth outcomes.", fr: "Conseil aligne sur les objectifs de croissance." },
    heroSubtitle: { en: "Targeted strategic support for finance and operations decisions.", fr: "Support strategique cible pour decisions finance et operations." },
    painPoints: [{ en: "Strategic initiatives stall in execution.", fr: "Les initiatives strategiques bloquent en execution." }, { en: "Teams need clearer decision frameworks.", fr: "Les equipes ont besoin de cadres de decision clairs." }, { en: "Margins are pressured across service lines.", fr: "Les marges sont sous pression." }],
    deliverables: [{ title: { en: "Strategic diagnostics", fr: "Diagnostics strategiques" }, desc: { en: "Identify high-impact bottlenecks.", fr: "Identifier les blocages a fort impact." } }, { title: { en: "Roadmap design", fr: "Conception feuille de route" }, desc: { en: "Prioritized initiative sequencing.", fr: "Priorisation des initiatives." } }, { title: { en: "Decision support", fr: "Support decisionnel" }, desc: { en: "Scenario analysis for major choices.", fr: "Analyse scenarios pour decisions majeures." } }, { title: { en: "Execution coaching", fr: "Coaching execution" }, desc: { en: "Leadership checkpoints and follow-through.", fr: "Points de suivi direction et execution." } }],
    process: [{ step: "01", title: { en: "Discover", fr: "Decouverte" }, desc: { en: "Assess constraints and impact.", fr: "Evaluer contraintes et impact." } }, { step: "02", title: { en: "Prioritize", fr: "Priorisation" }, desc: { en: "Select top ROI initiatives.", fr: "Selectionner initiatives a meilleur ROI." } }, { step: "03", title: { en: "Execute", fr: "Execution" }, desc: { en: "Guide implementation and measurement.", fr: "Guider mise en oeuvre et mesure." } }],
    proofMetrics: [{ value: "3-6", label: { en: "Weeks to first initiative", fr: "Semaines jusqu'a la premiere initiative" }, detail: { en: "Typical from kickoff to launch.", fr: "Typique du demarrage au lancement." } }, { value: "98%", label: { en: "Satisfaction rate", fr: "Taux satisfaction" }, detail: { en: "Post-engagement client feedback.", fr: "Retour client post-mandat." } }],
    testimonial: { quote: { en: "We got a practical roadmap we could execute immediately.", fr: "Nous avons obtenu une feuille de route pratique, executable immediatement." }, name: "Karim El Mansouri", role: { en: "CEO", fr: "CEO" } },
    triggers: [{ en: "Major operational change ahead", fr: "Changement operationnel majeur a venir" }, { en: "Margin pressure across offerings", fr: "Pression de marge sur les offres" }, { en: "Need strategic prioritization", fr: "Besoin de priorisation strategique" }],
    strategicCapabilities: [{ title: { en: "Profitability analysis", fr: "Analyse rentabilite" }, desc: { en: "Margin drivers by segment.", fr: "Facteurs de marge par segment." } }, { title: { en: "Operating model design", fr: "Conception modele operationnel" }, desc: { en: "Workflow redesign for speed.", fr: "Refonte des processus pour vitesse." } }, { title: { en: "Decision frameworks", fr: "Cadres de decision" }, desc: { en: "Clear frameworks for capital choices.", fr: "Cadres clairs pour choix de capital." } }],
    engagementModel: [{ title: { en: "Project advisory", fr: "Conseil projet" }, desc: { en: "Scoped support for one objective.", fr: "Support cible sur un objectif." } }, { title: { en: "Ongoing advisory", fr: "Conseil continu" }, desc: { en: "Recurring strategic support.", fr: "Support strategique recurrent." } }],
    comparison: { bestFor: { en: "Leaders navigating complexity", fr: "Dirigeants en contexte complexe" }, stage: { en: "Growth to Mature", fr: "Croissance a mature" }, deliverables: { en: "Diagnostics, roadmap, decision support", fr: "Diagnostics, feuille de route, support decisionnel" } },
    faq: [{ q: { en: "Can advisory be one-time?", fr: "Le conseil peut-il etre ponctuel?" }, a: { en: "Yes, both project and ongoing models are available.", fr: "Oui, modeles ponctuel et continu disponibles." } }],
    crossLinks: ["fractional-cfo"],
    isPrimaryHome: false,
  },
];

const serviceSnapshots: Record<string, ServiceSnapshot> = {
  bookkeeping: {
    eyebrow: { en: "Bookkeeping Output", fr: "Resultat tenue de livres" },
    headline: { en: "Stop closing late. Start deciding faster.", fr: "Arretez de cloturer en retard. Decidez plus vite." },
    subtitle: { en: "Real-time transaction visibility and reconciled books every month.", fr: "Visibilite transactionnelle en temps reel et livres rapproches chaque mois." },
    ctaLabel: { en: "Clean up my books", fr: "Assainir mes livres" },
    ctaHref: "/expertise#contact",
    visualType: "transactions",
    panelTitle: { en: "Recent Transactions", fr: "Transactions recentes" },
    badgeText: { en: "All reconciled", fr: "Tout rapproche" },
    rows: [
      { label: { en: "Shopify Revenue", fr: "Revenus Shopify" }, subLabel: { en: "Feb 27", fr: "27 fev" }, value: "+$12,450.00", trend: "up" },
      { label: { en: "Office Lease", fr: "Loyer bureau" }, subLabel: { en: "Feb 26", fr: "26 fev" }, value: "-$3,200.00", trend: "down" },
      { label: { en: "Client Payment", fr: "Paiement client" }, subLabel: { en: "Feb 25", fr: "25 fev" }, value: "+$8,750.00", trend: "up" },
      { label: { en: "Software Sub", fr: "Abonnement logiciel" }, subLabel: { en: "Feb 24", fr: "24 fev" }, value: "-$299.00", trend: "down" },
    ],
    footerNote: { en: "143 transactions reconciled this month", fr: "143 transactions rapprochees ce mois-ci" },
  },
  payroll: {
    eyebrow: { en: "Payroll Control", fr: "Controle paie" },
    headline: { en: "Run payroll right. Every cycle.", fr: "Une paie juste. A chaque cycle." },
    subtitle: { en: "Clear payroll operations with compliance checkpoints built in.", fr: "Operations paie claires avec controle conformite integre." },
    ctaLabel: { en: "Run payroll right", fr: "Fiabiliser la paie" },
    ctaHref: "/expertise#contact",
    visualType: "payrollSummary",
    panelTitle: { en: "Payroll Summary", fr: "Resume paie" },
    badgeText: { en: "Next run: Mar 04", fr: "Prochaine paie: 04 mars" },
    rows: [
      { label: { en: "Employees", fr: "Employes" }, value: "38 active", trend: "neutral" },
      { label: { en: "Gross payroll", fr: "Paie brute" }, value: "$94,300", trend: "neutral" },
      { label: { en: "Remittances", fr: "Remises" }, value: "Filed", trend: "up" },
      { label: { en: "Exceptions", fr: "Exceptions" }, value: "2 pending", trend: "down" },
    ],
    footerNote: { en: "100% on-time runs over last 12 cycles", fr: "100% de paies a temps sur les 12 derniers cycles" },
  },
  taxes: {
    eyebrow: { en: "Tax Compliance", fr: "Conformite fiscale" },
    headline: { en: "Stay compliant. Reduce filing stress.", fr: "Restez conforme. Reduisez le stress fiscal." },
    subtitle: { en: "Track obligations and filing progress from one control panel.", fr: "Suivez obligations et progression des depots depuis un seul tableau." },
    ctaLabel: { en: "Stay compliant", fr: "Rester conforme" },
    ctaHref: "/expertise#contact",
    visualType: "taxProgress",
    panelTitle: { en: "Filing Progress", fr: "Progression des depots" },
    badgeText: { en: "Q1 on track", fr: "T1 sur la bonne voie" },
    rows: [
      { label: { en: "Sales tax filing", fr: "Depot taxes de vente" }, value: "Completed", pct: 100, tone: "green" },
      { label: { en: "Corporate package prep", fr: "Preparation dossier corporate" }, value: "72%", pct: 72, tone: "amber" },
      { label: { en: "Supporting docs", fr: "Pieces justificatives" }, value: "84%", pct: 84, tone: "blue" },
      { label: { en: "Review and submit", fr: "Revue et soumission" }, value: "35%", pct: 35, tone: "red" },
    ],
    footerNote: { en: "No late penalties on managed filings", fr: "Aucune penalite de retard sur les dossiers geres" },
  },
  "fractional-cfo": {
    eyebrow: { en: "Executive Finance", fr: "Finance executive" },
    headline: { en: "Plan with a CFO-level operating view.", fr: "Planifiez avec une vision de niveau CFO." },
    subtitle: { en: "Connect runway, growth, and margin decisions in one dashboard.", fr: "Reliez runway, croissance et marges dans un seul tableau de pilotage." },
    ctaLabel: { en: "Plan with a CFO", fr: "Planifier avec un CFO" },
    ctaHref: "/expertise#contact",
    visualType: "kpiOverview",
    panelTitle: { en: "KPI Overview", fr: "Vue KPI" },
    badgeText: { en: "Board-ready", fr: "Pret conseil" },
    rows: [
      { label: { en: "Runway", fr: "Runway" }, value: "18 months", pct: 82, tone: "green" },
      { label: { en: "Gross margin", fr: "Marge brute" }, value: "61%", pct: 61, tone: "blue" },
      { label: { en: "Cash conversion", fr: "Conversion cash" }, value: "47 days", pct: 45, tone: "amber" },
      { label: { en: "Forecast variance", fr: "Ecart prevision" }, value: "7%", pct: 30, tone: "red" },
    ],
    footerNote: { en: "Monthly scenario planning synced with leadership cadence", fr: "Planification de scenarios mensuelle alignee a la cadence de direction" },
  },
  "accounts-payable": {
    eyebrow: { en: "Payables Workflow", fr: "Flux fournisseurs" },
    headline: { en: "Streamline payables. Keep vendor trust.", fr: "Fluidifiez les payables. Gardez la confiance fournisseurs." },
    subtitle: { en: "Track bill approvals and payment readiness without bottlenecks.", fr: "Suivez approbations et paiements sans goulots d'etranglement." },
    ctaLabel: { en: "Streamline payables", fr: "Fluidifier les payables" },
    ctaHref: "/expertise#contact",
    visualType: "apQueue",
    panelTitle: { en: "Bills Queue", fr: "File des factures" },
    badgeText: { en: "12 ready to pay", fr: "12 pretes a payer" },
    rows: [
      { label: { en: "Utilities", fr: "Services publics" }, value: "Approved", trend: "up" },
      { label: { en: "Marketing Retainer", fr: "Retainer marketing" }, value: "Awaiting CFO", trend: "down" },
      { label: { en: "Hosting Vendor", fr: "Fournisseur hebergement" }, value: "Approved", trend: "up" },
      { label: { en: "Office Supplies", fr: "Fournitures bureau" }, value: "Queued", trend: "neutral" },
    ],
    footerNote: { en: "Average approval cycle down to 48h", fr: "Cycle moyen d'approbation reduit a 48h" },
  },
  "accounts-receivable": {
    eyebrow: { en: "Accounts Receivable", fr: "Comptes clients" },
    headline: { en: "Stop chasing payments. Start collecting.", fr: "Arretez de courir apres les paiements. Encaissez." },
    subtitle: { en: "Invoice tracking and collections to keep your cash flowing.", fr: "Suivi des factures et recouvrements pour maintenir la tresorerie." },
    ctaLabel: { en: "Start collecting", fr: "Commencer a encaisser" },
    ctaHref: "/expertise#contact",
    visualType: "invoiceAging",
    panelTitle: { en: "Invoice Aging", fr: "Anciennete factures" },
    badgeText: { en: "$42.1k outstanding", fr: "42.1k$ en attente" },
    rows: [
      { label: { en: "Current", fr: "Courant" }, value: "$34,480", pct: 68, tone: "green" },
      { label: { en: "1-30 days", fr: "1-30 jours" }, value: "$15,300", pct: 42, tone: "amber" },
      { label: { en: "31-60 days", fr: "31-60 jours" }, value: "$5,410", pct: 22, tone: "amber" },
      { label: { en: "60+ days", fr: "60+ jours" }, value: "$1,780", pct: 8, tone: "red" },
    ],
    footerNote: { en: "34 invoices at risk monitored this week", fr: "34 factures a risque suivies cette semaine" },
  },
  "consulting-advisory": {
    eyebrow: { en: "Strategic Advisory", fr: "Conseil strategique" },
    headline: { en: "Get strategic guidance your team can execute.", fr: "Obtenez un conseil strategique executable par votre equipe." },
    subtitle: { en: "Prioritize initiatives by impact and execution readiness.", fr: "Priorisez les initiatives selon impact et faisabilite." },
    ctaLabel: { en: "Get strategic guidance", fr: "Obtenir un conseil strategique" },
    ctaHref: "/expertise#contact",
    visualType: "strategyScorecard",
    panelTitle: { en: "Initiative Scorecard", fr: "Scorecard des initiatives" },
    badgeText: { en: "3 high-priority", fr: "3 priorites elevees" },
    rows: [
      { label: { en: "Margin redesign", fr: "Refonte des marges" }, value: "In execution", trend: "up" },
      { label: { en: "Cash policy reset", fr: "Refonte politique cash" }, value: "Next up", trend: "neutral" },
      { label: { en: "Vendor consolidation", fr: "Consolidation fournisseurs" }, value: "Blocked", trend: "down" },
      { label: { en: "Pricing review", fr: "Revue pricing" }, value: "In review", trend: "neutral" },
    ],
    footerNote: { en: "First measurable initiative launched in under 6 weeks", fr: "Premiere initiative mesurable lancee en moins de 6 semaines" },
  },
};

export const serviceCatalog: ServiceCatalogItem[] = baseServiceCatalog.map((service) => ({
  ...service,
  snapshot: serviceSnapshots[service.slug],
}));

export const serviceGroups = (["operations", "compliance", "strategy"] as ServiceCategory[]).map((category) => ({
  category,
  label: serviceCategoryLabels[category],
  items: serviceCatalog.filter((service) => service.category === category),
}));

export const primaryHomeServices = serviceCatalog.filter((service) => service.isPrimaryHome);
export const nonPrimaryHomeServices = serviceCatalog.filter((service) => !service.isPrimaryHome);

export function getServiceBySlug(slug?: string) {
  return serviceCatalog.find((service) => service.slug === slug);
}
