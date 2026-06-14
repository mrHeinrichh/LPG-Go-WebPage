"use client";

import { useState } from "react";

const faqs: [string, string][] = [
  [
    "How do I place an order?",
    "Open the LPG Go app, allow location access, and pick a verified dealer near you. Choose your LPG brand, tank size, and order type — Refill Tank or New Tank — add it to your cart, then check out. The whole flow takes just a few taps, and you'll always see the price and any fees before you confirm.",
  ],
  [
    "What's the difference between a Refill and a New Tank?",
    "A Refill swaps your empty cylinder for a filled one of the same brand, so you only pay for the gas. A New Tank gives you a brand-new filled cylinder including the steel tank itself — choose this if you don't have an empty to exchange or you want a spare tank on hand.",
  ],
  [
    "How can I pay?",
    "You can pay Cash on Delivery (COD) when the rider arrives, or pay online instantly using QR Ph from any participating bank or e-wallet. Online payments may include a small convenience fee, which is always shown at checkout before you confirm.",
  ],
  [
    "Are there any delivery or service fees?",
    "Prices and any delivery fee are set by each dealer and displayed before you place the order — no surprises. Online (QR Ph) payments may carry a small convenience fee from the payment provider, also shown upfront. Have a voucher? Apply it at checkout to lower your total.",
  ],
  [
    "Can I track my delivery in real time?",
    "Yes. Once a dealer assigns a rider, you can follow them on a live map, and the order timeline keeps you posted at every step — accepted, picked up, on the way, and delivered. The rider stays traceable even when you switch between app screens.",
  ],
  [
    "How long does delivery take?",
    "Delivery time depends on the dealer's distance, current demand, and local traffic and weather. You'll get an estimate after ordering, and the live map plus status updates show exactly where your gas is. Please make sure someone is available at the address to receive and pay for the order.",
  ],
  [
    "Is LPG Go available in my area?",
    "We're live in select cities and steadily expanding. Open the app to see verified dealers near your pinned location — if stores appear, you're covered. If none show up yet, your area isn't served just yet, but we're adding new dealers regularly.",
  ],
  [
    "Are the dealers legitimate?",
    "Every dealer is reviewed by our team and must submit valid business permits and licenses before they can sell, and certify that their documents are accurate. You can also check ratings and reviews from other customers to choose a store you trust.",
  ],
  [
    "Is it safe, and how is the tank handled?",
    "Dealers and riders are required to handle LPG safely and follow applicable regulations. Tanks come sealed, and deliveries are photo-confirmed on arrival so you have a record. Always check the seal and the connection before use, and report any concern through Support Feedback in the app.",
  ],
  [
    "Can I use vouchers or discounts?",
    "Yes. If you have a valid voucher, select or enter it at checkout and the discount is applied to your total before you pay. Keep an eye on the app for promos from LPG Go and from participating dealers.",
  ],
  [
    "How do I cancel an order?",
    "You can cancel an order before a dealer accepts it, right from the order screen. Once a rider has been dispatched, cancellation may no longer be possible — if you run into an issue, contact the dealer or reach us through Support Feedback.",
  ],
  [
    "How do refunds work?",
    "For eligible orders paid online, refunds are handled in coordination with the dealer and our payment partner — reach out via Support Feedback with your order details and we'll help sort it out. Cash on Delivery orders are simply not charged if they don't push through.",
  ],
  [
    "How do I become a dealer or rider?",
    "Register in the app as a dealer to set up your store, list products, and add your own riders, then wait for admin approval. Prefer some guidance? Email us and our team will walk you through verification and getting listed.",
  ],
  [
    "How is my personal information protected?",
    "We only share what's needed to complete your order — your name, address, and contact number go to the dealer and rider fulfilling it. We use trusted providers for hosting and payments, never sell your data, and you can review the full details in our Privacy Policy. You can disable location permissions anytime in your device settings.",
  ],
];

export default function Faq() {
  // Open the first item by default so the section never looks empty.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div className="center" style={{ marginBottom: 44 }}>
          <span className="eyebrow reveal">Help center</span>
          <h2 className="title reveal d1">Frequently asked questions</h2>
          <p className="lead reveal d2">
            Everything you need to know about ordering cooking gas on LPG Go —
            from payments and delivery to safety, refunds, and privacy. Tap any
            question to expand it. Can&apos;t find your answer? Our team is just
            a message away in the Contact section below.
          </p>
        </div>

        <div className="faq">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div
                key={q}
                // No scroll-reveal here: accordion items must always be visible,
                // including when the app deep-links straight to #faq.
                className={`qa${isOpen ? " open" : ""}`}
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

        <div className="faq-foot reveal">
          <p>Still have a question we didn&apos;t cover?</p>
          <a className="btn" href="#contact">
            Contact our team
          </a>
        </div>
      </div>
    </section>
  );
}
