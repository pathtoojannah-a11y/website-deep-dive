import { ArrowDownRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

export type DashboardMockupVariant =
  | "transactions"
  | "invoiceAging"
  | "payrollSummary"
  | "taxProgress"
  | "kpiOverview"
  | "apQueue"
  | "strategyScorecard";

export interface DashboardMockupRow {
  label: string;
  subLabel?: string;
  value?: string;
  trend?: "up" | "down" | "neutral";
  pct?: number;
  tone?: "green" | "amber" | "red" | "blue";
}

export interface DashboardMockupProps {
  variant: DashboardMockupVariant;
  title: string;
  badge?: string;
  rows: DashboardMockupRow[];
  footerNote?: string;
  rotateDeg?: number;
  shadowDepth?: "sm" | "md" | "lg";
  className?: string;
}

const toneBar: Record<string, string> = {
  green: "bg-emerald-500",
  amber: "bg-amber-500",
  red: "bg-red-500",
  blue: "bg-cyan-500",
};

const toneText: Record<string, string> = {
  up: "text-emerald-600",
  down: "text-red-500",
  neutral: "text-slate-500",
};

const shadowByDepth: Record<NonNullable<DashboardMockupProps["shadowDepth"]>, string> = {
  sm: "shadow-xl shadow-black/10",
  md: "shadow-2xl shadow-black/15",
  lg: "shadow-[0_36px_80px_rgba(10,20,35,0.22)]",
};

export default function DashboardMockup({
  variant,
  title,
  badge,
  rows,
  footerNote,
  rotateDeg = -3,
  shadowDepth = "lg",
  className,
}: DashboardMockupProps) {
  const renderTransactions = () => (
    <div className="space-y-3.5">
      {rows.map((row, idx) => (
        <div key={idx} className="grid grid-cols-[30px_1fr_auto] items-center gap-3 pb-2.5 border-b border-slate-100 last:border-b-0 last:pb-0">
          <span className={`w-7 h-7 rounded-full flex items-center justify-center ${row.trend === "down" ? "bg-red-50" : "bg-emerald-50"}`}>
            {row.trend === "down" ? <ArrowDownRight size={13} className="text-red-400" /> : <ArrowUpRight size={13} className="text-emerald-500" />}
          </span>
          <div>
            <div className="text-[13px] font-medium text-slate-700">{row.label}</div>
            {row.subLabel && <div className="text-[11px] text-slate-400 mt-0.5">{row.subLabel}</div>}
          </div>
          <div className={`text-[14px] font-semibold ${toneText[row.trend || "neutral"]}`}>{row.value}</div>
        </div>
      ))}
    </div>
  );

  const renderBars = () => (
    <div className="space-y-3.5">
      {rows.map((row, idx) => (
        <div key={idx}>
          <div className="flex items-center justify-between text-[12px] mb-1.5">
            <span className="text-slate-600">{row.label}</span>
            <span className="font-semibold text-slate-700">{row.value}</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
            <div className={`h-full rounded-full ${toneBar[row.tone || "blue"]}`} style={{ width: `${row.pct || 0}%` }} />
          </div>
        </div>
      ))}
    </div>
  );

  const renderChecklist = () => (
    <div className="space-y-2.5">
      {rows.map((row, idx) => (
        <div key={idx} className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 px-3 py-2.5">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={13} className={row.trend === "down" ? "text-amber-500" : "text-emerald-500"} />
            <span className="text-[12px] text-slate-700">{row.label}</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-500">{row.value || row.subLabel}</span>
        </div>
      ))}
    </div>
  );

  const body = (() => {
    if (variant === "transactions") return renderTransactions();
    if (variant === "invoiceAging" || variant === "kpiOverview" || variant === "taxProgress") return renderBars();
    return renderChecklist();
  })();

  return (
    <div
      className={`w-full max-w-[520px] rounded-3xl bg-white border border-slate-100 p-5 md:p-6 ${shadowByDepth[shadowDepth]} ${className || ""}`}
      style={{ transform: `rotate(${rotateDeg}deg)` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
        </div>
        <span className="text-[10px] uppercase tracking-wide text-slate-400">namaca</span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[12px] md:text-[13px] font-semibold tracking-wide uppercase text-slate-500">{title}</h3>
        {badge && <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 rounded-full px-2.5 py-1">{badge}</span>}
      </div>

      {body}

      {footerNote && (
        <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-emerald-600 font-medium">
          {footerNote}
        </div>
      )}
    </div>
  );
}
