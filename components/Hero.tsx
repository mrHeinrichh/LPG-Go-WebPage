export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="reveal in">
          <span className="pill">
            <span className="dot" /> LPG Go PH marketplace
          </span>
          <h1>
            LPG Go brings <span className="hl">safe LPG delivery</span> to your phone.
          </h1>
          <p className="sub">
            LPG Go helps Filipino households order cooking gas from verified
            local dealers. Get a refill or a new tank, pay by cash or online,
            track your rider in real time, and manage support or refund concerns
            from the order screen.
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
              <b>3 taps</b>
              <span>Brand → size → order type</span>
            </div>
            <div className="s">
              <b>Live</b>
              <span>Real-time rider tracking</span>
            </div>
            <div className="s">
              <b>COD &amp; QR&nbsp;Ph</b>
              <span>Pay your way</span>
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
