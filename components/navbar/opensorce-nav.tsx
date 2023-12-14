"use client";

import Link from "next/link";
import { useRef } from "react";
import { useShow } from "@/hooks";

export default function OpensorceNav() {
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
        Open Source
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
        className={`relative -ml-5 w-[320px] rounded-md bg-white p-6 transition duration-150 ease-in lg:absolute lg:py-4 ${
          isOpen ? "visible opacity-100" : "hidden opacity-0"
        }`}
      >
        <div className="mb-4 w-full pb-6 pt-4 lg:border-b">
          <span className="cursor-pointer text-base font-semibold text-neutral-800 hover:text-blue-600">
            GitHub Sponsers <p className="text-sm font-normal text-neutral-500">Fund open source developers</p>
          </span>
        </div>
        <div className="mb-4 w-full pb-6 pt-0 lg:border-b">
          <span className="cursor-pointer text-base font-semibold text-neutral-800 hover:text-blue-600">
            The ReadMe Projects <p className="text-sm font-normal text-neutral-500">GitHub community articles</p>
          </span>
        </div>
        <div className="mb-4 w-full pb-0 pt-2">
          <span className="text-base font-semibold text-neutral-800">Repositories</span>
          <ul className="mt-1 w-full text-sm text-neutral-500">
            <li>
              <Link href="#" className="block py-2 hover:text-blue-600">
                Topics
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 hover:text-blue-600">
                Trendings
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 hover:text-blue-600">
                Collections
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
}
