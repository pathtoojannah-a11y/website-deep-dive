import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { nav, footer as f, t } from "@/i18n/translations";
import { serviceCatalog } from "@/data/serviceCatalog";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo.svg";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <img src={logo} alt="Namaca" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-primary-foreground/50 leading-relaxed max-w-xs">{t(f.tagline, lang)}</p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/50 hover:text-gold hover:border-gold/40 transition-all" aria-label="Social link">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-5">{t(f.quickLinks, lang)}</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-sm text-primary-foreground/50 hover:text-gold transition-colors">{t(nav.home, lang)}</Link>
              <Link to="/expertise" className="block text-sm text-primary-foreground/50 hover:text-gold transition-colors">{t(nav.expertise, lang)}</Link>
              <Link to="/resources" className="block text-sm text-primary-foreground/50 hover:text-gold transition-colors">{t(nav.resources, lang)}</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-5">{t(f.servicesTitle, lang)}</h4>
            <div className="space-y-3">
              {serviceCatalog.map((s) => (
                <Link key={s.slug} to={`/${s.slug}`} className="block text-sm text-primary-foreground/50 hover:text-gold transition-colors">
                  {t(s.navLabel, lang)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-5">{t(f.contactTitle, lang)}</h4>
            <div className="space-y-3 text-sm text-primary-foreground/50">
              <p>{f.address}</p>
              <p>{f.phone}</p>
              <a href={`mailto:${f.email}`} className="hover:text-gold transition-colors">{f.email}</a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/30">
          <span>© {new Date().getFullYear()} Namaca. {t(f.rights, lang)}</span>
          <span className="text-primary-foreground/20">Montréal, Canada</span>
        </div>
      </div>
    </footer>
  );
}
