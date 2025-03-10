'use client';

import React from 'react';
import Image from 'next/image';

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

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group hover:border-primary-blue"
            >
              {project.image && (
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-light-blue text-primary-blue dark:bg-gray-800 dark:text-blue-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="text-primary-blue hover:text-secondary-blue dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 