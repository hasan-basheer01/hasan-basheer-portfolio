"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  domains,
  skillsByDomain,
  type SkillDomain,
} from "@/content/skills";
import { projectBySlug } from "@/content/projects";
import { techIcons, domainFallbackIcon } from "@/lib/techIcons";
import { cn } from "@/lib/utils";

const domainColor: Record<SkillDomain, string> = {
  PLM: "#0aff0a",
  AI: "#00f3ff",
  Backend: "#7dfaff",
  Frontend: "#bc13fe",
  Embedded: "#d17dff",
  DevOps: "#7dffb3",
};

export function TechConstellation() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<SkillDomain>("AI");
  const [selected, setSelected] = useState<string | null>(null);

  const list = skillsByDomain(active);
  const activeSkill = list.find((s) => s.name === selected);
  const activeDomain = domains.find((d) => d.id === active)!;
  const color = domainColor[active];

  return (
    <div>
      {/* Domain tabs */}
      <div className="flex flex-wrap gap-2">
        {domains.map((d) => {
          const isActive = d.id === active;
          const DomainIcon = domainFallbackIcon[d.id];
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => {
                setActive(d.id);
                setSelected(null);
              }}
              className={cn(
                "click-glow flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors",
                isActive
                  ? "border-line-strong bg-bg-overlay text-ink"
                  : "border-line text-ink-faint hover:text-ink-muted",
              )}
              style={
                isActive
                  ? {
                      boxShadow: `inset 0 0 0 1px ${domainColor[d.id]}55, 0 0 18px -6px ${domainColor[d.id]}99`,
                    }
                  : undefined
              }
              aria-pressed={isActive}
            >
              <DomainIcon size={16} style={{ color: domainColor[d.id] }} />
              {d.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 max-w-xl text-sm text-ink-muted">{activeDomain.blurb}</p>

      {/* Skill chips — the highlight: bigger, bolder, color-coded per domain */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 flex flex-wrap gap-2.5"
        >
          {list.map((s) => {
            const isSelected = selected === s.name;
            const Icon = techIcons[s.name] ?? domainFallbackIcon[s.domain];
            return (
              <button
                key={s.name}
                type="button"
                onClick={() => setSelected(isSelected ? null : s.name)}
                className={cn(
                  "click-glow flex items-center gap-2 rounded-lg border px-3.5 py-2.5 font-mono text-sm font-medium transition-colors",
                  isSelected
                    ? "border-line-strong bg-bg-overlay text-ink"
                    : "border-line bg-bg-raised/40 text-ink-muted hover:border-line-strong hover:text-ink",
                )}
                style={
                  isSelected
                    ? {
                        boxShadow: `inset 0 0 0 1px ${color}66, 0 0 16px -6px ${color}99`,
                        borderColor: `${color}88`,
                      }
                    : undefined
                }
                aria-pressed={isSelected}
              >
                <Icon
                  size={15}
                  className={isSelected ? "opacity-100" : "opacity-70"}
                  style={{ color }}
                />
                {s.name}
              </button>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Detail panel */}
      <div
        className="mt-5 min-h-[76px] rounded-md border border-line bg-bg-raised/50 p-4"
        style={activeSkill ? { borderLeft: `2px solid ${color}` } : undefined}
      >
        {activeSkill ? (
          <div>
            <p className="font-mono text-sm text-ink">
              {activeSkill.name}
              <span className="ml-2 text-ink-faint">/ {activeSkill.domain}</span>
            </p>
            <p className="mt-1 text-xs leading-relaxed text-ink-muted">
              {activeSkill.usedFor}
            </p>
            {activeSkill.project && (
              <p className="mt-1 text-2xs text-accent-soft">
                ↳ {projectBySlug(activeSkill.project)?.name}
              </p>
            )}
          </div>
        ) : (
          <p className="text-xs text-ink-faint">
            Tap a skill to see what Hasan uses it for.
          </p>
        )}
      </div>
    </div>
  );
}
