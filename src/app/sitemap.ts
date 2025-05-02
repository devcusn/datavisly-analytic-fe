import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = "https://www.datavisly.com";
  const pageUrls = [
    { url: "" },
    { url: "/login" },
    { url: "/sign-up" },
    { url: "/tools" },
    { url: "/tools/csv-viewer" },
  ];

  return pageUrls.map((page) => {
    return {
      url: domain + page.url,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: page.url === "" ? 1 : 0.8,
    };
  });
}
