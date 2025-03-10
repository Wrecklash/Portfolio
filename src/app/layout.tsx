import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata for the website
 * This information is used for SEO and browser tab display
 */
export const metadata: Metadata = {
  title: "Abhilash Biradar - Product Manager & Tech Leader",
  description: "Product Manager with 6 years of experience in product and data roles, focusing on consumer internet products in social and finance sectors.",
};

/**
 * Root layout component
 * Wraps all pages with common elements like fonts, navigation, and theme
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[rgb(var(--bg-main))]`}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 