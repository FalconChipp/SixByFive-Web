export default function manifest() {
  return {
    name: "SixByFive",
    short_name: "SixByFive",
    description:
      "Products, services, and systems spanning collector platforms, fabrication, and technical tooling.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f14",
    theme_color: "#0b0f14",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}