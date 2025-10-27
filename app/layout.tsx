import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";

// Echo font for body text
const echo = localFont({
  src: [
    {
      path: "../public/fonts/echo/Echo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/echo/Echo-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/echo/Echo-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/echo/Echo-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/echo/Echo-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/echo/Echo-SemiboldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/echo/Echo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/echo/Echo-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-echo",
});

export const metadata: Metadata = {
  title: "Design System | Token Studio + Tailwind",
  description: "A comprehensive design system with semantic tokens, calculated typography, and Figma integration via Token Studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${echo.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
