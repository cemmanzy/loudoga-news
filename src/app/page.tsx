import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/image";

import Hero from "@/components/home/Hero";
import HomeSection from "@/components/home/HomeSection";
import NewsCard from "@/components/news/NewsCard";
import Newsletter from "@/components/home/Newsletter";
import TrendingStories from "@/components/home/TrendingStories";
import SocialFollow from "@/components/home/SocialFollow";

import {
  featuredPostQuery,
  latestPostsQuery,
  homepageCategoryQuery,
  trendingPostsQuery,
} from "@/lib/queries";

async function getData() {
  const featuredPost =
    await client.fetch(featuredPostQuery);

  const latestPosts =
    await client.fetch(latestPostsQuery);

  const business =
  await client.fetch(
    homepageCategoryQuery,
    { category: "Business" }
  );

const politics =
  await client.fetch(
    homepageCategoryQuery,
    { category: "Politics" }
  );

const technology =
  await client.fetch(
    homepageCategoryQuery,
    { category: "Technology" }
  );

const sports =
  await client.fetch(
    homepageCategoryQuery,
    { category: "Sports" }
  );

const entertainment =
  await client.fetch(
    homepageCategoryQuery,
    { category: "Entertainment" }
  );

const hotStories =
  await client.fetch(
    homepageCategoryQuery,
    { category: "Hot Stories" }
  );

const interviews =
  await client.fetch(
    homepageCategoryQuery,
    { category: "Interviews" }
  );

const spotlight =
  await client.fetch(
    homepageCategoryQuery,
    { category: "Spotlight" }
  );

const views =
  await client.fetch(
    homepageCategoryQuery,
    { category: "Views" }
  );

  const trendingPosts =
  await client.fetch(
    trendingPostsQuery
  );

  return {
  featuredPost,
  latestPosts,
  business,
  politics,
  technology,
  sports,
  entertainment,
  hotStories,
  interviews,
  spotlight,
  views,
  trendingPosts,
};
}


export default async function Home() {
  const {
  featuredPost,
  latestPosts,
  business,
  politics,
  technology,
  sports,
  entertainment,
  hotStories,
  interviews,
  spotlight,
  views,
  trendingPosts,
} = await getData();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {featuredPost && (
        <Hero
          title={featuredPost.title}
          excerpt={featuredPost.excerpt}
          slug={featuredPost.slug}
          imageUrl={
            featuredPost.mainImage
              ? urlFor(featuredPost.mainImage)
                  .width(1200)
                  .height(800)
                  .url()
              : undefined
          }
        />
      )}

      <section className="mt-12">
        <h2 className="mb-6 text-3xl font-bold">
          Latest News
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post: any) => (
            <NewsCard
              key={post._id}
              post={post}
            />
          ))}
        </div>
      </section>

      <HomeSection
  title="Business"
  posts={business}
  href="/category/business"
/>

<HomeSection
  title="Politics"
  posts={politics}
  href="/category/politics"
/>

<HomeSection
  title="Technology"
  posts={technology}
  href="/category/technology"
/>

<HomeSection
  title="Sports"
  posts={sports}
  href="/category/sports"
/>

<HomeSection
  title="Entertainment"
  posts={entertainment}
  href="/category/entertainment"
/>

<HomeSection
  title="Hot Stories"
  posts={hotStories}
  href="/category/hot-stories"
/>

<HomeSection
  title="Interviews"
  posts={interviews}
  href="/category/interviews"
/>

<HomeSection
  title="Spotlight"
  posts={spotlight}
  href="/category/spotlight"
/>

<HomeSection
  title="Views"
  posts={views}
  href="/category/views"
/>

      <TrendingStories
       posts={trendingPosts}
      />
      <Newsletter />

      <SocialFollow />
    </main>
  );
}