import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  intro,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal>
        <span className="section-label">{label}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="max-w-3xl text-balance text-2xl font-semibold leading-tight text-ink sm:text-3xl md:text-4xl">
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base",
              align === "center" && "mx-auto",
            )}
          >
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
