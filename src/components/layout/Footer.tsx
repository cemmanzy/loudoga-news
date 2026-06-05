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

          <p className="mt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Loudoga News.
          </p>
        </div>
      </Container>
    </footer>
  );
}