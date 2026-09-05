/**
 * Experience + engineering-journey timeline.
 * Employment and education facts are from LinkedIn — no invented dates or titles.
 */

export interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  kind: "work" | "education" | "focus" | "achievement";
  points: string[];
  tags?: string[];
  image?: { src: string; alt: string };
}

export const timeline: TimelineEntry[] = [
  {
    period: "Oct 2023 – Present",
    title: "Engineer – Developer",
    org: "Renault Nissan Technology & Business Centre India · Full-time, On-site",
    kind: "work",
    points: [
      "Worked in the PLM domain using ENOVIA 3DEXPERIENCE to develop and maintain enterprise solutions.",
      "Developed and enhanced custom widgets for DMU Exchange, ECU Software Update Management, and Vehicle Weight Table Management.",
      "Built and integrated REST APIs with People & Organization (PnO) using 3DEXPERIENCE web services.",
      "Managed user access by assigning Admin Technical Account security contexts and permissions.",
      "Developed MQL and TCL scripts to automate business processes and improve operational efficiency.",
      "Developed Data Perspective Studio dashboards to visualize 3DSpace and external data for Part 360 and Vehicle 360.",
      "Worked closely with cross-functional teams to understand business requirements and deliver reliable, user-friendly solutions.",
    ],
    tags: ["ENOVIA", "3DEXPERIENCE", "Full-Stack", "MQL / TCL", "REST APIs"],
  },
  {
    // TODO: certificate photo shows "Date of Issue" but the exact day/month is
    // illegible in the source photo — confirm and update the period.
    period: "2026",
    title: "Winner — CrewAI Buildathon",
    org: "Generative AI Foundation × Social Eagle",
    kind: "achievement",
    points: [
      "Won the CrewAI Buildathon, organized under the Generative AI Foundation.",
      "Recognized for architecting an autonomous multi-agent solution powered by CrewAI.",
    ],
    tags: ["CrewAI", "Agentic AI", "Buildathon"],
    image: {
      src: "/crewai-buildathon-certificate.jpg",
      alt: "Hasan Basheer (in white) with three teammates, holding his Certificate of Achievement for winning the CrewAI Buildathon, organized under the Generative AI Foundation.",
    },
  },
  {
    period: "2024 – Present",
    title: "Building AI systems",
    org: "Personal projects",
    kind: "focus",
    points: [
      "RAG assistant for ENOVIA MQL / TCL — retrieval, vector search and script generation.",
      "Agentic email support system built with CrewAI — listens for emails, logs details to Google Sheets and relays them onward.",
      "Experiments with agentic AI (AutoGen, CrewAI, Google ADK) and workflow automation (n8n, Playwright, PyAutoGUI).",
    ],
    tags: ["Generative AI", "RAG", "Agentic AI"],
  },
  {
    period: "Dec 2022 – May 2023",
    title: "Embedded System and IoT",
    org: "Tessolve · Internship (Remote, Bengaluru)",
    kind: "work",
    points: [
      "Embedded systems fundamentals with STM32 and Embedded C programming.",
    ],
    tags: ["STM32", "Embedded Systems", "Internship"],
  },
  {
    period: "Feb 2022 – May 2022",
    title: "Embedded Systems",
    org: "Graspear Solutions Pvt Ltd · Internship (Hybrid, Madurai)",
    kind: "work",
    points: [
      "Embedded C programming fundamentals and circuit simulation with Proteus.",
    ],
    tags: ["Embedded C", "Proteus", "Internship"],
  },
  {
    period: "2019 – 2023",
    title: "B.E. Electrical & Electronics Engineering",
    org: "PSNA College of Engineering & Technology, Dindigul",
    kind: "education",
    points: [
      "First Class with Distinction · Rank Holder · CGPA 8.81.",
      "IEEE Student Chapter · Electric Circuit Analysis, Power Systems, Microprocessors & Microcontrollers, Embedded Systems.",
    ],
    tags: ["Engineering foundation"],
  },
  // TODO: add school education entry once details (name, board, years) are confirmed.
];

/** The story arc rendered as a horizontal / vertical progression. */
export const journey: { phase: string; note: string }[] = [
  { phase: "Embedded Systems Foundation", note: "Embedded C, STM32 and robotics through college internships and projects." },
  { phase: "Software Engineering", note: "Full-stack delivery on enterprise platforms." },
  { phase: "Engineering / PLM", note: "ENOVIA 3DEXPERIENCE customization and data." },
  { phase: "Automation", note: "MQL / TCL scripting and workflow automation with n8n and Playwright." },
  { phase: "Generative AI", note: "RAG, embeddings and LLM application design." },
  { phase: "Agentic AI", note: "Multi-agent systems with AutoGen, CrewAI and Google ADK." },
];
