import { GoCode, GoPlus } from "react-icons/go";
import { FiMenu, FiLock } from "react-icons/fi";
import { TfiReload } from "react-icons/tfi";
import { FaGithub, FaRegBell } from "react-icons/fa";

import CodeBlock from "@/components/code-block";
import ConsoleAnimated from "@/components/console-animated";
import Image from "next/image";

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
        <div className="min-w-0 w-full">
          <div className="border-b border-[#30363d] text-[#7d8590]">
            <ul className="flex px-3 pt-4">
              <li className="px-3 py-2 rounded-t-md bg-[#0d1117] text-gray-300">index.html</li>
              <li className="px-3 py-2">script.js</li>
              <li className="px-3 py-2">package.json</li>
            </ul>

            <div className="bg-[#0d1117] p-4">
              <div className="flex">
                <div>
                  {new Array(12).fill("").map((_, index) => (
                    <div className="pr-2" key={index + 1}>
                      {index + 1}
                    </div>
                  ))}
                </div>
                <CodeBlock />
              </div>
            </div>
          </div>
          <div className="p-4 text-[#7d8590]">
            <ul className="flex mb-3">
              <li className="pr-3 text-gray-200">Terminal</li>
              <li className="pr-3">Output</li>
              <li className="pr-3">Problems</li>
              <li className="pr-3">Debug Console</li>
            </ul>

            <ConsoleAnimated />
          </div>
        </div>
        <div className="md:block hidden border-l border-[#30363d] w-full">
          <div className="flex items-center justify-between px-[16px] pt-[22px] pb-2 text-gray-100">
            <FiMenu size={25} />
            <FaGithub size={25} />
            <FaRegBell sieze={25} />
          </div>
          <div className="px-6 flex items-center justify-between h-full bg-[#040d21]">
            <Image
              src="/globe.jpg"
              alt="Planet earth with visualization of GitHub activity crossing the globe"
              width={1238}
              height={1404}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
