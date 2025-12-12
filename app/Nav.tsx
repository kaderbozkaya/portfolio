"use client";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Projects", href: "/Projects" },
    { name: "Contact Me", href: "/Contact" },
  ];

  return (
    <nav className="w-full z-[99999] transition-all duration-300 relative ">
      <div className="flex justify-between items-center px-[8%] lg:px-[16%] py-6">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-28 cursor-pointer mr-14" />
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-bold transition-all  relative px-2 py-2 rounded hover:text-[--text-color] ${
                pathname === link.href
                  ? "active-links text-[--text-color-dark]"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger & Dark Mode */}
        <div className="flex lg:hidden items-center gap-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <CiMenuFries className="text-3xl cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute left-0 top-full w-full bg-[var(--back-color)] text-white overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <ul className="space-y-4 px-[8%]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
