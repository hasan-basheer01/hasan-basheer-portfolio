import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hasan Basheer — AI Engineer & Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08080a",
          padding: 80,
          fontFamily: "sans-serif",
          backgroundImage:
            "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(99,102,241,0.28), transparent 70%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9a9aa6",
          }}
        >
          Hasan Basheer
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              color: "#ededf1",
              lineHeight: 1.1,
            }}
          >
            AI Engineer · Software Engineer
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#9a9aa6", maxWidth: 900 }}>
            Building intelligent software at the intersection of AI, engineering
            and automation.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 22, color: "#818cf8" }}>
          <span>RAG</span>
          <span style={{ color: "#3a3a44" }}>/</span>
          <span>LangChain</span>
          <span style={{ color: "#3a3a44" }}>/</span>
          <span>FAISS</span>
          <span style={{ color: "#3a3a44" }}>/</span>
          <span>Python</span>
          <span style={{ color: "#3a3a44" }}>/</span>
          <span>ENOVIA · MQL · TCL</span>
        </div>
      </div>
    ),
    size,
  );
}
