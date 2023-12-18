"use client";

import { ComponentPropsWithRef } from "react";

interface Props extends ComponentPropsWithRef<"a"> {
  label: string;
  href?: string;
}

export default function AnimatedLink({ label, href, ...rest }: Props) {
  return (
    <a href={href || "#"} className="group inline-block w-max font-semibold text-white md:text-xl" {...rest}>
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mb-[3px] ml-3 inline-block -translate-x-1 text-white transition duration-300 ease-in group-hover:translate-x-0"
        width="20"
        height="20"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fill="currentColor"
          d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
        />
        <path
          className="text-white opacity-0 transition duration-150 ease-in group-hover:opacity-100"
          stroke="currentColor"
          d="M1.75 8H11"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="h-[3px] w-0 origin-left scale-0 rounded-full bg-white transition duration-300 ease-in group-hover:w-11/12 group-hover:scale-100" />
    </a>
  );
}
