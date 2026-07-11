const dealerRequirements = [
  "Valid business permit / registration",
  "LPG brand authority or supplier proof",
  "Store address, service area, and contact details",
  "Product catalog with tank sizes, prices, and stock status",
];

const riderRequirements = [
  "Dealer-created rider account",
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
          <span className="eyebrow reveal">For dealers and riders</span>
          <h2 className="title reveal d1">Run LPG operations from one app</h2>
          <p className="lead reveal d2">
            LPG Go supports public applications, admin review, dealer product
            management, rider assignment, walk-in POS, wallets, cashouts,
            vouchers, feedback, and dispute workflows.
          </p>
        </div>
        <div className="partner-grid">
          <Checklist
            title="Dealer requirements"
            subtitle="For stores that want to sell LPG through LPG Go."
            items={dealerRequirements}
          />
          <Checklist
            title="Rider requirements"
            subtitle="For delivery riders managed by accredited dealers."
            items={riderRequirements}
          />
        </div>
      </div>
    </section>
  );
}
