import Link from "next/link";
import NewsCard from "@/components/news/NewsCard";

type Props = {
  title: string;
  posts: any[];
  href?: string;
};

export default function HomeSection({
  title,
  posts,
  href,
}: Props) {
  if (!posts?.length) return null;

  return (
    <section className="mt-16">
      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-3xl font-black">
          {title}
        </h2>

        {href && (
          <Link
            href={href}
            className="font-semibold text-[#C9961A] hover:underline"
          >
            View All →
          </Link>
        )}

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <NewsCard
            key={post._id}
            post={post}
          />
        ))}
      </div>
    </section>
  );
}