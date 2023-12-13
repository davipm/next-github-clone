"use client";

import { useRef } from "react";
import { SiGithubactions } from "react-icons/si";
import { GoPackage, GoShieldCheck, GoCopilot, GoCodeReview } from "react-icons/go";
import { FaRegDotCircle } from "react-icons/fa";
import { LuComputer } from "react-icons/lu";
import { TiMessages } from "react-icons/ti";

import { useShow } from "@/hooks";
import NavList from "@/components/navbar/nav-utils/nav-list";
import NavListSecondary from "@/components/navbar/nav-utils/nav-list-secondary";

export default function ProductNav() {
  const ref = useRef(null);
  const isOpen = useShow(ref);

  return (
    <li ref={ref}>
      <button
        type="button"
        className={`flex items-center p-1 max-lg:font-semibold transition ease-in duration-150 max-lg:justify-between max-lg:w-full ${
          isOpen ? "lg:text-neutral-300" : ""
        }`}
      >
        Product
        <svg
          opacity="0.5"
          aria-hidden="true"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className={`ml-1 transition-all ease-in duration-200 max-lg:scale-x-125 ${
            isOpen ? "lg:mt-2 opacity-40 max-lg:0" : "mt-0 max-lg:-rotate-90"
          }`}
        >
          <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
        </svg>
      </button>

      <div
        className={`relative lg:absolute lg:flex -ml-5 bg-white rounded-md lg:py-4 py-2 transition ease-in duration-150 ${
          isOpen ? "opacity-100" : "opacity-0 invisible max-lg:hidden"
        }`}
      >
        <div className="lg:px-4 lg:border-r-[1px] mb-4 lg:mb-0 lg:pr-10">
          <ul className="max-lg:pl-6">
            <li>
              <NavList main="Action" submain="Automate any workflow" icon={<SiGithubactions size={25} />} />
            </li>
            <li>
              <NavList main="Packages" submain="Host and manage packages" icon={<GoPackage size={25} />} />
            </li>
            <li>
              <NavList main="Security" submain="Find and fix vulnerability" icon={<GoShieldCheck size={25} />} />
            </li>
            <li>
              <NavList main="CodeSpace" submain="Instant dev environments" icon={<LuComputer size={25} />} />
            </li>
            <li>
              <NavList main="Copilot" submain="Write better code with AI" icon={<GoCopilot size={25} />} />
            </li>
            <li>
              <NavList main="Code review" submain="Manage code changes" icon={<GoCodeReview size={25} />} />
            </li>
            <li>
              <NavList main="Issues" submain="Plan and track issues" icon={<FaRegDotCircle size={25} />} />
            </li>
            <li>
              <NavList main="Discussions" submain="Collaborate outside of code" icon={<TiMessages size={25} />} />
            </li>
          </ul>
        </div>

        <div className="lg:px-8 lg:pr-20 py-2 max-lg:pl-6">
          <span className="my-1 text-neutral-800 font-semibold">Explore</span>
          <ul className="text-sm">
            <li className="text-neutral-500 hover:text-blue-500 py-2">
              <a href="#">All Features</a>
            </li>
            <li className="py-2">
              <NavListSecondary
                main="Documentaion"
                path="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"
              />
            </li>
            <li className="py-2">
              <NavListSecondary
                main="GitHub skills"
                path="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"
              />
            </li>
            <li className="py-2">
              <NavListSecondary
                main="Blog"
                path="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"
              />
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
}
