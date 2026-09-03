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
  // Verbatim LinkedIn headline, split on "|".
  roles: [
    "ENOVIA & 3DEXPERIENCE Developer",
    "Full Stack Developer",
    "Widget",
    "GenAI Architect",
    "AI Automation & Agentic AI Developer",
    "Building AI Products & AI Agents",
    "SaaS",
    "Rank Holder in Electrical Engineering from PSNACET",
  ],
  currentTitle: "Engineer – Developer",
  currentCompany: "Renault Nissan Technology & Business Centre India",
  location: "Dindigul, India",
  email: "hasanbasheer01@gmail.com",
  // TODO: confirm public phone visibility before launch.
  phone: "+91 95006 96186",
  availability: "Open to AI, software and product-building opportunities",

  tagline:
    "ENOVIA & 3DEXPERIENCE engineer building toward LLMs, RAG and agentic AI.",

  heroPitch:
    "I build enterprise ENOVIA solutions by trade, and LLM-powered applications and AI agents by focus — combining full-stack engineering with Generative AI.",

  aboutLead:
    "Full-stack ENOVIA engineer expanding into LLMs, RAG and AI agents.",

  aboutBody: [
    "I'm a Software Developer with 3 years of experience in ENOVIA and the 3DEXPERIENCE platform, specializing in full-stack application development, widget development, and enterprise solutions.",
    "My experience includes developing and maintaining ENOVIA widgets, building REST APIs, working with Java, Spring Boot, Vue.js, MQL, TCL, and Data Perspective Studio to deliver scalable and business-focused solutions. I enjoy solving technical challenges, optimizing existing applications, and building user-friendly interfaces.",
    "I continuously expand my technical skills by learning modern software development practices and exploring Generative AI technologies. My current focus is on Python, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI agents, and AI-powered application development. My goal is to combine my enterprise application experience with AI to build intelligent software solutions.",
    "I am always open to connecting with professionals, sharing knowledge, and exploring opportunities where I can learn, grow, and contribute.",
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
