import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Refund Policy | LPG Go PH",
  description: "Complete LPG Go PH refund policy, scenario matrix, wallet rules, SLAs, and customer-facing summary.",
};

const toc = [
  "Terminology",
  "Resolution Ladder",
  "Before Delivery",
  "At the Doorstep",
  "24-Hour Dispute Window",
  "After Release or Window",
  "Edge Cases",
  "Money Flow",
  "Wallet and Eligibility",
  "SLA Targets",
  "Strikes and Fraud Guards",
  "Customer Summary",
].map((label) => ({ label, href: `#${label.toLowerCase().replaceAll(" ", "-")}` }));

const sections = [
  {
    id: "terminology",
    title: "Terminology",
    items: [
      "Online Payment (OLP): Customer paid via the admin's GCash QR; funds held by the platform.",
      "COD: Cash on Delivery — customer pays cash directly to the rider.",
      "Pending Balance: Portion of the dealer's wallet from online payments, held during the dispute window.",
      "Available Balance: Portion of the dealer's wallet that can be used or withdrawn.",
      "Dispute Window: 24 hours after confirmed delivery; 7 days for leak/safety defects and 48 hours for underfilled tanks.",
      "Release: Transition of Pending to Available, less the ₱2 transaction fee, after the dispute window closes.",
      "Cash-on-Pickup Refund: The rider hands refund cash to the customer during tank retrieval with dual in-app confirmation.",
      "Kaliwaan Rule: On full return, tank and refund exchange happen simultaneously.",
    ],
  },
  {
    id: "resolution-ladder",
    title: "Resolution Ladder",
    items: [
      "Replacement is the default resolution and is free within 24 hours.",
      "Partial Refund applies when the customer accepts the order but there is a validated shortfall.",
      "Full Refund is the last resort; tank retrieval is required and the Kaliwaan Rule applies.",
    ],
  },
  {
    id: "before-delivery",
    title: "Section 1 — Before Delivery",
    items: [
      "1.1 Cancellation before dispatch: Online payment refunded in full; COD auto-cancelled. No fee.",
      "1.2 In-transit cancellation: Refund minus delivery fee. Three or more repeat cancellations within 30 days disables COD.",
      "1.3 Non-delivery: Online payment is fully refunded; COD has no money movement.",
    ],
  },
  {
    id: "at-the-doorstep",
    title: "Section 2 — At the Doorstep (COD-only special case)",
    items: [
      "2.1 Issue detected before payment: Adjusted Collection — the rider triggers Adjust Order and the customer pays the reduced amount.",
    ],
  },
  {
    id: "24-hour-dispute-window",
    title: "Section 3 — Within the 24-Hour Dispute Window",
    items: [
      "3.1 Replacement path: No money movement; tank swap at the doorstep.",
      "3.2 Partial refund: Online payment deducts from Pending Balance. COD uses wallet deduction/admin GCash send or dealer cash refund with dual confirmation.",
      "3.3 Full refund and tank return: Kaliwaan Rule applies. Online payment voids Pending Balance and sends refund via GCash. COD defaults to cash-on-pickup.",
      "3.4 Change of mind: Denied. Dealer goodwill remains optional.",
      "3.5 Invalid evidence: Claim denied after review. Three denied claims within 30 days flags the customer account.",
    ],
  },
  {
    id: "after-release-or-window",
    title: "Section 4 — After Release or After Window",
    items: [
      "4.1 Leak within 7 days: Priority handling, refund via wallet deduction and GCash, tank retrieval required, retrieved tank not re-deployed.",
      "4.2 Underfilled within 48 hours: Partial refund via wallet deduction.",
      "4.3 Out of window: Denied. Safety issues are still escalated for pattern tracking.",
      "4.4 Consumed gas: No refund unless a hidden defect surfaces on first use within the claim window.",
    ],
  },
  {
    id: "edge-cases",
    title: "Section 5 — Edge Cases",
    items: [
      "Dealer out of stock converts to full refund and repeated cases create strikes.",
      "Dealer deactivated cases use capped goodwill refund and collection follow-up.",
      "Unreachable customer for retrieval: three contact attempts within seven days, then close claim.",
      "Off-app arrangements are not recognized. All refunds must be processed and recorded in the app.",
      "Multiple issues on one order become one ticket, summed refund amounts, and one retrieval trip.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      eyebrow="Policy"
      title="Refund Policy"
      lead="The complete LPG Go PH return/refund matrix for customers, dealers, riders, and administrators."
      toc={toc}
    >
      <section className="refund-overview">
        <article>
          <b>24h</b>
          <span>Standard dispute window after confirmed delivery</span>
        </article>
        <article>
          <b>7d</b>
          <span>Leak and safety defect extended window</span>
        </article>
        <article>
          <b>₱2</b>
          <span>Completed transaction fee, reversed on full refund</span>
        </article>
        <article>
          <b>₱300</b>
          <span>Minimum dealer wallet balance for COD orders</span>
        </article>
      </section>

      <section className="policy-section visual-policy">
        <div>
          <span className="eyebrow">Resolution model</span>
          <h2>Replacement first, refund when needed</h2>
          <p>
            LPG Go keeps money movement minimal until a complaint is validated.
            Replacement is the default; partial and full refunds follow only
            when the order shortfall or defect requires it.
          </p>
        </div>
        <div className="ladder-visual">
          {["Replacement", "Partial Refund", "Full Refund"].map((item, i) => (
            <span key={item}>
              <b>{i + 1}</b>
              {item}
            </span>
          ))}
        </div>
      </section>

      {sections.map((section) => (
        <section id={section.id} className="policy-section" key={section.id}>
          <h2>{section.title}</h2>
          <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      ))}

      <section id="money-flow" className="policy-section">
        <h2>Section 6 — Money Flow Cheat Sheet</h2>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Situation</th><th>Refund Source</th><th>Mechanism</th></tr></thead>
            <tbody>
              <tr><td>Online, before release</td><td>Pending Balance</td><td>Void hold; admin sends GCash or wallet credit</td></tr>
              <tr><td>Online, after release</td><td>Dealer wallet / future payouts</td><td>Wallet or payout deduction; admin GCash send</td></tr>
              <tr><td>COD, within window</td><td>Dealer collection or wallet</td><td>Cash-on-pickup with dual confirmation or wallet deduction</td></tr>
              <tr><td>COD, after release or window</td><td>Dealer wallet / future payouts</td><td>Wallet deduction; admin GCash send</td></tr>
              <tr><td>Dealer funds exhausted</td><td>Platform goodwill fund (capped)</td><td>Platform advance; collection case against dealer</td></tr>
            </tbody>
          </table>
        </div>
        <p><b>Golden Principle:</b> The refund is always dealer money — their deposit, pending balance, or collection. The platform is the intermediary, processor, and record-keeper.</p>
        <p><b>Transaction Fee Rules:</b> ₱2 charged on completed transactions, reversed on full refund, and not charged on cancellations before dispatch.</p>
      </section>

      <section id="wallet-and-eligibility" className="policy-section">
        <h2>Section 7 — Wallet and Eligibility</h2>
        <ol>
          <li>COD Gate: minimum wallet balance of ₱300 is required to accept COD orders.</li>
          <li>Exposure Cap: maximum open COD value equals wallet balance times 4 to 5.</li>
          <li>Negative Balance: account restricted; 48-hour top-up deadline; otherwise goodwill refund plus collection case.</li>
          <li>Ledger entry types include TOPUP, ONLINE_PAYMENT_IN, RELEASE, TXN_FEE, FEE_REVERSAL, REFUND_DEDUCT, CASH_REFUND_CONFIRMED, PAYOUT_DEDUCTION, WITHDRAWAL, ADJUSTMENT_ADMIN.</li>
          <li>Reconciliation: admin GCash balance must equal total Pending plus outstanding obligations. Daily verification.</li>
        </ol>
      </section>

      <section id="sla-targets" className="policy-section">
        <h2>Section 8 — SLA Targets</h2>
        <ul>
          <li>First response: 4 business hours; leak/safety ticket: 1 hour.</li>
          <li>Complaint validation: 24 hours from complete evidence.</li>
          <li>Replacement delivery and cash-on-pickup trip: 24 hours from validation.</li>
          <li>GCash refund send: same or next day; wallet refund credit: instant.</li>
          <li>Contested dispute resolution: 3 business days.</li>
        </ul>
      </section>

      <section id="strikes-and-fraud-guards" className="policy-section">
        <h2>Section 9 — Strikes and Fraud Guards</h2>
        <p>Dealer strikes come from validated fault complaints. Safety violations carry elevated weight and may result in immediate suspension. Customer flags include 3+ claims within 30 days, 2+ consecutive post-release claims, end-of-window filing patterns, or unjustified COD refusals.</p>
      </section>

      <section id="customer-summary" className="policy-section callout">
        <h2>Section 10 — Customer-Facing Summary</h2>
        <p>At LPG Go, you are protected: you have 24 hours after delivery to report any issue (7 days for leak or safety defects, 48 hours for underfilled tanks). For valid complaints, replacement within 24 hours is free — or if you prefer a refund, we send it to your GCash (3 to 5 business days) or LPG Go Wallet (instant), while the rider retrieves the tank. For COD orders, cash refund on pickup is available. Orders that were received in good condition cannot be returned due to change of mind. All refunds must be processed through the app — off-app arrangements are not recognized.</p>
      </section>
    </PolicyLayout>
  );
}
