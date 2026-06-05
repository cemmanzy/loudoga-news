import { client } from "@/lib/sanity";
import { newsCategoryQuery } from "@/lib/queries";
import CategoryPage from "@/components/news/CategoryPage";

export default async function NewsPage() {
  const posts = await client.fetch(
    newsCategoryQuery
  );

  return (
    <CategoryPage
      title="News"
      posts={posts}
    />
  );
}