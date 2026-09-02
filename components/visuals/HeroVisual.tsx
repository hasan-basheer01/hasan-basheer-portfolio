"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  kind: "io" | "core" | "data";
}

interface Edge {
  from: string;
  to: string;
}

const NODES: Node[] = [
  { id: "user", x: 70, y: 60, label: "USER", kind: "io" },
  { id: "query", x: 70, y: 170, label: "QUERY", kind: "core" },
  { id: "retrieval", x: 210, y: 120, label: "RETRIEVAL", kind: "core" },
  { id: "vectors", x: 210, y: 250, label: "VECTOR DB", kind: "data" },
  { id: "docs", x: 90, y: 300, label: "DOCS", kind: "data" },
  { id: "llm", x: 360, y: 170, label: "LLM", kind: "core" },
  { id: "context", x: 360, y: 300, label: "CONTEXT", kind: "data" },
  { id: "answer", x: 470, y: 90, label: "ANSWER", kind: "io" },
  { id: "script", x: 470, y: 250, label: "SCRIPT", kind: "io" },
];

const EDGES: Edge[] = [
  { from: "user", to: "query" },
  { from: "query", to: "retrieval" },
  { from: "docs", to: "vectors" },
  { from: "vectors", to: "retrieval" },
  { from: "retrieval", to: "llm" },
  { from: "vectors", to: "context" },
  { from: "context", to: "llm" },
  { from: "llm", to: "answer" },
  { from: "llm", to: "script" },
];

const nodeById = (id: string) => NODES.find((n) => n.id === id)!;

const kindColor: Record<Node["kind"], string> = {
  io: "#22d3ee",
  core: "#818cf8",
  data: "#6366f1",
};

export function HeroVisual() {
  const reduce = useReducedMotion();

  const paths = useMemo(
    () =>
      EDGES.map((e) => {
        const a = nodeById(e.from);
        const b = nodeById(e.to);
        const mx = (a.x + b.x) / 2;
        return {
          key: `${e.from}-${e.to}`,
          d: `M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`,
        };
      }),
    [],
  );

  return (
    <div className="relative aspect-[13/11] w-full">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <svg
        viewBox="0 0 540 380"
        className="relative h-full w-full"
        role="img"
        aria-label="Diagram of a retrieval-augmented AI pipeline: user query, vector database retrieval over documents, an LLM, and grounded answer and script outputs."
      >
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#6366f1" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#818cf8" stopOpacity="0.7" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0.2" />
          </linearGradient>
          <pattern
            id="dots"
            width="26"
            height="26"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.05)" />
          </pattern>
        </defs>

        <rect width="540" height="380" fill="url(#dots)" />

        {paths.map((p, i) => (
          <g key={p.key}>
            <path d={p.d} fill="none" stroke="url(#edge)" strokeWidth="1.25" />
            {!reduce && (
              <path
                d={p.d}
                fill="none"
                stroke="#22d3ee"
                strokeWidth="1.5"
                strokeDasharray="3 21"
                className="animate-dash-flow"
                style={{ animationDelay: `${i * 0.18}s`, opacity: 0.9 }}
              />
            )}
          </g>
        ))}

        {NODES.map((n, i) => (
          <motion.g
            key={n.id}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.15 + i * 0.07,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <circle
              cx={n.x}
              cy={n.y}
              r={n.kind === "core" ? 6 : 4.5}
              fill={kindColor[n.kind]}
            />
            {!reduce && (
              <circle
                cx={n.x}
                cy={n.y}
                r={n.kind === "core" ? 13 : 10}
                fill="none"
                stroke={kindColor[n.kind]}
                strokeWidth="1"
                className="animate-pulse-node"
                style={{ animationDelay: `${i * 0.35}s` }}
              />
            )}
            <text
              x={n.x}
              y={n.y - 16}
              textAnchor="middle"
              className="fill-ink-faint font-mono"
              style={{ fontSize: 9, letterSpacing: 1 }}
            >
              {n.label}
            </text>
          </motion.g>
        ))}
      </svg>

      <div className="pointer-events-none absolute bottom-3 left-3 font-mono text-2xs text-ink-faint">
        <span className="text-accent-cyan">▸</span> ai-engineering-command-center
      </div>
    </div>
  );
}
