import { site, developer, social } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div className="center" style={{ marginBottom: 44 }}>
          <span className="eyebrow reveal">Get in touch</span>
          <h2 className="title reveal d1">Contact us</h2>
          <p className="lead reveal d2">
            Have a question, a partnership idea, or need help with an order?
            We&apos;d love to hear from you.
          </p>
        </div>
        <div className="contact-grid">
          <a className="contact-card reveal" href={`mailto:${site.email}`}>
            <div className="ic">
              <svg className="svg" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </div>
            <div>
              <h4>Email</h4>
              <p>{site.email}</p>
            </div>
          </a>

          <a
            className="contact-card reveal d1"
            href={developer.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ic orange">
              <svg className="svg" viewBox="0 0 24 24">
                <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 6l-4 12" />
              </svg>
            </div>
            <div>
              <h4>Developer</h4>
              <p>
                Built &amp; maintained by {developer.name} — mrheinrich.vercel.app
              </p>
            </div>
          </a>

          <div className="contact-card reveal d1">
            <div className="ic orange">
              <svg className="svg" viewBox="0 0 24 24">
                <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.1-1.1a2 2 0 012.1-.5c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" />
              </svg>
            </div>
            <div>
              <h4>Support</h4>
              <p>
                For order help, use the in-app &quot;Support Feedback&quot;
                option for the fastest response.
              </p>
            </div>
          </div>

          <div className="contact-card reveal d2">
            <div className="ic">
              <svg className="svg" viewBox="0 0 24 24">
                <path d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>
            <div>
              <h4>Service area</h4>
              <p>
                Available in select cities across the Philippines, expanding to
                more areas soon.
              </p>
            </div>
          </div>

          <div className="contact-card reveal d2">
            <div className="ic orange">
              <svg className="svg" viewBox="0 0 24 24">
                <path d="M3 7h13l3 5v5h-3M3 7v10h3" />
                <circle cx="7.5" cy="17.5" r="1.6" />
                <circle cx="17.5" cy="17.5" r="1.6" />
              </svg>
            </div>
            <div>
              <h4>Become a dealer</h4>
              <p>
                Want to sell on LPG Go? Email us and our team will help you get
                verified and listed.
              </p>
            </div>
          </div>

          <a className="contact-card reveal d3" href="#support">
            <div className="ic">
              <svg className="svg" viewBox="0 0 24 24">
                <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
              </svg>
            </div>
            <div>
              <h4>Support the project</h4>
              <p>Help keep LPG Go running — donate via GCash, Maya, or bank.</p>
            </div>
          </a>

          <a
            className="contact-card reveal d3"
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ic facebook">
              <svg className="svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
              </svg>
            </div>
            <div>
              <h4>Facebook</h4>
              <p>
                Follow @lpggo.ph for updates, promos, and announcements.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
