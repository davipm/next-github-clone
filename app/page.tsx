import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Productivity from "@/components/productivity";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />

      <div
        className="overflow-hidden bg-code-space bg-no-repeat md:bg-hero-patter"
        style={{ backgroundPositionX: "-1350px" }}
      >
        <section id="hero" className="px-3">
          <Hero />
        </section>

        <section id="productivity" className="overflow-hidden px-4 pt-8">
          <Productivity />
        </section>
      </div>

      <Footer />
    </main>
  );
}
