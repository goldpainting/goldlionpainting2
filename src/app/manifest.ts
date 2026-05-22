import { type MetadataRoute } from "next";

import { businessName, siteUrl } from "./siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: businessName,
    short_name: "Gold Lion",
    description:
      "Professional residential painting services in St. Petersburg, FL and surrounding Florida service areas.",
    id: siteUrl,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0c0d0e",
    theme_color: "#e4ad42",
    categories: ["business", "home", "utilities"],
    icons: [
      {
        src: "/gold-lion-painting-logo-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/gold-lion-painting-logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
