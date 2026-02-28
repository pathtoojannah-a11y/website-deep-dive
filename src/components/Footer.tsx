import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const { lang } = useLanguage();
  const nav = translations.nav;
  const footer = translations.footer;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-orange flex items-center justify-center text-accent-foreground font-bold font-display">N</div>
              <span className="text-xl font-bold font-display">Namaca</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              {t(footer.tagline, lang)}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">
              {t(footer.quickLinks, lang)}
            </h4>
            <div className="space-y-2">
              <button onClick={() => scrollTo("hero")} className="block text-sm text-primary-foreground/60 hover:text-orange transition-colors">{t(nav.home, lang)}</button>
              <button onClick={() => scrollTo("services")} className="block text-sm text-primary-foreground/60 hover:text-orange transition-colors">{t(nav.services, lang)}</button>
              <button onClick={() => scrollTo("expertise")} className="block text-sm text-primary-foreground/60 hover:text-orange transition-colors">{t(nav.expertise, lang)}</button>
              <button onClick={() => scrollTo("contact")} className="block text-sm text-primary-foreground/60 hover:text-orange transition-colors">{t(nav.contact, lang)}</button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">
              {t(footer.contactInfo, lang)}
            </h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>{footer.address}</p>
              <p>{footer.phone}</p>
              <p>{footer.email}</p>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-orange transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-orange transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-orange transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} Namaca. {t(footer.rights, lang)}
        </div>
      </div>
    </footer>
  );
}
