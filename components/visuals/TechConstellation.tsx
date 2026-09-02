"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  domains,
  skillsByDomain,
  type SkillDomain,
} from "@/content/skills";
import { projectBySlug } from "@/content/projects";
import { cn } from "@/lib/utils";

export function TechConstellation() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<SkillDomain>("AI");
  const [hovered, setHovered] = useState<string | null>(null);

  const list = skillsByDomain(active);
  const cx = 180;
  const cy = 180;
  const radius = 128;

  const positioned = list.map((s, i) => {
    const angle = (i / list.length) * Math.PI * 2 - Math.PI / 2;
    return {
      ...s,
      x: cx + Math.cos(angle) * radius,
      y: cy + Math.sin(angle) * radius,
    };
  });

  const activeSkill = positioned.find((s) => s.name === hovered);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      {/* Domain selector */}
      <div className="flex flex-col gap-2">
        {domains.map((d) => {
          const isActive = d.id === active;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => {
                setActive(d.id);
                setHovered(null);
              }}
              className={cn(
                "group flex items-start gap-3 rounded-xl border p-4 text-left transition-colors duration-200",
                isActive
                  ? "border-accent-soft/40 bg-accent/[0.07]"
                  : "border-line bg-bg-raised/40 hover:border-line-strong",
              )}
              aria-pressed={isActive}
            >
              <span
                className={cn(
                  "mt-1 h-2 w-2 shrink-0 rounded-full transition-colors",
                  isActive ? "bg-accent-cyan" : "bg-ink-faint group-hover:bg-ink-muted",
                )}
              />
              <span>
                <span
                  className={cn(
                    "block font-mono text-xs uppercase tracking-wider",
                    isActive ? "text-ink" : "text-ink-muted",
                  )}
                >
                  {d.label}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-ink-faint">
                  {d.blurb}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Constellation */}
      <div className="relative mx-auto w-full max-w-[420px]">
        <svg viewBox="0 0 360 360" className="w-full">
          <AnimatePresence mode="wait">
            <motion.g
              key={active}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {positioned.map((s) => (
                <line
                  key={`l-${s.name}`}
                  x1={cx}
                  y1={cy}
                  x2={s.x}
                  y2={s.y}
                  stroke={hovered === s.name ? "#818cf8" : "rgba(255,255,255,0.1)"}
                  strokeWidth={hovered === s.name ? 1.4 : 1}
                />
              ))}

              {/* center */}
              <circle cx={cx} cy={cy} r={34} fill="#0d0d10" stroke="rgba(129,140,248,0.4)" />
              <text
                x={cx}
                y={cy - 2}
                textAnchor="middle"
                className="fill-ink font-mono"
                style={{ fontSize: 11, letterSpacing: 1 }}
              >
                HASAN B
              </text>
              <text
                x={cx}
                y={cy + 12}
                textAnchor="middle"
                className="fill-ink-faint font-mono"
                style={{ fontSize: 8, letterSpacing: 1 }}
              >
                {active}
              </text>

              {positioned.map((s, i) => (
                <motion.g
                  key={s.name}
                  initial={reduce ? {} : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.03 }}
                  onMouseEnter={() => setHovered(s.name)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(s.name)}
                  onBlur={() => setHovered(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${s.name}: ${s.usedFor}`}
                  style={{ cursor: "pointer", outline: "none" }}
                >
                  <circle
                    cx={s.x}
                    cy={s.y}
                    r={hovered === s.name ? 6 : 4}
                    fill={hovered === s.name ? "#22d3ee" : "#818cf8"}
                  />
                  <text
                    x={s.x}
                    y={s.y > cy ? s.y + 16 : s.y - 10}
                    textAnchor="middle"
                    className={cn(
                      "font-mono",
                      hovered === s.name ? "fill-ink" : "fill-ink-muted",
                    )}
                    style={{ fontSize: 8.5 }}
                  >
                    {s.name}
                  </text>
                </motion.g>
              ))}
            </motion.g>
          </AnimatePresence>
        </svg>

        {/* Tooltip / detail */}
        <div className="mt-2 min-h-[76px] rounded-lg border border-line bg-bg-raised/70 p-3">
          {activeSkill ? (
            <div>
              <p className="font-mono text-xs text-ink">
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
              Hover or focus a node to see what Hasan uses it for.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
