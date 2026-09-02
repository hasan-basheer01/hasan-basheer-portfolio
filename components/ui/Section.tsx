import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Adds a faint top hairline divider. */
  divider?: boolean;
}

export function Section({ id, children, className, divider = true }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
    >
      <div className="container-tight">
        {divider ? <div className="hairline mb-16 sm:mb-20" /> : null}
        {children}
      </div>
    </section>
  );
}
