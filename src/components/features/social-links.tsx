"use client";

import { socialLinks, SocialLink } from "@/data/socials";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import posthog from "posthog-js";

export function SocialLinks() {
  const handleSocialClick = (socialName: string): void => {
    posthog.capture("Social Link Clicked", {
      social: socialName,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <TooltipProvider>
      <motion.div 
        className="flex gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {socialLinks.map((link: SocialLink, index: number) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick(link.name)}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex h-14 w-14 items-center justify-center rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-card"
              >
                <link.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                <motion.span
                  className="absolute -bottom-1 left-1/2 h-1 w-1 rounded-full bg-primary"
                  initial={{ opacity: 0, x: "-50%" }}
                  whileHover={{ opacity: 1, width: "60%", x: "-50%" }}
                  transition={{ duration: 0.2 }}
                />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="font-medium">
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </motion.div>
    </TooltipProvider>
  );
}

// Contact page version with labels
export function ContactLinks() {
  return (
    <div className="flex flex-col gap-4">
      {socialLinks.map((link: SocialLink) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <link.icon className="h-8 w-8" />
          <span className="text-sm font-medium">
            {link.name === "Email" ? "Email me" : `Follow me on ${link.name}`}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
