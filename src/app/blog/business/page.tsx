import { Metadata } from "next";
import BusinessPageClient from "./BusinessPageClient";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: 'Business Blog | Entrepreneurship',
  description: 'Discover expert business insights on entrepreneurship, marketing strategies, and industry trends. Professional guidance for business success.',
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
    title: 'Business Blog | Entrepreneurship & Strategy Insights',
    description: 'Discover expert business insights on entrepreneurship, marketing strategies, and industry trends. Professional guidance for business success.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Blog | Entrepreneurship & Strategy Insights',
    description: 'Discover expert business insights on entrepreneurship, marketing strategies, and industry trends. Professional guidance for business success.',
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
