import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import { CSPostHogProvider } from "./_analytics/providers";

export const metadata: Metadata = {
  title: "Swanand Sanjay Khonde",
  description: "My personal website",
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
      <ul className="flex w-full flex-wrap gap-4 pad-4 py-5 justify-center space-x-4">
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
    <footer className="items-center justify-between w-full py-4 border-t border-gray-200 px-4 sm:px-10">
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <ul className="flex justify-center flex-wrap gap-2 mb-4 sm:mb-0 items-center">
          {NavList.map(([name, href]) => (
            <li className="font-bold px-2 py-2 text-sm text-gray-600 hover:text-white ">
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center w-full text-gray-600 text-xs sm:text-sm items-center sm:w-auto sm:ml-auto">
        <p className="">© 2024 Swanand Khonde. All Rights Reserved.</p>
      </div>
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
      <CSPostHogProvider>
        <body className={inter.className}>
          <TopNav />
          {children}
          <Footer />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
