import { site, developer } from "@/lib/site";

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
              On-demand LPG delivery that connects Filipino homes with verified
              local dealers — fast, fair, and trackable.
            </p>
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
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact us</a>
          </div>
          <div>
            <h5>Support</h5>
            <a href="#support">Support the project</a>
            <a href={`mailto:${site.email}`}>Email support</a>
            <a href={developer.website} target="_blank" rel="noopener noreferrer">
              Developer portfolio
            </a>
          </div>
          <div>
            <h5>Legal</h5>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms &amp; Conditions</a>
          </div>
        </div>
        <div className="copy">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>Proudly made by the Philippines 🇵🇭</span>
        </div>
      </div>
    </footer>
  );
}
