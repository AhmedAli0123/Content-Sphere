

import Link from "next/link";

import { ModeToggle } from "./Theme-btn"; // Import the ModeToggle component

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
 

  return (
    <nav className="p-5 md:px-[135px] md:py-5 bg-background/50 sticky top-0 border-b backdrop-blur z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold" >
          <Link
          
            href="/"
            className="hover:font-bold text-2xl hover:text-primary font-bold transition-all duration-300 relative group text-gray-900 dark:text-gray-100"
          >
            <span  className="absolute left-0 bottom-0 h-0.5 w-full bg-primary transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 dark:bg-gray-400"></span>
            Con<span className="text-[#178E79]">tent Sphere</span>
          </Link>
        </div>
        <div className="hidden lg:flex space-x-4 items-center">
          <Link
            href="/"
            className="font-medium transition-all duration-300 relative group text-gray-900 dark:text-gray-100 hover:font-bold"
          >
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-primary transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 dark:bg-gray-400"></span>
            Home
          </Link>
          <Link
            href="/about"
            className="font-medium transition-all duration-300 relative group text-gray-900 dark:text-gray-100 hover:font-bold"
          >
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-primary transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 dark:bg-gray-400"></span>
            About
          </Link>
          <Link
            href="/blog/fashion"
            className="font-medium transition-all duration-300 relative group text-gray-900 dark:text-gray-100 hover:font-bold"
          >
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-primary transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 dark:bg-gray-400"></span>
            Fashion
          </Link>
          <Link
            href="/blog/technology"
            className="font-medium transition-all duration-300 relative group text-gray-900 dark:text-gray-100 hover:font-bold"
          >
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-primary transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 dark:bg-gray-400"></span>
            Technology
          </Link>
          <Link
            href="/blog/business"
            className="font-medium transition-all duration-300 relative group text-gray-900 dark:text-gray-100 hover:font-bold"
          >
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-primary transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 dark:bg-gray-400"></span>
            Business
          </Link>
          <Link
            href="/blog"
            className="font-medium transition-all duration-300 relative group text-gray-900 dark:text-gray-100 hover:font-bold"
          >
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-primary transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 dark:bg-gray-400"></span>
            Blog
          </Link>
          <Link
            href="/contact"
            className="font-medium transition-all duration-300 relative group text-gray-900 dark:text-gray-100 hover:font-bold"
          >
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-primary transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 dark:bg-gray-400"></span>
            Contact
          </Link>

          <div className="flex gap-6 items-center">
            <ModeToggle />
          </div>
        </div>

        <div className="flex gap-3 lg:hidden">
          <div className="flex gap-6 items-center">
            <ModeToggle />
          </div>
          <Sheet>
            <SheetTrigger>
              <div className="focus:outline-none cursor-pointer">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                <span  className="absolute left-0 bottom-0 h-0.5 w-full bg-primary transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 dark:bg-gray-400"></span>
                Con<span className="text-[#178E79]">tent Sphere</span>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col  gap-4 items-center mt-5">
                    <Link href="/" className="">
                      Home
                    </Link>
                    <Link href="/about" className="">
                      About
                    </Link>
                    <Link href="/blog/fashion" className="">
                      Fashion
                    </Link>
                    <Link href="/blog/technology" className="">
                      Technolgy
                    </Link>
                    <Link href="/blog/business" className="">
                      Business
                    </Link>
                    <Link href="/blog" className="">
                      All Blogs
                    </Link>
                    <Link href="/contact" className="">
                      Contact
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
