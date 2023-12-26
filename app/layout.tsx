import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({ src: "./_font/InterVariable.woff2" });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supertime",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
