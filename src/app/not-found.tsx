import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-black">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-4 text-slate-600">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-red-600 px-6 py-3 text-white"
      >
        Return Home
      </Link>
    </main>
  );
}