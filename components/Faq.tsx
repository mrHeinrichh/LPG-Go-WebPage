"use client";

import { useState } from "react";

const faqs: [string, string][] = [
  [
    "How do I place an order?",
    "Open the app, choose a nearby store, then pick your LPG brand, tank size, and order type (Refill Tank or New Tank). Add it to your cart and check out — it only takes a few taps.",
  ],
  [
    "What is the difference between a Refill and a New Tank?",
    "A Refill swaps your empty cylinder for a filled one of the same brand. A New Tank gives you a brand-new filled cylinder — ideal if you don't have an empty to exchange.",
  ],
  [
    "How can I pay?",
    "You can pay Cash on Delivery, or pay securely online using QR Ph. Online payments include a small convenience fee that's always shown before you confirm.",
  ],
  [
    "Can I track my delivery?",
    "Yes. Once a rider is assigned you can follow them on a live map, and you'll get status updates through the order timeline until your gas arrives.",
  ],
  [
    "Is LPG Go available in my area?",
    "We're live in select cities and expanding. Open the app to see verified dealers near your location — if stores appear, you're covered.",
  ],
  [
    "Are the dealers legitimate?",
    "Every dealer is reviewed by our team and must submit valid business permits and licenses before they can sell, and certify that their documents are accurate.",
  ],
  [
    "How do I become a dealer or rider?",
    "Register in the app as a dealer to set up your store and add riders, then wait for admin approval. You can also email us and our team will guide you through verification.",
  ],
  [
    "How do I cancel an order?",
    "You can cancel before a dealer accepts the order. Once a rider has been dispatched, cancellation may no longer be possible.",
  ],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div className="center" style={{ marginBottom: 44 }}>
          <span className="eyebrow reveal">Help center</span>
          <h2 className="title reveal d1">Frequently asked questions</h2>
        </div>
        <div className="faq">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div
                key={q}
                className={`qa reveal${i % 2 ? " d1" : ""}${isOpen ? " open" : ""}`}
              >
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{q}</span>
                  <svg
                    className="chev svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="ans">
                  <p style={{ paddingTop: 2 }}>{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
