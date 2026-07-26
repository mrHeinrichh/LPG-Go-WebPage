export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="reveal in">
          <span className="pill">
            <span className="dot" /> LPG Go PH marketplace
          </span>
          <h1>Find Nearby Verified LPG Store</h1>
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
        <div className="reveal in d2">
          <div className="phone" aria-hidden="true">
            <div className="screen">
              <div className="topbar" />
              <div className="logo-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="" />
              </div>
              <div className="rows">
                <div className="row m" />
                <div className="row s" />
                <div className="row m" />
                <div className="row s" />
              </div>
              <div className="cta" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
