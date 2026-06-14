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
    title: "Nearby dealer discovery",
    body: "Find accredited stores around you on a live map, with distance and open/closed status.",
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
    body: "Follow your delivery on the map the whole way — the rider stays traceable even between app screens.",
  },
  {
    icon: (
      <svg className="svg" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M3 10h18" />
      </svg>
    ),
    title: "Cash or QR Ph online",
    body: "Pay the rider on delivery, or settle instantly online with secure QR Ph payments.",
  },
  {
    icon: (
      <svg className="svg" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: "Verified dealers",
    body: "Every store is reviewed by our team and must submit valid permits and licenses before going live.",
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
];

const check = (
  <svg className="svg" width="18" height="18" viewBox="0 0 24 24">
    <path d="M5 12l4 4 10-10" />
  </svg>
);

const audiences = [
  {
    cls: "b",
    title: "🏠 Customers",
    lead: "Order gas without the guesswork.",
    items: [
      "Guided brand → size → order type",
      "Live tracking & order timeline",
      "COD or online payment",
    ],
  },
  {
    cls: "o",
    title: "🛒 Dealers",
    lead: "Run your store from your phone.",
    items: [
      "Product catalog & walk-in POS",
      "Manage riders & orders",
      "Wallet, payouts & vouchers",
    ],
  },
  {
    cls: "d",
    title: "🛵 Riders",
    lead: "Deliver with confidence.",
    items: [
      "Clear pickup & drop-off flow",
      "Background location sharing",
      "Photo-confirmed deliveries",
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
            Thoughtful tools for customers, dealers, and riders — designed to
            make every order safe, fair, and fast.
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
