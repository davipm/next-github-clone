"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
import { GoCopilot } from "react-icons/go";
import { RiLoopLeftFill } from "react-icons/ri";

import { cn } from "@/lib/utils";
import HoverCard from "@/components/hover-card";
import AnimatedLink from "@/components/animated-link";

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
  const [showPy, setShowPy] = useState(true);
  const [showJs, setShowJs] = useState(false);
  const [showGo, setShowGo] = useState(false);
  const [count, setCount] = useState(0);

  const handlePyTab = () => {
    setShowPy(true);
    setShowGo(false);
    setShowJs(false);
  };

  const handleJsTab = () => {
    setShowPy(false);
    setShowGo(false);
    setShowJs(true);
  };

  const handleGoTab = () => {
    setShowPy(false);
    setShowGo(true);
    setShowJs(false);
  };

  return (
    <HoverCard backgroundColor="#7ee787" left="0">
      <div className="flex-1 flex-col justify-between p-8 sm:p-10 md:flex md:space-y-20 lg:py-16 lg:pl-16 lg:pr-32">
        <p className="mb-6 text-xl font-medium text-custom-gray md:text-2xl">
          <span className="font-medium text-white">GitHub Copilot</span> is your AI pair programmer that empowers you to
          complete tasks 55% faster by turning natural language prompts into coding suggestions.
        </p>

        <AnimatedLink label="Meet GitHub Copilot" />
      </div>

      <div className="shadow-3xl z-10 flex-1 overflow-hidden rounded-s-lg">
        <div className="mb-16 ml-3 mr-3 rounded-lg border border-[#30363d] bg-[#161b22] text-left text-[#161b22] shadow-card sm:ml-10 md:ml-0 md:mt-10">
          <div className="mb-0 overflow-x-auto border-b border-[#30363d] px-2 pt-2">
            <div className="flex items-center bg-[#161b22] text-custom-gray">
              <button
                type="button"
                onClick={handlePyTab}
                className={cn(
                  "flex items-center px-4 py-2",
                  showPy && "rounded-t-md border border-b-0 border-[#30363d] bg-dark-black"
                )}
              >
                <FaPython size={22} className="mr-2" />
                <span>draw_scatterplot.py</span>
              </button>
              <button
                onClick={handleJsTab}
                type="button"
                className={cn(
                  "flex items-center px-4 py-2",
                  showJs && "rounded-t-md border border-b-0 border-dark-blue bg-dark-black"
                )}
              >
                <IoLogoJavascript size={22} className="mr-2" />
                <span>time.js</span>
              </button>
              <button
                onClick={handleGoTab}
                type="button"
                className={cn(
                  "flex items-center px-4 py-2",
                  showGo && "rounded-t-md border border-b-0 border-[#30363d] bg-dark-black"
                )}
              >
                <FaGolang size={22} className="mr-2" />
                <span>memoize.go</span>
              </button>
            </div>
          </div>
          <div className={cn("relative bg-dark-black p-4", !showPy && "hidden")}>
            <div className="flex">
              <div className="text-right text-[#6e7681]">
                {Array.from({ length: 8 }, (_, index) => (
                  <div className="pr-2" key={index + 1}>
                    {index + 1}
                  </div>
                ))}
              </div>
              <div key={count} className="flex-1 overflow-x-auto rounded-b-md text-white ">
                <pre>
                  <span className="code-editor-line-mktg">
                    <span className="pl-k">import</span> <span className="pl-s1">matplotlib</span>.
                    <span className="pl-s1">pyplot</span> <span className="pl-k">as</span>{" "}
                    <span className="pl-s1">plt</span>
                  </span>
                </pre>
                <pre>
                  <span className="code-editor-line-mktg"></span>
                </pre>
                <pre>
                  <motion.span
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    className="code-editor-line-mktg"
                  >
                    <motion.span variants={item} className="pl-k js-type-letters">
                      def
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      {" "}
                    </motion.span>
                    <motion.span variants={item} className="pl-en js-type-letters">
                      draw_scatterplot
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      (
                    </motion.span>
                    <motion.span variants={item} className="pl-s1 js-type-letters">
                      x_values
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      ,{" "}
                    </motion.span>
                    <motion.span variants={item} className="pl-s1 js-type-letters">
                      y_values
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      ):
                    </motion.span>
                  </motion.span>
                </pre>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, type: "just" }}
                >
                  <pre className=" bg-[#388bfd1a]">
                    <span>
                      {" "}
                      <span className="pl-s1">plt</span>.<span className="pl-en">scatter</span>(
                      <span className="pl-s1">x_values</span>, <span className="pl-s1">y_values</span>,{" "}
                      <span className="pl-s1">s</span>
                      <span className="pl-c1">=</span>
                      <span className="pl-c1">20</span>)
                    </span>
                  </pre>
                  <pre className=" bg-[#388bfd1a]">
                    <span>
                      {" "}
                      <span className="pl-s1">plt</span>.<span className="pl-en">title</span>(
                      <span className="pl-s">&ldquo;Scatter Plot&ldquo;</span>)
                    </span>
                  </pre>
                  <pre className=" bg-[#388bfd1a]">
                    <span>
                      {" "}
                      <span className="pl-s1">plt</span>.<span className="pl-en">xlabel</span>(
                      <span className="pl-s">&ldquo;x values&ldquo;</span>)
                    </span>
                  </pre>
                  <pre className=" bg-[#388bfd1a]">
                    <span>
                      {" "}
                      <span className="pl-s1">plt</span>.<span className="pl-en">ylabel</span>(
                      <span className="pl-s">&ldquo;y values&ldquo;</span>)
                    </span>
                  </pre>
                  <pre className=" bg-[#388bfd1a]">
                    <span>
                      {" "}
                      <span className="pl-s1">plt</span>.<span className="pl-en">show</span>()
                    </span>
                  </pre>
                  <div className="color-fg-on-emphasis  js-type-row f5 row-is-visible absolute flex items-center rounded-md rounded-tl-none bg-[#1f6feb] p-2 font-bold">
                    <GoCopilot size={16} className="mr-1" />
                    Copilot
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="absolute bottom-[-60px] left-0  z-[1] mb-5 flex w-full items-center justify-center">
              <button
                onClick={() => setCount(count + 1)}
                type="button"
                className="flex items-center justify-between text-white"
              >
                <RiLoopLeftFill sieze={20} className="mr-2" />
                Replay
              </button>
            </div>
          </div>
          <div className={cn("relative bg-dark-black p-4", !showJs && "hidden")}>
            <div className="flex">
              <div className="text-right text-[#6e7681]">
                {Array.from({ length: 7 }, (_, index) => (
                  <div className="pr-2" key={index + 1}>
                    {index + 1}
                  </div>
                ))}
              </div>
              <div key={count} className="flex-1 overflow-x-auto rounded-b-md text-white">
                <pre className="">
                  <span className="code-editor-line-mktg d-inline-block">
                    <span className="pl-k">const</span> <span className="pl-s1">seconds</span>{" "}
                    <span className="pl-c1">=</span> <span className="pl-c1">3600</span>
                  </span>
                </pre>
                <pre className="">
                  <motion.span
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    className="code-editor-line-mktg d-inline-block"
                  >
                    <motion.span variants={item} className="pl-k js-type-letters">
                      const
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      {" "}
                    </motion.span>
                    <motion.span variants={item} className="pl-s1 js-type-letters">
                      minutes
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      {" "}
                    </motion.span>
                    <motion.span variants={item} className="pl-c1 js-type-letters">
                      =
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      {" "}
                    </motion.span>
                    <motion.span variants={item} className="pl-s1 js-type-letters">
                      seconds
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      {" "}
                    </motion.span>
                    <motion.span variants={item} className="pl-c1 js-type-letters">
                      /
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      {" "}
                    </motion.span>
                    <motion.span variants={item} className="pl-c1 js-type-letters">
                      60
                    </motion.span>
                  </motion.span>
                </pre>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, type: "just" }}
                >
                  <pre className=" bg-[#388bfd1a]">
                    <span>
                      <span className="pl-k">const</span> <span className="pl-s1">hours</span>{" "}
                      <span className="pl-c1">=</span> <span className="pl-s1">minutes</span>{" "}
                      <span className="pl-c1">/</span> <span className="pl-c1">60</span>
                    </span>
                  </pre>
                  <pre className=" bg-[#388bfd1a]">
                    <span>
                      <span className="pl-k">const</span> <span className="pl-s1">days</span>{" "}
                      <span className="pl-c1">=</span> <span className="pl-s1">hours</span>{" "}
                      <span className="pl-c1">/</span> <span className="pl-c1">24</span>
                    </span>
                  </pre>
                  <pre className=" bg-[#388bfd1a]">
                    <span>
                      <span className="pl-k">const</span> <span className="pl-s1">weeks</span>{" "}
                      <span className="pl-c1">=</span> <span className="pl-s1">days</span>{" "}
                      <span className="pl-c1">/</span> <span className="pl-c1">7</span>
                    </span>
                  </pre>
                  <pre className=" bg-[#388bfd1a]">
                    <span>
                      <span className="pl-k">const</span> <span className="pl-s1">months</span>{" "}
                      <span className="pl-c1">=</span> <span className="pl-s1">days</span>{" "}
                      <span className="pl-c1">/</span> <span className="pl-c1">30</span>
                    </span>
                  </pre>
                  <pre className=" bg-[#388bfd1a]">
                    <span>
                      <span className="pl-k">const</span> <span className="pl-s1">years</span>{" "}
                      <span className="pl-c1">=</span> <span className="pl-s1">months</span>{" "}
                      <span className="pl-c1">/</span> <span className="pl-c1">12</span>
                    </span>
                  </pre>
                  <div className="color-fg-on-emphasis js-type-row f5 row-is-visible absolute flex items-center rounded-md rounded-tl-none bg-[#1f6feb] p-2 font-bold shadow-xl">
                    <GoCopilot size={16} className="mr-1" />
                    Copilot
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="absolute bottom-[-60px] left-0  z-[1] mb-5 flex w-full items-center justify-center">
              <button
                onClick={() => setCount(count + 1)}
                type="button"
                className="flex items-center justify-between text-white"
              >
                <RiLoopLeftFill sieze={20} className="mr-2" />
                Replay
              </button>
            </div>
          </div>
          <div className={cn("relative bg-dark-black p-4", !showGo && "hidden")}>
            <div className="flex">
              <div className="text-right text-[#6e7681]">
                {Array.from({ length: 11 }, (_, index) => (
                  <div className="pr-2" key={index + 1}>
                    {index + 1}
                  </div>
                ))}
              </div>
              <div key={count} className="flex-1 overflow-x-auto rounded-b-md text-white">
                <pre>
                  <span className="code-editor-line-mktg d-inline-block">
                    <span className="pl-k">package</span> main
                  </span>
                </pre>
                <pre>
                  <motion.span
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    className="code-editor-line-mktg d-inline-block"
                  >
                    <motion.span variants={item} className="js-type-letters">
                      {" "}
                    </motion.span>
                    <motion.span variants={item} className="pl-k js-type-letters">
                      func
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      {" "}
                    </motion.span>
                    <motion.span variants={item} className="pl-en js-type-letters">
                      Memoize
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      (
                    </motion.span>
                    <motion.span variants={item} className="pl-s1 js-type-letters">
                      fn
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      {" "}
                    </motion.span>
                    <motion.span variants={item} className="pl-k js-type-letters">
                      func
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      {"("}
                    </motion.span>
                    <motion.span variants={item} className="pl-smi js-type-letters">
                      int
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      ){" "}
                    </motion.span>
                    <motion.span variants={item} className="pl-smi js-type-letters">
                      int
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      ){" "}
                    </motion.span>
                    <motion.span variants={item} className="pl-k js-type-letters">
                      func
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      {"("}
                    </motion.span>
                    <motion.span variants={item} className="pl-smi js-type-letters">
                      int
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      {")"}{" "}
                    </motion.span>
                    <motion.span variants={item} className="pl-smi js-type-letters">
                      int
                    </motion.span>
                    <motion.span variants={item} className="js-type-letters">
                      {" "}
                      {"{"}{" "}
                    </motion.span>
                  </motion.span>
                </pre>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, type: "just" }}
                >
                  <pre className="bg-[#388bfd1a]">
                    <span>
                      {" "}
                      <span className="pl-s1">cache</span> <span className="pl-c1">:=</span>{" "}
                      <span className="pl-en">make</span>(<span className="pl-k">map</span>[
                      <span className="pl-smi">int</span>]<span className="pl-smi">int</span>)
                    </span>
                  </pre>
                  <pre className="bg-[#388bfd1a]">
                    <span>
                      {" "}
                      <span className="pl-k">return</span> <span className="pl-k">func</span>(
                      <span className="pl-s1">n</span> <span className="pl-smi">int</span>){" "}
                      <span className="pl-smi">int</span> {"{"}
                    </span>
                  </pre>
                  <pre className="bg-[#388bfd1a]">
                    <span>
                      {" "}
                      <span className="pl-k">if</span> <span className="pl-s1">v</span>,{" "}
                      <span className="pl-s1">ok</span> <span className="pl-c1">:=</span>{" "}
                      <span className="pl-s1">cache</span>[<span className="pl-s1">n</span>];{" "}
                      <span className="pl-s1">ok</span> {"{"}
                    </span>
                  </pre>
                  <pre className="bg-[#388bfd1a]">
                    <span>
                      {" "}
                      <span className="pl-k">return</span> <span className="pl-s1">v</span>
                    </span>
                  </pre>
                  <pre className="bg-[#388bfd1a]">
                    <span> {"}"}</span>
                  </pre>
                  <pre className="bg-[#388bfd1a]">
                    <span>
                      {" "}
                      <span className="pl-s1">cache</span>[<span className="pl-s1">n</span>]{" "}
                      <span className="pl-c1">=</span> <span className="pl-en">fn</span>(
                      <span className="pl-s1">n</span>)
                    </span>
                  </pre>
                  <pre className="bg-[#388bfd1a]">
                    <span>
                      {" "}
                      <span className="pl-k">return</span> <span className="pl-s1">cache</span>[
                      <span className="pl-s1">n</span>]
                    </span>
                  </pre>
                  <pre className="bg-[#388bfd1a]">
                    <span> {"}"}</span>
                  </pre>
                  <pre className="bg-[#388bfd1a]">
                    <span> {"}"}</span>
                  </pre>
                  <div className="color-fg-on-emphasis js-type-row f5 row-is-visible absolute flex items-center rounded-md rounded-tl-none bg-[#1f6feb] p-2 font-bold shadow-xl">
                    <GoCopilot size={16} className="mr-1" />
                    Copilot
                  </div>
                </motion.div>
              </div>
              <div
                onClick={() => setCount(count + 1)}
                className="absolute bottom-[-60px] left-0  z-[1] mb-5 flex w-full items-center justify-center"
              >
                <button type="button" className="flex items-center justify-between text-white">
                  <RiLoopLeftFill sieze={20} className="mr-2" />
                  Replay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HoverCard>
  );
}
