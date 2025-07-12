import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: 'Content Sphere',
    template: '%s | Content Sphere',
  },
  keywords: ['business blog', 'fastest growing blog', 'technology blog', 'Ai Blogs', 'developer blogs', 'blogs' ,'insights'],
  description: 'Learn more about Content Sphere, the blog that explores the latest trends in business, technology, fashion, and AI.',
    metadataBase: new URL('https://content-sphere-one.vercel.app/'),
    twitter:{
      card:"summary_large_image"
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="tAQxGU-ofzjYEmFd0MDeYZKcojaQuW3j1qMGVPDcae4" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
