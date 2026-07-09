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
      url: "https://loudoganews.com/category/news",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/category/business",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/category/politics",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/category/technology",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/category/sports",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/category/entertainment",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/category/hot-stories",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/category/interviews",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/category/spotlight",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/category/views",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/about",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/contact",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/privacy-policy",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/newsroom",
      lastModified: new Date(),
    },

    {
      url: "https://loudoganews.com/disclaimer",
      lastModified: new Date(),
    },

    ...postUrls,
  ];
}