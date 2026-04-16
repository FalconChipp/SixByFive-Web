import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: {
    default: "SixByFive",
    template: "%s | SixByFive",
  },
  description:
    "SixByFive is the home of products, services, and systems spanning collector platforms, fabrication, and technical tooling.",
  metadataBase: new URL("https://sixbyfive.com"),
  icons: {
    icon: [
      { url: "/icons/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/icons/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/icons/icon-384x384.png", sizes: "384x384", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icons/icon-96x96.png",
  },
  openGraph: {
    title: "SixByFive",
    description:
      "Products, services, and systems spanning collector platforms, fabrication, and technical tooling.",
    url: "https://sixbyfive.com",
    siteName: "SixByFive",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/logos/sixbyfive-logo.png",
        width: 1200,
        height: 630,
        alt: "SixByFive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SixByFive",
    description:
      "Products, services, and systems spanning collector platforms, fabrication, and technical tooling.",
    images: ["/logos/sixbyfive-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}