"use client";

import { useState } from "react";

export default function SearchResults() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        placeholder="Search articles..."
        className="w-full border rounded-xl p-4"
      />

      <p className="mt-4 text-slate-500">
        Search term: {query}
      </p>
    </div>
  );
}