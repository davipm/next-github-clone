"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

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

  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 6000, friction: 1000 },
  }));

  const calcTranslate = (coordinate: number, containerSize: number, itemSize: number) =>
    (coordinate / containerSize) * (containerSize - itemSize);

  const translateX = typeof window !== "undefined" ? calcTranslate(cursorCoords.x, window.innerWidth, 600) : 0;
  const translateY = typeof window !== "undefined" ? calcTranslate(cursorCoords.y, window.innerHeight, 500) : 0;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX: x, clientY: y } = event;
    set({ xys: calc(x, y) });
    setHovered(true);
  };

  const handleMouseLeave = () => {
    set({ xys: [0, 0, 1] });
    setHovered(false);
  };

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

  return (
    <animated.div
      className="mb-3 overflow-hidden rounded-xl md:mb-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: springProps.xys.to(trans) }}
    >
      <div
        className={`relative z-10 h-full rounded-xl border border-[#30363d] bg-[#161b22] shadow-xl md:flex ${direction} justify-between`}
      >
        {children}
        <div
          className={`absolute bottom-[50px] z-[-1] h-[1000px] w-[500px] border-none bg-[#7ee787] blur-[180px] filter ${
            hovered ? "opacity-95" : "opacity-0"
          } `}
          style={{
            transform: `translateX(${translateX}px) translateY(${2 * translateY}px)`,
            background: backgroundColor,
            borderRadius: "100%",
            mixBlendMode: "soft-light",
            left,
            willChange: "transform",
            transition: "transform 0.2s cubic-bezier",
          }}
        />
      </div>
    </animated.div>
  );
}
