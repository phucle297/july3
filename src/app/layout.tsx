import DotsGridBg from "@/components/dots-grid-bg";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { ToastProvider } from "@/providers/toast-provider";
import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const fontSans = Afacad({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "July",
  description: "July groups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/*" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:image"
          content="https://d1dfwr4c9kt8hq.cloudfront.net/july.png"
        />
        <meta property="og:image:width" content="805" />
        <meta property="og:image:height" content="380" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="July Groups" />
        <meta property="og:site_name" content="July Groups" />
        <meta property="og:url" content="https://www.julygroups.com" />
        <meta name="google" content="notranslate" />
        <meta name="og:description" content="July Groups provides " />
        <meta
          property="og:description"
          content="Discover July Groups, your destination for premier yoga instruction and hassle-free apartment rental services. Explore promotions and connect with expert yoga teachers and find your ideal apartment today."
        />
        <meta
          name="keyword"
          content="JULY, july groups, july apartment, yoga, july"
        />
        <link
          rel="shortcut icon"
          href="https://d1dfwr4c9kt8hq.cloudfront.net/july.png"
        />

        <title>July</title>
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >
        <ThemeProvider
          defaultTheme="light"
          storageColorKey="color"
          storageThemeKey="theme"
        >
          <ToastProvider />
          <Header />
          {children}
          <DotsGridBg />
        </ThemeProvider>
      </body>
    </html>
  );
}
