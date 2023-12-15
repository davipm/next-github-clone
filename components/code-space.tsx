import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const lineVariant = {
  hidden: { height: 0 },
  show: { height: "100%" },
};

export default function CodeSpace() {
  return (
    <div className="relative flex bg-code-space bg-cover md:pl-10">
      <div className="relative flex flex-row items-center">
        <motion.div
          variants={lineVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="h-full w-[3px] origin-top bg-increase"
        />

        <Image
          src="/git-branch-productivity.svg"
          alt="git-branch-productivity"
          width={81}
          height={485}
          className="absolute bottom-4 left-0 hidden h-auto max-w-[9vw] delay-100 md:block"
          style={{ left: "calc(50% - 2px)" }}
        />
      </div>

      <div className="pl-16 md:pl-16 lg:pl-24">
        <div className="my-8 flex items-center pb-6 max-md:flex-col-reverse sm:my-12 md:my-16 md:flex-row md:pb-20 lg:gap-x-5">
          <div className="mb-2 w-full py-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "tween" }}
              viewport={{ once: true }}
              className="md:pr-6"
            >
              <h2 className="mb-4 w-full text-2xl text-[#7d8590] max-lg:text-[20px] max-md:w-10/12 lg:w-full">
                <span className="font-semibold text-white">GitHub Codespaces</span> offers a complete dev environment in
                seconds, so you can code, build, test, and open pull requests from any repo anywhere.
              </h2>
              <Link href="/" className="group inline-block py-1 text-xl font-semibold text-white">
                Check out GitHub Codespaces
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-[2px] ml-3 inline-block -translate-x-1 text-white transition duration-300 ease-in group-hover:translate-x-0"
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
                <div className="h-[2.5px] w-0 origin-left scale-0 rounded-full bg-white transition duration-300 ease-in group-hover:w-11/12 group-hover:scale-100" />
              </Link>
            </motion.div>
          </div>
          <div className="w-full px-6 py-4">
            <div className="relative">
              <div className="relative flex flex-row">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "tween" }}
                  className="right-7 top-[-200px] z-[1] shadow-2xl sm:absolute"
                >
                  <Image src="/pic.png" alt="Pic" className="rounded-md" width={300} height={262} />

                  <Image
                    src="/codespace/illo-cursor.png"
                    alt="illo-cursor"
                    className="js-build-in-item build-in-slideX-left build-in-animate absolute h-auto delay-200"
                    width={60}
                    height={96}
                    style={{
                      right: "20%",
                      bottom: "23%",
                      width: "30px",
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ type: "tween", delay: 0.1 }}
                  viewport={{ once: true }}
                  className="build-in-animate relative bottom-0 hidden max-w-[373px] overflow-hidden rounded-md sm:block"
                >
                  <Image
                    src="/codespace/illo-ports.png"
                    alt="Illo Ports"
                    className="width-full d-block h-auto"
                    width={746}
                    height={368}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-10 pb-4 md:mb-32 "
        >
          <div className="py-4 text-left">
            <div className="relative z-[1] inline-block rounded-full border-2 border-[#7ee787] bg-gradient-to-r from-[#7ee787] to-[#aff5b4] bg-clip-text px-2 font-medium text-transparent">
              <span className="text-[12px] font-semibold">Did you know?</span>
            </div>
            <h3 className="mb-2 mt-3 text-3xl font-medium text-[#7ee787] md:text-5xl lg:text-6xl">22% increase</h3>
            <p className="mb-3 text-base font-medium text-white md:text-xl">
              in developer productivity <br /> after three years with GitHub<sup>1</sup>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
