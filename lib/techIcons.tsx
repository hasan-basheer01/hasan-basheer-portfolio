import type { ComponentType, CSSProperties } from "react";
import {
  SiLangchain,
  SiCrewai,
  SiN8N,
  SiPython,
  SiSpringboot,
  SiFastapi,
  SiPostgresql,
  SiVuedotjs,
  SiVuetify,
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiArduino,
  SiStmicroelectronics,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiDynatrace,
  SiGoogle,
} from "react-icons/si";
import { Cpu, Database, Sparkles, Layers, Terminal, Code2 } from "lucide-react";
import type { SkillDomain } from "@/content/skills";

export type TechIcon = ComponentType<{
  size?: number | string;
  className?: string;
  style?: CSSProperties;
}>;

/**
 * Real brand logos — only mapped where the match is unambiguous.
 * Everything else falls back to a neutral per-domain icon (see domainFallbackIcon).
 */
export const techIcons: Record<string, TechIcon> = {
  LangChain: SiLangchain,
  CrewAI: SiCrewai,
  n8n: SiN8N,
  Python: SiPython,
  PyAutoGUI: SiPython,
  "Spring Boot": SiSpringboot,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  "Vue.js": SiVuedotjs,
  Vuetify: SiVuetify,
  Angular: SiAngular,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  Arduino: SiArduino,
  STM32: SiStmicroelectronics,
  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  "Docker Desktop": SiDocker,
  Dynatrace: SiDynatrace,
  "Google Agent Development Kit (ADK)": SiGoogle,
};

export const domainFallbackIcon: Record<SkillDomain, TechIcon> = {
  PLM: Layers,
  AI: Sparkles,
  Backend: Database,
  Frontend: Code2,
  Embedded: Cpu,
  DevOps: Terminal,
};
