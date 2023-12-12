"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IoCode } from "react-icons/io5";

import { AnimatedArrow } from "@/components/animated-arrow";

export default function Hero() {
  return (
    <div className="relative max-w-[1280px] lg:pt-32 md:px-10 mx-auto pt-16">
      <motion.img
        src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp"
        alt="hero drone"
        className="absolute top-28 w-1/4 h-auto right-0 xl:right-0"
        animate={{ y: [-25, 0, -25] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      <div className="flex">
        <div className="absolute">
          <Image
            src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg"
            alt="lines hero"
            width={437}
            height={637}
          />

          <div className="mx-auto my-3">
            <span className="relative z-10">
              <IoCode className="text-white" size={24} />
              <span className="absolute left-0 top-0 w-6 h-full filter blur-lg bg-[#dd7df7]" />
            </span>
          </div>

          <div className="bg-line-gradient ml-[11px] max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md" />
        </div>

        <div className="relative z-20 pt-32 mt-28 max-md:px-4 ml-4 md:ml-12">
          <div className="group relative md:top-20 mb-[24px]">
            <a
              href="#"
              className="border border-neutral-600 copilot rounded-full inline-block"
            >
              <div className="flex items-center p-3 px-5">
                <Image
                  src="https://github.githubassets.com/images/modules/site/eyebrow-banner-icon-copilot-x.svg"
                  alt="copilot"
                  width={44}
                  height={44}
                  className="block flex-grow-0 flex-shrink-0 mr-2"
                />

                <div className="md:pr-5 pr-3 md:mr-2 md:pl-2">
                  <div className="font-medium text-white text-base max-md:text-sm leading-5">
                    Introducing GitHub Copilot X
                  </div>
                  <div className="text-neutral-500 max-md:text-sm text-base">
                    Your Ai pair programmer is leveling Up
                  </div>
                </div>

                <div className="ml-auto">
                  <AnimatedArrow />
                </div>
              </div>
            </a>
          </div>

          <h1 className="md:mt-24 lg:mt-28 sm:mt-10 relative z-2 max-md:mb-5 text-[48px] md:text-[72px] max-sm:leading-[60px] max-md:leading-[80px] lg:text-[80px] font-semibold text-white">
            Let&apos;s build from&nbsp;here
          </h1>

          <p className="relative z-10 text-[24px] md:text-[28px] lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[44px] mb-5 md:mb-12 md:w-10/12 lg:w-9/12 text-[#7d8590]">
            Harnessed for productivity. Designed for collaboration. Celebrated
            for built-in security. Welcome to the platform developers&nbsp;love.
          </p>

          <div className="flex lg:w-11/12 md:space-x-5 max-md:flex-col">
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
                      className="h-12 focus:outline-none max-md:rounded-md md:rounded-s-md right-0 w-full placeholder:text-[16px] pl-3"
                      placeholder="Email address"
                    />
                  </dd>
                </dl>

                <button
                  type="button"
                  className="select-none mb-10 md:mb-0 py-3 w-full home-campaign-signup-button text-[16px] max-md:rounded-md md:rounded-e-md text-white font-semibold transition-all duration-300 hover:opacity-90"
                >
                  Sign up for GitHub
                </button>
              </div>
            </form>

            <span className="border-t-[1px] md:border-l-[1px] border-neutral-700 md:mx-10 mb-3 md:mb-0" />

            <a
              href="#"
              className="flex items-center group w-full select-none md:w-auto justify-center text-[16px] py-3 px-5 max-md:mt-4 rounded-md border-[#ae88f9] border-[1.5px] text-white"
            >
              Start a free enterprise trial
              <AnimatedArrow />
            </a>
          </div>

          <div className="md:my-32 my-24">
            <p className="text-base leading-[24px] text-[#7d8590]">
              Trusted by the world&apos;s leading&nbsp;organizations&nbsp;↘︎
            </p>

            <div className="flex flex-wrap justify-center xl:justify-between items-center py-4 gap-5">
              <div className="relative w-[150px] h-[44px]">
                <Image
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg"
                  alt="Stripe logo"
                  title="Stripe logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative w-[150px] h-[44px]">
                <Image
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg"
                  alt="Pinterest logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative w-[150px] h-[44px]">
                <Image
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg"
                  alt="KPMG logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative w-[150px] h-[44px]">
                <Image
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg"
                  alt="Mercedes-Benz logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative w-[150px] h-[44px]">
                <Image
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg"
                  alt="P&amp;G logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative w-[150px] h-[44px]">
                <Image
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg"
                  alt="Telus logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
