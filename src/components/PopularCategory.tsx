"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";

const popularBlogs = [
  {
    id: 1,
    title: "Exploring Next.js: The Future of React Frameworks",
    image: "/fashion.jpg",
    date: "October 1, 2023",
  },
  {
    id: 2,
    title: "Harnessing TypeScript for Safer JavaScript Development",
    image: "/typescript.jpg",
    date: "October 15, 2023",
  },

  {
    id: 4,
    title: "Agentic AI: The Next Frontier in Artificial Intelligence",
    image: "/agentic.jpg",
    date: "November 5, 2023",
  },
];

export default function PopularCategory() {
  const router = useRouter();
  function handleReadMore(blogId: number) {
    router.push(`/blog/${blogId}`);
  }

  return (
    <section className="py-10 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Popu<span className="text-[#178E79]">lar Categories</span></h2>
        <div className="flex flex-col md:flex-row justify-between gap-5 ">
          {popularBlogs.map((blog) => (
            <div
              key={blog.id}
              className=" bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={500}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold dark:text-gray-200">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm my-5">{blog.date}</p>
                <Button
                  variant="outline"
                  className="transform transition-transform duration-300 hover:scale-105 "
                  onClick={() => handleReadMore(blog.id)}
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
