import { client } from "@/lib/sanity";
import { hotStoriesCategoryQuery } from "@/lib/queries";
import CategoryPage from "@/components/news/CategoryPage";

export default async function HotStoriesPage() {
  const posts = await client.fetch(
    hotStoriesCategoryQuery
  );

  return (
    <CategoryPage
      title="Hot Stories"
      posts={posts}
    />
  );
}