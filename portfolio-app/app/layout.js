import { Inter } from "next/font/google";
import "./globals.css";
import "./fontawesome";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omons | Software Engineer",
  description:
    "Full Stack Software Engineer specializing in React, Next.js, and blockchain development. View my projects, technical blog, and development journey.",
  keywords:
    "Software Engineer, Full Stack Developer, React Developer, Next.js, Blockchain Development, Web3",
  openGraph: {
    title: "Omons | Software Engineer",
    description:
      "Full Stack Software Engineer specializing in React, Next.js, and blockchain development",
    type: "website",
    url: "https://omons-portfolio.vercel.app/",
    images: [
      {
        url: "https://omons-portfolio.vercel.app/api/og",
        width: 1200,
        height: 630,
        alt: "Omons Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omons | Software Engineer",
    description:
      "Full Stack Software Engineer specializing in React, Next.js, and blockchain development",
    images: ["https://omons-portfolio.vercel.app/api/og"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
