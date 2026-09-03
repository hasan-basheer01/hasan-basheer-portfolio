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
}

export const projects: Project[] = [
  {
    slug: "enovia-ai-assistant",
    name: "AI-Powered ENOVIA MQL & TCL Assistant",
    tagline:
      "A RAG assistant that reads ENOVIA documentation and writes ready-to-run MQL / TCL scripts.",
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
      // TODO: add live demo / video URL if available.
      { label: "Live Demo", href: "#", confirmed: false },
    ],
  },

  {
    slug: "ai-video-shorts",
    name: "AI Video Shorts Maker",
    tagline:
      "Turn long-form video into short, retention-optimized clips — automatically.",
    category: "AI Product",
    status: "Building",
    featured: true,
    year: "2025",
    context: "Personal project",
    stack: [
      "Python",
      "Transcription",
      "LLM Content Analysis",
      "Video Processing",
      "OpenAI",
      "FastAPI",
    ],
    highlights: [
      "YouTube URL import and direct video upload",
      "Automatic transcription",
      "AI analysis to find high-value moments",
      "Clip selection with a strong first-frame hook",
      "Captions burned in throughout",
      "Short-form retention rules baked into the pipeline",
    ],
    architecture: [
      { label: "YouTube URL / Upload", detail: "Import from a link or upload a file directly." },
      { label: "Video Processing", detail: "Normalize, segment and prepare the source video." },
      { label: "Transcription", detail: "Generate a timestamped transcript." },
      { label: "AI Content Analysis", detail: "Score segments for hook strength, payoff and clarity." },
      { label: "High-Value Moment Detection", detail: "Rank candidate moments across the full video." },
      { label: "Clip Selection", detail: "Cut starting on the strongest moment, ~2s pre-roll, no long intro." },
      { label: "Captions", detail: "Burn in readable, high-contrast captions throughout." },
      { label: "Short-Form Video", detail: "Export a vertical clip tuned for retention." },
    ],
    caseStudy: [
      {
        key: "01 — Problem",
        title: "Great long-form content, no time to clip it",
        body: [
          "Hours of podcasts, talks and tutorials contain dozens of share-worthy moments, but manually finding and cutting them is slow, repetitive editing work.",
          "Most auto-clip tools produce clips that open weakly and lose the viewer in the first two seconds.",
        ],
      },
      {
        key: "02 — Thinking",
        title: "Treat it as a product, not a script",
        body: [
          "The technical pipeline is only half the problem. The other half is a set of opinionated rules about what makes a short actually perform.",
          "So retention heuristics are first-class: start on the strongest moment, ~2 seconds of pre-roll, no long introduction, a strong first frame, face plus visual context, high contrast, captions throughout, visual movement every few seconds.",
        ],
      },
      {
        key: "03 — Architecture",
        title: "A staged pipeline from source to short",
        body: [
          "Import (URL or upload) → video processing → transcription → AI content analysis → moment detection → clip selection → captioning → export.",
          "Each stage is independent so a weak result at one step can be inspected and re-run without redoing the whole job.",
        ],
      },
      {
        key: "04 — Implementation",
        title: "The interesting parts",
        body: [
          "A scoring model over transcript segments that estimates hook strength and payoff, not just keyword density.",
          "Clip boundary logic that snaps the start to the beginning of the strongest moment with a fixed short pre-roll.",
          "A captioning pass tuned for legibility on mobile — high contrast, on screen the whole time.",
        ],
      },
      {
        key: "05 — AI Layer",
        title: "Where AI actually earns its place",
        body: [
          "Transcription turns audio into something analyzable.",
          "The LLM analysis layer is the judgment call — which 20 seconds of a 60-minute video are worth posting — which is exactly the part a human editor spends the most time on.",
        ],
      },
      {
        key: "06 — Result",
        title: "From a link to a postable clip",
        body: [
          "Paste a YouTube URL or upload a video and get back short-form clips that open on their strongest moment with captions already applied.",
          "It compresses an afternoon of editing into a short automated pass.",
        ],
      },
      {
        key: "07 — Demo",
        title: "In progress",
        body: ["Currently in active development — follow along in the Currently Building section."],
      },
    ],
    links: [
      // TODO: add real GitHub repo URL.
      { label: "GitHub", href: "https://github.com/hasan-basheer01", confirmed: false },
    ],
  },

  {
    slug: "enovia-widgets",
    name: "ENOVIA 3DEXPERIENCE Widget Platform",
    tagline:
      "Enterprise widgets, backend services and automation for engineering teams at Renault Nissan.",
    category: "Full-Stack Platform",
    status: "Production",
    featured: false,
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
        title: "Customize the platform, automate the repetition",
        body: [
          "Two levers: build custom widgets that put the right data and actions in front of engineers, and script the repetitive operations so they stop being manual.",
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
    slug: "automated-paper-bag-machine",
    name: "Automated Paper Bag Making Machine",
    tagline:
      "A semi-automatic machine that folds and pastes A4 waste paper into paper bags, replacing a fully manual process.",
    category: "Academic Project",
    status: "Completed",
    featured: false,
    year: "2023",
    context: "Academic project",
    stack: ["IR Sensor", "Servo Motors", "Embedded C", "Automation"],
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
    tagline:
      "A robot that tracks and follows a person using ultrasonic and infrared sensing while avoiding obstacles.",
    category: "Academic Project",
    status: "Completed",
    featured: false,
    year: "2022",
    context: "Academic project",
    stack: ["Ultrasonic Sensor", "Infrared Sensor", "Embedded C", "Robotics"],
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
    tagline:
      "Two robots built for a college SEEE event — one smartphone-controlled over Bluetooth, one that autonomously follows a line via IR sensing.",
    category: "Academic Project",
    status: "Completed",
    featured: false,
    year: "2022",
    context: "Academic project",
    stack: ["Bluetooth", "Arduino UNO", "IR Sensor", "Android App"],
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
