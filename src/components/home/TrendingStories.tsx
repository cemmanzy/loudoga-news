import NewsCard from "@/components/news/NewsCard";

type Props = {
  posts: any[];
};

export default function TrendingStories({
  posts,
}: Props) {
  if (!posts?.length) return null;

  return (
    <section className="mt-16">
      <div className="mb-8 flex items-center gap-3">
        <span className="text-2xl">🔥</span>

        <h2 className="text-3xl font-black">
          Trending Stories
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <NewsCard
            key={post._id}
            post={post}
          />
        ))}
      </div>
    </section>
  );
}