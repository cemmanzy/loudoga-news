export const revalidate = 60;
import { client } from "@/lib/sanity";
import { searchPostsQuery } from "@/lib/queries";
import NewsCard from "@/components/news/NewsCard";

type SearchProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchProps) {
  const { q } = await searchParams;

  const posts =
    q && q.trim().length > 0
      ? await client.fetch(
          searchPostsQuery,
          {
            search: q,
          }
        )
      : [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-black">
        Search Articles
      </h1>

      <form
        action="/search"
        className="mb-10"
      >
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Search news..."
          className="w-full rounded-xl border p-4"
        />
      </form>

      {q && (
        <p className="mb-8 text-slate-600">
          Search results for{" "}
          <strong>"{q}"</strong>
        </p>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <NewsCard
            key={post._id}
            post={post}
          />
        ))}
      </div>

      {q && posts.length === 0 && (
        <div className="rounded-xl border bg-slate-50 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold">
            No articles found
          </h2>

          <p className="text-slate-600">
            Try searching with different keywords.
          </p>
        </div>
      )}
    </main>
  );
}