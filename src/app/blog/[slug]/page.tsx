import React from "react";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react"; 

import CommentSection from "./component/CommentSection";

async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params; // Extract slug from the params object.

  // Define the query to fetch the post data
  const query = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    body,
    publishedAt,
    author->{
      name // Fetch the author's name
    },
    categories[]->{
      title
    }
  }
`;

  const post = await client.fetch(query, { slug });

  // If the post is not found, return a message
  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <section>
      <div className="max-w-3xl my-5 md:my-[100px] mx-auto p-6 rounded-lg shadow-lg transition-transform transform  duration-300 dark:bg-gray-700 bg-gray-100">
        {/* Blog Title */}
        <h2 className="text-xl md:text-5xl font-bold text-gray-800 dark:text-slate-100 mb-4">
          {post?.title}
        </h2>

        {/* Blog Date */}
        <div className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-4">
        <span>Author: <span className="font-bold ">{post.author?.name} </span>  || {new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>

        {/* Blog Image */}
        {post?.mainImage && (
          <Image
            src={post.mainImage?.asset.url}
            alt={post.mainImage?.alt || "Post image"}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg mb-6"
          />
        )}

        {/* Blog Content */}
        <div className="prose dark:prose-dark dark:text-white">
        <PortableText value={post.body} />
        </div>
      </div>

      <h2 className="text-center text-2xl font-bold underline md:text-4xl">
        Comment Section
      </h2>
      <CommentSection />
    </section>
  );
}

export default PostPage;
