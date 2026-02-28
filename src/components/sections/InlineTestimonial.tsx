interface InlineTestimonialProps {
  quote: string;
  name: string;
  company: string;
  className?: string;
}

export default function InlineTestimonial({ quote, name, company, className = "" }: InlineTestimonialProps) {
  return (
    <section className={`py-16 md:py-20 bg-cream ${className}`} data-reveal>
      <div className="container mx-auto px-4 max-w-3xl text-center" data-reveal-child>
        <div className="font-display text-5xl text-accent/30 leading-none mb-4">"</div>
        <blockquote className="font-display text-xl md:text-2xl text-foreground leading-relaxed mb-6">
          {quote}
        </blockquote>
        <div className="text-sm text-muted-foreground font-sans">
          <span className="font-semibold text-foreground">{name}</span>
          <span className="mx-2 text-border">—</span>
          <span>{company}</span>
        </div>
      </div>
    </section>
  );
}
