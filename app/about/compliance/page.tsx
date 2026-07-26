import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Compliance | LPG Go PH",
  description: "LPG Go PH compliance posture for regulators, partners, and enterprise customers.",
};

export default function CompliancePage() {
  return (
    <PolicyLayout
      eyebrow="Compliance"
      title="Platform Compliance"
      lead="A regulator and partner-facing summary of LPG Go PH's operational, safety, dealer/retailer, and privacy posture."
    >
      <section className="policy-section">
        <h2>Trademark Filing</h2>
        <p>Trademark App. No. 4/2026/00501327 filed with IPOPHIL.</p>
      </section>
      <section className="policy-section">
        <h2>Applicable Laws</h2>
        <ul>
          <li>RA 11592: dealer/retailer onboarding and LPG handling policies reflect applicable LPG industry requirements.</li>
          <li>RA 7394: defective product complaints are covered; no blanket No Return, No Exchange policy is applied.</li>
          <li>RA 10173: data minimization, role-based access, and DPO contact are provided.</li>
          <li>RA 9514: safety-first handling, emergency guidance, and BFP-related dealer/retailer requirements are documented.</li>
        </ul>
      </section>
      <section className="policy-section">
        <h2>Dealer/Retailer Verification</h2>
        <p>Dealers/retailers must submit required business and safety documentation, including a valid DOE License to Operate and DOE registration or Authority to Sell for the LPG trademarks or trade names offered, where applicable, before operating on LPG Go.</p>
      </section>
      <section className="policy-section">
        <h2>Safety-First Commitment</h2>
        <p>Leak and safety complaints are prioritized for review. A retrieved cylinder involved in a validated safety concern must not be returned to service without lawful inspection and clearance.</p>
      </section>
      <section className="policy-section">
        <h2>Data Protection Officer</h2>
        <p><a href="mailto:dpo@lpggo.ph">dpo@lpggo.ph</a></p>
      </section>
    </PolicyLayout>
  );
}
