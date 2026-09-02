"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/socialLinks";

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-raised/50 px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
        <div className="relative">
          <Reveal>
            <span className="section-label mx-auto">Contact</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
              Let&apos;s build something{" "}
              <span className="gradient-text">intelligent</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
              {profile.availability}. The fastest way to reach me is email — I
              read everything.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-white"
            >
              {profile.email}
              <ArrowUpRight size={15} />
            </a>
          </Reveal>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {socialLinks
              .filter((l) => l.key !== "email")
              .map((l) => (
                <a
                  key={l.key}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-xs text-ink-faint transition-colors hover:text-ink"
                >
                  <l.icon size={14} />
                  {l.label}
                </a>
              ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
