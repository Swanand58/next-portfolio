"use client";

import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorageState("theme", {
    defaultValue: "dark",
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg border transition-colors ${
        theme === "dark"
          ? "bg-black border-gray-600"
          : "bg-white border-gray-300"
      }`}
    >
      {theme === "dark" ? (
        <MoonIcon className="h-6 w-6 text-white" />
      ) : (
        <SunIcon className="h-6 w-6 text-black" />
      )}
    </button>
  );
};

export default ThemeToggle;
