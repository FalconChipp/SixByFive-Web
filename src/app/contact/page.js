export const metadata = {
  title: "Contact",
  description:
    "Get to the right part of SixByFive for collector platform, 3D printing, or technical work.",
};

const contactRoutes = [
  {
    eyebrow: "Platform",
    title: "Collector platform",
    description:
      "Questions about SixByFive TCG, platform features, collector workflows, or product-related enquiries.",
    href: "https://tcg.sixbyfive.com",
    linkLabel: "Go to TCG →",
  },
  {
    eyebrow: "Fabrication",
    title: "3D printing",
    description:
      "Enquiries related to custom printing, prototyping, fabrication, or project-based printing work.",
    href: "https://3dprinting.sixbyfive.com",
    linkLabel: "Go to 3D Printing →",
  },
  {
    eyebrow: "Tooling",
    title: "Technical / dev work",
    description:
      "Questions around systems, experiments, tools, or the wider technical side of SixByFive.",
    href: "https://dev.sixbyfive.com",
    linkLabel: "Go to Dev →",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content copy-narrow">
            <p className="section-kicker">Contact</p>
            <h1 className="page-hero__title">
              Get to the right part of SixByFive.
            </h1>
            <p className="page-hero__copy">
              SixByFive spans a few distinct areas of work, so the best place to
              start depends on what you need. Choose the route that fits best.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="container">
          <div className="contact-cta surface-panel">
            <div className="contact-cta__content copy-narrow">
              <p className="section-kicker">Routing</p>
              <h2 className="section-title">
                Start with the destination that matches your enquiry.
              </h2>
              <p className="section-copy">
                Rather than forcing every enquiry through the same place,
                SixByFive is split into clearer destinations so you can go
                straight to the part that makes the most sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="ventures-grid">
            {contactRoutes.map((route) => (
              <article key={route.href} className="venture-card">
                <div className="venture-card__top">
                  <span className="venture-card__eyebrow">{route.eyebrow}</span>
                  <h2 className="venture-card__title">{route.title}</h2>
                </div>

                <p className="venture-card__description">{route.description}</p>

                <a
                  href={route.href}
                  className="venture-card__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {route.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}