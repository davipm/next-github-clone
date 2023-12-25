import Image from "next/image";

import { AnimatedArrow } from "@/components/animated-arrow";
import Earth from "@/components/earths/earth";
import SecondEarth from "@/components/earths/second-earth";

export default function Globe() {
  return (
    <div className="bg-footer-galaxy relative overflow-hidden bg-cover">
      <div className="relative z-20 mx-auto max-w-[1280px]">
        <div className="relative my-8 flex flex-col text-center sm:my-12 md:my-16 md:items-center">
          <div className="mb-2 flex flex-col items-center justify-center py-3">
            <h2 className="mx-auto mb-2 px-4 text-3xl font-bold text-white md:w-9/12 md:text-4xl lg:text-5xl">
              The place for anyone from anywhere to build anything
            </h2>
            <p className="mx-auto mb-4 px-4 text-base text-[#7d8590] md:w-7/12 md:text-xl">
              Whether you’re scaling your startup or just learning how to code, GitHub is your home. Join the world’s
              largest developer platform to build the innovations that empower humanity. Let’s&nbsp;build
              from&nbsp;here.
            </p>

            <div className="flex items-center justify-center max-lg:mt-5 max-lg:w-full max-lg:flex-col max-lg:space-y-3 lg:ml-5 lg:space-x-5">
              <a
                href="#"
                className="group flex items-center justify-center rounded-md bg-white px-14 py-3 text-[20px] font-bold"
              >
                Sign up for GitHub
                <AnimatedArrow />
              </a>

              <a
                href="#"
                className="group flex items-center justify-center space-x-2 rounded-md border border-neutral-500 px-4 py-3 text-[20px] font-bold text-white"
              >
                Start a free enterprise trail
                <AnimatedArrow />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 max-sm:hidden">
        <Earth />
      </div>

      <div className="relative z-20 sm:hidden">
        <SecondEarth />
      </div>

      <div className="relative z-20 mt-[-200px] flex items-center justify-center">
        <Image
          src="/astrocat.png"
          alt="Mona looking at the galaxy"
          width={801}
          height={807}
          className="pointer-events-none h-[403px] w-[400px] object-cover"
        />
      </div>
    </div>
  );
}
