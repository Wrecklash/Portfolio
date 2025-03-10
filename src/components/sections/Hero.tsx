'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import ScrollIndicator from '../ScrollIndicator';

/**
 * Hero section component
 * Main landing section with personal information and contact links
 */
const Hero = (): React.ReactElement => {
  return (
    <section className="section relative min-h-screen flex items-center">
      <div className="container">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            animate={{ opacity: 1 }}
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Abhilash Biradar
          </motion.h1>
          <motion.h2
            animate={{ opacity: 1 }}
            className="text-2xl text-[rgb(var(--secondary))] mb-6"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Product Manager
          </motion.h2>
          <motion.p
            animate={{ opacity: 1 }}
            className="text-lg mb-8"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Product Manager with 6 years of experience in building and scaling products.
            Passionate about creating user-centric solutions and driving product growth.
          </motion.p>

          <motion.div
            animate={{ opacity: 1 }}
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              className="flex items-center gap-2 text-[rgb(var(--secondary))] hover:text-[rgb(var(--accent))] transition-colors"
              href="mailto:biradar.abhilash@gmail.com"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
              biradar.abhilash@gmail.com
            </Link>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-[rgb(var(--accent))]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+917411705430"
                className="link"
              >
                +91 7411705430
              </a>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1 }}
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(var(--accent))] text-white rounded-lg hover:bg-[rgb(var(--accent))] hover:opacity-90 transition-opacity"
              download
              href="/resume.pdf"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
              Download Resume
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/abhilashbiradar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(var(--primary))] hover:text-[rgb(var(--accent))] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://discord.com/users/Wrecklash#6625"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(var(--primary))] hover:text-[rgb(var(--accent))] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
            <Link
              className="flex items-center gap-2 text-[rgb(var(--secondary))] hover:text-[rgb(var(--accent))] transition-colors"
              href="https://github.com/Wrecklash"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero; 