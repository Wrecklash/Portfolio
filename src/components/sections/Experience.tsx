'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Co-Founder",
    company: "STAD",
    duration: "Nov 2022 - Mar 2024",
    location: "Bangalore",
    achievements: [
      "Built a mobile application for over 5K esports players to discover gamers and tournaments.",
      "Cultivated a thriving Discord community, achieving a membership of 6k+ individuals, while concurrently expanding additional social media channels with a combined following of 16K+ followers.",
      "Collaborated with top esports teams in India, such as S8ul and GodLike, to live-stream tournaments on YouTube, achieving 265K+ impressions and gaining over 4K subscribers."
    ]
  },
  {
    title: "Product Manager (Data & Experience)",
    company: "ZET",
    duration: "Nov 2021 - Oct 2022",
    location: "Bangalore",
    achievements: [
      "Founding PM at ZET, Series A Fintech startup backed by General Catalyst, Nexus, Sequoia, and Waterbridge.",
      "Built a scalable ETL/data pipeline to store customer data points, with the goal of scaling the business and enabling future strategic initiatives.",
      "Led partnerships with multiple credit bureaus and FIPs to build a rule engine that helped ZET agents sell appropriate products to their customers, resulting in a 16% reduction in rejection rate and a 20% increase in agent activation rate.",
      "Enhanced user experience by redesigning the signup process into a phased approach, resulting in a 12% increase in the install-to-signup conversion rate"
    ]
  },
  {
    title: "Associate Product Manager (Discovery)",
    company: "Sharechat",
    duration: "Mar 2020 - Nov 2021",
    location: "Bangalore",
    achievements: [
      "Leading product discovery for India's biggest vernacular social media with 160 Mn MAUS.",
      "Revamped the UI of the content discovery section based on user category consumption, which resulted in a 1% increase in overall app retention and a 3% increase in overall topics consumption.",
      "Built a new approval pipeline for trending topics, which resulted in a 50% increase in trends adoption (5% of DAU) and a 12% increase in trending section retention.",
      "Worked with external content partners to speed up content inflow and tweak the feed logic, which resulted in a 9% increase in time spent on trending topics.",
      "Documented the guidelines for A/B testing to ensure accurate experimentation across product verticals."
    ]
  },
  {
    title: "Data Scientist",
    company: "Simpl",
    duration: "Sept 2018 - Feb 2020",
    location: "Bangalore",
    achievements: [
      "Series B-funded BNPL(Buy Now, Pay Later) fintech startup.",
      "Analyzed growth prospects to ensure timely collection of dues, which secured 90% collection within the first week after the credit period.",
      "Deployed a naïve Bayes classifier to group text messages received by devices into categories such as Credit, debit, and loan."
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

const Experience = () => {
  return (
    <section className="section bg-[rgb(var(--bg-soft))]" id="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="card"
              variants={item}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="heading-3">
                    {exp.title}
                  </h3>
                  <p className="body-regular text-[rgb(var(--accent))]">
                    {exp.company}
                  </p>
                </div>
                <div className="body-small mt-1 md:mt-0">
                  <span className="mr-3">{exp.duration}</span>
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <ul className="bullet-list">
                {exp.achievements.map((achievement, i) => (
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

export default Experience; 