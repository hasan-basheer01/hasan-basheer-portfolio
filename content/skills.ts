/**
 * Technology map for the "Tech Constellation" and Expertise section.
 * No skill percentages — each entry says what it is used FOR and links a project.
 * Only technologies backed by the resume or a listed project appear here.
 */

export type SkillDomain = "AI" | "Software" | "PLM" | "Automation" | "Cloud";

export interface Skill {
  name: string;
  domain: SkillDomain;
  /** Concrete use, not a buzzword. */
  usedFor: string;
  /** Optional related project slug (see content/projects.ts). */
  project?: string;
}

export const domains: { id: SkillDomain; label: string; blurb: string }[] = [
  { id: "AI", label: "AI", blurb: "Generative AI, RAG, vector search and LLM applications." },
  { id: "Software", label: "Software", blurb: "Full-stack application development, front to back." },
  { id: "PLM", label: "PLM", blurb: "ENOVIA 3DEXPERIENCE customization and engineering data." },
  { id: "Automation", label: "Automation", blurb: "Scripting away repetitive engineering workflows." },
  { id: "Cloud", label: "Cloud", blurb: "Version control, containers and application deployment." },
];

export const skills: Skill[] = [
  // --- AI ---
  { name: "Generative AI", domain: "AI", usedFor: "Designing LLM-driven features and application architecture." },
  { name: "RAG", domain: "AI", usedFor: "Grounding answers in technical documentation with retrieval.", project: "enovia-ai-assistant" },
  { name: "Vector Search", domain: "AI", usedFor: "Semantic retrieval over documentation and transcripts.", project: "enovia-ai-assistant" },
  { name: "Embeddings", domain: "AI", usedFor: "Turning docs and queries into comparable vectors.", project: "enovia-ai-assistant" },
  { name: "LangChain", domain: "AI", usedFor: "Composing retrieval, memory and LLM chains.", project: "enovia-ai-assistant" },
  { name: "LCEL", domain: "AI", usedFor: "Declarative pipelines for retrieval + generation.", project: "enovia-ai-assistant" },
  { name: "FAISS", domain: "AI", usedFor: "Local vector database for fast similarity search.", project: "enovia-ai-assistant" },
  { name: "OpenAI API", domain: "AI", usedFor: "LLM reasoning and embedding generation.", project: "enovia-ai-assistant" },
  { name: "Prompt Engineering", domain: "AI", usedFor: "Structuring grounded, cite-first responses." },
  { name: "Streamlit", domain: "AI", usedFor: "Shipping AI prototypes with a usable interface.", project: "enovia-ai-assistant" },

  // --- Software ---
  { name: "Python", domain: "Software", usedFor: "AI pipelines, scripting and backend services.", project: "enovia-ai-assistant" },
  { name: "Java 8", domain: "Software", usedFor: "Enterprise backend services on the 3DEXPERIENCE platform.", project: "enovia-widgets" },
  { name: "Spring Boot", domain: "Software", usedFor: "REST backend services and business logic.", project: "enovia-widgets" },
  { name: "REST APIs", domain: "Software", usedFor: "Contract between widgets and backend services.", project: "enovia-widgets" },
  { name: "TypeScript", domain: "Software", usedFor: "Typed frontend components and tooling.", project: "enovia-widgets" },
  { name: "JavaScript", domain: "Software", usedFor: "Interactive widget behaviour and UI logic." },
  { name: "Vue.js", domain: "Software", usedFor: "Custom ENOVIA widgets and internal tools.", project: "enovia-widgets" },
  { name: "Vuetify", domain: "Software", usedFor: "Consistent component UI for widgets.", project: "enovia-widgets" },
  { name: "SQL", domain: "Software", usedFor: "Querying and shaping relational engineering data." },
  { name: "PostgreSQL", domain: "Software", usedFor: "Relational storage for application data." },
  { name: "MySQL", domain: "Software", usedFor: "Relational storage and local development." },

  // --- PLM ---
  { name: "ENOVIA 3DEXPERIENCE", domain: "PLM", usedFor: "Platform for enterprise PLM customization.", project: "enovia-widgets" },
  { name: "Custom Widgets", domain: "PLM", usedFor: "Building bespoke UI inside 3DEXPERIENCE.", project: "enovia-widgets" },
  { name: "Data Perspectives", domain: "PLM", usedFor: "Configuring how engineering data is surfaced.", project: "enovia-widgets" },
  { name: "MQL", domain: "PLM", usedFor: "Querying and modifying the PLM schema.", project: "enovia-ai-assistant" },
  { name: "TCL", domain: "PLM", usedFor: "Scripting automation and batch operations.", project: "enovia-ai-assistant" },

  // --- Automation ---
  { name: "MQL / TCL Scripting", domain: "Automation", usedFor: "Automating repetitive PLM operations at scale.", project: "enovia-widgets" },
  { name: "Workflow Automation", domain: "Automation", usedFor: "Removing manual steps from engineering processes." },
  { name: "Video Processing", domain: "Automation", usedFor: "Transcription and clip extraction pipelines.", project: "ai-video-shorts" },

  // --- Cloud ---
  { name: "Git", domain: "Cloud", usedFor: "Version control across every project." },
  { name: "GitHub", domain: "Cloud", usedFor: "Hosting and sharing source for personal projects." },
  { name: "GitLab", domain: "Cloud", usedFor: "Version control and CI in the enterprise workflow." },
  { name: "Docker", domain: "Cloud", usedFor: "Packaging AI apps for reproducible deployment." },
  { name: "Linux", domain: "Cloud", usedFor: "Running and deploying services on VPS environments." },
];

export const skillsByDomain = (domain: SkillDomain) =>
  skills.filter((s) => s.domain === domain);
