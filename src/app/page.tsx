import React from "react";
import PopularCategory from "@/components/PopularCategory";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import FAQSchema, { homePageFAQs } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: 'Content Sphere – Blogs on Business, Technology, Fashion & AI',
  description: 'Discover insightful blogs on fashion, business, and cutting-edge technology. Stay informed with the latest trends, AI insights, and industry analysis from Content Sphere.',
  keywords: [
    'business blog',
    'technology blog', 
    'AI blogs',
    'fashion blog',
    'developer blogs',
    'insights',
    'digital content',
    'industry analysis',
    'professional development',
    'tech news',
    'business strategies',
    'fashion trends',
    'artificial intelligence',
    'Content Sphere'
  ],
  openGraph: {
    title: 'Content Sphere – Blogs on Business, Technology, Fashion & AI',
    description: 'Discover insightful blogs on fashion, business, and cutting-edge technology. Stay informed with the latest trends, AI insights, and industry analysis.',
    url: 'https://content-sphere-one.vercel.app/',
    siteName: 'Content Sphere',
    images: [
      {
        url: 'https://content-sphere-one.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Content Sphere - Business, Technology, Fashion & AI Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Sphere – Blogs on Business, Technology, Fashion & AI',
    description: 'Discover insightful blogs on fashion, business, and cutting-edge technology. Stay informed with the latest trends, AI insights, and industry analysis.',
    images: ['https://content-sphere-one.vercel.app/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://content-sphere-one.vercel.app/',
  },
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
};

// Structured data for the homepage
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Content Sphere",
  "description": "Discover insightful blogs on fashion, business, and cutting-edge technology. Stay informed with the latest trends, AI insights, and industry analysis.",
  "url": "https://content-sphere-one.vercel.app/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://content-sphere-one.vercel.app/blog?search={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Content Sphere",
    "logo": {
      "@type": "ImageObject",
      "url": "https://content-sphere-one.vercel.app/logo.png"
    }
  },
  "sameAs": [
    "https://twitter.com/contentsphere",
    "https://linkedin.com/company/contentsphere"
  ]
};

export default function Page() {
  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* FAQ Schema */}
      <FAQSchema faqs={homePageFAQs} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#178E79] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-[#178E79] dark:from-white dark:to-[#178E79] bg-clip-text text-transparent">
            Welcome to Content Sphere
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover insightful blogs on fashion, business, and cutting-edge technology. 
            Stay informed with the latest trends, AI insights, and industry analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/blog">
              <Button className="bg-[#178E79] hover:bg-[#0f6b5f] text-white px-10 py-4 rounded-xl text-lg font-bold shadow-2xl transform transition-all duration-300 hover:scale-105">
                🚀 Explore Blogs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-[#178E79] dark:from-white dark:to-[#178E79] bg-clip-text text-transparent">
            Popular Categories
          </h2>
          <PopularCategory />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-[#178E79] dark:from-white dark:to-[#178E79] bg-clip-text text-transparent">
            Why Choose Content Sphere?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#178E79] to-[#0f6b5f] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-white">📚</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Expert Insights</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Access high-quality content written by industry experts and professionals. 
                Get deep insights into the latest trends and developments in your field of interest.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#178E79] to-[#0f6b5f] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Diverse Topics</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Explore a wide range of topics from technology and business to fashion and lifestyle. 
                Find content that matches your interests and professional needs.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#178E79] to-[#0f6b5f] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-white">🔄</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Regular Updates</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Stay current with our regularly updated content that reflects the latest trends, technologies, 
                and industry developments. We keep you informed about what&apos;s happening in your field of interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#178E79] via-[#0f6b5f] to-[#178E79] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Explore More?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Join thousands of readers who trust Content Sphere for their daily dose of insights, tutorials, 
            and industry knowledge. Start your journey of continuous learning and professional growth today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/blog">
              <Button className="bg-white text-[#178E79] px-10 py-4 rounded-xl text-lg font-bold shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:bg-gray-50">
                🚀 Start Reading Now
              </Button>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}
