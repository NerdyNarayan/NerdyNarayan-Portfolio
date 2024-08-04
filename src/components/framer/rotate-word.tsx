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
          animate={{ opacity: 1, y: 0 }}
          className="text-gradient bg-gradient-to-r bg-clip-text text-transparent  from-white  to-purple-400"
          exit={{ opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
