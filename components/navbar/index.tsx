"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

import Container from "@/components/container";
import ProductNav from "@/components/navbar/product-nav";
import SolutionNav from "@/components/navbar/solution-nav";
import OpensorceNav from "@/components/navbar/opensorce-nav";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Container>
      <div className="bg-transparent py-5 text-white">
        <button className="hidden"></button>
        <div className="flex items-center max-lg:flex-row-reverse max-lg:justify-between">
          <div className="flex items-center justify-between max-lg:w-full">
            <div className="lg:hidden">
              <a href="#" className="rounded-md border px-2 py-[6px] hover:text-neutral-400">
                Sing Up
              </a>
            </div>
            <Link href="/" aria-label="GitHub Logo">
              <FaGithub size={32} className="text-white" />
            </Link>
            <button
              type="button"
              onClick={() => setShowNav((prevState) => !prevState)}
              className="cursor-pointer lg:hidden"
              aria-label="Menu Button Mobile"
            >
              <div
                className={`h-[2px] w-[23px] bg-white transition duration-150  ease-in ${
                  showNav ? "mb-0 translate-y-[1px]  rotate-45" : "mb-1 rotate-0"
                } `}
              />
              <div
                className={`h-[2px] w-[23px] bg-white transition duration-150 ease-in ${
                  showNav ? "mb-0 hidden" : "mb-1"
                } `}
              />
              <div
                className={`h-[2px] w-[23px] bg-white transition duration-150 ease-in  ${
                  showNav ? "mb-0 -rotate-45" : "rotate-0"
                }`}
              />
            </button>
          </div>
          <div
            className={`top-20 z-40 flex w-full transition duration-200 ease-in max-lg:absolute ${
              showNav
                ? "max-lg:translate-x-0 max-lg:scale-100"
                : "max-lg:max-h-0 max-lg:translate-y-1/4 max-lg:scale-y-50"
            }`}
          >
            <div className="flex overflow-y-auto max-lg:max-h-[500px] max-lg:w-[320px] max-lg:flex-col max-lg:justify-between max-lg:rounded-lg max-lg:bg-white max-sm:mx-auto max-sm:w-10/12 sm:ml-auto  lg:mb-0 lg:w-full lg:items-center lg:justify-between">
              <nav className="mb-0 mt-0 px-3 text-[15.5px] max-lg:px-5 max-lg:py-10 lg:px-6">
                <ul className="flex overflow-y-auto max-lg:h-auto max-lg:flex-col max-lg:space-y-6 max-lg:text-xl max-lg:font-medium max-lg:text-neutral-700 lg:items-center  lg:space-x-2">
                  <ProductNav />
                  <SolutionNav />
                  <OpensorceNav />
                  <li>
                    <a className="flex cursor-pointer items-center p-1 hover:text-neutral-300 max-lg:font-semibold">
                      Pricing
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="mb-3 items-center px-3 text-left max-lg:flex-col lg:mb-0 lg:flex lg:space-x-4 lg:px-0">
                <div className="relative mb-2 max-lg:mr-4 lg:mb-0 lg:flex">
                  <input
                    placeholder="Search GitHub"
                    className="glass h-[38px] w-[240px]  overflow-hidden whitespace-nowrap rounded-md border-[1px] p-[3.5px] text-[14px] font-medium placeholder:pl-2 placeholder:text-[14px] focus:z-10 focus:bg-white focus:text-black focus:outline-none max-lg:h-[41px] max-lg:w-full max-lg:border-neutral-300 max-lg:bg-neutral-50 max-lg:placeholder:text-[16px] lg:border-neutral-500 lg:px-2"
                    type="text"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    aria-hidden="true"
                    className="absolute right-0 top-[10px] mr-1 max-lg:hidden"
                  >
                    <path
                      fill="none"
                      stroke="#979A9C"
                      opacity=".4"
                      d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
                    ></path>
                    <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
                  </svg>
                </div>
                <div className="justify-center rounded-md max-lg:mr-4 max-lg:flex max-lg:border-[1px] max-lg:bg-neutral-800">
                  <button className="transition hover:text-neutral-400 max-lg:py-2 max-lg:text-[16px] max-lg:font-semibold">
                    Sign in
                  </button>
                </div>
                <button className="rounded-md border-[1px] px-2 py-[5px] transition hover:text-neutral-400 max-lg:hidden">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
