import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";


export const metadata: Metadata = {
  title: 'About Content Sphere - Digital Platform',
  description: 'Discover Content Sphere - a premier blogging platform covering fashion, business, technology, and AI trends. Learn about our mission since 2014.',
  keywords: ['About Content Sphere', 'Content Sphere About', 'Blogging Platform', 'Digital Content', 'Technology Blog', 'Business Blog', 'Fashion Blog', 'AI Blog', 'Content Creation'],
  authors: [{ name: 'Ahmed Ali' }],
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
  openGraph: {
    title: 'About Content Sphere - Digital Content Platform',
    description: 'Discover Content Sphere - a premier blogging platform covering fashion, business, technology, and AI trends since 2014.',
    url: 'https://content-sphere-one.vercel.app/about',
    siteName: 'Content Sphere',
    images: [
      {
        url: 'https://content-sphere-one.vercel.app/About.jpg',
        width: 1200,
        height: 630,
        alt: 'About Content Sphere - Digital Content Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Content Sphere - Leading Digital Content Platform',
    description: 'Discover Content Sphere - a premier blogging platform covering fashion, business, technology, and AI trends.',
    images: ['https://content-sphere-one.vercel.app/About.jpg'],
  },
  alternates: {
    canonical: 'https://content-sphere-one.vercel.app/about',
    languages: {
      'en': 'https://content-sphere-one.vercel.app/about',
      'en-US': 'https://content-sphere-one.vercel.app/about',
      'en-GB': 'https://content-sphere-one.vercel.app/about',
      'en-CA': 'https://content-sphere-one.vercel.app/about',
      'en-AU': 'https://content-sphere-one.vercel.app/about',
      'x-default': 'https://content-sphere-one.vercel.app/about',
    },
    
  },
};

const About: React.FC = () => {
  // Structured data for About page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Content Sphere",
    "description": "A premier digital content platform covering fashion, business, technology, and AI trends since 2014.",
    "url": "https://content-sphere-one.vercel.app",
    "logo": "https://content-sphere-one.vercel.app/logo.png",
    "foundingDate": "2014",
    "sameAs": [
      "https://twitter.com/contentsphere",
      "https://linkedin.com/company/contentsphere"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://content-sphere-one.vercel.app/contact"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Breadcrumbs items={[{ label: 'About Us' }]} />
      </div>
      {/* Hero Section with Background Effects */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-teal-400 to-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-[#178E79] to-[#0f6b5f] text-white shadow-lg transform hover:scale-105 transition-all duration-300">
              ✨ Leading Digital Content Since 2014
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-gray-900 via-[#178E79] to-[#0f6b5f] dark:from-white dark:via-[#178E79] dark:to-[#0f6b5f] bg-clip-text text-transparent leading-tight">
            About Content Sphere
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            A premier digital content platform that has been at the forefront of online publishing since 2014. 
            Our mission is to inform, inspire, and empower readers with cutting-edge insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/blog">
              <button className="px-8 py-4 bg-gradient-to-r from-[#178E79] to-[#0f6b5f] text-white rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                🚀 Explore Our Content
              </button>
            </Link>
            <button className="px-8 py-4 border-2 border-[#178E79] text-[#178E79] dark:text-[#178E79] rounded-xl text-lg font-semibold hover:bg-[#178E79] hover:text-white transition-all duration-300">
              📖 Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#178E79] to-[#0f6b5f] rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <Image
                width={600}
                height={600}
                src="/about-hero.svg" 
                title="Content Sphere - Digital Content Platform Illustration"
                alt="Content Sphere - Digital Content Platform Illustration"
                className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-[#178E79] dark:from-white dark:to-[#178E79] bg-clip-text text-transparent">
                  Our Story & Mission
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#178E79] to-[#0f6b5f] rounded-full mb-8"></div>
              </div>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Founded in 2014, Content Sphere emerged from a vision to create a comprehensive platform where knowledge meets innovation. Our team of industry experts, experienced developers, business strategists, and fashion professionals work collaboratively to deliver content that not only informs but also inspires action and growth.
                </p>
                <p>
                  We understand that in today&apos;s fast-paced world, quality information is the key to success. Our commitment to excellence has made us a trusted source for professionals, entrepreneurs, developers, and anyone passionate about staying current with industry trends and technological advancements.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#178E79] to-[#0f6b5f] rounded-full flex items-center justify-center text-white font-bold">A</div>
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-[#178E79] rounded-full flex items-center justify-center text-white font-bold">T</div>
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">E</div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Expert Team</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Industry professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-[#178E79] dark:from-white dark:to-[#178E79] bg-clip-text text-transparent">
              What We Do at Content Sphere
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#178E79] to-[#0f6b5f] rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We create and curate high-quality content that empowers our community to grow and succeed
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-[#178E79] to-[#0f6b5f] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">✍️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Content Creation & Curation</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We create and curate high-quality content across multiple domains, ensuring that our readers receive the most relevant and up-to-date information. Our content strategy focuses on providing actionable insights, practical tutorials, and thought-provoking analysis.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                From in-depth technical tutorials to comprehensive business analysis, we cover topics that matter to today&apos;s digital professionals and enthusiasts.
              </p>
            </div>
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-[#178E79] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Community Building</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Beyond content creation, we foster a vibrant community of learners, professionals, and innovators. Our platform serves as a hub for knowledge exchange, networking, and collaborative learning.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We believe that the best learning happens through collaboration and shared experiences. Our community-driven approach ensures that diverse perspectives are represented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-[#178E79] dark:from-white dark:to-[#178E79] bg-clip-text text-transparent">
              Our Content Categories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#178E79] to-[#0f6b5f] rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our diverse range of content designed to inform, inspire, and empower
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Technology",
                description: "Cutting-edge insights on programming, AI, machine learning, and emerging technologies that shape our digital future.",
                icon: "⚡",
                gradient: "from-[#178E79] to-emerald-500"
              },
              {
                title: "Business",
                description: "Strategic business insights, entrepreneurship tips, market analysis, and growth strategies for modern professionals.",
                icon: "💼",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                title: "Fashion",
                description: "Latest fashion trends, style guides, sustainable practices, and lifestyle content for the modern individual.",
                icon: "👗",
                gradient: "from-teal-500 to-[#178E79]"
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${topic.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{topic.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {topic.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-[#178E79] dark:from-white dark:to-[#178E79] bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#178E79] to-[#0f6b5f] rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at Content Sphere
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "We maintain the highest standards of content quality, ensuring accuracy, relevance, and value in everything we publish.",
                icon: "🎯",
                gradient: "from-[#178E79] to-emerald-500"
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and methodologies, constantly evolving our content and platform to meet changing needs.",
                icon: "🚀",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                title: "Community",
                description: "We believe in the power of community and collaboration. Our platform fosters meaningful connections and knowledge sharing.",
                icon: "🤝",
                gradient: "from-teal-500 to-[#178E79]"
              },
            ].map((value) => (
              <div key={value.title} className="text-center group">
                <div className={`w-24 h-24 bg-gradient-to-r ${value.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#178E79] via-[#0f6b5f] to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Get in Touch with Content Sphere
          </h2>
          <div className="w-24 h-1 bg-white rounded-full mx-auto mb-8"></div>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            We value your feedback, suggestions, and collaboration opportunities. Whether you have questions about our content, want to contribute, or simply want to share your thoughts, we&apos;d love to hear from you.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <p className="text-lg mb-6">
              Reach out to us at{" "}
              <a href="mailto:ahmedsiridab1@gmail.com" className="font-semibold underline hover:text-green-200 transition-colors duration-300">
                ahmedsiridab1@gmail.com
              </a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/blog">
              <button className="px-8 py-4 bg-white text-[#178E79] rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                🚀 Explore Our Blog
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl text-lg font-semibold hover:bg-white hover:text-[#178E79] transition-all duration-300">
                📧 Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
