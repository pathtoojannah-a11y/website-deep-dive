import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock3, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServiceCatalogItem, getServiceBySlug } from "@/data/serviceCatalog";
import { t } from "@/i18n/translations";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceSnapshot from "@/components/services/ServiceSnapshot";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceProof from "@/components/services/ServiceProof";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import { Button } from "@/components/ui/button";

function PainSection({ service }: { service: ServiceCatalogItem }) {
  const { lang } = useLanguage();
  return (
    <section className="py-20 md:py-28 bg-cream" data-reveal>
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
          {lang === "en" ? "What Breaks Without This" : "Ce qui casse sans ce service"}
        </p>
        <div className="space-y-4">
          {service.painPoints.map((p, i) => (
            <p key={i} data-reveal-child className="font-display text-xl md:text-2xl text-foreground/85">
              {t(p, lang)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverablesSection({ service }: { service: ServiceCatalogItem }) {
  const { lang } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-background" data-reveal>
      <div className="container mx-auto px-4">
        <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
          {lang === "en" ? "What You Get" : "Ce que vous obtenez"}
        </p>
        <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-foreground mb-12">
          {lang === "en" ? "Deliverables designed for execution" : "Livrables concus pour l'execution"}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {service.deliverables.map((item, i) => (
            <div key={i} data-reveal-child className="rounded-2xl bg-card border border-border/60 p-7">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle size={18} className="text-accent" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{t(item.title, lang)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(item.desc, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CrossLinkSection({ service }: { service: ServiceCatalogItem }) {
  const { lang } = useLanguage();
  return (
    <section className="py-12 bg-muted/30" data-reveal>
      <div className="container mx-auto px-4 max-w-4xl">
        <p data-reveal-child className="text-center text-sm text-muted-foreground mb-6">
          {lang === "en" ? "Related services your team may need next" : "Services connexes que votre equipe pourrait utiliser ensuite"}
        </p>
        <div className="flex flex-wrap justify-center gap-3" data-reveal-child>
          {service.crossLinks.map((slug) => {
            const linked = getServiceBySlug(slug);
            if (!linked) return null;
            return (
              <Button key={slug} asChild variant="outline" className="rounded-full">
                <Link to={`/${slug}`}>
                  {t(linked.navLabel, lang)}
                  <ArrowRight size={14} className="ml-1.5" />
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceFamilyLayoutA({ service }: { service: ServiceCatalogItem }) {
  return (
    <>
      <ServiceHero service={service} />
      <DeliverablesSection service={service} />
      <ServiceProcess service={service} />
      <ServiceProof service={service} />
      <PainSection service={service} />
      <FAQSection items={service.faq} />
      <CrossLinkSection service={service} />
      <CTASection />
    </>
  );
}

export function ServiceFamilyLayoutB({ service }: { service: ServiceCatalogItem }) {
  const { lang } = useLanguage();
  return (
    <>
      <ServiceHero service={service} />
      <ServiceSnapshot service={service} />
      <section className="py-20 md:py-28 bg-cream" data-reveal>
        <div className="container mx-auto px-4 max-w-5xl">
          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
            {lang === "en" ? "Filing Timeline" : "Calendrier des declarations"}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {(service.complianceTimeline || []).map((entry, i) => (
              <div key={i} data-reveal-child className="rounded-xl bg-card border border-border/60 p-6">
                <div className="text-accent font-semibold mb-2">{t(entry.date, lang)}</div>
                <p className="text-sm text-muted-foreground">{t(entry.event, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-background" data-reveal>
        <div className="container mx-auto px-4 max-w-5xl grid lg:grid-cols-2 gap-8">
          <div data-reveal-child className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-8">
            <div className="flex items-center gap-2 mb-4 font-semibold text-emerald-700"><ShieldCheck size={16} />{lang === "en" ? "Included" : "Inclus"}</div>
            <ul className="space-y-3 text-sm text-foreground/80">
              {(service.included || []).map((i, idx) => <li key={idx}>{t(i, lang)}</li>)}
            </ul>
          </div>
          <div data-reveal-child className="rounded-2xl border border-amber-200 bg-amber-50/60 p-8">
            <div className="flex items-center gap-2 mb-4 font-semibold text-amber-700"><Clock3 size={16} />{lang === "en" ? "Outside Scope" : "Hors mandat"}</div>
            <ul className="space-y-3 text-sm text-foreground/80">
              {(service.excluded || []).map((i, idx) => <li key={idx}>{t(i, lang)}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-14 bg-muted/30" data-reveal>
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 data-reveal-child className="font-display text-2xl text-foreground mb-4">{lang === "en" ? "Jurisdiction Notes" : "Notes de juridiction"}</h3>
          <div className="space-y-3">
            {(service.jurisdictionNotes || []).map((n, i) => (
              <p key={i} data-reveal-child className="text-muted-foreground">{t(n, lang)}</p>
            ))}
          </div>
        </div>
      </section>
      <ServiceProof service={service} />
      <FAQSection items={service.faq} />
      <CTASection />
    </>
  );
}

export function ServiceFamilyLayoutC({ service }: { service: ServiceCatalogItem }) {
  const { lang } = useLanguage();
  return (
    <>
      <ServiceHero service={service} />
      <ServiceSnapshot service={service} />
      <section className="py-20 md:py-28 bg-cream" data-reveal>
        <div className="container mx-auto px-4 max-w-5xl">
          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
            {lang === "en" ? "When to Engage Us" : "Quand nous engager"}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {(service.triggers || []).map((trigger, i) => (
              <div key={i} data-reveal-child className="rounded-xl border border-border/60 bg-card p-6 text-sm text-foreground/80">
                {t(trigger, lang)}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-background" data-reveal>
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-3 gap-6">
          {(service.strategicCapabilities || []).map((cap, i) => (
            <div key={i} data-reveal-child className="rounded-2xl p-7 border border-border/60 bg-card">
              <h3 className="font-display text-xl text-foreground mb-3">{t(cap.title, lang)}</h3>
              <p className="text-sm text-muted-foreground">{t(cap.desc, lang)}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-navy text-primary-foreground" data-reveal>
        <div className="container mx-auto px-4 max-w-5xl">
          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-4">
            {lang === "en" ? "Engagement Model" : "Modele d'engagement"}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {(service.engagementModel || []).map((model, i) => (
              <div key={i} data-reveal-child className="rounded-xl border border-white/10 p-6 bg-white/5">
                <h3 className="font-display text-xl mb-2">{t(model.title, lang)}</h3>
                <p className="text-primary-foreground/70 text-sm">{t(model.desc, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceProcess service={service} />
      <ServiceProof service={service} />
      <CrossLinkSection service={service} />
      <CTASection />
    </>
  );
}
