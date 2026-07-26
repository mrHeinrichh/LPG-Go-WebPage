import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Consumer Rights | LPG Go PH",
  description: "Customer rights and legal basis for LPG Go PH under Philippine law.",
};

const laws = [
  {
    title: "RA 11592 - LPG Industry Regulation Act",
    body: "Sets safety and compliance standards for LPG industry participants, including proper handling and qualified LPG containers.",
    href: "https://www.officialgazette.gov.ph/",
  },
  {
    title: "RA 7394 - Consumer Act of the Philippines",
    body: "Protects consumers against deceptive, unfair, and unconscionable sales acts and recognizes remedies for defective products.",
    href: "https://www.officialgazette.gov.ph/",
  },
  {
    title: "RA 10173 - Data Privacy Act",
    body: "Grants data subject rights including notice, access, correction, blocking/deletion, objection, and complaint to the NPC.",
    href: "https://privacy.gov.ph/data-privacy-act/",
  },
  {
    title: "RA 9514 - Fire Code of the Philippines",
    body: "Provides fire safety standards relevant to LPG storage, fire prevention, and emergency readiness.",
    href: "https://bfp.gov.ph/",
  },
];

export default function ConsumerRightsPage() {
  return (
    <PolicyLayout
      eyebrow="Legal basis"
      title="Consumer Rights"
      lead="LPG Go PH policy is designed around Philippine consumer, LPG, privacy, and fire-safety laws."
    >
      <div className="lesson-grid">
        {laws.map((law) => (
          <article className="lesson-card" key={law.title}>
            <h2>{law.title}</h2>
            <p>{law.body}</p>
            <a href={law.href} target="_blank" rel="noopener noreferrer">Official resource</a>
          </article>
        ))}
      </div>
    </PolicyLayout>
  );
}
