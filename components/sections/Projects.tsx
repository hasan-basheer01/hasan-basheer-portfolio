"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Github, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge, Tag } from "@/components/ui/Tag";
import { ArchitectureFlow } from "@/components/visuals/ArchitectureFlow";
import { projects, type Project } from "@/content/projects";
import { cn } from "@/lib/utils";

function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="grid gap-10 border-t border-line px-5 py-8 lg:grid-cols-[1.3fr_1fr] lg:px-6">
      <div className="space-y-7">
        {project.caseStudy.map((s) => (
          <div key={s.key}>
            <p className="font-mono text-2xs uppercase tracking-[0.2em] text-accent-soft">
              {s.key}
            </p>
            <h4 className="mt-1.5 text-sm font-medium text-ink">{s.title}</h4>
            <ul className="mt-2.5 max-w-prose space-y-1.5">
              {s.body.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-xs leading-relaxed text-ink-muted"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-soft/70" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        {(project.image || project.video) && (
          <div className="frame-tech overflow-hidden rounded-lg border border-line">
            {project.video ? (
              <video
                src={project.video.src}
                aria-label={project.video.alt}
                controls
                muted
                loop
                playsInline
                className="w-full"
              />
            ) : project.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image.src}
                alt={project.image.alt}
                className="w-full object-cover"
              />
            ) : null}
          </div>
        )}
        {project.architecture && (
          <div>
            <p className="mb-4 font-mono text-2xs uppercase tracking-[0.2em] text-ink-faint">
              Architecture
            </p>
            <ArchitectureFlow steps={project.architecture} />
          </div>
        )}
        <div>
          <p className="mb-3 font-mono text-2xs uppercase tracking-[0.2em] text-ink-faint">
            Capabilities
          </p>
          <ul className="space-y-1.5">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-2 text-xs leading-relaxed text-ink-muted"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={cn(
                  "click-glow inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors",
                  l.confirmed
                    ? "border-line-strong text-ink hover:border-accent-soft"
                    : "border-line text-ink-faint hover:text-ink-muted",
                )}
                title={l.confirmed ? undefined : "Link pending — to be updated"}
              >
                {l.label === "GitHub" ? (
                  <Github size={13} />
                ) : (
                  <ExternalLink size={13} />
                )}
                {l.label}
                {!l.confirmed && <span className="text-[10px]">(soon)</span>}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(index === 0 && project.featured);

  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="card frame-tech overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="click-glow flex w-full flex-col gap-4 p-5 text-left transition-colors hover:bg-bg-overlay/40 lg:p-6"
        aria-expanded={open}
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-mono text-2xs text-ink-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
          <StatusBadge status={project.status} />
          <Tag>{project.category}</Tag>
          <Tag>{project.context}</Tag>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-ink sm:text-xl">
              {project.name}
            </h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-muted">
              {project.tagline}
            </p>
          </div>
          <ChevronDown
            size={18}
            className={cn(
              "mt-1 shrink-0 text-ink-faint transition-transform duration-300",
              open && "rotate-180",
            )}
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded border border-line bg-bg-overlay/40 px-1.5 py-0.5 font-mono text-[10px] text-ink-faint"
            >
              {s}
            </span>
          ))}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <CaseStudy project={project} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        label="Projects"
        title="Every project opens into a full case study."
        intro="Problem → thinking → architecture → implementation → AI layer → result → demo. Built to show engineering ability, not just a stack list."
      />
      <div className="mt-12 space-y-5">
        {projects.map((p, i) => (
          <ProjectEntry key={p.slug} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
