import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Safety Manual | LPG Go PH",
  description:
    "LPG Go PH safety and precaution manual for customers, riders, and dealers/retailers.",
};

const consumerLessons = [
  {
    title: "Safe Tank Location at Home",
    image: "/illustrations/tank-location.svg",
    doItems: ["Keep upright", "Use a ventilated area", "Keep away from heat"],
    body: "Do not place LPG in closed cabinets, basements, bathrooms, bedrooms, or on its side. LPG is heavier than air and accumulates near the floor.",
  },
  {
    title: "Regulator and Hose Check",
    image: "/illustrations/regulator-hose.svg",
    doItems: ["Inspect hose cracks", "Use screw clamps", "Run bubble test"],
    body: "Check the regulator, hose, and joints before use. Replace old or cracked hoses every 2 to 4 years.",
  },
  {
    title: "Proper Ignition Sequence",
    image: "/illustrations/ignition-sequence.svg",
    doItems: ["Light first", "Open gas second", "Close gas if it fails"],
    body: "Opening gas too long before ignition can cause accumulation and flash fire. A healthy flame should be blue.",
  },
  {
    title: "Weekly Safety Check",
    image: "/illustrations/weekly-check.svg",
    doItems: ["Bubble test", "Smell check", "Valve check"],
    body: "LPG is scented with ethyl mercaptan, which smells like rotten eggs, so leaks can be detected early.",
  },
];

const operationalCards = [
  {
    title: "Delivery Inspection",
    image: "/illustrations/delivery-inspection.svg",
    body: "Inspect seal, brand, size, rust, dents, requalification date, valve, and QR verification while the rider is still present.",
  },
  {
    title: "Data Privacy",
    image: "/illustrations/data-privacy.svg",
    body: "We collect operational order data, never GCash PINs, passwords, card numbers, or banking credentials.",
  },
];

const roleManuals = [
  {
    title: "Customer Manual",
    image: "/illustrations/emergency-kit.svg",
    parts: ["Setup and installation", "While in use", "Weekly checks", "Home emergency kit"],
  },
  {
    title: "Rider Manual",
    image: "/illustrations/rider-ppe.svg",
    parts: ["Pre-delivery checks", "On the road", "Doorstep handover"],
  },
  {
    title: "Dealer/Retailer Manual",
    image: "/illustrations/dealer-storage.svg",
    parts: ["Legal compliance", "Facility requirements", "Daily operations", "Store emergency response"],
  },
];

const rights = [
  "RA 11592 - LPG Industry Regulation Act",
  "RA 7394 - Consumer Act of the Philippines",
  "RA 10173 - Data Privacy Act",
  "RA 9514 - Fire Code of the Philippines",
];

export default function SafetyPage() {
  return (
    <PolicyLayout
      eyebrow="Safety"
      title="Safety Manual"
      lead="A practical LPG safety center for households, riders, and dealers/retailers, with emergency guidance and operational checklists."
    >
      <section className="safety-hero-panel">
        <div>
          <span className="eyebrow">Priority response</span>
          <h2>Smell gas? Use the emergency flow first.</h2>
          <p>
            Leak reports are prioritized for review. Keep the cylinder upright,
            ventilate, and move people away before filing a report, and contact
            emergency responders first when the leak is uncontrolled.
          </p>
          <a className="btn" href="/safety/emergency">
            Open Emergency Procedure
          </a>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/illustrations/emergency-leak.svg" alt="Gas leak emergency ventilation" />
      </section>

      <section className="policy-section">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow">Tab 1</span>
            <h2>Safety & Precaution</h2>
          </div>
          <span className="status-chip danger">Safety first</span>
        </div>
        <div className="safety-card-grid">
          {consumerLessons.map((lesson) => (
            <article className="visual-card" key={lesson.title}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lesson.image} alt="" />
              <h3>{lesson.title}</h3>
              <p>{lesson.body}</p>
              <div className="mini-checks">
                {lesson.doItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="safety-card-grid two">
          {operationalCards.map((card) => (
            <article className="visual-card horizontal" key={card.title}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={card.image} alt="" />
              <div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </article>
          ))}
        </div>

        <h3>Your Rights - Legal Basis</h3>
        <div className="rights-grid">
          {rights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="report-band">
          <b>Report a Safety Issue</b>
          <span>
            In-app: Orders &gt; Report a Problem &gt; Leaking or gas smell.
            Regular complaints use the standard Report a Problem flow.
          </span>
        </div>
      </section>

      <section className="policy-section">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow">Tab 2</span>
            <h2>Per-Role Manual</h2>
          </div>
          <span className="status-chip">Operational guide</span>
        </div>
        <p className="info-alert">Select your role for a targeted operational safety guide.</p>
        <div className="role-card-grid">
          {roleManuals.map((manual) => (
            <article className="role-card" key={manual.title}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={manual.image} alt="" />
              <h3>{manual.title}</h3>
              <ul>
                {manual.parts.map((part) => (
                  <li key={part}>{part}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PolicyLayout>
  );
}
