"use client";

import { useEffect } from "react";
import { Switch } from "@headlessui/react";
import useLocalStorageState from "use-local-storage-state";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";

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
    <div className="flex items-center">
      <Switch
        checked={theme === "dark"}
        onChange={toggleTheme}
        className={`${
          theme === "dark" ? "bg-gray-800" : "bg-gray-200"
        } relative inline-flex h-10 w-14 items-center rounded-full`}
      >
        <span className="sr-only">Toggle Theme</span>
        <span
          className={`${
            theme === "dark" ? "translate-x-6" : "translate-x-1"
          }  h-6 w-6 transform bg-white rounded-full transition flex items-center justify-center`}
        >
          {theme === "dark" ? (
            <>
              <MoonIcon className="h-6 w-4 text-gray-400" />
            </>
          ) : (
            <SunIcon className="h-6 w-4 text-yellow-700" />
          )}
        </span>
        {theme === "dark" && (
          <div className="absolute flex justify-between w-full px-1.5">
            <StarIcon className="h-2 w-2 text-gray-100" />
            <StarIcon className="h-2 w-2 text-gray-100" />
            <StarIcon className="h-2 w-2 text-gray-100" />
            <StarIcon className="h-2 w-2 text-gray-100" />
          </div>
        )}
      </Switch>
    </div>
  );
};

export default ThemeToggle;
