"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io";

import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function ProjectSlider() {
  const projects = [
    {
      id: "01",
      title: "User Persona – Expense Tracking Project",
      desc: "This persona was created for an expense tracking project to understand user behaviors and needs in managing personal finances more consciously.",
      img: "/Persona5.png",
      url: "https://www.figma.com/design/FxsjeIjyb5cigZqkFZljTS/finansal-y%C3%B6netim-user-story-map?node-id=0-1&p=f&t=tWqYjc9mh6X7Ags5-0",
    },
    {
      id: "02",
      title: "User Story Map – Expense Tracking Project",
      desc: "This user story map outlines the main user goals and related tasks within the expense tracking system, helping to define core features and prioritize development.",
      img: "/story-mapping.png",
      url: "https://www.figma.com/design/FxsjeIjyb5cigZqkFZljTS/finansal-y%C3%B6netim-user-story-map?node-id=0-1&p=f&t=tWqYjc9mh6X7Ags5-0",
    },
    {
      id: "03",
      title: "User Flow – Expense Tracking Project",
      desc: "The user flow visualizes how users interact with the expense tracking app, from adding expenses to analyzing their spending habits.",
      img: "/user-journey.png",
      url: "https://miro.com/app/board/uXjVJMvrcfo=/?focusWidget=3458764639233724800",
    },
    {
      id: "04",
      title: "Site Map – Expense Tracking Project",
      desc: "This site map presents the overall structure of the expense tracking app, organizing pages and navigation to ensure a clear and intuitive user experience.",
      img: "/site-map.png",
      url: "https://miro.com/app/board/uXjVJUSbFbU=/",
    },
    {
      id: "05",
      title: "Mockup – Expense Tracking Project",
      desc: "High-fidelity mockups that reflect the visual design, color palette, and usability principles of the expense tracking application.",
      img: "/mockup.png",
      url: "https://www.figma.com/design/zkMZKP3VQierzENP8CE1rd/gidergo-mockup?node-id=0-1&p=f&t=xVKBlxvOwV9fcn2Y-0",
    },
    {
      id: "02",
      title: "Persona 1 – E-Commerce & Platform Manager",
      desc: "A professional managing e-commerce operations, focused on efficient product management, inventory tracking, and smooth platform workflows.",
      img: "/Persona4.png",
      url: "https://react-icons.github.io/react-icons/search/#q=arrow",
    },
    {
      id: "01",
      title: "Amazon User Story Map",
      desc: "I created a User Story Map to visualize the main user flows and prioritize features of the Amazon e-commerce experience. This map helped structure the product backlog and identify core functionalities such as browsing, adding to cart, and checkout.",
      img: "/amazon-story-map.png",
      url: "https://www.figma.com/design/JaBpx4Qn009EzlkUhKkGoh/User-Story-Mapping--Copy-?node-id=35652-5047&p=f&t=ca7rL0HuuV73nCPr-0",
    },
  ];
  return (
    <div className="px-[8%] lg:px-[16%] py-15 text-white">
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        spaceBetween={40}
        slidesPerView={1}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="work-content">
                <h2 className="text-8xl font-bold">{project.id}</h2>
                <h3 className="text-5xl font-semibold mt-4">{project.title}</h3>
                <p className="text-[var(--text-color)] mt-3 text-lg leading-relaxed">
                  {project.desc}
                </p>

                <div className="work-url flex gap-4 mt-6 border-t border-[var(--secondary-color)] pt-5">
                  <Link
                    href={project.url}
                    target="_blank"
                    className="w-15 h-15 flex items-center justify-center rounded-full bg-[var(--primary-color)]  hover:text-black hover:bg-white transition-all duration-500"
                  >
                    <GoArrowUpRight className="text-2xl" />
                  </Link>

                  <Link
                    href="https://github.com/kaderbozkaya/business-analysis-projects"
                    target="_blank"
                    className="w-15 h-15 flex items-center justify-center rounded-full bg-[var(--primary-color)] hover:text-black hover:bg-white transition-all duration-500"
                  >
                    <IoLogoGithub className="text-2xl" />
                  </Link>
                </div>
              </div>
              <div className="relative work-image">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Button */}
        <div className="flex gap-3 justify-end mt-6">
          <button className="custom-prev w-12 h-12 flex items-center justify-center bg-[var(--primary-color)] text-white rounded shadow hover:bg-white hover:text-black cursor-pointer transition duration-500">
            <FaLongArrowAltLeft className="text-2xl" />
          </button>
          <button className="custom-next w-12 h-12 flex items-center justify-center bg-[var(--primary-color)] text-white rounded shadow hover:bg-white hover:text-black cursor-pointer transition-all duration-500">
            <FaLongArrowAltRight className="text-2xl" />
          </button>
        </div>
      </Swiper>
    </div>
  );
}
