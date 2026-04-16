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
    eyebrow: "Fabrication",
    title: "3D printing",
    description:
      "SixByFive 3D Printing focuses on practical fabrication, prototyping, and custom project work.",
    href: "https://3dprinting.sixbyfive.com",
    linkLabel: "Visit 3D Printing →",
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
              SixByFive brings together a collector platform, fabrication work,
              and technical tooling under one name without forcing them into the
              same product story.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="container">
          <div className="brand-intro surface-panel">
            <div className="brand-intro__content copy-narrow">
              <p className="section-kicker">How it works</p>
              <h2 className="section-title">
                The main site provides clarity. The destinations do the deeper work.
              </h2>

              <div className="section-copy">
                <p>
                  SixByFive is structured so each part can speak properly to its
                  own audience. The main site acts as a clean front door, while
                  the individual destinations can go deeper into what they offer.
                </p>

                <p>
                  That means the collector platform can focus on collectors, the
                  fabrication side can focus on project work and custom printing,
                  and the technical side can focus on tools, systems, and
                  experiments.
                </p>

                <p>
                  The goal is not to make everything feel the same. The goal is
                  to make the overall brand feel connected, clear, and deliberate.
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