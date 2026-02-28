import { CheckCircle, Clock, ArrowUpRight, ArrowDownRight, TrendingUp, Users, FileText, CreditCard, Receipt, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

type ServiceType = "bookkeeping" | "payroll" | "taxes" | "fractional-cfo" | "accounts-payable" | "accounts-receivable" | "home";

interface DashboardMockupProps {
  service: ServiceType;
  className?: string;
  floating?: boolean;
}

/* Bookkeeping: transaction list + reconciliation */
function BookkeepingMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider font-sans">Recent Transactions</span>
        <Badge variant="secondary" className="text-[10px] bg-emerald-500/10 text-emerald-600 border-0">All Reconciled</Badge>
      </div>
      {[
        { name: "Shopify Revenue", amount: "+$12,450.00", color: "text-emerald-600", icon: ArrowUpRight, date: "Feb 27" },
        { name: "Office Lease", amount: "-$3,200.00", color: "text-red-500", icon: ArrowDownRight, date: "Feb 26" },
        { name: "Client Payment", amount: "+$8,750.00", color: "text-emerald-600", icon: ArrowUpRight, date: "Feb 25" },
        { name: "Software Sub", amount: "-$299.00", color: "text-red-500", icon: ArrowDownRight, date: "Feb 24" },
      ].map((tx, i) => {
        const Icon = tx.icon;
        return (
          <div key={i} className="flex items-center justify-between py-2.5 border-b border-border/40 last:border-0">
            <div className="flex items-center gap-3">
              <div className={`w-7 h-7 rounded-lg ${tx.color === "text-emerald-600" ? "bg-emerald-500/10" : "bg-red-500/10"} flex items-center justify-center`}>
                <Icon size={14} className={tx.color} />
              </div>
              <div>
                <div className="text-xs font-medium text-foreground/90">{tx.name}</div>
                <div className="text-[10px] text-muted-foreground">{tx.date}</div>
              </div>
            </div>
            <span className={`text-xs font-semibold ${tx.color}`}>{tx.amount}</span>
          </div>
        );
      })}
      <div className="flex items-center gap-2 pt-2">
        <CheckCircle size={14} className="text-emerald-500" />
        <span className="text-[10px] text-emerald-600 font-medium">143 transactions reconciled this month</span>
      </div>
    </div>
  );
}

/* Payroll: summary card */
function PayrollMockup() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider font-sans">Payroll Summary</span>
        <Badge variant="secondary" className="text-[10px] bg-emerald-500/10 text-emerald-600 border-0">On Schedule</Badge>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-muted/50 rounded-xl p-3">
          <Users size={16} className="text-emerald-500 mb-1.5" />
          <div className="font-display text-xl text-foreground">24</div>
          <div className="text-[10px] text-muted-foreground">Employees</div>
        </div>
        <div className="bg-muted/50 rounded-xl p-3">
          <Clock size={16} className="text-accent mb-1.5" />
          <div className="font-display text-xl text-foreground">Mar 1</div>
          <div className="text-[10px] text-muted-foreground">Next Run</div>
        </div>
      </div>
      <div className="border border-border/40 rounded-xl p-3 space-y-2">
        <div className="flex justify-between text-[11px]">
          <span className="text-muted-foreground">Gross Pay</span>
          <span className="font-semibold text-foreground">$86,400.00</span>
        </div>
        <div className="flex justify-between text-[11px]">
          <span className="text-muted-foreground">Deductions</span>
          <span className="font-semibold text-red-500">-$18,720.00</span>
        </div>
        <div className="border-t border-border/40 pt-2 flex justify-between text-[11px]">
          <span className="font-semibold text-foreground">Net Pay</span>
          <span className="font-bold text-emerald-600">$67,680.00</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle size={14} className="text-emerald-500" />
        <span className="text-[10px] text-emerald-600 font-medium">All tax remittances filed</span>
      </div>
    </div>
  );
}

/* Taxes: filing progress */
function TaxesMockup() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider font-sans">Tax Filing Status</span>
        <Badge variant="secondary" className="text-[10px] bg-accent/10 text-accent border-0">In Progress</Badge>
      </div>
      {[
        { name: "GST/HST Return — Q4", progress: 100, status: "Filed" },
        { name: "Corporate Tax — T2", progress: 75, status: "In Review" },
        { name: "PST Return — Q4", progress: 100, status: "Filed" },
        { name: "T4 Slips — 2025", progress: 40, status: "Preparing" },
      ].map((item, i) => (
        <div key={i} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-foreground/90">{item.name}</span>
            <span className={`text-[10px] font-semibold ${item.progress === 100 ? "text-emerald-600" : "text-accent"}`}>{item.status}</span>
          </div>
          <Progress value={item.progress} className="h-1.5 bg-muted" />
        </div>
      ))}
      <div className="bg-muted/50 rounded-xl p-3 flex items-center gap-3">
        <FileText size={16} className="text-accent" />
        <div>
          <div className="text-[11px] font-semibold text-foreground">Next Deadline</div>
          <div className="text-[10px] text-muted-foreground">Corporate Tax — March 31, 2026</div>
        </div>
      </div>
    </div>
  );
}

