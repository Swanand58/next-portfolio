import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/layout/top-nav";
import { Footer } from "@/components/layout/footer";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { ThemeProvider } from "@/providers/theme-provider";
import { AnalyticsProvider } from "@/providers/analytics-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swanand Sanjay Khonde",
  description: "My personal website showcasing my projects and experience.",
  keywords:
    "Swanand Khonde, software engineer, full-stack developer, portfolio, swanand sanjay khonde, machine learning engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://swanandkhonde.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Swanand Sanjay Khonde",
              url: "https://swanandkhonde.com/",
              jobTitle: "Software Engineer",
              image: "https://swanandkhonde.com/logo.jpg",
              sameAs: [
                "https://www.linkedin.com/in/swanandkhonde/",
                "https://github.com/Swanand58",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Ford Motor Company",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsProvider>
            <TopNav />
            {children}
            <Footer />
            <div className="fixed right-4 top-2 z-50">
              <ThemeToggle />
            </div>
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
