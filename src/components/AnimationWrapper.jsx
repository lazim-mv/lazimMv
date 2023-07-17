"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimationWrapper({ children }) {
//   const [ref, inView] = useInView({
//     triggerOnce: true, // Only trigger the animation once
//     threshold: 0.1, // Define the percentage of the element's visibility before triggering the animation
//   });

  return (
    <div>
      <motion.div>
        {children}
      </motion.div>
    </div>
  );
}

export default AnimationWrapper;
