import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";
import { refundPolicy } from "@/lib/refund-policy";

export const metadata: Metadata = {
  title: "Policy Configuration | LPG Go PH",
  description: "Machine-readable LPG Go PH refund policy configuration.",
};

export default function ConfigurationPage() {
  const json = JSON.stringify(refundPolicy, null, 2);

  return (
    <PolicyLayout
      eyebrow="Developer policy"
      title="Refund Policy Configuration"
      lead="This machine-readable JSON is the single source of truth for the refund engine and public policy pages."
    >
      <section className="policy-section">
        <a className="btn" href="/config/refund-policy.json" download>
          Download JSON
        </a>
        <pre className="code-viewer language-json">
          <code>{json}</code>
        </pre>
      </section>
    </PolicyLayout>
  );
}
