import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Emergency Procedure | LPG Go PH",
  description: "Offline-ready LPG Go PH gas leak and fire emergency procedure.",
};

const leakSteps = [
  "DO NOT ignite any flame, switch, or spark — including phone flashlights.",
  "Close the valve or regulator immediately. Turn it clockwise firmly.",
  "Open doors and windows. LPG is heavier than air — sweep it out at floor level if possible.",
  "Move the tank to open air if it is safe to do so. Keep it upright and away from people and flames.",
  "Evacuate the house with everyone inside. Do not return until the smell has cleared.",
  "Report in the LPG Go app using Leaking or gas smell — this is a 1-hour priority response.",
  "Call 911 or the Bureau of Fire Protection if the leak is large or uncontrolled.",
];

const fireSteps = [
  "Close the valve if you can still approach the tank safely.",
  "If you cannot approach: evacuate and call 911 or BFP.",
  "Use a dry chemical ABC fire extinguisher only if it is small and safe. Do not use water on LPG or grease fire.",
  "If the tank itself is heating up, move away because of BLEVE risk.",
];

export default function EmergencyPage() {
  return (
    <PolicyLayout
      eyebrow="Danger"
      title="If you smell gas or suspect a leak"
      lead="Follow these steps calmly. If the leak is strong or uncontrolled, evacuate and call emergency responders."
    >
      <section className="policy-section emergency-page">
        <h2>Gas Leak Procedure</h2>
        <ol>{leakSteps.map((step) => <li key={step}>{step}</li>)}</ol>
        <h2>If There Is a Fire</h2>
        <ol className="fire-list">{fireSteps.map((step) => <li key={step}>{step}</li>)}</ol>
        <h2>Emergency Hotlines</h2>
        <div className="hotline-grid">
          <a href="tel:911">911</a>
          <a href="tel:911">Bureau of Fire Protection</a>
          <a href="mailto:safety@lpggo.ph">LPG Go Safety Hotline</a>
        </div>
      </section>
    </PolicyLayout>
  );
}
