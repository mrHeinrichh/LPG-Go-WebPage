"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import {
  supportMethods,
  supportLinks,
  developer,
  type SupportMethod,
} from "@/lib/site";

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <button
      type="button"
      className={`copy-btn${copied ? " copied" : ""}`}
      onClick={copy}
      aria-label={`Copy ${label}`}
    >
      {copied ? (
        <>
          <svg className="svg" width="14" height="14" viewBox="0 0 24 24">
            <path d="M5 12l4 4 10-10" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg className="svg" width="14" height="14" viewBox="0 0 24 24">
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15V5a2 2 0 012-2h10" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

/**
 * Shows the real QR screenshot from `public/qr/`. If that image is missing
 * (e.g. not added yet), it falls back to a generated placeholder QR so the
 * card never shows a broken image.
 */
function MethodQr({ method }: { method: SupportMethod }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The 404 `error` event can fire before React hydrates (so `onError` is
  // missed). On mount, a loaded-but-zero-width image means the load failed.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <QRCode
        value={method.qrValue}
        size={190}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        bgColor="#ffffff"
        fgColor="#14233f"
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={method.qrImage}
      alt={`${method.brand} — ${method.accountName} QR code`}
      onError={() => setFailed(true)}
    />
  );
}

export default function Support() {
  return (
    <section id="support" className="support">
      <div className="wrap">
        <div className="center" style={{ marginBottom: 44 }}>
          <span className="eyebrow reveal">Support the project</span>
          <h2 className="title reveal d1">Buy us a tank of gas ⛽</h2>
          <p className="lead reveal d2">
            LPG Go is independently built and maintained by{" "}
            <strong>{developer.name}</strong>. If the app saved you a trip or a
            phone call, you can help cover hosting, map, and payment-gateway
            costs by scanning any of the QR codes below — every bit keeps the
            marketplace running and free for households.
          </p>
        </div>

        <div className="support-grid">
          {supportMethods.map((m, i) => (
            <div key={m.id} className={`donate reveal${i ? ` d${i}` : ""}`}>
              <div className="brand-row">
                <span className="badge" style={{ background: m.accent }}>
                  {m.brand.charAt(0)}
                </span>
                <h3>{m.brand}</h3>
                <span className="net">{m.network}</span>
              </div>

              <div className="qr-box">
                <MethodQr method={m} />
              </div>

              <p className="note">{m.description}</p>

              <div className="acct">
                <div className="field">
                  <div>
                    <span style={{ display: "block" }}>Account name</span>
                    <b>{m.accountName}</b>
                  </div>
                  <CopyButton
                    value={m.accountName}
                    label={`${m.brand} account name`}
                  />
                </div>
                <div className="field">
                  <span>Account</span>
                  <b>{m.accountNumber}</b>
                </div>
                {m.referral && (
                  <div className="field referral">
                    <div>
                      <span style={{ display: "block" }}>Referral code</span>
                      <b>{m.referral.code}</b>
                      <small>{m.referral.perk}</small>
                    </div>
                    <CopyButton
                      value={m.referral.code}
                      label={`${m.brand} referral code`}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="support-note reveal">
          💡 Don&apos;t see the real QR codes yet? Save your three QR screenshots
          into <code>public/qr/</code> as <code>gotyme.png</code>,{" "}
          <code>maribank-julina.png</code>, and <code>maribank-john.png</code> —
          they replace the placeholders automatically.
        </p>

        <div className="support-links">
          {supportLinks.map((link) => {
            const external = link.external;
            return (
              <a
                key={link.label}
                className="support-link reveal"
                href={link.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <b>
                  <svg className="svg" width="18" height="18" viewBox="0 0 24 24">
                    <path d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {link.label}
                </b>
                <span>{link.description}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
