"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);

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
        <div className="relative">
          <img
            src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg"
            alt="lines hero"
            aria-hidden="true"
            className="w-[437px] h-[637px]"
          />

          <div className="mx-auto my-3">
            <span className="relative z-10">
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                version="1.1"
                width="24"
                data-view-component="true"
                className="text-white"
              >
                <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
              </svg>
              <span className="absolute left-0 top-0 w-6 h-full filter blur-lg bg-[#dd7df7]" />
            </span>
          </div>
        </div>

        <div className="absolute pt-32 mt-28 max-md:px-4 ml-4 md:ml-12">
          <div className="relative md:top-20 mb-[24px]">
            <a
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              href="#"
              className="border border-neutral-600 copilot rounded-full inline-block"
            >
              <div className="flex items-center p-3 px-5">
                <img
                  src="https://github.githubassets.com/images/modules/site/eyebrow-banner-icon-copilot-x.svg"
                  alt="copilot"
                  className="w-[44px] h-[44px] block flex-grow-0 flex-shrink-0 mr-6 max-md:mr-3"
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`text-white transition ease-in duration-150 ${
                      hovered ? "translate-x-0 " : "-translate-x-1"
                    }`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                    ></path>
                    <path
                      className={`text-white transition ease-in duration-150 ${
                        hovered ? "opacity-100" : "opacity-0 "
                      }`}
                      stroke="currentColor"
                      d="M1.75 8H11"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>

          <h1 className="md:mt-24 lg:mt-28 sm:mt-10 relative z-2 max-md:mb-5 text-[48px] md:text-[72px] max-sm:leading-[60px] max-md:leading-[80px] lg:text-[80px] font-semibold text-white">
            Let&apos;s build from&nbsp;here
          </h1>
        </div>
      </div>
    </div>
  );
}
