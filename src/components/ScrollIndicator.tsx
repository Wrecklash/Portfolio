'use client';

import { motion } from 'framer-motion';

/**
 * Animated scroll indicator component
 * Shows a bouncing arrow to indicate scrollable content
 */
const ScrollIndicator = (): JSX.Element => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-sm text-[rgb(var(--secondary))]">Scroll to explore</span>
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
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator; 