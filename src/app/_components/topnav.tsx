"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
          <Link href={href} key={name}>
            <ul>
              <li
                className={`font-bold px-3 py-2 rounded-lg hover:text-white dark:hover:text-white hover:bg-[rgb(31,47,81)] dark:hover:bg-slate-600 ${
                  pathname === href
                    ? "text-white dark:text-white underline-offset-4 underline decoration-gray-400"
                    : "text-gray-300 dark:text-slate-400"
                }`}
              >
                {name}
              </li>
            </ul>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default TopNav;
