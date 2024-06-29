import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";
import TopNav from "./_components/topnav";

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
        <body className={inter.className}>
          <TopNav />
          {children}
          <Footer />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
