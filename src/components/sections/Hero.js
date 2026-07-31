import Link from "next/link";

const heroHighlights = [
  {
    label: "Collector platform",
    value: "TCG",
    href: "https://tcg.sixbyfive.com",
  },
  {
    label: "Platform",
    value: "Kora",
    href: "https://koraplatform.co.uk",
  },
  {
    label: "Tooling",
    value: "Dev",
    href: "https://dev.sixbyfive.com",
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <div>
            <p className="hero__eyebrow">SixByFive</p>
            <h1 className="hero__title">
              Products, services, and systems built with intent.
            </h1>
          </div>

          <p className="hero__copy">
            SixByFive is the home of the work I am building across collector
            software, custom fabrication, and technical tooling. A focused
            parent brand that connects distinct ventures under one name without
            blurring what each one is for.
          </p>

          <div className="hero__actions">
            <Link
              href="https://tcg.sixbyfive.com"
              className="button button--primary"
            >
              Explore TCG
            </Link>

            <Link href="#ventures" className="button button--secondary">
              View Ventures
            </Link>
          </div>
        </div>

        <aside className="hero__panel surface-panel" aria-label="SixByFive focus areas">
          <div className="hero__panel-header">
            <span className="hero__panel-kicker">Focused areas</span>
            <span className="hero__panel-dot" />
          </div>

          <div className="hero__panel-grid">
            {heroHighlights.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="hero__stat"
              >
                <span className="hero__stat-label">{item.label}</span>
                <span className="hero__stat-value">{item.value}</span>
              </a>
            ))}
          </div>

          <div className="hero__panel-footer">
            <p className="hero__panel-copy">
              Explore the area that fits what you need.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}