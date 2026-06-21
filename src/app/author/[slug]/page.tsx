import Link from "next/link";
import { client } from "@/lib/sanity";
import {
  authorQuery,
  authorPostsQuery,
} from "@/lib/queries";
import { urlFor } from "@/lib/image";
import NewsCard from "@/components/news/NewsCard";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AuthorPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const author = await client.fetch(
    authorQuery,
    { slug }
  );

  if (!author) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold">
          Author Not Found
        </h1>
      </div>
    );
  }

  const posts = await client.fetch(
    authorPostsQuery,
    { slug }
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12 flex flex-col md:flex-row gap-8 items-center md:items-start">
        {author.image && (
          <img
            src={urlFor(author.image)
              .width(250)
              .height(250)
              .url()}
            alt={author.name}
            className="h-48 w-48 rounded-full object-cover"
          />
        )}

        <div>
          <h1 className="text-5xl font-black">
            {author.name}
          </h1>

          {author.bio && (
            <p className="mt-6 text-lg text-slate-600 max-w-3xl">
              {author.bio}
            </p>
          )}

          <p className="mt-4 text-sm text-slate-500">
            Contributor at Loudoga News
          </p>
        </div>
      </div>

      <section>
        <h2 className="mb-8 text-3xl font-bold">
          Articles by {author.name}
        </h2>

        {posts.length === 0 ? (
          <p className="text-slate-500">
            No articles published yet.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => (
              <NewsCard
                key={post._id}
                post={post}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const author = await client.fetch(
    authorQuery,
    { slug }
  );

  if (!author) {
    return {
      title: "Author Not Found",
    };
  }

  return {
    title: `${author.name} | Loudoga News`,
    description:
      author.bio ||
      `Read articles written by ${author.name} on Loudoga News.`,
  };
}