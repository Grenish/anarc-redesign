"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingBag, User, Search, Menu, X } from "lucide-react";

interface SearchBoxProps {
  onClose: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onClose }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center fixed left-0 top-0 z-[1001] bg-white bg-opacity-95">
      <button onClick={onClose} className="absolute top-4 right-4">
        <X size={24} />
      </button>
      <div className="flex item-center gap-2 border-b-2 w-1/3">
        <Search size={20} />
        <input type="text" placeholder="Search" className="outline-none w-full bg-transparent"/>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative">
      <nav className="p-4 md:p-1 flex items-center w-full md:w-[90%] lg:w-[80%] mx-auto justify-between">
        <div className="flex items-center">
          <Image
            src="/anarc1.svg"
            alt="Anarc Watch"
            width={80}
            height={80}
            className="w-16 md:w-20 lg:w-24"
          />
        </div>
        <div className="hidden md:block w-1/2 text-sm">
          <ul className="flex items-center justify-between">
            <li className="p-2">Our Story</li>
            <li className="p-2">Anarc Watch</li>
            <li className="p-2">Anarc Straps</li>
            <li className="p-2">Skins</li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggleSearch}>
            <Search size={17} />
          </button>
          <button>
            <User size={17} />
          </button>
          <button>
            <ShoppingBag size={17} />
          </button>
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50 w-full">
          <ul className="py-2">
            <li className="px-4 py-2">Our Story</li>
            <li className="px-4 py-2">Anarc Watch</li>
            <li className="px-4 py-2">Anarc Straps</li>
            <li className="px-4 py-2">Skins</li>
          </ul>
        </div>
      )}

      {/* Search Box */}
      {isSearchOpen && <SearchBox onClose={() => setIsSearchOpen(false)} />}

      {/* Sticky navbar */}
      <nav
        className={`${
          isSticky ? "fixed z-[1000] top-0 left-0 right-0 shadow-md" : ""
        } transition-all duration-300 bg-gray-100/50 backdrop-blur-sm`}
      >
        <div className="flex items-center justify-between w-full px-4 sm:px-10 lg:px-[7.7rem]">
          <h2 className="text-sm font-semibold whitespace-nowrap">
            <span className="sm:inline">Anarc Watch</span>
          </h2>
          <div className="flex items-center justify-end overflow-x-auto scrollbar-hide">
            <button className="text-xs border-b-2 border-accent p-2.5 whitespace-nowrap">
              Overview
            </button>
            <button className="text-xs p-2.5 whitespace-nowrap">Specs</button>
            <button className="text-xs p-2.5 whitespace-nowrap">Box</button>
            <button className="text-xs p-2.5 whitespace-nowrap">Review</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
