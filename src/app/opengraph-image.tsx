import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mina Gharzi — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#213448",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#4ade80",
            }}
          />
          <span
            style={{
              fontSize: 22,
              color: "#94b4c1",
              letterSpacing: 4,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Available for work
          </span>
        </div>

        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#ecefca",
            lineHeight: 1.1,
            marginBottom: 16,
            display: "flex",
          }}
        >
          Mina Gharzi
        </div>

        <div
          style={{
            fontSize: 40,
            color: "#94b4c1",
            fontWeight: 700,
            display: "flex",
          }}
        >
          Frontend Developer — React & TypeScript
        </div>
      </div>
    ),
    { ...size }
  );
}