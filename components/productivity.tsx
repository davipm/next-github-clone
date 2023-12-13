"use client";

import { motion } from "framer-motion";

import CodeEditor from "@/components/code-editor";

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
    </div>
  );
}
