import Navbar from "@/components/navbar";

export default function Header() {
  return (
    <div className="relative z-50">
      <div className="absolute w-full">
        <Navbar />
      </div>
    </div>
  );
}
