import { client } from "@/lib/sanity";
import type { Metadata } from "next";
import {
  singlePostQuery,
  relatedPostsQuery,
} from "@/lib/queries";

import PortableTextContent from "@/components/news/PortableTextContent";
import NewsCard from "@/components/news/NewsCard";

import { urlFor } from "@/lib/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const post = await client.fetch(
    singlePostQuery,
    { slug }
  );

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold">
          Article Not Found
        </h1>
      </div>
    );
  }

  const relatedPosts = await client.fetch(
    relatedPostsQuery,
    {
      category: post.category,
      slug,
    }
  );

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-3 text-red-600 font-semibold">
        {post.category}
      </div>

      <h1 className="text-5xl font-black leading-tight mb-6">
        {post.title}
      </h1>

      {post.mainImage && (
        <div className="my-8">
          <img
            src={urlFor(post.mainImage)
              .width(1200)
              .height(700)
              .url()}
            alt={post.title}
            className="w-full rounded-xl"
          />
        </div>
      )}

      {post.excerpt && (
        <p className="text-2xl text-slate-600 mb-8">
          {post.excerpt}
        </p>
      )}

      <div className="mb-8 flex items-center gap-4 border-b pb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white font-bold">
          {post.author?.charAt(0) || "L"}
        </div>

        <div>
          <p className="font-semibold">
            {post.author || "Loudoga News"}
          </p>

          <p className="text-sm text-slate-500">
            {post.publishedAt
              ? new Date(
                  post.publishedAt
                ).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )
              : ""}
          </p>
        </div>
      </div>

      <div className="border-t pt-8">
        <PortableTextContent value={post.body} />
      </div>

      {relatedPosts.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-8 text-3xl font-bold">
            Related Articles
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((item: any) => (
              <NewsCard
                key={item._id}
                post={item}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(
    singlePostQuery,
    { slug }
  );

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage)
        .width(1200)
        .height(630)
        .url()
    : undefined;

  return {
    title: `${post.title} | Loudoga News`,
    description: post.excerpt,

    alternates: {
      canonical: `https://loudoganews.com/news/${slug}`,
    },

    openGraph: {
      title: post.title,
      description: post.excerpt,
      siteName: "Loudoga News",
      type: "article",
      images: imageUrl
        ? [imageUrl]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: imageUrl
        ? [imageUrl]
        : [],
    },
  };
}