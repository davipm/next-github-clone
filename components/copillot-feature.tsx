"use client";

import { useState } from "react";

import HoverCard from "@/components/HoverCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { type: "tween" } },
};

export default function CopillotFeature() {
  const [item, setItem] = useState(null);

  return (
    <HoverCard backgroundColor="" direction="" left="">
      <div>
        <p></p>
      </div>
    </HoverCard>
  );
}
