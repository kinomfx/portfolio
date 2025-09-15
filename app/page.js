'use client'
import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { DarkModeContext } from "./context/DarkModeContext";
export default function Home() {
  const {darkMode , setDarkMode} = React.useContext(DarkModeContext);
  return (
    <div>
      <div className={darkMode ? 'dark' : ''}>
        <Navbar darkMode={darkMode} setDarkMode = {setDarkMode}/>
        <Header darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Services darkMode={darkMode}/>
        <Work darkMode={darkMode}/>
        <Contact darkMode={darkMode}/>
        <Footer darkMode={darkMode}/>
      </div>
    </div>
  );
}
