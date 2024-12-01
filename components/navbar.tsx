"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingBag, User, Search } from "lucide-react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="">
      <nav className="p-1 flex items-center w-[80%] mx-auto justify-between">
        <div className="">
          <Image
            src={"/anarc1.svg"}
            alt="Anarc Watch"
            width={100}
            height={100}
          />
        </div>
        <div className="w-1/2 text-sm">
          <ul className="flex items-center justify-between">
            <li className="p-2">Our Story</li>
            <li className="p-2">Anarc Watch</li>
            <li className="p-2">Anarc Straps</li>
            <li className="p-2">Skins</li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <button>
            <Search size={17} />
          </button>
          <button>
            <User size={17} />
          </button>
          <button>
            <ShoppingBag size={17} />
          </button>
        </div>
      </nav>

      {/* Sticky navbar */}
      <nav
        className={`${
          isSticky ? "fixed z-[999] top-0 left-0 right-0 shadow-md" : ""
        } transition-all duration-300 flex items-center justify-between w-full px-[7.7rem] bg-gray-100/50 backdrop-blur-sm`}
      >
        <div className="">
          <h2 className="text-sm font-semibold">Anarc Watch</h2>
        </div>
        <div className="w-1/3 text-xs flex items-center justify-between">
          <button className="border-b-2 border-accent p-2.5">Overview</button>
          <button className="p-2.5">Specs</button>
          <button className="p-2.5">In the Box</button>
          <button className="p-2.5">Review</button>
        </div>
      </nav>
    </header>
  );
}
