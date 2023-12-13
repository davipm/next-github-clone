import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return <div className="mx-auto w-screen max-w-[1440px] px-7 sm:px-7 md:px-8 xl:px-20">{children}</div>;
}
