/**
 * Technical Skill Matrix — six categories, as Hasan defined them.
 * Each entry says what it is used FOR and links a project where relevant.
 * No invented proficiency scores.
 */

export type SkillDomain = "PLM" | "AI" | "Backend" | "Frontend" | "Embedded" | "DevOps";

export interface Skill {
  name: string;
  domain: SkillDomain;
  /** Concrete use, not a buzzword. */
  usedFor: string;
  /** Optional related project slug (see content/projects.ts). */
  project?: string;
}

export const domains: { id: SkillDomain; label: string; blurb: string }[] = [
  { id: "PLM", label: "PLM & Enterprise Platforms", blurb: "ENOVIA 3DEXPERIENCE customization and engineering data." },
  { id: "AI", label: "AI & Automation", blurb: "Generative AI, agentic frameworks and automation tooling." },
  { id: "Backend", label: "Backend & APIs", blurb: "Server-side services, APIs and data." },
  { id: "Frontend", label: "Frontend", blurb: "Web interfaces, front to back." },
  { id: "Embedded", label: "Embedded Systems & Hardware", blurb: "Microcontrollers, circuits and robotics — where it started." },
  { id: "DevOps", label: "DevOps & Tools", blurb: "Version control, monitoring and how the team ships." },
];

export const skills: Skill[] = [
  // --- PLM & Enterprise Platforms ---
  { name: "ENOVIA", domain: "PLM", usedFor: "Platform for enterprise PLM customization.", project: "enovia-widgets" },
  { name: "3DEXPERIENCE Platform", domain: "PLM", usedFor: "Custom widgets and enterprise workflows.", project: "enovia-widgets" },
  { name: "Data Perspective Studio", domain: "PLM", usedFor: "Dashboards visualizing 3DSpace and external engineering data.", project: "enovia-widgets" },
  { name: "MQL", domain: "PLM", usedFor: "Querying and modifying the PLM schema.", project: "enovia-ai-assistant" },
  { name: "TCL", domain: "PLM", usedFor: "Scripting automation and batch operations.", project: "enovia-ai-assistant" },
  { name: "3DSpace", domain: "PLM", usedFor: "Engineering data views merged with external datasets.", project: "enovia-widgets" },

  // --- AI & Automation ---
  { name: "LangChain", domain: "AI", usedFor: "Composing retrieval, memory and LLM chains.", project: "enovia-ai-assistant" },
  { name: "CrewAI", domain: "AI", usedFor: "Role-based multi-agent systems.", project: "agentic-email-support-system" },
  { name: "AutoGen", domain: "AI", usedFor: "Multi-agent orchestration for collaborative AI workflows." },
  { name: "Google Agent Development Kit (ADK)", domain: "AI", usedFor: "Building and deploying structured AI agents." },
  { name: "Langsmith", domain: "AI", usedFor: "Tracing, debugging and evaluating LLM chains and agents." },
  { name: "Hermes Agent", domain: "AI", usedFor: "Agentic AI framework experimentation." },
  { name: "Prompt Engineering", domain: "AI", usedFor: "Structuring grounded, cite-first responses." },
  { name: "PyAutoGUI", domain: "AI", usedFor: "Desktop UI automation scripting." },
  { name: "Playwright", domain: "AI", usedFor: "Browser automation and end-to-end testing." },
  { name: "n8n", domain: "AI", usedFor: "Building automated workflows between apps and AI agents." },
  { name: "RAG", domain: "AI", usedFor: "Grounding answers in technical documentation with retrieval.", project: "enovia-ai-assistant" },
  { name: "Vector Search", domain: "AI", usedFor: "Semantic retrieval over documentation.", project: "enovia-ai-assistant" },
  { name: "FAISS", domain: "AI", usedFor: "Local vector database for fast similarity search.", project: "enovia-ai-assistant" },
  { name: "OpenAI API", domain: "AI", usedFor: "LLM reasoning and embedding generation.", project: "enovia-ai-assistant" },
  { name: "MQL / TCL Scripting", domain: "AI", usedFor: "Automating repetitive PLM operations at scale.", project: "enovia-widgets" },

  // --- Backend & APIs ---
  { name: "Java", domain: "Backend", usedFor: "Enterprise backend services on the 3DEXPERIENCE platform.", project: "enovia-widgets" },
  { name: "Spring Boot", domain: "Backend", usedFor: "REST backend services and business logic.", project: "enovia-widgets" },
  { name: "Python", domain: "Backend", usedFor: "AI pipelines, scripting and backend services.", project: "enovia-ai-assistant" },
  { name: "FastAPI", domain: "Backend", usedFor: "Serving AI pipelines and agent backends as APIs." },
  { name: "REST APIs", domain: "Backend", usedFor: "Contract between widgets and backend services.", project: "enovia-widgets" },
  { name: "PnO Web Services", domain: "Backend", usedFor: "Integrating with People & Organization systems.", project: "enovia-widgets" },
  { name: "SQL", domain: "Backend", usedFor: "Querying and shaping relational engineering data." },
  { name: "PostgreSQL", domain: "Backend", usedFor: "Relational storage for application data." },

  // --- Frontend ---
  { name: "Vue.js", domain: "Frontend", usedFor: "Custom ENOVIA widgets and internal tools.", project: "enovia-widgets" },
  { name: "Vuetify", domain: "Frontend", usedFor: "Consistent component UI for widgets.", project: "enovia-widgets" },
  { name: "Angular", domain: "Frontend", usedFor: "Structured single-page application interfaces." },
  { name: "JavaScript", domain: "Frontend", usedFor: "Interactive widget behaviour and UI logic." },
  { name: "TypeScript", domain: "Frontend", usedFor: "Typed frontend components and tooling.", project: "enovia-widgets" },
  { name: "HTML5", domain: "Frontend", usedFor: "Markup for web interfaces." },
  { name: "CSS3", domain: "Frontend", usedFor: "Styling for web interfaces." },

  // --- Embedded Systems & Hardware ---
  { name: "Embedded C", domain: "Embedded", usedFor: "Firmware logic for microcontroller-based systems." },
  { name: "STM32", domain: "Embedded", usedFor: "Embedded systems and IoT applications." },
  { name: "Arduino", domain: "Embedded", usedFor: "Motor control and sensor logic for robotics.", project: "bluetooth-line-follower-robot" },
  { name: "MSP430", domain: "Embedded", usedFor: "Low-power microcontroller programming." },
  { name: "Proteus", domain: "Embedded", usedFor: "Circuit simulation and modeling." },
  { name: "NI Multisim", domain: "Embedded", usedFor: "Circuit design and simulation." },
  { name: "Tinkercad", domain: "Embedded", usedFor: "Rapid circuit prototyping." },
  { name: "Sensors & Actuators", domain: "Embedded", usedFor: "IR, ultrasonic sensing and servo control.", project: "human-follower-robot" },

  // --- DevOps & Tools ---
  { name: "Git", domain: "DevOps", usedFor: "Version control across every project." },
  { name: "GitHub", domain: "DevOps", usedFor: "Hosting and sharing source for personal projects." },
  { name: "GitLab", domain: "DevOps", usedFor: "Version control and CI in the enterprise workflow." },
  { name: "Docker Desktop", domain: "DevOps", usedFor: "Packaging AI apps for reproducible deployment." },
  { name: "Dynatrace", domain: "DevOps", usedFor: "Application performance monitoring and observability." },
  { name: "Agile / Scrum", domain: "DevOps", usedFor: "Delivering features in Agile teams." },
];

export const skillsByDomain = (domain: SkillDomain) =>
  skills.filter((s) => s.domain === domain);

/** A curated highlight strip — a handful of the most representative skills. */
export const featuredSkills = [
  "GenAI Architect",
  "LangChain",
  "CrewAI · AutoGen",
  "ENOVIA 3DEXPERIENCE",
  "MQL / TCL",
  "Python",
  "Spring Boot",
  "Vue.js · Angular",
];
