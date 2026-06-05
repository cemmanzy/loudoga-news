import { client } from "@/lib/sanity";
import { spotlightCategoryQuery } from "@/lib/queries";
import CategoryPage from "@/components/news/CategoryPage";

export default async function SpotlightPage() {
  const posts = await client.fetch(
    spotlightCategoryQuery
  );

  return (
    <CategoryPage
      title="Spotlight"
      posts={posts}
    />
  );
}