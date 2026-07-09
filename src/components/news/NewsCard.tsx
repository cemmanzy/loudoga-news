import Link from "next/link";
import { urlFor } from "@/lib/image";

type NewsCardProps = {
  post: {
    _id: string;
    title: string;
    excerpt: string;
    slug: string;
    category?: string;
    publishedAt?: string;
    mainImage?: any;
  };
};

export default function NewsCard({
  post,
}: NewsCardProps) {
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(
        "en-US",
        {
          day: "numeric",
          month: "short",
          year: "numeric",
        }
      )
    : "";

  return (
    <article className="overflow-hidden rounded-xl border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {post.mainImage && (
        <img
          src={urlFor(post.mainImage)
            .width(800)
            .height(500)
            .url()}
          alt={post.title}
          className="h-56 w-full object-cover"
        />
      )}

      <div className="p-5">

        <div className="mb-3 flex items-center justify-between">

          <span className="rounded-full bg-[#C9961A] px-3 py-1 text-xs font-semibold text-white">
            {post.category || "News"}
          </span>

          {formattedDate && (
            <span className="text-sm text-slate-500">
              {formattedDate}
            </span>
          )}

        </div>

        <Link href={`/news/${post.slug}`}>
          <h2 className="text-xl font-bold leading-snug transition hover:text-[#C9961A]">
            {post.title}
          </h2>
        </Link>

        <p className="mt-3 line-clamp-3 text-slate-600">
          {post.excerpt}
        </p>

        <Link
          href={`/news/${post.slug}`}
          className="mt-5 inline-block font-semibold text-[#C9961A] hover:underline"
        >
          Read Full Story →
        </Link>

      </div>
    </article>
  );
}