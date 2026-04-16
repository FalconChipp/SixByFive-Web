import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <p className="hero__eyebrow">404</p>
        <h1 className="section-title">Page not found.</h1>
        <p className="section-copy">
          The page you are looking for does not exist or may have moved.
        </p>

        <div className="hero__actions">
          <Link href="/" className="button button--primary">
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}