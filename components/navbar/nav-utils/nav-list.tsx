"use client";

interface Props {
  main: string;
  submain: string;
  path: string;
  path2: string;
}

export default function NavList({ path, path2, submain, main }: Props) {
  return (
    <a
      href="#"
      className="group py-3 flex items-center space-x-3 cursor-pointer"
    >
      <svg
        aria-hidden="true"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        version="1.1"
        width="24"
        data-view-component="true"
        className="mr-3 transition ease-in duration-100 text-neutral-500 group-hover:text-blue-600"
      >
        <path d={path}></path>
        <path d={path2}></path>
      </svg>

      <div className="transition ease-in duration-100 text-sm text-neutral-500 group-hover:text-blue-600">
        <div className="font-semibold transition ease-in duration-100 text-base leading-5 text-neutral-500 group-hover:text-blue-600">
          {main}
        </div>
        {submain}
      </div>
    </a>
  );
}
