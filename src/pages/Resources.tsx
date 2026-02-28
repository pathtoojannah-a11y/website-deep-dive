import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/translations";
import Layout from "@/components/Layout";
import { resourcesPage, posts } from "@/data/resources";
import { Calendar, ArrowRight } from "lucide-react";

export default function Resources() {
  const { lang } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-cream py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">{t(resourcesPage.title, lang)}</h1>
          <p className="text-lg text-muted-foreground">{t(resourcesPage.subtitle, lang)}</p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group">
                {/* Thumbnail placeholder */}
                <div className="h-48 bg-gradient-to-br from-navy/80 to-navy flex items-center justify-center">
                  <span className="text-sm font-medium text-primary-foreground/60 bg-primary-foreground/10 px-3 py-1 rounded-full">
                    {t(post.category, lang)}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString(lang === "en" ? "en-CA" : "fr-CA", { year: "numeric", month: "long", day: "numeric" })}
                  </div>
                  <h3 className="font-bold text-foreground mb-2 leading-snug group-hover:text-orange transition-colors">
                    {t(post.title, lang)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                    {t(post.excerpt, lang)}
                  </p>
                  <span className="text-sm font-medium text-orange inline-flex items-center gap-1 group-hover:gap-2 transition-all">
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
