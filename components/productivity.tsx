"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const CopillotFeature = dynamic(() => import("../components/copillot-feature"), { ssr: false });
import CodeEditor from "@/components/code-editor";
import CodeSpace from "@/components/code-space";
import HoverCard from "@/components/hover-card";
import AnimatedLink from "@/components/animated-link";

export default function Productivity() {
  return (
    <div className="mx-auto max-w-[1280px]">
      <div className="flex space-x-3 md:space-x-10 md:pl-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              version="1.1"
              width="24"
              data-view-component="true"
              className="octicon octicon-briefcase text-white"
            >
              <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
            </svg>

            <span className="absolute left-0 top-0 z-10 h-full w-full bg-[#7ee787] blur-lg filter" />
          </motion.div>

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-7 h-full w-[3px] rounded-md bg-gradient-to-b from-[#7ee787]"
          />
        </div>
        <div className="mb-24 md:w-10/12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: true }}
            className="js-build-in-item build-in-slideX-left build-in-animate mb-7 text-[20px] font-medium text-white delay-200 md:text-2xl"
          >
            Productivity
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: true }}
            className="js-build-in-item build-in-slideX-left build-in-animate mb-7 text-[28px] font-medium text-white delay-300 max-lg:leading-10 max-md:leading-8 md:text-[40px] lg:text-5xl"
          >
            <span className="text-[#7ee787]">Accelerate high-quality software development.</span>
            Our AI-powered platform drives innovation with tools that boost developer velocity.
          </motion.h3>
        </div>
      </div>

      <CodeEditor />
      <CodeSpace />

      <div className="relative z-10">
        <CopillotFeature />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex justify-between max-md:flex-col md:space-x-10">
          <HoverCard backgroundColor="#7ee787" direction="flex-col" left="0">
            <div className="flex-1 flex-col p-8 sm:p-10 md:flex lg:py-16 lg:pl-16 lg:pr-32">
              <p className="mb-6 text-xl font-medium text-[#7d8590] md:text-2xl">
                <span className="font-semibold text-white">GitHub Actions</span> automates your build, test, and
                deployment workflow with simple and secure CI/CD.
              </p>

              <AnimatedLink label="Discover GitHub Actions" />
            </div>
            <div className="overflow-hidden rounded-s-lg">
              <Image src="/illu-actions.png" alt="illu-actions" width={1209} height={890} className="h-auto w-full" />
            </div>
          </HoverCard>
          <HoverCard backgroundColor="#7ee787" direction="flex-col" left="-400px">
            <div className="flex-1 flex-col p-8 sm:p-10 md:flex lg:py-16 lg:pl-16 lg:pr-32">
              <p className="mb-6 text-xl font-medium text-[#7d8590] md:text-2xl">
                <span className="font-semibold text-white">GitHub Mobile</span> fits your projects in your pocket, so
                you never miss a beat while on the go.
              </p>

              <AnimatedLink label="Get GitHub Mobile" />
            </div>
            <div className="overflow-hidden rounded-s-lg">
              <Image src="/illu-mobile.png" alt="illu-mobile" width={1209} height={890} className="h-auto w-full" />
            </div>
          </HoverCard>
        </div>
      </div>

      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="ml-3 mt-[20px] h-[160px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#ea6045] to-[#ffa28b] md:ml-10"
      />
    </div>
  );
}
