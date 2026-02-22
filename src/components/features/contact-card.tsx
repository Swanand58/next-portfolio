"use client";

import { motion } from "framer-motion";
import { socialLinks, SocialLink } from "@/data/socials";
import posthog from "posthog-js";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function ContactCards() {
  const handleClick = (name: string) => {
    posthog.capture("Contact Link Clicked", { platform: name });
  };

  return (
    <motion.div
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((link: SocialLink) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick(link.name)}
          variants={cardVariants}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-border/50 bg-card/50 p-4 transition-all hover:border-primary/50 hover:bg-card"
        >
          <link.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
          <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
            {link.name}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
}
