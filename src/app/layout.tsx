import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
    default: 'Content Sphere - Blogs on Business, Technology, Fashion & AI',
    template: '%s | Content Sphere',
  },
  description: 'Discover insightful blogs on fashion, business, and cutting-edge technology. Stay informed with the latest trends, AI insights, and industry analysis from Content Sphere.',
  keywords: [
    'business blog', 
    'technology blog', 
    'AI blogs', 
    'fashion blog', 
    'developer blogs', 
    'insights',
    'digital content',
    'industry analysis',
    'professional development',
    'tech news',
    'business strategies',
    'fashion trends',
    'artificial intelligence',
    'Content Sphere'
  ],
  authors: [{ name: 'Content Sphere Team' }],
  creator: 'Content Sphere',
  publisher: 'Content Sphere',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://content-sphere-one.vercel.app/'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://content-sphere-one.vercel.app/',
    title: 'Content Sphere - Blogs on Business, Technology, Fashion & AI',
    description: 'Discover insightful blogs on fashion, business, and cutting-edge technology. Stay informed with the latest trends, AI insights, and industry analysis.',
    siteName: 'Content Sphere',
    images: [
      {
        url: 'https://content-sphere-one.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Content Sphere - Business, Technology, Fashion & AI Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Sphere - Blogs on Business, Technology, Fashion & AI',
    description: 'Discover insightful blogs on fashion, business, and cutting-edge technology. Stay informed with the latest trends, AI insights, and industry analysis.',
    images: ['https://content-sphere-one.vercel.app/og-image.jpg'],
    creator: '@contentsphere',
  },
  verification: {
    google: 'tAQxGU-ofzjYEmFd0MDeYZKcojaQuW3j1qMGVPDcae4',
  },
  category: 'blog',
  classification: 'Technology, Business, Fashion',
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
        <meta name="theme-color" content="#178E79" />
        <meta name="msapplication-TileColor" content="#178E79" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Content Sphere" />
        <meta name="application-name" content="Content Sphere" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#178E79" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        
        {/* DNS Prefetch for better performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
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
        <GoogleAnalytics />
      </body>
    </html>
  );
}
