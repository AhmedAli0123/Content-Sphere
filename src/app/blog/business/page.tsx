import { Metadata } from "next";
import BusinessPageClient from "./BusinessPageClient";

export const metadata: Metadata = {
  title: 'Business Blogs',
  description: 'Business Blogs - Discover expert insights on business growth, entrepreneurship, marketing, and strategy. Content Sphere helps you succeed in the modern business world.',
  keywords: 'business blogs, entrepreneurship, business tips, industry trends, startup, management, marketing',
  openGraph: {
    title: 'Business Blogs',
    description: 'Explore the latest business insights, entrepreneurship tips, and industry trends on Content Sphere. Stay ahead in the business world.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Blogs',
    description: 'Explore the latest business insights, entrepreneurship tips, and industry trends on Content Sphere. Stay ahead in the business world.',
  },
};

export default function BusinessPage() {
  return <BusinessPageClient />;
}
