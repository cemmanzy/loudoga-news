export const revalidate = 60;
import { client } from "@/lib/sanity";
import { categoryPostsQuery } from "@/lib/queries";
import NewsCard from "@/components/news/NewsCard";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const categoryMap: Record<string, string> = {
  news: "News",
  business: "Business",
  politics: "Politics",
  technology: "Technology",
  sports: "Sports",
  entertainment: "Entertainment",
  "hot-stories": "Hot Stories",
  interviews: "Interviews",
  spotlight: "Spotlight",
  views: "Views",
};

export default async function CategoryPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const category = categoryMap[slug];

  if (!category) {
    notFound();
  }

  const posts = await client.fetch(
    categoryPostsQuery,
    {
      category,
    }
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-4 text-5xl font-black">
        {category}
      </h1>

      <p className="mb-10 text-lg text-slate-600">
        Latest {category.toLowerCase()} stories from
        Loud Oga News.
      </p>

      {posts.length === 0 ? (
        <p>No articles available.</p>
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