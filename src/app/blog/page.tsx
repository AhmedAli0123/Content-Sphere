import { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: 'Latest Blog | Technology, Business & Fashion',
  description: 'Discover the latest insights on technology, business strategies, fashion trends. Expert analysis, tutorials and industry updates from Content Sphere.',
  keywords: ['blog posts', 'technology articles', 'business insights', 'fashion trends', 'AI tutorials', 'digital content', 'industry analysis', 'professional development', 'tech news', 'business strategies', 'fashion guides', 'artificial intelligence', 'Content Sphere blog'],
  authors: [{ name: 'Ahmed Ali' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: 'Latest Blog Posts & Articles | Content Sphere',
    description: 'Discover the latest insights on technology, business strategies, fashion trends, and AI innovations. Expert analysis and tutorials from Content Sphere.',
    url: 'https://content-sphere-one.vercel.app/blog',
    siteName: 'Content Sphere',
    images: [
      {
        url: 'https://content-sphere-one.vercel.app/about-hero.svg',
        width: 800,
        height: 600,
        alt: 'Content Sphere Blog - Latest Articles and Insights',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Latest Blog Posts & Articles | Content Sphere',
    description: 'Discover the latest insights on technology, business strategies, fashion trends, and AI innovations.',
    images: ['https://content-sphere-one.vercel.app/about-hero.svg'],
    creator: '@ContentSphere',
  },
  alternates: {
    canonical: 'https://content-sphere-one.vercel.app/blog',
    languages: {
      'en': 'https://content-sphere-one.vercel.app/blog',
      'en-US': 'https://content-sphere-one.vercel.app/blog',
      'en-GB': 'https://content-sphere-one.vercel.app/blog',
      'en-CA': 'https://content-sphere-one.vercel.app/blog',
      'en-AU': 'https://content-sphere-one.vercel.app/blog',
      'x-default': 'https://content-sphere-one.vercel.app/blog',
    },
  },
  other: {
    'article:publisher': 'https://content-sphere-one.vercel.app',
    'article:section': 'Blog',
    'article:tag': 'technology, business, fashion, AI, digital content',
  },
};

export default function BlogPage() {
  return(
  <>
  {/* Breadcrumbs */}
  <div className="max-w-6xl mx-auto px-6 pt-8">
        <Breadcrumbs items={[{ label: 'Blogs' }]} />
      </div>
   <BlogPageClient />;
   </>
  )
}
