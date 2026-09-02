"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/Tag";
import { currentlyBuilding } from "@/content/currentlyBuilding";
import { cn } from "@/lib/utils";

export function CurrentlyBuilding() {
  const reduce = useReducedMotion();

  return (
    <Section id="currently-building">
      <SectionHeader
        label="Currently Building"
        title="A live look at the workbench."
        intro="What's in active development right now — pipeline, progress and what's left."
      />

      <div className="mt-12 space-y-6">
        {currentlyBuilding.map((b) => {
          const done = b.progress.filter((p) => p.done).length;
          const pct = Math.round((done / b.progress.length) * 100);
          return (
            <motion.div
              key={b.name}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="card glow-ring p-5 sm:p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    {!reduce && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-60" />
                    )}
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-cyan" />
                  </span>
                  <h3 className="text-base font-semibold text-ink">{b.name}</h3>
                </div>
                <StatusBadge status={b.status} />
              </div>

              <p className="mt-3 text-sm text-ink-muted">{b.summary}</p>

              {/* Pipeline */}
              <div className="mask-fade-x mt-6 overflow-x-auto">
                <div className="flex min-w-max items-center gap-2">
                  {b.pipeline.map((stage, i) => (
                    <div key={stage} className="flex items-center gap-2">
                      <span className="rounded-md border border-line bg-bg-overlay/50 px-2.5 py-1.5 font-mono text-2xs text-ink-muted">
                        {stage}
                      </span>
                      {i < b.pipeline.length - 1 && (
                        <span className="font-mono text-ink-faint">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress */}
              <div className="mt-6">
                <div className="flex items-center justify-between font-mono text-2xs text-ink-faint">
                  <span>build progress</span>
                  <span>
                    {done}/{b.progress.length} · {pct}%
                  </span>
                </div>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-bg-overlay">
                  <motion.div
                    className="h-full rounded-full bg-accent-gradient"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {b.progress.map((p) => (
                    <li
                      key={p.label}
                      className={cn(
                        "flex items-center gap-2 text-xs",
                        p.done ? "text-ink-muted" : "text-ink-faint",
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-4 w-4 shrink-0 items-center justify-center rounded border",
                          p.done
                            ? "border-accent-soft/40 bg-accent/10 text-accent-soft"
                            : "border-line",
                        )}
                      >
                        {p.done && <Check size={10} />}
                      </span>
                      {p.label}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
