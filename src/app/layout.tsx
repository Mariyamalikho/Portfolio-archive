import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mariyam Ali Khokhar | Software Engineer",
  description: "A high-end scrollytelling portfolio showcasing digital innovation, IT systems, and visual communication.",
  keywords: ["Software Engineer", "Web Developer", "React", "Next.js", "Portfolio", "Mariyam Ali Khokhar"],
  authors: [{ name: "Mariyam Ali Khokhar" }],
  openGraph: {
    title: "Mariyam Ali Khokhar | Software Engineer",
    description: "A high-end scrollytelling portfolio showcasing digital innovation, IT systems, and visual communication.",
    url: "https://mariyamalikhokhar.com",
    siteName: "Mariyam Ali Khokhar Portfolio",
    images: [
      {
        url: "https://mariyamalikhokhar.com/images/unicef-digital-systems/new-2.jpg",
        width: 1200,
        height: 630,
        alt: "Mariyam Ali Khokhar - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariyam Ali Khokhar | Software Engineer",
    description: "A high-end scrollytelling portfolio showcasing digital innovation, IT systems, and visual communication.",
    images: ["https://mariyamalikhokhar.com/images/unicef-digital-systems/new-2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
