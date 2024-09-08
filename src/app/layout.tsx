import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";
import TopNav from "./_components/topnav";
import ThemeToggle from "../app/_components/ThemeToggle";
import Head from "next/head";

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
        <Head>
          <title>Swanand Sanjay Khonde</title>
          <meta
            name="description"
            content="My personal website showcasing my projects and experience."
          />
          <meta
            name="keywords"
            content="Swanand Khonde, software engineer, full-stack developer, portfolio, swanand sanjay khonde, machine learning engineer"
          />
          <link
            rel="canonical"
            href="https://swanand-khonde-portfolio.vercel.app/"
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Swanand Sanjay Khonde",
                url: "https://swanand-khonde-portfolio.vercel.app/",
                jobTitle: "Software Engineer",
                image: "https://swanand-khonde-portfolio.vercel.app/logo.jpg",
                sameAs: [
                  "https://www.linkedin.com/in/swanandkhonde/",
                  "https://github.com/Swanand58",
                ],
                worksFor: {
                  "@type": "Organization",
                  name: "HSBC",
                },
              }),
            }}
          />
        </Head>
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
