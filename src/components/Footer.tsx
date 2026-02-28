import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { nav, serviceLinks, footer as f, t } from "@/i18n/translations";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-navy text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-orange flex items-center justify-center text-accent-foreground font-bold font-display">N</div>
              <span className="text-xl font-bold font-display">Namaca</span>
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">{t(f.tagline, lang)}</p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-orange transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">{t(f.quickLinks, lang)}</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-primary-foreground/60 hover:text-orange transition-colors">{t(nav.home, lang)}</Link>
              <Link to="/expertise" className="block text-sm text-primary-foreground/60 hover:text-orange transition-colors">{t(nav.expertise, lang)}</Link>
              <Link to="/resources" className="block text-sm text-primary-foreground/60 hover:text-orange transition-colors">{t(nav.resources, lang)}</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">{t(f.servicesTitle, lang)}</h4>
            <div className="space-y-2">
              {serviceLinks.map((s) => (
                <Link key={s.slug} to={`/${s.slug}`} className="block text-sm text-primary-foreground/60 hover:text-orange transition-colors">
                  {t(s.label, lang)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">{t(f.contactTitle, lang)}</h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>{f.address}</p>
              <p>{f.phone}</p>
              <p>{f.email}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} Namaca. {t(f.rights, lang)}
        </div>
      </div>
    </footer>
  );
}
