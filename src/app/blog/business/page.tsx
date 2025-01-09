import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client"; // Ensure this points to your sanity client
import Link from "next/link";
import Image from "next/image";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: { asset: { url: string } };
};

async function Businesspage() {
  // Query to fetch posts in the "Fashion" category
  const query = groq`
    *[_type == "post" && "Business" in categories[]->title] {
      _id,
      title,
      slug,
      mainImage {
        asset-> {
          url
        }
      }
    }
  `;

  // Fetch the data from Sanity
  const fashionPosts: Post[] = await client.fetch(query);

  if (fashionPosts.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">No Blogs Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Busi<span className="text-[#178E79]">ness Blogs</span></h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fashionPosts.map((post) => (
          <Link href={`/blog/${post.slug.current}`} key={post._id}>
             <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                width={500}
                height={500}
                src={post.mainImage.asset.url}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-75 transition"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  {post.title}
                </h3>

                
                <div className="text-sm text-white bg-gradient-to-r from-teal-500 to-green-600 px-3 py-1 rounded-lg inline-block mb-4">
                  Business
                </div>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="block w-full text-center py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transform transition hover:scale-105"
                >
                  Read More
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Businesspage;
