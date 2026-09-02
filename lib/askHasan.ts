/**
 * Client-side service abstraction for the "Ask Hasan" assistant.
 * The UI only talks to this module — swapping the backend never touches components.
 */

export interface AskMessage {
  role: "user" | "assistant";
  content: string;
}

export interface AskResult {
  answer: string;
  /** "llm" when a live model answered, "local" for the offline knowledge base. */
  source: "llm" | "local";
}

export async function askHasan(
  question: string,
  history: AskMessage[] = [],
): Promise<AskResult> {
  try {
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, history }),
    });
    if (!res.ok) throw new Error(`ask failed: ${res.status}`);
    const data = (await res.json()) as AskResult;
    return data;
  } catch {
    return {
      answer:
        "The assistant is offline right now. In the meantime, browse the Projects and AI Lab sections, or email hasanbasheer01@gmail.com.",
      source: "local",
    };
  }
}
