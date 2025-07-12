import Image from "next/image";
import Link from "next/link";

interface PopularBlog {
  id: number;
  title: string;
  desc: string;
  image: string;
  date: string;
  path: string;
}


const popularBlogs: PopularBlog[] = [
  {
    id: 1,
    title: "Fashion",
    desc:"Step into the world of style and trends with our fashion insights. From timeless classics to the latest runway inspirations, discover what defines modern elegance. Fashion begins here, one blog at a time!",
    image: "/fashion.jpg",
    date: "October 1, 2023",
    path:"/blog/fashion"
  },
  {
    id: 2,
    title: "Technology",
    desc:"Explore the cutting-edge world of technology with insights on AI, quantum computing, Web3, and more. Stay ahead with the latest innovations and trends shaping our future. Technology redefined, one blog at a time!",
    image: "/technology.jpg",
    date: "October 15, 2023",
    path: "/blog/technology",
  },

  {
    id: 4,
    title: "Business",
    desc:"Unlock the secrets to success with our business blogs. From entrepreneurship to market trends, gain insights that drive innovation and growth. Your journey to business excellence starts here!",
    image: "/Business2.jpg",
    date: "November 5, 2023",
    path: "/blog/business",
  },
];

export default function PopularCategory() {
 

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-5 ">
          {popularBlogs.map((blog) => (
           <div 
           key={blog.id}
           className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           
             <Image className="rounded-t-lg" width={400} height={200} src={blog.image} alt={blog.title} title={blog.title} />
           
           <div className="p-5">
             <Link href={blog?.path}>
               <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 {blog.title}
               </h3>
             </Link>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {blog?.desc}
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
