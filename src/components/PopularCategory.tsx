


import Image from "next/image";
import Link from "next/link";


const popularBlogs = [
  {
    id: 1,
    title: "Fashion",
    image: "/fashion.jpg",
    date: "October 1, 2023",
    path:"/blog/fashion"
  },
  {
    id: 2,
    title: "Technology",
    image: "/tech.jpg",
    date: "October 15, 2023",
    path: "/blog/technology",
  },

  {
    id: 4,
    title: "Business",
    image: "/Business2.jpg",
    date: "November 5, 2023",
    path: "/blog/business",
  },
];

export default function PopularCategory() {
 

  return (
    <section className="py-10 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Popu<span className="text-[#178E79]">lar Categories</span></h2>
        <div className="flex flex-col md:flex-row justify-between gap-5 ">
          {popularBlogs.map((blog) => (
           <div 
           key={blog.id}
           className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           
             <Image className="rounded-t-lg" width={400} height={200} src={blog.image} alt={blog.title} />
           
           <div className="p-5">
             <Link href={blog?.path}>
               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 {blog.title}
               </h5>
             </Link>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in
               reverse chronological order.
             </p>
             <Link
              href={blog?.path}
               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#178E79] rounded-lg hover:bg-[#104e43] "
             >
               Read more
               <svg
                 className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                 aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 14 10"
               >
                 <path
                   stroke="currentColor"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M1 5h12m0 0L9 1m4 4L9 9"
                 />
               </svg>
             </Link>
           </div>
         </div>
         
          ))}
        </div>
      </div>
    </section>
  );
}
