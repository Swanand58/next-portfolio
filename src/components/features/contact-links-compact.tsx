"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const links = [
  { name: "GitHub", url: "https://github.com/Swanand58", icon: FaGithub },
  { name: "Twitter", url: "https://twitter.com/swanandkhonde_", icon: FaXTwitter },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/swanandkhonde/", icon: FaLinkedin },
  { name: "LeetCode", url: "https://leetcode.com/u/Swanand58/", icon: SiLeetcode },
  { name: "Email", url: "mailto:swanandkhonde1999@gmail.com", icon: FaEnvelope },
];

export function ContactLinksCompact() {
  return (
    <TooltipProvider>
      <div className="flex gap-2">
        {links.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" className="h-10 w-10" asChild>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
