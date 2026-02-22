"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full items-center justify-between border-t border-border bg-background px-4 py-4 sm:px-10">
      <div className="flex flex-col items-center justify-between text-center sm:flex-row sm:text-left">
        <ul className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:mb-0">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={cn(
                "px-2 py-2 text-sm font-bold hover:underline hover:underline-offset-4",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-full items-center justify-center text-xs text-muted-foreground sm:ml-auto sm:w-auto sm:text-sm">
        <p className="hover:text-foreground">
          © {new Date().getFullYear()} Swanand Khonde. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
