import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const { lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);
  const nav = translations.nav;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-orange flex items-center justify-center text-accent-foreground font-bold text-lg font-display">N</div>
          <span className="text-xl font-bold text-foreground font-display">Namaca</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("hero")} className="text-sm font-medium text-foreground hover:text-orange transition-colors">{t(nav.home, lang)}</button>
          <button onClick={() => scrollTo("services")} className="text-sm font-medium text-foreground hover:text-orange transition-colors">{t(nav.services, lang)}</button>
          <button onClick={() => scrollTo("expertise")} className="text-sm font-medium text-foreground hover:text-orange transition-colors">{t(nav.expertise, lang)}</button>
          <button onClick={() => scrollTo("contact")} className="text-sm font-medium text-foreground hover:text-orange transition-colors">{t(nav.contact, lang)}</button>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md"
          >
            <Globe size={16} />
            {lang === "en" ? "FR" : "EN"}
          </button>
          <Button
            onClick={() => scrollTo("contact")}
            className="bg-orange hover:bg-orange-dark text-accent-foreground rounded-full px-6 font-medium"
          >
            {t(nav.scheduleCall, lang)}
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggle} className="p-2 text-muted-foreground">
            <Globe size={18} />
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 text-foreground">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4 space-y-2">
          <button onClick={() => scrollTo("hero")} className="block w-full text-left py-2 text-sm font-medium">{t(nav.home, lang)}</button>
          <button onClick={() => scrollTo("services")} className="block w-full text-left py-2 text-sm font-medium">{t(nav.services, lang)}</button>
          <button onClick={() => scrollTo("expertise")} className="block w-full text-left py-2 text-sm font-medium">{t(nav.expertise, lang)}</button>
          <button onClick={() => scrollTo("contact")} className="block w-full text-left py-2 text-sm font-medium">{t(nav.contact, lang)}</button>
          <Button onClick={() => scrollTo("contact")} className="w-full bg-orange hover:bg-orange-dark text-accent-foreground rounded-full font-medium">
            {t(nav.scheduleCall, lang)}
          </Button>
        </div>
      )}
    </nav>
  );
}
