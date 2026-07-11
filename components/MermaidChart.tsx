"use client";

import { useEffect, useId, useState } from "react";
import mermaid from "mermaid";

export default function MermaidChart({ chart }: { chart: string }) {
  const id = useId().replace(/:/g, "");
  const [svg, setSvg] = useState("");

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base",
      themeVariables: {
        primaryColor: "#eaf1fb",
        primaryTextColor: "#14233f",
        primaryBorderColor: "#1e3c72",
        lineColor: "#2a5298",
        secondaryColor: "#fdeee2",
        tertiaryColor: "#ffffff",
      },
    });
    mermaid.render(`chart-${id}`, chart).then((result) => setSvg(result.svg));
  }, [chart, id]);

  return <div className="mermaid-box" dangerouslySetInnerHTML={{ __html: svg }} />;
}
