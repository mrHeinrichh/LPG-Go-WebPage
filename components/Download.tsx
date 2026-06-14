import { appDownload } from "@/lib/site";

const storeIcon = (id: string) => {
  if (id === "ios") {
    return (
      <svg className="store-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-1.72-.92-2.83-.9-1.46.02-2.8.85-3.55 2.16-1.51 2.62-.39 6.5 1.08 8.63.72 1.04 1.58 2.21 2.71 2.17 1.09-.04 1.5-.7 2.82-.7 1.31 0 1.69.7 2.83.68 1.17-.02 1.91-1.06 2.62-2.11.83-1.21 1.17-2.38 1.19-2.44-.03-.01-2.29-.88-2.31-3.49z" />
        <path d="M14.94 4.69c.6-.73 1.01-1.74.9-2.75-.87.04-1.92.58-2.54 1.31-.56.65-1.05 1.68-.92 2.67.97.07 1.96-.49 2.56-1.23z" />
      </svg>
    );
  }
  return (
    <svg className="store-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 3.5v17c0 .6.69 1 1.2.62l13-8.5c.46-.3.46-1 0-1.3l-13-8.5C4.69 2.5 4 2.9 4 3.5z" />
    </svg>
  );
};

export default function Download() {
  const { apkUrl, stores } = appDownload;
  const isFile = apkUrl.toLowerCase().endsWith(".apk");

  return (
    <section id="download" className="download">
      <div className="wrap">
        <div className="dl-card reveal">
          <span className="eyebrow">Early access</span>
          <h2 className="title">Get the app — try LPG Go now</h2>
          <p className="lead">
            LPG Go is in early access on Android. Grab the APK to start ordering
            today, ahead of the official store releases. Google Play and the iOS
            App Store are on the way.
          </p>

          <div className="dl-actions">
            <a
              className="btn dl-apk"
              href={apkUrl}
              {...(isFile ? { download: "" } : {})}
            >
              <svg className="svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
                <path d="M5 19h14" />
              </svg>
              <span className="dl-apk-text">
                <b>Get the APK now</b>
                <small>Early access · Android build</small>
              </span>
            </a>
          </div>

          <div className="store-badges">
            {stores.map((s) => (
              <div key={s.id} className="store">
                {storeIcon(s.id)}
                <span className="store-text">
                  <small>{s.caption}</small>
                  <b>{s.name}</b>
                </span>
                <span className="soon">Soon</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
