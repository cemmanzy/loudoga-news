export default function SocialFollow() {
  return (
    <section className="mt-20 rounded-2xl border border-[#C9961A]/30 bg-[#FFF9EC] p-10">
      <h2 className="text-4xl font-black text-black">
        Follow Loud Oga News
      </h2>

      <p className="mt-3 text-slate-600">
        Stay connected with us across all platforms.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href="https://web.facebook.com/profile.php?id=61591101692417"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:opacity-90"
        >
          Facebook
        </a>

        <a
          href="https://x.com/loudoganewstv"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-black px-5 py-3 text-white transition hover:bg-[#C9961A]"
        >
          X
        </a>

        <a
          href="https://www.youtube.com/channel/UCaUG5qWticeE4HI3aZlkjOg"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-red-600 px-5 py-3 text-white transition hover:opacity-90"
        >
          YouTube
        </a>

        <a
          href="https://www.instagram.com/loudoganews/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-pink-600 px-5 py-3 text-white transition hover:opacity-90"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}