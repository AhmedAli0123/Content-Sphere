"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

// Define the Blog type
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

function BlogPageClient() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const data: Blog[] = await client.fetch(
        `*[_type=="post"] | order(_createdAt desc){
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

  // Generate structured data for the blog listing
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Content Sphere Blog",
    "description": "Latest insights on technology, business strategies, fashion trends, and AI innovations from Content Sphere since 2014.",
    "url": "https://content-sphere-one.vercel.app/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Content Sphere",
      "url": "https://content-sphere-one.vercel.app"
    },
    "author": {
      "@type": "Person",
      "name": "Ahmed Ali"
    },
    "blogPost": blogs.map(blog => ({
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.description,
      "image": blog.mainImage?.asset.url,
      "datePublished": blog.publishedAt,
      "dateModified": blog.publishedAt,
      "author": {
        "@type": "Person",
        "name": "Ahmed Ali"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Content Sphere"
      },
      "url": `https://content-sphere-one.vercel.app/blog/${blog.slug.current}`,
      "articleSection": blog.categories?.map(cat => cat.title).join(", ")
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="md:px-[135px] px-6 py-12 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 dark:from-black dark:via-gray-900 dark:to-black dark:text-gray-200">
      {/* SEO-optimized header section */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold md:text-6xl mb-6 text-gray-800 dark:text-gray-100">
          Latest Blog Posts & Articles
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Discover expert insights on technology, business strategies, fashion trends, and AI innovations. 
          Stay ahead with our comprehensive analysis and tutorials from industry professionals.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link href="/blog/technology" className="px-6 py-2 bg-gradient-to-r from-[#178E79] to-[#0f6b5f] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300">
            Technology
          </Link>
          <Link href="/blog/business" className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300">
            Business
          </Link>
          <Link href="/blog/fashion" className="px-6 py-2 bg-gradient-to-r from-teal-500 to-[#178E79] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300">
            Fashion
          </Link>
        </div>
      </header>

      {/* SEO content section */}
      <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Expert Content Since 2014
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-300">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Technology & AI Insights
            </h3>
            <p className="leading-relaxed mb-4">
              Stay updated with the latest developments in artificial intelligence, machine learning, 
              programming tutorials, and emerging technologies. Our expert team provides in-depth 
              analysis and practical guides for developers and tech enthusiasts.
            </p>
            <p className="leading-relaxed">
              From beginner-friendly tutorials to advanced technical concepts, we cover everything 
              you need to know about the rapidly evolving tech landscape.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Business & Professional Growth
            </h3>
            <p className="leading-relaxed mb-4">
              Explore strategic business insights, entrepreneurship tips, market analysis, and 
              professional development strategies. Learn from industry experts and successful 
              entrepreneurs who share their knowledge and experiences.
            </p>
            <p className="leading-relaxed">
              Whether you&apos;re a startup founder, business professional, or aspiring entrepreneur, 
              our content provides actionable strategies for growth and success.
            </p>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-pulse"
                >
                  <div className="w-full h-52 bg-gray-300 dark:bg-gray-700"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-4"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
                    <div className="h-6 bg-teal-500 rounded w-20 mb-4"></div>
                    <div className="h-10 bg-teal-600 rounded w-full"></div>
                  </div>
                </div>
              ))
          : blogs.map((blog) => (
              <article
                key={blog._id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <Image
                  src={blog.mainImage?.asset.url || "/placeholder.png"}
                  alt={`${blog.title} - Content Sphere Blog`}
                  title={blog.title}
                  width={500}
                  height={500}
                  className="w-full h-52 object-cover"
                  itemProp="image"
                />
                <div className="p-6">
                  <meta itemProp="datePublished" content={blog.publishedAt} />
                  <meta itemProp="dateModified" content={blog.publishedAt} />
                  <meta itemProp="author" content="Ahmed Ali" />
                  <meta itemProp="publisher" content="Content Sphere" />
                  
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3" itemProp="headline">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3" itemProp="description">
                    {blog.description}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                    Published: {new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <div className="text-sm text-white bg-gradient-to-r from-teal-500 to-green-600 px-3 py-1 rounded-lg inline-block mb-4">
                    {blog.categories?.map((category, index) => (
                      <span key={index} itemProp="articleSection">
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
              </article>
            ))}
      </div>

      
      </div>
    </>
  );
}

export default BlogPageClient; 