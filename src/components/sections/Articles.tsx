'use client';

import React, { useRef, useEffect, useState } from 'react';
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
    title: "Unbundling: ShareChat's Path to Sustainable Growth",
    description: "This piece explores ShareChat's monetization challenges and opportunities, highlighting microtransactions and category-specific unbundling as key strategies. It examines India's digital economy, user behavior in Tier 2/3 cities, and successful revenue models.",
    date: "March 2025",
    link: "https://www.canva.com/design/DAF1_slgyZ8/3TdHi_cuhCdmPLKIruxzcQ/view",
    tags: ["Monetization ", "Social Media", "Bharat", "Microtransactions"]
  },
  {
    title: "NBA Fan Engagement: OTT Features",
    description: "An analysis of how NBA can enhance fan engagement through OTT platforms, exploring innovative features, personalized content delivery, and interactive viewing experiences to drive deeper fan connection and monetization opportunities.",
    date: "January 2025",
    link: "https://docs.google.com/document/d/17dyViorIc35OBEWDRQu1ySGMNLWWUVWpWRVbsrw-SfY/edit?usp=sharing",
    tags: ["Sports Tech", "OTT", "Fan Engagement", "NBA"]
  },
  {
    title: "India's Second-hand and Unbranded Market",
    description: "A comprehensive analysis of India's growing second-hand and unbranded market, examining consumer behavior, market dynamics, sustainability impact, and business opportunities in this rapidly evolving sector.",
    date: "November 2024",
    link: "https://docs.google.com/document/d/1-4GZLwq9F7yP-5D_5AyPB4hk_ySmL8CV-r9sdz7tMnM/edit?usp=sharing",
    tags: ["Retail", "Sustainability", "Indian Market", "Consumer Behavior"]
  },
  {
    title: "MailChimp - SMS feature",
    description: "An analysis of MailChimp's SMS marketing capabilities, exploring integration possibilities, customer segmentation strategies, and best practices for effective SMS campaigns within the MailChimp ecosystem.",
    date: "September 2024",
    link: "https://docs.google.com/document/d/1BYYuHCWCR2bOFY3qUoQgoXw5JVqfL4M85VtKsNvCcPM/edit?usp=sharing",
    tags: ["Marketing", "SMS", "MailChimp", "Campaign Management"]
  },
  {
    title: "Should Fivetran introduce real-time ingestion?",
    description: "An analysis of real-time data ingestion capabilities in Fivetran, exploring the technical challenges, business value, competitive landscape, and potential implementation strategies for real-time ETL solutions.",
    date: "July 2024",
    link: "https://docs.google.com/document/d/1KM0v2wE4uXQw1b68G29dFZjJRguPJXIfpCv9ORhUhYU/edit?usp=sharing",
    tags: ["Data Engineering", "ETL", "Real-time Data", "Fivetran"]
  }
];

// Animation variants for container
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// Animation variants for individual items
const item = {
  hidden: { opacity: 0, x: 20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

/**
 * Blog section component
 * Displays a list of blog posts with animations and consistent styling
 */
const Articles = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current!.offsetLeft);
    setScrollLeft(scrollContainerRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section bg-[rgb(var(--bg-soft))]" id="articles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2 
          className="section-title text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Articles
        </motion.h2>

        <motion.div
          className="relative group"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Scroll buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-slate-600 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-slate-600 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Scroll container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing -mx-4 sm:mx-0"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onScroll={checkScroll}
          >
            <div className="flex gap-4 sm:gap-6 pb-6 px-4" style={{ width: 'max-content' }}>
              {articles.map((post, index) => (
                <motion.div 
                  key={index}
                  className="card w-[280px] sm:w-[350px] md:w-[400px] h-[300px] flex-none hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-blue-500/5 transition-all duration-300"
                  variants={item}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-grow space-y-3 sm:space-y-4">
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <h3 className="heading-3 line-clamp-2 min-h-[3rem] sm:min-h-[3.5rem]">
                          {post.title}
                        </h3>
                        <span className="body-small text-[rgb(var(--accent))]">
                          {post.date}
                        </span>
                      </div>
                      
                      <p className="body-regular line-clamp-3 min-h-[4rem] sm:min-h-[4.5rem]">
                        {post.description}
                      </p>
                    </div>
                    
                    <div className="mt-3 sm:mt-auto space-y-3 sm:space-y-4">
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {post.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="px-2 py-0.5 sm:py-1 text-xs bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link 
                        href={post.link}
                        className="link inline-flex items-center hover:gap-2 transition-all duration-300 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Article
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
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