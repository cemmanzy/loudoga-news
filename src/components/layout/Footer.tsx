import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <Container>
        <div className="py-10">
          <h3 className="text-2xl font-bold">
            Loudoga News
          </h3>

          <p className="mt-3 text-gray-600">
            Trusted news, interviews,
            spotlight stories and opinions.
          </p>

          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <Link
              href="/about"
              className="hover:text-red-600"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="hover:text-red-600"
            >
              Contact
            </Link>

            <Link
              href="/privacy-policy"
              className="hover:text-red-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="/disclaimer"
              className="hover:text-red-600"
            >
              Disclaimer
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Loudoga News.
            All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}