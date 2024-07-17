"use client";

import { useEffect, useState } from "react";

export function TypeWord() {
  const text = "I'm Apurva Narayan Pradhan";
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);
  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, 100);
    return () => clearInterval(typingEffect);
  }, [i]);
  return (
    <h1>{displayedText ? displayedText : "I'm Apurva Narayan Pradhan"}</h1>
  );
}
