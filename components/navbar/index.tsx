"use client";

import { useState } from "react";
import Container from "@/components/container";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Container>
      <div className="text-white bg-transparent py-5">
        <button className="hidden"></button>
        <div className="flex items-center max-lg:justify-between max-lg:flex-row-reverse"></div>
      </div>
    </Container>
  );
}
