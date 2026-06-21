export default function Newsletter() {
  return (
    <section className="mt-20 rounded-2xl border border-[#C9961A]/30 bg-[#FFF9EC] p-10">
      <h2 className="text-3xl font-black text-black">
        Stay Updated
      </h2>

      <p className="mt-3 text-slate-600">
        Get the latest news, interviews,
        spotlight stories, business updates,
        and opinions delivered directly to
        your inbox.
      </p>

      <form className="mt-6 flex flex-col gap-4 md:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 rounded-lg border border-[#C9961A]/30 p-4 focus:border-[#C9961A] focus:outline-none"
        />

        <button
          type="submit"
          className="rounded-lg bg-[#C9961A] px-6 py-4 font-semibold text-white transition hover:bg-[#B8860B]"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}