"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUp, MessageCircle, X } from "lucide-react";
import { askHasan, type AskMessage } from "@/lib/askHasan";
import { SUGGESTED_QUESTIONS } from "@/lib/askKnowledge";
import { cn } from "@/lib/utils";

function Avatar() {
  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-gradient text-[10px] font-semibold text-bg">
      HB
    </div>
  );
}

export function AskHasanWidget() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
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
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="card glow-ring flex max-h-[min(600px,75vh)] w-[380px] max-w-[calc(100vw-2.5rem)] origin-bottom-right flex-col overflow-hidden"
            role="dialog"
            aria-label="Ask Hasan chat"
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-line px-4 py-3.5">
              <div className="flex items-center gap-3">
                <Avatar />
                <div>
                  <p className="text-sm font-medium text-ink">Ask Hasan</p>
                  <p className="flex items-center gap-1.5 font-mono text-2xs text-ink-faint">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {source === "llm"
                      ? "live model"
                      : source === "local"
                        ? "offline knowledge base"
                        : "online"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="click-glow inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink-faint transition-colors hover:text-ink"
                aria-label="Close chat"
              >
                <X size={15} />
              </button>
            </div>

            {/* Transcript */}
            <div
              ref={scrollRef}
              className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-bg-raised/30 px-4 py-5"
            >
              {messages.length === 0 && (
                <div className="flex items-end gap-2">
                  <Avatar />
                  <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-line bg-bg-overlay/60 px-4 py-2.5 text-sm leading-relaxed text-ink-muted">
                    Hey, I&apos;m grounded in Hasan&apos;s portfolio content. Try a
                    question below, or type your own.
                  </div>
                </div>
              )}
              <AnimatePresence initial={false}>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "flex items-end gap-2",
                      m.role === "user" ? "justify-end" : "justify-start",
                    )}
                  >
                    {m.role === "assistant" && <Avatar />}
                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                        m.role === "user"
                          ? "rounded-br-sm bg-ink text-bg"
                          : "rounded-bl-sm border border-line bg-bg-overlay/60 text-ink-muted",
                      )}
                    >
                      {m.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {loading && (
                <div className="flex items-end justify-start gap-2">
                  <Avatar />
                  <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-line bg-bg-overlay/60 px-4 py-3">
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
              <div className="flex shrink-0 flex-wrap gap-1.5 px-4 pb-3 pt-1">
                {SUGGESTED_QUESTIONS.slice(0, 3).map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="click-glow rounded-full border border-line bg-bg-raised/50 px-3 py-1.5 text-xs text-ink-muted transition-colors hover:border-accent-soft/40 hover:text-ink"
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
              className="flex shrink-0 items-center gap-2 border-t border-line p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message Ask Hasan…"
                maxLength={500}
                className="flex-1 rounded-full border border-line bg-bg-overlay/40 px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink-faint focus:border-line-strong"
                aria-label="Ask a question about Hasan"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="click-glow inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-gradient text-bg transition-opacity disabled:opacity-30"
                aria-label="Send question"
              >
                <ArrowUp size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileTap={reduce ? undefined : { scale: 0.92 }}
        className="click-glow glow-ring relative flex h-14 w-14 items-center justify-center rounded-full bg-accent-gradient text-bg"
        aria-label={open ? "Close Ask Hasan chat" : "Open Ask Hasan chat"}
        aria-expanded={open}
        title="Ask Hasan"
      >
        {!open && !reduce && (
          <span className="absolute inset-0 animate-pulse-node rounded-full bg-accent/40" />
        )}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "chat"}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.15 }}
            className="relative flex items-center justify-center"
          >
            {open ? <X size={22} /> : <MessageCircle size={22} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
