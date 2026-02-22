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

export function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="relative flex items-center justify-between bg-background p-4">
      <ul className="flex w-full flex-wrap justify-center gap-4 space-x-4 py-5">
        {navItems.map((item) => (
          <Link href={item.href} key={item.name}>
            <li
              className={cn(
                "rounded-lg px-3 py-2 font-bold transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === item.href
                  ? "text-foreground underline decoration-muted-foreground underline-offset-4"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
