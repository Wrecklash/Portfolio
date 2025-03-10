import Articles from '@/components/sections/Articles';
import Contact from '@/components/sections/Contact';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
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
      <Articles />
      <Experience />
      <Education />
      <Publications />
      <Contact />
    </>
  );
} 