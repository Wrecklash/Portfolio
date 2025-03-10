'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  achievements: string[];
}

const educationData: Education[] = [
  {
    degree: "B.Tech Computer Science",
    institution: "B.V.B Engineering College",
    duration: "2014 - 2018",
    location: "Hubli",
    achievements: [
      "Elected secretary for the computer science department.",
      "Completed a 1-year data science internship at Express Analytics, Working on a customer segmentation and clustering project."
    ]
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

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              className="card"
              variants={item}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="heading-3">
                    {edu.degree}
                  </h3>
                  <p className="body-regular text-[rgb(var(--accent))]">
                    {edu.institution}
                  </p>
                </div>
                <div className="body-small mt-1 md:mt-0">
                  <span className="mr-3">{edu.duration}</span>
                  <span>{edu.location}</span>
                </div>
              </div>
              
              <ul className="bullet-list">
                {edu.achievements.map((achievement, i) => (
                  <li 
                    key={i}
                    className="bullet-item"
                  >
                    <span className="bullet-point" />
                    <span className="body-regular">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 