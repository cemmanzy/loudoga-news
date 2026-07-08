import { client } from "@/lib/sanity";
import { categoryPostsQuery } from "@/lib/queries";
import NewsCard from "@/components/news/NewsCard";

export default async function BusinessPage() {
  const posts = await client.fetch(
    categoryPostsQuery,
    {
      category: "Business",
    }
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-8 text-5xl font-black">
        Business
      </h1>

      <p className="mb-10 text-lg text-slate-600">
        Latest business news, market updates,
        manufacturing, finance, investment,
        entrepreneurship, and the economy.
      </p>

      {posts.length === 0 ? (
        <p>No Business articles available.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <NewsCard
              key={post._id}
              post={post}
            />
          ))}
        </div>
      )}
    </main>
  );
}