import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Header() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex flex-col items-center py-6">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Loud Oga News"
              width={240}
              height={160}
              className="mx-auto"
            />
          </Link>

          <p className="mt-4 max-w-2xl text-center text-slate-600">
            Latest News, Interviews, Spotlight Stories,
            Public Affairs, Entertainment & Opinions
          </p>
        </div>
      </Container>
    </header>
  );
}

