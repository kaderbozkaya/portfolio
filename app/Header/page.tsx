import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Image from "next/image";
import Profile from "@/public/Profile.jpg";
export default function Header() {
  return (
    <header className="h-[100vh] text-white py-12 relative ">
      <div className="flex pt-10 flex-col lg:flex-row items-center justify-between px-[8%] lg:px-[16%]">
        <div className="lg:w-1/2 text-start md:text-left">
          <p className="text-lg mb-2 text-[var(--text-color)]">
            MIS Graduate | Bridging Business & Technology
          </p>
          <h1 className="text-7xl text-start lg:text-8xl mb-2 text-[var(--text-color)] ">
            Hello I'm{" "}
            <span className="text-[var(--text-color2)]">Kader Bozkaya</span>
          </h1>
          <p className="text-[color:var(--text-color)] text-md lg:text-xl my-8">
            Passionate about transforming business needs into impactful digital
            products.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            <Link
              href="#"
              className="border border-[var(--text-color2)] font-bold  px-6 py-3 rounded hover:bg-[var(--text-color2)] hover:text-white transition-all duration-500 flex items-center "
            >
              <HiOutlineDownload className="text-2xl me-2" /> Download CV
            </Link>

            <div className="flex hero-social gap-2 text-xl">
              <BiLogoLinkedin className="hero-social-icon" />
              <FaGithub className="hero-social-icon" />
              <MdAlternateEmail className="hero-social-icon" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-10 lg:mt:0 flex justify-center relative">
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
