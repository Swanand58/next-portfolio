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

function Footer() {
  const pathname = usePathname();
  return (
    <footer className="items-center justify-between w-full py-4 border-t border-[rgb(51,67,101)] dark:border-gray-700 px-4 sm:px-10 bg-[rgb(51,67,101)] dark:bg-black">
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <ul className="flex justify-center flex-wrap gap-2 mb-4 sm:mb-0 items-center">
          {NavList.map(([name, href]) => (
            <li
              key={name}
              className={`font-bold px-2 py-2 text-sm hover:underline-offset-4 hover:underline ${
                pathname === href
                  ? "text-white dark:text-white"
                  : "text-gray-300 dark:text-gray-400"
              } hover:text-white dark:hover:text-white`}
            >
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center w-full text-gray-300 dark:text-gray-400 text-xs sm:text-sm items-center sm:w-auto sm:ml-auto">
        <p className="hover:text-white dark:hover:text-white">
          © {new Date().getFullYear()} Swanand Khonde. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
