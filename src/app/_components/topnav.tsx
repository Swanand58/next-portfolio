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
    <nav>
      <ul className="flex w-full flex-wrap gap-4 pad-4 py-5 justify-center space-x-4">
        {NavList.map(([name, href]) => (
          <li
            key={name}
            className={`font-bold px-3 py-2 rounded-lg hover:text-white hover:bg-slate-600 ${
              pathname === href
                ? "text-white underline-offset-4 underline decoration-gray-400"
                : "text-slate-400"
            }`}
          >
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TopNav;
