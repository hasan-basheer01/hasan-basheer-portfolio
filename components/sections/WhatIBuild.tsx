"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { whatIBuild } from "@/content/whatIBuild";

export function WhatIBuild() {
  const reduce = useReducedMotion();

  return (
    <Section id="what-i-build">
      <SectionHeader
        label="What I Build"
        title="Not a list of skills — categories of things I actually ship."
        intro="Each of these maps to real project work, from enterprise automation to AI products."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whatIBuild.map((cat, i) => (
          <motion.a
            key={cat.title}
            href={cat.project ? "#projects" : "#ai-lab"}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reduce ? undefined : { y: -4 }}
            className="card card-hover group flex flex-col p-5"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-sm font-medium text-ink">{cat.title}</h3>
              <ArrowUpRight
                size={15}
                className="text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft"
              />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-ink-muted">
              {cat.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {cat.examples.map((ex) => (
                <span
                  key={ex}
                  className="rounded border border-line bg-bg-overlay/50 px-1.5 py-0.5 font-mono text-[10px] text-ink-faint"
                >
                  {ex}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
