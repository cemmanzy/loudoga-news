import { client } from "@/lib/sanity";
import { interviewsCategoryQuery } from "@/lib/queries";
import CategoryPage from "@/components/news/CategoryPage";

export default async function InterviewsPage() {
  const posts = await client.fetch(
    interviewsCategoryQuery
  );

  return (
    <CategoryPage
      title="Interviews"
      posts={posts}
    />
  );
}