"use client";

import { profile } from "@/content/profile";
import { featuredSkills } from "@/content/skills";

const facts: { label: string; value: string }[] = [
  { label: "Role", value: profile.currentTitle },
  { label: "Company", value: "Renault Group India" },
  { label: "Base", value: profile.location },
  { label: "Focus", value: "RAG · Agentic AI · LLMs" },
];

export function HeroVisual() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line">
        {facts.map((f) => (
          <div key={f.label} className="bg-bg-raised p-3.5">
            <p className="font-mono text-2xs uppercase tracking-wider text-ink-faint">
              {f.label}
            </p>
            <p className="mt-1 text-sm text-ink">{f.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-md border border-line bg-bg-raised/50 p-3.5">
        <p className="font-mono text-2xs uppercase tracking-wider text-ink-faint">
          <span className="text-accent">▸</span> Technical highlights
        </p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {featuredSkills.map((s) => (
            <span
              key={s}
              className="click-glow rounded-md border border-line bg-bg-overlay/50 px-2.5 py-1.5 font-mono text-xs text-ink-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
