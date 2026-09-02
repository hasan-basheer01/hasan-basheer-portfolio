/**
 * "Currently Building" — live development status card(s).
 */

export interface BuildStatus {
  name: string;
  status: "BUILDING" | "PROTOTYPING" | "SHIPPING";
  summary: string;
  pipeline: string[];
  progress: { label: string; done: boolean }[];
  project?: string;
}

export const currentlyBuilding: BuildStatus[] = [
  {
    name: "AI Video Shorts Maker",
    status: "BUILDING",
    summary:
      "An AI product that turns long-form video into short, retention-optimized clips.",
    pipeline: [
      "Video",
      "Transcription",
      "AI Analysis",
      "Moment Selection",
      "Short",
    ],
    progress: [
      { label: "YouTube import + upload", done: true },
      { label: "Transcription pipeline", done: true },
      { label: "Moment scoring model", done: true },
      { label: "Clip boundary + pre-roll logic", done: false },
      { label: "Caption rendering", done: false },
      { label: "Export + UI polish", done: false },
    ],
    project: "ai-video-shorts",
  },
];
