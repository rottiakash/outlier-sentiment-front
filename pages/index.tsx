import { Button } from "antd";
import { useRouter } from "next/dist/client/router";
import React from "react";

export default function Index() {
  const router = useRouter();
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <section
        style={{
          fontSize: "3rem",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          backgroundColor: "teal",
          cursor: "pointer",
        }}
      >
        Outlier Detection
      </section>
      <section
        onClick={() => router.push("/sentiment")}
        style={{
          fontSize: "3rem",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          color: "white",
          backgroundColor: "#212529",
          cursor: "pointer",
        }}
      >
        Sentiment Analysis
      </section>
    </div>
  );
}
