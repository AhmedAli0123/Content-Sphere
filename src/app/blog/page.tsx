import { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Explore the latest blogs on Content Sphere.',
  keywords: 'blogs, articles, content, writing',
  openGraph: {
    title: 'Blogs',
    description: 'Explore the latest blogs on Content Sphere.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogs - Content Sphere',
    description: 'Explore the latest blogs on Content Sphere.',
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
