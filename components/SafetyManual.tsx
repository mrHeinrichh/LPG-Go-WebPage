const lessons = [
  {
    title: "Before you order",
    body: "Choose the correct brand and size, confirm your address pin, and keep a clear path for safe cylinder handoff.",
    image: "/safety/art/before-you-order-v2.webp",
  },
  {
    title: "When the tank arrives",
    body: "Check the seal, look for dents or heavy rust, and refuse any cylinder that smells strongly of gas before installation.",
    image: "/safety/art/tank-arrival-v2.webp",
  },
  {
    title: "Safe home setup",
    body: "Keep LPG upright in a ventilated area, away from heat, electrical sparks, and children. Never store cylinders in closed cabinets.",
    image: "/safety/art/safe-home-setup-v2.webp",
  },
  {
    title: "Leak check",
    body: "Use soapy water on the valve and hose joints. Bubbles mean a leak. Do not use a flame to test.",
    image: "/safety/art/leak-check-v2.webp",
  },
];

const emergency = [
  "Do not switch lights or appliances on/off.",
  "Turn off the regulator if safe to reach.",
  "Open doors and windows for ventilation.",
  "Move people away from the area.",
  "Call your dealer/retailer, building administrator, or emergency responders.",
];

export default function SafetyManual() {
  return (
    <section id="safety" className="safety">
      <div className="wrap">
        <div className="center" style={{ marginBottom: 44 }}>
          <span className="eyebrow reveal">Safety manual</span>
          <h2 className="title reveal d1">Safety-first LPG delivery</h2>
          <p className="lead reveal d2">
            LPG Go keeps safety visible before, during, and after delivery:
            reviewed dealers/retailers, trackable riders, delivery evidence, and
            practical reminders for every household.
          </p>
        </div>

        <div className="safety-grid">
          {lessons.map((lesson, i) => (
            <article key={lesson.title} className={`safety-card safety-reference-card reveal d${i % 4}`}>
              <div className="safety-illo">
                <img src={lesson.image} alt="" />
              </div>
              <h3>{lesson.title}</h3>
              <p>{lesson.body}</p>
            </article>
          ))}
        </div>

        <div className="emergency reveal">
          <div>
            <span className="eyebrow">Emergency screen</span>
            <h3>If you smell gas, act calmly and fast</h3>
            <p>
              Leave the area if the smell is strong. These reminders are not a
              substitute for professional emergency help.
            </p>
          </div>
          <ul>
            {emergency.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
