/**
 * Selected GitHub repositories.
 * Static and hand-curated — no fabricated stars or stats.
 * If GitHub API enrichment is added later it should degrade gracefully to this.
 */

export interface Repo {
  name: string;
  description: string;
  tech: string[];
  category: string;
  href: string;
  confirmed: boolean;
}

// TODO: confirm GitHub username and repo URLs, then flip `confirmed` to true.
export const githubUsername = "hasan-basheer01";
export const githubProfileUrl = `https://github.com/${githubUsername}`;

export const repos: Repo[] = [
  {
    name: "enovia-ai-assistant",
    description:
      "RAG assistant over ENOVIA documentation with MQL / TCL script generation and cited answers.",
    tech: ["Python", "LangChain", "FAISS", "OpenAI", "Streamlit"],
    category: "AI Assistant",
    href: "https://github.com/hasan-basheer01",
    confirmed: false,
  },
  {
    name: "ai-video-shorts-maker",
    description:
      "Turn long-form video into short, retention-optimized clips — transcription, AI analysis, captioning.",
    tech: ["Python", "FastAPI", "OpenAI"],
    category: "AI Product",
    href: "https://github.com/hasan-basheer01",
    confirmed: false,
  },
];
