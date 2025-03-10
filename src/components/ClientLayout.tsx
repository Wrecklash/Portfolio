'use client';

import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps): React.ReactElement => {
  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply dark mode class if user prefers dark mode
    document.documentElement.classList.toggle('dark', prefersDarkMode);
    
    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      document.documentElement.classList.toggle('dark', e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-main))] dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="min-h-screen pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout; 