import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'About',
  description: 'About Content Sphere  - Discover the story behind Content Sphere — a dynamic blogging platform covering the latest in fashion, business trends, and emerging technologies. Learn about our mission to inform, inspire, and empower curious minds.',
  keywords: ['About Content Sphere', 'Content Sphere About', 'About Page', 'Blog About', 'About Page', 'About Content Sphere'],
};

const About: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-12 px-6 sm:px-10 lg:px-20">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          About This Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Welcome to my blog, where I explore the latest trends in programming,
          Generative AI, Agentic AI, and cutting-edge technologies. My goal is
          to share knowledge, spark curiosity, and empower developers to stay
          ahead in the rapidly evolving tech world.
        </p>
      </div>

      {/* Image and Intro Section */}
      <div className="flex flex-col lg:flex-row items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-5xl mx-auto px-5 py-5">
        <Image
          width={500}
          height={500}
          src="/About.jpg" 
          alt="Blog Visual"
          className="w-full lg:w-1/2 h-64 object-cover"
        />
        <div className="p-6 lg:p-12 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Why This Blog?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            As a developer passionate about exploring the potential of AI and
            modern programming practices, I created this blog to share insights,
            tutorials, and updates on groundbreaking technologies. Whether
            you&apos;re a beginner or an experienced developer, you&apos;ll find content
            here to fuel your learning journey.
          </p>
        </div>
      </div>

      {/* Topics Section */}
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Topics We Cover
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Technolgy",
            "Fashion",
            "Buisness",
          ].map((topic) => (
            <div
              key={topic}
              className="cursor-pointer bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:shadow-xl dark:hover:shadow-gray-700 transform transition-transform duration-300 hover:scale-105 transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                {topic}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg mt-12 p-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
          Stay Connected
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Have questions or suggestions? I’d love to hear from you! Reach out to me at{" "}
          <strong className="text-gray-800 dark:text-white transform transition-transform duration-300 hover:scale-105 hover:underline">
            <Link href="mailto:ahmedsiridab1@gamil.com"> 
            ahmedsiridab1@gamil.com
            </Link>
          </strong>{" "}
          or follow my blog for regular updates.
        </p>
      </div>
    </div>
  );
};

export default About;
