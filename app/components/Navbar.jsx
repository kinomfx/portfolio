"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scroll, setScroll] = useState(false);
  const sideMenuref = useRef(null);

  const openMenu = () => {
    sideMenuref.current.classList.remove("-right-64");
    sideMenuref.current.classList.add("right-0");
  };

  const closeMenu = () => {
    sideMenuref.current.classList.remove("right-0");
    sideMenuref.current.classList.add("-right-64");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center z-50 justify-between transition-all duration-300 backdrop-blur ${
    scroll
      ? darkMode
        ? "bg-gray-900/70 text-white shadow-md"
        : "bg-white/70 text-black shadow-md"
      : darkMode
      ? "bg-gray-900 text-white"
      : "bg-white text-black"
  }`}
    >
      <a href="#top">
        <Image src={darkMode?assets.logo_dark:assets.logo} className="w-28 cursor-pointer" alt="" />
      </a>

      {/* Desktop Menu */}
      <ul
        className={`hidden md:flex items-center gap-6 lg:gap-8 text-xl rounded-full px-12 py-4 transition-all duration-500 ${
          scroll
            ? ""
            : darkMode
            ? "bg-gray-800 shadow-sm"
            : "bg-white shadow-sm"
        }`}
      >
        <li>
          <a
            href="#top"
            className={`font-ovo ${darkMode ? "text-white" : "text-black"}`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`font-ovo ${darkMode ? "text-white" : "text-black"}`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={`font-ovo ${darkMode ? "text-white" : "text-black"}`}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#work"
            className={`font-ovo ${darkMode ? "text-white" : "text-black"}`}
          >
            My Work
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`font-ovo ${darkMode ? "text-white" : "text-black"}`}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Right buttons */}
      <div className="flex items-center gap-4">
        <button onClick={() => setDarkMode(!darkMode)}>
          <Image
            src={darkMode ? assets.sun_icon : assets.moon_icon}
            alt=""
            className="w-6 cursor-pointer"
          />
        </button>

        <a
          href="#contact"
          className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full font-ovo ${
            darkMode
              ? "border-gray-400 text-white"
              : "border-gray-500 text-black"
          }`}
        >
          Contact
          <Image src={assets.arrow_icon} alt="" className="w-3" />
        </a>

        {/* Mobile menu button */}
        <button className="block md:hidden ml-3" onClick={openMenu}>
          <Image src={assets.menu_black} alt="" className="w-6 cursor-pointer" />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        ref={sideMenuref}
        className={`md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition-all duration-500 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="absolute top-6 right-6">
          <Image
            src={darkMode ? assets.close_white : assets.close_black}
            alt=""
            className="w-6 cursor-pointer"
            onClick={closeMenu}
          />
        </div>
        <li>
          <a href="#top" className="font-ovo" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="font-ovo" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#services" className="font-ovo" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#work" className="font-ovo" onClick={closeMenu}>
            My Work
          </a>
        </li>
        <li>
          <a href="#contact" className="font-ovo" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
