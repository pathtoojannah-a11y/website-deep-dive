export type Lang = "en" | "fr";

type T = Record<Lang, string>;

export const t = (obj: T, lang: Lang) => obj[lang];

export const nav = {
  home: { en: "Home", fr: "Accueil" } as T,
  expertise: { en: "Expertise", fr: "Expertise" } as T,
  services: { en: "Services", fr: "Nos services" } as T,
  resources: { en: "Resources", fr: "Ressources" } as T,
  bookCall: { en: "Contact Us", fr: "Contactez-nous" } as T,
};

export const serviceLinks = [
  { slug: "bookkeeping", label: { en: "Bookkeeping", fr: "Tenue de Livres" } as T },
  { slug: "payroll", label: { en: "Payroll", fr: "Traitement de la Paie" } as T },
  { slug: "taxes", label: { en: "Taxes", fr: "Taxes de Ventes" } as T },
  { slug: "fractional-cfo", label: { en: "Fractional CFO", fr: "Directeur financier à temps partiel" } as T },
  { slug: "accounts-payable", label: { en: "Accounts Payable", fr: "Comptes Payables" } as T },
  { slug: "accounts-receivable", label: { en: "Accounts Receivable", fr: "Comptes Recevables" } as T },
  { slug: "consulting-advisory", label: { en: "Consulting / Advisory", fr: "Service-Conseil" } as T },
];

export const footer = {
  tagline: { en: "Modern cloud accounting for SMEs and startups that want to grow.", fr: "Comptabilité infonuagique moderne pour les PME et startups ambitieuses." } as T,
  quickLinks: { en: "Quick Links", fr: "Liens rapides" } as T,
  servicesTitle: { en: "Services", fr: "Services" } as T,
  contactTitle: { en: "Contact", fr: "Contact" } as T,
  address: "5915 Rue De Jumonville, Montréal, Québec H1M1R2, Canada",
  phone: "+1 (514) 819-1513",
  email: "info@namaca.com",
  rights: { en: "All rights reserved.", fr: "Tous droits réservés." } as T,
};

export const cta = {
  title: { en: "Ready to Streamline Your Finances?", fr: "Prêt à simplifier vos finances?" } as T,
  subtitle: { en: "Book a free consultation and discover how Namaca can transform your accounting.", fr: "Réservez une consultation gratuite et découvrez comment Namaca peut transformer votre comptabilité." } as T,
  button: { en: "Book a Free Consultation", fr: "Réserver une consultation gratuite" } as T,
};

export const contactForm = {
  title: { en: "Get in Touch", fr: "Contactez-nous" } as T,
  subtitle: { en: "Fill out the form and our team will get back to you within 24 hours.", fr: "Remplissez le formulaire et notre équipe vous répondra dans les 24 heures." } as T,
  firstName: { en: "First Name", fr: "Prénom" } as T,
  lastName: { en: "Last Name", fr: "Nom" } as T,
  email: { en: "Email", fr: "Courriel" } as T,
  phone: { en: "Phone", fr: "Téléphone" } as T,
  message: { en: "Message", fr: "Message" } as T,
  submit: { en: "Send Message", fr: "Envoyer" } as T,
  success: { en: "Thank you! We'll be in touch soon.", fr: "Merci! Nous vous contacterons bientôt." } as T,
};
