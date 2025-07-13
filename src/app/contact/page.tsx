import { Metadata } from "next";
import ContactForm from "./ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Mail, MessageSquare, Users, Clock, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with our Team',
  description: 'Contact Content Sphere — Have questions or collaboration ideas? Get in touch with our team. We&apos;d love to hear from you and respond as soon as possible.',
  keywords: ['Contact Content Sphere', 'Content Sphere Contact', 'Contact Page', 'Blog Contact', 'Contact Content Sphere'],
  alternates: {
    canonical: 'https://content-sphere-one.vercel.app/contact',
    languages: {
      'en': 'https://content-sphere-one.vercel.app/contact',
      'en-US': 'https://content-sphere-one.vercel.app/contact',
      'en-GB': 'https://content-sphere-one.vercel.app/contact',
      'en-CA': 'https://content-sphere-one.vercel.app/contact',
      'en-AU': 'https://content-sphere-one.vercel.app/contact',
      'x-default': 'https://content-sphere-one.vercel.app/contact',
    },
  },
};

function Page() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-purple-600 rounded-full mb-6">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-green-600 to-purple-600 bg-clip-text text-transparent dark:from-white dark:via-green-400 dark:to-purple-400 mb-6">
              Let&apos;s Connect
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have a question or want to collaborate? We&apos;d love to hear from you. 
              Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Information */}
          <div className="space-y-8">
            {/* Why Contact Section */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Why Contact Content Sphere?
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                At Content Sphere, we&apos;re passionate about creating engaging, informative content that resonates with our readers. Whether you&apos;re looking to collaborate on content projects, have questions about our articles, or want to share your thoughts, we value every interaction with our community.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Our team of content creators and digital marketing experts is here to help you navigate the ever-evolving landscape of content creation, SEO strategies, and digital engagement.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-green-300 dark:hover:border-green-600">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Content Collaboration
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Interested in guest posting, content partnerships, or collaborative projects? We&apos;re always open to working with talented writers, industry experts, and brands that share our passion for quality content.
                </p>
              </div>
              
              <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Questions & Feedback
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Have questions about our articles, suggestions for future content, or feedback on our website? We appreciate your input and are committed to continuously improving our content and user experience.
                </p>
              </div>
            </div>

            {/* What to Expect Section */}
            <div className="bg-gradient-to-br from-green-50 to-purple-100 dark:from-green-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-purple-700 rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  What to Expect
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                When you reach out to us, you can expect:
              </p>
              <div className="space-y-4">
                {[
                  "A response within 24-48 hours during business days",
                  "Personalized attention to your specific inquiry",
                  "Professional and friendly communication",
                  "Follow-up on any ongoing discussions or projects"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We&apos;d love to hear from you!
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Contact Info */}
      <div className="bg-gradient-to-r from-green-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Other Ways to Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Prefer a different approach? Here are other ways to reach us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Email Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Send us an email anytime
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Social Media
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with us on social platforms
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Community
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join our community discussions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
