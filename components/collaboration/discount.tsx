"use client";

// import { useState } from "react";
import { motion } from "framer-motion";

export default function Discount() {
  // const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex md:pl-10">
      <img
        src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp"
        alt=""
        aria-hidden="true"
        width="2712"
        height="2712"
      />
      <div className="relative flex flex-row items-center">
        <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} className="bg-increase-1 h-full w-[3px]" />
        <img
          src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-collaboration.svg"
          alt=""
          aria-hidden="true"
          width="81"
          height="485"
          style={{
            left: "calc(50% - 2px)",
            height: "auto",
            maxWidth: "9vw",
            transitionDelay: "100ms",
          }}
          className="absolute bottom-4 left-0 hidden md:block"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="pl-6 md:pl-16 lg:pl-24">
        <div className="my-8 flex items-center pb-6 max-md:flex-col-reverse sm:my-12 md:my-16 md:flex-row md:pb-20 lg:gap-x-5">
          <div className="mb-2 w-full py-4"></div>
        </div>
      </div>
    </div>
  );
}
