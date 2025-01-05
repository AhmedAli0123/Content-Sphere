"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

function Page() {
  const [formStatus, setFormStatus] = useState<"success" | "error" | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "ae1f14d9-2356-418c-8f09-d125dd752ad9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const apiUrl = process.env.NEXT_PUBLIC_WEB3_FORM_API_URL;
    if (!apiUrl) {
      throw new Error("Environment variable 'NEXT_PUBLIC_WEB3_FORM_API_URL' is not defined");
  }

    try {
      const response = await fetch( apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus("success");
        (event.target as HTMLFormElement).reset(); // Clear the form on success
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setFormStatus("error");
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 my-5">
      <h1 className="text-2xl md:text-4xl font-bold my-10 text-center">
        Contact Us
      </h1>

      {formStatus === "success" && (
        <p className="text-green-600 text-center mb-4">
          Thank you! Your message has been sent successfully.
        </p>
      )}
      {formStatus === "error" && (
        <p className="text-red-600 text-center mb-4">
          Something went wrong. Please try again.
        </p>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium dark:text-gray-500 text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium dark:text-gray-500 text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium dark:text-gray-500 text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium dark:text-gray-500 text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows={4}
          />
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Page;
