"use client";

import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "your key from web3forms ");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className="px-[8%] lg:px-[8%]">
      <div className="container md:px-5 md:py-24 mx-auto">
        <div
          id="contact"
          className="w-full px-[12%] py-4 md:py-10 scroll-mt-20"
        >
          <h2 className="text-[var(--primary-color)] text-center lg:text-7xl text-4xl  font-Poppins mt-7">
            Contact Me
          </h2>
        </div>
        <form onSubmit={onSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 md:w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm ">
                  Name
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--secondary-color)] transition-all duration-500"
                />
              </div>
            </div>
            <div className="p-2 md:w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm ">
                  Email
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--secondary-color)] transition-all duration-500"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm ">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--secondary-color)] transition-all duration-500"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className=" bg-[var(--primary-color)] hover:text-[var(--back-color)] hover:bg-white  px-6 py-3 mt-5 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </div>
          <p>{result}</p>
        </form>
      </div>
    </section>
  );
}
