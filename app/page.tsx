import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <div className="relative z-50">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
    </main>
  );
}
