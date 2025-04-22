"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { navLinks } from "./Helper";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <nav className="w-full ">
      <div className=" px-4 relative">
        <div className="max-w-[1242px] w-full flex justify-between mx-auto h-[80px] lg:h-[100px] items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/img/ravi_logo.png"
              alt="Logo"
              className="max-w-[176px] w-full h-[74px]"
              width={176}
              height={74}
              unoptimized
            />
          </Link>

          <div className="text-white hidden md:flex gap-[20px] lg:gap-[30px] items-center px-3 ">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className=" leading-[120%] capitalize font-medium text-lg"
                onClick={() => setIsSidebarOpen(false)}
                href="#"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button className=" bg-white hidden md:flex h-[40px] lg:h-[48px] justify-center items-center rounded-4xl w-[165px] lg:w-[175px] transition-all cursor-pointer text-[#29E0FF] text-center text-base font-bold leading-[120%] z-10 border border-white relative hover:bg-[#29E0FF] hover:text-white duration-700">
            Customer Login
          </button>

          <div
            className="md:hidden text-white flex flex-col gap-1 cursor-pointer"
            onClick={toggleSidebar}
          >
            <div className=" w-[30px] h-[3px] bg-white rounded-[50px] "></div>
            <div className=" w-[30px] h-[3px] bg-white rounded-[50px] "></div>
            <div className=" w-[30px] h-[3px] bg-white rounded-[50px] "></div>
          </div>
        </div>

        <div
          ref={sidebarRef}
          id="sidebar"
          className={`fixed top-0 bg-[#29E0FF] max-w-[800px] w-full h-screen z-50 overflow-auto transition-all duration-500 ease-in-out xl:hidden pt-10 ${
            isSidebarOpen ? "left-0" : "-left-[100%]"
          }`}
        >
          <p
            className="rotate-45 text-5xl text-white absolute right-4 top-4 cursor-pointer"
            onClick={closeSidebar}
          >
            +
          </p>

          <div className="text-white flex flex-col gap-[30px] items-center px-3 ">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className=" leading-[120%] capitalize font-medium text-lg"
                onClick={closeSidebar}
                href="#"
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={closeSidebar}
              className=" bg-white flex  h-[40px] lg:h-[48px] justify-center items-center rounded-4xl w-[150px] transition-all cursor-pointer text-[#29E0FF] text-center text-base font-bold leading-[120%] z-10 border border-white relative hover:bg-[#29E0FF] hover:text-white max-[320px]:h-[40px] duration-700"
            >
              Customer Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
