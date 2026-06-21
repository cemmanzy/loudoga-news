import Link from "next/link";

type Props = {
  posts: any[];
  mostRead?: any[];
};

export default function ArticleSidebar({
  posts,
  mostRead = [],
}: Props) {
  return (
    <aside className="space-y-8">
      {/* Related Articles */}
      {posts?.length > 0 && (
        <div className="rounded-xl border p-6">
          <h3 className="mb-4 text-xl font-bold">
            Related Articles
          </h3>

          <div className="space-y-4">
            {posts.map(
              (post, index) => (
                <Link
                  key={post._id}
                  href={`/news/${post.slug}`}
                  className="block border-b pb-4 last:border-0 hover:text-[#C9961A]"
                >
                  <span className="mr-2 font-bold text-[#C9961A]">
                    {index + 1}.
                  </span>

                  {post.title}
                </Link>
              )
            )}
          </div>
        </div>
      )}

      {/* Most Read */}
      {mostRead?.length > 0 && (
        <div className="rounded-xl border p-6">
          <h3 className="mb-4 text-xl font-bold">
            Most Read
          </h3>

          <div className="space-y-4">
            {mostRead.map(
              (post, index) => (
                <Link
                  key={post._id}
                  href={`/news/${post.slug}`}
                  className="block border-b pb-4 last:border-0 hover:text-[#C9961A]"
                >
                  <div className="flex gap-3">
                    <span className="font-bold text-[#C9961A]">
                      {index + 1}.
                    </span>

                    <div>
                      <div>
                         <p className="font-medium">
                            {post.title}
                            </p>

                         <p className="text-xs text-slate-500">
                          {post.views || 0} views
                         </p>
                        </div>

                      {post.views && (
                        <p className="text-xs text-slate-500">
                          {post.views.toLocaleString()} views
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </aside>
  );
}