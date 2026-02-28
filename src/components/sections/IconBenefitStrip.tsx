import { LucideIcon } from "lucide-react";

interface StripItem {
  icon: LucideIcon;
  label: string;
  subLabel?: string;
}

export interface IconBenefitStripProps {
  title?: string;
  items: StripItem[];
}

export default function IconBenefitStrip({ items }: IconBenefitStripProps) {
  return (
    <section className="py-6 md:py-8 bg-cream border-y border-border/30" data-reveal>
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} data-reveal-child className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-border/60 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{item.label}</div>
                  {item.subLabel && <div className="text-xs text-muted-foreground">{item.subLabel}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
