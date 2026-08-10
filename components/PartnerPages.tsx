const merchantRequirements = [
  "Valid LGU permit and DTI or SEC registration",
  "DOE License to Operate for the applicable activity and site",
  "Fire-safety compliance and LPG brand authority or supplier proof, where applicable",
  "Store address, service area, and contact details",
  "Product catalog with tank sizes, prices, and stock status",
  "Acceptance of current merchant terms, plan, SCC, fulfillment, and recordkeeping rules",
];

const riderRequirements = [
  "Merchant-created rider account",
  "Valid ID and contact number",
  "Delivery vehicle details when applicable",
  "Agreement to live tracking and delivery proof rules",
];

function Checklist({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: readonly string[];
}) {
  return (
    <article className="partner-card reveal">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <svg className="svg" viewBox="0 0 24 24">
              <path d="M5 12l4 4 10-10" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
      <a className="btn" href="#contact">
        Apply / ask for onboarding
      </a>
    </article>
  );
}

export default function PartnerPages() {
  return (
    <section id="partners" className="partners">
      <div className="wrap">
        <div className="center" style={{ marginBottom: 44 }}>
          <span className="eyebrow reveal">For merchants and riders</span>
          <h2 className="title reveal d1">Run LPG operations from one app</h2>
          <p className="lead reveal d2">
            LPG Go supports applications, admin review, merchant product and
            cylinder management, rider assignment and re-dispatch, walk-in POS,
            Credit Orders, merchant plans, Store Service Credit (SCC), vouchers,
            feedback, and dispute workflows.
          </p>
        </div>
        <div className="partner-grid">
          <Checklist
            title="Merchant requirements"
            subtitle="For stores that want to sell LPG through LPG Go."
            items={merchantRequirements}
          />
          <Checklist
            title="Rider requirements"
            subtitle="For delivery riders managed by participating merchants."
            items={riderRequirements}
          />
        </div>
      </div>
    </section>
  );
}
