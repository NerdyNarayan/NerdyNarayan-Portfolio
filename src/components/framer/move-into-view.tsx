"use client";

import { AnimatePresence, motion } from "framer-motion";

interface MoveIntoViewProps {
  children: React.ReactElement;
  left?: boolean;
  right?: boolean;
  up?: boolean;
  down?: boolean;
}
export default function MoveIntoView(props: MoveIntoViewProps) {
  return (
    <AnimatePresence>
      {props.left && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
        >
          {props.children}
        </motion.div>
      )}
      {props.right && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
        >
          {props.children}
        </motion.div>
      )}
      {props.up && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {props.children}
        </motion.div>
      )}
      {props.down && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {props.children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
