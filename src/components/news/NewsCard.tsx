import Link from "next/link";
import { urlFor } from "@/lib/image";

type NewsCardProps = {
  post: {
    _id: string;
    title: string;
    excerpt: string;
    slug: string;
    category?: string;
    mainImage?: any;
  };
};

export default function NewsCard({
  post,
}: NewsCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#C9961A]/20 bg-white transition hover:shadow-lg hover:border-[#C9961A]">
      {post.mainImage && (
        <img
          src={urlFor(post.mainImage)
            .width(800)
            .height(500)
            .url()}
          alt={post.title}
          className="h-52 w-full object-cover"
        />
      )}

      <div className="p-5">
        <span className="inline-block rounded-full bg-[#C9961A] px-3 py-1 text-xs font-semibold text-white">
          {post.category || "News"}
        </span>

        <Link href={`/news/${post.slug}`}>
          <h2 className="mt-4 text-xl font-bold transition hover:text-[#C9961A]">
            {post.title}
          </h2>
        </Link>

        <p className="mt-3 line-clamp-3 text-slate-600">
          {post.excerpt}
        </p>

        <Link
          href={`/news/${post.slug}`}
          className="mt-4 inline-block font-semibold text-[#C9961A] hover:text-[#B8860B]"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}