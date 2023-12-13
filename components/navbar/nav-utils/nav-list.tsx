"use client";

import { ReactNode } from "react";

interface Props {
  main: string;
  submain: string;
  icon: ReactNode;
}

export default function NavList({ icon, submain, main }: Props) {
  return (
    <a href="#" className="group py-3 flex items-center space-x-3 cursor-pointer">
      <span className="text-neutral-800 group-hover:text-blue-600">{icon}</span>

      <div className="transition ease-in duration-100 text-sm text-neutral-500 group-hover:text-blue-600">
        <div className="font-semibold transition ease-in duration-100 text-base leading-5 text-neutral-800 group-hover:text-blue-600">
          {main}
        </div>
        {submain}
      </div>
    </a>
  );
}
