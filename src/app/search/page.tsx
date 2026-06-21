import { client } from "@/lib/sanity";
import {
  featuredPostQuery,
} from "@/lib/queries";
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

  const posts = [];

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
          className="w-full rounded-lg border p-4"
        />
      </form>

      {q && (
        <p className="mb-6 text-slate-600">
          Results for:{" "}
          <strong>{q}</strong>
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <NewsCard
            key={post._id}
            post={post}
          />
        ))}
      </div>

      {q && posts.length === 0 && (
        <p>
          No articles found.
        </p>
      )}
    </main>
  );
}