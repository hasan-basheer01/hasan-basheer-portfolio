"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, FileText } from "lucide-react";
import { profile } from "@/content/profile";
import { socialByKey } from "@/content/socialLinks";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroVisual } from "@/components/visuals/HeroVisual";

const github = socialByKey("github")!;
const linkedin = socialByKey("linkedin")!;
const resume = socialByKey("resume")!;

export function Hero() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 sm:pt-40"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid-lines [background-size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="container-tight relative grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="section-label mb-6"
          >
            {profile.location} · {profile.availability}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            {profile.name.split(" ")[0]}{" "}
            <span className="gradient-text text-shadow-glow">
              {profile.name.split(" ")[1]}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-mono text-sm text-ink-muted sm:text-base"
          >
            {profile.roles.join("  •  ")}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#projects" variant="primary">
              Explore My Work
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Let&apos;s Connect
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-faint"
          >
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a
              href={resume.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
            >
              <FileText size={14} /> Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="card glow-ring overflow-hidden p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              <span className="ml-2 font-mono text-2xs text-ink-faint">
                rag_pipeline.py
              </span>
            </div>
            <HeroVisual />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
