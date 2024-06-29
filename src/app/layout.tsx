import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "@next/font/google";
import "./globals.css";
import Footer from "./_components/footer";
import TopNav from "./_components/topnav";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add desired weights
});
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
        <body className={poppins.className}>
          <TopNav />
          {children}
          <Footer />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
