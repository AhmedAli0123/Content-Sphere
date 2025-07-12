import React from "react";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { PortableText, PortableTextComponents } from "@portabletext/react"; 
import { urlFor } from "@/sanity/lib/image"; // Import Sanity image helper
import CommentSection from "./component/CommentSection";
import RelatedPosts from "./component/RelatedPost";
import SkeletonLoader from "@/components/SkeletonLoader";
import { Metadata } from "next";

// Define a custom component for handling images inside PortableText
const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="my-5">
          <Image
            src={urlFor(value).url()} // Use Sanity's URL builder
            alt={value.alt || "Blog image"}
            width={800} 
            height={500} 
            className="w-full h-auto rounded-lg"
          />
        </div>
      );
    },
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      title,
      body
    }
  `;
  
  const post = await client.fetch(query, { slug });
  
  return {
    title: post?.title || 'Blog Post',
    description: post?.body ? post.body[0]?.children?.[0]?.text?.slice(0, 160) || 'Learn more about Content Sphere, the blog that explores the latest trends in business, technology, fashion, and AI.' : 'Learn more about Content Sphere, the blog that explores the latest trends in business, technology, fashion, and AI.',
    authors: [{ name: post.author?.name || 'Content Sphere Team' }],
    openGraph: {
      title: post?.title || 'Blog Post',
      description: post?.body ? post.body[0]?.children?.[0]?.text?.slice(0, 160) || 'Learn more about Content Sphere, the blog that explores the latest trends in business, technology, fashion, and AI.' : 'Learn more about Content Sphere, the blog that explores the latest trends in business, technology, fashion, and AI.',
      images: [
        {
          url: post?.mainImage?.asset.url || 'https://content-sphere-one.vercel.app/og-home.jpg',
          width: 1200,
          height: 630,
          alt: post?.title || 'Blog Post',
        },
      ],
      type: 'article',
      url: `https://content-sphere-one.vercel.app/blog/${params.slug}`,
      siteName: 'Content Sphere',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.description,
      images: [post.image || 'https://content-sphere-one.vercel.app/default-og.png'],
    },
  };
}


async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
 // Define the query to fetch the post data
 const query = groq`
 *[_type == "post" && slug.current == $slug][0] {
  _id,
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
     name
   },
   categories[]->{
     title
   },
   "comments": *[_type == "comment" && post._ref == ^._id && approved == true]
 }
`;

  const post = await client.fetch(query, { slug });

  // If the post is not found, return a message
  if (!post) {
    return <div>Post not found!</div>;
  }
  if(!post){
    return <SkeletonLoader />
  }

  return (
    <section>
      <div className="max-w-3xl my-5 md:my-[100px] mx-auto p-6 rounded-lg shadow-lg transition-transform transform duration-300 dark:bg-gray-700 bg-gray-100">
        {/* Blog Title */}
        <h2 className="text-xl md:text-5xl font-bold text-gray-800 dark:text-slate-100 mb-4">
          {post?.title}
        </h2>

        {/* Blog Date */}
        <div className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-4">
          <span>
            Author: <span className="font-bold">{post.author?.name}</span> || {new Date(post.publishedAt).toLocaleDateString()}
          </span>
        </div>

        {/* Blog Image */}
        {post?.mainImage && (
          <Image
            src={post.mainImage?.asset.url}
            alt={post.mainImage?.alt || "Post image"}
            title={post.mainImage?.alt || "Post image"}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg mb-6"
          />
        )}

        {/* Blog Content */}
        <div className="prose dark:prose-dark dark:text-white">
          <PortableText value={post.body} 
          components={components}
           />
        </div>
      </div>

      <RelatedPosts categories={post.categories} currentPostId={post._id} />

      {/* Comment Section */}
      <h2 className="text-center text-2xl font-bold underline md:text-4xl m-[40px]">
        Comment Section
      </h2>
      <CommentSection  postId={post._id} />
    </section>
  );
}

export default PostPage;
