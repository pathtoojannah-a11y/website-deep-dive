import { LucideIcon } from "lucide-react";

interface IconBenefitStripProps {
  items: { icon: LucideIcon; label: string }[];
  className?: string;
}

export default function IconBenefitStrip({ items, className = "" }: IconBenefitStripProps) {
  return (
    <section className={`py-8 bg-navy ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-14">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-accent" />
                </div>
                <span className="text-sm font-medium font-sans">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
