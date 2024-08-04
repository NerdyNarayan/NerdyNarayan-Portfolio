import "@/styles/globals.css";
import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import React from "react";

import MainNav from "@/components/header/site-header";

import { ThemeProvider } from "../components/ui/theme-provider";
export const metadata: Metadata = {
  title: "NerdyNarayan",
  description: "My portfolio website",
  icons: [{ url: "/Profile.jpg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${GeistSans.variable}`} lang="en">
      <body className="no-scrollbar  ">
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="dark"
        >
          <MainNav />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
