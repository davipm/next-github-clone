import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <div className="relative z-50">
        <div className="absolute w-full">
          <Navbar />
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="relative">
          <img
            src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
            alt="Bg image"
            className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image"
          />
        </div>

        <div className="px-3">
          <Hero />
        </div>
      </div>
    </main>
  );
}
