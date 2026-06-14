const steps = [
  {
    n: "1",
    title: "Pick a store",
    body: "Browse verified LPG dealers near you, sorted by distance, hours, and ratings.",
  },
  {
    n: "2",
    title: "Choose your tank",
    body: "Select a brand, tank size, and order type — Refill Tank or New Tank.",
  },
  {
    n: "3",
    title: "Checkout",
    body: "Pay Cash on Delivery or securely online via QR Ph. Apply vouchers if you have one.",
  },
  {
    n: "4",
    title: "Track & receive",
    body: "Watch your rider on the live map and confirm delivery with a photo on arrival.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div className="center" style={{ marginBottom: 48 }}>
          <span className="eyebrow reveal">How it works</span>
          <h2 className="title reveal d1">
            From craving to cooking in four steps
          </h2>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div key={s.n} className={`step reveal${i ? ` d${i}` : ""}`}>
              <div className="n">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
