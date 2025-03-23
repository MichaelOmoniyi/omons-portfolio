import { Inter } from "next/font/google";
import "./globals.css";
import './fontawesome'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omons Portfolio",
  description: "My porfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
