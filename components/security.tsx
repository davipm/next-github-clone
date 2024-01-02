"use client";

import { motion } from "framer-motion";
import { GoLock } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";

import HoverCard from "@/components/hover-card";
import Projects from "@/components/projects";
import AnimatedLink from "@/components/animated-link";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Security() {
  return (
    <div className="mx-auto max-w-[1280px]">
      <div className="flex space-x-3 md:space-x-10 md:pl-7">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="relative text-white"
          >
            <GoLock size={24} />
            <span className="absolute left-0 top-0 z-30 h-full w-full bg-[#939aff] blur-[20px]" />
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-7 h-full w-[3px] rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          viewport={{ once: true }}
          className="mb-24 md:w-10/12"
        >
          <h2 className="mb-7 text-[20px] font-medium text-white md:text-2xl">Security</h2>
          <h3 className="mb-7 text-[28px] font-medium text-white delay-300 max-lg:leading-10 max-md:leading-8 md:text-[40px] lg:text-5xl">
            <span className="text-[#939aff]">Embed security into the developer workflow.</span> With GitHub, developers
            can secure their code in minutes and organizations can automatically comply with regulations.
          </h3>
        </motion.div>
      </div>

      <HoverCard backgroundColor="#939aff" left="0">
        <div className="mx-auto flex w-10/12 flex-col">
          <div className="p-6 text-[#7d8590]">
            <div className="font-medium">cmake.yml</div>
            <span className="text-[12px]">on: push</span>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="relative mx-auto flex w-10/12 flex-1 flex-col justify-between text-[17px] md:flex-row md:gap-10 lg:my-10"
          >
            <motion.div variants={item} transition={{ type: "tween" }} className="w-full">
              <div className="mb-10 rounded-md bg-[#EBF5FF33] p-6 shadow-mktg md:mt-8">
                <ul className="-mb-6">
                  <li className="mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <FaCheckCircle size={24} className="mr-2 text-[#3fb950]" />
                      <span className="font-medium text-white">Build</span>
                    </div>
                    <span className="text-sm text-[#7d8590]">1m 21s</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              transition={{ type: "tween" }}
              className="absolute z-10 flex items-center max-md:top-[88px] max-md:rotate-90 md:left-[46%] md:top-12 lg:left-[47%]"
            >
              <div className="inline-block rounded-full bg-[#6e7681] p-1" style={{ boxShadow: "0 0 0 2px #444D56" }} />
              <div className="h-[2px] w-[37px] bg-[#D1D5DA]" />
              <div className="inline-block rounded-full bg-[#6e7681] p-1" style={{ boxShadow: "0 0 0 2px #444D56" }} />
            </motion.div>

            <motion.div variants={item} transition={{ type: "tween" }} className="w-full">
              <div className="inline-block rounded-t-md bg-[#EBF5FF33] px-6 pb-1 pt-2 text-[15px] font-medium text-white">
                Steps
              </div>

              <div className="mb-10 rounded-md rounded-tl-none bg-[#EBF5FF33] p-6 shadow-mktg">
                <ul className="-mb-6">
                  <li className="mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <FaCheckCircle size={24} className="mr-2 text-[#3fb950]" />
                      <span className="font-medium text-white">Build</span>
                    </div>
                    <span className="text-[14px] text-[#7d8590]">1m 21s</span>
                  </li>
                  <li className="mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <FaCheckCircle size={24} className="mr-2 text-[#3fb950]" />
                      <span className="font-medium text-white">Build</span>
                    </div>
                    <span className="text-[14px] text-[#7d8590]">1m 21s</span>
                  </li>
                  <li className="mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <FaCheckCircle size={24} className="mr-2 text-[#3fb950]" />
                      <span className="font-medium text-white">Build</span>
                    </div>
                    <span className="text-[14px] text-[#7d8590]">1m 21s</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </HoverCard>

      <Projects />

      <div className="relative z-10">
        <HoverCard backgroundColor="#939aff" left="0">
          <div className="my-6 flex-1 flex-col justify-between overflow-hidden p-5 py-20 md:flex md:min-w-[400px] md:space-y-20 md:p-10">
            <p className="mb-6 text-xl font-medium text-[#7d8590] md:text-2xl">
              <span className="font-medium text-white">GitHub Sponsors</span> lets you support your favorite open source
              maintainers and projects.
            </p>

            <AnimatedLink label="Invest With GitHub Sponsers" />
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween" }}
            className="flex items-center overflow-hidden rounded-r-md"
          >
            <Image src="/3.png" alt="Image 3" width={1288} height={992} className="h-auto w-full" />
          </motion.div>
        </HoverCard>
      </div>

      <div className="flex flex-col gap-10 md:flex-row">
        <HoverCard backgroundColor="#939aff" direction="flex-col" left="0">
          <div className="flex-1 flex-col p-8 sm:p-10 md:flex lg:py-16 lg:pl-16 lg:pr-32">
            <p className="mb-6 text-xl font-medium text-[#7d8590] md:text-2xl">
              <span className="font-semibold text-white">Dependabot</span> makes it easy to find and fix vulnerable
              dependencies in your supply chain.
            </p>

            <AnimatedLink label="Explore Dependabot" />
          </div>
          <div className="overflow-hidden rounded-s-lg">
            <Image src="/illu-dependabot.png" alt="dependabot" width={1209} height={890} className="h-auto w-full" />
          </div>
        </HoverCard>

        <HoverCard backgroundColor="#939aff" direction="flex-col" left="-400">
          <div className="flex-1 flex-col p-8 sm:p-10 md:flex lg:py-16 lg:pl-16 lg:pr-32">
            <p className="mb-6 text-xl font-medium text-[#7d8590] md:text-2xl">
              <span className="font-semibold text-white">Code scanning</span> is GitHub’s static code analysis tool that
              helps you remediate issues in your code.
            </p>

            <AnimatedLink label="Download the latest SAST ebook" />
          </div>
          <div className="overflow-hidden rounded-s-lg">
            <Image src="/illu-code-scanning.png" alt="dependabot" width={1209} height={890} className="h-auto w-full" />
          </div>
        </HoverCard>
      </div>
    </div>
  );
}
