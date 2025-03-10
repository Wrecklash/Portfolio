'use client';

import React from 'react';

/**
 * Contact section component
 * Displays contact information and social links
 */
const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="card">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-[rgb(var(--accent))]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:biradar.abhilash@gmail.com"
                className="link"
              >
                biradar.abhilash@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 