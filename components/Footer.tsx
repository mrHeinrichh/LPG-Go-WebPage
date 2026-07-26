import { site, developer, social } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <a className="brand" href="#home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="LPG Go" />
            </a>
            <p style={{ marginTop: 16, maxWidth: 320, fontSize: "14.5px" }}>
              A marketplace connecting customers with participating LPG
              dealers/retailers and delivery riders.
            </p>
            <div className="socials">
              <a
                className="social-link"
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow LPG Go on Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
                </svg>
                <span>Follow us on Facebook</span>
              </a>
            </div>
            <p className="dev-credit">
              Designed &amp; developed by{" "}
              <a
                href={developer.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {developer.name}
              </a>
            </p>
          </div>
          <div>
            <h5>Explore</h5>
            <a href="/#how">How it works</a>
            <a href="/#features">Features</a>
            <a href="/#faq">FAQ</a>
            <a href="/#contact">Contact us</a>
          </div>
          <div>
            <h5>Safety</h5>
            <a href="/safety">Safety Manual</a>
            <a href="/safety/emergency">Emergency Procedure</a>
            <a href="/#contact">Report a Safety Issue</a>
            <a href="/#support">Support the project</a>
            <a href={`mailto:${site.email}`}>Email support</a>
          </div>
          <div>
            <h5>Legal</h5>
            <a href="/policy/refund-policy">Refund Policy</a>
            <a href="/consumer-rights">Consumer Rights</a>
            <a href="/about/compliance">Compliance</a>
            <a href="/#terms">Terms &amp; Conditions</a>
            <a href="/#privacy">Privacy Policy</a>
          </div>
        </div>
        <div className="copy">
          <span>
            &copy; {year} {site.name} PH. Trademark App. No. 4/2026/00501327 filed
            with IPOPHIL.
          </span>
          <span>Policies reference RA 11592, RA 7394, and RA 10173.</span>
        </div>
      </div>
    </footer>
  );
}
