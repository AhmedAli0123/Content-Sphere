"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { client } from "@/sanity/lib/client";

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

function BlogPage() {
  // Initialize the state for the blogs
  const [blogs, setBlogs] = React.useState<Blog[]>([]);

  // Fetch the blog posts from Sanity
  useEffect(() => {
    async function fetchBlogs() {
      const data: Blog[] = await client.fetch(
        `*[_type=="post"]{
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
    }
    fetchBlogs();
  }, []);

  // Initialize the router for navigation to the blog post
  const router = useRouter();
  function handleNavigate(slug: string) {
    router.push(`/blog/${slug}`);
  }

  return (
    <div className="md:px-[135px] px-6 py-12 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 dark:from-black dark:via-gray-900 dark:to-black dark:text-gray-200">
      <h2 className="text-2xl font-bold md:text-5xl mb-8 text-center text-gray-800 dark:text-gray-100">
        Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Apply Map method to show all the blog */}
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Image
              src={blog.mainImage?.asset.url || "/placeholder.png"}
              alt={blog.title}
              width={500}
              height={500}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                {blog.title}
              </h3>
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
  );
}

export default BlogPage;
