import Container from "@/components/shared/Container";

export default function Header() {
  return (
    <header>
      <Container>
        <div className="py-8 text-center">
          <h1 className="text-5xl font-black">
            LOUDOGA NEWS
          </h1>

          <p className="mt-3 text-slate-500">
            Latest News, Interviews,
            Spotlight Stories & Opinions
          </p>
        </div>
      </Container>
    </header>
  );
}