/* CFO: KPI dashboard */
function CFOMockup() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider font-sans">Financial Overview</span>
        <Badge variant="secondary" className="text-[10px] bg-emerald-500/10 text-emerald-600 border-0">Healthy</Badge>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Revenue", value: "$482K", trend: "+12%", up: true },
          { label: "EBITDA", value: "$124K", trend: "+8%", up: true },
          { label: "Burn Rate", value: "$38K/mo", trend: "-5%", up: true },
          { label: "Runway", value: "14 mo", trend: "+2mo", up: true },
        ].map((kpi, i) => (
          <div key={i} className="bg-muted/50 rounded-xl p-3">
            <div className="text-[10px] text-muted-foreground mb-1">{kpi.label}</div>
            <div className="font-display text-lg text-foreground">{kpi.value}</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp size={10} className="text-emerald-500" />
              <span className="text-[10px] text-emerald-600 font-medium">{kpi.trend}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Mini chart visualization */}
      <div className="border border-border/40 rounded-xl p-3">
        <div className="text-[10px] text-muted-foreground mb-2">Monthly Revenue</div>
        <div className="flex items-end gap-1 h-10">
          {[40, 55, 45, 65, 50, 70, 60, 75, 80, 72, 85, 92].map((h, i) => (
            <div key={i} className="flex-1 bg-accent/20 rounded-t-sm" style={{ height: `${h}%` }}>
              {i === 11 && <div className="w-full h-full bg-accent rounded-t-sm" />}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[8px] text-muted-foreground">Mar</span>
          <span className="text-[8px] text-muted-foreground">Feb</span>
        </div>
      </div>
    </div>
  );
}

/* AP: bill queue */
function APMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider font-sans">Bill Queue</span>
        <Badge variant="secondary" className="text-[10px] bg-violet-500/10 text-violet-600 border-0">3 Pending</Badge>
      </div>
      {[
        { vendor: "AWS", amount: "$2,140.00", status: "Approved", statusColor: "text-emerald-600 bg-emerald-500/10" },
        { vendor: "WeWork", amount: "$4,500.00", status: "Pending", statusColor: "text-amber-600 bg-amber-500/10" },
        { vendor: "Adobe CC", amount: "$899.00", status: "Scheduled", statusColor: "text-blue-600 bg-blue-500/10" },
        { vendor: "Figma", amount: "$180.00", status: "Pending", statusColor: "text-amber-600 bg-amber-500/10" },
      ].map((bill, i) => (
        <div key={i} className="flex items-center justify-between py-2.5 border-b border-border/40 last:border-0">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-violet-500/10 flex items-center justify-center">
              <CreditCard size={14} className="text-violet-500" />
            </div>
            <span className="text-xs font-medium text-foreground/90">{bill.vendor}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-foreground">{bill.amount}</span>
            <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${bill.statusColor}`}>{bill.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* AR: invoice aging */
function ARMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider font-sans">Invoice Aging</span>
        <Badge variant="secondary" className="text-[10px] bg-cyan-500/10 text-cyan-600 border-0">$48.2K Outstanding</Badge>
      </div>
      {[
        { range: "Current", amount: "$24,500", bar: 65, color: "bg-emerald-500" },
        { range: "1-30 days", amount: "$12,800", bar: 35, color: "bg-amber-500" },
        { range: "31-60 days", amount: "$8,400", bar: 22, color: "bg-orange" },
        { range: "60+ days", amount: "$2,500", bar: 8, color: "bg-red-500" },
      ].map((row, i) => (
        <div key={i} className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-foreground/80">{row.range}</span>
            <span className="text-[11px] font-semibold text-foreground">{row.amount}</span>
          </div>
          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
            <div className={`h-full ${row.color} rounded-full`} style={{ width: `${row.bar}%` }} />
          </div>
        </div>
      ))}
      <div className="flex items-center gap-2 pt-1">
        <Receipt size={14} className="text-cyan-500" />
        <span className="text-[10px] text-cyan-600 font-medium">12 invoices sent this month</span>
      </div>
    </div>
  );
}

/* Home: overview metrics */
function HomeMockup() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider font-sans">Dashboard</span>
        <span className="text-[10px] text-muted-foreground">Updated just now</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-muted/50 rounded-xl p-3">
          <DollarSign size={14} className="text-accent mb-1" />
          <div className="font-display text-lg text-foreground">$1.2M</div>
          <div className="text-[10px] text-muted-foreground">Annual Revenue</div>
        </div>
        <div className="bg-muted/50 rounded-xl p-3">
          <TrendingUp size={14} className="text-emerald-500 mb-1" />
          <div className="font-display text-lg text-foreground">+23%</div>
          <div className="text-[10px] text-muted-foreground">Growth YoY</div>
        </div>
      </div>
      <div className="border border-border/40 rounded-xl p-3 flex items-center gap-3">
        <CheckCircle size={16} className="text-emerald-500 shrink-0" />
        <div>
          <div className="text-[11px] font-semibold text-foreground">All books up to date</div>
          <div className="text-[10px] text-muted-foreground">Next reconciliation: Mar 1</div>
        </div>
      </div>
    </div>
  );
}

const mockups: Record<ServiceType, () => JSX.Element> = {
  bookkeeping: BookkeepingMockup,
  payroll: PayrollMockup,
  taxes: TaxesMockup,
  "fractional-cfo": CFOMockup,
  "accounts-payable": APMockup,
  "accounts-receivable": ARMockup,
  home: HomeMockup,
};

export default function DashboardMockup({ service, className = "", floating = true }: DashboardMockupProps) {
  const Mockup = mockups[service];
  if (!Mockup) return null;

  return (
    <div
      className={`bg-card rounded-2xl shadow-2xl border border-border/30 p-5 w-full max-w-sm ${className}`}
      style={floating ? {
        transform: "rotate(-2deg) translateY(-8px)",
        perspective: "1200px",
      } : undefined}
    >
      {/* Window dots */}
      <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-border/30">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
        <span className="text-[9px] text-muted-foreground ml-auto font-sans">namaca.ca</span>
      </div>
      <Mockup />
    </div>
  );
}
