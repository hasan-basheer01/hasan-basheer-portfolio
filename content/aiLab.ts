/**
 * AI Lab — experiments, prototypes and concepts.
 * Status: Exploring | Building | Prototype | Live
 */

export type LabStatus = "Exploring" | "Building" | "Prototype" | "Live";

export interface LabEntry {
  title: string;
  category:
    | "RAG"
    | "AI Assistants"
    | "AI Automation"
    | "Video Intelligence"
    | "AI Agents"
    | "Developer Tools"
    | "AI SaaS";
  status: LabStatus;
  summary: string;
  /** Optional link to a full project case study. */
  project?: string;
}

export const labEntries: LabEntry[] = [
  {
    title: "ENOVIA MQL / TCL Assistant",
    category: "RAG",
    status: "Prototype",
    summary:
      "Hybrid retrieval over ENOVIA docs with cited answers and runnable script generation.",
    project: "enovia-ai-assistant",
  },
  {
    title: "Ask-My-Portfolio Assistant",
    category: "AI Assistants",
    status: "Prototype",
    summary:
      "The assistant on this site — answers questions about my work, grounded in structured portfolio content.",
  },
  {
    title: "Doc-Grounded Answer Evaluation",
    category: "RAG",
    status: "Exploring",
    summary:
      "Measuring whether RAG answers are actually supported by their cited sources, not just plausible.",
  },
  {
    title: "Engineering Workflow Agents",
    category: "AI Agents",
    status: "Exploring",
    summary:
      "Multi-step agents that carry out PLM operations from a natural-language goal.",
  },
  {
    title: "Repo-Aware Dev Helper",
    category: "Developer Tools",
    status: "Exploring",
    summary:
      "A tool that answers questions about a codebase and drafts small, reviewable changes.",
  },
];
