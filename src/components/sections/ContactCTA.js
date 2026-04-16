import Link from "next/link";

const destinations = [
  {
    label: "Collector platform",
    href: "https://tcg.sixbyfive.com",
    style: "button button--primary",
  },
  {
    label: "3D Printing",
    href: "https://3dprinting.sixbyfive.com",
    style: "button button--secondary",
  },
  {
    label: "Dev",
    href: "https://dev.sixbyfive.com",
    style: "button button--secondary",
  },
];

export default function ContactCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="contact-cta surface-panel">
          <div className="contact-cta__content">
            <p className="section-kicker">Start here</p>
            <h2 className="section-title">Choose the part of SixByFive that fits best.</h2>
            <p className="section-copy">
              Whether you are looking for the collector platform, 3D printing
              services, or the wider technical side of the brand, start with the
              destination that matches what you need.
            </p>
          </div>

          <div className="contact-cta__actions">
            {destinations.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={item.style}
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}