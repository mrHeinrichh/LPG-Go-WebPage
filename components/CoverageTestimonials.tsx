import { coverageAreas, testimonials } from "@/lib/site";

export default function CoverageTestimonials() {
  return (
    <section id="coverage" className="coverage">
      <div className="coverage-delivery-backdrop" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/coverage-delivery-overlay.png" alt="" />
      </div>
      <div className="wrap">
        <div className="coverage-band reveal">
          <div className="coverage-copy">
            <span className="eyebrow">Coverage</span>
            <h2 className="title">Built for Philippine LPG delivery</h2>
            <p className="lead">
              Coverage is based on participating dealer/retailer service areas.
              Open the app, pin your location, and LPG Go shows available nearby
              stores that may serve your address.
            </p>
          </div>
          <div className="coverage-map-wrap" aria-hidden="true">
            <div className="coverage-network-map">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hero-philippines-network-transparent.png" alt="" />
            </div>
          </div>
          <div className="coverage-tags">
            {coverageAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, i) => (
            <figure key={item.name} className={`testimonial reveal d${i}`}>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <b>{item.name}</b>
                <span>{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
