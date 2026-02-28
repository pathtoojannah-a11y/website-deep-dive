import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactForm() {
  const { lang } = useLanguage();
  const data = translations.contact;
  const footer = translations.footer;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
            {t(data.title, lang)}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t(data.subtitle, lang)}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t(data.firstName, lang)}</label>
                <Input placeholder={t(data.firstName, lang)} className="rounded-xl" required />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t(data.lastName, lang)}</label>
                <Input placeholder={t(data.lastName, lang)} className="rounded-xl" required />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t(data.email, lang)}</label>
              <Input type="email" placeholder={t(data.email, lang)} className="rounded-xl" required />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t(data.phone, lang)}</label>
              <Input type="tel" placeholder={t(data.phone, lang)} className="rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t(data.message, lang)}</label>
              <Textarea placeholder={t(data.message, lang)} rows={4} className="rounded-xl" required />
            </div>
            <Button
              type="submit"
              className="bg-orange hover:bg-orange-dark text-accent-foreground rounded-full px-8 py-6 text-base font-medium w-full sm:w-auto"
              size="lg"
              disabled={submitted}
            >
              {submitted ? t(data.success, lang) : t(data.submit, lang)}
              {!submitted && <Send size={18} />}
            </Button>
          </form>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-cream rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="text-orange shrink-0 mt-1" size={20} />
                <span className="text-sm text-foreground">{footer.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-orange shrink-0" size={20} />
                <span className="text-sm text-foreground">{footer.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-orange shrink-0" size={20} />
                <span className="text-sm text-foreground">{footer.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
