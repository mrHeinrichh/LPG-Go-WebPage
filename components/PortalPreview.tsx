const portalPages = [
  "Customer dashboard",
  "Two-step tank picker",
  "Checkout and vouchers",
  "Order detail with tracking",
  "Return/refund complaint flow",
  "Store Service Credit (SCC) and profile",
];

export default function PortalPreview() {
  return (
    <section id="portal">
      <div className="wrap">
        <div className="portal-band reveal">
          <div>
            <span className="eyebrow">Authenticated portal</span>
            <h2 className="title">App screens ready for real orders</h2>
            <p className="lead">
              The customer portal flow is designed around repeat LPG buying:
              pick a nearby store, select brand and size, choose a refill or
              new-tank purchase, track the rider, and resolve issues from the order
              detail page.
            </p>
          </div>
          <div className="portal-list">
            {portalPages.map((page) => (
              <span key={page}>{page}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
