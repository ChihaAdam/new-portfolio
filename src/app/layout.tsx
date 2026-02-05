import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "adam chiha",
  applicationName: "adam chiha portfolio",
  description:
    "the portfolio of adam chiha , a web developer who uses MERN stack to build web applications that are performant , scalable , user-friendly , secure and visible",
  keywords: [
    "adam chiha",
    "adam chiha portfolio",
    "adam chiha dev",
    "adam chiha coder",
    "adam chiha engineer",
    "mern",
    "mern stack",
    "mern dev",
    "mern apps",
    "react",
    "react dev",
    "react apps",
    "node",
    "node dev",
    "node apps",
    "express",
    "express dev",
    "express api",
    "mongo",
    "mongo db",
    "mongo dev",
    "fullstack",
    "fullstack dev",
    "web dev",
    "web apps",
    "web solutions",
    "secure apps",
    "fast apps",
    "scalable apps",
    "modern ui",
    "ux design",
    "ui dev",
    "seo apps",
    "mobile apps",
    "cloud apps",
    "custom apps",
    "hire dev",
    "hire mern dev",
    "portfolio site",
    "app builder",
    "digital apps",
    "future tech",
    "clean code",
    "api dev",
    "frontend",
    "backend",
    "responsive",
    "interactive",
    "user-friendly",
    "performant",
    "visible web",
  ],
  authors: [{ name: "adam chiha" }],
  creator: "adam chiha",
  publisher: "adam chiha",
  icons: {
    icon: "favicon.svg",
  },
  openGraph: {
    title: "adam chiha",
    description:
      "the portfolio of adam chiha , a web developer who uses MERN stack to build web applications that are performant , scalable , user-friendly , secure and visible",
    images: [
      {
        url: "/openGraph.png",
        width: 1757,
        height: 726,
        alt: "adam chiha",
      },
    ],
  },
  verification: {
    google: "o8voPqo5tM9au1eDrTm05ZZFyh26n7SwRrc2Cbfif0U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
