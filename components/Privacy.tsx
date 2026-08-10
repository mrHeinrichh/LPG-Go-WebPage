import { site } from "@/lib/site";

export default function Privacy() {
  return (
    <section id="privacy" className="legal">
      <div className="wrap">
        <div className="center" style={{ marginBottom: 36 }}>
          <span className="eyebrow reveal">Legal</span>
          <h2 className="title reveal d1">Privacy Policy</h2>
        </div>
        <div className="doc reveal d1">
          <p className="updated">
            Effective and last updated: August 10, 2026
          </p>
          <p>
            This Privacy Policy explains how LPG Go collects, uses, stores,
            shares, protects, and disposes of personal data through the website,
            mobile application, customer and store accounts, rider tools,
            ordering, delivery coordination, payments, merchant subscriptions,
            store-approved Credit Orders, cylinder-credit returns, Store Service
            Credit, support, safety, and dispute processes. It is intended to comply with
            Republic Act No. 10173, the Data Privacy Act of 2012, its
            implementing rules, and applicable National Privacy Commission
            issuances.
          </p>

          <h3>1. Who Controls Personal Data</h3>
          <p>
            The LPG Go service operator acts as personal information controller
            for data it determines how and why to process. Participating
            merchants (participating LPG dealers/retailers) may also act as
            independent personal information controllers for their own sales,
            receipts, tax, employee, rider,
            customer-service, warranty, and legal records. Service providers
            process data under their own terms or on documented instructions,
            depending on their role.
          </p>
          <p>
            Questions or rights requests may be sent to the LPG Go privacy
            contact at <a href={`mailto:${site.email}`}>{site.email}</a> with
            the subject &quot;Privacy Request.&quot;
          </p>

          <h3>2. Personal Data We Collect</h3>
          <ul>
            <li><b>Account and identity data:</b> name, email, phone number, user ID, profile photo, role, login and verification records.</li>
            <li><b>Address and location data:</b> delivery address, map pin, coordinates, service area, route, rider location during active work, and location timestamps.</li>
            <li><b>Order and marketplace data:</b> selected store, products, brand, size, order type, quantity, prices, discounts, fees, tip, payment method, Credit Order eligibility and status, status history, receipts, ratings, favorites, and order communications.</li>
            <li><b>Merchant data:</b> owner or representative details, business name, address, permits, registrations, DOE and brand documents, expiration dates, product catalog, store settings, rider roster, subscription and feature permissions, payout details, and SCC ledger records.</li>
            <li><b>Rider data:</b> identity and contact details, assigned store, vehicle details when applicable, availability, order assignments, status actions, GPS, photos, and delivery performance records.</li>
            <li><b>Cylinder and inventory data:</b> original order, brand, size, quantity, filled, empty, with-customer status, return address, return photo, preferred return time, merchant approval, and merchant-entered outside-app references.</li>
            <li><b>Payment data:</b> method, amount, transaction or reference ID, payment status, provider response, refund status, payout data, and limited bank or e-wallet account details needed for an approved settlement.</li>
            <li><b>Support, safety, and evidence data:</b> complaint reason, written description, photos, video, receipts, weight information, pickup and delivery proof, contact attempts, messages, resolution, and administrative notes.</li>
            <li><b>Device and technical data:</b> device model, operating system, app version, IP address, notification token, logs, crashes, authentication events, security signals, and feature activity.</li>
            <li><b>Derived data:</b> distance, availability, eligibility, risk indicators, repeated-claim or failed-delivery patterns, and other operational inferences.</li>
          </ul>
          <p>
            We seek to collect only data reasonably necessary for the stated
            purposes. A user should not upload passwords, PINs, full card
            details, unrelated IDs, or unnecessary personal data about another
            person.
          </p>

          <h3>3. Merchant Compliance and Sensitive Data</h3>
          <p>
            Merchant onboarding may require government-issued
            identification, permits, registration records, tax-related
            documents, signatures, and other information that may qualify as
            sensitive personal information. We process these records for
            identity, authority, compliance, fraud-prevention, safety, audit,
            and legal purposes and restrict access to authorized personnel and
            providers with a need to know.
          </p>
          <p>
            Merchants must have a lawful basis before uploading personal
            data of owners, representatives, employees, or riders and must give
            them any notice required by law. Public business information and
            store listings are treated separately from private identity and
            compliance documents.
          </p>

          <h3>4. Location, Camera, Photos, and Notifications</h3>
          <p>
            Customer location is used to pin an address, calculate distance, and
            show nearby stores after permission is granted. Rider location may
            be processed during availability, pickup, active delivery, failed
            delivery, return, or another work-related status permitted by the
            app and applicable settings. Background location is used only when
            enabled and necessary for an active operational purpose.
          </p>
          <p>
            Camera and media access may be used for profile photos, permits,
            product listings, pickup and delivery evidence, failed-delivery
            evidence, cylinder-return verification, returns, safety reports, and
            dispute resolution.
            Notification permission enables order, security, support, document,
            and service messages. Device permissions can be changed in system
            settings, but disabling one may limit a related feature.
          </p>

          <h3>5. Why We Process Personal Data</h3>
          <ul>
            <li>create and secure accounts, verify identity, roles, stores, permits, and brand authority;</li>
            <li>show nearby stores, process orders, coordinate riders and re-dispatch, display status, and provide customer support;</li>
            <li>administer merchant plans, feature permissions, store-approved Credit Orders, cylinder balances, and return requests;</li>
            <li>calculate totals, configurable fees, discounts, tips, SCC entries, unused-SCC refund requests, payouts, payments, reversals, and refunds;</li>
            <li>inspect safety concerns, investigate disputes, prevent fraud and abuse, and enforce the Terms;</li>
            <li>send transactional, security, legal, safety, and service notices;</li>
            <li>maintain records, analytics, debugging, service quality, availability, and feature improvement;</li>
            <li>comply with legal obligations, lawful orders, audits, claims, recalls, and regulatory requests; and</li>
            <li>protect users, personnel, property, rights, and public safety.</li>
          </ul>

          <h3>6. Lawful Bases</h3>
          <p>
            Depending on the data and purpose, processing may rely on consent,
            performance of a contract or steps requested before a contract,
            compliance with legal obligations, protection of life and health,
            legitimate interests that do not override data-subject rights,
            establishment or defense of legal claims, and other bases permitted
            by the Data Privacy Act.
          </p>
          <p>
            Where processing depends on consent, consent may be withdrawn for
            future processing. Withdrawal does not invalidate prior lawful
            processing and may make a requested feature unavailable. Processing
            required for an order, safety record, legal duty, or dispute may
            continue on another lawful basis.
          </p>

          <h3>7. Automated Controls and Human Review</h3>
          <p>
            LPG Go may automatically calculate fees, distance, store
            availability, Credit Order eligibility, subscription and feature
            access, cylinder balances, action windows, status deadlines, SCC
            holds, and risk flags. Indicators may include inconsistent GPS,
            unusual account activity, repeated complaints, repeated failed
            deliveries, document expiration, or payment mismatch.
          </p>
          <p>
            Automated controls support security and operations but may be
            incomplete or inaccurate. A user may contact support to contest a
            material decision and request appropriate human review. Authorized
            reviewers may consider additional evidence, correct records, or
            maintain a restriction when justified.
          </p>

          <h3>8. Who Receives Personal Data</h3>
          <p>We may disclose relevant data to:</p>
          <ul>
            <li>the selected merchant and assigned or re-dispatched rider for order preparation, delivery, cylinder return, support, and legal obligations;</li>
            <li>Firebase or other cloud, database, authentication, storage, notification, analytics, and security providers;</li>
            <li>Google Maps Platform or another mapping, places, geocoding, routing, and location provider;</li>
            <li>PayMongo, banks, e-wallets, payout providers, or payment partners when an online payment, refund, verification, or payout feature is enabled;</li>
            <li>communications, email, customer-support, fraud-prevention, professional, audit, insurance, and legal service providers;</li>
            <li>brand owners, suppliers, emergency responders, or insurers when reasonably necessary for authorization, safety, recall, investigation, or a claim; and</li>
            <li>DOE, DTI, BFP, LGUs, NPC, BIR, law enforcement, courts, and other competent authorities when required or lawfully appropriate.</li>
          </ul>
          <p>
            We do not sell personal data. We require reasonable confidentiality,
            security, purpose limitation, and lawful-processing commitments from
            processors where required.
          </p>

          <h3>9. Public and Business Information</h3>
          <p>
            Approved store name, location, operating status, service area,
            product listing, prices, ratings, and business contact information
            may be visible to users. Merchant permits or verification
            status may be summarized without displaying private identity
            numbers or full documents. Public reviews and profile content may be
            associated with an account according to the interface shown when
            submitted.
          </p>

          <h3>10. Payments and Financial Information</h3>
          <p>
            LPG Go processes payment and settlement metadata necessary to match
            an order, confirm a transaction, calculate a fee, issue a refund, or
            coordinate a payout. Full card numbers, CVVs, banking passwords,
            card PINs, and e-wallet PINs should be entered only in the authorized
            provider interface and are not requested or stored by LPG Go.
          </p>
          <p>
            Payment providers may independently collect identity, device, bank,
            account, fraud, or transaction data under their own privacy notices.
            Cash on Delivery records may include the amount due, collection
            confirmation, receipt, and refund handback evidence.
          </p>
          <p>
            A store-approved Credit Order records a merchant-specific commercial
            arrangement and related order status. LPG Go does not publish it as
            a consumer credit score or submit it to a credit registry through the
            current feature.
          </p>

          <h3>11. Data Retention Policy and Account Deletion</h3>
          <p>
            LPG Go retains personal data only for as long as necessary for the
            declared purpose, service operation, legal compliance, legitimate
            business records, fraud prevention, safety, audit, and the
            establishment, exercise, or defense of legal claims. Retention is
            applied by data category, order status, open obligations, legal
            hold, dispute status, regulatory requirement, and technical backup
            cycle. When data is no longer needed, LPG Go may delete,
            de-identify, anonymize, archive, restrict access to, or securely
            dispose of the record.
          </p>
          <ul>
            <li><b>Account and profile records:</b> kept while the account is active and for a reasonable period after closure when needed for security, fraud prevention, dispute handling, legal claims, or audit history.</li>
            <li><b>Orders, receipts, payment metadata, refunds, payouts, SCC ledger entries, and admin fee records:</b> kept for transaction proof, accounting, tax, audit, dispute, refund, chargeback, and legal-defense purposes, including any period required for books of accounts and supporting records under applicable tax rules.</li>
            <li><b>Delivery GPS, rider status, pickup photos, delivery photos, failed-delivery evidence, messages, timestamps, and support notes:</b> kept while needed to complete the order, investigate a report, protect customers, merchants, riders, and LPG Go, prevent abuse, or respond to a safety, refund, return, replacement, or legal issue.</li>
            <li><b>Credit Order records:</b> kept while the customer has open merchant-approved credit activity and afterward as needed for merchant collection records, dispute review, audit, tax, and legal-defense purposes. LPG Go does not treat the current Credit Order feature as a customer credit score or public credit registry.</li>
            <li><b>Cylinder custody and return records:</b> kept while a cylinder balance, return request, merchant approval, outside-app reference, or related dispute remains open, and afterward as needed for inventory, warranty, audit, safety, and legal proof.</li>
            <li><b>Merchant onboarding, permits, licenses, brand authority, plan, rider roster, and compliance documents:</b> kept while the merchant is active and afterward as needed for legal compliance, verification history, regulatory inquiry, fraud prevention, tax, audit, and claims.</li>
            <li><b>Safety, leak, recall, abuse, fraud, and incident records:</b> may be retained longer when reasonably necessary to protect life, health, property, users, the platform, or the public, or to cooperate with insurers, brand owners, emergency responders, regulators, law enforcement, or courts.</li>
            <li><b>Website logs, device logs, security logs, and backup records:</b> kept for limited operational, debugging, security, incident-response, and backup-integrity purposes unless a longer period is required by an investigation, legal hold, or system recovery need.</li>
            <li><b>Marketing and optional communications data:</b> kept until consent is withdrawn, the user opts out where applicable, or the campaign or lawful business purpose ends, unless another lawful basis requires continued retention.</li>
          </ul>
          <p>
            An account-deletion request removes, restricts, or de-identifies
            data that is no longer needed, subject to identity verification and
            lawful exceptions. LPG Go may deny, delay, or limit deletion when a
            record is still needed for active orders, unpaid obligations,
            Credit Orders, SCC entries, cylinder custody, refunds, chargebacks,
            return or replacement claims, safety investigations, fraud review,
            tax or accounting records, regulatory requirements, legal holds, or
            the rights and defenses of LPG Go, a merchant, rider, customer, or
            another person.
          </p>
          <p>
            Deletion of an LPG Go account does not automatically delete records
            independently held by a merchant, rider, payment provider, bank,
            e-wallet, app store, map provider, regulator, or another
            independent controller for its own lawful purposes. Technically
            isolated backups may also remain until overwritten under the normal
            backup cycle, with access restricted unless restoration is required.
          </p>

          <h3>12. Security and Personal Data Breaches</h3>
          <p>
            LPG Go uses reasonable organizational, physical, and technical
            safeguards appropriate to risk, which may include authentication,
            role-based access, least-privilege rules, encrypted transmission,
            provider security controls, logging, restricted administration,
            backups, and incident response. No internet or storage system is
            completely secure.
          </p>
          <p>
            Users must protect their credentials and promptly report suspected
            compromise. LPG Go will assess a suspected personal data breach,
            contain and document it, and notify the National Privacy Commission
            and affected data subjects when and within the period required by
            applicable law.
          </p>

          <h3>13. International and Third-Party Processing</h3>
          <p>
            Cloud, mapping, payment, support, and security providers may process
            or store data in the Philippines or other jurisdictions. Where data
            is transferred, LPG Go remains accountable as required by law and
            uses appropriate contracts, provider assessments, access controls,
            and other safeguards suitable to the transfer and risk.
          </p>
          <p>
            Third-party websites, app stores, maps, banks, e-wallets, and
            provider interfaces have their own terms and privacy practices. LPG
            Go is not responsible for an independent party&apos;s processing
            outside LPG Go&apos;s instructions or control.
          </p>

          <h3>14. Your Data Privacy Rights</h3>
          <p>
            Subject to the Data Privacy Act and lawful limitations, a data
            subject may exercise the right to be informed, object, access,
            rectify, erase or block, obtain data portability where applicable,
            claim damages, and file a complaint. Rights may be limited where
            necessary for legal claims, investigations, public information,
            another person&apos;s rights, or another exception recognized by
            law.
          </p>
          <p>
            A request should identify the account, describe the right being
            exercised, and provide enough information to verify identity and
            locate the data. LPG Go may request additional proof, redact another
            person&apos;s data, deny a manifestly unfounded or unlawful request,
            or explain an applicable limitation. An authorized representative
            must show valid authority.
          </p>

          <h3>15. Your Choices</h3>
          <ul>
            <li>update available profile, address, store, and notification settings in the app;</li>
            <li>enable or disable location, camera, media, and notification permissions through device settings;</li>
            <li>choose whether to provide an optional rider tip, review, or non-essential profile content;</li>
            <li>ask a merchant to grant or remove future Credit Order permission, subject to open obligations and lawful record retention;</li>
            <li>opt out of direct marketing where offered, while continuing to receive necessary transaction, safety, security, and legal notices; and</li>
            <li>request account deletion or contact the DPO about a privacy right.</li>
          </ul>

          <h3>16. Children</h3>
          <p>
            LPG Go is not directed to children and an LPG purchase account
            should be used only by a person with legal capacity to transact. We
            do not knowingly request a child&apos;s account for independent LPG
            ordering. If a parent or guardian believes a child supplied personal
            data without proper authority, the parent or guardian should contact
            the privacy contact so the circumstances can be reviewed.
          </p>

          <h3>17. Website Logs, Links, and Future Features</h3>
          <p>
            The website may process ordinary server logs, IP address, browser or
            device information, requested pages, error records, and security
            events. It currently links to app downloads, social media, payment
            support methods, government resources, and other third-party sites.
            Those sites control their own data practices.
          </p>
          <p>
            If LPG Go later introduces cookies, advertising, additional
            analytics, new payment methods, biometric processing, or another
            materially different feature, this policy and any required consent
            or notice will be updated before or when the new processing begins.
          </p>

          <h3>18. Changes to This Policy</h3>
          <p>
            This policy may be updated for legal, security, operational,
            provider, or feature changes. The current version will show a new
            effective date. Material changes will receive an additional notice
            or consent where required. A new policy does not make earlier
            unlawful processing lawful or remove an accrued data-subject right.
          </p>

          <h3>19. Contact and Complaints</h3>
          <p>
            For privacy questions, requests, or complaints, contact the Data
            Protection Officer through{" "}
            <a href={`mailto:${site.email}?subject=Privacy%20Request`}>{site.email}</a>{" "}
            with the subject &quot;Privacy Request.&quot; General account and order
            support is available through the same address or in-app Support
            Feedback. Please do not email passwords, PINs, or unnecessary copies
            of sensitive documents.
          </p>
          <p>
            A data subject who is not satisfied with the response may contact or
            file a complaint with the National Privacy Commission through its
            official channels. Using the LPG Go support process does not waive
            that right.
          </p>

          <h3>20. Official Privacy References</h3>
          <ul>
            <li>
              <a href="https://privacy.gov.ph/data-privacy-act/" target="_blank" rel="noopener noreferrer">
                Data Privacy Act of 2012
              </a>
            </li>
            <li>
              <a href="https://privacy.gov.ph/the-data-privacy-act-and-its-irr/" target="_blank" rel="noopener noreferrer">
                Data Privacy Act and Implementing Rules
              </a>
            </li>
            <li>
              <a href="https://privacy.gov.ph/data-subject-rights/" target="_blank" rel="noopener noreferrer">
                National Privacy Commission: Data Subject Rights
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
