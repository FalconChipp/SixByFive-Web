"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-brand site-brand--image" aria-label="SixByFive home">
          <Image
            src="/logos/sixbyfive-logo.png"
            alt="SixByFive"
            width={180}
            height={48}
            priority
            className="site-brand__logo"
          />
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => {
            const isActive = !item.external && pathname === item.href;

            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="site-nav__link site-nav__link--external"
                >
                  <span>{item.label}</span>
                </a>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`site-nav__link${isActive ? " site-nav__link--active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}