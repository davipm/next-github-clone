"use client";

import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
  backgroundColor: string;
  direction: string;
  left: string;
};

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 360, (x - window.innerWidth / 2) / 240, 1.02];

const trans = (x: number, y: number) => `perspective(900px) rotate(${-x}deg) rotateY(${-y}deg)`;

export default function HoverCard({ children, backgroundColor, direction, left }: Props) {
  const [hovered, setHovered] = useState(false);
  const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMousePosition = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event;
      setCursorCoords({ x, y });
    };

    window.addEventListener("mousemove", handleMousePosition);

    return () => {
      window.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);

  return <div>{children}</div>;
}
