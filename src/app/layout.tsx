import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swanand Sanjay Khonde",
  description: "This is my portfolio",
};

const NavList = [
  ["Home", "/"],
  ["About", "/about"],
  ["Education", "/education"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

function TopNav() {
  return (
    <nav>
      <ul className="flex flex-wrap gap-4 pad-4 py-5 justify-center space-x-4">
        {NavList.map(([name, href]) => (
          <li className="font-bold px-3 py-2 text-slate-400 rounded-lg hover:bg-slate-100 hover:text-slate-900">
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
