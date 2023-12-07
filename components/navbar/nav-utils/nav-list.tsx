"use client";

import { useState } from "react";

interface Props {
  main: string;
  submain: string;
  path: string;
  path2: string;
}

export default function NavList({ path, path2, submain, main }: Props) {
  const [focus, setFocus] = useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <svg
        aria-hidden="true"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        version="1.1"
        width="24"
        data-view-component="true"
        className={`mr-3 transition ease-in duration-100  ${
          focus ? "text-blue-600" : "text-neutral-500"
        }`}
      >
        <path d={path}></path>
        <path d={path2}></path>
      </svg>

      <div
        className={`${
          focus ? "text-blue-600" : "text-neutral-500"
        } transition ease-in duration-100 text-[14px]`}
      >
        <div
          className={`font-semibold transition ease-in duration-100 ${
            focus ? "text-blue-600" : "text-neutral-800"
          } text-base leading-5`}
        >
          {main}
        </div>
        {submain}
      </div>
    </a>
  );
}
