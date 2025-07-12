"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";

type Blog = {
  _id: string;
  title: string;
  description: string;
  mainImage: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  publishedAt: string;
  categories: { title: string }[];
  slug: {
    current: string;
  };
};

export default function FashionPageClient() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const data: Blog[] = await client.fetch(
        `*[_type == "post" && "Fashion" in categories[]->title] | order(_createdAt desc){
          _id,
          title,
          description,
          mainImage{
            asset->{
              _ref,
              url
            }
          },
          publishedAt,
          slug,
          categories[]->{
            title
          }
        }`
      );
      setBlogs(data);
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  const router = useRouter();
  function handleNavigate(slug: string) {
    router.push(`/blog/${slug}`);
  }

  return (
    <div className="md:px-[135px] px-6 py-12 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 dark:from-black dark:via-gray-900 dark:to-black dark:text-gray-200">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Fas<span className="text-[#178E79]">hion Blogs</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Discover the latest fashion trends, style tips, and industry insights from around the world. 
          From runway fashion to street style, sustainable fashion to luxury brands, 
          our comprehensive fashion blog keeps you stylish and informed.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Why Read Fashion Blogs?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#178E79]">
                Stay Ahead of Fashion Trends
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Fashion is constantly evolving with new trends emerging every season. Our fashion blogs 
                provide insights into upcoming trends, seasonal collections, and style predictions, 
                helping you stay ahead of the curve and express your unique style.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#178E79]">
                Expert Style Advice & Tips
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our fashion content is curated by style experts and fashion enthusiasts who share 
                practical styling tips, outfit ideas, and fashion advice for every occasion. 
                Learn how to build a versatile wardrobe and express your personality through fashion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fashion Categories Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Explore Fashion Topics
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Fashion Trends
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore the latest runway trends, seasonal collections, color palettes, and fashion forecasts 
              from top designers and fashion houses worldwide.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Style & Beauty
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Discover styling tips, beauty trends, makeup tutorials, and personal style advice 
              to help you create your signature look and boost your confidence.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Sustainable Fashion
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Learn about eco-friendly fashion, ethical brands, sustainable materials, and how to 
              build a conscious wardrobe that&apos;s both stylish and environmentally responsible.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Content Section */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-[#178E79] to-teal-600 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">
            Latest Fashion Insights
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Dive into our curated collection of fashion articles covering the most relevant topics 
            in today&apos;s style landscape. From trend analysis to personal styling guides, 
            we have content for every fashion enthusiast and style-conscious individual.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">For Fashion Enthusiasts</h3>
              <p className="opacity-90">
                Stay updated with the latest fashion news, runway reports, and industry insights 
                from the world of haute couture and ready-to-wear.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">For Style Seekers</h3>
              <p className="opacity-90">
                Practical styling advice, outfit inspiration, and tips for building a versatile 
                wardrobe that reflects your personal style and lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Latest Fashion Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-pulse"
                >
                  <div className="w-full h-52 bg-gray-300 dark:bg-gray-700"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-4"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-3"></div>
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
                    <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                  </div>
                </div>
              ))
            : blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Image
                    src={blog.mainImage?.asset.url || "/placeholder.png"}
                    alt={blog.title}
                    title={blog.title}
                    width={500}
                    height={500}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {blog.description}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                      {new Date(blog.publishedAt).toDateString()}
                    </p>
                    <div className="text-sm text-white bg-gradient-to-r from-teal-500 to-green-600 px-3 py-1 rounded-lg inline-block mb-4">
                      {blog.categories?.map((category, index) => (
                        <span key={index}>
                          {category.title}
                          {index < blog.categories.length - 1 && ", "}
                        </span>
                      ))}
                    </div>
                    <button
                      className="block w-full text-center py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transform transition hover:scale-105"
                      onClick={() => handleNavigate(blog.slug.current)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
} 