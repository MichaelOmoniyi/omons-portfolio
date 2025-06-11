import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
            backgroundImage: "linear-gradient(135deg, #D441CE, #0652C5)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.7)",
              padding: "40px 80px",
              borderRadius: "20px",
            }}
          >
            <h1
              style={{
                fontSize: 60,
                fontWeight: 800,
                background: "linear-gradient(to right, #D441CE, #0652C5)",
                backgroundClip: "text",
                color: "transparent",
                margin: 0,
                marginBottom: 20,
              }}
            >
              Omons
            </h1>
            <h2
              style={{
                fontSize: 40,
                fontWeight: 600,
                color: "#fff",
                margin: 0,
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Full Stack Software Engineer
            </h2>
            <div
              style={{
                display: "flex",
                gap: "32px",
                marginTop: "20px",
              }}
            >
              <div style={{ color: "#fff", fontSize: 24 }}>React</div>
              <div style={{ color: "#fff", fontSize: 24 }}>Next.js</div>
              <div style={{ color: "#fff", fontSize: 24 }}>Node.js</div>
              <div style={{ color: "#fff", fontSize: 24 }}>Web3</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
