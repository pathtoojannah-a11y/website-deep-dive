import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { nav, t } from "@/i18n/translations";
import { serviceGroups } from "@/data/serviceCatalog";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.svg";

export default function Navbar() {
  const { lang, toggle } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileGroupOpen, setMobileGroupOpen] = useState<Record<string, boolean>>({});
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
  const isServiceActive = location.pathname === "/services" || serviceGroups.some((group) => group.items.some((s) => location.pathname === `/${s.slug}`));

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-colors ${active ? "text-accent" : "text-foreground/80 hover:text-foreground"}`;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl shadow-sm border-b border-border/30" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-[72px] px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Namaca" className="h-9 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className={linkClass(isActive("/"))}>{t(nav.home, lang)}</Link>
          <Link to="/expertise" className={linkClass(isActive("/expertise"))}>{t(nav.expertise, lang)}</Link>

          <div ref={dropdownRef} className="relative">
            <button onClick={() => setServicesOpen((v) => !v)} className={`flex items-center gap-1 text-sm font-medium transition-colors ${isServiceActive ? "text-accent" : "text-foreground/80 hover:text-foreground"}`}>
              {t(nav.services, lang)}
              <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-card border border-border rounded-xl shadow-xl p-4 animate-fade-up origin-top">
                <Link to="/services" className="block px-3 py-2 text-sm font-semibold text-accent hover:bg-accent/5 rounded-lg">
                  {lang === "en" ? "All Services" : "Tous les services"}
                </Link>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  {serviceGroups.map((group) => (
                    <div key={group.category}>
                      <p className="text-[11px] uppercase tracking-wide text-muted-foreground mb-2 px-3">{t(group.label, lang)}</p>
                      <div className="space-y-1">
                        {group.items.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/${service.slug}`}
                            className={`block px-3 py-2.5 rounded-lg transition-all ${
                              isActive(`/${service.slug}`)
                                ? "bg-accent/5 ring-2 ring-accent/25"
                                : "hover:bg-muted hover:shadow-[0_0_0_2px_rgba(245,158,11,0.25)]"
                            }`}
                          >
                            <div className="text-sm font-medium text-foreground">{t(service.navLabel, lang)}</div>
                            <div className="text-[11px] text-muted-foreground mt-1 line-clamp-2">
                              {t(service.snapshot.subtitle, lang)}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/resources" className={linkClass(isActive("/resources"))}>{t(nav.resources, lang)}</Link>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button onClick={toggle} className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1" aria-label="Toggle language">
            <Globe size={16} />
            {lang === "en" ? "FR" : "EN"}
          </button>
          <Button asChild className="bg-accent hover:bg-orange-dark text-accent-foreground rounded-full px-7 py-5 text-sm font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all hover:-translate-y-0.5">
            <Link to="/expertise#contact">{t(nav.bookCall, lang)}</Link>
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button onClick={toggle} className="p-2 text-muted-foreground" aria-label="Toggle language"><Globe size={18} /></button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-foreground" aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 pb-6 pt-2 space-y-1">
          <Link to="/" className="block py-3 text-sm font-medium">{t(nav.home, lang)}</Link>
          <Link to="/expertise" className="block py-3 text-sm font-medium">{t(nav.expertise, lang)}</Link>
          <Link to="/services" className="block py-3 text-sm font-semibold text-accent">{lang === "en" ? "All Services" : "Tous les services"}</Link>
          <div className="space-y-2">
            {serviceGroups.map((group) => (
              <div key={group.category} className="border border-border/60 rounded-lg">
                <button
                  onClick={() => setMobileGroupOpen((prev) => ({ ...prev, [group.category]: !prev[group.category] }))}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium"
                >
                  {t(group.label, lang)}
                  <ChevronDown size={14} className={mobileGroupOpen[group.category] ? "rotate-180" : ""} />
                </button>
                {mobileGroupOpen[group.category] && (
                  <div className="px-3 pb-3 space-y-1">
                    {group.items.map((service) => (
                      <Link key={service.slug} to={`/${service.slug}`} className="block py-2 text-sm rounded-md px-2 hover:bg-muted/60 transition-colors">
                        <div className="text-foreground">{t(service.navLabel, lang)}</div>
                        <div className="text-xs text-muted-foreground line-clamp-2">{t(service.snapshot.subtitle, lang)}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
