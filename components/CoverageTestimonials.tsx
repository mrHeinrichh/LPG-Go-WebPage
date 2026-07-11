import { coverageAreas, testimonials } from "@/lib/site";

export default function CoverageTestimonials() {
  return (
    <section id="coverage" className="coverage">
      <div className="wrap">
        <div className="coverage-band reveal">
          <div>
            <span className="eyebrow">Coverage</span>
            <h2 className="title">Built for Philippine LPG delivery</h2>
            <p className="lead">
              Coverage is based on verified dealer service areas. Open the app,
              pin your location, and LPG Go shows nearby stores that can serve
              your address.
            </p>
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
