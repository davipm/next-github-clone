"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuHeartHandshake } from "react-icons/lu";

import { sponsors } from "@/public/sponsors";
import Discount from "@/components/discount";
import HoverCard from "@/components/hover-card";
import AnimatedLink from "@/components/animated-link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Collaboration() {
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
            <LuHeartHandshake size={24} />
            <span className="z-3 absolute left-0 top-0 h-full w-full bg-secondary blur-[20px] filter"></span>
          </motion.div>

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-7 h-full w-[3px] rounded-md bg-gradient-to-b from-[#ffd6cc] via-[#ec6547] to-transparent"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          viewport={{ once: true }}
          className="mb-24 md:w-10/12"
        >
          <h2 className="mb-7 text-xl font-medium text-white delay-200 md:text-2xl">Collaboration</h2>
          <h3 className="mb-7 text-[28px] font-medium text-white delay-300 max-lg:leading-10 max-md:leading-8 md:text-[40px] lg:text-5xl">
            <span className="text-secondary">Supercharge collaboration.</span> We provide unlimited repositories,
            best-in-class version control, and the world’s most powerful open source community—so your team can work
            more efficiently together.
          </h3>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Image
          src="/issues-plan.png"
          alt="Illustration of project table view with cards grouped by 'Feature planning' phase."
          width={2500}
          height={1500}
          className="block h-auto w-full rounded-lg border border-[#30363d] italic"
        />
      </motion.div>

      <Discount />

      <div className="flex items-center justify-between">
        <div className="flex justify-between max-md:flex-col md:space-x-10">
          <HoverCard backgroundColor="#ffa28b" direction="flex-col" left="0">
            <div className="flex-1 flex-col p-8 sm:p-10 md:flex lg:py-16 lg:pl-16 lg:pr-32">
              <p className="mb-6 text-xl font-medium text-custom-gray md:text-2xl">
                <span className="font-semibold text-white">GitHub Actions</span> automates your build, test, and
                deployment workflow with simple and secure CI/CD.
              </p>

              <AnimatedLink label="Enable GitHub Discussion" />
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="overflow-hidden rounded-s-lg"
            >
              <Image
                src="/illu-discussions.webp"
                alt="illu-discussions"
                width={1209}
                height={890}
                className="h-auto w-full"
              />
            </motion.div>
          </HoverCard>
          <HoverCard backgroundColor="#ffa28b" direction="flex-col" left="-400px">
            <div className="flex-1 flex-col p-8 sm:p-10 md:flex lg:py-16 lg:pl-16 lg:pr-32">
              <p className="mb-6 text-xl font-medium text-custom-gray md:text-2xl">
                <span className="font-semibold text-white">GitHub Mobile</span> fits your projects in your pocket, so
                you never miss a beat while on the go.
              </p>

              <AnimatedLink label="Check out pull request" />
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="overflow-hidden rounded-s-lg"
            >
              <Image
                src="/illu-pull-requests.webp"
                alt="illu-discussions"
                width={1209}
                height={890}
                className="h-auto w-full"
              />
            </motion.div>
          </HoverCard>
        </div>
      </div>

      <HoverCard backgroundColor="#ffa28b">
        <div className="flex-1 flex-col justify-between p-10 py-20 md:flex md:space-y-20">
          <p className="mb-6 text-xl font-medium text-[#7d8590] md:text-2xl">
            <span className="font-medium text-white">GitHub Sponsors</span> lets you support your favorite open source
            maintainers and projects.
          </p>

          <AnimatedLink label="Check out pull request" />
        </div>
        <div className="z-10 flex-1 overflow-hidden rounded-s-lg">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="relative -right-6 -top-[120px] -mt-6 flex max-h-[480px] w-full -rotate-12 flex-wrap p-6"
          >
            {sponsors.map((sponsor, index) => (
              <motion.div key={index} variants={item} transition={{ type: "tween" }} className="w-1/3">
                <a
                  href="#"
                  target="_blank"
                  className="m-2 flex flex-col items-center rounded-md border border-[#30363d] bg-[#161b22] p-6"
                >
                  <Image src={sponsor.src} alt={sponsor.name} width={96} height={96} className="block rounded-md" />
                  <div className="my-2 text-[#7d8590]">{sponsor.name}</div>
                  <button type="button" className="rounded-md bg-[#21262d] text-[#c9d1d9]">
                    <span className="flex items-center justify-between space-x-2 px-2 py-1">
                      <IoMdHeartEmpty size={20} />
                      <span>Sponsor</span>
                    </span>
                  </button>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </HoverCard>

      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="-mt-[20px] ml-3 h-[160px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#797ef9] to-[#abb4ff] md:ml-10"
      />
    </div>
  );
}
