'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

const projects: ProjectItem[] = [
  {
    title: "STAD - Gaming Community Platform",
    description: "A social platform for Gamers to connect and discover tournaments. Built with React Native and Node.js, featuring real-time tournament updates and community features.",
    technologies: ["React Native", "Node.js", "MongoDB", "WebSocket", "AWS"],
    link: "#"
  },
  {
    title: "ZET Analytics Pipeline",
    description: "Developed a comprehensive ETL pipeline for processing customer data, enabling data-driven decision making and improved product recommendations.",
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "AWS Redshift", "Tableau"],
    link: "#"
  },
  {
    title: "Sharechat Content Discovery",
    description: "Redesigned the content discovery system using machine learning algorithms to improve content relevance and user engagement.",
    technologies: ["Python", "TensorFlow", "Kubernetes", "Redis", "ElasticSearch"],
    link: "#"
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

const Projects = () => {
  return (
    <section className="section bg-[rgb(var(--bg-soft))]" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card hover:border-[rgb(var(--accent))]"
              variants={item}
            >
              <div className="space-y-4">
                <h3 className="heading-3">
                  {project.title}
                </h3>
                <p className="body-regular">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-[rgb(var(--bg-soft))] text-[rgb(var(--accent))] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className="link inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 