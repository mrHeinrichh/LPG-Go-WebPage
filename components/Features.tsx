import type { ReactNode } from "react";

type Feature = {
  icon: ReactNode;
  orange?: boolean;
  title: string;
  body: string;
};

const features: Feature[] = [
  {
    icon: (
      <svg className="svg" viewBox="0 0 24 24">
        <path d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
    title: "Nearby store discovery",
    body: "Find participating merchants around you, with distance, operating status, and available store details.",
  },
  {
    icon: (
      <svg className="svg" viewBox="0 0 24 24">
        <path d="M3 7h13l3 5v5h-3M3 7v10h3" />
        <circle cx="7.5" cy="17.5" r="1.6" />
        <circle cx="17.5" cy="17.5" r="1.6" />
      </svg>
    ),
    orange: true,
    title: "Real-time rider tracking",
    body: "Follow available rider location and order status updates from pickup through delivery.",
  },
  {
    icon: (
      <svg className="svg" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M3 10h18" />
      </svg>
    ),
    title: "Flexible payments",
    body: "Use Cash on Delivery, an enabled online method, or a store-approved Credit Order when shown at checkout.",
  },
  {
    icon: (
      <svg className="svg" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: "Reviewed merchants",
    body: "Participating dealers/retailers submit required business, LPG, identity, and brand documents for onboarding review.",
  },
  {
    icon: (
      <svg className="svg" viewBox="0 0 24 24">
        <path d="M12 17.3l-6.2 3.7 1.7-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.5 4.8 1.7 7z" />
      </svg>
    ),
    orange: true,
    title: "Ratings & favorites",
    body: "Rate your experience, save go-to stores, and reorder your usual tank in seconds.",
  },
  {
    icon: (
      <svg className="svg" viewBox="0 0 24 24">
        <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6" />
        <path d="M2 7h20l-2 5H4L2 7z" />
        <path d="M12 7V4" />
      </svg>
    ),
    title: "Vouchers & receipts",
    body: "Redeem discount vouchers at checkout and get a clear digital receipt for every order.",
  },
  {
    icon: (
      <svg className="svg" viewBox="0 0 24 24">
        <path d="M4 7h16v12H4zM7 7V5h10v2M8 12h8M8 15h5" />
      </svg>
    ),
    orange: true,
    title: "Credit Orders & VIP pricing",
    body: "Merchants can grant store-specific Credit Order access and VIP pricing to eligible customers.",
  },
  {
    icon: (
      <svg className="svg" viewBox="0 0 24 24">
        <path d="M8 3h8v4H8zM6 7h12v14H6zM9 11h6M9 15h6" />
      </svg>
    ),
    title: "Cylinder custody & returns",
    body: "Track filled, empty, and customer-held cylinders, including photo-supported returns without a new order.",
  },
  {
    icon: (
      <svg className="svg" viewBox="0 0 24 24">
        <path d="M12 3l8 4v5c0 5-3.4 8-8 9-4.6-1-8-4-8-9V7zM8 12h8M12 8l4 4-4 4" />
      </svg>
    ),
    title: "Review & re-dispatch",
    body: "Failed-delivery evidence can be reviewed before an order is cancelled or returned to Waiting for re-assignment.",
  },
];

const check = (
  <svg className="svg" width="18" height="18" viewBox="0 0 24 24">
    <path d="M5 12l4 4 10-10" />
  </svg>
);

const audiences = [
  {
    cls: "b",
    title: "Customers",
    lead: "Order gas without the guesswork.",
    items: [
      "Guided brand, size, and order type",
      "Live tracking & order timeline",
      "COD, enabled online payment, or approved Credit Order",
      "Cylinder return requests without a new order",
    ],
  },
  {
    cls: "o",
    title: "Merchants",
    lead: "Run your store from your phone.",
    items: [
      "Product catalog & walk-in POS",
      "Manage riders & orders",
      "Cylinder inventory, Credit Orders, plans, SCC, and vouchers",
    ],
  },
  {
    cls: "d",
    title: "Riders",
    lead: "Deliver with confidence.",
    items: [
      "Clear pickup & drop-off flow",
      "Background location sharing",
      "Photo-confirmed deliveries",
      "Failed-delivery review and re-dispatch",
    ],
  },
];

export default function Features() {
  return (
    <section id="features">
      <div className="wrap">
        <div className="center" style={{ marginBottom: 48 }}>
          <span className="eyebrow reveal">Features</span>
          <h2 className="title reveal d1">Everything you need in one tap</h2>
          <p className="lead reveal d2">
            Practical tools for customers, merchants (dealers/retailers), and riders,
            designed to support clear and accountable LPG orders.
          </p>
        </div>
        <div className="grid g3">
          {features.map((f, i) => (
            <div key={f.title} className={`card reveal${i % 3 ? ` d${i % 3}` : ""}`}>
              <div className={`ic${f.orange ? " orange" : ""}`}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>

        <div className="center" style={{ margin: "70px 0 36px" }}>
          <span className="eyebrow reveal">Built for everyone</span>
          <h2 className="title reveal d1">One platform, three roles</h2>
        </div>
        <div className="audience">
          {audiences.map((a, i) => (
            <div key={a.title} className={`aud ${a.cls} reveal${i ? ` d${i}` : ""}`}>
              <h3>{a.title}</h3>
              <p style={{ color: "rgba(255,255,255,.9)", fontSize: "14.5px" }}>
                {a.lead}
              </p>
              <ul>
                {a.items.map((item) => (
                  <li key={item}>
                    {check} {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
