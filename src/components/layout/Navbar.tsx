import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Navbar() {
  return (
    <nav className="border-b">
      <Container>
        <div className="flex gap-6 py-4 overflow-x-auto whitespace-nowrap scrollbar-hide">

          <Link
            href="/"
            className="hover:text-[#C9961A] transition-colors"
          >
            Home
          </Link>

          <Link
            href="/category/news"
            className="hover:text-[#C9961A] transition-colors"
          >
            News
          </Link>

          <Link
            href="/category/business"
            className="hover:text-[#C9961A] transition-colors"
          >
            Business
          </Link>

          <Link
            href="/category/politics"
            className="hover:text-[#C9961A] transition-colors"
          >
            Politics
          </Link>

          <Link
            href="/category/technology"
            className="hover:text-[#C9961A] transition-colors"
          >
            Technology
          </Link>

          <Link
            href="/category/sports"
            className="hover:text-[#C9961A] transition-colors"
          >
            Sports
          </Link>

          <Link
            href="/category/entertainment"
            className="hover:text-[#C9961A] transition-colors"
          >
            Entertainment
          </Link>

          <Link
            href="/category/hot-stories"
            className="hover:text-[#C9961A] transition-colors"
          >
            Hot Stories
          </Link>

          <Link
            href="/category/interviews"
            className="hover:text-[#C9961A] transition-colors"
          >
            Interviews
          </Link>

          <Link
            href="/category/spotlight"
            className="hover:text-[#C9961A] transition-colors"
          >
            Spotlight
          </Link>

          <Link
            href="/category/views"
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