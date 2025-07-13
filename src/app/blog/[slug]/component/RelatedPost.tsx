import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

interface RelatedPostsProps {
  categories: { title: string }[];
  currentPostId: string;
}
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

async function RelatedPosts({ categories, currentPostId }: RelatedPostsProps) {
  if (!categories || categories.length === 0) return null;

  const categoryTitle = categories[0].title; // Get the first category

  const query = groq`
    *[_type == "post" && categories[]->title match $categoryTitle && _id != $currentPostId] | order(publishedAt desc)[0..3] {
      _id,
      title,
      publishedAt,
      slug,
      mainImage {
        asset -> { url }
      },
        categories[]->{
      title
    }
    }
  `;

  const relatedPosts = await client.fetch(query, { categoryTitle, currentPostId });

  if (relatedPosts.length === 0) return null;

  return (
    <div className="md:px-[135px] px-6 py-12 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 dark:from-black dark:via-gray-900 dark:to-black dark:text-gray-200">
      <h2 className="text-2xl font-bold md:text-5xl mb-8 text-center text-gray-800 dark:text-gray-100">
        Related Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedPosts.map((blog:Blog) => (
          <Link key={blog._id} href={`/blog/${blog.slug.current}`}>
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
                {blog.categories?.map((category, index:number) => (
                  <span key={index}>
                    {category.title}
                    {index < blog.categories.length - 1 && ", "}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${blog.slug.current}`}>
              <button
                className="block w-full text-center py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transform transition hover:scale-105"
              >
                Read More
              </button>
              </Link>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedPosts;
