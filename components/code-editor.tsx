"use client";

import { motion } from "framer-motion";
import { GoCode, GoPlus } from "react-icons/go";
import { FiMenu } from "react-icons/fi";

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
          <svg
            aria-hidden="true"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-lock color-fg-subtle flex-shrink-0 text-[#7d8590]"
          >
            <path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z"></path>
          </svg>
          <div className="md:px-8 px-2 text-white whitespace-nowrap overflow-hidden text-[14px] text-ellipsis">
            https://github.com/davipm
          </div>
          <svg
            aria-hidden="true"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-sync color-fg-subtle flex-shrink-0 text-[#7d8590]"
          >
            <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
          </svg>
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
