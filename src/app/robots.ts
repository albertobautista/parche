import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://www.parche-studio.com/sitemap.xml",
    host: "https://www.parche-studio.com",
  };
}
