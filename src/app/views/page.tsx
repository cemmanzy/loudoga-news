import { client } from "@/lib/sanity";
import { viewsCategoryQuery } from "@/lib/queries";
import CategoryPage from "@/components/news/CategoryPage";

export default async function ViewsPage() {
  const posts = await client.fetch(
    viewsCategoryQuery
  );

  return (
    <CategoryPage
      title="Views"
      posts={posts}
    />
  );
}