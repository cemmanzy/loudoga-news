import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://loudoganews.com",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/news",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/spotlight",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/interviews",
      lastModified: new Date(),
    },
  ];
}