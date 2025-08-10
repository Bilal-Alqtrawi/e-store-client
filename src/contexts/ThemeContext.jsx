/* DARK MODE WITH USING CONTEXT API */

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(function () {
    // 1. Check for a saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  function toggleTheme() {
    setIsDarkMode((prev) => !prev);
  }

  useEffect(
    function () {
      // root HTML
      document.documentElement.classList.toggle("dark", isDarkMode);
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    },
    [isDarkMode],
  );

  //   useEffect(function (params) {}, [darkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("ThemeContext was used outside of the ThemeProvider");

  return context;
}

export { ThemeProvider, useTheme };
