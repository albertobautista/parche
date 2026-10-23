import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.parche-studio.com/", changeFrequency: "weekly", priority: 1 }];
}
