"use client";

import { motion } from "framer-motion";
import { GoLock } from "react-icons/go";
import HoverCard from "@/components/hover-card";
import Projects from "@/components/projects";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.4,
//     },
//   },
// };
//
// const item = {
//   hidden: { opacity: 0, scale: 0.8 },
//   show: { opacity: 1, scale: 1 },
// };

export default function Security() {
  return (
    <div className="mx-auto max-w-[1280px]">
      <div className="flex space-x-3 md:space-x-10 md:pl-7">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative text-white"
          >
            <GoLock size={24} />
            <span className="absolute left-0 top-0 z-30 h-full w-full bg-[#939aff] blur-[20px]" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          className="mb-24 md:w-10/12"
        >
          <h2 className="mb-7 text-[20px] font-medium text-white md:text-2xl">Security</h2>
          <h3 className="mb-7 text-[28px] font-medium text-white delay-300 max-lg:leading-10 max-md:leading-8 md:text-[40px] lg:text-5xl">
            <span className="text-[#939aff]">Embed security into the developer workflow.</span> With GitHub, developers
            can secure their code in minutes and organizations can automatically comply with regulations.
          </h3>
        </motion.div>
      </div>
      <HoverCard backgroundColor="#939aff" direction="" left="0">
        <div className="mx-auto flex w-10/12 flex-col"></div>
      </HoverCard>
      <Projects />
      <div className="relative z-10"></div>
      <div className="flex flex-col gap-10 md:flex-row"></div>
    </div>
  );
}
