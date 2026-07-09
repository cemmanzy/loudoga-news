export const revalidate = 60;
import Link from "next/link";
import { client } from "@/lib/sanity";
import type { Metadata } from "next";

import {
  singlePostQuery,
  relatedPostsQuery,
  mostReadPostsQuery,
} from "@/lib/queries";

import PortableTextContent from "@/components/news/PortableTextContent";
import SocialShare from "@/components/news/SocialShare";
import ArticleSidebar from "@/components/news/ArticleSidebar";

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

  const mostReadPosts = await client.fetch(
  mostReadPostsQuery
);

  return (
  <article className="mx-auto max-w-7xl px-4 py-12">
    <div className="grid gap-12 lg:grid-cols-3">
      {/* Main Content */}
      <div className="lg:col-span-2">
        <div className="mb-3 text-red-600 font-semibold">
          {post.category}
        </div>

        <h1 className="mb-6 text-5xl font-black leading-tight">
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
          <p className="mb-8 text-2xl text-slate-600">
            {post.excerpt}
          </p>
        )}

        {/* Author Section */}
        <div className="mb-8 flex items-center gap-4 border-b pb-6">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            {post.author?.image ? (
              <img
                src={urlFor(post.author.image)
                  .width(100)
                  .height(100)
                  .url()}
                alt={post.author.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-red-600 text-white font-bold">
                {post.author?.name?.charAt(0) || "L"}
              </div>
            )}
          </div>

          <div>
            {post.author?.slug ? (
              <Link
                href={`/author/${post.author.slug}`}
                className="font-semibold hover:text-red-600"
              >
                {post.author.name}
              </Link>
            ) : (
              <p className="font-semibold">
                Loudoga News
              </p>
            )}

            <div className="text-sm text-slate-500">
              <p>
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

              {post.readTime && (
                <p>{post.readTime} min read</p>
              )}
            </div>
          </div>
        </div>

        {/* Social Share */}
        <SocialShare
          title={post.title}
          url={`https://loudoganews.com/news/${post.slug}`}
        />

        {/* Article Content */}
        <div className="mt-8 border-t pt-8">
          <PortableTextContent
            value={post.body}
          />
        </div>
      </div>

      {/* Sidebar */}
      <div>
        <ArticleSidebar
           posts={relatedPosts}
          mostRead={mostReadPosts}
           />
      </div>
    </div>
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
      url: `https://loudoganews.com/news/${slug}`,
      images: imageUrl ? [imageUrl] : [],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}