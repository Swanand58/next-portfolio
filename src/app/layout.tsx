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
      <ul className="flex w-full gap-4 pad-4 py-5 justify-center space-x-4">
        {NavList.map(([name, href]) => (
          <li className="font-bold px-3 py-2 text-slate-400 rounded-lg hover:bg-slate-100 hover:text-slate-900">
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="flex w-full py-4 border-t border-gray-200 items-center justify-between px-10">
      <div className="flex-grow">
        <ul className="flex space-x-4">
          {NavList.map(([name, href]) => (
            <li className="font-bold px-2 py-2 text-sm text-gray-600 hover:text-white">
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-gray-600">
        © 2024 Swanand Khonde. All Rights Reserved.
      </p>
    </footer>
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
        <Footer />
      </body>
    </html>
  );
}
