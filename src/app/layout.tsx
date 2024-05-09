import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swanand Sanjay Khonde",
  description: "This is my portfolio",
};

function TopNav() {
  return (
    <nav>
      <ul className="flex flex-wrap gap-4 pad-4 py-5 justify-center space-x-4">
        <li className="font-bold px-3 py-2 text-slate-400 rounded-lg hover:bg-slate-100 hover:text-slate-900">
          <Link href="/">Home</Link>
        </li>
        <li className="font-bold px-3 py-2 text-slate-400 rounded-lg hover:bg-slate-100 hover:text-slate-900">
          <Link href="/about">About</Link>
        </li>
        <li className="font-bold px-3 py-2 text-slate-400 rounded-lg hover:bg-slate-100 hover:text-slate-900">
          <Link href="/education">Education</Link>
        </li>
        <li className="font-bold px-3 py-2 text-slate-400 rounded-lg hover:bg-slate-100 hover:text-slate-900">
          <Link href="/experience">Experience</Link>
        </li>
        <li className="font-bold px-3 py-2 text-slate-400 rounded-lg hover:bg-slate-100 hover:text-slate-900">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="font-bold px-3 py-2 text-slate-400 rounded-lg hover:bg-slate-100 hover:text-slate-900">
          <Link href="/contact">Contact</Link>
        </li>
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
