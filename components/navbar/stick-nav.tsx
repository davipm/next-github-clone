"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

import { cn } from "@/lib/utils";
import { AnimatedArrow } from "@/components/animated-arrow";

const navLinks = [
  {
    id: "productivity",
    title: "Productivity",
  },
  {
    id: "collaboration",
    title: "Collaboration",
  },
  {
    id: "security",
    title: "Security",
  },
];

export default function StickNav() {
  const [active, setActive] = useState("");
  const [isStick, setIsStick] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsStick(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isElementVisible = (elementId: string) => {
      const element = document.getElementById(elementId);
      const top = element?.getBoundingClientRect().top;
      if (top && top < 100) setActive(elementId);
    };

    const handleScrollForElements = () => {
      isElementVisible("productivity");
      isElementVisible("collaboration");
      isElementVisible("security");
    };

    window.addEventListener("scroll", handleScrollForElements);
    return () => window.removeEventListener("scroll", handleScrollForElements);
  }, []);

  return (
    <nav className={cn("absolute z-30 h-[100px] transition duration-150 ease-in", isStick ? "visible" : "invisible ")}>
      <div className={cn("top-0 w-screen bg-[#0d1117] py-2 shadow-md shadow-slate-950", isStick ? "fixed" : "sticky")}>
        <div className="relative mx-auto flex max-w-[1280px] items-center px-12 pb-2 pt-1 max-lg:flex-col lg:px-3 lg:pb-3">
          <button
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="absolute right-12 top-4 text-white lg:hidden"
          >
            {showMobileNav ? <RxCross1 size={24} /> : <IoIosArrowDown size={24} />}
          </button>

          <div className="flex flex-auto flex-col justify-start text-base text-white max-lg:w-full lg:flex-row lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                href={`#${link.id}`}
                key={link.id}
                className={cn(
                  "group transition duration-200 max-lg:pt-2 hover:lg:text-blue-500",
                  active === link.id && "lg:text-blue-500"
                )}
                onClick={() => setActive(link.id)}
              >
                {link.title}
                <div
                  className={cn(
                    "mx-auto mt-1 h-[1px] w-10/12 scale-0 bg-white transition duration-100 ease-in group-hover:scale-100 max-lg:hidden",
                    active === link.id && "scale-100"
                  )}
                />
              </Link>
            ))}
          </div>

          <div
            className={cn(
              "flex items-center max-lg:mt-5 max-lg:w-full max-lg:flex-col max-lg:space-y-3 lg:ml-5 lg:space-x-5",
              !showMobileNav && "max-lg:hidden"
            )}
          >
            <a
              href="#"
              className="group flex items-center justify-center space-x-2 rounded-md border border-neutral-500 px-3 py-3 text-base font-semibold text-white max-lg:w-full"
            >
              Start a free enterprise trail
              <AnimatedArrow />
            </a>

            <a
              href="#"
              className="group flex items-center justify-center rounded-md bg-white px-3 py-3 text-base font-semibold max-lg:w-full"
            >
              Sign up for GitHub
              <AnimatedArrow />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
