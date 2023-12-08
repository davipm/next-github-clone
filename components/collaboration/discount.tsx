"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Discount() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="flex relative md:pl-10">
      <img src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp" alt="" aria-hidden="true" width="2712" height="2712" />
      <div></div>
    </div>
  )
}
