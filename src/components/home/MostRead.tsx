import Link from "next/link";

type Props = {
  posts: any[];
};

export default function MostRead({
  posts,
}: Props) {
  if (!posts?.length) return null;

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-3xl font-black">
        Most Read
      </h2>

      <div className="rounded-xl border p-6">
        {posts.map(
          (post, index) => (
            <Link
              key={post._id}
              href={`/news/${post.slug}`}
              className="block border-b py-4 last:border-0 hover:text-red-600"
            >
              <span className="mr-3 font-bold text-red-600">
                {index + 1}.
              </span>

              {post.title}
            </Link>
          )
        )}
      </div>
    </section>
  );
}