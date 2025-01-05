import React from "react";
import Image from "next/image";

import { BlogDetail } from "@/Data/BlogDetail";
import CommentSection from "./component/CommentSection";

interface Paramas {
  params: {
    id: string;
  };
}

function page({ params }: Paramas) {
  const dataId = Number(params.id);

  // For Product Details
  const blog = BlogDetail.find((item) => item.id === dataId);
  return (
    <section> 
    <div className="max-w-3xl my-5 md:my-[100px] mx-auto p-6 rounded-lg shadow-lg transition-transform transform  duration-300 dark:bg-gray-900 bg-white">
      {/* Blog Title */}
      <h2 className="text-xl md:text-5xl font-bold text-gray-800 dark:text-slate-100 mb-4">
        {blog?.title}
      </h2>

      {/* Author and Date */}
      <div className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-4">
        <span>By {blog?.author}</span> | <span>{blog?.date}</span>
      </div>

      {/* Blog Image */}
      {blog?.image && (
        <Image
          src={blog?.image}
          alt={"ndas"}
          width={500}
          height={500}
          className="w-full h-auto rounded-lg mb-6"
        />
      )}

      {/* Blog Introduction */}
      {blog?.introduction && (
        <p className="text-sm md:text-lg text-gray-700 dark:text-gray-400 my-4">
          {blog.introduction}
        </p>
      )}

      {/* Blog Content */}
      <div
        className="prose prose-lg dark:prose-dark text-sm md:text-lg text-gray-700 dark:text-gray-400 my-7"
        dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
      ></div>

      {/* Conclusion */}
      <div className="mt-6">
        <h4 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-100 mb-4">
          Conclusion
        </h4>
        <p className="text-sm md:text-lg text-gray-700 dark:text-gray-400">
          {blog?.conclusion}
        </p>
      </div>

      {/* Tags */}
      {blog?.tags && (
        <div className="mt-6">
          <h5 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-slate-100 mb-2">
            Tags:
          </h5>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 cursor-pointer dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm px-3 py-1 rounded-lg transition duration-300 hover:bg-blue-200 hover:scale-110 dark:hover:bg-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      
    </div>
      <h2 className="text-center text-2xl font-bold underline md:text-4xl">Comment Section</h2>
        <CommentSection />
      </section>
  );
}

export default page;
