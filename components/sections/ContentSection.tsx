"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { contentItems, contentTopics } from "@/content/contentFeed";
import { repos, githubProfileUrl } from "@/content/github";

export function ContentSection() {
  const reduce = useReducedMotion();

  return (
    <Section id="content">
      <SectionHeader
        label="Content & Visibility"
        title="Writing and building in public."
        intro="Notes on AI engineering, RAG, Python and PLM automation — plus selected open-source repositories."
      />

      {/* Topics */}
      <div className="mt-8 flex flex-wrap gap-1.5">
        {contentTopics.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {/* Content cards */}
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {contentItems.map((item, i) => (
          <motion.a
            key={item.title}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="card card-hover group flex flex-col p-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-2xs uppercase tracking-wider text-accent-soft">
                {item.platform}
              </span>
              {!item.confirmed && (
                <span className="font-mono text-[10px] text-ink-faint">
                  draft
                </span>
              )}
            </div>
            <h3 className="mt-2 text-sm font-medium leading-snug text-ink">
              {item.title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-faint">
              {item.blurb}
            </p>
            <span className="mt-3 font-mono text-2xs text-ink-faint">
              #{item.topic}
            </span>
          </motion.a>
        ))}
      </div>

      {/* GitHub */}
      <div className="mt-16">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            <Github size={14} /> Selected repositories
          </h3>
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-ink-muted transition-colors hover:text-ink"
          >
            View all on GitHub <ExternalLink size={12} />
          </a>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card card-hover group p-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-ink">
                  {repo.name}
                </span>
                <Github
                  size={14}
                  className="text-ink-faint transition-colors group-hover:text-ink"
                />
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                {repo.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {repo.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-line bg-bg-overlay/40 px-1.5 py-0.5 font-mono text-[10px] text-ink-faint"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
