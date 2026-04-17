import Link from "next/link";
import { ventures } from "@/content/ventures";

export default function Ventures() {
  return (
    <section id="ventures" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Destinations</p>
          <h2 className="section-title">Three focused parts of SixByFive.</h2>
          {/* <p className="section-copy">
            SixByFive is structured around distinct areas of work. The main site
            should make that separation clear quickly, then route people to the
            right destination.
          </p> */}
        </div>

        <div className="ventures-grid">
          {ventures.map((venture) => (
            <article key={venture.href} className="venture-card">
              <div className="venture-card__top">
                <span className="venture-card__eyebrow">{venture.eyebrow}</span>
                <h3 className="venture-card__title">{venture.title}</h3>
              </div>

              <p className="venture-card__description">{venture.description}</p>

              <Link
                href={venture.href}
                className="venture-card__link"
                target="_blank"
                rel="noreferrer"
              >
                {venture.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}