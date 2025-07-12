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

export default function TechnologyPageClient() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const data: Blog[] = await client.fetch(
        `*[_type == "post" && "Technology" in categories[]->title] | order(_createdAt desc){
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
          Tech<span className="text-[#178E79]">nology Blogs</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Discover the latest insights, trends, and innovations in the world of technology. 
          From artificial intelligence and machine learning to software development and emerging tech, 
          our comprehensive technology blog keeps you informed and ahead of the curve.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Why Read Technology Blogs?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#178E79]">
                Stay Updated with Tech Trends
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Technology evolves rapidly, and staying informed is crucial for professionals, 
                entrepreneurs, and tech enthusiasts. Our technology blogs provide in-depth analysis 
                of the latest developments, helping you understand emerging technologies and their impact.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#178E79]">
                Expert Insights & Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our technology content is written by industry experts and experienced developers 
                who share practical knowledge, best practices, and real-world applications. 
                Learn from professionals who are actively working in the field.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Categories Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Explore Technology Topics
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Artificial Intelligence
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore AI advancements, machine learning algorithms, neural networks, and their applications in various industries.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Software Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Learn about programming languages, frameworks, development methodologies, and software engineering best practices.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Emerging Technologies
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Discover cutting-edge technologies like blockchain, IoT, quantum computing, and their potential impact on the future.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Content Section */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-[#178E79] to-teal-600 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">
            Latest Technology Insights
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Dive into our curated collection of technology articles covering the most relevant topics 
            in today's digital landscape. From beginner-friendly guides to advanced technical deep-dives, 
            we have content for every level of expertise.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">For Beginners</h3>
              <p className="opacity-90">
                Start your tech journey with our beginner-friendly articles that explain complex concepts 
                in simple terms.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">For Professionals</h3>
              <p className="opacity-90">
                Advanced tutorials, industry insights, and technical deep-dives for experienced developers 
                and tech professionals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Latest Technology Articles
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