'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Footer component
 * Contains social links and copyright information
 */
const Footer = () => {
  return (
    <footer className="bg-[rgb(var(--bg-soft))] py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-[rgb(var(--secondary))]">
            © {new Date().getFullYear()} Abhilash Biradar. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link
              href="mailto:biradar.abhilash@gmail.com"
              className="contact-link"
            >
              <span className="sr-only">Email</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
            
            <Link
              href="tel:+917411705430"
              className="contact-link"
            >
              <span className="sr-only">Phone</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 