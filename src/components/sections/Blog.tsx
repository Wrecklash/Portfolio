'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Interface for blog post data structure
 */
interface BlogPost {
  title: string;
  description: string;
  date: string;
  link: string;
  tags: string[];
}

/**
 * Sample blog posts data
 * Replace with actual blog posts or fetch from an API
 */
const blogPosts: BlogPost[] = [
  {
    title: "Should Fivetran introduce real-time ingestion?",
    description: "An analysis of real-time data ingestion capabilities in Fivetran, exploring the technical challenges, business value, and potential implementation strategies.",
    date: "March 2024",
    link: "https://docs.google.com/document/d/1KM0v2wE4uXQw1b68G29dFZjJRguPJXIfpCv9ORhUhYU/edit?usp=sharing",
    tags: ["Data Engineering", "ETL", "Real-time Data", "Fivetran"]
  },
  {
    title: "Building Data-Driven Products: A Product Manager's Guide",
    description: "A comprehensive guide on how to leverage data analytics in product development and decision making.",
    date: "February 2024",
    link: "#",
    tags: ["Product Management", "Data Analytics", "Decision Making"]
  },
  {
    title: "The Evolution of Social Media Recommendation Systems",
    description: "An in-depth look at how recommendation algorithms have evolved in social media platforms.",
    date: "January 2024",
    link: "#",
    tags: ["Machine Learning", "Social Media", "Recommendations"]
  }
];

// Animation variants for container
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Animation variants for individual items
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

/**
 * Blog section component
 * Displays a list of blog posts with animations and consistent styling
 */
const Blog = () => {
  return (
    <section className="section bg-[rgb(var(--bg-soft))]" id="blog">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blog
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {blogPosts.map((post, index) => (
            <motion.div 
              key={index}
              className="card"
              variants={item}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="heading-3">
                    {post.title}
                  </h3>
                  <span className="body-small whitespace-nowrap">
                    {post.date}
                  </span>
                </div>
                
                <p className="body-regular">
                  {post.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  href={post.link}
                  className="link inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 