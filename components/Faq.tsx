"use client";

import { useState } from "react";

const faqs: [string, string][] = [
  [
    "What is LPG Go?",
    "LPG Go is a marketplace platform that connects customers with independent LPG dealers/retailers and delivery riders. LPG Go helps facilitate store discovery, order placement, delivery coordination, payment processing, support, refunds, and replacement concerns, while LPG products are sold and fulfilled by the participating dealers/retailers.",
  ],
  [
    "How do I find a nearby LPG store?",
    "Open the LPG Go app, allow location access, and pin your delivery address. The app shows active nearby stores, and the Available filter focuses on stores within the service radius that are open. You can also scan a participating store QR code when available. If no store appears, there may be no active dealer/retailer serving that pinned area yet.",
  ],
  [
    "How do I place an order?",
    "Choose a participating store, select the LPG brand, tank size, and order type, then add the item to your cart. You can also add supported accessories when the store lists them. Before confirming, review your delivery address, payment method, product total, discounts, rider tip, and any app or payment fees shown in the checkout breakdown.",
  ],
  [
    "What is the difference between a Refill Tank and a New Tank?",
    "A Refill Tank order requires an eligible empty cylinder to be exchanged for a filled cylinder under the selected store's brand and exchange rules. A New Tank order includes the cylinder and does not require an empty cylinder exchange. Confirm the brand, size, price, and exchange requirement before ordering.",
  ],
  [
    "How can I pay?",
    "Cash on Delivery is available for applicable orders. PayMongo QR Ph or another supported online option may appear only when LPG Go has enabled it and the selected dealer/retailer is approved for that payment method. The checkout screen shows the payment options currently available for your order.",
  ],
  [
    "Are service and transaction fees fixed?",
    "No. Customer service fees, online payment fees, COD fees, dealer/retailer transaction fees, Store Service Credit (SCC) purchase fees, payout processing fees, and minimum SCC requirements may be adjusted by LPG Go through SuperAdmin settings. The customer-facing fees that apply to an order are shown in the app before you confirm.",
  ],
  [
    "What is Store Service Credit (SCC)?",
    "Store Service Credit (SCC) is a store-side service ledger used for eligible platform charges, holds, reversals, and other approved adjustments. It is not a customer bank account, savings account, electronic money account, or stored-value payment product. Available SCC and applicable requirements are shown to the dealer/retailer in the app.",
  ],
  [
    "Can I use vouchers, VIP pricing, or rider tips?",
    "Yes, when available. A voucher must be valid, unused, and linked to the selected store before it can reduce your total. VIP pricing may apply when a participating dealer/retailer has marked your account as eligible for store-specific discounts. Rider tips are optional, shown before confirmation, and intended for the assigned rider.",
  ],
  [
    "Can I track my delivery?",
    "When a rider has been assigned and location access is active, the app may show available rider location and order status updates. GPS, mobile data, device settings, and local signal can affect accuracy or delay updates. Always rely on the order timeline and contact options for current delivery coordination.",
  ],
  [
    "How long does delivery take?",
    "Delivery time depends on store distance, stock, rider availability, traffic, weather, and local conditions. Any estimate is informational and is not a guaranteed arrival time. Keep your phone available and make sure an authorized person can receive, inspect, and pay for the order.",
  ],
  [
    "How are dealers/retailers reviewed?",
    "Dealer/retailer applicants must submit required business documents for review, such as a City Hall Permit, DTI registration, DOE License to Operate, and valid identification. Brand authority may also be required before a store can list certain LPG brands. LPG Go onboarding review is not a government license or a guarantee of every product or transaction.",
  ],
  [
    "What should I check when the cylinder arrives?",
    "Before accepting the delivery, confirm the brand, size, order type, seal, cylinder condition, visible markings, and amount due. Do not accept a leaking, badly damaged, heavily rusted, visibly unsafe, or incorrect cylinder. Keep the delivery evidence and report concerns through the order screen.",
  ],
  [
    "How do I cancel or reschedule an order?",
    "Available actions depend on the order status. A customer may cancel before acceptance when the app allows it. After acceptance or pickup, cancellation, rescheduling, or failed-delivery requests may require a reason, customer notification, time and location evidence, and dealer/retailer or admin review. Off-app arrangements may not be reflected in the order record.",
  ],
  [
    "What protects customers, riders, and stores from false delivery claims?",
    "The app may use status history, GPS data, timestamps, pickup and delivery photos, customer and rider communications, payment records, and account patterns as evidence. A failed-delivery or completed-delivery claim can be placed under review when records conflict. No party automatically wins a dispute without supporting evidence.",
  ],
  [
    "When can I request a return, refund, or replacement?",
    "Eligible orders may show Return and Full Refund for 30 minutes after the order is marked Delivered and Return and Replace for one hour after the order is marked Completed. The available button, reason, evidence requirements, and remedy depend on order status and app configuration. After a button expires, use Report or Dispute from the order screen. Safety concerns should still be reported immediately.",
  ],
  [
    "How are refund and replacement cases decided?",
    "Submit the issue and clear supporting evidence through the order screen. The participating dealer/retailer and LPG Go admin team may review the order timeline, photos, location data, communications, product condition, and payment record. An approved remedy may include replacement, partial adjustment, or full refund, subject to cylinder retrieval when required and applicable payment processing times.",
  ],
  [
    "What should I do if I smell gas or suspect a leak?",
    "Do not ignite a flame or operate electrical switches. If it is safe, close the regulator, ventilate the area, move people away, and contact emergency responders for an uncontrolled leak or fire. Report the safety issue through the app as soon as it is safe to do so. A safety report can still be reviewed even if a normal return button has expired.",
  ],
  [
    "How do I become a dealer/retailer or rider?",
    "Register in the app as a dealer/retailer, set up your store, upload the required documents, request brand authorization when needed, list products, and wait for admin approval. Riders are managed by participating dealers/retailers, so rider access is usually created through the store account that will handle the deliveries.",
  ],
  [
    "How is my personal information used?",
    "LPG Go shares only the information needed to process and fulfill your order, such as your name, contact details, delivery address, order details, and support evidence when applicable. Relevant details may be shared with the selected dealer/retailer, assigned rider, payment provider, and support or admin team. LPG Go does not sell personal information, and device permissions can be managed in your settings.",
  ],
  [
    "How do I delete my account or exercise a privacy right?",
    "Use any account-deletion or privacy control available in the app, or contact LPG Go using the details in the Privacy Policy. Some transaction, safety, fraud-prevention, tax, dispute, or legal records may be retained for the period required or permitted by law even after account access is removed.",
  ],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div className="center" style={{ marginBottom: 44 }}>
          <span className="eyebrow reveal">Help center</span>
          <h2 className="title reveal d1">Frequently asked questions</h2>
          <p className="lead reveal d2">
            Important information about marketplace orders, delivery, payments,
            safety, returns, support, and privacy.
          </p>
        </div>

        <div className="faq">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className={`qa${isOpen ? " open" : ""}`}>
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
                    aria-hidden="true"
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
          <p>Need help with a specific order or account?</p>
          <a className="btn" href="#contact">
            Contact our team
          </a>
        </div>
      </div>
    </section>
  );
}
