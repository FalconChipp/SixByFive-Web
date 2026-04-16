import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Ventures",
    links: [
      { label: "TCG", href: "https://tcg.sixbyfive.com", external: true },
      {
        label: "3D Printing",
        href: "https://3dprinting.sixbyfive.com",
        external: true,
      },
      { label: "Dev", href: "https://dev.sixbyfive.com", external: true },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand-block">
            <Link href="/" className="site-brand site-brand--image site-brand--footer">
              <Image
                src="/logos/sixbyfive-logo.png"
                alt="SixByFive"
                width={200}
                height={54}
                className="site-brand__logo site-brand__logo--footer"
              />
            </Link>

            <p className="site-footer__copy">
              A focused home for products, services, and technical work across
              collector platforms, fabrication, and development.
            </p>
          </div>

          <div className="site-footer__grid">
            {footerGroups.map((group) => (
              <div key={group.title} className="site-footer__column">
                <h2 className="site-footer__heading">{group.title}</h2>

                <ul className="site-footer__list">
                  {group.links.map((item) => (
                    <li key={item.href}>
                      {item.external ? (
                        <a href={item.href} target="_blank" rel="noreferrer">
                          {item.label}
                        </a>
                      ) : (
                        <Link href={item.href}>{item.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {year} SixByFive. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}