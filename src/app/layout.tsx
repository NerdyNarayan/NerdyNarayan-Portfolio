import "@/styles/globals.css";
import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import React from "react";
import { ThemeProvider } from "../components/ui/theme-provider";
import MainNav from "@/components/mainNav";
export const metadata: Metadata = {
  title: "NerdyNarayan",
  description: "My portfolio website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="no-scrollbar  ">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
