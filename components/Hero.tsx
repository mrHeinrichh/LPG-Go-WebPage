export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="reveal in">
          <span className="pill">
            <span className="dot" /> Cooking gas, delivered fast
          </span>
          <h1>
            Your next <span className="hl">LPG refill</span> is just a tap away.
          </h1>
          <p className="sub">
            LPG Go connects Filipino households with verified local gas dealers
            for fast, trackable cooking-gas delivery — order a refill or a new
            tank, pay cash or online, and follow your rider in real time.
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
