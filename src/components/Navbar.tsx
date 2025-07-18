"use client";
import { menu } from "@/assets";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="w-full px-2 py-1.5 md:py-2 min-h-16 border-b border-gray-800">
      <div className="w-full flex items-center justify-between relative max-w-[1440px] mx-auto ">
        <Link href={"/"} className="flex items-center gap-2">
          <span className="text-3xl md:text-5xl logo transition-transform active:rotate-45">
            ManojBuilds
          </span>
        </Link>

        {/* Desktop navigation  */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link, index) => (
            <Link
              className="hover:text-[#fa8000]"
              href={`/#${link.id}`}
              key={index}
            >
              {link.title}
            </Link>
          ))}
          <Link
            onClick={() => setIsDropdownOpen(false)}
            className="hover:text-[#fa8000] border-b border-b-[#1d31619a] last:border-none py-1"
            href={`/blogs`}
          >
            Blog
          </Link>
        </div>

        {/* Menu Icon  */}
        <Image
          src={menu}
          alt="menu"
          width={20}
          height={20}
          className="object-contain md:hidden cursor-pointer invert"
          onClick={handleMenuClick}
        />

        {/* Mobile Navigation  */}

        {isDropdownOpen && (
          <div className="flex flex-col md:hidden  gap-4 absolute top-16 right-0 min-w-[200px] py-4  border border-gray-800 rounded-md z-50 shadow text-center bg-gray-900">
            {navLinks.map((link, index) => (
              <Link
                onClick={() => setIsDropdownOpen(false)}
                className="pl-4 border-b border-gray-800  py-1"
                href={`/#${link.id}`}
                key={index}
              >
                {link.title}
              </Link>
            ))}
            <Link
              onClick={() => setIsDropdownOpen(false)}
              className="pl-4 border-b border-gray-800 last:border-none"
              href={`/blogs`}
            >
              Blog
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
