export default function Privacy() {
  return (
    <section id="privacy" className="legal">
      <div className="wrap">
        <div className="center" style={{ marginBottom: 36 }}>
          <span className="eyebrow reveal">Legal</span>
          <h2 className="title reveal d1">Privacy Policy</h2>
        </div>
        <div className="doc reveal d1">
          <p className="updated">Last updated: June 2025</p>
          <p>
            LPG Go (&quot;we&quot;, &quot;our&quot;, &quot;the app&quot;)
            respects your privacy. This policy explains what we collect, why we
            collect it, and the choices you have. By using LPG Go you agree to
            the practices described here. This policy is written with the Data
            Privacy Act of 2012, Republic Act No. 10173, in mind.
          </p>

          <h3>1. Information we collect</h3>
          <ul>
            <li>
              <b>Account details</b> — your name, phone number, and email (or the
              phone number used to sign in).
            </li>
            <li>
              <b>Delivery information</b> — your delivery address and pinned map
              location, used to route riders to you.
            </li>
            <li>
              <b>Order data</b> — the items, stores, prices, payment method, and
              history of your orders.
            </li>
            <li>
              <b>Location data</b> — for riders, real-time GPS during active
              deliveries; for customers, approximate location to show nearby
              stores (only with your permission).
            </li>
            <li>
              <b>Device &amp; usage data</b> — basic technical information needed
              to keep the app secure and working.
            </li>
          </ul>

          <h3>2. How we use your information</h3>
          <ul>
            <li>To process orders and deliver your gas to the correct address.</li>
            <li>To show live rider tracking and order status updates.</li>
            <li>
              To process payments (cash on delivery or online via our payment
              partner).
            </li>
            <li>To prevent fraud, enforce our Terms, and keep the marketplace safe.</li>
            <li>To send order notifications and important service messages.</li>
          </ul>

          <h3>3. How we share information</h3>
          <p>
            We share only what is necessary to complete your order — for example,
            your name, address, and contact number are shared with the dealer
            fulfilling the order and the rider delivering it. We use trusted
            service providers (such as cloud hosting and payment processing) who
            handle data on our behalf. We do not sell your personal information.
          </p>

          <h3>4. Payments</h3>
          <p>
            Online payments are processed by a licensed third-party payment
            provider. We do not store your full card or banking details on our
            servers.
          </p>

          <h3>5. Data security &amp; retention</h3>
          <p>
            We use industry-standard safeguards to protect your data and keep it
            only as long as needed to provide the service and meet legal
            obligations.
          </p>

          <h3>6. Your rights</h3>
          <p>
            The Data Privacy section of the <a href="/kaligtasan">Safety Manual</a>
            explains how operational and complaint data is protected. Under RA
            10173, you have the right to know, obtain a copy, correct, delete or
            block, object to marketing use, and file a complaint with the
            National Privacy Commission.
          </p>
          <p>
            For privacy requests, contact the Data Protection Officer at{" "}
            <a href="mailto:dpo@lpggo.ph">dpo@lpggo.ph</a>. If you believe your
            rights were not respected, you may file a complaint with the
            National Privacy Commission through its official channels.
          </p>

          <h3>7. Changes to this policy</h3>
          <p>
            We may update this policy from time to time. Material changes will be
            reflected here with a new &quot;last updated&quot; date.
          </p>
        </div>
      </div>
    </section>
  );
}
