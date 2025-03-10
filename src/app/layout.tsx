import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import '@/app/globals.css';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata for the website
 * This information is used for SEO and browser tab display
 */
export const metadata: Metadata = {
  title: 'Abhilash Biradar - Product Manager',
  description: 'Product Manager with 6 years of experience in building and scaling products.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
} 