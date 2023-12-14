"use client";

import Link from "next/link";
import { useRef } from "react";

import { useShow } from "@/hooks";
import NavListSecondary from "@/components/navbar/nav-utils/nav-list-secondary";

export default function SolutionNav() {
  const ref = useRef(null);
  const isOpen = useShow(ref);

  return (
    <li ref={ref}>
      <button
        type="button"
        className={`flex items-center p-1 transition duration-150 ease-in max-lg:w-full max-lg:justify-between max-lg:font-semibold ${
          isOpen ? "lg:text-neutral-300" : ""
        }`}
      >
        Solution
        <svg
          opacity="0.5"
          aria-hidden="true"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className={`ml-1 transition-all duration-200 ease-in max-lg:scale-x-125 ${
            isOpen ? "max-lg:0 opacity-40 lg:mt-2" : "mt-0 max-lg:-rotate-90"
          }`}
        >
          <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
        </svg>
      </button>

      <div
        className={`relative -ml-5 w-[300px] rounded-md bg-white p-6 transition duration-300 ease-in lg:absolute lg:py-4 ${
          isOpen ? "opacity-100 " : "top-[2000px] hidden opacity-0"
        }`}
      >
        <div className="mb-4 w-full pb-4 pt-4 lg:border-b">
          <span className="text-base font-semibold text-neutral-800">For</span>
          <ul className="mt-1 w-full text-sm text-neutral-500">
            <li>
              <Link href="/" className="block py-2 hover:text-blue-600">
                Enterprise
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 hover:text-blue-600">
                Teams
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 hover:text-blue-600">
                Startups
              </Link>
            </li>
            <li className="py-2">
              <NavListSecondary
                main="Education"
                path="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"
              />
            </li>
          </ul>
        </div>
        <div className="mb-4 w-full pb-4 pt-2 lg:border-b">
          <span className="text-base font-semibold text-neutral-800">By Solution</span>
          <ul className="mt-1 w-full text-sm text-neutral-500">
            <li>
              <Link href="/" className="block py-2 hover:text-blue-600">
                CI/CD & Automation
              </Link>
            </li>
            <li className="py-2">
              <NavListSecondary
                main="DevOps"
                path="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"
              />
            </li>
            <li className="py-2">
              <NavListSecondary
                main="DevSecOps"
                path="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"
              />
            </li>
          </ul>
        </div>
        <div className="mb-4 w-full pb-0 pt-2">
          <span className="text-base font-semibold text-neutral-800">Case Studies</span>
          <ul className="mt-1 w-full text-sm text-neutral-500">
            <li>
              <Link href="/" className="block py-2 hover:text-blue-600">
                Customer stories
              </Link>
            </li>
            <li className="py-2">
              <NavListSecondary
                main="Resources"
                path="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"
              />
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
}
