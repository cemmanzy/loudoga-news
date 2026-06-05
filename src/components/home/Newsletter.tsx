export default function Newsletter() {
  return (
    <section className="mt-20 rounded-2xl bg-slate-900 px-8 py-16 text-center text-white">
      <h2 className="text-4xl font-black">
        Stay Updated
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-slate-300">
        Get the latest news, interviews, spotlight
        stories and opinions delivered directly to
        your inbox.
      </p>

      <form className="mt-8 flex flex-col gap-4 md:flex-row md:justify-center">
        <input
          type="email"
          placeholder="Enter your email address"
          className="rounded-lg px-4 py-3 bg-white text-black md:w-96"
        />

        <button
          type="submit"
          className="rounded-lg bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}