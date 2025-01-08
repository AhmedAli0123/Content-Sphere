"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";


type Blog = {
  _id: string;
  title: string;
  description: string;
  mainImage: {
    asset: {
      _ref: string;
      url: string
    };
  };
  publishedAt: string;
  slug: {
    current: string;
  };
};

function BlogPage() {
  // Fetch The Data From Sanity
  const [blogs, setBlogs] = React.useState<Blog[]>([]); //State to store blogs from sanity

  // Fetch The Data From Sanity Using UseEffect
  useEffect(() => {
    async function fetchBlogs() {
      const data = await client.fetch(
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
          slug
        }`
      );
      setBlogs(data);
    }
    fetchBlogs();
  }, []);

  // Handke Navigation
  const router = useRouter();
  function handleNavigate(slug: string) {
    router.push(`/blog/${slug}`);
  }

  return (
    <div className="md:px-[135px] px-10 py-10  bg-slate-200 dark:bg-black dark:text-gray-200x">
      <h2 className="text-2xl font-bold md:text-6xl mb-6 text-center pb-4">
        Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className=" bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={blog.mainImage?.asset.url || "/placeholder.png"}
              alt={blog.title}
              width={500}
              height={500}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold dark:text-gray-200">
                {blog.title}
              </h3>
              <p className="text-gray-600 my-3">{blog.description}</p>
              <p className="text-gray-400 text-sm my-5">
                {new Date(blog.publishedAt).toDateString()}
              </p>
              <Button
                variant="outline"
                className="transform transition-transform duration-300 hover:scale-105 "
                onClick={() => handleNavigate(blog.slug.current)}
              >
                Read More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
