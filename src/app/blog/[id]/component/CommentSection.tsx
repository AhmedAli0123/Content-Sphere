"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Comment {
  id: number;
  name: string;
  email: string;
  comment: string;
  date: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page refresh
    if (formData.name && formData.comment) {
      const newComment: Comment = {
        id: Date.now(), // Unique ID for each comment
        name: formData.name,
        email: formData.email,
        comment: formData.comment,
        date: new Date().toLocaleDateString(),
      };
      setComments([newComment, ...comments]); // Add new comment to the list
      setFormData({ name: "", email: "", comment: "" }); // Clear form data
    }
  };


  // For Notification 

  function handleNotification() {
    toast.success("Comment added successfully!", {
      position: "top-right",
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
    <div className="max-w-2xl my-[50px] mx-auto p-6 bg-gray-200 dark:bg-gray-700 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold">Comment</h2>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email (optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            rows={4}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your comment"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full "
          onClick={handleNotification}
        >
          Submit Comment
        </Button>
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

      {/* Comments List */}
      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm mb-4"
            >
              <FaUserCircle className="text-3xl text-gray-500" />
              <div>
                <h3 className="font-semibold text-gray-800">{comment.name}</h3>
                <p className="text-sm text-gray-500">{comment.date}</p>
                <p className="mt-2 text-gray-700">{comment.comment}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
