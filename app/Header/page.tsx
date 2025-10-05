import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Image from "next/image";
import Profile from "@/public/Profile.jpg";
export default function Header() {
  return (
    <header className="h-[100vh] text-white py-12 relative">
      <div className="flex pt-10 flex-col lg:flex-row items-center justify-between px-[8%] lg:px-[16%]">
        <div className="lg:w-1/2 text-start md:text-left">
          <p className="text-lg mb-2 text-gray-400">
            MIS Graduate | Bridging Business & Technology
          </p>
          <h1 className="text-7xl text-start lg:text-8xl mb-2 text-purple-400 ">
            Hello I'm <span className="text-purple-700">Kader Bozkaya</span>
          </h1>
          <p className="text-[color:var(--text-color)] text-md lg:text-xl my-8">
            Passionate about transforming business needs into impactful digital
            products.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            <Link
              href="#"
              className="border border-purple-500 font-bold text-[var(--text-color)] px-6 py-3 rounded hover:bg-[var(--text-color)] hover:text-white transition-all duration-500 flex items-center "
            >
              <HiOutlineDownload className="text-xl me-2" /> Download CV
            </Link>

            <div className="flex hero-social gap-2 text-xl">
              <FaLinkedinIn className="hero-social-icon" />
              <FaGithub className="hero-social-icon" />
              <MdAlternateEmail className="hero-social-icon" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-10 lg:mt:0 flex justify-center relative">
          <div className="relative rounded-full flex items-center justify-center">
            <div className="relative hero-image w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-[var(--back-color)] to-[var(--text-color)]">
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
