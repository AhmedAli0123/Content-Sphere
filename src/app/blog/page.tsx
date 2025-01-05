"use client"

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button";

import { BlogPageType } from '@/type/BlogPage';





function BlogPage() {
  const blogs: BlogPageType[] = [
    {
        id: 1,
        title: 'Exploring Next.js: The Future of React Frameworks',
        description: 'Dive into the world of Next.js and discover how it enhances React applications with server-side rendering and static site generation.',
        image: '/nextjs.png',
        date: 'October 1, 2023',
    },
    {
        id: 2,
        title: 'Harnessing TypeScript for Safer JavaScript Development',
        description: 'Learn how TypeScript can improve your JavaScript code quality and maintainability, making your development process more efficient.',
        image: '/typescript.jpg',
        date: 'October 15, 2023',
    },
    {
        id: 3,
        title: 'Generative AI: Transforming Creativity and Innovation',
        description: 'Explore the impact of Generative AI on various industries and how it is reshaping the way we think about creativity and automation.',
        image: '/generativeAi.jpg',
        date: 'October 30, 2023',
    },
    {
        id: 4,
        title: 'Agentic AI: The Next Frontier in Artificial Intelligence',
        description: 'Uncover the potential of Agentic AI and its ability to make autonomous decisions, revolutionizing the way we interact with technology.',
        image: '/agentic.jpg',
        date: 'November 5, 2023',
    }
];

const router= useRouter()
function handleNavigate(id: number) {
  router.push(`/blog/${id}`);
}

  return (
    <div className='md:px-[135px] px-10 py-10  bg-slate-200 dark:bg-black dark:text-gray-200x'>
      <h2 className='text-2xl font-bold md:text-6xl mb-6 text-center pb-4'>Blogs</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {blogs.map((blog) => (
          <div key={blog.id} className=' bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105'>
            <Image src={blog.image} alt={blog.title} width={500} height={500} className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold dark:text-gray-200'>{blog.title}</h3>
              <p className='text-gray-600 my-3'>{blog.description}</p>
              <p className='text-gray-400 text-sm my-5'>{blog.date}</p>
              <Button variant="outline"
              className='transform transition-transform duration-300 hover:scale-105 '
              onClick={()=>handleNavigate(blog.id)}>Read More</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;