import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nedanza Academie";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 50%, #1a2e1a 100%)",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              marginBottom: "32px",
              fontSize: "40px",
            }}
          >
            🎓
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#f5f0e8",
              textAlign: "center",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Nedanza Academie
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "rgba(245, 240, 232, 0.7)",
              textAlign: "center",
              lineHeight: 1.5,
              maxWidth: "700px",
            }}
          >
            Opleidingen in systemische hulpverlening, het Exodus Model en contactuele therapie
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "40px",
            }}
          >
            {["Systeemtherapie", "Exodus Model", "Contactuele Therapie"].map(
              (course) => (
                <div
                  key={course}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "rgba(245, 240, 232, 0.8)",
                    fontSize: "16px",
                  }}
                >
                  {course}
                </div>
              )
            )}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "rgba(245, 240, 232, 0.4)",
            fontSize: "16px",
          }}
        >
          academie.nedanza.nl
        </div>
      </div>
    ),
    { ...size }
  );
}
