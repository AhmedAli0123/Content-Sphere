import { Metadata } from "next";
import FashionPageClient from "./FashionPageClient";

export const metadata: Metadata = {
  title: 'Fashion Blogs',
  description: 'Fashion Blog  - Stay updated with the latest fashion trends, style tips, and industry news. Content Sphere’s fashion blog covers everything from runway to street style.',
  keywords: 'fashion blogs, style tips, fashion trends, clothing, accessories, fashion industry',
  openGraph: {
    title: 'Fashion Blogs',
    description: 'Discover the latest fashion trends, style tips, and fashion insights on Content Sphere. Stay updated with the world of fashion and style.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fashion Blogs',
    description: 'Discover the latest fashion trends, style tips, and fashion insights on Content Sphere. Stay updated with the world of fashion and style.',
  },
};

export default function FashionPage() {
  return <FashionPageClient />;
}
