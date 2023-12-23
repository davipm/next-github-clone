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
    <div className="bg-light-blue border-dark-blue relative overflow-hidden rounded-xl border shadow-2xl">
      <div className="border-dark-blue flex items-center justify-between border-b p-4">
        <div className="text-gray flex font-medium max-md:hidden">
          <GoCode size={30} />
        </div>
        <div className="bg-dark-black flex w-full items-center justify-between rounded-md border-[0.5px] border-[#30363d] px-2 py-1 md:w-auto">
          <FiLock size={16} className="text-gray" />
          <div className="overflow-hidden text-ellipsis whitespace-nowrap px-2 text-sm text-white md:px-8">
            https://github.com/davipm
          </div>
          <TfiReload size={16} className="text-gray" />
        </div>
        <div className="text-gray flex font-medium max-md:hidden">
          <GoPlus size={30} />
        </div>
      </div>

      <div className="flex items-stretch">
        <div className="border-dark-blue hidden border-r p-6 md:block">
          <FiMenu size={30} className="text-gray" />
        </div>
        <div className="w-full min-w-0">
          <div className="text-gray border-dark-blue border-b">
            <ul className="flex px-3 pt-4">
              <li className="bg-dark-black rounded-t-md px-3 py-2 text-gray-300">index.html</li>
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
          <div className="text-gray p-4">
            <ul className="mb-3 flex">
              <li className="pr-3 text-gray-200">Terminal</li>
              <li className="pr-3">Output</li>
              <li className="pr-3">Problems</li>
              <li className="pr-3">Debug Console</li>
            </ul>

            <ConsoleAnimated />
          </div>
        </div>
        <div className="border-dark-blue hidden w-full border-l md:block">
          <div className="flex items-center justify-between px-4 pb-2 pt-[22px] text-gray-100">
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
