export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="reveal in">
          <span className="pill">
            <span className="dot" /> LPG Go PH marketplace
          </span>
          <h1 className="kinetic-title">Find Nearby Verified LPG Store</h1>
          <p className="sub">
            LPG Go is a marketplace platform that connects customers with
            independent LPG dealers/retailers and delivery riders. We help
            facilitate orders, delivery coordination, and payments, while LPG
            products are sold and fulfilled by the participating
            dealers/retailers.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#how">
              See how it works
            </a>
            <a className="btn ghost" href="#features">
              Explore features
            </a>
          </div>
          <div className="hero-stats">
            <div className="s">
              <b>Marketplace</b>
              <span>Connects customers with LPG dealers/retailers</span>
            </div>
            <div className="s">
              <b>Coordinated</b>
              <span>Orders, riders, and delivery updates</span>
            </div>
            <div className="s">
              <b>Flexible Pay</b>
              <span>Cash or supported online payments</span>
            </div>
          </div>
        </div>
        <div className="hero-scene reveal in d2" aria-hidden="true">
          <div className="hero-network-map">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero-philippines-network-transparent.png" alt="" />
          </div>
          <div
            className="hero-device hero-device-customer"
            data-parallax="0.045"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero-phones/customer-marketplace-hq-enhanced.png" alt="" />
          </div>
          <div
            className="hero-device hero-device-logo"
            data-parallax="0.075"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero-phones/lpggo-logo-hq-enhanced.png" alt="" />
          </div>
          <div
            className="hero-device hero-device-tracking"
            data-parallax="-0.035"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero-phones/rider-tracking-hq-enhanced.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
