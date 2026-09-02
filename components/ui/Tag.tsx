import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
  mono = true,
}: {
  children: React.ReactNode;
  className?: string;
  mono?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-line bg-bg-overlay/60 px-2 py-1 text-2xs text-ink-muted",
        mono && "font-mono",
        className,
      )}
    >
      {children}
    </span>
  );
}

const statusStyles: Record<string, string> = {
  Live: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
  Building: "text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10",
  Prototype: "text-accent-soft border-accent-soft/30 bg-accent-soft/10",
  Production: "text-ink-muted border-line-strong bg-bg-overlay",
  Exploring: "text-amber-300/90 border-amber-400/25 bg-amber-400/10",
  BUILDING: "text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10",
  PROTOTYPING: "text-accent-soft border-accent-soft/30 bg-accent-soft/10",
  SHIPPING: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-2xs uppercase tracking-wider",
        statusStyles[status] ?? statusStyles.Production,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
