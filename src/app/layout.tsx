import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";
import TopNav from "./_components/topnav";
import ThemeToggle from "../app/_components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

import { CSPostHogProvider } from "./_analytics/providers";

export const metadata: Metadata = {
  title: "Swanand Sanjay Khonde",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body
          className={`${inter.className} bg-gray-200 dark:bg-black text-black dark:text-white`}
        >
          <TopNav />
          {children}
          <Footer />
          <div className="fixed top-2 right-4">
            <ThemeToggle />
          </div>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
