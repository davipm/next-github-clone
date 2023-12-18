"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const CopillotFeature = dynamic(() => import("../components/copillot-feature"), { ssr: false });
import CodeEditor from "@/components/code-editor";
import CodeSpace from "@/components/code-space";
import HoverCard from "@/components/hover-card";

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

              <a href="#" className="group inline-block w-max font-semibold text-white md:text-xl">
                Discover GitHub Actions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-[3px] ml-3 inline-block -translate-x-1 text-white transition duration-300 ease-in group-hover:translate-x-0"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                  />
                  <path
                    className="text-white opacity-0 transition duration-150 ease-in group-hover:opacity-100"
                    stroke="currentColor"
                    d="M1.75 8H11"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="h-[3px] w-0 origin-left scale-0 rounded-full bg-white transition duration-300 ease-in group-hover:w-11/12 group-hover:scale-100" />
              </a>
            </div>
          </HoverCard>
        </div>
      </div>
    </div>
  );
}
