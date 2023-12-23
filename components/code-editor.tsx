import Image from "next/image";
import dynamic from "next/dynamic";
import { GoCode, GoPlus } from "react-icons/go";
import { FiMenu, FiLock } from "react-icons/fi";
import { FaGithub, FaRegBell } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const CodeBlock = dynamic(() => import("../components/code-block"), { ssr: false });
import ConsoleAnimated from "@/components/console-animated";

export default function CodeEditor() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-dark-blue bg-light-blue shadow-2xl">
      <div className="text-custom-gray flex items-center justify-between border-b border-dark-blue p-4">
        <div className="flex font-medium max-md:hidden">
          <GoCode size={30} />
        </div>
        <div className="flex w-full items-center justify-between rounded-md border border-dark-blue bg-dark-black px-2 py-1 md:w-auto">
          <FiLock size={16} />
          <div className="overflow-hidden text-ellipsis whitespace-nowrap px-2 text-sm text-white md:px-8">
            https://github.com/davipm
          </div>
          <TfiReload size={16} />
        </div>
        <div className="flex font-medium max-md:hidden">
          <GoPlus size={30} />
        </div>
      </div>

      <div className="flex items-stretch">
        <div className="hidden border-r border-dark-blue p-6 md:block">
          <FiMenu size={30} className="text-custom-gray" />
        </div>
        <div className="w-full min-w-0">
          <div className="text-custom-gray border-b border-dark-blue">
            <ul className="flex px-3 pt-4">
              <li className="text-gray-300 rounded-t-md bg-dark-black px-3 py-2">index.html</li>
              <li className="px-3 py-2">script.js</li>
              <li className="px-3 py-2">package.json</li>
            </ul>

            <div className="bg-dark-black p-4">
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
          <div className="text-custom-gray p-4">
            <ul className="mb-3 flex">
              <li className="text-gray-200 pr-3">Terminal</li>
              <li className="pr-3">Output</li>
              <li className="pr-3">Problems</li>
              <li className="pr-3">Debug Console</li>
            </ul>

            <ConsoleAnimated />
          </div>
        </div>
        <div className="hidden w-full border-l border-dark-blue md:block">
          <div className="text-gray-100 flex items-center justify-between px-4 pb-2 pt-[22px]">
            <FiMenu size={25} />
            <FaGithub size={25} />
            <FaRegBell sieze={25} />
          </div>
          <div className="flex h-full items-center justify-between bg-[#040d21] px-6">
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
