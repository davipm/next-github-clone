"use client";

import { motion } from "framer-motion";
import { GoLock } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";

import HoverCard from "@/components/hover-card";
import Projects from "@/components/projects";

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
              <div className="shadow-mktg mb-10 rounded-md p-6 md:mt-8" style={{ background: "#EBF5FF33" }}>
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
              <div className="h-[2px] w-[37px] bg-[#D1D5DA]"></div>
              <div className="inline-block rounded-full bg-[#6e7681] p-1" style={{ boxShadow: "0 0 0 2px #444D56" }} />
            </motion.div>

            <motion.div variants={item} transition={{ type: "tween" }} className="w-full">
              <div
                className="inline-block rounded-t-md px-6 pb-1 pt-2 text-[15px] font-medium text-white"
                style={{ background: "#EBF5FF33" }}
              >
                Steps
              </div>

              <div className="shadow-mktg mb-10 rounded-md rounded-tl-none p-6" style={{ background: "#EBF5FF33" }}>
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

      <div className="relative z-10"></div>
      <div className="flex flex-col gap-10 md:flex-row"></div>
    </div>
  );
}
