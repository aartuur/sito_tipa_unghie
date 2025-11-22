import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  initial: {
    rotate: 0
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity
    }
  }
};

const dotVariants = {
  initial: {
    y: "0%"
  },
  animate: {
    y: ["0%", "-100%"], // Move up and then return
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseVariants = {
    initial: {
        scale: 0.8,
        opacity: 0.5
    },
    animate: {
        scale: 1.2,
        opacity: 1,
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.div
        className="w-24 h-24 relative flex items-center justify-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Central pulsating element */}
        <motion.div 
            className="absolute w-full h-full rounded-full bg-gradient-to-br from-rose-500 to-purple-500 opacity-70 filter blur-sm"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
        />
        <motion.div 
            className="absolute w-3/4 h-3/4 rounded-full bg-black flex items-center justify-center text-white text-lg font-bold"
            variants={pulseVariants} // Apply pulse to inner circle as well
            initial="initial"
            animate="animate"
        >
            {/* Optional: Text like "Loading..." */}
        </motion.div>

        {/* Orbiting dots */}
        <motion.div 
            className="absolute top-0 left-1/2 -ml-1 w-2 h-2 rounded-full bg-rose-300"
            variants={dotVariants}
            style={{ x: "-50%" }} // Center the dot
        />
         <motion.div 
            className="absolute bottom-0 left-1/2 -ml-1 w-2 h-2 rounded-full bg-purple-300"
            variants={dotVariants}
            style={{ x: "-50%", rotate: "180deg" }} // Rotate for opposite movement
        />
      </motion.div>
    </div>
  );
};

export default Loader;