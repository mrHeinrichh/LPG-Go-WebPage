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
      lead="A regulator and partner-facing summary of LPG Go PH's operational, safety, dealer, and privacy posture."
    >
      <section className="policy-section">
        <h2>Trademark Filing</h2>
        <p>Trademark App. No. 4/2026/00501327 filed with IPOPHIL.</p>
      </section>
      <section className="policy-section">
        <h2>Applicable Laws</h2>
        <ul>
          <li>RA 11592: dealer onboarding and LPG handling policy align with LPG industry regulation principles.</li>
          <li>RA 7394: defective product complaints are covered; no blanket No Return, No Exchange policy is applied.</li>
          <li>RA 10173: data minimization, role-based access, and DPO contact are provided.</li>
          <li>RA 9514: safety-first handling, emergency guidance, and BFP-related dealer requirements are documented.</li>
        </ul>
      </section>
      <section className="policy-section">
        <h2>Dealer Verification</h2>
        <p>Dealers must submit required business and safety documentation, including DOE Standards Compliance Certificate where applicable, before operating on LPG Go.</p>
      </section>
      <section className="policy-section">
        <h2>Safety-First Commitment</h2>
        <p>Leak and safety complaints receive a 1-hour priority first response target. Defective retrieved tanks are not re-deployed.</p>
      </section>
      <section className="policy-section">
        <h2>Data Protection Officer</h2>
        <p><a href="mailto:dpo@lpggo.ph">dpo@lpggo.ph</a></p>
      </section>
    </PolicyLayout>
  );
}
