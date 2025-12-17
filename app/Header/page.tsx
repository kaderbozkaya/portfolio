import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

import Image from "next/image";
import Profile from "@/public/Profile.jpg";
export default function Header() {
  return (
    <header className="h-[100vh] text-white md:py-12 relative ">
      <div className="flex  flex-col md:flex-row items-center justify-between px-[8%] lg:px-[16%]">
        <div className="lg:w-1/2 text-start ">
          <p className="text-lg  mb-2 text-[var(--text-color)]">
            MIS Graduate | Bridging Business & Technology
          </p>
          <h1 className="text-5xl text-start lg:text-6xl mb-2 text-[var(--text-color)]">
            Hello I&apos;m <br />
            <span className="text-[var(--text-color2)] ">Kader Bozkaya</span>
          </h1>
          <p className="text-[color:var(--text-color)] text-md lg:text-xl my-8">
            Passionate about transforming business needs into impactful digital
            products.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            <Link
              href="#"
              className="border border-[var(--text-color2)] font-bold px-3  lg:px-6 py-1 lg:py-3 rounded hover:bg-[var(--text-color2)] hover:text-white transition-all duration-500 flex items-center "
            >
              <HiOutlineDownload className="text-sm md:text-lg xl:text-2xl me-2" />
              Download CV
            </Link>

            <div className="flex hero-social gap-2 w-1.5">
              <Link
                href="https://www.linkedin.com/in/kader-bozkaya/"
                target="_blank"
              >
                <BiLogoLinkedin className="hero-social-icon" />
              </Link>
              <Link href="https://github.com/kaderbozkaya" target="_blank">
                <FaGithub className="hero-social-icon t" />
              </Link>
              <Link href="mailto:kaderbozkaya@gmail.com">
                <MdOutlineAlternateEmail className="hero-social-icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-2/3 lg:w-1/2 mt-10 flex justify-center relative md:ml-4">
          <div className="relative rounded-full flex items-center justify-center">
            <div className="relative hero-image w-full h-full rounded-full overflow-hidden">
              <Image
                src={Profile}
                alt="Profile picture"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
