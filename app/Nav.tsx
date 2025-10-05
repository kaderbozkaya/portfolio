"use client";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Projects", href: "/Projects" },
    { name: "Contact Me", href: "/Contact" },
  ];
  return (
    <nav className="w-full z-[9999] transition-all duration-300">
      <div className="flex justify-between items-center px-[8%] lg:*:px-[16%] py-6">
        <Link href="/" className="">
          <Image src={logo} alt="logo" className="w-28 cursor-pointer mr-14" />
        </Link>
        {/*Desktop Navbar */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex nav-menu items-center space-x-5">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      Nav
    </nav>
  );
}
