import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Productivity from "@/components/productivity";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="overflow-hidden bg-hero-patter bg-cover bg-no-repeat" style={{ backgroundPosition: "63%" }}>
        <section className="px-3">
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
