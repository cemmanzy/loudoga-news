import NewsCard from "./NewsCard";

type Props = {
  title: string;
  posts: any[];
};

export default function CategoryPage({
  title,
  posts,
}: Props) {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="mb-8 text-4xl font-black">
        {title}
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <NewsCard
            key={post._id}
            post={post}
          />
        ))}
      </div>
    </main>
  );
}