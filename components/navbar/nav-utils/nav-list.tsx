import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  main: string;
  submain: string;
  icon: ReactNode;
}

export default function NavList({ icon, submain, main }: Props) {
  return (
    <Link href="/" className="group flex cursor-pointer items-center space-x-3 py-3">
      <span className="text-neutral-800 group-hover:text-blue-600">{icon}</span>

      <div className="text-sm text-neutral-500 transition duration-100 ease-in group-hover:text-blue-600">
        <div className="text-base font-semibold leading-5 text-neutral-800 transition duration-100 ease-in group-hover:text-blue-600">
          {main}
        </div>
        {submain}
      </div>
    </Link>
  );
}
