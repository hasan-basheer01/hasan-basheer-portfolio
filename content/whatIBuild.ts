export interface BuildCategory {
  title: string;
  description: string;
  examples: string[];
  project?: string;
}

export const whatIBuild: BuildCategory[] = [
  {
    title: "AI Assistants",
    description:
      "RAG-powered assistants that understand technical documentation and generate useful, cited responses.",
    examples: ["Doc Q&A with citations", "Natural language → MQL", "Conversation memory"],
    project: "enovia-ai-assistant",
  },
  {
    title: "Developer Tools",
    description:
      "Tools that improve developer productivity and automate repetitive technical workflows.",
    examples: ["Script generation", "Runnable .tcl exports", "Schema exploration"],
    project: "enovia-ai-assistant",
  },
  {
    title: "Engineering Automation",
    description:
      "AI-powered and scripted solutions for PLM and engineering workflows that remove manual steps.",
    examples: ["MQL / TCL automation", "Data Perspectives", "Batch operations"],
    project: "enovia-widgets",
  },
  {
    title: "AI Products",
    description:
      "Experimental and production-oriented AI applications built with product thinking, not just a script.",
    examples: ["Pipelines", "Opinionated UX", "Deployment"],
    project: "ai-video-shorts",
  },
  {
    title: "Intelligent Video Tools",
    description:
      "AI systems for extracting the most valuable moments from long-form video.",
    examples: ["Transcription", "Moment scoring", "Auto-captioning"],
    project: "ai-video-shorts",
  },
];
