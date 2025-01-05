"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    setEmail("");
    setPassword("");
  };

  // For Notification Package Of React Toastify
  function handleNotification() {
    toast.success("Login successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    

    
    <div
      className={`flex items-center justify-center min-h-screen dark:bg-black bg-white transition-opacity duration-500 'opacity-100' : 'opacity-0'}`}
    >
      <div className="w-full max-w-md p-8 space-y-3 dark:bg-gray-900 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-4xl md:text-2xl font-bold mb-5">
          Login Page
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-800 dark:text-slate-100">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-800 dark:text-slate-100">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>
          <Button type="submit" className="w-full" onClick={handleNotification}>Login</Button>
          <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition= {Bounce}
              />
        </form>
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
