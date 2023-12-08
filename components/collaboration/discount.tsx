"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Discount() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="flex relative md:pl-10">
      <img src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp" alt="" aria-hidden="true" width="2712" height="2712" />
      <div className="flex items-center flex-row relative">
        <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} className="w-[3px] h-full increase1"></motion.div>
        <img
          src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-collaboration.svg"
          alt=""
          aria-hidden="true"
          width="81"
          height="485"
          style={{
            left: 'calc(50% - 2px)',
            height: 'auto',
            maxWidth: '9vw',
            transitionDelay: '100ms'
          }}
          className="hidden md:block absolute bottom-4 left-0"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}
