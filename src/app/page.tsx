import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Publications from '@/components/sections/Publications';

/**
 * Home page component
 * Renders all sections of the portfolio in a logical order
 * Uses alternating backgrounds for visual separation
 */
export default function Home(): React.ReactElement {
  return (
    <>
      <Hero />
      <Experience />
      <Education />
      <Publications />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
} 