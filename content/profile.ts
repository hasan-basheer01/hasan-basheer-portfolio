/**
 * Core identity and narrative copy.
 * Facts here are sourced from Hasan Basheer's LinkedIn profile. Anything not
 * yet confirmed is marked with `TODO:` so it can be filled in without touching UI.
 */

export interface AboutCard {
  title: string;
  body: string;
}

export const profile = {
  name: "Hasan Basheer",
  shortName: "Hasan B",
  roles: [
    "ENOVIA & 3DEXPERIENCE Developer",
    "Full-Stack & Agentic AI Engineer",
    "GenAI Architect",
  ],
  currentTitle: "Engineer – Developer",
  // Rendered as a single highlight line under the name in the Hero section.
  headlineItems: [
    "ENOVIA 3DEXPERIENCE Developer",
    "Full-Stack Developer",
    "GenAI Architect",
    "Helping Businesses Automate Workflows",
    "Building AI Agents & AI Products",
  ],
  currentCompany: "Renault Nissan Technology & Business Centre India",
  location: "Dindigul, India",
  email: "hasanbasheer01@gmail.com",
  // TODO: confirm public phone visibility before launch.
  phone: "+91 95006 96186",
  availability: "Open to AI, software and product-building opportunities",
  greeting: "👋 Hey, welcome — great to have you here",

  tagline:
    "Full-stack developer with 3 years on ENOVIA & 3DEXPERIENCE — now expanding into GenAI and agentic AI.",

  heroPitch:
    "Enterprise ENOVIA and full-stack development by trade, GenAI and agentic AI workflows by focus — Python, LLMs, RAG and AI automation frameworks.",

  aboutLead:
    "Full-stack ENOVIA engineer expanding into LLMs, RAG and AI agents.",

  aboutIntro:
    "I'm an AI-Powered ENOVIA Full-Stack Developer with 3 years of enterprise experience in PLM and the 3DEXPERIENCE platform. I build intelligent, scalable solutions by combining ENOVIA, full-stack development and Generative AI architecture. Passionate about turning complex engineering challenges into simple, smart and practical solutions.",

  // Short fragments, not paragraphs — each renders as one line in a manifest-style list.
  aboutBody: [
    "3 years building on ENOVIA and the 3DEXPERIENCE platform.",
    "Full-stack: widgets, REST APIs, enterprise-facing UI.",
    "Daily tools: Java, Spring Boot, Vue.js, MQL, TCL, Data Perspective Studio.",
    "I like solving technical problems and turning them into usable interfaces.",
    "Now going deep on Python, LLMs and Retrieval-Augmented Generation.",
    "Building agentic AI — AutoGen, CrewAI, Google's Agent Development Kit.",
    "The goal: enterprise engineering experience + AI, aimed at real software.",
    "Open to connecting, sharing what I know, and learning what I don't.",
  ],

  aboutCards: [
    {
      title: "Enterprise PLM Engineering",
      body: "Custom ENOVIA 3DEXPERIENCE widgets, REST APIs and Data Perspective Studio dashboards for enterprise engineering teams.",
    },
    {
      title: "Full-Stack Development",
      body: "Backend services with Java, Spring Boot and REST APIs; frontend delivery with Vue.js, Angular and TypeScript.",
    },
    {
      title: "Generative AI & LLMs",
      body: "RAG pipelines, vector search and LLM application design with LangChain, FAISS and prompt engineering.",
    },
    {
      title: "Agentic AI & Automation",
      body: "Multi-agent systems with AutoGen, CrewAI and Google's Agent Development Kit, plus workflow automation with n8n, Playwright and PyAutoGUI.",
    },
    {
      title: "Engineering Foundation",
      body: "A rank-holding B.E. in Electrical & Electronics Engineering and embedded systems internships (STM32, Arduino) underpin how I approach systems end to end.",
    },
  ] satisfies AboutCard[],
};

export type Profile = typeof profile;
