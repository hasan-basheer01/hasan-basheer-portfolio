/**
 * Builds a compact, factual knowledge base about Hasan from the same
 * structured content the site renders. Used both to ground the live LLM
 * (system prompt context) and to power the offline fallback answerer.
 */

import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { skills, domains } from "@/content/skills";
import { timeline, journey } from "@/content/experience";
import { labEntries } from "@/content/aiLab";

export function buildKnowledgeBase(): string {
  const lines: string[] = [];

  lines.push(`# ${profile.name} (${profile.shortName})`);
  lines.push(`Roles: ${profile.roles.join(", ")}`);
  lines.push(`Current role: ${profile.currentTitle} at ${profile.currentCompany}`);
  lines.push(`Location: ${profile.location}`);
  lines.push(`Contact: ${profile.email}`);
  lines.push(`Tagline: ${profile.tagline}`);
  lines.push("");
  lines.push("## About");
  lines.push(profile.aboutLead);
  profile.aboutBody.forEach((p) => lines.push(p));
  lines.push("");

  lines.push("## What Hasan builds");
  profile.aboutCards.forEach((c) => lines.push(`- ${c.title}: ${c.body}`));
  lines.push("");

  lines.push("## Technology");
  domains.forEach((d) => {
    const names = skills.filter((s) => s.domain === d.id).map((s) => s.name);
    lines.push(`- ${d.label} (${d.blurb}): ${names.join(", ")}`);
  });
  lines.push("");

  lines.push("## Projects");
  projects.forEach((p) => {
    lines.push(`### ${p.name} — ${p.context}, status: ${p.status}`);
    lines.push(p.tagline);
    lines.push(`Stack: ${p.stack.join(", ")}`);
    lines.push(`Highlights: ${p.highlights.join("; ")}`);
    p.caseStudy.forEach((s) => {
      lines.push(`${s.key}: ${s.title} — ${s.body.join(" ")}`);
    });
    lines.push("");
  });

  lines.push("## Experience");
  timeline.forEach((t) => {
    lines.push(`- ${t.period} — ${t.title}, ${t.org}: ${t.points.join(" ")}`);
  });
  lines.push(`Journey arc: ${journey.map((j) => j.phase).join(" -> ")}`);
  lines.push("");

  lines.push("## AI Lab");
  labEntries.forEach((e) =>
    lines.push(`- ${e.title} [${e.category}, ${e.status}]: ${e.summary}`),
  );

  return lines.join("\n");
}

export const SUGGESTED_QUESTIONS = [
  "What AI projects has Hasan built?",
  "What is the ENOVIA AI Assistant?",
  "What technologies does Hasan use?",
  "Tell me about his RAG experience.",
  "What is his software engineering background?",
];

/**
 * Offline fallback: lightweight keyword routing over the knowledge base.
 * Returned when no ANTHROPIC_API_KEY is configured or the LLM call fails.
 */
export function localAnswer(question: string): string {
  const q = question.toLowerCase();
  const has = (...terms: string[]) => terms.some((t) => q.includes(t));

  if (has("currently building", "working on now", "right now", "current project")) {
    return `Right now Hasan is building the ENOVIA MQL / TCL Assistant (Prototype) and experimenting with agentic AI frameworks — AutoGen, CrewAI and Google's Agent Development Kit.`;
  }

  if (has("enovia", "mql", "tcl", "assistant")) {
    const p = projects.find((x) => x.slug === "enovia-ai-assistant")!;
    return `${p.name}: ${p.tagline} It is a hybrid RAG pipeline — documentation is embedded into a local FAISS index, queries are retrieved against with semantic + keyword search, and an LLM answers with page-level citations and can generate a runnable MQL/TCL script. Stack: ${p.stack.join(
      ", ",
    )}.`;
  }

  if (has("rag", "retrieval", "vector", "embedding", "faiss")) {
    return `Hasan's RAG experience centers on the ENOVIA MQL/TCL Assistant: chunking and embedding technical docs, a local FAISS vector index, hybrid semantic + keyword retrieval, citation-enforced answers, and LCEL chains with conversation memory. He is also exploring RAG answer-evaluation — checking that answers are actually supported by their cited sources.`;
  }

  if (has("technolog", "tech stack", "tools", "languages", "skills")) {
    return domains
      .map((d) => {
        const names = skills.filter((s) => s.domain === d.id).map((s) => s.name);
        return `${d.label}: ${names.join(", ")}`;
      })
      .join(" | ");
  }

  if (has("ai project", "projects", "what has he built", "portfolio")) {
    return projects
      .map((p) => `${p.name} (${p.context}, ${p.status}) — ${p.tagline}`)
      .join("\n");
  }

  if (has("experience", "background", "work", "job", "career", "renault", "nissan")) {
    return timeline
      .map((t) => `${t.period} — ${t.title}, ${t.org}: ${t.points[0]}`)
      .join("\n");
  }

  if (has("who is", "about", "introduce", "yourself", "hasan")) {
    return `${profile.name} — ${profile.roles.join(" · ")}. ${profile.aboutLead} ${profile.aboutBody[0]}`;
  }

  if (has("contact", "hire", "email", "reach", "connect")) {
    return `You can reach Hasan at ${profile.email}. ${profile.availability}.`;
  }

  return `I can answer questions about Hasan's AI projects, his RAG and engineering work, the technologies he uses, and what he's currently building. Try one of the suggested questions, or ask about the ENOVIA AI Assistant.`;
}
