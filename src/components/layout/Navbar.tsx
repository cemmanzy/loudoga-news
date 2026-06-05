import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Navbar() {
  return (
    <nav className="border-b">
      <Container>
        <div className="flex gap-6 py-4 overflow-x-auto">
          <Link href="/">Home</Link>
          <Link href="/news">News</Link>
          <Link href="/hot-stories">
            Hot Stories
          </Link>
          <Link href="/interviews">
            Interviews
          </Link>
          <Link href="/spotlight">
            Spotlight
          </Link>
          <Link href="/views">
            Views
          </Link>
          <Link href="/search">
            Search
          </Link>
        </div>
      </Container>
    </nav>
  );
}