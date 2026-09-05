import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.roles[3]} · ${profile.roles[1]}`;
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
          background: "#050505",
          padding: 80,
          fontFamily: "sans-serif",
          backgroundImage:
            "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(0,243,255,0.28), transparent 70%)",
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
          {profile.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 64,
              fontWeight: 700,
              color: "#ededf1",
              lineHeight: 1.15,
              maxWidth: 1000,
            }}
          >
            {profile.roles[3]} · {profile.roles[1]}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#9a9aa6", maxWidth: 900 }}>
            {profile.heroPitch}
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 22, color: "#00f3ff" }}>
          <span>RAG</span>
          <span style={{ color: "#3a3a44" }}>/</span>
          <span>LangChain</span>
          <span style={{ color: "#3a3a44" }}>/</span>
          <span>AutoGen</span>
          <span style={{ color: "#3a3a44" }}>/</span>
          <span>CrewAI</span>
          <span style={{ color: "#3a3a44" }}>/</span>
          <span>ENOVIA · MQL · TCL</span>
        </div>
      </div>
    ),
    size,
  );
}
