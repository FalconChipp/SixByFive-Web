export const metadata = {
  title: "About",
  description:
    "Learn more about SixByFive, the work behind it, and the different parts of the brand.",
};

const areas = [
  {
    eyebrow: "Platform",
    title: "Collector platform",
    description:
      "SixByFive TCG is built around search, collection management, valuation, and binder planning for collectors.",
    href: "https://tcg.sixbyfive.com",
    linkLabel: "Visit TCG →",
  },
  {
    eyebrow: "Platform",
    title: "Kora",
    description:
      "Kora is a platform built for structured workflows, collaboration, and getting the right things done.",
    href: "https://koraplatform.co.uk",
    linkLabel: "Visit Kora →",
  },
  {
    eyebrow: "Tooling",
    title: "Technical work",
    description:
      "SixByFive Dev covers the wider technical side of the brand, including tooling, experiments, and systems.",
    href: "https://dev.sixbyfive.com",
    linkLabel: "Visit Dev →",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content copy-narrow">
            <p className="section-kicker">About</p>
            <h1 className="page-hero__title">
              A focused brand for the different things built under SixByFive.
            </h1>
            <p className="page-hero__copy">
              SixByFive brings together a collector platform, Kora, and
              technical tooling under one name without forcing them into the
              same product story.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="container">
          <div className="brand-intro surface-panel">
            <div className="brand-intro__content copy-narrow">
              <p className="section-kicker">Who</p>
              <h2 className="section-title">
                An independent studio building software people actually use.
              </h2>

              <div className="section-copy">
                <p>
                  SixByFive is a small UK studio. The work spans different
                  places — a collector platform, Kora, technical tooling,
                  and bespoke systems for small businesses that need
                  something real behind their operations.
                </p>

                <p>
                  None of that shares a market. What it shares is the kind
                  of software it is — things people rely on day to day, not
                  demos or one-off projects. The brief is always the same:
                  build it properly, ship it, keep it running.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Areas of work</p>
            <h2 className="section-title">Where SixByFive shows up.</h2>
            <p className="section-copy">
              Each part of the brand has its own role, audience, and destination.
            </p>
          </div>

          <div className="ventures-grid">
            {areas.map((area) => (
              <article key={area.href} className="venture-card">
                <div className="venture-card__top">
                  <span className="venture-card__eyebrow">{area.eyebrow}</span>
                  <h3 className="venture-card__title">{area.title}</h3>
                </div>

                <p className="venture-card__description">{area.description}</p>

                <a
                  href={area.href}
                  className="venture-card__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {area.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}