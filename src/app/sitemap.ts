import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://buffett-insights.example.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://buffett-insights.example.com/videos", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://buffett-insights.example.com/philosophy", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ] as MetadataRoute.Sitemap;
}
