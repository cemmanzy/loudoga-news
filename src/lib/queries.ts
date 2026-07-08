export const featuredPostQuery = `
*[_type == "post" && featured == true][0]{
  _id,
  title,
  excerpt,
  publishedAt,
  mainImage,
  "slug": slug.current
}
`;

export const latestPostsQuery = `
*[_type == "post" && category->title == "News"]
| order(_createdAt desc)[0...12]{
  _id,
  title,
  excerpt,
  mainImage,
  "slug": slug.current
}
`;

export const hotStoriesQuery = `
*[_type == "post" && category->title == "Hot Stories"]{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage
}
`;

export const singlePostQuery = `
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  excerpt,
  body,
  publishedAt,
  mainImage,
  readTime,

  author->{
    name,
    bio,
    image,
    "slug": slug.current
  },

  "category": category->title,
  "slug": slug.current
}
`;


export const newsCategoryQuery = `
*[_type == "post" && category->title == "News"] | order(_createdAt desc){
  _id,
  title,
  excerpt,
  mainImage,
  "slug": slug.current,
  "category": category->title
}
`;

export const hotStoriesCategoryQuery = `
*[_type == "post" && category->title == "Hot Stories"] | order(_createdAt desc){
  _id,
  title,
  excerpt,
  mainImage,
  "slug": slug.current,
  "category": category->title
}
`;

export const interviewsCategoryQuery = `
*[_type == "post" && category->title == "Interviews"] | order(_createdAt desc){
  _id,
  title,
  excerpt,
  mainImage,
  "slug": slug.current,
  "category": category->title
}
`;

export const spotlightCategoryQuery = `
*[_type == "post" && category->title == "Spotlight"] | order(_createdAt desc){
  _id,
  title,
  excerpt,
  mainImage,
  "slug": slug.current,
  "category": category->title
}
`;

export const viewsCategoryQuery = `
*[_type == "post" && category->title == "Views"] | order(_createdAt desc){
  _id,
  title,
  excerpt,
  mainImage,
  "slug": slug.current,
  "category": category->title
}
`;

export const homepageHotStoriesQuery = `
*[_type == "post" && category->title == "Hot Stories"][0...3]{
  _id,
  title,
  excerpt,
  mainImage,
  "slug": slug.current,
  "category": category->title
}
`;

export const homepageSpotlightQuery = `
*[_type == "post" && category->title == "Spotlight"][0...3]{
  _id,
  title,
  excerpt,
  mainImage,
  "slug": slug.current,
  "category": category->title
}
`;

export const homepageInterviewsQuery = `
*[_type == "post" && category->title == "Interviews"][0...3]{
  _id,
  title,
  excerpt,
  mainImage,
  "slug": slug.current,
  "category": category->title
}
`;

export const homepageViewsQuery = `
*[_type == "post" && category->title == "Views"][0...3]{
  _id,
  title,
  excerpt,
  mainImage,
  "slug": slug.current,
  "category": category->title
}
`;

export const relatedPostsQuery = `
*[
  _type == "post" &&
  category->title == $category &&
  slug.current != $slug
][0...3]{
  _id,
  title,
  excerpt,
  mainImage,
  "slug": slug.current
}
`;

export const authorQuery = `
*[_type == "author" && slug.current == $slug][0]{
  _id,
  name,
  bio,
  image,
  "slug": slug.current
}
`;

export const authorPostsQuery = `
*[_type == "post" && author->slug.current == $slug]
| order(publishedAt desc){
  _id,
  title,
  excerpt,
  mainImage,
  "slug": slug.current,
  "category": category->title
}
`;

export const breakingNewsQuery = `
*[_type == "post" && isBreaking == true]
| order(publishedAt desc)[0...10]{
  _id,
  title,
  "slug": slug.current
}
`;

export const trendingPostsQuery = `*[_type == "post"] | order(publishedAt desc)[0...6]{   _id,
  title,
  excerpt,
  mainImage,
  "slug": slug.current,
  "category": category->title
}`;

export const mostReadPostsQuery = `
*[_type == "post"]
| order(views desc)[0...5]{
  _id,
  title,
  views,
  "slug": slug.current
}
`;

export const searchPostsQuery = `
*[
  _type == "post" &&
  (
    title match $search + "*" ||
    excerpt match $search + "*"
  )
] | order(publishedAt desc){
  _id,
  title,
  excerpt,
  mainImage,
  "slug": slug.current,
  "category": category->title
}
`;

export const categoryPostsQuery = `
*[
  _type == "post" &&
  category->title == $category
]
| order(publishedAt desc){
  _id,
  title,
  excerpt,
  publishedAt,
  mainImage,
  "slug": slug.current,
  "category": category->title
}
`;

