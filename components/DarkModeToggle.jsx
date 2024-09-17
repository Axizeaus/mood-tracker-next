"use client";

import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={
        "border duration-200 transition-all mr-2 " +
        (isDarkMode ? "border-x-violet-500" : "border-y-violet-500")
      }
    >
      <span className="px-4 py-2">lights {isDarkMode ? "on" : "off"}</span>
    </button>
  );
}
