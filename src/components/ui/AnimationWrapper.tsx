import React from 'react';
import { motion } from 'framer-motion';

interface AnimationWrapperProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string; // To allow passing additional classes
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ children, delay = 0, duration = 0.8, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // Animate once when 30% of the item is in view
      transition={{ delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
