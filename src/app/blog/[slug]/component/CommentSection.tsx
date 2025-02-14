"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { FaUser } from "react-icons/fa";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";



const CommentSection = ({ postId }:any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const query = `*[_type == "comment" && post._ref == $postId && approved == true] | order(_createdAt desc)`;
      const approvedComments = await client.fetch(query, { postId });
      setComments(approvedComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment = {
      _type: "comment",
      name,
      email,
      comment,
      post: { _type: "reference", _ref: postId },
      approved: false,
    };

    try {
      await client.create(newComment);
      setSubmitted(true);
      setName("");
      setEmail("");
      setComment("");

      // Success Alert
      Swal.fire({
        title: "Comment Submitted!",
        text: "Your comment has been sent for approval.",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });

    } catch (err) {
      console.error("Error submitting comment:", err);

      // Error Alert
      Swal.fire({
        title: "Error!",
        text: "Failed to submit your comment. Please try again later.",
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="mt-8 p-6 rounded-lg shadow-lg transition duration-300">
      {/* COMMENTS SECTION */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          Comments
        </h3>
        {comments.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No approved comments yet.
          </p>
        ) : (
          comments.map((comment: commentSection) => (
            <div
              key={comment._id}
              className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-md mb-4 flex items-start gap-4 transition duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full">
                <FaUser className="text-gray-700 dark:text-gray-300 text-xl" />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-gray-50">
                  {comment.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {format(new Date(comment._createdAt), "PPpp")}
                </p>
                <p className="mt-2 text-gray-800 dark:text-gray-100 font-semibold">
                  {comment.comment}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* COMMENT FORM */}
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-lg shadow-md transition duration-300"
      >
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Leave a Comment
        </h3>
        <div className="grid gap-4">
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 shadow-sm p-2 focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 shadow-sm p-2 focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Comment</span>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 shadow-sm p-2 focus:ring-2 focus:ring-blue-500 transition"
              rows={3}
              required
            ></textarea>
          </label>
        </div>

        <Button type="submit" className="mt-4 w-full px-4 py-2 rounded-md">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CommentSection;
