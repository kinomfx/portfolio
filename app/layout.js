"use client"; // must be client if using useState/useContext

import React, { useState } from "react";
import { Outfit, Ovo } from "next/font/google";
import { DarkModeProvider } from "./context/DarkModeContext";// correct path
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});


export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en" className={`scroll-smooth   `}>
      <body className={`${ovo.className} ${outfit.className} antialiased leading-8 overflow-x-hidden ${darkMode ? "dark" : ""}`}>
        <DarkModeProvider value={{ darkMode, setDarkMode }}>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
