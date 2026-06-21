import Link from "next/link";

type HeroProps = {
  title: string;
  excerpt: string;
  slug: string;
  imageUrl?: string;
};

export default function Hero({
  title,
  excerpt,
  slug,
  imageUrl,
}: HeroProps) {
  return (
    <section className="mb-12">
      <div className="overflow-hidden rounded-2xl border border-[#C9961A]/30">
        <div className="grid lg:grid-cols-2">
          <div className="p-10">
            <span className="inline-block rounded-full bg-[#C9961A] px-4 py-1 text-sm font-medium text-white">
              Featured Story
            </span>

            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              {excerpt}
            </p>

            <Link
              href={`/news/${slug}`}
              className="mt-8 inline-block rounded-lg bg-black px-6 py-3 text-white transition hover:bg-[#C9961A]"
            >
              Read Full Story
            </Link>
          </div>

          {imageUrl && (
            <div>
              <img
                src={imageUrl}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}