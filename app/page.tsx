import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Productivity from "@/components/productivity";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="overflow-hidden">
        <div className="relative">
          <img
            src="/hero-bg.webp"
            alt="Bg image"
            className="image absolute top-0 -z-30 transition duration-200 ease-in max-xl:right-[-1050px] xl:right-[-970px]"
          />
        </div>

        <div className="px-3">
          <Hero />
        </div>

        <div id="productivity" className="overflow-hidden px-4 pt-8">
          <Productivity />
        </div>
      </div>

      <Footer />
    </main>
  );
}
