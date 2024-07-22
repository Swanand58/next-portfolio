"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const NavList = [
  ["Home", "/"],
  ["About", "/about"],
  ["Education", "/education"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

function TopNav() {
  const pathname = usePathname();
  return (
    <nav className="relative flex items-center justify-between p-4 bg-[rgb(51,67,101)] dark:bg-black">
      <ul className="flex w-full flex-wrap gap-4 pad-4 py-5 justify-center space-x-4">
        {NavList.map(([name, href]) => (
          <li
            key={name}
            className={`font-bold px-3 py-2 rounded-lg hover:text-white dark:hover:text-white hover:bg-[rgb(31,47,81)] dark:hover:bg-slate-600 ${
              pathname === href
                ? "text-white dark:text-white underline-offset-4 underline decoration-gray-400"
                : "text-gray-300 dark:text-slate-400"
            }`}
          >
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default TopNav;
