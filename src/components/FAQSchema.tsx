interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Predefined FAQ data for common pages
export const homePageFAQs: FAQItem[] = [
  {
    question: "What is Content Sphere?",
    answer: "Content Sphere is a comprehensive blog platform that covers business, technology, fashion, and AI topics. We provide expert insights, tutorials, and industry analysis to help readers stay informed and grow professionally."
  },
  {
    question: "How often do you publish new content?",
    answer: "We publish new content regularly, typically 2-3 times per week. Our team of expert writers and industry professionals ensures you get the latest insights and trends in your field of interest."
  },
  {
    question: "What topics does Content Sphere cover?",
    answer: "Content Sphere covers four main categories: Business insights and strategies, Technology trends and tutorials, Fashion and lifestyle content, and AI innovations and applications. Each category features expert analysis and practical advice."
  },
  {
    question: "Is Content Sphere free to read?",
    answer: "Yes, all our blog content is completely free to read. We believe in making valuable knowledge accessible to everyone who wants to learn and grow in their respective fields."
  },
  {
    question: "How can I stay updated with new content?",
    answer: "You can subscribe to our newsletter to receive updates about new articles, or follow us on social media platforms. We also recommend bookmarking our blog page and checking back regularly for fresh content."
  }
];

export const blogPageFAQs: FAQItem[] = [
  {
    question: "How do I find specific topics on the blog?",
    answer: "You can browse our blog by categories (Technology, Business, Fashion) or use the search functionality to find specific topics. Each category page contains curated content related to that field."
  },
  {
    question: "Can I comment on blog posts?",
    answer: "Yes, we encourage reader engagement! You can leave comments on blog posts to share your thoughts, ask questions, or contribute to the discussion. We moderate comments to ensure a positive community experience."
  },
  {
    question: "Are the blog posts written by experts?",
    answer: "Absolutely! All our blog posts are written by industry experts, professionals, and experienced writers who have deep knowledge in their respective fields. We maintain high editorial standards to ensure quality content."
  },
  {
    question: "How can I suggest topics for future blog posts?",
    answer: "We welcome topic suggestions from our readers! You can reach out to us through our contact page or leave a comment on any blog post. We regularly review reader feedback to plan our content calendar."
  }
]; 