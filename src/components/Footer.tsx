import Link from 'next/link';
import React from 'react'

import { FaFacebook, FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 flex justify-center md:justify-start md:mt-[5px]">
                        <h2 className='text-4xl font-bold'>Ahmed Blog</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="https://nextjs.org/" className="hover:underline">Next Js</Link>
                                </li>
                                <li>
                                    <Link href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="https://github.com/AhmedAli0123" className="hover:underline">Github</Link>
                                </li>
                                <li>
                                    <Link href="" className="hover:underline">Discord</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">

                        {/* Social Media Icons */}
                        <Link href="https://www.facebook.com/profile.php?id=100080215097122" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                         <FaFacebook className='text-2xl' />
                        </Link>

                
                        <Link href="https://github.com/AhmedAli0123" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <FaGithub className='text-2xl'/>
                        </Link>

                        <Link  href="https://www.linkedin.com/in/ahmed-ali-160b2a313/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <IoLogoLinkedin className='text-2xl' />
                        </Link>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;