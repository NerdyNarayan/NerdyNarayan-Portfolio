"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface RotateWordProps {
  words: string[];
  className: string;
}
export default function RotateWord(props: RotateWordProps) {
  const words = [...props.words];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={props.className}>
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-gradient bg-gradient-to-r bg-clip-text text-transparent from-primary to-purple-300"
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
