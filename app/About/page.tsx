"use client";

import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("About Me");

  const tabs = ["About Me", "Experience", "Education", "Skills"];

  const experiences = [
    {
      Date: "April 2025-July 2025",
      role: "Project Assistant",
      company: "SistersLab",
    },
    {
      Date: "May 2024-June 2024",
      role: "Frontend Developer Intern",
      company: "Kazk ERP",
    },
    {
      Date: "January 2024-February 2024",
      role: "Frontend Developer Intern",
      company: "Netkod",
    },
  ];

  const educations = [
    {
      year: "2018- July 2024",
      degree: "Bachelor's Degree in Management Information Systems | GPA 3.16",
      institute: "Pamukkale University",
    },
  ];

  const skills = [
    {
      title: "Languages & Tools:",
      tools:
        "HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js, Git, GitHub",
    },
    {
      title: "Database & Analytics:",
      tools: "Basic SQL, PostgreSQL, MSSQL, Power BI",
    },
    { title: "Other Tools:", tools: " Visio, Excel, PowerPoint, Word" },
    {
      title: "Soft Skills:",
      tools:
        "Teamwork, Communication, Problem-Solving, Time Management, Adaptability, Responsibility",
    },
    {
      title: "Languages:",
      tools: "English – Intermediate (actively improving)",
    },
  ];
  return (
    <section className="px-[8%] lg:px-[16%] py-20 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex flex-col gap-5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-left rounded-md font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-[var(--primary-color)] text-white"
                    : "bg-gray-100/5 text-gray-300 hover:bg-gray-500/20 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {/* right section  */}
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold mb-4">{activeTab}</h2>

          {activeTab === "About Me" && (
            <div className="text-[var(--text-color)] space-y-4 bg-white rounded p-3 ">
              <p>
                Hi, I’m{" "}
                <span className="text-[var(--primary-color)] font-semibold">
                  {" "}
                  Kader Bozkaya
                </span>{" "}
                — a motivated Business Analyst candidate with a background in
                Management Information Systems and strong skills in frontend
                development. I have experience using HTML, CSS, JavaScript,
                React.js, and Next.js, and I enjoy combining technical
                understanding with analytical thinking to bridge the gap between
                business needs and technology. I’ve been improving my knowledge
                of business analysis, SQL, Scrum, and project documentation
                tools like Figma, Miro, and Power BI. Currently, I’m focused on
                becoming a tech-savvy business analyst who can effectively
                communicate with both technical teams and stakeholders. I’m
                passionate about continuous learning, creative problem-solving,
                and using technology to design better user experiences and
                smarter solutions.
              </p>
            </div>
          )}
          {/* EXPERIENCE */}
          {activeTab === "Experience" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-white hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-10 hover:border-[var(--primary-color)  transition-all duration-500 cursor-pointer"
                  >
                    <h3 className="text-[var(--text-color2)] font-semibold my-2 ">
                      {exp.Date}
                    </h3>
                    <h4 className="text-3xl mb-1 text-[var(--text-color)]">
                      {exp.role}
                    </h4>
                    <p className="text-gray-400 flex items-center  mt-2">
                      {exp.company}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EDUCATION */}
          {activeTab === "Education" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educations.map((educ, index) => (
                  <div
                    key={index}
                    className="bg-white hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-10 hover:border-[var(--primary-color)  transition-all duration-500 cursor-pointer"
                  >
                    <h3 className="text-[var(--text-color2)] font-semibold my-2 ">
                      {educ.year}
                    </h3>
                    <h4 className="text-3xl mb-1 text-[var(--text-color)]">
                      {educ.degree}
                    </h4>
                    <p className="text-gray-400 flex items-center  mt-2">
                      {educ.institute}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* SKILLS  */}
          {activeTab === "Skills" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200 mt-4 ">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="relative cursor-pointer bg-white text-[var(--text-color)] rounded py-5  px-2 flex flex-col items-center group"
                  >
                    <h3 className="text-[var(--text-color2)] font-semibold my-2 ">
                      {skill.title}
                    </h3>
                    {skill.tools}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
