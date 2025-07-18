import { Metadata } from "next";
import FashionPageClient from "./FashionPageClient";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: 'Fashion Blogs & Style Trends',
  description: 'latest fashion trends, style tips, and fashion insights. Stay updated with runway looks, street style, and fashion industry news on Content Sphere.',
  keywords: 'fashion blogs, style tips, fashion trends, clothing, accessories, fashion industry, runway fashion, street style',
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
  alternates: {
    canonical: 'https://content-sphere-one.vercel.app/blog/fashion',
    languages: {
      'en': 'https://content-sphere-one.vercel.app/blog/fashion',
      'en-US': 'https://content-sphere-one.vercel.app/blog/fashion',
      'en-GB': 'https://content-sphere-one.vercel.app/blog/fashion',
      'en-CA': 'https://content-sphere-one.vercel.app/blog/fashion',
      'en-AU': 'https://content-sphere-one.vercel.app/blog/fashion',
      'x-default': 'https://content-sphere-one.vercel.app/blog/fashion',
    },
  },
  openGraph: {
    title: 'Fashion Blogs & Style Trends | Content Sphere',
    description: 'Discover the latest fashion trends, style tips, and fashion insights. Stay updated with runway looks, street style, and fashion industry news.',
    type: 'website',
    url: '/blog/fashion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fashion Blogs & Style Trends | Content Sphere',
    description: 'Discover the latest fashion trends, style tips, and fashion insights. Stay updated with runway looks, street style, and fashion industry news.',
  },
};

export default function FashionPage() {
  return(
  <>
  <div className="max-w-6xl mx-auto px-6 pt-8">
        <Breadcrumbs items={[{ label: 'Blogs/Fashion Blogs' }]} />
      </div>
  <FashionPageClient />
  </>
  )
  ;
}
