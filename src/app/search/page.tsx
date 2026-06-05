import SearchResults from "@/components/search/SearchResults";

export default function SearchPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black mb-8">
        Search
      </h1>

      <SearchResults />
    </main>
  );
}