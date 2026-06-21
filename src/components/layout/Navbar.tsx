import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Navbar() {
  return (
    <nav className="border-b border-[#C9961A]/20">
      <Container>
        <div className="flex gap-8 py-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link
            href="/"
            className="hover:text-[#C9961A] transition-colors"
          >
            Home
          </Link>

          <Link
            href="/news"
            className="hover:text-[#C9961A] transition-colors"
          >
            News
          </Link>

          <Link
            href="/hot-stories"
            className="hover:text-[#C9961A] transition-colors"
          >
            Hot Stories
          </Link>

          <Link
            href="/interviews"
            className="hover:text-[#C9961A] transition-colors"
          >
            Interviews
          </Link>

          <Link
            href="/spotlight"
            className="hover:text-[#C9961A] transition-colors"
          >
            Spotlight
          </Link>

          <Link
            href="/views"
            className="hover:text-[#C9961A] transition-colors"
          >
            Views
          </Link>

          <Link
            href="/search"
            className="hover:text-[#C9961A] transition-colors"
          >
            Search
          </Link>
        </div>
      </Container>
    </nav>
  );
}