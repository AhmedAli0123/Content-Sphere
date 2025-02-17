// SkeletonLoader.js
import React from 'react';

function SkeletonLoader() {
  return (
    <section>
      <div className="max-w-3xl my-5 md:my-[100px] mx-auto p-6 rounded-lg shadow-lg transition-transform transform duration-300 dark:bg-gray-700 bg-gray-100 animate-pulse">
        {/* Skeleton Blog Title */}
        <div className="h-8 md:h-16 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
        
        {/* Skeleton Blog Date */}
        <div className="h-4 md:h-6 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
        
        {/* Skeleton Blog Image */}
        <div className="w-full h-64 bg-gray-300 dark:bg-gray-600 rounded-lg mb-6"></div>
        
        {/* Skeleton Blog Content */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div>

      <div className="text-center text-2xl font-bold underline md:text-4xl m-[40px] dark:bg-gray-700 bg-gray-100 animate-pulse">
        Comment Section
      </div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mx-8 md:mx-auto max-w-3xl"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mx-8 md:mx-auto max-w-3xl"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mx-8 md:mx-auto max-w-3xl"></div>
      </div>
    </section>
  );
}

export default SkeletonLoader;
