"use client";

import { motion } from "framer-motion";
import { GoCode, GoPlus } from "react-icons/go";
import { FiMenu, FiLock } from "react-icons/fi";
import { TfiReload } from "react-icons/tfi";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 3 },
  show: { opacity: 1, y: 0, transition: { type: "keyframe" } },
};

export default function CodeEditor() {
  return (
    <div className="rounded-xl border border-[#30363d] overflow-hidden relative shadow-2xl bg-[#161b22]">
      <div className="flex items-center justify-between border-b border-[#30363d] p-4">
        <div className="max-md:hidden flex text-[#7d8590] font-medium">
          <GoCode size={30} />
        </div>
        <div className="flex items-center justify-between px-2 py-1 rounded-md bg-[#0d1117] border-[0.5px] border-[#30363d] w-full md:w-auto">
          <FiLock size={16} className="text-[#7d8590]" />
          <div className="md:px-8 px-2 text-white whitespace-nowrap overflow-hidden text-[14px] text-ellipsis">
            https://github.com/davipm
          </div>
          <TfiReload size={16} className="text-[#7d8590]" />
        </div>
        <div className="max-md:hidden flex text-[#7d8590] font-medium">
          <GoPlus size={30} />
        </div>
      </div>

      <div className="flex items-stretch">
        <div className="hidden md:block p-6 border-r border-[#30363d]">
          <FiMenu size={30} className="text-[#7d8590]" />
        </div>
      </div>
    </div>
  );
}
