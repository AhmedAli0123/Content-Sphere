import { Metadata } from "next";
import ContactForm from "./ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Content Sphere — Have questions or collaboration ideas? Get in touch with the Content Sphere team through our contact page. We\'d love to hear from you.',
  keywords: ['Contact Content Sphere', 'Content Sphere Contact', 'Contact Page', 'Blog Contact', 'Contact Page', 'Contact Content Sphere'],
};

function Page() {
  return (
    <>
    {/* Breadcrumbs */}
    <div className="max-w-6xl mx-auto px-6 pt-8">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />
      </div>
      <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to collaborate? We&apos;d love to hear from you. 
            Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
    <div className="max-w-md mx-auto p-4 my-5">
      <ContactForm />
    </div>
    </>
  );
}

export default Page;
