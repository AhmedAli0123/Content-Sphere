import React from "react";
import PopularCategory from "@/components/PopularCategory";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Content Sphere – Blogs on Business, Technology, Fashion & AI',
    description: 'Explore high-quality articles about business, technology, and latest technologies at Content Sphere.',
    keywords: ['business blog', 'fastest growing blog', 'technology blog', 'Ai Blogs', 'developer blogs', 'blogs' ,'insights'],
    authors: [{ name: 'Ahmed Ali' }],
    robots: 'index, follow',
    openGraph: {
      title: 'Content Sphere',
      description: 'Explore insightful business and fast growing blogs on technology, fashion and AI.',
      url: 'https://content-sphere-one.vercel.app',
      siteName: 'Content Sphere',
      images: [
        {
          url: 'https://content-sphere-one.vercel.app/og-home.jpg',
          width: 1200,
          height: 630,
          alt: 'Content Sphere Logo',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Content Sphere',
      description: 'Explore insightful programming and AI blogs.',
      images: ['https://content-sphere-one.vercel.app/og-home.jpg'],
    },
  };


function Page() {

  

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white dark:bg-black py-20 ">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Welcome to the Con<span className="text-[#178E79]">tent Sphere</span>
          </h2>
          <p className="text-lg mb-6">
            Discover the latest articles and insights on programming,
            technology, and more.Leading the Industry From Past 10 years with our expert and passionate Team works at Content Sphere
          </p>
          <Link href={"/blog"}>
          <Button
            className=" px-6 py-2 rounded-md text-lg font-semibold shadow transform transition-transform duration-300 hover:scale-105"
          >
            Explore Blogs
          </Button>
          </Link>
        </div>
      </section>

      {/* Popular Blogs Section */}
      <PopularCategory />
    </div>
  );
}

export default Page;
