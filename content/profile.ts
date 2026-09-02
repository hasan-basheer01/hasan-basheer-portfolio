/**
 * Core identity and narrative copy.
 * Facts here are sourced from Hasan Basheer's resume. Anything not yet
 * confirmed is marked with `TODO:` so it can be filled in without touching UI.
 */

export interface AboutCard {
  title: string;
  body: string;
}

export const profile = {
  name: "Hasan Basheer",
  shortName: "Hasan B",
  roles: ["AI Engineer", "Software Engineer", "AI Product Builder"],
  currentTitle: "Engineer – Developer",
  currentCompany: "Renault Nissan Technology & Business Centre India",
  location: "Dindigul, India",
  email: "hasanbasheer01@gmail.com",
  // TODO: confirm public phone visibility before launch.
  phone: "+91 95006 96186",
  availability: "Open to AI, software and product-building opportunities",

  tagline:
    "Building intelligent software at the intersection of AI, engineering and automation.",

  heroPitch:
    "I design and ship AI systems — RAG assistants, developer tools and automation — on top of a full-stack engineering foundation.",

  aboutLead:
    "Full-stack engineer building practical AI systems that solve real engineering and software problems.",

  aboutBody: [
    "I work as a full-stack developer on the ENOVIA 3DEXPERIENCE platform at Renault Nissan Technology & Business Centre India, building enterprise widgets, backend services and automation for engineering teams.",
    "Alongside that, I build AI applications — retrieval-augmented assistants, vector search pipelines and AI-powered tools — turning long documentation and manual workflows into something you can just ask.",
    "The through-line: take a real engineering problem, design the system end to end, and use AI only where it genuinely adds value.",
  ],

  aboutCards: [
    {
      title: "AI Engineering",
      body: "RAG pipelines, vector search, embeddings and LLM application architecture with LangChain and FAISS.",
    },
    {
      title: "Software Engineering",
      body: "Full-stack delivery with Java 8, Spring Boot, REST APIs, Vue.js and TypeScript in Agile teams.",
    },
    {
      title: "PLM / Engineering",
      body: "ENOVIA 3DEXPERIENCE customization, custom widgets, Data Perspectives and MQL / TCL scripting.",
    },
    {
      title: "Automation",
      body: "Scripted automation of repetitive engineering workflows to remove manual steps and cut cycle time.",
    },
    {
      title: "AI Product Development",
      body: "Taking AI ideas from prototype to usable product — pipelines, UX and deployment.",
    },
  ] satisfies AboutCard[],
};

export type Profile = typeof profile;
