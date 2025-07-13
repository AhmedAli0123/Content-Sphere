"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

function ContactForm() {
  const [formStatus, setFormStatus] = useState<"success" | "error" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target as HTMLFormElement);

    const accessKey = process.env.NEXT_PUBLIC_WEB3_FORM_ACESS_KEY;
    formData.append("access_key", accessKey || "");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const apiUrl = process.env.NEXT_PUBLIC_WEB3_FORM_API_URL;
    if (!apiUrl) {
      throw new Error("Environment variable 'NEXT_PUBLIC_WEB3_FORM_API_URL' is not defined");
    }

    try {
      const response = await fetch(apiUrl, {
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
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {formStatus === "success" && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-3 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <p className="text-green-800 dark:text-green-200 font-medium text-sm">
              Thank you! Your message has been sent successfully.
            </p>
          </div>
        </div>
      )}
      
      {formStatus === "error" && (
        <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800 rounded-xl p-3 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-4 h-4 text-white" />
            </div>
            <p className="text-red-800 dark:text-red-200 font-medium text-sm">
              Something went wrong. Please try again.
            </p>
          </div>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
              placeholder="Enter your first name"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        
        <div className="space-y-1">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="space-y-1">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Message *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500 resize-none"
            placeholder="Tell us about your inquiry, collaboration idea, or any questions you have..."
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-green-600 to-purple-600 hover:from-green-700 hover:to-purple-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </div>
          )}
        </Button>
        
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          * Required fields. We respect your privacy and will never share your information.
        </p>
      </form>
    </>
  );
}

export default ContactForm; 