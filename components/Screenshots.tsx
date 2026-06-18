import { screenshots } from "@/lib/site";

export default function Screenshots() {
  return (
    <section id="screenshots" className="shots">
      <div className="wrap">
        <div className="center" style={{ marginBottom: 48 }}>
          <span className="eyebrow reveal">See it in action</span>
          <h2 className="title reveal d1">A closer look at the app</h2>
          <p className="lead reveal d2">
            From finding a nearby dealer to tracking your rider and paying your
            way — here&apos;s how ordering LPG with LPG Go looks on your phone.
          </p>
        </div>

        <div className="shots-grid">
          {screenshots.map((shot, i) => (
            <figure
              key={shot.src}
              className={`shot reveal${i % 3 ? ` d${i % 3}` : ""}`}
            >
              <div className="shot-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={shot.src} alt={shot.title} loading="lazy" />
              </div>
              <figcaption>
                <b>{shot.title}</b>
                <span>{shot.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
