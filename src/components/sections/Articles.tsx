'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Interface for blog post data structure
 */
interface ArticlePost {
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
const articles: ArticlePost[] = [
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
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 }
};

/**
 * Blog section component
 * Displays a list of blog posts with animations and consistent styling
 */
const Articles = () => {
  return (
    <section className="section bg-[rgb(var(--bg-soft))]" id="articles">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Articles
        </motion.h2>

        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
            <div className="flex space-x-6" style={{ minWidth: 'max-content' }}>
              {articles.map((post, index) => (
                <motion.div 
                  key={index}
                  className="card w-[350px] flex-shrink-0"
                  variants={item}
                >
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="heading-3">
                        {post.title}
                      </h3>
                      <span className="body-small text-[rgb(var(--accent))]">
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
                          className="px-2 py-1 text-sm bg-[rgb(var(--bg-soft))] text-[rgb(var(--accent))] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link 
                      href={post.link}
                      className="link inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Article
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles; 