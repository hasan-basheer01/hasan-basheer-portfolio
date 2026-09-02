"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { askHasan, type AskMessage } from "@/lib/askHasan";
import { SUGGESTED_QUESTIONS } from "@/lib/askKnowledge";
import { cn } from "@/lib/utils";

export function AskHasan() {
  const reduce = useReducedMotion();
  const [messages, setMessages] = useState<AskMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState<"llm" | "local" | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const send = async (question: string) => {
    const q = question.trim();
    if (!q || loading) return;
    const history = messages.slice(-6);
    setMessages((m) => [...m, { role: "user", content: q }]);
    setInput("");
    setLoading(true);
    requestAnimationFrame(() =>
      scrollRef.current?.scrollTo({ top: 1e9, behavior: "smooth" }),
    );

    const res = await askHasan(q, history);
    setSource(res.source);
    setMessages((m) => [...m, { role: "assistant", content: res.answer }]);
    setLoading(false);
    requestAnimationFrame(() =>
      scrollRef.current?.scrollTo({ top: 1e9, behavior: "smooth" }),
    );
  };

  return (
    <Section id="ask">
      <SectionHeader
        label="Ask My Portfolio"
        title="Talk to it instead of scrolling it."
        intro="A small assistant grounded in this site's content. Ask about the projects, the RAG work, the stack, or what's being built now."
      />

      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="card glow-ring mt-12 overflow-hidden"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex items-center gap-2 font-mono text-2xs text-ink-muted">
            <Sparkles size={13} className="text-accent-cyan" />
            ask_hasan
          </div>
          {source && (
            <span className="font-mono text-[10px] text-ink-faint">
              {source === "llm" ? "● live model" : "● offline knowledge base"}
            </span>
          )}
        </div>

        {/* Transcript */}
        <div
          ref={scrollRef}
          className="max-h-[420px] min-h-[220px] space-y-4 overflow-y-auto px-4 py-5"
        >
          {messages.length === 0 && (
            <p className="text-sm text-ink-faint">
              Try a question below, or type your own.
            </p>
          )}
          <AnimatePresence initial={false}>
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "flex",
                  m.role === "user" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                    m.role === "user"
                      ? "bg-ink text-bg"
                      : "border border-line bg-bg-overlay/60 text-ink-muted",
                  )}
                >
                  {m.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {loading && (
            <div className="flex justify-start">
              <div className="flex gap-1 rounded-2xl border border-line bg-bg-overlay/60 px-4 py-3">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 animate-pulse-node rounded-full bg-ink-faint"
                    style={{ animationDelay: `${d * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Suggestions */}
        {messages.length === 0 && (
          <div className="flex flex-wrap gap-1.5 px-4 pb-3">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => send(q)}
                className="rounded-full border border-line bg-bg-raised/50 px-3 py-1.5 text-xs text-ink-muted transition-colors hover:border-accent-soft/40 hover:text-ink"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t border-line p-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Hasan's work…"
            maxLength={500}
            className="flex-1 bg-transparent px-2 text-sm text-ink outline-none placeholder:text-ink-faint"
            aria-label="Ask a question about Hasan"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-bg transition-opacity disabled:opacity-30"
            aria-label="Send question"
          >
            <ArrowUp size={15} />
          </button>
        </form>
      </motion.div>

      <p className="mt-3 font-mono text-2xs text-ink-faint">
        Answers are generated from this site&apos;s structured content. Connect an
        LLM API key to enable live responses; it falls back to a local knowledge
        base otherwise.
      </p>
    </Section>
  );
}
