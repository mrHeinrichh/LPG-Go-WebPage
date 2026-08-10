"use client";

import { useState } from "react";

const faqs: [string, string][] = [
  [
    "What is LPG Go?",
    "LPG Go is a marketplace platform that connects customers with independent LPG merchants (participating dealers/retailers) and delivery riders. LPG Go helps facilitate store discovery, order placement, delivery coordination, available payment methods, support, refunds, and replacement concerns, while LPG products are sold and fulfilled by the participating merchants.",
  ],
  [
    "How do I find a nearby LPG store?",
    "Open the LPG Go app, allow location access, and pin your delivery address. The app shows active nearby stores, and the Available filter focuses on stores within the service radius that are open. You can also scan a participating store QR code when available. If no store appears, there may be no active merchant serving that pinned area yet.",
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
    "Cash on Delivery is available for applicable orders. PayMongo QR Ph or another supported online option appears only when enabled for the selected merchant. A Credit Order appears only when that merchant has granted the customer permission. The checkout screen is the controlling display of methods available for that order.",
  ],
  [
    "Are service and transaction fees fixed?",
    "No. Customer service fees, online payment fees, COD fees, merchant transaction fees, SCC purchase or unused-credit refund processing fees, payout processing fees, and minimum SCC requirements may be adjusted through authorized administration settings. Customer-facing charges that apply to an order are shown before confirmation.",
  ],
  [
    "What is Store Service Credit (SCC)?",
    "Store Service Credit (SCC) is a limited merchant-side service ledger used for eligible platform charges, reservations, reversals, and approved adjustments. It is displayed without a peso symbol and is not a customer fund, bank account, escrow, deposit, remittance service, electronic money account, or general-purpose stored-value payment product. SCC changes are recorded through controlled server-side ledger entries.",
  ],
  [
    "Why is SCC reserved when a merchant approves an order?",
    "The applicable merchant platform fee is reserved at approval so the accepted order has sufficient service credit assigned to it. Delivery is only a backstop for an older order without a valid reservation. The reservation is finalized after completion and the configured replacement window, or reversed when an eligible cancellation or full return/refund requires it.",
  ],
  [
    "Can a merchant request a refund of unused SCC?",
    "When the feature is available, a merchant may request an admin-reviewed refund of eligible unused SCC. The requested credits are reserved while the request is reviewed; an approved request may be subject to the processing fee disclosed in the app, while a rejected request restores the reserved credits. This is an unused-service-credit refund process, not a transferable cashout or customer e-wallet feature.",
  ],
  [
    "What is a store-approved Credit Order?",
    "A Credit Order is available only when the selected merchant has granted that customer store-specific permission. No cash is collected at delivery, and the app records the order as On Credit/Open for merchant tracking. The merchant, not LPG Go, decides eligibility and remains responsible for any separate collection arrangement. LPG Go is not the lender, guarantor, or collection agent unless a future feature expressly says otherwise.",
  ],
  [
    "Can I use vouchers, VIP pricing, or rider tips?",
    "Yes, when available. A voucher must be valid, unused, and linked to the selected store before it can reduce your total. VIP pricing may apply when a participating merchant has marked your account as eligible for store-specific discounts. Rider tips are optional, shown before confirmation, and intended for the assigned rider.",
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
    "How are merchants reviewed?",
    "Merchant applicants must submit required business and identity documents for review, which may include an LGU business permit, DTI or SEC registration, DOE License to Operate for the relevant activity and site, fire-safety compliance, and authority to sell a listed brand where applicable. LPG Go onboarding review is not a government license, endorsement, or guarantee of every product or transaction.",
  ],
  [
    "What should I check when the cylinder arrives?",
    "Before accepting the delivery, confirm the brand, size, order type, seal, cylinder condition, visible markings, and amount due. Do not accept a leaking, badly damaged, heavily rusted, visibly unsafe, or incorrect cylinder. Keep the delivery evidence and report concerns through the order screen.",
  ],
  [
    "How do I cancel or reschedule an order?",
    "Available actions depend on the order status. A customer may cancel before acceptance when the app allows it. After acceptance or pickup, cancellation, rescheduling, or failed-delivery requests may require a reason, customer notification, time and location evidence, and merchant or admin review. Off-app arrangements may not be reflected in the order record.",
  ],
  [
    "What protects customers, riders, and stores from false delivery claims?",
    "The app may use status history, GPS data, timestamps, pickup and delivery photos, customer and rider communications, payment records, and account patterns as evidence. A failed-delivery or completed-delivery claim can be placed under review when records conflict. No party automatically wins a dispute without supporting evidence.",
  ],
  [
    "What happens when delivery cannot be completed after pickup?",
    "The rider or merchant must use the available failed-delivery or review flow and provide the required reason and evidence. An authorized reviewer may cancel the order when justified or return it to Waiting so another eligible rider can be assigned. The final courier identity is preserved in the completed order record, and off-app delivery or collection does not override the app timeline without review.",
  ],
  [
    "When can I request a return, refund, or replacement?",
    "Eligible orders may show Return and Full Refund for 30 minutes after the order is marked Delivered and Return and Replace for one hour after the order is marked Completed. The available button, reason, evidence requirements, and remedy depend on order status and app configuration. After a button expires, use Report or Dispute from the order screen. Safety concerns should still be reported immediately.",
  ],
  [
    "How are refund and replacement cases decided?",
    "Submit the issue and clear supporting evidence through the order screen. The participating merchant and LPG Go admin team may review the order timeline, photos, location data, communications, product condition, and payment record. An approved remedy may include replacement, partial adjustment, or full refund, subject to cylinder retrieval when required and applicable payment processing times.",
  ],
  [
    "Can I return a borrowed cylinder without placing a new order?",
    "When an eligible cylinder balance is recorded, the customer may create a cylinder-return request without buying another product. The return is tied to the original merchant and address, requires the in-app return photo and requested details, and remains pending until the merchant physically receives and approves it. Submitting a photo does not by itself prove final receipt or close the cylinder record.",
  ],
  [
    "What should I do if I smell gas or suspect a leak?",
    "Do not ignite a flame or operate electrical switches. If it is safe, close the regulator, ventilate the area, move people away, and contact emergency responders for an uncontrolled leak or fire. Report the safety issue through the app as soon as it is safe to do so. A safety report can still be reviewed even if a normal return button has expired.",
  ],
  [
    "How do I become a merchant or rider?",
    "Register as a merchant, set up the store, upload the required documents, request brand authorization when needed, list products, and wait for admin approval. Riders are managed by participating merchants, so rider access is usually created through the store account that will handle deliveries. Merchant plans and feature permissions shown in the app may affect available tools.",
  ],
  [
    "How is my personal information used?",
    "LPG Go shares only the information reasonably needed to process and fulfill your order, such as your name, contact details, delivery address, order details, and support evidence when applicable. Relevant details may be shared with the selected merchant, assigned or re-dispatched rider, payment provider, and support or admin team. LPG Go does not sell personal information, and device permissions can be managed in your settings.",
  ],
  [
    "How long does LPG Go keep records?",
    "LPG Go keeps records only as long as needed for the service, legal compliance, tax and accounting records, SCC ledger proof, Credit Orders, cylinder custody, safety reports, refunds, disputes, fraud prevention, and legal claims. When a record is no longer needed, it may be deleted, anonymized, archived, restricted, or securely disposed of. Account deletion may not remove active orders, unpaid obligations, open disputes, safety records, or records independently kept by a merchant or payment provider.",
  ],
  [
    "How do I delete my account or exercise a privacy right?",
    "Use any account-deletion or privacy control available in the app, or contact LPG Go using the details in the Privacy Policy. Some transaction, safety, fraud-prevention, tax, dispute, or legal records may be retained for the period required or permitted by law even after account access is removed.",
  ],
];

export default function Faq() {
  const [open, setOpen] = useState<string | null>(faqs[0][0]);

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
          {faqs.map(([q, a]) => {
            const isOpen = open === q;
            return (
              <div key={q} className={`qa${isOpen ? " open" : ""}`}>
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : q)}
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
