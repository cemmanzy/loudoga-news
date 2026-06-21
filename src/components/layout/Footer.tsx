import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#C9961A]/20 bg-[#FFF9EC]">
      <Container>
        <div className="py-10">
          <h3 className="text-2xl font-bold text-black">
            Loud Oga News & TV
          </h3>

          <p className="mt-3 max-w-2xl text-gray-600">
            Delivering trusted news, exclusive interviews,
            spotlight stories, public affairs, entertainment,
            lifestyle updates, and opinions that matter.
          </p>

          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <Link
              href="/about"
              className="transition hover:text-[#C9961A]"
            >
              About Us
            </Link>

            <Link
              href="/newsroom"
              className="transition hover:text-[#C9961A]"
            >
              Newsroom
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-[#C9961A]"
            >
              Contact
            </Link>

            <Link
              href="/privacy-policy"
              className="transition hover:text-[#C9961A]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/disclaimer"
              className="transition hover:text-[#C9961A]"
            >
              Disclaimer
            </Link>
          </div>

          <div className="mt-8 border-t border-[#C9961A]/20 pt-6">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Loud Oga News & TV.
              All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}