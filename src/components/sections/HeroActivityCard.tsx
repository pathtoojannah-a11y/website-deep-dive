import { useState, useEffect } from "react";
import { CheckCircle, TrendingUp, FileText, DollarSign, Users, ShieldCheck } from "lucide-react";
import { Lang } from "@/i18n/translations";

interface ActivityItem {
  icon: typeof CheckCircle;
  label: Record<Lang, string>;
  detail: Record<Lang, string>;
  accent: string;
  iconBg: string;
}

const activities: ActivityItem[] = [
  {
    icon: CheckCircle,
    label: { en: "Books reconciled", fr: "Livres rapproches" },
    detail: { en: "143 transactions this month", fr: "143 transactions ce mois" },
    accent: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
  },
  {
    icon: Users,
    label: { en: "Payroll processed", fr: "Paie traitee" },
    detail: { en: "12 employees paid on time", fr: "12 employes payes a temps" },
    accent: "text-blue-400",
    iconBg: "bg-blue-500/15",
  },
  {
    icon: FileText,
    label: { en: "GST/HST filed", fr: "TPS/TVH deposee" },
    detail: { en: "Q4 submitted before deadline", fr: "T4 soumise avant la date limite" },
    accent: "text-purple-400",
    iconBg: "bg-purple-500/15",
  },
  {
    icon: TrendingUp,
    label: { en: "Cash flow forecast ready", fr: "Prevision de tresorerie prete" },
    detail: { en: "18-month runway confirmed", fr: "Horizon de 18 mois confirme" },
    accent: "text-amber-400",
    iconBg: "bg-amber-500/15",
  },
  {
    icon: DollarSign,
    label: { en: "Invoices collected", fr: "Factures collectees" },
    detail: { en: "$28,400 received this week", fr: "28 400 $ recus cette semaine" },
    accent: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
  },
  {
    icon: ShieldCheck,
    label: { en: "Audit-ready", fr: "Pret pour l'audit" },
    detail: { en: "All documents organized", fr: "Tous les documents organises" },
    accent: "text-blue-400",
    iconBg: "bg-blue-500/15",
  },
];

const VISIBLE_COUNT = 4;
const CYCLE_INTERVAL = 2200;

export default function HeroActivityCard({ lang }: { lang: Lang }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [completedItems, setCompletedItems] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % activities.length;
        setCompletedItems((completed) => {
          const updated = [...completed, prev];
          if (updated.length > activities.length) {
            return updated.slice(-activities.length);
          }
          return updated;
        });
        return next;
      });
    }, CYCLE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const visibleItems = Array.from({ length: VISIBLE_COUNT }, (_, i) => {
    const idx = (activeIndex + i) % activities.length;
    return { ...activities[idx], idx };
  });

  return (
    <div className="rounded-2xl border border-white/[0.12] bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl shadow-2xl p-6 w-full max-w-md mx-auto">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-auto text-[10px] text-white/30 font-mono">namaca.ca</span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="text-sm font-semibold uppercase tracking-wider text-white/50">
          {lang === "en" ? "Live Activity" : "Activite en direct"}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[11px] text-emerald-400 font-medium">
            {lang === "en" ? "All systems active" : "Tous systemes actifs"}
          </span>
        </div>
      </div>

      {/* Activity items */}
      <div className="space-y-3">
        {visibleItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = i === 0;
          const isCompleted = completedItems.includes(item.idx);

          return (
            <div
              key={`${item.idx}-${activeIndex}`}
              className={`flex items-center gap-3.5 rounded-xl px-4 py-3.5 transition-all duration-500 ${
                isActive
                  ? "bg-white/[0.08] border border-white/[0.12] scale-100 opacity-100"
                  : "bg-white/[0.02] border border-white/[0.05] opacity-50 scale-[0.98]"
              }`}
              style={{
                animationDelay: `${i * 80}ms`,
              }}
            >
              <div className={`w-9 h-9 rounded-lg ${item.iconBg} flex items-center justify-center shrink-0 transition-all duration-500 ${
                isActive ? "scale-110" : "scale-100"
              }`}>
                <Icon size={18} className={item.accent} strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white/90 truncate">{item.label[lang]}</div>
                <div className="text-xs text-white/40 truncate">{item.detail[lang]}</div>
              </div>
              {(isActive || isCompleted) && (
                <div className={`shrink-0 transition-all duration-300 ${isActive ? "animate-scale-in" : ""}`}>
                  <CheckCircle size={18} className="text-emerald-400" strokeWidth={2.5} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="mt-5 flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-500"
            style={{
              width: `${((completedItems.length % activities.length) / activities.length) * 100 + (100 / activities.length)}%`,
            }}
          />
        </div>
        <span className="text-[11px] text-white/40 font-medium whitespace-nowrap">
          {lang === "en" ? "All on track" : "Tout en ordre"}
        </span>
      </div>
    </div>
  );
}
