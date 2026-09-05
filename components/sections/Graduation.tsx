"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { graduation } from "@/content/graduation";

export function Graduation() {
  const reduce = useReducedMotion();

  return (
    <Section id="education">
      <SectionHeader
        label="Education"
        title="Rank Holder — B.E. Electrical & Electronics Engineering."
        intro="Where the engineering foundation was built, before ENOVIA, before AI."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="frame-tech card relative overflow-hidden p-2"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Image
              src={graduation.photo}
              alt={graduation.photoAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority={false}
            />
          </div>
          <div className="absolute left-4 top-4 rounded-full border border-accent/40 bg-bg/80 px-3 py-1 font-mono text-2xs uppercase tracking-wider text-accent backdrop-blur-sm">
            Rank Holder
          </div>
          <p className="px-2 py-3 text-xs leading-relaxed text-ink-faint">
            {graduation.caption}
          </p>
        </motion.div>

        <div className="space-y-6">
          <Reveal>
            <div>
              <p className="font-mono text-2xs uppercase tracking-wider text-ink-faint">
                {graduation.period}
              </p>
              <h3 className="mt-1.5 text-xl font-medium text-ink">
                {graduation.degree}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">{graduation.college}</p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="frame-tech card px-4 py-3">
              <p className="text-sm text-ink">{graduation.distinction}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="section-label">Academic focus</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {graduation.focusAreas.map((f) => (
                  <span
                    key={f}
                    className="rounded-md border border-line bg-bg-raised/40 px-2.5 py-1.5 font-mono text-2xs text-ink-muted"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
