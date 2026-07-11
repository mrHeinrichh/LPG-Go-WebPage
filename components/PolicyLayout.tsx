import PageChrome from "@/components/PageChrome";

export default function PolicyLayout({
  title,
  eyebrow,
  lead,
  children,
  toc,
}: {
  title: string;
  eyebrow: string;
  lead: string;
  children: React.ReactNode;
  toc?: { href: string; label: string }[];
}) {
  return (
    <PageChrome>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{lead}</p>
        </div>
      </section>
      <section>
        <div className={`wrap policy-layout${toc?.length ? "" : " single"}`}>
          {toc?.length ? (
            <aside className="toc">
              <b>Contents</b>
              {toc.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </aside>
          ) : null}
          <div className="policy-doc">{children}</div>
        </div>
      </section>
    </PageChrome>
  );
}
