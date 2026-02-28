interface InlineTestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export default function InlineTestimonial({ quote, author, role }: InlineTestimonialProps) {
  return (
    <section className="py-16 md:py-20 bg-background" data-reveal>
      <div className="container mx-auto px-4 max-w-4xl">
        <div data-reveal-child className="relative rounded-2xl border border-border/60 bg-card px-8 py-10 md:px-12 md:py-12 shadow-sm">
          <span className="absolute top-2 left-5 text-7xl font-display text-foreground/[0.08]" aria-hidden="true">
            "
          </span>
          <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-[1.35] mb-7 italic">
            {quote}
          </blockquote>
          <div className="text-sm">
            <div className="font-semibold text-foreground">{author}</div>
            <div className="text-muted-foreground">{role}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
