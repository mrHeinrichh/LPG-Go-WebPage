import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Return, Replacement, and Refund Policy | LPG Go PH",
  description:
    "LPG Go PH policy for cancellations, returns, replacements, refunds, evidence review, configurable fees, and Store Service Credit.",
};

const toc = [
  "Overview",
  "Legal Basis",
  "Platform Role",
  "Fees and Amounts",
  "Eligible Issues",
  "Cancellations",
  "Return Windows",
  "Submitting a Request",
  "Review and Remedies",
  "Refund Processing",
  "Store Service Credit",
  "Evidence and Abuse",
  "Service Targets",
].map((label) => ({
  label,
  href: `#${label.toLowerCase().replaceAll(" ", "-")}`,
}));

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      eyebrow="Policy"
      title="Return, Replacement, and Refund Policy"
      lead="How LPG Go handles eligible cancellations, product concerns, failed deliveries, returns, replacements, and refunds for marketplace orders."
      toc={toc}
    >
      <p className="updated">Effective and last updated: July 26, 2026</p>

      <section id="overview" className="refund-overview">
        <article>
          <b>30 min</b>
          <span>Return and Full Refund action after Delivered</span>
        </article>
        <article>
          <b>1 hour</b>
          <span>Return and Replace action after Completed</span>
        </article>
        <article>
          <b>24/7</b>
          <span>Safety concerns may still be reported after a button expires</span>
        </article>
        <article>
          <b>Live fees</b>
          <span>Applicable configurable charges are shown in the app</span>
        </article>
      </section>

      <section className="policy-section callout">
        <h2>Important Notice</h2>
        <p>
          LPG Go is a marketplace and coordination platform. Participating
          dealers/retailers sell and fulfill LPG products. This policy explains
          the app process and does not remove any non-waivable right or remedy
          available under Philippine law. A visible return, replacement, or
          dispute button permits a request; it does not automatically approve a
          claim.
        </p>
      </section>

      <section id="legal-basis" className="policy-section">
        <h2>1. Legal Basis and Fair Application</h2>
        <p>
          This policy is intended to operate consistently with the Consumer Act
          of the Philippines, applicable DTI rules and guidance, the LPG
          Industry Regulation Act, the Data Privacy Act, and other mandatory
          Philippine laws. LPG Go does not apply a blanket &quot;No Return, No
          Exchange&quot; rule to defective, unsafe, misrepresented, or
          incorrectly supplied products.
        </p>
        <p>
          Remedies are assessed according to the facts, available evidence,
          product condition, payment record, order status, responsibility of the
          parties, and applicable law. Nothing in this policy guarantees a
          particular outcome before review.
        </p>
      </section>

      <section id="platform-role" className="policy-section">
        <h2>2. Platform Role and Responsible Seller</h2>
        <p>
          The participating dealer/retailer is the seller and fulfiller of the
          LPG product. The dealer/retailer remains responsible for authenticity,
          lawful source, correct weight, cylinder condition, seals, stock,
          pricing, receipts, delivery fulfillment, product warranty, and
          after-sales obligations. Riders are responsible for lawful and safe
          handling, accurate status updates, and required delivery evidence.
        </p>
        <p>
          LPG Go provides the order record, workflow, communication, evidence
          collection, configurable fee logic, payment coordination when
          available, support tools, and administrative review. LPG Go may
          facilitate a remedy without becoming the LPG seller.
        </p>
      </section>

      <section id="fees-and-amounts" className="policy-section">
        <h2>3. Configurable Fees and Order Amounts</h2>
        <p>
          Product prices and delivery charges may vary by dealer/retailer,
          brand, cylinder size, order type, stock, location, and promotion.
          Customer service fees, COD fees, supported online payment fees,
          dealer/retailer transaction fees, SCC purchase fees, payout charges,
          and minimum SCC requirements are configurable and may change through
          authorized SuperAdmin settings.
        </p>
        <p>
          The app must display the customer-facing subtotal, discounts,
          applicable fees, optional rider tip, and total amount due before the
          customer confirms an order. A fee displayed for one order does not
          promise the same fee for a later order.
        </p>
      </section>

      <section id="eligible-issues" className="policy-section">
        <h2>4. Issues That May Qualify</h2>
        <ul>
          <li>Wrong LPG brand, cylinder size, order type, or listed item.</li>
          <li>Missing paid product or accessory.</li>
          <li>Broken or missing seal, leakage, unsafe condition, serious rust, visible damage, or another substantiated defect.</li>
          <li>Substantiated underweight or underfilled concern.</li>
          <li>Amount collected exceeds the amount due shown in the app.</li>
          <li>Paid order not delivered, or a disputed completion or failed-delivery record.</li>
          <li>Another issue for which Philippine law requires a remedy.</li>
        </ul>
        <p>
          Change of mind, selecting the wrong product despite clear listing
          information, ordinary cosmetic wear that does not affect safety, or
          damage caused after delivery may be denied unless the
          dealer/retailer voluntarily grants a remedy or applicable law requires
          one.
        </p>
      </section>

      <section id="cancellations" className="policy-section">
        <h2>5. Cancellation and Failed Delivery</h2>
        <p>
          A customer may cancel before store acceptance when the action is
          available in the app. After acceptance, rider assignment, or pickup,
          cancellation and rescheduling depend on the order status and may
          require a reason, notice to the other party, and review of actual
          delivery costs.
        </p>
        <p>
          After pickup, a rider or dealer/retailer may not use a reschedule or
          failed-delivery status merely to bypass the recorded transaction.
          Likewise, a customer may not deny a completed delivery or falsely
          claim absence. The app may require GPS, timestamp, photo, contact
          attempts, status history, and admin review when the parties disagree.
        </p>
      </section>

      <section id="return-windows" className="policy-section">
        <h2>6. In-App Return and Replacement Windows</h2>
        <ol>
          <li>
            <b>Return and Full Refund:</b> an eligible action may appear for 30
            minutes after an order is marked Delivered.
          </li>
          <li>
            <b>Return and Replace:</b> an eligible action may appear for one
            hour after an order is marked Completed.
          </li>
          <li>
            <b>After expiration:</b> the customer may use Report or Dispute from
            the order screen. Expiration of a convenience button does not
            extinguish a mandatory legal right or prevent review of a safety
            issue.
          </li>
        </ol>
        <p>
          These app windows are measured using the platform timestamp. They may
          be affected by order status corrections, app configuration, or a
          documented system incident. Customers should report visible issues
          before using or consuming the product whenever practical.
        </p>
      </section>

      <section id="submitting-a-request" className="policy-section">
        <h2>7. How to Submit a Request</h2>
        <ol>
          <li>Open the affected order and select the available return, replacement, report, or dispute action.</li>
          <li>Select an accurate reason and describe what happened.</li>
          <li>Upload clear photos, video, receipts, weight records, or other requested evidence.</li>
          <li>Keep the cylinder, seal, accessories, and packaging in substantially the same condition, except where handling is necessary for immediate safety.</li>
          <li>Remain reasonably available for contact, inspection, pickup, replacement, or refund confirmation.</li>
        </ol>
        <p>
          Requests and settlements should remain inside the app. LPG Go may be
          unable to verify or enforce an off-app cash arrangement, private chat,
          direct delivery, or unrecorded product exchange.
        </p>
      </section>

      <section id="review-and-remedies" className="policy-section">
        <h2>8. Review and Available Remedies</h2>
        <p>
          The dealer/retailer and authorized LPG Go administrators may review
          the order record, listing, status history, GPS data, timestamps,
          pickup and delivery photos, customer and rider communications,
          payment records, prior account patterns, product condition, and any
          response from the parties.
        </p>
        <p>
          Depending on the validated issue, a remedy may include redelivery of
          a missing item, replacement, partial price adjustment, full refund,
          cancellation, account credit that is legally permitted and expressly
          accepted, or denial with a recorded reason. Full return and refund
          normally require retrieval and identification of the affected
          cylinder. When practical, the cylinder handback and COD refund should
          occur together and be confirmed in the app.
        </p>
      </section>

      <section id="refund-processing" className="policy-section">
        <h2>9. Refund Funding and Processing</h2>
        <p>
          Approved refunds are generally charged to the responsible
          dealer/retailer through unreleased settlement, SCC deduction, future
          payout deduction, cash returned during retrieval, or another lawful
          settlement method. LPG Go may place or preserve a hold while a case is
          reviewed. A platform-funded goodwill payment, when offered, is
          discretionary and does not transfer seller responsibility to LPG Go.
        </p>
        <p>
          Online refunds are available only when the payment method is enabled
          and the payment provider supports the required action. Processing time
          depends on the provider, bank, e-wallet, verification requirements,
          weekends, holidays, and account details. COD refunds may use
          documented cash handback or an approved transfer method. LPG Go does
          not guarantee an instant refund.
        </p>
      </section>

      <section id="store-service-credit" className="policy-section">
        <h2>10. Store Service Credit (SCC)</h2>
        <p>
          SCC is a store-side service ledger used for eligible platform fees,
          fee holds, reversals, refund deductions, payout deductions, and
          authorized adjustments. SCC is not a customer account, bank deposit,
          savings product, e-wallet, electronic money, or investment, and it
          does not earn interest.
        </p>
        <p>
          The applicable dealer/retailer transaction fee may be held when an
          order is marked Delivered. It is finalized after the order is
          Completed and the one-hour replacement window has passed. An eligible
          return and full-refund action before finalization may reverse the hold.
          Amounts and minimum SCC requirements remain adjustable through
          authorized settings.
        </p>
      </section>

      <section id="evidence-and-abuse" className="policy-section">
        <h2>11. Neutral Evidence and Abuse Prevention</h2>
        <p>
          LPG Go applies the same evidence-based review to customers,
          dealers/retailers, and riders. Repeated, contradictory, fabricated, or
          manipulated claims may trigger manual review, higher evidence
          requirements, temporary restrictions, suspension, termination,
          recovery of losses, or referral to authorities when appropriate.
        </p>
        <p>
          A photo alone may not prove delivery or non-delivery. LPG Go may
          evaluate the combined record, including GPS proximity, server
          timestamp, image metadata, status sequence, contact attempts,
          communication logs, payment evidence, and each party&apos;s response.
          Automated flags support review and do not by themselves decide fault
          or impose a final penalty.
        </p>
      </section>

      <section id="service-targets" className="policy-section">
        <h2>12. Service Targets and Cooperation</h2>
        <p>
          Safety reports are prioritized. Other requests are handled according
          to severity, completeness of evidence, response of the parties, and
          support capacity. Any response, investigation, replacement, pickup, or
          refund timeframe shown by LPG Go is a service target, not a guarantee,
          unless a mandatory law states otherwise.
        </p>
        <p>
          A party who does not provide requested evidence, prevents reasonable
          inspection or retrieval, gives false contact information, or fails to
          respond after reasonable attempts may delay or prevent resolution.
        </p>
      </section>

      <section className="policy-section callout">
        <h2>13. Customer Summary</h2>
        <p>
          Inspect the cylinder before acceptance. Use the 30-minute Return and
          Full Refund action or the one-hour Return and Replace action when
          available, and submit accurate evidence. Use Report or Dispute after a
          button expires. Report leaks and other safety concerns immediately.
          Refunds and replacements require review and may require cylinder
          retrieval. This policy does not limit non-waivable consumer rights.
        </p>
      </section>
    </PolicyLayout>
  );
}
