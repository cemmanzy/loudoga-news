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
  homepageHotStoriesQuery,
  homepageSpotlightQuery,
  homepageInterviewsQuery,
  homepageViewsQuery,
  trendingPostsQuery
} from "@/lib/queries";

async function getData() {
  const featuredPost =
    await client.fetch(featuredPostQuery);

  const latestPosts =
    await client.fetch(latestPostsQuery);

  const hotStories =
    await client.fetch(
      homepageHotStoriesQuery
    );

  const spotlight =
    await client.fetch(
      homepageSpotlightQuery
    );

  const interviews =
    await client.fetch(
      homepageInterviewsQuery
    );

  const views =
    await client.fetch(
      homepageViewsQuery
    );

  const trendingPosts =
  await client.fetch(
    trendingPostsQuery
  );

  return {
    featuredPost,
    latestPosts,
    hotStories,
    spotlight,
    interviews,
    views,
    trendingPosts,
  };
}


export default async function Home() {
  const {
    featuredPost,
    latestPosts,
    hotStories,
    spotlight,
    interviews,
    views,
    trendingPosts
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
        title="Hot Stories"
        posts={hotStories}
      />

      <HomeSection
        title="Spotlight"
        posts={spotlight}
      />

      <HomeSection
        title="Interviews"
        posts={interviews}
      />

      <HomeSection
        title="Views"
        posts={views}
      />

      <TrendingStories
       posts={trendingPosts}
      />
      <Newsletter />

      <SocialFollow />
    </main>
  );
}