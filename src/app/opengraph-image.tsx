import { ImageResponse } from "next/og";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { APP_CONFIG } from "@/lib/constants";

export const alt = `${PERSONAL_INFO.name} — Software Engineer & Network Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#10151f", color: "#f8fafc", padding: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 72, height: 72, borderRadius: 16, background: "#1e293b", color: "#38bdf8", fontSize: 32, fontWeight: 700 }}>HF</div>
          <div style={{ fontSize: 24, color: "#94a3b8" }}>PORTFOLIO</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2 }}>{PERSONAL_INFO.name}</div>
          <div style={{ fontSize: 32, color: "#38bdf8" }}>{PERSONAL_INFO.fullRole}</div>
          <div style={{ fontSize: 24, color: "#94a3b8" }}>{PERSONAL_INFO.shortLocation}</div>
        </div>
        <div style={{ display: "flex", borderTop: "1px solid #334155", paddingTop: 24, fontSize: 24, color: "#cbd5e1" }}>{new URL(APP_CONFIG.baseUrl).hostname}</div>
      </div>
    ),
    size
  );
}
