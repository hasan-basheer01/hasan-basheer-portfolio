"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ArchitectureStep } from "@/content/projects";

export function ArchitectureFlow({ steps }: { steps: ArchitectureStep[] }) {
  const reduce = useReducedMotion();

  return (
    <ol className="relative flex flex-col">
      {steps.map((step, i) => (
        <motion.li
          key={step.label}
          className="relative grid grid-cols-[auto_1fr] gap-x-4 pb-6 last:pb-0"
          initial={reduce ? { opacity: 0 } : { opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
        >
          <div className="flex flex-col items-center">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent-soft/40 bg-accent/10 font-mono text-2xs text-accent-soft">
              {String(i + 1).padStart(2, "0")}
            </span>
            {i < steps.length - 1 && (
              <span className="mt-1 w-px flex-1 bg-gradient-to-b from-accent-soft/40 to-line" />
            )}
          </div>
          <div className="-mt-0.5 pb-1">
            <p className="font-mono text-xs uppercase tracking-wider text-ink">
              {step.label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">
              {step.detail}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
