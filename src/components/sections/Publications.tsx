'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Publication {
  title: string;
  authors: string;
  conference: string;
  year: string;
  citations: string;
  link?: string;
}

const publications: Publication[] = [
  {
    title: "Detecting Depression in Social Media Posts Using Machine Learning",
    authors: "Part of the Communications in Computer and Information Science book series",
    conference: "Springer",
    year: "2019",
    citations: "24 Citations",
    link: "https://rd.springer.com/chapter/10.1007/978-981-13-9187-3_64"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

const Publications = () => {
  return (
    <section className="section bg-[rgb(var(--bg-soft))]" id="publications">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Publications
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {publications.map((pub, index) => (
            <motion.div 
              key={index}
              className="card"
              variants={item}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="heading-3">
                    {pub.title}
                  </h3>
                  <span className="body-small whitespace-nowrap">
                    {pub.year}
                  </span>
                </div>
                
                <p className="body-regular">
                  {pub.authors}
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="space-x-4">
                    <span className="body-regular text-[rgb(var(--accent))]">
                      {pub.conference}
                    </span>
                    <span className="body-small">
                      {pub.citations}
                    </span>
                  </div>
                  
                  {pub.link && (
                    <a 
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link inline-flex items-center"
                    >
                      View Publication
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Publications; 