import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch(`
    *[_type == "post"]{
      "slug": slug.current,
      _updatedAt
    }
  `);

  const postUrls = posts.map((post: any) => ({
    url: `https://loudoganews.com/news/${post.slug}`,
    lastModified: new Date(post._updatedAt),
  }));

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
      url: "https://loudoganews.com/hot-stories",
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

    {
      url: "https://loudoganews.com/views",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/search",
      lastModified: new Date(),
    },

    ...postUrls,
  ];
}