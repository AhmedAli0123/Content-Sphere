import { Metadata } from "next";
import TechnologyPageClient from "./TechnologyPageClient";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: 'Technology Blogs & Style Trends',
  description: 'Technology Blogs - Explore the world of technology with articles on AI, startups, software trends, and innovation. Stay tech-savvy with Content Sphere.',
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
    title: 'Technology Blogs',
    description: 'Explore the latest technology blogs and articles on Content Sphere. Stay updated with tech trends, programming, AI, and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Blogs - Content Sphere',
    description: 'Explore the latest technology blogs and articles on Content Sphere. Stay updated with tech trends, programming, AI, and more.',
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
