"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/Tag";
import { labEntries } from "@/content/aiLab";

export function AILab() {
  const reduce = useReducedMotion();

  return (
    <Section
      id="ai-lab"
      className="relative"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-soft/40 to-transparent" />
      <SectionHeader
        label="AI Lab"
        title="An active engineering laboratory."
        intro="Experiments, prototypes and concepts at different stages — from a passing idea to something live."
      />

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {labEntries.map((e, i) => (
          <motion.div
            key={e.title}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="card card-hover flex flex-col gap-3 p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-2xs uppercase tracking-wider text-ink-faint">
                {e.category}
              </span>
              <StatusBadge status={e.status} />
            </div>
            <h3 className="text-sm font-medium text-ink">{e.title}</h3>
            <p className="text-xs leading-relaxed text-ink-faint">{e.summary}</p>
            {e.project && (
              <a
                href="#projects"
                className="mt-auto font-mono text-2xs text-accent-soft hover:text-accent-cyan"
              >
                ↳ view case study
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
