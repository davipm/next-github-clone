"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IoCode } from "react-icons/io5";

import { AnimatedArrow } from "@/components/animated-arrow";
import { logos } from "@/public/logos";

export default function Hero() {
  return (
    <div className="relative mx-auto max-w-[1280px] pt-16 md:px-10 lg:pt-32">
      <motion.img
        src="/hero-drone.png"
        alt="hero drone"
        className="absolute right-0 top-28 h-auto w-1/4 xl:right-0"
        animate={{ y: [-25, 0, -25] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      <div className="flex">
        <div className="absolute">
          <Image src="/lines-hero.svg" alt="lines hero" width={437} height={637} />

          <div className="mx-auto my-3">
            <span className="relative z-10">
              <IoCode className="text-white" size={24} />
              <span className="absolute left-0 top-0 h-full w-6 bg-[#dd7df7] blur-lg filter" />
            </span>
          </div>

          <div className="max-ssm:h-[900px] max-sssm:h-[1150px] line ml-[11px] h-[450px] w-[3px] rounded-md bg-line-gradient max-md:h-[650px] max-md:w-[2px] max-sm:h-[750px]" />
        </div>

        <div className="relative z-20 ml-4 mt-28 pt-32 max-md:px-4 md:ml-12">
          <div className="group relative mb-[24px] md:top-20">
            <a href="#" className="copilot inline-block rounded-full border border-neutral-600">
              <div className="flex items-center p-3 px-5">
                <Image
                  src="/eyebrow-banner-icon-copilot-x.svg"
                  alt="copilot"
                  width={44}
                  height={44}
                  className="mr-2 block flex-shrink-0 flex-grow-0"
                />

                <div className="pr-3 md:mr-2 md:pl-2 md:pr-5">
                  <div className="text-base font-medium leading-5 text-white max-md:text-sm">
                    Introducing GitHub Copilot X
                  </div>
                  <div className="text-base text-neutral-500 max-md:text-sm">
                    Your Ai pair programmer is leveling Up
                  </div>
                </div>

                <div className="ml-auto">
                  <AnimatedArrow />
                </div>
              </div>
            </a>
          </div>

          <h1 className="z-2 relative text-[48px] font-semibold text-white max-md:mb-5 max-md:leading-[80px] max-sm:leading-[60px] sm:mt-10 md:mt-24 md:text-[72px] lg:mt-28 lg:text-[80px]">
            Let&apos;s build from&nbsp;here
          </h1>

          <p className="relative z-10 mb-5 text-[24px] leading-[30px] text-[#7d8590] md:mb-12 md:w-10/12 md:text-[28px] md:leading-[36px] lg:w-9/12 lg:text-[32px] lg:leading-[44px]">
            Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the
            platform developers&nbsp;love.
          </p>

          <div className="flex max-md:flex-col md:space-x-5 lg:w-11/12">
            <form>
              <div className="grid max-md:grid-rows-2 md:grid-cols-2">
                <dl>
                  <dd>
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      autoComplete="off"
                      spellCheck="false"
                      className="right-0 h-12 w-full pl-3 placeholder:text-[16px] focus:outline-none max-md:rounded-md md:rounded-s-md"
                      placeholder="Email address"
                    />
                  </dd>
                </dl>

                <button
                  type="button"
                  className="home-campaign-signup-button mb-10 w-full select-none py-3 text-[16px] font-semibold text-white transition-all duration-300 hover:opacity-90 max-md:rounded-md md:mb-0 md:rounded-e-md"
                >
                  Sign up for GitHub
                </button>
              </div>
            </form>

            <span className="mb-3 border-t-[1px] border-neutral-700 md:mx-10 md:mb-0 md:border-l-[1px]" />

            <a
              href="#"
              className="group flex w-full select-none items-center justify-center rounded-md border-[1.5px] border-[#ae88f9] px-5 py-3 text-[16px] text-white max-md:mt-4 md:w-auto"
            >
              Start a free enterprise trial
              <AnimatedArrow />
            </a>
          </div>

          <div className="my-24 md:my-32">
            <p className="text-base leading-[24px] text-[#7d8590]">
              Trusted by the world&apos;s leading&nbsp;organizations&nbsp;↘︎
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 py-4 xl:justify-between">
              {logos.map(({ src, title }) => (
                <div className="relative h-[44px] w-[150px]" key={title}>
                  <Image src={src} alt={title} title={title} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
