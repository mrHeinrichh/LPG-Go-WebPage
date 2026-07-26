import type { Metadata } from "next";
import MermaidChart from "@/components/MermaidChart";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Policy Flowcharts | LPG Go PH",
  description:
    "Visual LPG Go PH return, replacement, refund, fee, and dispute flows.",
};

const flowcharts = [
  {
    title: "Store Service Credit Fee Lifecycle",
    caption:
      "Shows how a configurable dealer/retailer transaction fee is held, finalized, or reversed.",
    chart: `flowchart TD
  A[Order marked Delivered] --> B[Configurable fee held from SCC]
  B --> C{Eligible return and full refund before finalization?}
  C -->|Yes| D[Reverse fee hold to store SCC]
  C -->|No| E[Order marked Completed]
  E --> F[Wait through one-hour replacement window]
  F --> G{Return or replacement opened?}
  G -->|Yes| H[Preserve hold during review]
  G -->|No| I[Finalize dealer or retailer transaction fee]`,
  },
  {
    title: "Customer Return Actions",
    caption:
      "Maps the 30-minute Return and Full Refund action, one-hour Return and Replace action, and Report or Dispute fallback.",
    chart: `flowchart TD
  A[Order marked Delivered] --> B[30-minute Return and Full Refund action]
  B --> C{Eligible request submitted?}
  C -->|Yes| D[Evidence review and retrieval coordination]
  C -->|No| E[Order marked Completed]
  E --> F[One-hour Return and Replace action]
  F --> G{Eligible request submitted?}
  G -->|Yes| H[Evidence review and replacement coordination]
  G -->|No or expired| I[Use Report or Dispute]
  I --> J[Safety concern remains reviewable]`,
  },
  {
    title: "Delivery Dispute Review",
    caption:
      "Both sides are reviewed using the combined order record rather than a single claim or photo.",
    chart: `flowchart TD
  A[Delivery, failed-delivery, or reschedule claim] --> B[Notify affected parties]
  B --> C[Collect status history, GPS, timestamp, photos, contact attempts, communications, and payment record]
  C --> D{Records consistent?}
  D -->|Yes| E[Apply supported status or remedy]
  D -->|No| F[Authorized admin review]
  F --> G[Request additional evidence and responses]
  G --> H[Record reasoned resolution and any account action]`,
  },
  {
    title: "Resolution Options",
    caption:
      "An approved case may result in redelivery, replacement, partial adjustment, full refund, or another lawful remedy.",
    chart: `flowchart TD
  A[Validated issue] --> B{Can the exact issue be corrected?}
  B -->|Missing item| C[Redeliver missing item]
  B -->|Replaceable product| D[Return and Replace]
  B -->|Price shortfall| E[Partial adjustment]
  B -->|Full unwind required| F[Return and Full Refund]
  F --> G[Identify and retrieve affected cylinder]
  G --> H[Coordinate refund and in-app confirmation]
  C --> I[Close with recorded evidence]
  D --> I
  E --> I
  H --> I`,
  },
  {
    title: "Refund Funding and Payment Method",
    caption:
      "The method depends on whether payment was online or COD and whether seller funds have already been released.",
    chart: `flowchart TD
  A[Approved refund] --> B{Payment method}
  B -->|Supported online payment| C{Funds released?}
  C -->|No| D[Provider reversal or unreleased settlement]
  C -->|Yes| E[Dealer or retailer settlement, SCC, or future payout deduction]
  B -->|Cash on Delivery| F[Documented cash handback or approved transfer]
  D --> G[Provider processing and confirmation]
  E --> G
  F --> H[Dual confirmation or admin review]
  G --> I[Close after refund record]
  H --> I`,
  },
];

export default function FlowchartsPage() {
  return (
    <PolicyLayout
      eyebrow="Policy visuals"
      title="Policy Flowcharts"
      lead="Operational diagrams for LPG Go PH return, replacement, refund, delivery-dispute, and Store Service Credit processes."
    >
      {flowcharts.map((item) => (
        <section className="policy-section" key={item.title}>
          <h2>{item.title}</h2>
          <MermaidChart chart={item.chart} />
          <p>{item.caption}</p>
        </section>
      ))}
    </PolicyLayout>
  );
}
