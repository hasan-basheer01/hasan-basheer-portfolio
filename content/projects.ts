/**
 * Projects + full case studies.
 * Featured projects render an expandable 7-part case study.
 * `links` with `confirmed: false` are placeholders to fill before launch.
 */

export type ProjectStatus = "Live" | "Building" | "Prototype" | "Production" | "Completed";
export type ProjectCategory =
  | "AI Assistant"
  | "AI Product"
  | "Developer Tool"
  | "Engineering Automation"
  | "Full-Stack Platform"
  | "Academic Project";

export interface CaseStudySection {
  /** "01 — Problem", etc. */
  key: string;
  title: string;
  body: string[];
}

export interface ArchitectureStep {
  label: string;
  detail: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  confirmed: boolean;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  year: string;
  context: "Personal project" | "Professional work" | "Academic project";
  stack: string[];
  highlights: string[];
  architecture?: ArchitectureStep[];
  caseStudy: CaseStudySection[];
  links: ProjectLink[];
  /** Real photo of the build — path under /public. */
  image?: { src: string; alt: string };
  /** Real demo clip — path under /public. Rendered muted (audio removed at source). */
  video?: { src: string; alt: string };
}

export const projects: Project[] = [
  {
    slug: "enovia-widgets",
    name: "ENOVIA 3DEXPERIENCE Widget Platform",
    tagline: "Custom widget development — requirements gathering, business collaboration, end-to-end delivery.",
    category: "Full-Stack Platform",
    status: "Production",
    featured: true,
    year: "2023 – Present",
    context: "Professional work",
    stack: [
      "Vue.js",
      "Vuetify",
      "TypeScript",
      "Java 8",
      "Spring Boot",
      "REST APIs",
      "SQL",
      "MQL",
      "TCL",
      "ENOVIA 3DEXPERIENCE",
    ],
    highlights: [
      "Gathers requirements directly from business stakeholders and proposes end-to-end solutions",
      "Custom 3DEXPERIENCE widgets built with Vue.js and REST APIs",
      "Data Perspectives configured for engineering data views",
      "Backend services built and optimized with Java 8 and Spring Boot",
      "MQL & TCL scripting for automation and efficiency",
      "Delivered in Agile teams: features, bug fixing, testing, optimization",
    ],
    caseStudy: [
      {
        key: "01 — Problem",
        title: "Standard PLM screens don't fit every engineering workflow",
        body: [
          "Engineering teams need views and actions the out-of-the-box 3DEXPERIENCE platform does not provide, and repetitive PLM operations eat time that should go to design work.",
        ],
      },
      {
        key: "02 — Thinking",
        title: "Requirements first, then customize and automate",
        body: [
          "Every widget starts with gathering requirements directly from the business — understanding the workflow, then proposing and delivering an end-to-end solution rather than a generic screen.",
          "Two levers from there: build custom widgets that put the right data and actions in front of engineers, and script the repetitive operations so they stop being manual.",
        ],
      },
      {
        key: "03 — Architecture",
        title: "Vue widgets over Spring Boot services",
        body: [
          "Vue.js + Vuetify widgets embedded in 3DEXPERIENCE talk to Java 8 / Spring Boot REST services, with Data Perspectives shaping how engineering data is surfaced.",
        ],
      },
      {
        key: "04 — Implementation",
        title: "The interesting parts",
        body: [
          "Custom widget development against platform APIs, backend service optimization, and MQL / TCL automation scripts for batch operations.",
        ],
      },
      {
        key: "05 — AI Layer",
        title: "The bridge to the AI work",
        body: [
          "Living in MQL, TCL and ENOVIA documentation daily is exactly what motivated the AI assistant project — the pain was first-hand.",
        ],
      },
      {
        key: "06 — Result",
        title: "Scalable, enterprise-ready delivery",
        body: [
          "Full-stack applications delivered into a real enterprise environment, with automation removing manual steps from engineering processes.",
        ],
      },
      {
        key: "07 — Demo",
        title: "Internal",
        body: ["This is proprietary enterprise work; details are kept high-level."],
      },
    ],
    links: [],
  },

  {
    slug: "enovia-ai-assistant",
    name: "AI-Powered ENOVIA MQL & TCL Assistant",
    tagline: "Reads ENOVIA docs, writes ready-to-run MQL / TCL scripts.",
    category: "AI Assistant",
    status: "Prototype",
    featured: true,
    year: "2024",
    context: "Personal project",
    stack: [
      "Python",
      "LangChain",
      "LCEL",
      "FAISS",
      "OpenAI",
      "Embeddings",
      "RAG",
      "Streamlit",
    ],
    highlights: [
      "Documentation Q&A with page-level citations",
      "MQL schema queries in natural language",
      "MQL / TCL script generation",
      "Ready-to-run .tcl file downloads",
      "Multi-turn conversation memory",
      "Hybrid search over a local vector database",
      "Web fallback for general questions",
    ],
    architecture: [
      { label: "User", detail: "Asks a question or describes a task in plain language." },
      { label: "Query Understanding", detail: "Classifies intent: doc lookup, schema query or script generation." },
      { label: "Vector Search / Retrieval", detail: "Hybrid semantic + keyword search over a local FAISS index." },
      { label: "Technical Documentation", detail: "Retrieves the most relevant ENOVIA doc passages with page refs." },
      { label: "LLM", detail: "Reasons over retrieved context with conversation memory." },
      { label: "Grounded Response", detail: "Answers with citations — no source, no claim." },
      { label: "MQL / TCL Script", detail: "Emits a validated, downloadable script ready to run." },
    ],
    caseStudy: [
      {
        key: "01 — Problem",
        title: "Finding the command was harder than running it",
        body: [
          "ENOVIA developers spend real time hunting through dense documentation to recall MQL syntax and TCL patterns, then hand-assembling scripts for routine schema and data operations.",
          "The knowledge exists — it is just spread across hundreds of pages and tribal memory. That lookup tax adds up across a team.",
        ],
      },
      {
        key: "02 — Thinking",
        title: "Retrieval first, generation second",
        body: [
          "A plain LLM would hallucinate object names and attributes it had never seen. The value is not raw generation — it is grounding answers in the actual documentation.",
          "So the design leads with retrieval: pull the right passages, force citations, and only then let the model reason and generate a script.",
        ],
      },
      {
        key: "03 — Architecture",
        title: "A hybrid RAG pipeline with a local index",
        body: [
          "Documentation is chunked, embedded and stored in a local FAISS index so retrieval stays fast and private.",
          "Incoming queries are classified by intent, retrieved against with hybrid semantic + keyword search, and passed to the LLM through an LCEL chain that carries conversation memory.",
          "General, non-ENOVIA questions fall through to a web-backed path so the assistant stays useful outside its corpus.",
        ],
      },
      {
        key: "04 — Implementation",
        title: "The interesting parts",
        body: [
          "Intent routing so a schema question, a doc question and a 'write me a script' request each take the right path.",
          "Citation enforcement that ties every statement back to a document page.",
          "A script builder that assembles MQL / TCL and exports a runnable .tcl file, plus multi-turn memory so follow-ups keep context.",
        ],
      },
      {
        key: "05 — AI Layer",
        title: "Where AI actually earns its place",
        body: [
          "Embeddings + vector search handle 'I don't know the exact term' retrieval.",
          "The LLM does synthesis and translation — natural language to MQL, doc prose to a concrete script — but always over retrieved, cited context.",
        ],
      },
      {
        key: "06 — Result",
        title: "Ask instead of search",
        body: [
          "A developer can ask a question in plain language and get a cited answer plus a script they can run, without leaving the assistant to dig through PDFs.",
          "It turns documentation from a place you search into something you talk to.",
        ],
      },
      {
        key: "07 — Demo",
        title: "See it",
        body: ["Source and a walkthrough are linked below."],
      },
    ],
    links: [
      // TODO: add real GitHub repo URL.
      { label: "GitHub", href: "https://github.com/hasan-basheer01", confirmed: false },
      {
        label: "LinkedIn Post",
        href: "https://www.linkedin.com/posts/basheer-hasan-b0ab4b220_enovia-plm-mql-activity-7500252892910546944-bCiL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADey2HoBX5mt6QxPtXWNZqYRAmAeLpi9NPo",
        confirmed: true,
      },
    ],
  },

  {
    slug: "agentic-email-support-system",
    name: "Agentic Email Support System",
    tagline: "CrewAI agents that read incoming support emails, log them to a Google Sheet, and route the details onward by email.",
    category: "AI Product",
    status: "Completed",
    featured: true,
    year: "2024",
    context: "Personal project",
    stack: ["Python", "CrewAI", "Agentic AI", "Gmail API", "Google Sheets API", "Email Automation"],
    highlights: [
      "Multi-agent CrewAI system listens for incoming support emails",
      "Extracts and logs email details into a Google Sheet automatically",
      "Forwards the captured details to the relevant recipient by email",
      "Removes the manual step of reading, logging and relaying support requests",
    ],
    caseStudy: [
      {
        key: "01 — Problem",
        title: "Support emails need to be read, logged and relayed by hand",
        body: [
          "Incoming support emails had to be manually opened, key details copied into a tracking sheet, and then relayed to the right person — a repetitive task with no automation.",
        ],
      },
      {
        key: "02 — Approach",
        title: "Agents for listening, extraction and handoff",
        body: [
          "A CrewAI multi-agent setup listens for new emails, extracts the relevant details, writes them into a Google Sheet, and sends the captured information on to the intended recipient by email.",
        ],
      },
      {
        key: "03 — Result",
        title: "Email support that logs and routes itself",
        body: [
          "Incoming requests are captured, recorded and relayed automatically, removing the manual email-listening step from the support workflow.",
        ],
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hasan-basheer01/agentic-email-support-system",
        confirmed: true,
      },
    ],
  },

  {
    slug: "automated-paper-bag-machine",
    name: "Automated Paper Bag Making Machine",
    tagline: "A semi-automatic machine that folds and pastes waste paper into bags.",
    category: "Academic Project",
    status: "Completed",
    featured: false,
    year: "2023",
    context: "Academic project",
    stack: ["IR Sensor", "Servo Motors", "Embedded C", "Automation"],
    image: {
      src: "/paper-bag-machine.jpg",
      alt: "The automated paper bag making machine — servo motors and an IR sensor mounted on a metal frame with a paper bag mid-fold.",
    },
    highlights: [
      "Reuses waste paper instead of recycled stock",
      "IR sensor triggers automatic operation",
      "Servo motors fold and paste the paper",
      "Converts a manual process into semi-automatic production",
    ],
    caseStudy: [
      {
        key: "01 — Problem",
        title: "Manual paper bag production is slow and low-volume",
        body: [
          "Traditional paper bag manufacturing was a fully manual process, limiting production speed and making small-scale reuse of waste paper impractical.",
        ],
      },
      {
        key: "02 — Approach",
        title: "Sensor-triggered semi-automation",
        body: [
          "An IR sensor detects a fed sheet of A4-size waste paper and triggers servo motors that fold and paste it into a finished bag, removing the manual folding and pasting steps.",
        ],
      },
      {
        key: "03 — Result",
        title: "From manual craft to semi-automatic production",
        body: [
          "The machine turns a fully manual process into a semi-automatic one, increasing throughput and making small-scale reuse of waste paper for bag production practical.",
        ],
      },
    ],
    links: [],
  },

  {
    slug: "human-follower-robot",
    name: "Human Follower Robot",
    tagline: "Tracks and follows a person using ultrasonic and infrared sensing.",
    category: "Academic Project",
    status: "Completed",
    featured: false,
    year: "2022",
    context: "Academic project",
    stack: ["Ultrasonic Sensor", "Infrared Sensor", "Embedded C", "Robotics"],
    image: {
      src: "/human-follower-robot.jpg",
      alt: "The human follower robot — a wheeled chassis with an ultrasonic sensor, RFID reader and Arduino wiring on top.",
    },
    highlights: [
      "Tracks and follows a person across varying distances",
      "Takes turns to stay aligned with the person",
      "Avoids collisions using obstacle detection",
    ],
    caseStudy: [
      {
        key: "01 — Problem",
        title: "Assistive robots need to track a person reliably",
        body: [
          "The goal was a robot that could help with everyday tasks by reliably following a specific person through turns, without colliding with them or nearby obstacles.",
        ],
      },
      {
        key: "02 — Approach",
        title: "Ultrasonic distance + infrared obstacle detection",
        body: [
          "An ultrasonic sensor tracks the person's distance and direction, while an infrared sensor detects obstacles in the robot's path so it can avoid collisions.",
        ],
      },
      {
        key: "03 — Result",
        title: "A robot that follows, turns and avoids collisions",
        body: [
          "The robot follows a person across varying degrees of turns while avoiding collisions between itself and the person it is tracking.",
        ],
      },
    ],
    links: [],
  },

  {
    slug: "bluetooth-line-follower-robot",
    name: "Wireless Bluetooth Controlled Robot & Line Follower Robot",
    tagline: "Two SEEE-event robots: one Bluetooth-controlled, one an autonomous IR line follower.",
    category: "Academic Project",
    status: "Completed",
    featured: false,
    year: "2022",
    context: "Academic project",
    stack: ["Bluetooth", "Arduino UNO", "IR Sensor", "Android App"],
    video: {
      src: "/bluetooth-line-follower-robot.mp4",
      alt: "The line follower robot navigating a chalk-drawn track (audio removed).",
    },
    highlights: [
      "Smartphone app sends movement commands over Bluetooth",
      "Robot moves forward, backward, left, right and stops",
      "Line follower reads a black/white line contrast via IR sensor",
      "Arduino UNO drives the motor logic for both robots",
    ],
    caseStudy: [
      {
        key: "01 — Problem",
        title: "Two robotics events, two control problems",
        body: [
          "Built for the Robot Race and Line Follower Robot events organized by the Society of Electrical and Electronics Engineers (SEEE) at PSNA College — one needing remote human control, the other needing full autonomy.",
        ],
      },
      {
        key: "02 — Approach",
        title: "Bluetooth teleoperation and IR line-sensing",
        body: [
          "The Bluetooth robot pairs with an Android app that sends direct movement commands. The line follower reads a black line on a white surface (or vice versa) through an IR sensor, with an Arduino UNO driving the motors based on that signal.",
        ],
      },
      {
        key: "03 — Result",
        title: "A controlled robot and an autonomous one",
        body: [
          "Both robots were built and entered in their respective PSNA SEEE events — one operator-controlled, one self-navigating.",
        ],
      },
    ],
    links: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
