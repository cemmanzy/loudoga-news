import Link from "next/link";
import { client } from "@/lib/sanity";
import { breakingNewsQuery } from "@/lib/queries";

export default async function TopBar() {
  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const breakingNews = await client.fetch(
    breakingNewsQuery
  );

  return (
    <div className="bg-black text-white text-sm overflow-hidden">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <span className="shrink-0">
          {today}
        </span>

        {breakingNews?.length > 0 ? (
          <div className="flex flex-1 items-center overflow-hidden">
            <span className="shrink-0 font-bold text-[#C9961A]">
              BREAKING:
            </span>

            <div className="ml-6 overflow-hidden flex-1">
              <div className="ticker">
                {[...breakingNews, ...breakingNews].map(
                  (item: any, index) => (
                    <Link
                      key={`${item._id}-${index}`}
                      href={`/news/${item.slug}`}
                      className="mx-8 whitespace-nowrap hover:text-[#C9961A]"
                    >
                      {item.title}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        ) : (
          <span>
            Breaking News • Loud Oga News
          </span>
        )}
      </div>
    </div>
  );
}