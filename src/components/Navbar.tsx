import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { nav, serviceLinks, t } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.svg";

export default function Navbar() {
  const { lang, toggle } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    `text-sm font-medium transition-colors ${active ? "text-accent" : "text-foreground/80 hover:text-foreground"}`;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-[72px] px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Namaca" className="h-9 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className={linkClass(isActive("/"))}>{t(nav.home, lang)}</Link>
          <Link to="/expertise" className={linkClass(isActive("/expertise"))}>{t(nav.expertise, lang)}</Link>

          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${isServiceActive ? "text-accent" : "text-foreground/80 hover:text-foreground"}`}
            >
              {t(nav.services, lang)}
              <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-card border border-border rounded-xl shadow-xl py-2 animate-fade-up origin-top">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className={`block px-5 py-3 text-sm transition-all ${isActive(`/${s.slug}`) ? "text-accent bg-accent/5" : "text-foreground/70 hover:bg-muted hover:text-foreground hover:pl-6"}`}
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
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            {lang === "en" ? "FR" : "EN"}
          </button>
          <Button asChild className="bg-accent hover:bg-orange-dark text-accent-foreground rounded-full px-7 py-5 text-sm font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all hover:-translate-y-0.5">
            <Link to="/expertise#contact">{t(nav.bookCall, lang)}</Link>
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button onClick={toggle} className="p-2 text-muted-foreground" aria-label="Toggle language"><Globe size={18} /></button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-foreground" aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 pb-6 pt-2 space-y-1">
          <Link to="/" className="block py-3 text-sm font-medium">{t(nav.home, lang)}</Link>
          <Link to="/expertise" className="block py-3 text-sm font-medium">{t(nav.expertise, lang)}</Link>
          <div>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1 py-3 text-sm font-medium w-full">
              {t(nav.services, lang)}
              <ChevronDown size={14} className={servicesOpen ? "rotate-180" : ""} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1 pb-2">
                {serviceLinks.map((s) => (
                  <Link key={s.slug} to={`/${s.slug}`} className="block py-2 text-sm text-muted-foreground hover:text-accent">
                    {t(s.label, lang)}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/resources" className="block py-3 text-sm font-medium">{t(nav.resources, lang)}</Link>
          <Button asChild className="w-full bg-accent hover:bg-orange-dark text-accent-foreground rounded-full font-semibold mt-3">
            <Link to="/expertise#contact">{t(nav.bookCall, lang)}</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
