"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTextProps {
  words: string[];
  className?: string;
}

export function AnimatedText({ words, className = "" }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [words.length]);

  const currentWord = words[currentIndex];
  const letters = currentWord.split("");

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.span
            key={currentIndex}
            className="inline-flex flex-wrap"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={`${currentIndex}-${index}`}
                className="inline-block"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                    rotateX: -90,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: {
                      duration: 0.4,
                      delay: index * 0.03,
                      ease: [0.215, 0.61, 0.355, 1],
                    },
                  },
                  exit: {
                    opacity: 0,
                    y: -20,
                    rotateX: 90,
                    transition: {
                      duration: 0.3,
                      delay: index * 0.02,
                    },
                  },
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.span>
        )}
      </AnimatePresence>
      <motion.span
        className="ml-2 inline-block h-2 w-2 rounded-full bg-primary"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </span>
  );
}

export function TextReveal({ children, className = "" }: { children: string; className?: string }) {
  const words = children.split(" ");

  return (
    <motion.span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block overflow-hidden"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </motion.span>
      ))}
    </motion.span>
  );
}

export function GlitchText({ children, className = "" }: { children: string; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative">
        {children}
        <motion.span
          className="absolute left-0 top-0 text-primary/50"
          animate={{
            x: [0, -2, 2, -1, 0],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          aria-hidden
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute left-0 top-0 text-destructive/50"
          animate={{
            x: [0, 2, -2, 1, 0],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 3,
            delay: 0.05,
          }}
          aria-hidden
        >
          {children}
        </motion.span>
      </span>
    </span>
  );
}

export function ScrambleText({ children, className = "" }: { children: string; className?: string }) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  useEffect(() => {
    let iteration = 0;
    const targetText = children;
    
    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return targetText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
        setIsComplete(true);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [children]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
      {!isComplete && (
        <motion.span
          className="ml-1 inline-block h-[1em] w-[3px] bg-primary"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </span>
  );
}
