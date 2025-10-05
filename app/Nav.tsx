"use client";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";
import { GoSun } from "react-icons/go";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Projects", href: "/Projects" },
    { name: "Contact Me", href: "/Contact" },
  ];
  return (
    <nav className="w-full z-[99999] transition-all duration-300">
      <div className="flex justify-between items-center px-[8%] lg:*:px-[16%] py-6">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-28 cursor-pointer mr-14" />
        </Link>
        {/*Desktop Navbar */}
        <div className="flex items-center gap-3 ">
          <div className="hidden lg:flex nav-menu items-center space-x-5 ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-bold transition-all text-white relative px-2 py-2 rounded hover:text-[--text-color] ${
                  pathname === link.href
                    ? "active-links text-[--text-color-dark]"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsDarkMode((prev) => !prev)}>
              {isDarkMode ? (
                <GoSun className="w-6 h-6" />
              ) : (
                <FaMoon className="w-6 h-6" />
              )}
            </button>
          </div>
          {/* 
          <Link
            href="/Contact"
            className="lg:hidden bg-[var(--text-color)] px-5 py-2 text-sm text-white cursor-pointer font-semibold rounded-full transition-all duration-300 hover:bg-transparent shadow-md hover:shadow-[0px_2px_5px_var(--text-color)]"
          >
            Contact Me
          </Link> */}
          {/*  MOBILE NAVBAR  */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <CiMenuFries className="text-2xl" />
          </button>
        </div>
        {/* Side Menu with Smooth Transition */}

        <div
          className={`lg:hidden bg-blue-800 text-white border-y border-[--text-color] px-[8%] overflow-hidden transition-all duration-500 easy-in-out ${
            isMenuOpen ? "max-h-96 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          <ul className="space-y-4 menu">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-base relative"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
