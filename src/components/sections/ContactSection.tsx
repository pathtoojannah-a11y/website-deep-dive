import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { contactForm as cf, t, footer as f } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background" data-reveal>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
            {lang === "en" ? "Get in Touch" : "Nous contacter"}
          </p>
          <h2 data-reveal-child className="font-display text-3xl md:text-4xl text-foreground mb-4">{t(cf.title, lang)}</h2>
          <p data-reveal-child className="text-muted-foreground text-lg max-w-xl mx-auto">{t(cf.subtitle, lang)}</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6 bg-cream rounded-2xl p-8 md:p-10" data-reveal-child>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">{t(cf.firstName, lang)}</label>
                <input placeholder={t(cf.firstName, lang)} className="w-full bg-transparent border-0 border-b-2 border-border focus:border-accent outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors" required />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">{t(cf.lastName, lang)}</label>
                <input placeholder={t(cf.lastName, lang)} className="w-full bg-transparent border-0 border-b-2 border-border focus:border-accent outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors" required />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">{t(cf.email, lang)}</label>
              <input type="email" placeholder={t(cf.email, lang)} className="w-full bg-transparent border-0 border-b-2 border-border focus:border-accent outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors" required />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">{t(cf.message, lang)}</label>
              <textarea placeholder={lang === "en" ? "Tell us about your business..." : "Parlez-nous de votre entreprise..."} rows={4} className="w-full bg-transparent border-0 border-b-2 border-border focus:border-accent outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors resize-none" required />
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <Button type="submit" className="bg-accent hover:bg-orange-dark text-accent-foreground rounded-full px-10 py-6 text-base font-semibold hover:-translate-y-0.5 transition-all shadow-lg shadow-accent/20" size="lg" disabled={submitted}>
                {submitted ? (
                  <><CheckCircle size={18} className="mr-2" />{t(cf.success, lang)}</>
                ) : (
                  <><Send size={18} className="mr-2" />{t(cf.submit, lang)}</>
                )}
              </Button>
              <span className="text-xs text-muted-foreground">{lang === "en" ? "We respond within 24 hours." : "Nous répondons dans les 24 heures."}</span>
            </div>
          </form>
          <div className="lg:col-span-2 space-y-6" data-reveal-child>
            <div className="bg-cream rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-accent" size={18} />
                </div>
                <span className="text-sm text-foreground leading-relaxed pt-2">{f.address}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="text-accent" size={18} />
                </div>
                <span className="text-sm text-foreground">{f.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="text-accent" size={18} />
                </div>
                <a href={`mailto:${f.email}`} className="text-sm text-foreground hover:text-accent transition-colors">{f.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
