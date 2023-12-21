"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedLink from "@/components/animated-link";

export default function Discount() {
  return (
    <div className="relative flex bg-code-space bg-cover md:pl-10">
      <div className="relative flex flex-row items-center">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          className="h-full w-[3px] bg-increase-1"
        />
        <Image
          src="/git-branch-collaboration.svg"
          alt="git-branch-collaboration"
          width={81}
          height={485}
          className="relative left-0 top-[8rem] hidden h-auto max-w-[9vw] delay-100 md:block"
        />
      </div>

      <div>
        <div className="my-8 flex items-center pb-6 max-md:flex-col-reverse sm:my-12 md:my-16 md:flex-row md:pb-20 lg:gap-x-5">
          <div className="mb-2 w-full py-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              viewport={{ once: true }}
              className="md:pr-6"
            >
              <h2 className="mb-4 w-full text-2xl text-[#7d8590] max-lg:text-[20px] max-md:w-10/12 lg:w-full">
                <span className="font-semibold text-white">GitHub Issues and GitHub Projects</span> supply flexible
                project management tools that adapt to your team alongside your code.
              </h2>

              <AnimatedLink label="Explore GitHube Issue" />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            viewport={{ once: true }}
            className="w-full px-6 py-4"
          >
            <div className="relative">
              <div className="relative">
                <div className="right-0 top-[-200px] z-10 shadow-2xl md:absolute lg:top-[-300px]">
                  <Image
                    src="/illu-projects.png"
                    alt="illu-projects"
                    width={1190}
                    height={1004}
                    className="block h-auto w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-10 pb-4 md:mb-32"
        >
          <div className="py-4 text-left">
            <div className="relative z-10 inline-block rounded-full border-2 border-[#ffc2b2] bg-gradient-to-r from-[#ffa28b] to-[#ffc2b2] bg-clip-text px-2 font-medium text-transparent">
              <span className="text-[12px] font-semibold">Did you know?</span>
            </div>
            <h3 className="mb-2 mt-3 text-3xl font-medium text-[#ffa28b] md:text-5xl lg:text-6xl">80% reduction</h3>
            <p className="mb-3 text-base font-medium text-white md:text-xl">
              in onboarding time with GitHub <sup>1</sup>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
