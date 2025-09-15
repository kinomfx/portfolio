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
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between transition-all duration-300 backdrop-blur mb-20 ${
        scroll
          ? darkMode
            ? "bg-gray-900/70 text-white shadow-md"
            : "bg-white/70 text-black shadow-md"
          : darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
      style={{ height: "60px" }}
    >
      {/* Logo */}
      <a href="#top" className="ml-4 md:ml-0">
        <Image
          src={darkMode ? assets.logo_dark : assets.logo}
          className="w-28"
          alt="Logo"
        />
      </a>

      {/* Desktop Menu */}
      <ul
        className={`hidden md:flex items-center gap-6 lg:gap-8 text-base px-4 py-2 transition-all duration-500 ${
          scroll ? "" : darkMode ? "bg-gray-800 shadow-sm" : "bg-white shadow-sm"
        }`}
      >
        {["Home", "About", "Services", "My Work", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className={`font-ovo ${darkMode ? "text-white" : "text-black"}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right Buttons */}
      <div className="flex items-center gap-3 mr-4 md:mr-0">
        <button
          className="p-1"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
        >
          <Image
            src={darkMode ? assets.sun_icon : assets.moon_icon}
            alt="Theme Icon"
            className="w-5 h-5"
          />
        </button>

        <a
          href="#contact"
          className={`hidden lg:flex items-center gap-2 px-6 py-1.5 border rounded-full font-ovo text-sm ${
            darkMode ? "border-gray-400 text-white" : "border-gray-500 text-black"
          }`}
        >
          Contact
          <Image src={assets.arrow_icon} alt="" className="w-3" />
        </a>

        {/* Mobile Menu Button */}
        <button className="block md:hidden p-1" onClick={openMenu}>
          <Image
            src={darkMode ? assets.menu_white : assets.menu_black}
            alt="Menu"
            className="w-6"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        ref={sideMenuref}
        className={`md:hidden flex flex-col gap-4 py-20 px-6 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition-all duration-500 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="absolute top-6 right-6">
          <Image
            src={darkMode ? assets.close_white : assets.close_black}
            alt="Close Menu"
            className="w-6 cursor-pointer"
            onClick={closeMenu}
          />
        </div>
        {["Home", "About", "Services", "My Work", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase().replace(" ", "")}`} className="font-ovo" onClick={closeMenu}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
