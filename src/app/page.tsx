import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Publications from '@/components/sections/Publications';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';

/**
 * Home page component
 * Renders all sections of the portfolio in a logical order
 * Uses alternating backgrounds for visual separation
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Education />
      <Publications />
      <Blog />
      <Contact />
    </>
  );
} 