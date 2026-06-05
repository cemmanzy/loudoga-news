import NewsCard from "@/components/news/NewsCard";

type Props = {
  title: string;
  posts: any[];
};

export default function HomeSection({
  title,
  posts,
}: Props) {
  if (!posts?.length) return null;

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-black">
          {title}
        </h2>
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