"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { timeline, journey } from "@/content/experience";
import { certifications } from "@/content/certifications";
import { cn } from "@/lib/utils";

const kindLabel: Record<string, string> = {
  work: "Work",
  education: "Education",
  focus: "Focus",
  achievement: "Achievement",
};

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <Section id="experience">
      <SectionHeader
        label="Experience"
        title="Engineering → Automation → AI → Intelligent Products."
        intro="A technical journey, not just a résumé. Dates and roles are exactly as on the CV."
      />

      {/* Journey arc */}
      <div className="mt-12 mask-fade-x overflow-x-auto pb-2">
        <div className="flex min-w-max items-stretch gap-2">
          {journey.map((j, i) => (
            <motion.div
              key={j.phase}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative w-44 shrink-0 rounded-lg border border-line bg-bg-raised/50 p-3"
            >
              <span className="font-mono text-[10px] text-accent-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-1 text-xs font-medium text-ink">{j.phase}</p>
              <p className="mt-1 text-[11px] leading-snug text-ink-faint">
                {j.note}
              </p>
              {i < journey.length - 1 && (
                <span className="absolute -right-1.5 top-1/2 z-10 hidden h-1.5 w-1.5 -translate-y-1/2 rotate-45 border-r border-t border-line-strong bg-bg sm:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-16 space-y-0">
        {timeline.map((entry, i) => (
          <Reveal key={`${entry.title}-${i}`} delay={i * 0.05}>
            <div className="grid gap-4 border-t border-line py-8 sm:grid-cols-[180px_1fr]">
              <div>
                <p className="font-mono text-xs text-ink-muted">{entry.period}</p>
                <span
                  className={cn(
                    "mt-2 inline-block rounded border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider",
                    entry.kind === "focus" && "text-accent-cyan",
                    entry.kind === "achievement" && "text-accent-green",
                    entry.kind !== "focus" && entry.kind !== "achievement" && "text-ink-faint",
                  )}
                >
                  {kindLabel[entry.kind]}
                </span>
              </div>
              <div className={cn(entry.image && "grid gap-5 sm:grid-cols-[1fr_auto]")}>
                <div>
                  <h3 className="text-sm font-medium text-ink">{entry.title}</h3>
                  <p className="text-xs text-ink-muted">{entry.org}</p>
                  <ul className="mt-3 space-y-1.5">
                    {entry.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2 text-xs leading-relaxed text-ink-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {entry.tags && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {entry.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  )}
                </div>
                {entry.image && (
                  <div className="frame-tech aspect-[900/1599] w-40 shrink-0 overflow-hidden rounded-lg border border-line bg-bg-raised/60 sm:w-48">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={entry.image.src}
                      alt={entry.image.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Licenses & certifications */}
      <div className="mt-16 border-t border-line pt-10">
        <p className="section-label">Licenses & Certifications</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <div key={c.title} className="frame-tech card p-5">
              <h4 className="text-base font-medium leading-snug text-ink">
                {c.title}
              </h4>
              <p className="mt-1.5 text-sm text-ink-muted">{c.issuer}</p>
              <p className="mt-1.5 font-mono text-xs text-ink-faint">
                Issued {c.issued}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
