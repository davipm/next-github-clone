import Image from "next/image";
import { motion } from "framer-motion";

import AnimatedLink from "@/components/animated-link";

export default function Projects() {
  return (
    <section className="relative flex bg-code-space bg-cover md:pl-10">
      <div className="relative flex flex-row items-center">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          className="h-full w-[3px] bg-increase-2"
        />

        <Image
          src="/git-branch-security.svg"
          alt="git-branch-security"
          width={81}
          height={485}
          className="absolute bottom-4 left-0 hidden h-auto max-w-[9vw] delay-100 md:block"
          style={{ left: "calc(50% - 2px)" }}
        />
      </div>

      <div className="pl-6 md:pl-16 lg:pl-24">
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
                <span className="font-semibold text-white">GitHub Advanced Security</span> lets you gain visibility into
                your security posture, respond to threats proactively, and ship secure applications quickly.
              </h2>

              <AnimatedLink label="Get GitHub Advance Security" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            viewport={{ once: true }}
            className="relative w-full px-6 py-4"
          >
            <div className="-top-[100px] right-0 z-10 shadow-2xl md:absolute lg:-top-[180px]">
              <Image
                src="/illu-ghas-list.png"
                alt="illu-ghas-list"
                width={1190}
                height={1004}
                className="block h-auto w-full rounded-lg"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 py-4 pb-4 text-left md:mb-32"
        >
          <h4 className="inline-block rounded-full border-2 border-[#abb4ff] bg-gradient-to-r from-[#939aff] to-[#abb4ff] bg-clip-text px-2 text-[12px] font-semibold text-transparent">
            Did you know?
          </h4>
          <h3 className="mb-2 mt-3 text-3xl font-medium text-[#939aff] md:text-5xl lg:text-6xl">56 million projects</h3>
          <p className="mb-3 text-base font-medium text-white md:text-xl">
            fixed vulnerabilities with GitHub<sup>2</sup>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
