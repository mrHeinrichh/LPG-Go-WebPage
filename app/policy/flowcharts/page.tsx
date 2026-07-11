import type { Metadata } from "next";
import MermaidChart from "@/components/MermaidChart";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Policy Flowcharts | LPG Go PH",
  description: "Visual LPG Go PH refund and complaint policy flowcharts.",
};

const flowcharts = [
  {
    title: "Online Payment Wallet and Escrow Flow",
    caption: "Shows how online payments enter Pending Balance, release, or remain held during dispute review.",
    chart: `flowchart TD
  A[Customer pays via admin's GCash QR] --> B[Dealer wallet: PENDING - held]
  B --> C[Delivery + 24-hour dispute window]
  C -->|No complaint| D[Pending to Available less ₱2 fee]
  C -->|Complaint filed| E[Hold extended during dispute]
  D --> F[Available balance - withdrawable]
  E --> G[Refund if valid - admin sends GCash]
  G --> H[Pending balance reduced]`,
  },
  {
    title: "COD Refund Flow",
    caption: "Explains how COD complaints resolve through wallet deduction or cash refund with dual confirmation.",
    chart: `flowchart TD
  A[Wallet check - minimum balance] --> B[Order delivered - cash to rider]
  B --> C[Transaction complete - less ₱2 - 24h window starts]
  C -->|No complaint| D[Closed - dealer keeps cash]
  C -->|Valid complaint| E[Refund amount validated]
  E --> F[Wallet deduction + admin GCash send]
  E --> G[Cash refund by dealer]
  G --> H[Dual confirmation in app]
  F --> I[Ticket closed - recorded]
  H --> I`,
  },
  {
    title: "Master Complaint Decision Flow",
    caption: "Routes complaint intake through window validation, defect/change-of-mind review, and evidence review.",
    chart: `flowchart TD
  A[Customer files complaint - reason + evidence] --> B{Within claim window?}
  B -->|Yes| C{Defect or change of mind?}
  B -->|No| Z1[Denied: out of window - safety still escalated]
  C -->|Defect| D{Evidence review - dealer 24h response}
  C -->|Change of mind| Z2[Denied: not covered - dealer goodwill optional]
  D -->|Valid| E[VALIDATED - proceed to resolution]
  D -->|Insufficient| Z3[Denied: invalid - release normally]
  E --> F[Continue to Resolution Ladder]`,
  },
  {
    title: "Resolution Ladder",
    caption: "Replacement is the default, followed by partial refund, then full refund with Kaliwaan Rule.",
    chart: `flowchart TD
  A[Validated complaint] --> B[1. Offer replacement - free within 24h - default]
  B -->|Accepted| C[Tank swap - no money movement]
  B -->|Declined or no stock| D{Refund type?}
  D -->|Partial| E[Partial refund - difference only]
  D -->|Full| F[Full refund - kaliwaan rule]
  E --> G[Send difference - see funding source]
  F --> H[Tank + cash exchange simultaneously]
  C --> I[Ticket closed - recorded]
  G --> I
  H --> I`,
  },
  {
    title: "Refund Funding Source",
    caption: "Determines whether refund funding comes from Pending Balance, wallet deduction, cash-on-pickup, or capped goodwill.",
    chart: `flowchart TD
  A[Refund needed - what payment method?] -->|Online| B{Released?}
  A -->|COD| C{Cash-on-pickup feasible?}
  B -->|Pending| D[Pending balance - void hold - GCash send]
  B -->|Released| E[Wallet deduction - GCash send]
  C -->|Yes| F[Cash-on-pickup - dual confirmation]
  C -->|No| G[Wallet deduction + GCash after retrieval]
  E --> H{Wallet sufficient?}
  G --> H
  H -->|No| I[Negative balance - restricted - 48h top-up]
  I -->|No top-up| J[Platform goodwill - capped - collection case]`,
  },
];

export default function FlowchartsPage() {
  return (
    <PolicyLayout
      eyebrow="Policy visuals"
      title="Policy Flowcharts"
      lead="Five operational diagrams that explain LPG Go PH wallet, complaint, resolution, and refund-funding decisions."
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
