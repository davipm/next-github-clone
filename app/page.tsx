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
            className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image"
          />
        </div>

        <div className="px-3">
          <Hero />
        </div>

        <div id="productivity" className="px-4 pt-8 overflow-hidden">
          <Productivity />
        </div>
      </div>

      <Footer />
    </main>
  );
}
