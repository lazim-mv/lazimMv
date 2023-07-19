"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HeroAnimationWrapper({ children }) {
  const [ref, inView] = useInView({
    threshold: 0.1, // Define the percentage of the element's visibility before triggering the animation
  });

  // Use 'useEffect' to set the initial state on the client after hydration
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const variants = {
    hidden: {  }, // Initial state (hidden)
    visible: {  }, // Visible state with animation
  };

  return (
    <div ref={ref}>
      <motion.div
        key={isVisible ? "visible" : "hidden"} // Use different key to re-mount the component
        initial="hidden" // Set initial animation state to hidden
        animate={isVisible ? "visible" : "hidden"} // Use the 'visible' variant when in view, otherwise 'hidden'
        variants={variants} // Variants for the animation
      >
        {children}
      </motion.div>
    </div>
  );
}

export default HeroAnimationWrapper;
