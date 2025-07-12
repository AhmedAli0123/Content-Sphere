import { Metadata } from "next";
import BusinessPageClient from "./BusinessPageClient";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: 'Business Blogs & Style Trends',
  description: 'Business Blogs - Expert insights on business growth, marketing and strategy. Content Sphere helps you succeed in the modern business world.',
  keywords: 'business blogs, entrepreneurship, business tips, industry trends, startup, management, marketing',
  alternates: {
    canonical: 'https://content-sphere-one.vercel.app/blog/business',
    languages: {
      'en': 'https://content-sphere-one.vercel.app/blog/business',
      'en-US': 'https://content-sphere-one.vercel.app/blog/business',
      'en-GB': 'https://content-sphere-one.vercel.app/blog/business',
      'en-CA': 'https://content-sphere-one.vercel.app/blog/business',
      'en-AU': 'https://content-sphere-one.vercel.app/blog/business',
      'x-default': 'https://content-sphere-one.vercel.app/blog/business',
    },
  },
  openGraph: {
    title: 'Business Blogs & Style Trends',
    description: 'Explore the latest business insights, entrepreneurship tips, and industry trends on Content Sphere. Stay ahead in the business world.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Blogs & Style Trends',
    description: 'Explore the latest business insights, entrepreneurship tips, and industry trends on Content Sphere. Stay ahead in the business world.',
  },
};

export default function BusinessPage() {
  return (
    <>
    <div className="max-w-6xl mx-auto px-6 pt-8">
        <Breadcrumbs items={[{ label: 'Blogs/Buinsess Blogs' }]} />
      </div>
  <BusinessPageClient />
  </>
  );
}
