import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/translations";
import Layout from "@/components/Layout";
import { resourcesPage, posts } from "@/data/resources";
import { Calendar, ArrowRight } from "lucide-react";

const categoriesMap: Record<string, { en: string; fr: string }> = {
  All: { en: "All", fr: "Tous" },
  Accounting: { en: "Accounting", fr: "Comptabilité" },
  Taxes: { en: "Taxes", fr: "Impôts" },
  Bookkeeping: { en: "Bookkeeping", fr: "Tenue de livres" },
  Technology: { en: "Technology", fr: "Technologie" },
  Finance: { en: "Finance", fr: "Finance" },
  Advisory: { en: "Advisory", fr: "Conseils" },
  Operations: { en: "Operations", fr: "Opérations" },
  Payroll: { en: "Payroll", fr: "Paie" },
};

const categoryKeys = Object.keys(categoriesMap);

export default function Resources() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? posts
    : posts.filter((p) => p.category.en === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28 relative overflow-hidden" data-reveal>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <p data-reveal-child className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-4">{lang === "en" ? "Resources" : "Ressources"}</p>
          <h1 data-reveal-child className="font-display text-4xl md:text-5xl text-primary-foreground mb-5">{t(resourcesPage.title, lang)}</h1>
          <p data-reveal-child className="text-lg text-primary-foreground/60">{t(resourcesPage.subtitle, lang)}</p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-12" data-reveal>
            {categoryKeys.map((key) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === key ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-cream-dark"}`}
              >
                {categoriesMap[key][lang]}
              </button>
            ))}
          </div>

          {/* Posts grid — consistent layout, no featured jump */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal>
            {filtered.map((post) => (
              <article key={post.slug} className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group" data-reveal-child>
                <div className="h-44 bg-gradient-to-br from-navy/80 to-navy-mid flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary-foreground/50 bg-primary-foreground/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {t(post.category, lang)}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString(lang === "en" ? "en-CA" : "fr-CA", { year: "numeric", month: "long", day: "numeric" })}
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2 leading-snug group-hover:text-accent transition-colors">
                    {t(post.title, lang)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {t(post.excerpt, lang)}
                  </p>
                  <span className="text-sm font-semibold text-accent inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {lang === "en" ? "Read More" : "Lire la suite"}
                    <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
