"use client";
import { createContext } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children, value }) => {
  // value will contain { darkMode, setDarkMode } from RootLayout
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
