/**
 * Technical content / visibility.
 * This is a data-driven structure so posts and links can be added later
 * without touching the UI. Populate `items` as content is published.
 */

export type ContentPlatform = "LinkedIn" | "GitHub" | "YouTube" | "Article";

export interface ContentItem {
  title: string;
  platform: ContentPlatform;
  topic: string;
  blurb: string;
  href: string;
  date?: string;
  confirmed: boolean;
}

export const contentTopics = [
  "Generative AI",
  "AI Engineering",
  "RAG",
  "Python",
  "PLM",
  "ENOVIA",
  "MQL",
  "TCL",
  "Software Engineering",
  "Automation",
  "AI Products",
];

/**
 * TODO: replace these placeholders with real published content.
 * The section renders an empty-but-intentional state when this list is empty.
 */
export const contentItems: ContentItem[] = [
  {
    title: "Why RAG beats fine-tuning for internal documentation",
    platform: "Article",
    topic: "RAG",
    blurb:
      "Retrieval keeps answers current and citable — the reasoning behind the ENOVIA assistant's design.",
    href: "#",
    confirmed: false,
  },
  {
    title: "Building an AI assistant for ENOVIA MQL & TCL",
    platform: "LinkedIn",
    topic: "AI Engineering",
    blurb:
      "A walkthrough of turning dense PLM documentation into something you can just ask.",
    href: "#",
    confirmed: false,
  },
  {
    title: "AI Video Shorts Maker — build log",
    platform: "YouTube",
    topic: "AI Products",
    blurb:
      "Following the pipeline from a YouTube URL to a captioned, retention-tuned short.",
    href: "#",
    confirmed: false,
  },
];
