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

export default function BusinessPageClient() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const data: Blog[] = await client.fetch(
        `*[_type == "post" && "Business" in categories[]->title] | order(_createdAt desc){
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
      {/* SEO-Optimized Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Business <span className="text-[#178E79]">Insights & Strategy</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Discover cutting-edge business strategies, market analysis, and entrepreneurial insights. 
          Stay ahead of industry trends with our comprehensive business blog covering everything from 
          startup success stories to corporate leadership and digital transformation.
        </p>
      </div>

      {/* Business Categories Overview */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100">
          Explore Business Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Market Analysis</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Industry trends and market insights</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Financial Strategy</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Investment and financial planning</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Leadership</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Management and team building</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Innovation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Technology and business innovation</p>
          </div>
        </div>
      </div>

      {/* Featured Business Insights */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100">
          Latest Business Insights
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Why Business Strategy Matters in 2025
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                In today&apos;s rapidly evolving business landscape, having a solid strategy is more crucial than ever. 
                Companies that adapt quickly to market changes, leverage emerging technologies, and prioritize 
                customer experience are the ones that thrive. Our business blog provides actionable insights 
                to help you navigate these challenges and opportunities.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                From startup founders to corporate executives, our content covers essential topics including 
                digital transformation, sustainable business practices, competitive analysis, and growth strategies. 
                Stay informed with expert perspectives on the latest business trends and best practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Key Business Trends to Watch
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Artificial Intelligence and Automation in Business Operations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Sustainable Business Models and ESG Compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Remote Work and Hybrid Business Models</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Digital Marketing and Customer Experience Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Supply Chain Resilience and Risk Management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Business Blog Posts Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100">
          Featured Business Articles
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