import { Metadata } from "next";
import TechnologyPageClient from "./TechnologyPageClient";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: 'Technology Blog | Programming & Tech Trends',
  description: 'Explore cutting-edge technology articles covering AI, tech, and latest tech trends. Expert insights and tutorials from Content Sphere.',
  keywords: 'technology blogs, tech articles, programming, AI, software development, tech trends, technology blog',
  alternates: {
    canonical: 'https://content-sphere-one.vercel.app/blog/technology',
    languages: {
      'en': 'https://content-sphere-one.vercel.app/blog/technology',
      'en-US': 'https://content-sphere-one.vercel.app/blog/technology',
      'en-GB': 'https://content-sphere-one.vercel.app/blog/technology',
      'en-CA': 'https://content-sphere-one.vercel.app/blog/technology',
      'en-AU': 'https://content-sphere-one.vercel.app/blog/technology',
      'x-default': 'https://content-sphere-one.vercel.app/blog/technology',
    },
  },
  openGraph: {
    title: 'Technology Blog | Programming & Tech Trends',
    description: 'Explore cutting-edge technology articles covering AI, programming, software development, and latest tech trends. Expert insights and tutorials from Content Sphere.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Blog Posts | AI, Programming & Tech Trends',
    description: 'Explore cutting-edge technology articles covering AI, programming, software development, and latest tech trends. Expert insights and tutorials from Content Sphere.',
  },
};

export default function TechnologyPage() {
  return( 
  <>
  {/* Breadcrumbs */}
  <div className="max-w-6xl mx-auto px-6 pt-8">
        <Breadcrumbs items={[{ label: 'Blogs/Technology Blogs' }]} />
      </div>
  <TechnologyPageClient />
  </>
);
}
