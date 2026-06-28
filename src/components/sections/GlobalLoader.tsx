"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time for a premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated background rings */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute w-[600px] h-[600px] border border-[var(--color-primary)]/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360, scale: [1, 1.5, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-[800px] h-[800px] border border-[var(--color-secondary)]/20 rounded-full"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Hexagon Spinner */}
            <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 animate-spin-slow">
                <polygon 
                  points="50 1 95 25 95 75 50 99 5 75 5 25" 
                  fill="none" 
                  stroke="var(--color-primary)" 
                  strokeWidth="2"
                  strokeDasharray="100 200"
                  className="animate-dash"
                />
              </svg>
              <svg viewBox="0 0 100 100" className="w-16 h-16 absolute inset-0 m-auto animate-spin-slow-reverse">
                <polygon 
                  points="50 1 95 25 95 75 50 99 5 75 5 25" 
                  fill="none" 
                  stroke="var(--color-secondary)" 
                  strokeWidth="2"
                  strokeDasharray="50 100"
                  className="animate-dash"
                />
              </svg>
              <div className="w-3 h-3 bg-white rounded-full text-glow animate-pulse"></div>
            </div>

            <motion.h2 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl font-bold font-heading tracking-widest text-white text-glow mb-2"
            >
              INITIALIZING
            </motion.h2>
            
            <div className="w-48 h-1 bg-[var(--color-surface)] rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
