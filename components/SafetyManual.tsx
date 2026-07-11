const lessons = [
  {
    title: "Before you order",
    body: "Choose the correct brand and size, confirm your address pin, and keep a clear path for safe cylinder handoff.",
  },
  {
    title: "When the tank arrives",
    body: "Check the seal, look for dents or heavy rust, and refuse any cylinder that smells strongly of gas before installation.",
  },
  {
    title: "Safe home setup",
    body: "Keep LPG upright in a ventilated area, away from heat, electrical sparks, and children. Never store cylinders in closed cabinets.",
  },
  {
    title: "Leak check",
    body: "Use soapy water on the valve and hose joints. Bubbles mean a leak. Do not use a flame to test.",
  },
];

const emergency = [
  "Do not switch lights or appliances on/off.",
  "Turn off the regulator if safe to reach.",
  "Open doors and windows for ventilation.",
  "Move people away from the area.",
  "Call your dealer, building admin, or emergency responders.",
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
            verified dealers, trackable riders, photo-confirmed handoff, and
            practical reminders for every household.
          </p>
        </div>

        <div className="safety-grid">
          {lessons.map((lesson, i) => (
            <article key={lesson.title} className={`safety-card reveal d${i % 4}`}>
              <div className="safety-illo" aria-hidden="true">
                <svg viewBox="0 0 120 96">
                  <rect x="36" y="24" width="48" height="58" rx="14" />
                  <path d="M48 24v-8h24v8M47 42h26M47 56h26" />
                  <circle cx="82" cy="26" r="11" />
                  <path d="M77 26l3 3 7-8" />
                </svg>
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
