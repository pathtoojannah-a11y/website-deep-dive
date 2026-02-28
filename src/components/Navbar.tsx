import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { nav, serviceLinks, t } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

export default function Navbar() {
  const { lang, toggle } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = serviceLinks.some((s) => location.pathname === `/${s.slug}`);

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-colors ${active ? "text-orange" : "text-foreground hover:text-orange"}`;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-orange flex items-center justify-center text-accent-foreground font-bold text-lg font-display">
            N
          </div>
          <span className="text-xl font-bold text-foreground font-display">Namaca</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          <Link to="/" className={linkClass(isActive("/"))}>{t(nav.home, lang)}</Link>
          <Link to="/expertise" className={linkClass(isActive("/expertise"))}>{t(nav.expertise, lang)}</Link>

          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${isServiceActive ? "text-orange" : "text-foreground hover:text-orange"}`}
            >
              {t(nav.services, lang)}
              <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-background border border-border rounded-xl shadow-lg py-2 animate-fade-up">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className={`block px-4 py-2.5 text-sm transition-colors ${isActive(`/${s.slug}`) ? "text-orange bg-muted" : "text-foreground hover:bg-muted hover:text-orange"}`}
                  >
                    {t(s.label, lang)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/resources" className={linkClass(isActive("/resources"))}>{t(nav.resources, lang)}</Link>
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
          >
            <Globe size={16} />
            {lang === "en" ? "FR" : "EN"}
          </button>
          <Button asChild className="bg-orange hover:bg-orange-dark text-accent-foreground rounded-full px-6 font-medium">
            <Link to="/expertise#contact">{t(nav.bookCall, lang)}</Link>
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button onClick={toggle} className="p-2 text-muted-foreground"><Globe size={18} /></button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-foreground">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 pb-4 space-y-1">
          <Link to="/" className="block py-2.5 text-sm font-medium">{t(nav.home, lang)}</Link>
          <Link to="/expertise" className="block py-2.5 text-sm font-medium">{t(nav.expertise, lang)}</Link>
          <div>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1 py-2.5 text-sm font-medium w-full">
              {t(nav.services, lang)}
              <ChevronDown size={14} className={servicesOpen ? "rotate-180" : ""} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                {serviceLinks.map((s) => (
                  <Link key={s.slug} to={`/${s.slug}`} className="block py-2 text-sm text-muted-foreground hover:text-orange">
                    {t(s.label, lang)}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/resources" className="block py-2.5 text-sm font-medium">{t(nav.resources, lang)}</Link>
          <Button asChild className="w-full bg-orange hover:bg-orange-dark text-accent-foreground rounded-full font-medium mt-2">
            <Link to="/expertise#contact">{t(nav.bookCall, lang)}</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
