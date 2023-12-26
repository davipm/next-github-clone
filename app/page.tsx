import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Productivity from "@/components/productivity";
import Header from "@/components/header";
import Collaboration from "@/components/collaboration";
import Globe from "@/components/globe";
import Security from "@/components/security";

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

        <div id="collaboration" className="overflow-hidden px-4 pt-8">
          <Collaboration />
        </div>

        <div id="security" className="overflow-hidden px-4 pb-16 pt-8">
          <Security />
        </div>

        <Globe />

        <div className="relative z-20 mx-auto max-w-[1280px] px-5">
          <ul className="space-y-1 pt-16 text-sm text-[#7d8590] lg:w-9/12">
            <li>
              <sup id="footnote-1">1</sup> The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced Security,
              a commissioned study conducted by Forrester Consulting, 2022. Results are for a composite organization
              based on interviewed customers.
            </li>
            <li>
              <sup id="footnote-2">2</sup> GitHub, Octoverse 2022 The state of open source software.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  );
}
