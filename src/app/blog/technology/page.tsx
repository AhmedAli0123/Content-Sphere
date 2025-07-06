import { Metadata } from "next";
import TechnologyPageClient from "./TechnologyPageClient";

export const metadata: Metadata = {
  title: 'Technology Blogs',
  description: 'Technology Blogs - Explore the world of technology with articles on AI, startups, software trends, and innovation. Stay tech-savvy with Content Sphere.',
  keywords: 'technology blogs, tech articles, programming, AI, software development, tech trends, technology blog',
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
  return <TechnologyPageClient />;
}
