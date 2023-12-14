import Link from "next/link";

type Props = {
  main: string;
  path: string;
};

export default function NavListSecondary({ main, path }: Props) {
  return (
    <Link
      href="/"
      className="group flex items-center text-neutral-500 transition duration-150 ease-in hover:text-blue-600"
    >
      {main}
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        version="1.1"
        width="16"
        data-view-component="true"
        className="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle ml-2 -translate-x-3 opacity-0 transition duration-150 ease-in group-hover:translate-x-0 group-hover:text-blue-600 group-hover:opacity-100"
      >
        <path d={path}></path>
      </svg>
    </Link>
  );
}
