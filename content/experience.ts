/**
 * Experience + engineering-journey timeline.
 * Employment and education facts are from the resume — no invented dates or titles.
 */

export interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  kind: "work" | "education" | "focus";
  points: string[];
  tags?: string[];
}

export const timeline: TimelineEntry[] = [
  {
    period: "2019 – 2023",
    title: "B.E. Electrical & Electronics Engineering",
    org: "PSNA College of Engineering & Technology, Dindigul",
    kind: "education",
    points: [
      "First Class with Distinction · Rank Holder · CGPA 8.81",
    ],
    tags: ["Engineering foundation"],
  },
  {
    period: "Oct 2023 – Present",
    title: "Engineer – Developer",
    org: "Renault Nissan Technology & Business Centre India",
    kind: "work",
    points: [
      "Developed and customized ENOVIA 3DEXPERIENCE widgets using Vue.js and REST APIs.",
      "Implemented Data Perspectives, MQL and TCL scripting for automation and efficiency.",
      "Built and optimized backend services with Java 8, Spring Boot and SQL.",
      "Delivered full-stack applications with scalable, enterprise-ready solutions.",
      "Collaborated in Agile teams on feature development, bug fixing, testing and code optimization.",
    ],
    tags: ["ENOVIA", "Full-Stack", "Automation", "Agile"],
  },
  {
    period: "2024 – Present",
    title: "Building AI systems",
    org: "Personal projects",
    kind: "focus",
    points: [
      "RAG assistant for ENOVIA MQL / TCL — retrieval, vector search and script generation.",
      "AI Video Shorts Maker — an AI product turning long-form video into short clips.",
      "Experiments with AI agents, developer tools and AI-powered automation.",
    ],
    tags: ["Generative AI", "RAG", "AI Products"],
  },
];

/** The story arc rendered as a horizontal / vertical progression. */
export const journey: { phase: string; note: string }[] = [
  { phase: "Software Engineering", note: "Full-stack delivery on enterprise platforms." },
  { phase: "Engineering / PLM", note: "ENOVIA 3DEXPERIENCE customization and data." },
  { phase: "Automation", note: "Scripting repetitive engineering workflows away." },
  { phase: "Generative AI", note: "RAG, embeddings and LLM application design." },
  { phase: "AI Applications", note: "Assistants and tools people actually use." },
  { phase: "AI Product Building", note: "Taking AI ideas from prototype to product." },
];
