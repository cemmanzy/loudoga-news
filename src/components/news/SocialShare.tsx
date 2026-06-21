"use client";

type Props = {
  title: string;
  url: string;
};

export default function SocialShare({
  title,
  url,
}: Props) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="mt-8 border-t pt-6">
      <h3 className="mb-4 font-semibold">
        Share this article
      </h3>

      <div className="flex flex-wrap gap-3">
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-green-600 px-4 py-2 text-white"
        >
          WhatsApp
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          Facebook
        </a>

        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          X
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-sky-700 px-4 py-2 text-white"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}