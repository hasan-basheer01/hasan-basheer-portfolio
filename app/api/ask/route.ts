import { NextResponse } from "next/server";
import { buildKnowledgeBase, localAnswer } from "@/lib/askKnowledge";

export const runtime = "nodejs";

interface AskBody {
  question?: string;
  history?: { role: "user" | "assistant"; content: string }[];
}

const SYSTEM_PROMPT = `You are "Ask Hasan", the assistant embedded in Hasan Basheer's portfolio site.
Answer visitor questions about Hasan — his AI projects, engineering background, skills and what he is building.

Rules:
- Only use facts from the KNOWLEDGE BASE below. Never invent employers, dates, metrics, clients, awards or technologies.
- If something is not in the knowledge base, say you don't have that detail and point to the contact email.
- Be concise: 2-5 sentences, plain text, no markdown headings.
- Speak about Hasan in the third person.

KNOWLEDGE BASE:
`;

export async function POST(req: Request) {
  let body: AskBody;
  try {
    body = (await req.json()) as AskBody;
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const question = (body.question ?? "").trim();
  if (!question) {
    return NextResponse.json({ error: "question is required" }, { status: 400 });
  }
  if (question.length > 500) {
    return NextResponse.json({ error: "question too long" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  const knowledge = buildKnowledgeBase();

  if (!apiKey) {
    return NextResponse.json({ answer: localAnswer(question), source: "local" });
  }

  try {
    const history = (body.history ?? [])
      .slice(-6)
      .filter((m) => m.content?.trim())
      .map((m) => ({ role: m.role, content: m.content.slice(0, 1000) }));

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: process.env.ASK_HASAN_MODEL || "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system: SYSTEM_PROMPT + knowledge,
        messages: [...history, { role: "user", content: question }],
      }),
      // Keep the route responsive; fall back on slow/failed calls.
      signal: AbortSignal.timeout(20_000),
    });

    if (!res.ok) throw new Error(`anthropic ${res.status}`);
    const data = await res.json();
    const answer: string =
      data?.content?.[0]?.text?.trim() || localAnswer(question);
    return NextResponse.json({ answer, source: "llm" });
  } catch {
    return NextResponse.json({ answer: localAnswer(question), source: "local" });
  }
}
